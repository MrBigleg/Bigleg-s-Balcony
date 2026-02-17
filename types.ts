
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type UserRole = 'artist' | 'moderator' | 'admin';

export interface AppUser {
  uid: string;
  role: UserRole;
  displayName: string;
  photoURL: string;
  provider: string;
  createdAt: any;
}

export enum Province {
  Bangkok = 'Bangkok',
  ChiangMai = 'Chiang Mai',
  Phuket = 'Phuket',
  Pattaya = 'Pattaya',
  KhonKaen = 'Khon Kaen'
}

export enum LocationType {
  BusinessExterior = 'Business Exterior',
  Venue = 'Venue',
  TransportHub = 'Transport Hub',
  FestivalWall = 'Festival Wall',
  CommissionedSpace = 'Commissioned Space',
  PublicInfrastructure = 'Public Infrastructure'
}

export enum PermanenceTier {
  Tier1Permanent = 'Permanent',
  Tier2Rotational = 'Rotational',
  Tier3Ephemeral = 'Ephemeral'
}

export enum ArtworkStatus {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
  Archived = 'archived'
}

export interface Artwork {
  artworkId: string;
  artistId: string;
  artistAlias?: string;
  title_en: string;
  title_th: string;
  description_en: string;
  description_th: string;
  province: Province;
  city: string;
  location: {
    locationNameSubmitted: string;
    locationType: LocationType;
    generalAreaDescription: string;
    googlePlaceId?: string;
    googleMapsUrl?: string;
  };
  permanenceIndex: PermanenceTier;
  status: ArtworkStatus;
  isGhost: boolean;
  lastVerifiedAt?: any;
  media: {
    coverUrl: string;
    items: Array<{
      type: 'image' | 'video';
      url: string;
      thumbUrl?: string;
    }>;
  };
  createdAt: any;
  updatedAt: any;
}

export interface ArtistProfile {
  artistId: string;
  alias: string;
  bio_en: string;
  bio_th: string;
  citiesActive: string[];
  links: {
    instagramUrl?: string;
    facebookUrl?: string;
    websiteUrl?: string;
  };
}

export interface TranslationSchema {
  hero_title: string;
  hero_subtitle: string;
  browse_provinces: string;
  browse_latest: string;
  submit_artwork: string;
  status_pending: string;
  status_approved: string;
  artist_profile: string;
  location_type: string;
  permanence: string;
  view_on_maps: string;
  login: string;
  logout: string;
  thai: string;
  english: string;
}

/** Fix: Added missing ChatMessage interface for AIChat component */
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

/** Fix: Added missing Artist interface for ArtistCard component */
export interface Artist {
  id: string;
  name: string;
  image: string;
  day: string;
  genre: string;
}
