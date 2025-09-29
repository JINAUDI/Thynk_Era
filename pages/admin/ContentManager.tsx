import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Edit, 
  Save, 
  Eye, 
  RotateCcw,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Textarea } from '../../components/ui/textarea';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

const ContentManager = () => {
  const [selectedSection, setSelectedSection] = useState('hero');
  const [hasChanges, setHasChanges] = useState(false);

  const sections = [
    {
      id: 'hero',
      name: 'Hero Section',
      status: 'published',
      lastModified: '2 hours ago',
      fields: [
        {
          key: 'title',
          label: 'Main Title',
          type: 'text',
          value: 'Shaping India\'s Future Through Education & Innovation'
        },
        {
          key: 'subtitle',
          label: 'Subtitle',
          type: 'textarea',
          value: 'India\'s first future-ready coaching institute combining traditional education with cutting-edge technology, preparing students for tomorrow\'s challenges.'
        },
        {
          key: 'cta_primary',
          label: 'Primary CTA Text',
          type: 'text',
          value: 'Enroll Now'
        },
        {
          key: 'cta_secondary',
          label: 'Secondary CTA Text',
          type: 'text',
          value: 'Book Free Demo'
        }
      ]
    },
    {
      id: 'about',
      name: 'About Section',
      status: 'draft',
      lastModified: '1 day ago',
      fields: [
        {
          key: 'title',
          label: 'Section Title',
          type: 'text',
          value: 'For Everyone Who Believes in More'
        },
        {
          key: 'description',
          label: 'Description',
          type: 'textarea',
          value: 'At ThynkEra, we believe every student has the potential to achieve extraordinary things...'
        }
      ]
    },
    {
      id: 'programs',
      name: 'Programs Section',
      status: 'published',
      lastModified: '3 days ago',
      fields: [
        {
          key: 'title',
          label: 'Section Title',
          type: 'text',
          value: 'Our Programs'
        },
        {
          key: 'description',
          label: 'Description',
          type: 'textarea',
          value: 'Comprehensive programs designed to prepare students for the future...'
        }
      ]
    },
    {
      id: 'testimonials',
      name: 'Testimonials',
      status: 'published',
      lastModified: '1 week ago',
      fields: [
        {
          key: 'title',
          label: 'Section Title',
          type: 'text',
          value: 'Success Stories'
        },
        {
          key: 'description',
          label: 'Description',
          type: 'textarea',
          value: 'Hear from our amazing students and their achievements...'
        }
      ]
    }
  ];

  const getCurrentSection = () => sections.find(s => s.id === selectedSection);

  const [formData, setFormData] = useState(() => {
    const section = getCurrentSection();
    const data: Record<string, string> = {};
    section?.fields.forEach(field => {
      data[field.key] = field.value;
    });
    return data;
  });

  const handleFieldChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Save logic here
    setHasChanges(false);
    console.log('Saving changes for section:', selectedSection, formData);
  };

  const handlePreview = () => {
    // Preview logic here
    console.log('Previewing changes for section:', selectedSection);
  };

  const handleRevert = () => {
    // Revert to original values
    const section = getCurrentSection();
    const data: Record<string, string> = {};
    section?.fields.forEach(field => {
      data[field.key] = field.value;
    });
    setFormData(data);
    setHasChanges(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'draft': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'pending': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  React.useEffect(() => {
    const section = getCurrentSection();
    const data: Record<string, string> = {};
    section?.fields.forEach(field => {
      data[field.key] = field.value;
    });
    setFormData(data);
    setHasChanges(false);
  }, [selectedSection]);

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
          <h1 className="text-3xl font-bold text-white mb-2">Content Management</h1>
          <p className="text-gray-400">Edit and manage content for all website sections</p>
        </div>
        {hasChanges && (
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
              <Clock className="mr-1 h-3 w-3" />
              Unsaved Changes
            </Badge>
            <Button variant="outline" onClick={handleRevert} className="border-[#FFD700]/50 text-white hover:bg-[#FFD700]/10">
              <RotateCcw className="mr-2 h-4 w-4" />
              Revert
            </Button>
            <Button onClick={handlePreview} variant="outline" className="border-[#FFD700]/50 text-white hover:bg-[#FFD700]/10">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button onClick={handleSave} className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54]">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        )}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Sections</CardTitle>
              <CardDescription className="text-gray-400">
                Select a section to edit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`
                    w-full text-left p-3 rounded-lg transition-all duration-200
                    ${selectedSection === section.id
                      ? 'bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-[#001F54]'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{section.name}</p>
                      <p className={`text-xs ${selectedSection === section.id ? 'text-[#001F54]/70' : 'text-gray-500'}`}>
                        {section.lastModified}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(section.status)}`}
                    >
                      {section.status}
                    </Badge>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Editor */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-lg flex items-center">
                    <Edit className="mr-2 h-5 w-5" />
                    {getCurrentSection()?.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Edit the content fields for this section
                  </CardDescription>
                </div>
                <Badge 
                  variant="outline" 
                  className={getStatusColor(getCurrentSection()?.status || '')}
                >
                  {getCurrentSection()?.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {getCurrentSection()?.fields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <Label htmlFor={field.key} className="text-white font-medium">
                    {field.label}
                  </Label>
                  {field.type === 'text' ? (
                    <Input
                      id={field.key}
                      value={formData[field.key] || ''}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]"
                    />
                  ) : field.type === 'textarea' ? (
                    <Textarea
                      id={field.key}
                      value={formData[field.key] || ''}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700] min-h-24"
                      rows={4}
                    />
                  ) : field.type === 'select' ? (
                    <Select value={formData[field.key] || ''} onValueChange={(value) => handleFieldChange(field.key, value)}>
                      <SelectTrigger className="bg-[#001F54]/50 border-[#FFD700]/30 text-white focus:border-[#FFD700] focus:ring-[#FFD700]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {/* Add select options based on field configuration */}
                      </SelectContent>
                    </Select>
                  ) : null}
                </div>
              ))}

              {/* Rich Text Editor Placeholder */}
              <div className="border-t border-[#FFD700]/20 pt-6">
                <Label className="text-white font-medium mb-3 block">Rich Text Editor</Label>
                <div className="bg-[#001F54]/50 border border-[#FFD700]/30 rounded-lg p-4 min-h-32">
                  <p className="text-gray-400 text-sm">
                    Rich text editor would be integrated here with formatting options:
                    Bold, Italic, Links, Lists, etc.
                  </p>
                </div>
              </div>

              {/* Version Control */}
              <div className="border-t border-[#FFD700]/20 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <Label className="text-white font-medium">Version History</Label>
                  <Button variant="outline" size="sm" className="border-[#FFD700]/50 text-[#FFD700] hover:bg-[#FFD700]/10">
                    View All Versions
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-[#001F54]/30 rounded-lg">
                    <div>
                      <p className="text-white text-sm font-medium">Current Version</p>
                      <p className="text-gray-400 text-xs">Modified {getCurrentSection()?.lastModified}</p>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentManager;