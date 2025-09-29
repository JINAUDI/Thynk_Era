// Environment configuration for ThynkEra Admin Panel

interface EnvConfig {
  supabaseUrl: string
  supabaseAnonKey: string
  environment: string
  isProduction: boolean
  isDevelopment: boolean
  suppressSetupWarnings: boolean
}

// Safe environment variable access
const getEnv = (key: string, defaultValue: string = ''): string => {
  if (typeof window !== 'undefined') {
    // In browser, environment variables are not available
    return defaultValue
  }
  
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || defaultValue
  }
  
  return defaultValue
}

// Environment configuration
export const env: EnvConfig = {
  supabaseUrl: getEnv('REACT_APP_SUPABASE_URL'),
  supabaseAnonKey: getEnv('REACT_APP_SUPABASE_ANON_KEY'), 
  environment: getEnv('NODE_ENV', 'development'),
  isProduction: getEnv('NODE_ENV') === 'production',
  isDevelopment: getEnv('NODE_ENV', 'development') === 'development',
  suppressSetupWarnings: getEnv('REACT_APP_SUPPRESS_SETUP_WARNINGS', 'false') === 'true'
}

// Configuration validation
export const isSupabaseConfigured = !!(env.supabaseUrl && env.supabaseAnonKey)

// Show helpful setup message only once and respect suppress flag
const hasShownSetupMessage = typeof window !== 'undefined' && (window as any).__supabaseSetupWarningShown

if (env.isDevelopment && !isSupabaseConfigured && !hasShownSetupMessage && !env.suppressSetupWarnings) {
  if (typeof window !== 'undefined') {
    (window as any).__supabaseSetupWarningShown = true
  }
  
  console.info(
    '💡 ThynkEra Admin Panel - Development Mode',
    '\n────────────────────────────────────────────',
    '\n✅ App is running successfully in development mode',
    '\n📋 To enable admin panel features, add to your .env file:',
    '\n   REACT_APP_SUPABASE_URL=your-supabase-project-url',
    '\n   REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key',
    '\n📖 See README-ADMIN.md for complete setup guide',
    '\n🔇 To suppress this message, set REACT_APP_SUPPRESS_SETUP_WARNINGS=true',
    '\n────────────────────────────────────────────'
  )
}