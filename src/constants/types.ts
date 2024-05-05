export type NavigationTypes = {
  id: number;
  name: string;
  url: string;
  isMobile?: boolean;
};

export type MasonryGalleryType = {
  id: number;
  imagePath: string;
  name: string;
};

export type TeamCard = {
  id: number;
  imagePath: string;
  username: string;
  userrole: string;
};
type PriceData = {
  name: string;
};
export type PriceCard = {
  id: number;
  title: string;
  price: string;
  requirement: string;
  btnText: string;
  options: PriceData[];
  trailDuration: string;
  btnColorClass?: string;
};
