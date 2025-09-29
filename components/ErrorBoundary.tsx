import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error }>;
}

const DefaultErrorFallback = ({ error }: { error?: Error }) => (
  <div className="min-h-screen bg-[#001F54] flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        We're sorry, but there seems to be an issue loading this page.
      </p>
      {error && (
        <details className="text-left bg-[#152238] p-4 rounded-lg mb-6">
          <summary className="text-[#FFD700] cursor-pointer mb-2">Error details</summary>
          <pre className="text-sm text-gray-300 overflow-auto">
            {error.message}
            {error.stack && '\n\n' + error.stack}
          </pre>
        </details>
      )}
      <button
        onClick={() => window.location.href = '/'}
        className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Go Home
      </button>
    </div>
  </div>
);

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;