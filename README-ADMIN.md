# ThynkEra Admin Panel Setup Guide

This guide will help you set up the complete ThynkEra Admin Panel with authentication, content management, and publishing capabilities.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Supabase account
- Git

### 1. Clone and Install

```bash
git clone <repository-url>
cd thynkera-admin
npm install
```

### 2. Supabase Setup

#### Create a new Supabase project:
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the project to be ready

#### Configure Database:
1. Go to SQL Editor in your Supabase dashboard
2. Copy and run the content from `/supabase/migrations/001_initial_schema.sql`
3. Copy and run the content from `/supabase/seeds/001_initial_data.sql`

#### Get your credentials:
1. Go to Settings > API
2. Copy your Project URL and anon public key

### 3. Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your Supabase credentials:
```env
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Start Development Server

```bash
npm start
```

Your app should now be running at `http://localhost:3000`

## 🔐 Creating Your First Admin User

### Method 1: Through Supabase Dashboard (Recommended)

1. Go to Authentication > Users in your Supabase dashboard
2. Click "Invite a user"
3. Enter your email and a temporary password
4. Click "Send invitation"
5. Check your email and complete the signup process
6. Go to Table Editor > profiles
7. Find your user record and update the `role` field to `'owner'`

### Method 2: Direct Database Insert

In Supabase SQL Editor, run:
```sql
-- Replace with your actual email and user ID
UPDATE profiles 
SET role = 'owner', full_name = 'Your Name'
WHERE email = 'your-email@example.com';
```

## 📁 Project Structure

```
/
├── components/           # Reusable UI components
├── contexts/            # React contexts (Auth, etc.)
├── hooks/              # Custom React hooks
├── pages/              # Page components
│   ├── admin/          # Admin panel pages
│   └── ...            # Public pages
├── supabase/           # Supabase configuration
│   ├── migrations/     # Database migrations
│   └── seeds/         # Initial data
├── utils/              # Utility functions
└── styles/            # Global styles
```

## 🛡️ Security Features

### Row Level Security (RLS)
- All database tables have RLS enabled
- Policies restrict access based on user roles
- Public content is accessible to everyone
- Admin content requires authentication

### User Roles
- **Owner**: Full access to everything
- **Admin**: Can manage content and users (except settings)
- **Editor**: Can create and edit content
- **Viewer**: Read-only access

### Permission System
- Role-based permissions throughout the app
- UI elements hide/show based on permissions
- API calls are protected at the database level

## 🎨 Content Management

### Pages
- Block-based editor for flexible content creation
- Draft/Published workflow
- SEO optimization fields
- Revision history

### Assets
- Drag-and-drop file upload
- Automatic image optimization
- Global asset replacement
- Alt text and captions

### Events & Registrations
- Event creation and management
- Public registration forms
- Email confirmations
- Registration management

### Testimonials
- Customer review management
- Video and image support
- Rating system
- Publication workflow

## 🔧 Advanced Configuration

### Email Setup (Optional)

1. Sign up for SendGrid account
2. Get your API key
3. Add to `.env`:
```env
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
```

### reCAPTCHA Setup (Optional)

1. Get reCAPTCHA keys from Google
2. Add to `.env`:
```env
REACT_APP_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
```

### Analytics Setup (Optional)

1. Get Google Analytics Measurement ID
2. Add to `.env`:
```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `REACT_APP_SUPABASE_URL`
- `REACT_APP_SUPABASE_ANON_KEY`
- Any optional services you're using

## 📊 Monitoring & Maintenance

### Activity Logs
- All admin actions are logged
- IP address and user agent tracking
- Audit trail for compliance

### Database Maintenance
- Regular backups (automatic with Supabase)
- Performance monitoring
- Query optimization

### Security Updates
- Keep dependencies updated
- Monitor Supabase security advisories
- Regular security audits

## 🐛 Troubleshooting

### Common Issues

**Login not working:**
- Check Supabase URL and keys
- Verify user exists in profiles table
- Check user role permissions

**Images not uploading:**
- Verify storage bucket exists
- Check storage policies
- Ensure file size limits

**Pages not saving:**
- Check database permissions
- Verify user has editor role or higher
- Check console for errors

### Getting Help

1. Check browser console for errors
2. Review Supabase logs
3. Verify environment variables
4. Check database policies

## 🔄 Updates & Migrations

### Database Updates
1. Create new migration file in `/supabase/migrations/`
2. Run migration in Supabase SQL Editor
3. Update TypeScript types if needed

### Application Updates
1. Update code
2. Test in development
3. Deploy to staging
4. Deploy to production

## 📝 API Documentation

### Authentication
- Uses Supabase Auth
- JWT-based authentication
- Automatic session management

### Database Access
- Supabase client with RLS
- TypeScript types included
- Automatic data validation

### File Storage
- Supabase Storage integration
- Automatic image optimization
- CDN delivery

## 🎯 Best Practices

### Security
- Never commit secrets to version control
- Use environment variables for all config
- Regularly update dependencies
- Monitor access logs

### Performance
- Optimize images before upload
- Use pagination for large datasets
- Cache frequently accessed data
- Monitor database performance

### Maintenance
- Regular database backups
- Monitor error logs
- Update documentation
- Test backup restoration

## 📞 Support

For technical support:
1. Check this documentation
2. Review Supabase documentation
3. Check GitHub issues
4. Contact your development team

---

**Note**: This is a production-ready admin panel with enterprise-grade security and features. Make sure to follow all security guidelines and best practices when deploying to production.