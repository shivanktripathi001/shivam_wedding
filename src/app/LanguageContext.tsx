import { createContext, useContext, useState } from 'react';

type Lang = 'en' | 'hi';

export const translations = {
  en: {
    gettingMarried: "WE'RE GETTING MARRIED",
    saveTheDate: 'Save The Date',
    weddingDate: 'Saturday, 25th April 2026',
    days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds',
    coupleTitle: 'The Couple & Family',
    groom: 'The Groom', bride: 'The Bride',
    sonOf: 'Son of', daughterOf: 'Daughter of',
    groomParents: 'Smt. Anita & Shri Omkar Narayan Chaturvedi',
    groomCity: 'Mukhtyarganj, Satna (M.P.)',
    brideParents: 'Smt. Pratibha & Shri Sukhnandan Prasad Tiwari',
    brideCity: 'Village Khutaha, Baheliya Bhat, Dist. Satna (M.P.)',
    coupleQuote: '"Two souls with but a single thought,\nTwo hearts that beat as one"',
    eventsTitle: 'Wedding Events',
    events: [
      { title: 'Shubh Tilakotasv & Preetibhoj', date: 'Thursday, 23 April 2026', time: '7:00 PM onwards', venue: 'Sun City Garden, Gadhiya Tola, Chitrakoot Road, Satna (M.P.)' },
      { title: 'Haldi, Mehndi & Ladies Sangeet', date: 'Friday, 24 April 2026', time: 'Throughout the day', venue: 'Mukhtyaarganj Swami Ji Chowk, Satna' },
      { title: 'Barat Prasthan & Vatabandh (Wedding)', date: 'Saturday, 25 April 2026', time: 'Barat departs at 7:00 PM', venue: 'From Spark Hotel, Panna Road to City Park, Gate No. 2' },
    ],
    venueTitle: 'Venue & Location',
    venues: [
      { name: 'Sun City Garden', address: 'Gadhiya Tola, Chitrakoot Road, Satna, Madhya Pradesh', event: 'Tilak Ceremony & Preetibhoj' },
      { name: 'City Park', address: 'Gate No. 2, Panna Road, Satna, Madhya Pradesh', event: 'Wedding Ceremony (Vatabandh)' },
    ],
    getDirections: 'Get Directions',
    venueNote: 'Barat will depart from Home, Mukhtyaar ganj Swami Ji Chowk, Satna at 7:00 PM on Saturday, 25th April 2026',
    venueNoteLabel: 'Note:',
    galleryTitle: 'Photo Gallery',
    sharePhotos: 'Get All Wedding Photos',
    uploadInfo: 'To upload and view photos, please use our shared Google Drive folder.',
    openFolder: 'Open Photo Folder',
    previous: 'Previous', next: 'Next',
    familyName: 'Chaturvedi Parivar',
    contactText: 'For any queries, please contact:',
    contactName: 'Shri Omkar Narayan Chaturvedi',
    footerWish: 'We look forward to celebrating this special day with you',
    footerCopy: '© 2026 Shivam & Shivani Wedding • Saturday, 25 April 2026',
  },
  hi: {
    gettingMarried: 'हम विवाह बंधन में बंध रहे हैं',
    saveTheDate: 'तारीख याद रखें',
    weddingDate: 'शनिवार, 25 अप्रैल 2026',
    days: 'दिन', hours: 'घंटे', minutes: 'मिनट', seconds: 'सेकंड',
    coupleTitle: 'वर-वधू एवं परिवार',
    groom: 'वर', bride: 'वधू',
    sonOf: 'पुत्र', daughterOf: 'पुत्री',
    groomParents: 'श्रीमती अनीता एवं श्री ओंकार नारायण चतुर्वेदी',
    groomCity: 'मुख्तियारगंज, सतना (म.प्र.)',
    brideParents: 'श्रीमती प्रतिभा एवं श्री सुखनंदन प्रसाद तिवारी',
    brideCity: 'ग्राम खुटाहा, बहेलिया भाट, जिला सतना (म.प्र.)',
    coupleQuote: '"दो आत्माएं, एक विचार,\nदो हृदय, एक धड़कन"',
    eventsTitle: 'विवाह कार्यक्रम',
    events: [
      { title: 'शुभ तिलकोत्सव एवं प्रीतिभोज', date: 'गुरुवार, 23 अप्रैल 2026', time: 'सायं 7:00 बजे से', venue: 'सन सिटी गार्डन, गढ़िया टोला, चित्रकूट रोड, सतना (म.प्र.)' },
      { title: 'हल्दी, मेहंदी एवं लेडीज संगीत', date: 'शुक्रवार, 24 अप्रैल 2026', time: 'दिनभर', venue: 'मुख्तियारगंज स्वामी जी चौक, सतना' },
      { title: 'बारात प्रस्थान एवं वटबंध (विवाह)', date: 'शनिवार, 25 अप्रैल 2026', time: 'बारात प्रस्थान सायं 7:00 बजे', venue: 'स्पार्क होटल, पन्ना रोड से सिटी पार्क, गेट नं. 2' },
    ],
    venueTitle: 'स्थान एवं पता',
    venues: [
      { name: 'सन सिटी गार्डन', address: 'गढ़िया टोला, चित्रकूट रोड, सतना, मध्य प्रदेश', event: 'तिलक समारोह एवं प्रीतिभोज' },
      { name: 'सिटी पार्क', address: 'गेट नं. 2, पन्ना रोड, सतना, मध्य प्रदेश', event: 'विवाह समारोह (वटबंध)' },
    ],
    getDirections: 'दिशा-निर्देश पाएं',
    venueNote: 'बारात स्पार्क होटल, पन्ना रोड से शनिवार, 25 अप्रैल 2026 को सायं 7:00 बजे प्रस्थान करेगी',
    venueNoteLabel: 'नोट:',
    galleryTitle: 'फोटो गैलरी',
    sharePhotos: 'सभी विवाह फोटो',
    uploadInfo: 'फोटो अपलोड और देखने के लिए हमारे साझा Google Drive फ़ोल्डर का उपयोग करें।',
    openFolder: 'फोटो फ़ोल्डर खोलें',
    previous: 'पिछला', next: 'अगला',
    familyName: 'चतुर्वेदी परिवार',
    contactText: 'किसी भी जानकारी के लिए संपर्क करें:',
    contactName: 'श्री ओंकार नारायण चतुर्वेदी',
    footerWish: 'हम इस शुभ अवसर पर आपके साथ उत्सव मनाने की प्रतीक्षा में हैं',
    footerCopy: '© 2026 शिवम एवं शिवानी विवाह • शनिवार, 25 अप्रैल 2026',
  },
};

type Translations = typeof translations.en;
interface LangContextType { lang: Lang; t: Translations; toggle: () => void; }

const LangContext = createContext<LangContextType>({} as LangContextType);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggle = () => setLang(l => l === 'en' ? 'hi' : 'en');
  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
