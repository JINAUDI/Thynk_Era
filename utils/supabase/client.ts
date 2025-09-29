import { createClient } from '@supabase/supabase-js'
import { Database } from './types'
import { env, isSupabaseConfigured } from '../../config/env'

// Use real config if available, otherwise use safe defaults for development
const supabaseUrl = env.supabaseUrl || 'https://placeholder.supabase.co'
const supabaseAnonKey = env.supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Export configuration status
export { isSupabaseConfigured }