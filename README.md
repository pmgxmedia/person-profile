# Wedding Photography Website

A beautiful, elegant wedding photography website built with Next.js, featuring a classic design with vibrant color accents. The site includes a portfolio gallery, booking system, testimonials, and a comprehensive admin area for content management.

## Features

- **Elegant Design**: Clean typography, generous white space, and refined layouts with bold color accents
- **Portfolio/Gallery**: Full-screen image viewer with theme-based filtering
- **Booking System**: Package selection, availability preview, and enquiry form
- **Testimonials**: Client reviews with featured testimonials section
- **Admin Dashboard**: Intuitive content management for galleries, packages, testimonials, and enquiries
- **Fully Responsive**: Polished experience on mobile, tablet, and desktop

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Supabase** - Database and backend services
- **Playfair Display & Inter** - Elegant typography

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Set up the database:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Run the SQL commands from `SUPABASE_SCHEMA.sql` to create the necessary tables

4. Set up storage buckets (optional, for image uploads):
   - In Supabase Dashboard > Storage
   - Create buckets: `gallery-images` and `cover-images`
   - Set them to public if you want direct image access

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
person-profile/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ImageModal.tsx
│   ├── portfolio/           # Gallery/Portfolio page
│   ├── booking/            # Booking and packages page
│   ├── testimonials/       # Client testimonials page
│   ├── admin/              # Admin dashboard
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── types/
│       └── supabase.ts     # Database types
└── SUPABASE_SCHEMA.sql     # Database schema
```

## Admin Area

Access the admin dashboard at `/admin` to:
- Upload and manage photo galleries
- Update package pricing and features
- Approve and manage client testimonials
- View and respond to booking enquiries

**Note**: You'll need to implement authentication to secure the admin area. Consider using Supabase Auth or NextAuth.js.

## Customization

### Colors

The color scheme is defined in `app/globals.css`:
- `--accent-rose`: Primary accent color (#e91e63)
- `--accent-gold`: Secondary accent (#d4af37)
- `--accent-sage`: Tertiary accent (#87a96b)
- `--accent-lavender`: Quaternary accent (#9b7bb8)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

Both fonts are loaded via Next.js font optimization.

## Next Steps

1. **Connect to Supabase**: Update the components to fetch real data from your Supabase database
2. **Image Upload**: Implement image upload functionality using Supabase Storage
3. **Authentication**: Add authentication to secure the admin area
4. **Payment Integration**: Add payment processing for deposits (Stripe, PayPal, etc.)
5. **Email Notifications**: Set up email notifications for new enquiries
6. **Calendar Integration**: Connect a calendar API for real-time availability

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Support

For issues or questions, please check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available for personal and commercial use.
