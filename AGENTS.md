# AGENTS.md - Project Documentation for AI Agents

This document provides essential information for AI coding agents working on this project.

## Project Overview

**Kern & Ink** - A moody, artistic photography studio website built with Next.js 16 and Supabase. The site features a dark, edgy aesthetic with vintage rustic vibes, showcasing portfolios, booking capabilities, testimonials, and an admin dashboard.

**Key Characteristics:**
- Dark theme with moody color palette (black backgrounds, warm accent colors)
- Artistic, edgy design aesthetic
- Full-stack Next.js application with Supabase backend
- TypeScript for type safety
- Tailwind CSS v4 for styling

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Fonts**: 
  - Bebas Neue (display/headings)
  - Space Grotesk (body text)
- **React**: 19.2.1

## Project Structure

```
/workspace
├── app/                      # Next.js App Router pages and components
│   ├── components/          # Reusable React components
│   │   ├── Navigation.tsx   # Main navigation with mobile menu
│   │   ├── Footer.tsx       # Site footer
│   │   └── ImageModal.tsx    # Full-screen image viewer
│   ├── admin/               # Admin dashboard page
│   ├── booking/            # Booking and packages page
│   ├── portfolio/          # Portfolio/gallery page
│   ├── testimonials/       # Client testimonials page
│   ├── layout.tsx          # Root layout with fonts and global structure
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles and Tailwind config
├── lib/
│   ├── supabase.ts         # Supabase client configuration
│   └── types/
│       └── supabase.ts     # Generated TypeScript types from database
├── public/                 # Static assets
├── SUPABASE_SCHEMA.sql     # Database schema definitions
└── package.json            # Dependencies and scripts
```

## Key Conventions

### Component Patterns

1. **Client Components**: Use `'use client'` directive for components that need interactivity (state, hooks, event handlers)
2. **Server Components**: Default in App Router - use for data fetching and static content
3. **File Naming**: PascalCase for components (e.g., `Navigation.tsx`), lowercase for pages (e.g., `page.tsx`)

### Styling Guidelines

**Color Palette** (defined in `app/globals.css`):
- Background: `#0a0a0a` (very dark, almost black)
- Foreground: `#e5e5e5` (light gray text)
- Accent colors:
  - Rust: `#8b4513`
  - Amber: `#d97706`
  - Terracotta: `#c2410c`
  - Sage: `#6b7c5d`
- Moody dark variants: `#1a1a1a`, `#0f0f0f`

**Typography**:
- Headings: Bebas Neue (uppercase, letter-spacing: 0.05em)
- Body: Space Grotesk (sans-serif)

**Tailwind Usage**:
- Use CSS variables via Tailwind (e.g., `bg-background`, `text-foreground`)
- Custom colors available: `accent-rust`, `accent-amber`, `accent-terracotta`, `accent-sage`
- Font utilities: `font-display` (Bebas), `font-sans` (Space Grotesk)

### Database Schema

**Tables** (see `SUPABASE_SCHEMA.sql` for full details):

1. **galleries**: Photo galleries with themes and years
   - Fields: `id`, `title`, `theme`, `year`, `cover_image_url`, timestamps

2. **gallery_images**: Images within galleries
   - Fields: `id`, `gallery_id` (FK), `image_url`, `image_order`, `created_at`

3. **packages**: Photography packages/pricing
   - Fields: `id`, `name`, `price`, `description`, `features` (JSONB), `is_popular`, `is_active`, timestamps

4. **testimonials**: Client reviews
   - Fields: `id`, `quote`, `author`, `wedding_title`, `location`, `rating` (1-5), `is_featured`, `is_approved`, timestamps

5. **enquiries**: Booking enquiries
   - Fields: `id`, `name`, `email`, `phone`, `wedding_date`, `venue`, `guest_count`, `package_id` (FK), `message`, `status` (new/contacted/booked/declined), timestamps

**Row Level Security (RLS)**:
- Public read access for galleries, gallery_images, active packages, and approved testimonials
- Public can create enquiries
- Admin policies need authentication setup (currently commented out)

### Supabase Integration

**Client Setup** (`lib/supabase.ts`):
- Exports a single `supabase` client instance
- Uses TypeScript types from `lib/types/supabase.ts`
- Requires environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Usage Pattern**:
```typescript
import { supabase } from '@/lib/supabase'

// Query example
const { data, error } = await supabase
  .from('galleries')
  .select('*')
  .order('created_at', { ascending: false })
```

## Common Development Tasks

### Adding a New Page

1. Create a new directory in `app/` (e.g., `app/about/`)
2. Add `page.tsx` file with the page component
3. Update `Navigation.tsx` if needed to add a link

### Adding a New Component

1. Create file in `app/components/` (e.g., `app/components/NewComponent.tsx`)
2. Use `'use client'` if component needs interactivity
3. Follow existing styling patterns (dark theme, moody aesthetic)
4. Import and use in relevant pages

### Database Changes

1. Update `SUPABASE_SCHEMA.sql` with new tables/columns
2. Run SQL in Supabase SQL Editor
3. Regenerate types: `npx supabase gen types typescript --project-id <your-project-id> > lib/types/supabase.ts`
   (Or manually update types if needed)

### Styling Changes

1. Global styles: Edit `app/globals.css`
2. Component styles: Use Tailwind classes inline
3. Custom colors: Add to `:root` and `@theme inline` in `globals.css`

## Important Notes for AI Agents

1. **Theme Consistency**: Maintain the dark, moody aesthetic throughout. Avoid bright colors or light backgrounds unless specifically requested.

2. **Type Safety**: Always use TypeScript types from `lib/types/supabase.ts` when working with database queries.

3. **Environment Variables**: Never commit `.env.local` or expose Supabase keys. Check for environment variable existence before using.

4. **Client vs Server Components**: 
   - Use Server Components by default (better performance)
   - Only use `'use client'` when necessary (state, hooks, browser APIs)

5. **Image Handling**: 
   - Images should be stored in Supabase Storage buckets (`gallery-images`, `cover-images`)
   - Use `image_url` fields in database to reference images
   - Consider lazy loading and optimization for performance

6. **Responsive Design**: Always ensure mobile responsiveness. The Navigation component includes mobile menu patterns to follow.

7. **Error Handling**: Always handle Supabase query errors gracefully. Check for `error` in query responses.

8. **Authentication**: Admin area currently lacks authentication. When implementing, use Supabase Auth or NextAuth.js.

9. **Code Style**: 
   - Use functional components with hooks
   - Prefer async/await over promises
   - Use TypeScript strict mode
   - Follow existing naming conventions

10. **Testing**: Run `npm run lint` before committing changes to catch TypeScript/ESLint errors.

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Environment Setup

Required environment variables (`.env.local`):
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Future Enhancements

- [ ] Implement authentication for admin area
- [ ] Add image upload functionality using Supabase Storage
- [ ] Integrate payment processing for deposits
- [ ] Set up email notifications for enquiries
- [ ] Add calendar integration for availability
- [ ] Implement search/filter functionality for galleries
- [ ] Add image optimization and lazy loading
- [ ] Set up analytics tracking

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Last Updated**: Generated automatically for AI agent reference
**Project**: Kern & Ink Photography Studio Website
