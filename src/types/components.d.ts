export interface WorkshopProps {
  workshop: {
    id: number;
    about: string;
    name: string;
    owner: number,
    address: string;
    map_embed_url: string;
    phone?: string;
    email?: string;
  }
}