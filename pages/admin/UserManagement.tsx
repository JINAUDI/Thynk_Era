import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  UserPlus, 
  Edit, 
  Trash2, 
  Shield, 
  Eye,
  Clock,
  MoreVertical,
  Crown,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  lastLogin: string;
  avatar?: string;
  joinedDate: string;
}

interface ActivityLog {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  details: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@thynkera.com',
      role: 'Owner',
      status: 'Active',
      lastLogin: '2 hours ago',
      joinedDate: '2024-01-01'
    },
    {
      id: '2',
      name: 'Content Editor',
      email: 'editor@thynkera.com',
      role: 'Editor',
      status: 'Active',
      lastLogin: '1 day ago',
      joinedDate: '2024-01-15'
    },
    {
      id: '3',
      name: 'Design Reviewer',
      email: 'viewer@thynkera.com',
      role: 'Viewer',
      status: 'Active',
      lastLogin: '3 days ago',
      joinedDate: '2024-02-01'
    },
    {
      id: '4',
      name: 'Former Manager',
      email: 'former@thynkera.com',
      role: 'Editor',
      status: 'Inactive',
      lastLogin: '2 weeks ago',
      joinedDate: '2023-12-01'
    }
  ]);

  const [activityLogs] = useState<ActivityLog[]>([
    {
      id: '1',
      user: 'Admin User',
      action: 'Updated Hero section',
      timestamp: '2 hours ago',
      details: 'Modified main title and subtitle text'
    },
    {
      id: '2',
      user: 'Content Editor',
      action: 'Uploaded new images',
      timestamp: '4 hours ago',
      details: 'Added 5 images to gallery section'
    },
    {
      id: '3',
      user: 'Admin User',
      action: 'Created new user',
      timestamp: '1 day ago',
      details: 'Added Design Reviewer with Viewer role'
    },
    {
      id: '4',
      user: 'Content Editor',
      action: 'Modified testimonials',
      timestamp: '2 days ago',
      details: 'Updated student testimonial content'
    },
    {
      id: '5',
      user: 'Admin User',
      action: 'Disabled user account',
      timestamp: '1 week ago',
      details: 'Deactivated Former Manager account'
    }
  ]);

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Owner': return <Crown className="h-4 w-4" />;
      case 'Editor': return <Edit className="h-4 w-4" />;
      case 'Viewer': return <Eye className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Owner': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'Editor': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'Viewer': return 'bg-green-500/20 text-green-400 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusIcon = (status: string) => {
    return status === 'Active' 
      ? <CheckCircle className="h-4 w-4 text-green-400" />
      : <XCircle className="h-4 w-4 text-red-400" />;
  };

  const activeUsers = users.filter(user => user.status === 'Active').length;
  const totalUsers = users.length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-gray-400">Manage admin users, roles, and permissions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54]">
              <UserPlus className="mr-2 h-4 w-4" />
              Add New User
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#152238] border-[#FFD700]/20 text-white">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription className="text-gray-400">
                Create a new admin user account with appropriate permissions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter full name"
                    className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger className="bg-[#001F54]/50 border-[#FFD700]/30 text-white">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="editor">Editor - Can edit content and manage images</SelectItem>
                    <SelectItem value="viewer">Viewer - Can only view and preview content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-[#001F54]/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Role Permissions</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-[#FFD700]" />
                    <span>Editor: Full content management, image uploads, section controls</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-[#FFD700]" />
                    <span>Viewer: Read-only access, preview functionality only</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <Button variant="outline" className="border-[#FFD700]/50 text-white">Cancel</Button>
                <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-[#001F54]">Create User</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white">{totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-[#FFD700]" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Users</p>
                <p className="text-2xl font-bold text-white">{activeUsers}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Owners</p>
                <p className="text-2xl font-bold text-white">{users.filter(u => u.role === 'Owner').length}</p>
              </div>
              <Crown className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Editors</p>
                <p className="text-2xl font-bold text-white">{users.filter(u => u.role === 'Editor').length}</p>
              </div>
              <Edit className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="xl:col-span-2"
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-white">Admin Users</CardTitle>
              <CardDescription className="text-gray-400">
                Manage user accounts and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#FFD700]/20">
                    <TableHead className="text-gray-300">User</TableHead>
                    <TableHead className="text-gray-300">Role</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Last Login</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id} className="border-[#FFD700]/10">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-[#001F54]">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-gray-400 text-sm">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getRoleColor(user.role)}>
                          {getRoleIcon(user.role)}
                          <span className="ml-1">{user.role}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(user.status)}
                          <span className={user.status === 'Active' ? 'text-green-400' : 'text-red-400'}>
                            {user.status}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-300">{user.lastLogin}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-[#152238] border-[#FFD700]/20">
                            <DropdownMenuItem className="text-white hover:bg-white/10">
                              <Edit className="mr-2 h-4 w-4" />
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-white hover:bg-white/10">
                              <Shield className="mr-2 h-4 w-4" />
                              Change Role
                            </DropdownMenuItem>
                            {user.status === 'Active' ? (
                              <DropdownMenuItem className="text-yellow-400 hover:bg-yellow-500/20">
                                <XCircle className="mr-2 h-4 w-4" />
                                Deactivate
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem className="text-green-400 hover:bg-green-500/20">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Activate
                              </DropdownMenuItem>
                            )}
                            {user.role !== 'Owner' && (
                              <DropdownMenuItem className="text-red-400 hover:bg-red-500/20">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete User
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Log */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Activity Log
              </CardTitle>
              <CardDescription className="text-gray-400">
                Recent user actions and changes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activityLogs.map((log) => (
                <div key={log.id} className="flex space-x-3 p-3 bg-[#001F54]/30 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{log.action}</p>
                    <p className="text-gray-400 text-xs">by {log.user} • {log.timestamp}</p>
                    <p className="text-gray-500 text-xs mt-1">{log.details}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full border-[#FFD700]/50 text-[#FFD700] hover:bg-[#FFD700]/10">
                View Full Log
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Role Permissions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardHeader>
            <CardTitle className="text-white">Role Permissions</CardTitle>
            <CardDescription className="text-gray-400">
              Overview of what each role can access and modify
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-yellow-400" />
                  <h3 className="text-white font-medium">Owner</h3>
                </div>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>✓ Full system access</p>
                  <p>✓ User management</p>
                  <p>✓ Content editing</p>
                  <p>✓ Image management</p>
                  <p>✓ Section controls</p>
                  <p>✓ Settings & publishing</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Edit className="h-5 w-5 text-blue-400" />
                  <h3 className="text-white font-medium">Editor</h3>
                </div>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>✓ Content editing</p>
                  <p>✓ Image management</p>
                  <p>✓ Section controls</p>
                  <p>✓ Preview & publishing</p>
                  <p>✗ User management</p>
                  <p>✗ System settings</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-green-400" />
                  <h3 className="text-white font-medium">Viewer</h3>
                </div>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>✓ View content</p>
                  <p>✓ Preview changes</p>
                  <p>✗ Edit content</p>
                  <p>✗ Upload images</p>
                  <p>✗ Modify sections</p>
                  <p>✗ Publishing</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default UserManagement;