import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Eye, 
  EyeOff, 
  GripVertical, 
  Settings, 
  ArrowUp,
  ArrowDown,
  ExternalLink,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

interface Section {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  order: number;
  location: 'landing' | 'separate';
  url?: string;
  hasSettings: boolean;
  dependencies?: string[];
}

const SectionControls = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 'hero',
      name: 'Hero Section',
      description: 'Main landing page banner with title and call-to-action',
      enabled: true,
      order: 1,
      location: 'landing',
      hasSettings: true
    },
    {
      id: 'about',
      name: 'About ThynkEra',
      description: 'Introduction and overview of ThynkEra',
      enabled: true,
      order: 2,
      location: 'landing',
      hasSettings: true
    },
    {
      id: 'gallery',
      name: 'Gallery Preview',
      description: 'Preview of images and gallery content',
      enabled: true,
      order: 3,
      location: 'landing',
      hasSettings: true
    },
    {
      id: 'target-audience',
      name: 'Target Audience',
      description: 'Information for different user types',
      enabled: true,
      order: 4,
      location: 'landing',
      hasSettings: true
    },
    {
      id: 'programs',
      name: 'Programs Overview',
      description: 'Overview of available programs and courses',
      enabled: false,
      order: 5,
      location: 'separate',
      url: '/programs',
      hasSettings: true
    },
    {
      id: 'testimonials',
      name: 'Student Testimonials',
      description: 'Success stories and student feedback',
      enabled: false,
      order: 6,
      location: 'separate',
      url: '/testimonials',
      hasSettings: true
    },
    {
      id: 'vision',
      name: 'Vision & Mission',
      description: 'ThynkEra\'s vision and mission statement',
      enabled: false,
      order: 7,
      location: 'separate',
      url: '/vision',
      hasSettings: true
    },
    {
      id: 'why-thynkera',
      name: 'Why Choose ThynkEra',
      description: 'Unique selling points and advantages',
      enabled: false,
      order: 8,
      location: 'separate',
      url: '/why-thynkera',
      hasSettings: true
    },
    {
      id: 'web-app',
      name: 'Web Application Demo',
      description: 'Interactive demonstration of web applications',
      enabled: false,
      order: 9,
      location: 'separate',
      url: '/web-app',
      hasSettings: true
    },
    {
      id: 'spark',
      name: 'SPARK Events',
      description: 'Upcoming events and activities',
      enabled: false,
      order: 10,
      location: 'separate',
      url: '/spark',
      hasSettings: true
    },
    {
      id: 'future-roadmap',
      name: 'Future Roadmap',
      description: 'Timeline and future plans for ThynkEra',
      enabled: false,
      order: 11,
      location: 'separate',
      url: '/future-roadmap',
      hasSettings: true
    }
  ]);

  const toggleSection = (sectionId: string) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, enabled: !section.enabled }
        : section
    ));
  };

  const moveSectionUp = (sectionId: string) => {
    setSections(prev => {
      const index = prev.findIndex(s => s.id === sectionId);
      if (index <= 0) return prev;
      
      const newSections = [...prev];
      [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
      
      // Update order numbers
      return newSections.map((section, idx) => ({ ...section, order: idx + 1 }));
    });
  };

  const moveSectionDown = (sectionId: string) => {
    setSections(prev => {
      const index = prev.findIndex(s => s.id === sectionId);
      if (index >= prev.length - 1) return prev;
      
      const newSections = [...prev];
      [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
      
      // Update order numbers
      return newSections.map((section, idx) => ({ ...section, order: idx + 1 }));
    });
  };

  const changeLocation = (sectionId: string, newLocation: 'landing' | 'separate') => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, location: newLocation }
        : section
    ));
  };

  const landingSections = sections.filter(s => s.location === 'landing').sort((a, b) => a.order - b.order);
  const separateSections = sections.filter(s => s.location === 'separate').sort((a, b) => a.order - b.order);

  const getStatusBadge = (section: Section) => {
    if (!section.enabled) {
      return <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500/50">Disabled</Badge>;
    }
    if (section.location === 'landing') {
      return <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/50">Active on Landing</Badge>;
    }
    return <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/50">Separate Page</Badge>;
  };

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
          <h1 className="text-3xl font-bold text-white mb-2">Section Controls</h1>
          <p className="text-gray-400">Manage visibility, order, and placement of website sections</p>
        </div>
        <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54]">
          Save Changes
        </Button>
      </motion.div>

      {/* Quick Stats */}
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
                <p className="text-gray-400 text-sm">Total Sections</p>
                <p className="text-2xl font-bold text-white">{sections.length}</p>
              </div>
              <Layers className="h-8 w-8 text-[#FFD700]" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">On Landing Page</p>
                <p className="text-2xl font-bold text-white">{landingSections.filter(s => s.enabled).length}</p>
              </div>
              <Eye className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Separate Pages</p>
                <p className="text-2xl font-bold text-white">{separateSections.filter(s => s.enabled).length}</p>
              </div>
              <ExternalLink className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Disabled</p>
                <p className="text-2xl font-bold text-white">{sections.filter(s => !s.enabled).length}</p>
              </div>
              <EyeOff className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Landing Page Sections */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Eye className="mr-2 h-5 w-5" />
                Landing Page Sections
              </CardTitle>
              <CardDescription className="text-gray-400">
                Sections displayed on the main landing page
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {landingSections.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No sections on landing page</p>
              ) : (
                landingSections.map((section, index) => (
                  <div key={section.id} className="flex items-center space-x-3 p-3 bg-[#001F54]/30 rounded-lg">
                    <div className="flex flex-col space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveSectionUp(section.id)}
                        disabled={index === 0}
                        className="p-1 h-auto text-gray-400 hover:text-white disabled:opacity-30"
                      >
                        <ArrowUp className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveSectionDown(section.id)}
                        disabled={index === landingSections.length - 1}
                        className="p-1 h-auto text-gray-400 hover:text-white disabled:opacity-30"
                      >
                        <ArrowDown className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <GripVertical className="h-4 w-4 text-gray-400" />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium text-sm">{section.name}</h3>
                        {getStatusBadge(section)}
                      </div>
                      <p className="text-gray-400 text-xs mt-1">{section.description}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={section.enabled}
                        onCheckedChange={() => toggleSection(section.id)}
                      />
                      
                      <Select value={section.location} onValueChange={(value: 'landing' | 'separate') => changeLocation(section.id, value)}>
                        <SelectTrigger className="w-32 h-8 bg-[#001F54]/50 border-[#FFD700]/30 text-white text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="landing">Landing</SelectItem>
                          <SelectItem value="separate">Separate</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      {section.hasSettings && (
                        <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white">
                          <Settings className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Separate Page Sections */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                Separate Page Sections
              </CardTitle>
              <CardDescription className="text-gray-400">
                Sections with their own dedicated pages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {separateSections.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No separate page sections</p>
              ) : (
                separateSections.map((section) => (
                  <div key={section.id} className="flex items-center space-x-3 p-3 bg-[#001F54]/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium text-sm">{section.name}</h3>
                        {getStatusBadge(section)}
                      </div>
                      <p className="text-gray-400 text-xs mt-1">{section.description}</p>
                      {section.url && (
                        <p className="text-[#FFD700] text-xs mt-1">
                          {section.url}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={section.enabled}
                        onCheckedChange={() => toggleSection(section.id)}
                      />
                      
                      <Select value={section.location} onValueChange={(value: 'landing' | 'separate') => changeLocation(section.id, value)}>
                        <SelectTrigger className="w-32 h-8 bg-[#001F54]/50 border-[#FFD700]/30 text-white text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="landing">Landing</SelectItem>
                          <SelectItem value="separate">Separate</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      {section.hasSettings && (
                        <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white">
                          <Settings className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Global Section Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="bg-[#152238] border-[#FFD700]/20">
          <CardHeader>
            <CardTitle className="text-white">Global Section Settings</CardTitle>
            <CardDescription className="text-gray-400">
              Configure global behaviors for all sections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-white">Section Animations</Label>
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked />
                  <span className="text-gray-300 text-sm">Enable scroll animations</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className="text-white">Section Spacing</Label>
                <Select defaultValue="normal">
                  <SelectTrigger className="bg-[#001F54]/50 border-[#FFD700]/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="spacious">Spacious</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label className="text-white">Background Effects</Label>
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked />
                  <span className="text-gray-300 text-sm">Enable particle backgrounds</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className="text-white">Section Transitions</Label>
                <Select defaultValue="fade">
                  <SelectTrigger className="bg-[#001F54]/50 border-[#FFD700]/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="fade">Fade In</SelectItem>
                    <SelectItem value="slide">Slide Up</SelectItem>
                    <SelectItem value="scale">Scale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SectionControls;