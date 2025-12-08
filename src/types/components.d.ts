export interface WorkshopProps {
  workshop: {
    id: number;
    name: string;
    owner: number,
    address: string;
    map_embed_url: string;
    phone?: string;
    email?: string;
  }
}