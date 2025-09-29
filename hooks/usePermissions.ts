import { useAuth } from '../contexts/AuthContext'

type UserRole = 'owner' | 'admin' | 'editor' | 'viewer'

export interface Permissions {
  canRead: boolean
  canWrite: boolean
  canDelete: boolean
  canManageUsers: boolean
  canManageSettings: boolean
  canPublish: boolean
  canAccessAnalytics: boolean
}

const rolePermissions: Record<UserRole, Permissions> = {
  owner: {
    canRead: true,
    canWrite: true,
    canDelete: true,
    canManageUsers: true,
    canManageSettings: true,
    canPublish: true,
    canAccessAnalytics: true,
  },
  admin: {
    canRead: true,
    canWrite: true,
    canDelete: true,
    canManageUsers: true,
    canManageSettings: false,
    canPublish: true,
    canAccessAnalytics: true,
  },
  editor: {
    canRead: true,
    canWrite: true,
    canDelete: false,
    canManageUsers: false,
    canManageSettings: false,
    canPublish: true,
    canAccessAnalytics: false,
  },
  viewer: {
    canRead: true,
    canWrite: false,
    canDelete: false,
    canManageUsers: false,
    canManageSettings: false,
    canPublish: false,
    canAccessAnalytics: false,
  },
}

export const usePermissions = (): Permissions => {
  const { profile } = useAuth()
  
  if (!profile || !profile.role) {
    return rolePermissions.viewer
  }
  
  return rolePermissions[profile.role]
}

export const useHasPermission = (permission: keyof Permissions): boolean => {
  const permissions = usePermissions()
  return permissions[permission]
}

export const useRequirePermission = (permission: keyof Permissions): boolean => {
  const hasPermission = useHasPermission(permission)
  
  if (!hasPermission) {
    throw new Error(`Access denied: Missing permission '${permission}'`)
  }
  
  return true
}