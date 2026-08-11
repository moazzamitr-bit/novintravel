import { formatToman, toPersianDigits } from "@/lib/utils";

export type SortOption = "cheapest" | "fastest" | "recommended";

export interface DemoFlight {
  id: string;
  airline: string;
  flightNo: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  stops: number;
  cabin: string;
  price: number;
  seatsLeft?: number;
  badge?: string;
}

export interface DemoHotel {
  id: string;
  name: string;
  city: string;
  stars: number;
  score: number;
  reviews: number;
  priceFrom: number;
  image: string;
  tags: string[];
  board: string;
}

export interface DemoTour {
  id: string;
  title: string;
  nights: number;
  days: number;
  origin: string;
  destination: string;
  priceFrom: number;
  image: string;
  includes: string[];
  departure: string;
}

export interface DemoStay {
  id: string;
  title: string;
  city: string;
  type: string;
  guests: number;
  rooms: number;
  priceFrom: number;
  image: string;
  rating: number;
}

export interface DemoTransport {
  id: string;
  company: string;
  origin: string;
  destination: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  seatClass: string;
  price: number;
}

export const demoFlights: DemoFlight[] = [
  {
    id: "f1",
    airline: "ایران‌ایر",
    flightNo: "IR244",
    origin: "تهران",
    originCode: "THR",
    destination: "مشهد",
    destinationCode: "MHD",
    departTime: "۰۶:۳۰",
    arriveTime: "۰۷:۵۵",
    duration: "۱س ۲۵د",
    stops: 0,
    cabin: "اکونومی",
    price: 1280000,
    seatsLeft: 4,
    badge: "پیشنهادی",
  },
  {
    id: "f2",
    airline: "ماهان",
    flightNo: "W51012",
    origin: "تهران",
    originCode: "THR",
    destination: "مشهد",
    destinationCode: "MHD",
    departTime: "۰۹:۱۵",
    arriveTime: "۱۰:۴۰",
    duration: "۱س ۲۵د",
    stops: 0,
    cabin: "اکونومی",
    price: 1450000,
  },
  {
    id: "f3",
    airline: "آسمان",
    flightNo: "EP882",
    origin: "تهران",
    originCode: "THR",
    destination: "مشهد",
    destinationCode: "MHD",
    departTime: "۱۴:۲۰",
    arriveTime: "۱۵:۵۰",
    duration: "۱س ۳۰د",
    stops: 0,
    cabin: "اکونومی",
    price: 1190000,
    badge: "ارزان‌ترین",
  },
  {
    id: "f4",
    airline: "قشم‌ایر",
    flightNo: "QB1205",
    origin: "تهران",
    originCode: "THR",
    destination: "مشهد",
    destinationCode: "MHD",
    departTime: "۱۹:۴۵",
    arriveTime: "۲۱:۱۰",
    duration: "۱س ۲۵د",
    stops: 0,
    cabin: "بیزینس",
    price: 2890000,
    badge: "بیزینس",
  },
  {
    id: "f5",
    airline: "ترکیش",
    flightNo: "TK873",
    origin: "تهران",
    originCode: "IKA",
    destination: "استانبول",
    destinationCode: "IST",
    departTime: "۰۳:۴۰",
    arriveTime: "۰۶:۱۵",
    duration: "۳س ۳۵د",
    stops: 0,
    cabin: "اکونومی",
    price: 6890000,
    badge: "خارجی",
  },
];

export const demoHotels: DemoHotel[] = [
  {
    id: "h1",
    name: "هتل درویشی مشهد",
    city: "مشهد",
    stars: 5,
    score: 8.9,
    reviews: 1240,
    priceFrom: 4200000,
    image: "/images/destinations/mashhad.jpg",
    tags: ["مرکز شهر", "صبحانه"],
    board: "با صبحانه",
  },
  {
    id: "h2",
    name: "هتل آسمان کیش",
    city: "کیش",
    stars: 4,
    score: 8.4,
    reviews: 860,
    priceFrom: 3100000,
    image: "/images/destinations/kish.jpg",
    tags: ["نزدیک ساحل", "استخر"],
    board: "فقط اقامت",
  },
  {
    id: "h3",
    name: "هتل زندیه شیراز",
    city: "شیراز",
    stars: 5,
    score: 9.1,
    reviews: 640,
    priceFrom: 3850000,
    image: "/images/destinations/shiraz.jpg",
    tags: ["لوکس", "اسپا"],
    board: "با صبحانه",
  },
  {
    id: "h4",
    name: "هتل پارک استانبول",
    city: "استانبول",
    stars: 4,
    score: 8.7,
    reviews: 2100,
    priceFrom: 5600000,
    image: "/images/destinations/istanbul.jpg",
    tags: ["بی اوغلو", "مترو"],
    board: "با صبحانه",
  },
];

export const demoTours: DemoTour[] = [
  {
    id: "t1",
    title: "تور ۴ روزه استانبول",
    nights: 3,
    days: 4,
    origin: "تهران",
    destination: "استانبول",
    priceFrom: 28900000,
    image: "/images/destinations/istanbul.jpg",
    includes: ["پرواز", "هتل ۳ شب", "ترانسفر"],
    departure: "هر جمعه",
  },
  {
    id: "t2",
    title: "تور ۳ روزه کیش",
    nights: 2,
    days: 3,
    origin: "تهران",
    destination: "کیش",
    priceFrom: 12400000,
    image: "/images/destinations/kish.jpg",
    includes: ["پرواز", "هتل ۲ شب", "بیمه"],
    departure: "روزانه",
  },
  {
    id: "t3",
    title: "تور شیراز گردی",
    nights: 2,
    days: 3,
    origin: "تهران",
    destination: "شیراز",
    priceFrom: 9800000,
    image: "/images/destinations/shiraz.jpg",
    includes: ["پرواز", "هتل", "گشت شهری"],
    departure: "پنجشنبه",
  },
];

export const demoStays: DemoStay[] = [
  {
    id: "s1",
    title: "ویلای ساحلی دوخوابه",
    city: "کیش",
    type: "ویلا",
    guests: 6,
    rooms: 2,
    priceFrom: 8900000,
    image: "/images/destinations/kish.jpg",
    rating: 4.8,
  },
  {
    id: "s2",
    title: "سوئیت مدرن مرکز شهر",
    city: "تبریز",
    type: "سوئیت",
    guests: 3,
    rooms: 1,
    priceFrom: 2400000,
    image: "/images/destinations/tabriz.jpg",
    rating: 4.6,
  },
  {
    id: "s3",
    title: "اقامتگاه سنتی حیاط‌دار",
    city: "شیراز",
    type: "اقامتگاه",
    guests: 8,
    rooms: 3,
    priceFrom: 5100000,
    image: "/images/destinations/shiraz.jpg",
    rating: 4.9,
  },
];

export const demoTrains: DemoTransport[] = [
  {
    id: "tr1",
    company: "رجا · زندگی",
    origin: "تهران",
    destination: "مشهد",
    departTime: "۱۷:۳۰",
    arriveTime: "۰۵:۱۰",
    duration: "۱۱س ۴۰د",
    seatClass: "۴ تخته",
    price: 980000,
  },
  {
    id: "tr2",
    company: "رجا · غزال",
    origin: "تهران",
    destination: "مشهد",
    departTime: "۲۱:۰۰",
    arriveTime: "۰۷:۲۰",
    duration: "۱۰س ۲۰د",
    seatClass: "۱ تخته",
    price: 1850000,
  },
  {
    id: "tr3",
    company: "فدک",
    origin: "تهران",
    destination: "اصفهان",
    departTime: "۰۷:۱۵",
    arriveTime: "۱۲:۴۰",
    duration: "۵س ۲۵د",
    seatClass: "۵ ستاره",
    price: 720000,
  },
];

export const demoBuses: DemoTransport[] = [
  {
    id: "b1",
    company: "همسفر",
    origin: "تهران",
    destination: "اصفهان",
    departTime: "۰۸:۰۰",
    arriveTime: "۱۲:۳۰",
    duration: "۴س ۳۰د",
    seatClass: "VIP ۲۵ نفره",
    price: 420000,
  },
  {
    id: "b2",
    company: "ایران‌پیما",
    origin: "تهران",
    destination: "شیراز",
    departTime: "۲۱:۳۰",
    arriveTime: "۰۶:۴۵",
    duration: "۹س ۱۵د",
    seatClass: "معمولی",
    price: 380000,
  },
  {
    id: "b3",
    company: "سیر و سفر",
    origin: "تهران",
    destination: "تبریز",
    departTime: "۲۳:۰۰",
    arriveTime: "۰۸:۲۰",
    duration: "۹س ۲۰د",
    seatClass: "VIP",
    price: 510000,
  },
];

export function priceLabel(amount: number) {
  return `${formatToman(amount)} تومان`;
}

export function starsLabel(stars: number) {
  return `${toPersianDigits(stars)} ستاره`;
}
