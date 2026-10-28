import presets from '@/data/presets-database.json';

export default function DatabaseBuilder() {
  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10">
      <h3 className="font-heading text-xl font-bold mb-4">Database Visual Designer</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {presets.presets.map(p => (
          <button key={p.id} className="rounded-xl border bg-card hover:border-primary hover:shadow-md transition-all text-left p-3 text-sm dark:border-white/10">
            <div className="font-bold">{p.name}</div>
            <div className="text-xs text-muted-foreground">{p.category} · {p.dialect.toUpperCase()}</div>
            <div className="text-xs text-muted-foreground mt-1">{p.tables.length} tabel</div>
          </button>
        ))}
      </div>
      <div className="rounded-lg border bg-muted p-3 text-xs font-mono dark:bg-white/5">
        SELECT * FROM users JOIN orders ON users.id = orders.user_id;
      </div>
    </div>
  );
}