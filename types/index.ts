// Tipe-tipe yang dipakai bersama di seluruh project
// Tambahkan tipe baru di sini, bukan di masing-masing komponen

export type PackageType = "reguler" | "business" | "vip"

export interface Package {
  id: string
  slug: string
  name: string
  type: PackageType
  price: string
  priceNum: number
  duration: string        // dalam hari
  badge: string | null
  highlight: boolean
  departureDate?: string  // format: "2025-03-15"
  quota?: string
  hotelMecca: string
  hotelMadinah: string
  airline: string
  includes: string[]
  excludes?: string[]
  itinerary?: ItineraryDay[]
  images?: string[]
  isAvailable?: boolean
}

export interface ItineraryDay {
  day: number
  title: string
  activities: string[]
}

export interface RegistrationForm {
  // Data diri
  fullName: string
  nik: string
  birthDate: string
  phone: string
  email: string
  address: string
  // Paket
  packageId: string
  departureDate: string
  roomType: "single" | "double" | "triple" | "quad"
  // Mahram (untuk jamaah wanita)
  needsMahram: boolean
  mahramName?: string
  mahramRelation?: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  package: string
  initials: string
  bg: string
}

export interface FAQ {
  q: string
  a: string
}