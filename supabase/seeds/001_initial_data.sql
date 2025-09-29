-- Insert initial site settings
INSERT INTO site_settings (key, value, description, updated_by) VALUES
('site_title', '"ThynkEra - India''s First Future Ready Coaching Institute"', 'Main site title', '00000000-0000-0000-0000-000000000000'),
('site_description', '"Transforming curious minds into conscious makers through innovative education and hands-on learning."', 'Site description for SEO', '00000000-0000-0000-0000-000000000000'),
('primary_color', '"#FFD700"', 'Primary brand color (gold)', '00000000-0000-0000-0000-000000000000'),
('secondary_color', '"#FF6A00"', 'Secondary brand color (orange)', '00000000-0000-0000-0000-000000000000'),
('brand_colors', '{"deepBlue1": "#001F54", "deepBlue2": "#0A3D91", "deepBlue3": "#152238", "gold1": "#FFD700", "gold2": "#FFB400", "orange": "#FF6A00"}', 'Complete brand color palette', '00000000-0000-0000-0000-000000000000'),
('typography', '{"primary": "Inter", "secondary": "Poppins", "accent": "Exo"}', 'Font configuration', '00000000-0000-0000-0000-000000000000'),
('contact_email', '"info@thynkera.com"', 'Primary contact email', '00000000-0000-0000-0000-000000000000'),
('contact_phone', '"+91 98765 43210"', 'Primary contact phone', '00000000-0000-0000-0000-000000000000'),
('social_media', '{"facebook": "", "twitter": "", "instagram": "", "linkedin": "", "youtube": ""}', 'Social media links', '00000000-0000-0000-0000-000000000000'),
('landing_page_sections', '{"hero": {"enabled": true, "order": 1}, "targetAudience": {"enabled": true, "order": 2}, "gallery": {"enabled": true, "order": 3}}', 'Landing page section configuration', '00000000-0000-0000-0000-000000000000'),
('seo_config', '{"defaultTitle": "ThynkEra - Future Ready Education", "titleTemplate": "%s | ThynkEra", "defaultDescription": "India''s first future-ready coaching institute transforming curious minds into conscious makers.", "defaultImage": "/og-image.jpg"}', 'SEO configuration', '00000000-0000-0000-0000-000000000000');

-- Insert sample pages
INSERT INTO pages (title, slug, content, status, seo_title, seo_description, created_by) VALUES
('Home', 'home', '{
  "blocks": [
    {
      "type": "hero",
      "data": {
        "title": "From Curious Minds to Conscious Makers",
        "subtitle": "India''s first future ready institute",
        "description": "At ThynkEra, we ask: not just ''what''s in the book?'' but ''what can I build with it?'' Here, we nurture curiosity, ignite imagination, and empower conscious innovators to turn knowledge into real-world change.",
        "cta": {
          "primary": {"text": "Explore Courses", "link": "/programs"},
          "secondary": {"text": "Book a Demo", "link": "#contact"}
        },
        "image": "/images/hero-tech-education.jpg"
      }
    }
  ]
}', 'published', 'ThynkEra - From Curious Minds to Conscious Makers', 'India''s first future-ready coaching institute transforming education through innovation and hands-on learning.', '00000000-0000-0000-0000-000000000000'),

('About Us', 'about', '{
  "blocks": [
    {
      "type": "text",
      "data": {
        "title": "About ThynkEra",
        "content": "<p>ThynkEra represents a revolutionary approach to education, where we believe learning should be transformative, not just informative. We are India''s first future-ready coaching institute, designed to bridge the gap between traditional education and the skills needed for tomorrow''s world.</p><p>Our mission is simple yet profound: to transform curious minds into conscious makers who can create meaningful change in the world.</p>"
      }
    }
  ]
}', 'published', 'About ThynkEra - Revolutionary Education Approach', 'Learn about ThynkEra''s mission to transform education and empower the next generation of innovators and creators.', '00000000-0000-0000-0000-000000000000'),

('Programs', 'programs', '{
  "blocks": [
    {
      "type": "text",
      "data": {
        "title": "Our Programs",
        "content": "<p>Discover our comprehensive range of future-ready programs designed to nurture creativity, critical thinking, and practical skills.</p>"
      }
    }
  ]
}', 'published', 'ThynkEra Programs - Future Ready Education', 'Explore our innovative programs including concept classes, coding & tech, and innovation labs designed for future success.', '00000000-0000-0000-0000-000000000000');

-- Insert sample events
INSERT INTO events (title, description, start_date, end_date, location, max_attendees, registration_deadline, status, created_by) VALUES
('SPARK Innovation Challenge 2024', 'Join us for our flagship innovation challenge where students showcase their creative solutions to real-world problems. Experience hands-on learning, mentorship, and networking opportunities.', '2024-03-15 10:00:00+00', '2024-03-15 18:00:00+00', 'ThynkEra Campus, Bangalore', 100, '2024-03-10 23:59:59+00', 'published', '00000000-0000-0000-0000-000000000000'),

('Future Skills Workshop Series', 'A comprehensive workshop series covering AI, robotics, sustainable technology, and entrepreneurship. Perfect for students aged 14-18 who want to explore cutting-edge technologies.', '2024-04-01 09:00:00+00', '2024-04-03 17:00:00+00', 'Online & On-Campus Hybrid', 200, '2024-03-25 23:59:59+00', 'published', '00000000-0000-0000-0000-000000000000'),

('Innovation Bootcamp', 'An intensive 3-day bootcamp focusing on design thinking, prototype development, and pitch presentation skills for young innovators.', '2024-05-10 09:00:00+00', '2024-05-12 18:00:00+00', 'ThynkEra Innovation Lab', 50, '2024-05-05 23:59:59+00', 'draft', '00000000-0000-0000-0000-000000000000');

-- Insert sample testimonials
INSERT INTO testimonials (name, role, company, content, rating, status, created_by) VALUES
('Arjun Sharma', 'Student', 'Class 11, DPS Bangalore', 'ThynkEra completely changed how I think about learning. Instead of just memorizing facts, I now understand how to apply knowledge to solve real problems. The hands-on projects are incredible!', 5, 'published', '00000000-0000-0000-0000-000000000000'),

('Priya Patel', 'Parent', 'Software Engineer', 'As a parent, I was looking for something beyond traditional coaching. ThynkEra''s approach of combining academics with practical skills is exactly what our children need for the future.', 5, 'published', '00000000-0000-0000-0000-000000000000'),

('Dr. Rajesh Kumar', 'Educator', 'Principal, Modern School', 'ThynkEra''s curriculum is thoughtfully designed to nurture both critical thinking and creativity. Their students consistently demonstrate superior problem-solving abilities.', 5, 'published', '00000000-0000-0000-0000-000000000000'),

('Sneha Reddy', 'Graduate', 'IIT Madras', 'The foundation I built at ThynkEra helped me excel in engineering college. The way they teach you to think, not just study, makes all the difference.', 5, 'published', '00000000-0000-0000-0000-000000000000'),

('Karthik Nair', 'Student', 'Class 12, Kendriya Vidyalaya', 'I joined ThynkEra for JEE preparation but gained so much more. The innovation projects and coding sessions opened up entirely new career possibilities for me.', 5, 'draft', '00000000-0000-0000-0000-000000000000');

-- Insert sample event registrations
INSERT INTO event_registrations (event_id, name, email, phone, message, status) VALUES
((SELECT id FROM events WHERE title = 'SPARK Innovation Challenge 2024'), 'Rahul Gupta', 'rahul.gupta@email.com', '+91 98765 43210', 'Excited to participate and showcase my robotics project!', 'confirmed'),
((SELECT id FROM events WHERE title = 'SPARK Innovation Challenge 2024'), 'Anisha Singh', 'anisha.singh@email.com', '+91 87654 32109', 'Looking forward to the innovation challenge!', 'confirmed'),
((SELECT id FROM events WHERE title = 'Future Skills Workshop Series'), 'Vikram Joshi', 'vikram.joshi@email.com', '+91 76543 21098', 'Interested in AI and machine learning sessions.', 'pending'),
((SELECT id FROM events WHERE title = 'Future Skills Workshop Series'), 'Meera Iyer', 'meera.iyer@email.com', '+91 65432 10987', 'Can''t wait to learn about sustainable technology!', 'confirmed');

-- Note: Admin users will need to be created through the application
-- The first user to sign up should be manually promoted to 'owner' role
-- Subsequent admin users can be invited through the admin panel