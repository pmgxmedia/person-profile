'use client';

interface GalleryItem {
  id: string;
  title: string;
  theme: string;
  year: string;
  images: string[];
  coverImage: string;
}

interface ImageModalProps {
  gallery: GalleryItem;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onThumbnailClick: (index: number) => void;
}

export default function ImageModal({ gallery, currentIndex, onClose, onNext, onPrev, onThumbnailClick }: ImageModalProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-accent-rose transition-colors p-2"
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 text-white hover:text-accent-rose transition-colors p-4 bg-black/50 rounded-full backdrop-blur-sm"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 text-white hover:text-accent-rose transition-colors p-4 bg-black/50 rounded-full backdrop-blur-sm"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-full h-[90vh] bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
            <span className="text-gray-500">Image {currentIndex + 1} of {gallery.images.length}</span>
          </div>
        </div>
      </div>

      {/* Gallery Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-serif text-2xl font-semibold text-white mb-2">
            {gallery.title}
          </h3>
          <p className="text-white/80 text-sm">
            {gallery.theme} • {gallery.year} • Image {currentIndex + 1} of {gallery.images.length}
          </p>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-20 left-0 right-0 overflow-x-auto px-4">
        <div className="max-w-7xl mx-auto flex gap-2">
          {gallery.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onThumbnailClick(index);
              }}
              className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-accent-rose'
                  : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-400">{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

