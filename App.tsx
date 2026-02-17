
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Plus, 
  User, 
  Globe, 
  Menu, 
  X, 
  Image as ImageIcon, 
  Search, 
  ShieldCheck, 
  Camera,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { BilingualProvider, useTranslation } from './components/BilingualProvider';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import { Artwork, Province, ArtworkStatus, PermanenceTier } from './types';
// Fix: Import AIChat component
import AIChat from './components/AIChat';

// Placeholder for Firebase - Implement in actual environment
const mockArtworks: Artwork[] = [
  {
    artworkId: '1',
    artistId: 'a1',
    artistAlias: 'ALEX FACE',
    title_en: 'Mardi at Charoen Krung',
    title_th: 'มาร์ดี ที่เจริญกรุง',
    description_en: 'The iconic three-eyed baby character near Soi 32.',
    description_th: 'ตัวละครเด็กสามตาที่เป็นเอกลักษณ์บริเวณซอย 32',
    province: Province.Bangkok,
    city: 'Bang Rak',
    location: {
      locationNameSubmitted: 'Charoen Krung Soi 32',
      locationType: 'PublicInfrastructure' as any,
      generalAreaDescription: 'Near the Grand Postal Building',
      googleMapsUrl: 'https://maps.google.com'
    },
    permanenceIndex: PermanenceTier.Tier1Permanent,
    status: ArtworkStatus.Approved,
    isGhost: false,
    media: {
      coverUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop',
      items: []
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    artworkId: '2',
    artistId: 'a2',
    artistAlias: 'MUE BON',
    title_en: 'Phuket Old Town Bird',
    title_th: 'นกย่านเมืองเก่าภูเก็ต',
    description_en: 'Vibrant street art in the heart of the historic district.',
    description_th: 'ศิลปะบนผนังที่มีสีสันใจกลางย่านประวัติศาสตร์',
    province: Province.Phuket,
    city: 'Phuket Town',
    location: {
      locationNameSubmitted: 'Soi Romanee',
      locationType: 'Venue' as any,
      generalAreaDescription: 'Colorful colonial buildings area'
    },
    permanenceIndex: PermanenceTier.Tier1Permanent,
    status: ArtworkStatus.Approved,
    isGhost: false,
    media: {
      coverUrl: 'https://images.unsplash.com/photo-1561059488-916d69792237?q=80&w=1000&auto=format&fit=crop',
      items: []
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const Header = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="font-heading text-xl md:text-2xl font-black tracking-tighter text-white">
            BIGLEG'S <span className="text-[#4fb7b3]">BALCONY</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="text-xs font-bold tracking-widest uppercase hover:text-[#4fb7b3] transition-colors">{t.browse_provinces}</button>
          <button className="text-xs font-bold tracking-widest uppercase hover:text-[#4fb7b3] transition-colors">{t.browse_latest}</button>
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#4fb7b3] transition-all">
            <Plus className="w-4 h-4" /> {t.submit_artwork}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
            className="text-xs font-mono border border-white/20 px-3 py-1 rounded hover:bg-white/10"
          >
            {language === 'en' ? 'TH' : 'EN'}
          </button>
          <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <button className="hidden md:flex p-2 bg-white/5 rounded-full hover:bg-white/10">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[85vh] flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Camera className="w-4 h-4 text-[#4fb7b3]" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">{t.hero_subtitle}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-[10vw] font-black leading-[0.9] mb-8 tracking-tighter"
        >
          BIGLEG'S <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4fb7b3] to-white/50">BALCONY</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="px-8 py-4 bg-[#4fb7b3] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform">
            {t.browse_latest}
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-colors">
            {t.browse_provinces}
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ChevronRight className="rotate-90 text-white/30" />
      </div>
    </section>
  );
};

const ArtworkGrid = ({ items }: { items: Artwork[] }) => {
  const { getField, t } = useTranslation();
  const [selected, setSelected] = useState<Artwork | null>(null);

  return (
    <section className="max-w-[1800px] mx-auto px-6 py-20">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((art) => (
          <motion.div
            key={art.artworkId}
            layoutId={art.artworkId}
            onClick={() => setSelected(art)}
            className="relative group rounded-3xl overflow-hidden cursor-none bg-zinc-900 border border-white/5 break-inside-avoid"
            data-hover="true"
          >
            <img 
              src={art.media.coverUrl} 
              alt={getField(art.title_en, art.title_th)} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono border border-white/20 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
                  {art.province}
                </span>
                <span className="text-[10px] font-mono text-[#a8fbd3] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> {t.status_approved}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-1">{getField(art.title_en, art.title_th)}</h3>
              <p className="text-xs text-white/50 tracking-widest uppercase">{art.artistAlias}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Carousel / Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl p-6 md:p-12 overflow-y-auto"
          >
            <button 
              onClick={() => setSelected(null)}
              className="fixed top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
              <div className="lg:col-span-8">
                 <motion.img 
                  layoutId={selected.artworkId}
                  src={selected.media.coverUrl} 
                  className="w-full rounded-2xl shadow-2xl"
                 />
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">{getField(selected.title_en, selected.title_th)}</h2>
                  <p className="text-[#4fb7b3] font-bold text-xl tracking-widest uppercase">{selected.artistAlias}</p>
                </div>
                
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  {getField(selected.description_en, selected.description_th)}
                </p>

                <div className="space-y-4 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl"><MapPin className="w-5 h-5 text-gray-400" /></div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.view_on_maps}</p>
                      <p className="text-white font-medium">{selected.location.locationNameSubmitted}, {selected.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl"><Globe className="w-5 h-5 text-gray-400" /></div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.permanence}</p>
                      <p className="text-[#a8fbd3] font-medium">{selected.permanenceIndex}</p>
                    </div>
                  </div>
                </div>

                {selected.location.googleMapsUrl && (
                  <a 
                    href={selected.location.googleMapsUrl} 
                    target="_blank" 
                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-[#4fb7b3] transition-colors"
                  >
                    {t.view_on_maps} <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <CustomCursor />
      <FluidBackground />
      <Header />
      <Hero />
      <ArtworkGrid items={mockArtworks} />
      
      {/* Fix: Added AIChat for interactive festival information */}
      <AIChat />
      
      <footer className="py-20 border-t border-white/5 text-center text-gray-500">
        <div className="font-heading text-xl font-bold mb-4 tracking-tighter text-white/20">BIGLEG'S BALCONY</div>
        <p className="text-xs uppercase tracking-widest font-bold">Bangkok • Chiang Mai • Phuket • Pattaya • Khon Kaen</p>
        <p className="text-[10px] mt-8 text-white/10">Artist-submitted. No commercial placements.</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BilingualProvider>
      <AppContent />
    </BilingualProvider>
  );
};

export default App;
