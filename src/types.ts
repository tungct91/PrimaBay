export interface ApartmentType {
  id: string;
  name: string;
  category: 'studio' | 'studio-plus' | '2br' | '3br' | 'penthouse';
  area: string;
  view: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  priceFrom: number; // in VNĐ billions
  priceFormatted: string;
  image: string;
  floorPlan2D: string;
  floorPlan3D: string;
  description: string;
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  category: 'all' | 'sports' | 'leisure' | 'wellness' | 'dining';
  icon: string;
  description: string;
  image: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'interior' | 'amenities' | 'night';
  imageUrl: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'legal' | 'progress' | 'finance' | 'operation';
}

export interface LocationPoint {
  id: string;
  name: string;
  distance: string;
  time: string;
  icon: string;
  category: 'travel' | 'entertainment' | 'nature' | 'shopping';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  apartmentInterest: string;
  notes: string;
}
