'use client';

import { useState } from 'react';
import ImageModal from '../components/ImageModal';

interface GalleryItem {
  id: string;
  title: string;
  theme: string;
  year: string;
  images: string[];
  coverImage: string;
}

// Mock data - will be replaced with Supabase data
const galleries: GalleryItem[] = [
  {
    id: '1',
    title: 'Elegant Garden Wedding',
    theme: 'Garden',
    year: '2024',
    images: ['/placeholder-1.jpg', '/placeholder-2.jpg', '/placeholder-3.jpg'],
    coverImage: '/placeholder-1.jpg'
  },
  {
    id: '2',
    title: 'Beachside Celebration',
    theme: 'Beach',
    year: '2024',
    images: ['/placeholder-2.jpg', '/placeholder-3.jpg', '/placeholder-1.jpg'],
    coverImage: '/placeholder-2.jpg'
  },
  {
    id: '3',
    title: 'Vintage Estate Wedding',
    theme: 'Vintage',
    year: '2023',
    images: ['/placeholder-3.jpg', '/placeholder-1.jpg', '/placeholder-2.jpg'],
    coverImage: '/placeholder-3.jpg'
  },
  {
    id: '4',
    title: 'Modern City Hall',
    theme: 'Modern',
    year: '2024',
    images: ['/placeholder-1.jpg', '/placeholder-2.jpg', '/placeholder-3.jpg'],
    coverImage: '/placeholder-1.jpg'
  },
  {
    id: '5',
    title: 'Rustic Barn Wedding',
    theme: 'Rustic',
    year: '2023',
    images: ['/placeholder-2.jpg', '/placeholder-3.jpg', '/placeholder-1.jpg'],
    coverImage: '/placeholder-2.jpg'
  },
  {
    id: '6',
    title: 'Luxury Hotel Ballroom',
    theme: 'Luxury',
    year: '2024',
    images: ['/placeholder-3.jpg', '/placeholder-1.jpg', '/placeholder-2.jpg'],
    coverImage: '/placeholder-3.jpg'
  },
];

export default function PortfolioPage() {
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const themes = ['All', ...Array.from(new Set(galleries.map(g => g.theme)))];

  const filteredGalleries = selectedTheme === 'All'
    ? galleries
    : galleries.filter(g => g.theme === selectedTheme);

  const openGallery = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedGallery(null);
  };

  const nextImage = () => {
    if (selectedGallery) {
      setSelectedImageIndex((prev) => 
        prev < selectedGallery.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedGallery) {
      setSelectedImageIndex((prev) => 
        prev > 0 ? prev - 1 : selectedGallery.images.length - 1
      );
    }
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful wedding moments, each telling a unique love story
          </p>
        </div>

        {/* Theme Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedTheme === theme
                  ? 'bg-accent-rose text-white shadow-lg'
                  : 'bg-white text-foreground border-2 border-gray-200 hover:border-accent-rose'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGalleries.map((gallery) => (
            <div
              key={gallery.id}
              onClick={() => openGallery(gallery)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Gallery Image</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm font-medium mb-1">{gallery.theme}</p>
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">
                    {gallery.title}
                  </h3>
                  <p className="text-white/80 text-sm">{gallery.year}</p>
                </div>
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-accent-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGalleries.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No galleries found for this theme.</p>
          </div>
        )}
      </div>

      {/* Full-Screen Image Modal */}
      {selectedGallery && (
        <ImageModal
          gallery={selectedGallery}
          currentIndex={selectedImageIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
          onThumbnailClick={handleThumbnailClick}
        />
      )}
    </div>
  );
}

