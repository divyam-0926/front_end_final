export interface Destination {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  image: string;
  days: string[];
  details: { icon: string; title: string; desc: string }[];
}
