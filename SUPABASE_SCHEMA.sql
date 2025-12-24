-- Supabase Database Schema for Wedding Photography Website
-- Run these SQL commands in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Galleries table
CREATE TABLE IF NOT EXISTS galleries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  theme TEXT NOT NULL,
  year TEXT NOT NULL,
  cover_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gallery images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  gallery_id UUID REFERENCES galleries(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  image_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Packages table
CREATE TABLE IF NOT EXISTS packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  is_popular BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote TEXT NOT NULL,
  author TEXT NOT NULL,
  wedding_title TEXT,
  location TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT FALSE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  wedding_date DATE,
  venue TEXT,
  guest_count INTEGER,
  package_id UUID REFERENCES packages(id),
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'booked', 'declined')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_gallery_images_gallery_id ON gallery_images(gallery_id);
CREATE INDEX IF NOT EXISTS idx_gallery_images_order ON gallery_images(gallery_id, image_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved, is_featured);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);

-- Row Level Security (RLS) Policies
-- Enable RLS on all tables
ALTER TABLE galleries ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Public read access for galleries (approved only)
CREATE POLICY "Public can view approved galleries"
  ON galleries FOR SELECT
  USING (true);

CREATE POLICY "Public can view gallery images"
  ON gallery_images FOR SELECT
  USING (true);

-- Public read access for active packages
CREATE POLICY "Public can view active packages"
  ON packages FOR SELECT
  USING (is_active = true);

-- Public read access for approved testimonials
CREATE POLICY "Public can view approved testimonials"
  ON testimonials FOR SELECT
  USING (is_approved = true);

-- Public can insert enquiries
CREATE POLICY "Public can create enquiries"
  ON enquiries FOR INSERT
  WITH CHECK (true);

-- Admin policies (you'll need to set up authentication and admin role)
-- For now, these are commented out - you'll need to configure based on your auth setup
-- CREATE POLICY "Admins can manage galleries"
--   ON galleries FOR ALL
--   USING (auth.jwt() ->> 'role' = 'admin');

-- Storage bucket for images
-- Run this in Supabase Dashboard > Storage
-- CREATE BUCKET IF NOT EXISTS 'gallery-images' WITH PUBLIC = true;
-- CREATE BUCKET IF NOT EXISTS 'cover-images' WITH PUBLIC = true;





