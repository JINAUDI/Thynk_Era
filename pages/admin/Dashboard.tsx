import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  FileText, 
  Images, 
  Calendar,
  Eye,
  TrendingUp,
  Clock,
  Star,
  ArrowUpRight,
  Plus
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { useAuth } from '../../contexts/AuthContext';
import { usePermissions } from '../../hooks/usePermissions';
import { Link } from 'react-router-dom';

interface DashboardStats {
  pages: { total: number; published: number; drafts: number };
  assets: { total: number; size: string };
  events: { total: number; upcoming: number };
  registrations: { total: number; pending: number };
  testimonials: { total: number; published: number };
  users: { total: number; active: number };
}

const Dashboard = () => {
  const { profile } = useAuth();
  const permissions = usePermissions();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock data for now - replace with real API calls
  useEffect(() => {
    const fetchStats = async () => {
      // Simulate API call
      setTimeout(() => {
        setStats({
          pages: { total: 12, published: 8, drafts: 4 },
          assets: { total: 156, size: '2.3 GB' },
          events: { total: 8, upcoming: 3 },
          registrations: { total: 247, pending: 15 },
          testimonials: { total: 24, published: 18 },
          users: { total: 5, active: 4 }
        });
        setLoading(false);
      }, 1000);
    };

    fetchStats();
  }, []);

  const quickActions = [
    {
      title: 'Create New Page',
      description: 'Add a new page to your website',
      icon: FileText,
      href: '/admin/pages/new',
      color: 'from-blue-500 to-blue-600',
      show: permissions.canWrite
    },
    {
      title: 'Upload Assets',
      description: 'Add images and media files',
      icon: Images,
      href: '/admin/assets',
      color: 'from-green-500 to-green-600',
      show: permissions.canWrite
    },
    {
      title: 'Create Event',
      description: 'Set up a new event',
      icon: Calendar,
      href: '/admin/events/new',
      color: 'from-purple-500 to-purple-600',
      show: permissions.canWrite
    },
    {
      title: 'Manage Users',
      description: 'Invite and manage team members',
      icon: Users,
      href: '/admin/users',
      color: 'from-orange-500 to-orange-600',
      show: permissions.canManageUsers
    }
  ].filter(action => action.show);

  const recentActivity = [
    {
      action: 'Page published',
      item: 'About Us',
      user: 'John Doe',
      time: '2 hours ago',
      type: 'success'
    },
    {
      action: 'New registration',
      item: 'SPARK Event',
      user: 'Jane Smith',
      time: '4 hours ago',
      type: 'info'
    },
    {
      action: 'Image uploaded',
      item: 'hero-banner.jpg',
      user: 'Admin',
      time: '1 day ago',
      type: 'neutral'
    },
    {
      action: 'Testimonial added',
      item: 'Customer Review',
      user: 'Sarah Wilson',
      time: '2 days ago',
      type: 'success'
    }
  ];

  if (loading) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="bg-[#152238] border-[#FFD700]/20">
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-gray-600 rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, {profile?.full_name || 'Admin'}
            </h1>
            <p className="text-gray-400">
              Here's what's happening with your website today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              {profile?.role.charAt(0).toUpperCase() + profile?.role.slice(1)}
            </Badge>
            <Link to="/" target="_blank">
              <Button variant="outline" className="border-[#FFD700]/50 text-white hover:bg-[#FFD700]/10">
                <Eye className="mr-2 h-4 w-4" />
                View Site
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats && [
          {
            title: 'Total Pages',
            value: stats.pages.total,
            change: `${stats.pages.published} published`,
            icon: FileText,
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/20'
          },
          {
            title: 'Media Assets',
            value: stats.assets.total,
            change: stats.assets.size,
            icon: Images,
            color: 'text-green-400',
            bgColor: 'bg-green-500/20'
          },
          {
            title: 'Events',
            value: stats.events.total,
            change: `${stats.events.upcoming} upcoming`,
            icon: Calendar,
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/20'
          },
          {
            title: 'Registrations',
            value: stats.registrations.total,
            change: `${stats.registrations.pending} pending`,
            icon: Users,
            color: 'text-orange-400',
            bgColor: 'bg-orange-500/20'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#152238] border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.change}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription className="text-gray-400">
                Common tasks to get you started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <Link key={action.title} to={action.href}>
                    <div className="group p-4 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-200 hover:bg-[#FFD700]/5 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color}`}>
                          <action.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white group-hover:text-[#FFD700] transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-sm text-gray-400">{action.description}</p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-[#FFD700] transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-gray-400">
                Latest updates and changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-400' :
                      activity.type === 'info' ? 'bg-blue-400' :
                      'bg-gray-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-400">{activity.item}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Performance Overview */}
      {stats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-white">Content Overview</CardTitle>
              <CardDescription className="text-gray-400">
                Progress on your website content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Pages Published</span>
                    <span className="text-white">{Math.round((stats.pages.published / stats.pages.total) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(stats.pages.published / stats.pages.total) * 100} 
                    className="h-2 bg-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Testimonials Published</span>
                    <span className="text-white">{Math.round((stats.testimonials.published / stats.testimonials.total) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(stats.testimonials.published / stats.testimonials.total) * 100} 
                    className="h-2 bg-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Event Registrations</span>
                    <span className="text-white">{Math.round(((stats.registrations.total - stats.registrations.pending) / stats.registrations.total) * 100)}%</span>
                  </div>
                  <Progress 
                    value={((stats.registrations.total - stats.registrations.pending) / stats.registrations.total) * 100} 
                    className="h-2 bg-gray-700"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;