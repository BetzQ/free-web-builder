export interface SQLConfig {
  dialect: 'postgresql' | 'mysql' | 'sqlite' | 'sqlserver' | 'supabase';
  tables: string[];
  rls: boolean;
  softDelete: boolean;
  auditTrail: boolean;
  seedData: boolean;
}

export function compileSQL(config: SQLConfig): string {
  const header = `-- ============================================
-- Free Web Builder - Database Full SQL
-- Dialek: ${config.dialect.toUpperCase()}
-- Status: Siap Import (Self-Contained Single File)
-- Dibuat oleh Karya Anak Bangsa Indonesia
-- ============================================
`;
  
  const setup = config.dialect === 'postgresql' || config.dialect === 'supabase'
    ? 'BEGIN;\nCREATE EXTENSION IF NOT EXISTS "uuid-ossp";\nCREATE EXTENSION IF NOT EXISTS "pgcrypto";'
    : config.dialect === 'mysql'
    ? 'SET FOREIGN_KEY_CHECKS = 0;\nSET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";\nSTART TRANSACTION;'
    : 'PRAGMA foreign_keys = ON;';

  const cleanUp = `DROP TABLE IF EXISTS users CASCADE;\nDROP TABLE IF EXISTS orders CASCADE;\nDROP TABLE IF EXISTS products CASCADE;`;

  const ddl = config.tables.map(t => `CREATE TABLE IF NOT EXISTS ${t} (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP);`).join('\n');

  const index = `CREATE INDEX idx_users_email ON users(email);`;

  const rlsBlock = config.rls ? `ALTER TABLE users ENABLE ROW LEVEL SECURITY; CREATE POLICY user_isolation ON users FOR SELECT USING (auth.uid() = user_id);` : '';

  const seed = config.seedData ? `INSERT INTO users (id, email) VALUES (gen_random_uuid(), 'admin@freeweb.local');` : '';

  const commit = config.dialect === 'postgresql' || config.dialect === 'supabase' ? 'COMMIT;' : 'COMMIT;';

  return [header, setup, cleanUp, ddl, index, rlsBlock, seed, commit].filter(Boolean).join('\n\n');
}