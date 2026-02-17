
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TranslationSchema } from '../types';

type Language = 'en' | 'th';

const translations: Record<Language, TranslationSchema> = {
  en: {
    hero_title: "Bigleg's Balcony",
    hero_subtitle: "Thailand street art. Artist-submitted. Culturally documented.",
    browse_provinces: "Browse by Province",
    browse_latest: "Latest Artworks",
    submit_artwork: "Submit Artwork",
    status_pending: "Awaiting Moderation",
    status_approved: "Verified",
    artist_profile: "Artist Profile",
    location_type: "Location Type",
    permanence: "Permanence",
    view_on_maps: "View on Google Maps",
    login: "Sign In",
    logout: "Sign Out",
    thai: "ภาษาไทย",
    english: "English"
  },
  th: {
    hero_title: "ระเบียงของบิ๊กเลก",
    hero_subtitle: "ศิลปะข้างถนนในไทย ส่งโดยศิลปิน บันทึกทางวัฒนธรรม",
    browse_provinces: "เลือกตามจังหวัด",
    browse_latest: "ผลงานล่าสุด",
    submit_artwork: "ส่งผลงาน",
    status_pending: "รอการตรวจสอบ",
    status_approved: "ตรวจสอบแล้ว",
    artist_profile: "ประวัติศิลปิน",
    location_type: "ประเภทสถานที่",
    permanence: "ระยะเวลาแสดง",
    view_on_maps: "ดูใน Google Maps",
    login: "เข้าสู่ระบบ",
    logout: "ออกจากระบบ",
    thai: "ภาษาไทย",
    english: "English"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  getField: (en: string, th?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const BilingualProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const getField = (en: string, th?: string) => {
    if (language === 'th' && th) return th;
    return en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], getField }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within BilingualProvider");
  return context;
};
