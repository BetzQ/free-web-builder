export default function BackendBuilder() {
  const features = [
    'JWT Access + Refresh Rotation', 'OAuth2 Google/GitHub', 'RBAC (Admin/Manager/Staff/User)',
    'Rate Limit Sliding Window', 'CORS Strict', 'CSRF Protection', 'CSP Headers',
    'Argon2id Password Hash', 'AES-256-GCM Sensitive Data', 'Audit Trail Logging'
  ];
  
  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10">
      <h3 className="font-heading text-xl font-bold mb-4">Backend Security Builder</h3>
      <div className="grid grid-cols-2 gap-2">
        {features.map(f => (
          <div key={f} className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-medium dark:bg-white/5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {f}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border bg-card p-3 text-xs font-mono text-muted-foreground">
        Arsitektur: Modular Monolith / Clean Hexagonal / Serverless Edge
      </div>
    </div>
  );
}