import React, { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  FileText, 
  Images, 
  Settings, 
  Users, 
  Eye, 
  Upload,
  Menu,
  X,
  LogOut,
  Layers,
  Navigation,
  Calendar,
  MessageSquare,
  BarChart3
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { useAuth } from '../../contexts/AuthContext';
import { usePermissions } from '../../hooks/usePermissions';
import { Badge } from '../../components/ui/badge';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut, loading } = useAuth();
  const permissions = usePermissions();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-[#001F54] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700] mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user || !profile) {
    return <Navigate to="/admin/login" replace />;
  }

  // Check if user has admin access
  if (!['owner', 'admin', 'editor'].includes(profile.role)) {
    return (
      <div className="min-h-screen bg-[#001F54] flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-300 mb-6">
            You don't have permission to access the admin panel.
          </p>
          <Button onClick={() => signOut()} variant="outline">
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
      exact: true,
      show: true
    },
    {
      name: 'Pages',
      href: '/admin/pages',
      icon: FileText,
      show: permissions.canRead
    },
    {
      name: 'Assets',
      href: '/admin/assets',
      icon: Images,
      show: permissions.canRead
    },
    {
      name: 'Events',
      href: '/admin/events',
      icon: Calendar,
      show: permissions.canRead
    },
    {
      name: 'Registrations',
      href: '/admin/registrations',
      icon: Users,
      show: permissions.canRead
    },
    {
      name: 'Testimonials',
      href: '/admin/testimonials',
      icon: MessageSquare,
      show: permissions.canRead
    },
    {
      name: 'Analytics',
      href: '/admin/analytics',
      icon: BarChart3,
      show: permissions.canAccessAnalytics
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: Users,
      show: permissions.canManageUsers
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      show: permissions.canManageSettings || permissions.canRead
    }
  ].filter(item => item.show);

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'owner':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'admin':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'editor':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#001F54] flex">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#152238] backdrop-blur-xl border-r border-[#FFD700]/20 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        {/* Logo Section */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-[#FFD700]/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FF6A00] flex items-center justify-center">
              <span className="text-[#001F54] font-bold text-sm">T</span>
            </div>
            <span className="text-white font-bold text-lg">ThynkEra Admin</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`
                flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive(item.href, item.exact)
                  ? 'bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-[#001F54] shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                }
              `}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-[#FFD700]/20">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar>
              <AvatarImage src={profile.avatar_url || ''} />
              <AvatarFallback className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-[#001F54]">
                {profile.full_name ? profile.full_name.split(' ').map(n => n[0]).join('') : profile.email.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm truncate">
                {profile.full_name || 'Admin User'}
              </p>
              <Badge className={`text-xs ${getRoleBadgeColor(profile.role)}`}>
                {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10"
            onClick={handleSignOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top Bar */}
        <header className="h-16 bg-[#0A3D91]/50 backdrop-blur-xl border-b border-[#FFD700]/20 flex items-center justify-between px-6">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-4">
            <Link to="/" target="_blank">
              <Button variant="outline" className="border-[#FFD700]/50 text-white hover:bg-[#FFD700]/10">
                <Eye className="mr-2 h-4 w-4" />
                Preview Site
              </Button>
            </Link>
            
            {permissions.canPublish && (
              <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54]">
                <Upload className="mr-2 h-4 w-4" />
                Publish Changes
              </Button>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;