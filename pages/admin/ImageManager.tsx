import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Upload, 
  Image as ImageIcon, 
  Trash2, 
  Edit3, 
  Download,
  Search,
  Filter,
  Grid,
  List,
  MoreVertical,
  Eye,
  Copy
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

const ImageManager = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const categories = [
    { value: 'all', label: 'All Images', count: 48 },
    { value: 'hero', label: 'Hero Section', count: 3 },
    { value: 'gallery', label: 'Gallery', count: 24 },
    { value: 'programs', label: 'Programs', count: 12 },
    { value: 'events', label: 'Events', count: 6 },
    { value: 'testimonials', label: 'Testimonials', count: 3 }
  ];

  const images = [
    {
      id: '1',
      name: 'hero-banner-1.jpg',
      category: 'hero',
      size: '2.3 MB',
      dimensions: '1920x1080',
      uploadDate: '2024-01-15',
      usedIn: ['Landing Page Hero'],
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      optimized: true
    },
    {
      id: '2',
      name: 'student-coding.jpg',
      category: 'programs',
      size: '1.8 MB',
      dimensions: '1200x800',
      uploadDate: '2024-01-14',
      usedIn: ['Coding & Tech Program'],
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      optimized: true
    },
    {
      id: '3',
      name: 'innovation-lab.jpg',
      category: 'programs',
      size: '2.1 MB',
      dimensions: '1200x800',
      uploadDate: '2024-01-13',
      usedIn: ['Innovation Lab'],
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      optimized: false
    },
    {
      id: '4',
      name: 'gallery-classroom.jpg',
      category: 'gallery',
      size: '1.5 MB',
      dimensions: '800x600',
      uploadDate: '2024-01-12',
      usedIn: ['Gallery Section'],
      url: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400',
      optimized: true
    },
    {
      id: '5',
      name: 'event-spark-2024.jpg',
      category: 'events',
      size: '2.8 MB',
      dimensions: '1600x900',
      uploadDate: '2024-01-11',
      usedIn: ['SPARK Event Page'],
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
      optimized: false
    },
    {
      id: '6',
      name: 'testimonial-student.jpg',
      category: 'testimonials',
      size: '0.8 MB',
      dimensions: '400x400',
      uploadDate: '2024-01-10',
      usedIn: ['Student Testimonials'],
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      optimized: true
    }
  ];

  const filteredImages = images.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         image.usedIn.some(usage => usage.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleImageSelection = (imageId: string) => {
    setSelectedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const handleBulkDelete = () => {
    console.log('Deleting images:', selectedImages);
    setSelectedImages([]);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      hero: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      gallery: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      programs: 'bg-green-500/20 text-green-400 border-green-500/50',
      events: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      testimonials: 'bg-pink-500/20 text-pink-400 border-pink-500/50'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/50';
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
          <h1 className="text-3xl font-bold text-white mb-2">Image Management</h1>
          <p className="text-gray-400">Upload, organize, and optimize images for your website</p>
        </div>
        <div className="flex items-center space-x-3">
          {selectedImages.length > 0 && (
            <Button variant="destructive" onClick={handleBulkDelete}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Selected ({selectedImages.length})
            </Button>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54]">
                <Upload className="mr-2 h-4 w-4" />
                Upload Images
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#152238] border-[#FFD700]/20 text-white">
              <DialogHeader>
                <DialogTitle>Upload New Images</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Drag and drop images or click to browse
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-[#FFD700]/30 rounded-lg p-8 text-center hover:border-[#FFD700]/50 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-300 mb-2">Drop images here or click to upload</p>
                  <p className="text-gray-500 text-sm">Support for JPG, PNG, WebP up to 10MB</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger className="bg-[#001F54]/50 border-[#FFD700]/30 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.slice(1).map(cat => (
                          <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="alt-text">Alt Text</Label>
                    <Input 
                      id="alt-text"
                      placeholder="Describe the image for accessibility"
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Optional description for internal use"
                      className="bg-[#001F54]/50 border-[#FFD700]/30 text-white"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" className="border-[#FFD700]/50 text-white">Cancel</Button>
                  <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-[#001F54]">Upload</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Filters and Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
      >
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64 bg-[#001F54]/50 border-[#FFD700]/30 text-white"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48 bg-[#001F54]/50 border-[#FFD700]/30 text-white">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label} ({category.count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? 'bg-[#FFD700] text-[#001F54]' : 'border-[#FFD700]/50 text-white'}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? 'bg-[#FFD700] text-[#001F54]' : 'border-[#FFD700]/50 text-white'}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Images Grid/List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-[#152238] border-[#FFD700]/20 overflow-hidden group hover:border-[#FFD700]/40 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2">
                      <input
                        type="checkbox"
                        checked={selectedImages.includes(image.id)}
                        onChange={() => toggleImageSelection(image.id)}
                        className="w-4 h-4 text-[#FFD700] bg-white/20 border-white/30 rounded focus:ring-[#FFD700] focus:ring-2"
                      />
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className={getCategoryColor(image.category)}>
                        {image.category}
                      </Badge>
                    </div>
                    {!image.optimized && (
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500/50 text-xs">
                          Needs optimization
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium text-sm truncate">{image.name}</h3>
                        <p className="text-gray-400 text-xs mt-1">{image.dimensions} • {image.size}</p>
                        <p className="text-gray-500 text-xs">Used in: {image.usedIn.join(', ')}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-[#152238] border-[#FFD700]/20">
                          <DropdownMenuItem className="text-white hover:bg-white/10">
                            <Eye className="mr-2 h-4 w-4" />
                            View Full Size
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-white/10">
                            <Copy className="mr-2 h-4 w-4" />
                            Copy URL
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-white/10">
                            <Edit3 className="mr-2 h-4 w-4" />
                            Edit Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-white/10">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400 hover:bg-red-500/20">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <Card className="bg-[#152238] border-[#FFD700]/20">
            <CardContent className="p-0">
              <div className="divide-y divide-[#FFD700]/10">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center p-4 hover:bg-white/5 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedImages.includes(image.id)}
                      onChange={() => toggleImageSelection(image.id)}
                      className="w-4 h-4 text-[#FFD700] bg-white/20 border-white/30 rounded focus:ring-[#FFD700] focus:ring-2 mr-4"
                    />
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium">{image.name}</h3>
                      <p className="text-gray-400 text-sm">{image.dimensions} • {image.size}</p>
                      <p className="text-gray-500 text-sm">Used in: {image.usedIn.join(', ')}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={getCategoryColor(image.category)}>
                        {image.category}
                      </Badge>
                      {!image.optimized && (
                        <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500/50">
                          Needs optimization
                        </Badge>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-[#152238] border-[#FFD700]/20">
                          <DropdownMenuItem className="text-white hover:bg-white/10">
                            <Eye className="mr-2 h-4 w-4" />
                            View Full Size
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-white/10">
                            <Copy className="mr-2 h-4 w-4" />
                            Copy URL
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-white/10">
                            <Edit3 className="mr-2 h-4 w-4" />
                            Edit Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-white/10">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400 hover:bg-red-500/20">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
};

export default ImageManager;