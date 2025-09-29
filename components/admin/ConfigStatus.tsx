import React from 'react'
import { AlertCircle, CheckCircle, Settings } from 'lucide-react'
import { Alert, AlertDescription } from '../ui/alert'
import { Badge } from '../ui/badge'
import { isSupabaseConfigured, env } from '../../config/env'

interface ConfigStatusProps {
  showInProduction?: boolean
}

export const ConfigStatus: React.FC<ConfigStatusProps> = ({ 
  showInProduction = false 
}) => {
  // Don't show in production unless explicitly requested
  if (env.isProduction && !showInProduction) {
    return null
  }

  return (
    <div className="space-y-3">
      {/* Supabase Configuration Status */}
      <Alert className={
        isSupabaseConfigured 
          ? "bg-green-500/20 border-green-500/50 text-green-300"
          : "bg-orange-500/20 border-orange-500/50 text-orange-300"
      }>
        {isSupabaseConfigured ? (
          <CheckCircle className="h-4 w-4" />
        ) : (
          <AlertCircle className="h-4 w-4" />
        )}
        <AlertDescription>
          <div className="flex items-center justify-between">
            <span>
              {isSupabaseConfigured ? 'Supabase Connected' : 'Supabase Not Configured'}
            </span>
            <Badge variant={isSupabaseConfigured ? 'default' : 'destructive'}>
              {isSupabaseConfigured ? 'Ready' : 'Setup Required'}
            </Badge>
          </div>
        </AlertDescription>
      </Alert>

      {/* Development Environment Info */}
      {env.isDevelopment && (
        <Alert className="bg-blue-500/20 border-blue-500/50 text-blue-300">
          <Settings className="h-4 w-4" />
          <AlertDescription>
            <strong>Development Mode</strong>
            <br />
            Environment: {env.environment}
            <br />
            {!isSupabaseConfigured && (
              <>
                Add your Supabase credentials to .env file to enable full functionality.
                <br />
                See README-ADMIN.md for setup instructions.
              </>
            )}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}