import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Shield,
  ArrowRight,
  AlertCircle,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { user, signIn, isConfigured } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!isConfigured) {
      setError('Admin panel is not configured yet. Please set up Supabase first.');
      setLoading(false);
      return;
    }

    try {
      const { error } = await signIn(formData.email, formData.password);
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          setError('Invalid email or password');
        } else if (error.message.includes('Email not confirmed')) {
          setError('Please check your email and confirm your account');
        } else {
          setError(error.message || 'An error occurred during login');
        }
      } else {
        // Success - the useEffect will handle redirect
        navigate('/admin');
      }
    } catch (err: any) {
      setError('An unexpected error occurred');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleMagicLink = async () => {
    if (!formData.email) {
      setError('Please enter your email address first');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // For now, show a message about magic link (implement later)
      setError('Magic link login will be implemented soon. Please use password login.');
    } catch (err) {
      setError('Failed to send magic link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F54] via-[#0A3D91] to-[#152238] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo Section */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-[#FFD700] to-[#FF6A00] mb-4"
          >
            <Shield className="h-8 w-8 text-[#001F54]" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">ThynkEra Admin</h1>
          <p className="text-gray-400">Sign in to manage your website</p>
        </div>

        {/* Configuration Warning */}
        {!isConfigured && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Alert className="bg-orange-500/20 border-orange-500/50 text-orange-300">
              <Settings className="h-4 w-4" />
              <AlertDescription>
                <strong>Setup Required:</strong> The admin panel needs to be configured with Supabase.
                <br />Please check the README-ADMIN.md file for setup instructions.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <Card className="bg-[#152238]/80 backdrop-blur-xl border-[#FFD700]/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-xl">Welcome Back</CardTitle>
            <CardDescription className="text-gray-400">
              {isConfigured ? 
                'Enter your credentials to access the admin panel' :
                'Complete setup first, then sign in here'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert className="bg-red-500/20 border-red-500/50 text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your-email@example.com"
                      className="pl-10 bg-[#001F54]/50 border-[#FFD700]/30 text-white placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]"
                      required
                      disabled={!isConfigured}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 bg-[#001F54]/50 border-[#FFD700]/30 text-white placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]"
                      required
                      disabled={!isConfigured}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      disabled={!isConfigured}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => handleChange('rememberMe', checked)}
                  className="border-[#FFD700]/50 text-[#FFD700]"
                  disabled={!isConfigured}
                />
                <Label htmlFor="rememberMe" className="text-gray-300 text-sm">
                  Remember me for 30 days
                </Label>
              </div>

              <Button
                type="submit"
                disabled={loading || !isConfigured}
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-semibold py-3 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-[#001F54]/30 border-t-[#001F54] rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>{isConfigured ? 'Sign In' : 'Setup Required'}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>

            {isConfigured && (
              <div className="mt-6 pt-6 border-t border-[#FFD700]/20">
                <div className="text-center space-y-3">
                  <button 
                    onClick={handleMagicLink}
                    className="text-[#FFD700] hover:text-[#FFB400] text-sm font-medium transition-colors"
                    disabled={loading}
                  >
                    Send Magic Link Instead
                  </button>
                  <p className="text-gray-500 text-xs">
                    Don't have an account? Contact your administrator.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        {!isConfigured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 p-4 bg-[#152238]/50 backdrop-blur-lg border border-[#FFD700]/20 rounded-lg"
          >
            <h3 className="text-white font-medium text-sm mb-2">Quick Setup:</h3>
            <div className="space-y-1 text-xs text-gray-400">
              <p>1. Create a Supabase project</p>
              <p>2. Run the database migrations</p>
              <p>3. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY</p>
              <p>4. Restart the development server</p>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2024 ThynkEra. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;