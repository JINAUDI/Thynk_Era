# Required Dependencies for ThynkEra Admin Panel

The admin panel requires the following dependencies to be installed:

## Core Dependencies

```bash
npm install @supabase/supabase-js
```

## TypeScript Types

```bash
npm install --save-dev @types/react @types/react-dom
```

## Optional Dependencies (for enhanced functionality)

```bash
# For rich text editing (Phase 2)
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit

# For drag and drop (Phase 2)  
npm install react-dnd react-dnd-html5-backend

# For form handling
npm install react-hook-form@7.55.0 @hookform/resolvers zod

# For email notifications (optional)
npm install @sendgrid/mail

# For file uploads and image processing
npm install file-saver jszip
```

## Installation Command

For immediate admin panel functionality:

```bash
npm install @supabase/supabase-js
```

This will enable the authentication system and database connectivity.