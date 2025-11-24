import React, { useState, useEffect } from 'react';
import P2 from '../../public/p2.jpg';
import P1 from '../../public/p1.jpg';
import P3 from '../../public/p3.jpg';
import P4 from '../../public/p4.jpg';
import P5 from '../../public/p5.jpg';
import P6 from '../../public/p6.jpg';
import P7 from '../../public/p7.jpg';
import P8 from '../../public/p8.jpg';

const Gallery = ({ darkMode }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  
  const photos = [
    { id: 1, url: P1, alt: 'Foto 1' },
    { id: 2, url: P2, alt: 'Foto 2' },
    { id: 3, url: P3, alt: 'Foto 3' },
    { id: 4, url: P4, alt: 'Foto 4' },
    { id: 5, url: P5, alt: 'Foto 5' },
    { id: 6, url: P6, alt: 'Foto 6' },
    { id: 7, url: P7, alt: 'Foto 7' },
    { id: 8, url: P8, alt: 'Foto 8' },
  ];

  // Navigation functions
  const goToPrevious = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'ArrowLeft') goToPrevious(e);
      if (e.key === 'ArrowRight') goToNext(e);
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Swipe detection for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext({ stopPropagation: () => {} });
    }
    if (isRightSwipe) {
      goToPrevious({ stopPropagation: () => {} });
    }
  };

  // Download function
  const handleDownload = async (e) => {
    e.stopPropagation();
    const photo = photos[selectedIndex];
    
    try {
      const response = await fetch(photo.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `photo-${selectedIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  // Lazy loading image handler
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={photo.id} 
                onClick={() => setSelectedIndex(index)}
                className={`${cardBg} rounded-lg shadow-lg overflow-hidden aspect-square hover:shadow-2xl transition-all duration-300 cursor-pointer group relative`}
              >
                {!loadedImages[photo.id] && (
                  <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                )}
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(photo.id)}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    loadedImages[photo.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal dengan Navigation */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            ×
          </button>

          {/* Download Button */}
          <button 
            className="absolute top-4 right-20 text-white hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center"
            onClick={handleDownload}
            aria-label="Download"
            title="Download foto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center hover:scale-110"
            onClick={goToPrevious}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image Container */}
          <div className="relative max-w-6xl max-h-[90vh] flex flex-col items-center">
            <img 
              src={photos[selectedIndex].url} 
              alt={photos[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Image Counter */}
            <p className="text-white mt-4 text-lg">
              {selectedIndex + 1} / {photos.length}
            </p>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center hover:scale-110"
            onClick={goToNext}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;