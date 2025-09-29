import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Settings as SettingsIcon, 
  Palette, 
  Globe, 
  Shield, 
  Upload,
  Save,
  RotateCcw,
  Image as ImageIcon,
  Type,
  Monitor,
  Smartphone,
  Search
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Slider } from '../../components/ui/slider';
import { Separator } from '../../components/ui/separator';

const Settings = () => {
  const [hasChanges, setHasChanges] = useState(false);
  const [settings, setSettings] = useState({
    // Site Settings
    siteName: 'ThynkEra',
    siteTagline: 'India\'s First Future-Ready Coaching Institute',
    siteDescription: 'Shaping India\'s future through innovative education and technology',
    siteKeywords: 'education, coaching, technology, innovation, india, thynkera',
    
    // Theme Settings
    primaryColor: '#FFD700',
    secondaryColor: '#FF6A00',
    backgroundColor: '#001F54',
    accentColor: '#0A3D91',
    fontFamily: 'Inter',
    fontSize: 16,
    
    // Logo & Branding
    logoUrl: '',
    faviconUrl: '',
    logoPosition: 'left',
    
    // Performance
    enableOptimization: true,
    enableCaching: true,
    enableCompression: true,
    enableLazyLoading: true,
    
    // SEO
    enableSEO: true,
    googleAnalytics: '',
    googleTagManager: '',
    metaRobots: 'index, follow',
    
    // Social Media
    facebookUrl: '',
    twitterUrl: '',
    linkedinUrl: '',
    instagramUrl: '',
    
    // Contact
    contactEmail: 'contact@thynkera.com',
    contactPhone: '+91 XXXXX XXXXX',
    address: 'ThynkEra Headquarters, India'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Save settings logic here
    console.log('Saving settings:', settings);
    setHasChanges(false);
  };

  const handleReset = () => {
    // Reset to default settings
    setHasChanges(false);
  };

  const colorPresets = [
    { name: 'ThynkEra Gold', primary: '#FFD700', secondary: '#FF6A00', background: '#001F54' },
    { name: 'Ocean Blue', primary: '#0077BE', secondary: '#00A8CC', background: '#001B3D' },
    { name: 'Forest Green', primary: '#228B22', secondary: '#32CD32', background: '#0B1A0B' },
    { name: 'Sunset Orange', primary: '#FF6B35', secondary: '#F7931E', background: '#2D1B13' },
    { name: 'Royal Purple', primary: '#6A0DAD', secondary: '#9370DB', background: '#1A0B2E' }
  ];

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
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Configure site appearance, SEO, and global settings</p>
        </div>
        {hasChanges && (
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={handleReset} className="border-[#FFD700]/50 text-white hover:bg-[#FFD700]/10">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button onClick={handleSave} className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54]">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-[#152238] border border-[#FFD700]/20">
            <TabsTrigger value="general" className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#001F54]">
              <SettingsIcon className="mr-2 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="theme" className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#001F54]">
              <Palette className="mr-2 h-4 w-4" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="seo" className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#001F54]">
              <Search className="mr-2 h-4 w-4" />
              SEO
            </TabsTrigger>
            <TabsTrigger value="advanced" className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#001F54]">
              <Shield className="mr-2 h-4 w-4" />
              Advanced
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Site Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Basic information about your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => handleSettingChange('siteName', e.target.value)}
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteTagline">Site Tagline</Label>
                    <Input
                      id="siteTagline"
                      value={settings.siteTagline}
                      onChange={(e) => handleSettingChange('siteTagline', e.target.value)}
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => handleSettingChange('siteDescription', e.target.value)}
                    className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Logo & Branding</CardTitle>
                <CardDescription className="text-gray-400">
                  Upload and configure your site logo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Main Logo</Label>
                    <div className="border-2 border-dashed border-[#FFD700]/30 rounded-lg p-6 text-center hover:border-[#FFD700]/50 transition-colors cursor-pointer">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-gray-300 text-sm">Drop logo here or click to upload</p>
                      <p className="text-gray-500 text-xs">PNG, SVG up to 2MB</p>
                    </div>
                  </div>
                  <div>
                    <Label>Favicon</Label>
                    <div className="border-2 border-dashed border-[#FFD700]/30 rounded-lg p-6 text-center hover:border-[#FFD700]/50 transition-colors cursor-pointer">
                      <ImageIcon className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-gray-300 text-sm">Drop favicon here or click to upload</p>
                      <p className="text-gray-500 text-xs">ICO, PNG 32x32px</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="logoPosition">Logo Position</Label>
                  <Select value={settings.logoPosition} onValueChange={(value) => handleSettingChange('logoPosition', value)}>
                    <SelectTrigger className="bg-[#001F54]/50 border-[#FFD700]/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Contact details displayed on your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => handleSettingChange('contactEmail', e.target.value)}
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input
                      id="contactPhone"
                      value={settings.contactPhone}
                      onChange={(e) => handleSettingChange('contactPhone', e.target.value)}
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={settings.address}
                    onChange={(e) => handleSettingChange('address', e.target.value)}
                    className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Theme Settings */}
          <TabsContent value="theme" className="space-y-6">
            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Color Scheme</CardTitle>
                <CardDescription className="text-gray-400">
                  Customize your site's color palette
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-white mb-3 block">Color Presets</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {colorPresets.map((preset, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors"
                        onClick={() => {
                          handleSettingChange('primaryColor', preset.primary);
                          handleSettingChange('secondaryColor', preset.secondary);
                          handleSettingChange('backgroundColor', preset.background);
                        }}
                      >
                        <div className="flex space-x-1">
                          <div 
                            className="w-4 h-4 rounded" 
                            style={{ backgroundColor: preset.primary }}
                          />
                          <div 
                            className="w-4 h-4 rounded" 
                            style={{ backgroundColor: preset.secondary }}
                          />
                          <div 
                            className="w-4 h-4 rounded" 
                            style={{ backgroundColor: preset.background }}
                          />
                        </div>
                        <span className="text-white text-sm">{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Separator className="bg-[#FFD700]/20" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="primaryColor">Primary Color</Label>
                      <div className="flex space-x-3">
                        <Input
                          id="primaryColor"
                          type="color"
                          value={settings.primaryColor}
                          onChange={(e) => handleSettingChange('primaryColor', e.target.value)}
                          className="w-20 h-10 p-1 bg-[#001F54]/50 border-[#FFD700]/30"
                        />
                        <Input
                          value={settings.primaryColor}
                          onChange={(e) => handleSettingChange('primaryColor', e.target.value)}
                          className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="secondaryColor">Secondary Color</Label>
                      <div className="flex space-x-3">
                        <Input
                          id="secondaryColor"
                          type="color"
                          value={settings.secondaryColor}
                          onChange={(e) => handleSettingChange('secondaryColor', e.target.value)}
                          className="w-20 h-10 p-1 bg-[#001F54]/50 border-[#FFD700]/30"
                        />
                        <Input
                          value={settings.secondaryColor}
                          onChange={(e) => handleSettingChange('secondaryColor', e.target.value)}
                          className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="backgroundColor">Background Color</Label>
                      <div className="flex space-x-3">
                        <Input
                          id="backgroundColor"
                          type="color"
                          value={settings.backgroundColor}
                          onChange={(e) => handleSettingChange('backgroundColor', e.target.value)}
                          className="w-20 h-10 p-1 bg-[#001F54]/50 border-[#FFD700]/30"
                        />
                        <Input
                          value={settings.backgroundColor}
                          onChange={(e) => handleSettingChange('backgroundColor', e.target.value)}
                          className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="accentColor">Accent Color</Label>
                      <div className="flex space-x-3">
                        <Input
                          id="accentColor"
                          type="color"
                          value={settings.accentColor}
                          onChange={(e) => handleSettingChange('accentColor', e.target.value)}
                          className="w-20 h-10 p-1 bg-[#001F54]/50 border-[#FFD700]/30"
                        />
                        <Input
                          value={settings.accentColor}
                          onChange={(e) => handleSettingChange('accentColor', e.target.value)}
                          className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Typography</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure fonts and text settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fontFamily">Font Family</Label>
                    <Select value={settings.fontFamily} onValueChange={(value) => handleSettingChange('fontFamily', value)}>
                      <SelectTrigger className="bg-[#001F54]/50 border-[#FFD700]/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Inter">Inter</SelectItem>
                        <SelectItem value="Poppins">Poppins</SelectItem>
                        <SelectItem value="Roboto">Roboto</SelectItem>
                        <SelectItem value="Open Sans">Open Sans</SelectItem>
                        <SelectItem value="Lato">Lato</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fontSize">Base Font Size: {settings.fontSize}px</Label>
                    <Slider
                      id="fontSize"
                      min={12}
                      max={20}
                      step={1}
                      value={[settings.fontSize]}
                      onValueChange={(value) => handleSettingChange('fontSize', value[0])}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Settings */}
          <TabsContent value="seo" className="space-y-6">
            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Search Engine Optimization</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure SEO settings and meta tags
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.enableSEO}
                    onCheckedChange={(checked) => handleSettingChange('enableSEO', checked)}
                  />
                  <Label>Enable SEO Optimization</Label>
                </div>
                
                <div>
                  <Label htmlFor="siteKeywords">Meta Keywords</Label>
                  <Input
                    id="siteKeywords"
                    value={settings.siteKeywords}
                    onChange={(e) => handleSettingChange('siteKeywords', e.target.value)}
                    placeholder="education, coaching, technology..."
                    className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                  />
                  <p className="text-gray-500 text-xs mt-1">Separate keywords with commas</p>
                </div>

                <div>
                  <Label htmlFor="metaRobots">Meta Robots</Label>
                  <Select value={settings.metaRobots} onValueChange={(value) => handleSettingChange('metaRobots', value)}>
                    <SelectTrigger className="bg-[#001F54]/50 border-[#FFD700]/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="index, follow">Index, Follow</SelectItem>
                      <SelectItem value="index, nofollow">Index, No Follow</SelectItem>
                      <SelectItem value="noindex, follow">No Index, Follow</SelectItem>
                      <SelectItem value="noindex, nofollow">No Index, No Follow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Analytics & Tracking</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure Google Analytics and other tracking services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                  <Input
                    id="googleAnalytics"
                    value={settings.googleAnalytics}
                    onChange={(e) => handleSettingChange('googleAnalytics', e.target.value)}
                    placeholder="G-XXXXXXXXXX"
                    className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="googleTagManager">Google Tag Manager ID</Label>
                  <Input
                    id="googleTagManager"
                    value={settings.googleTagManager}
                    onChange={(e) => handleSettingChange('googleTagManager', e.target.value)}
                    placeholder="GTM-XXXXXXX"
                    className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Social Media Links</CardTitle>
                <CardDescription className="text-gray-400">
                  Add your social media profiles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="facebookUrl">Facebook URL</Label>
                    <Input
                      id="facebookUrl"
                      value={settings.facebookUrl}
                      onChange={(e) => handleSettingChange('facebookUrl', e.target.value)}
                      placeholder="https://facebook.com/thynkera"
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitterUrl">Twitter URL</Label>
                    <Input
                      id="twitterUrl"
                      value={settings.twitterUrl}
                      onChange={(e) => handleSettingChange('twitterUrl', e.target.value)}
                      placeholder="https://twitter.com/thynkera"
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                    <Input
                      id="linkedinUrl"
                      value={settings.linkedinUrl}
                      onChange={(e) => handleSettingChange('linkedinUrl', e.target.value)}
                      placeholder="https://linkedin.com/company/thynkera"
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instagramUrl">Instagram URL</Label>
                    <Input
                      id="instagramUrl"
                      value={settings.instagramUrl}
                      onChange={(e) => handleSettingChange('instagramUrl', e.target.value)}
                      placeholder="https://instagram.com/thynkera"
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Advanced Settings */}
          <TabsContent value="advanced" className="space-y-6">
            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Performance Optimization</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure performance and optimization settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.enableOptimization}
                      onCheckedChange={(checked) => handleSettingChange('enableOptimization', checked)}
                    />
                    <Label>Enable Image Optimization</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.enableCaching}
                      onCheckedChange={(checked) => handleSettingChange('enableCaching', checked)}
                    />
                    <Label>Enable Browser Caching</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.enableCompression}
                      onCheckedChange={(checked) => handleSettingChange('enableCompression', checked)}
                    />
                    <Label>Enable GZIP Compression</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.enableLazyLoading}
                      onCheckedChange={(checked) => handleSettingChange('enableLazyLoading', checked)}
                    />
                    <Label>Enable Lazy Loading</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Responsive Design</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure responsive breakpoints and mobile settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#001F54]/30 rounded-lg">
                    <Monitor className="mx-auto h-8 w-8 text-[#FFD700] mb-2" />
                    <p className="text-white font-medium">Desktop</p>
                    <p className="text-gray-400 text-sm">1024px+</p>
                  </div>
                  <div className="text-center p-4 bg-[#001F54]/30 rounded-lg">
                    <Monitor className="mx-auto h-6 w-6 text-[#FFD700] mb-2" />
                    <p className="text-white font-medium">Tablet</p>
                    <p className="text-gray-400 text-sm">768px - 1023px</p>
                  </div>
                  <div className="text-center p-4 bg-[#001F54]/30 rounded-lg">
                    <Smartphone className="mx-auto h-8 w-8 text-[#FFD700] mb-2" />
                    <p className="text-white font-medium">Mobile</p>
                    <p className="text-gray-400 text-sm">320px - 767px</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#152238] border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Backup & Security</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure backup and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#001F54]/30 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Automatic Backups</p>
                    <p className="text-gray-400 text-sm">Create daily backups of your content</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-[#001F54]/30 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Two-Factor Authentication</p>
                    <p className="text-gray-400 text-sm">Require 2FA for admin access</p>
                  </div>
                  <Switch />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-[#001F54]">
                  Create Manual Backup
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Settings;