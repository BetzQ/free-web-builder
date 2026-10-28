import { Component, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; errorMsg: string; }

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }
  static getDerivedStateFromError(error: any): State {
    return { hasError: true, errorMsg: (error && error.message) ? error.message : 'Unknown error' };
  }
  componentDidCatch(error: any, info: any) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4 gradient-text">Studio Crash</h2>
          <p className="text-muted-foreground mb-2">Terjadi kesalahan saat merender Studio Pembangun Web.</p>
          <pre className="bg-card border rounded-xl p-4 text-xs font-mono text-destructive mb-6 max-w-xl overflow-auto">{this.state.errorMsg}</pre>
          <button onClick={() => { this.setState({ hasError: false, errorMsg: '' }); window.location.reload(); }} className="btn btn-primary text-base px-6 py-3 shadow-glow">Muat Ulang Studio</button>
          <p className="text-xs text-muted-foreground mt-4">Jika masalah terus berlanjut, coba buka kembali halaman atau bersihkan cache browser.</p>
        </div>
      );
    }
    return this.props.children;
  }
}