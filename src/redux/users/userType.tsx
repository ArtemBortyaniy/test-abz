export interface Link {
  next_url: string | null;
  prev_url: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
}

export interface ApiResponse {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: Link;
  users: User[];
}

export interface Pagination {
  page: number;
  count: number;
}

export interface Users {
  users: {
    success: boolean;
    page: number;
    total_pages: number;
    total_users: number;
    count: number;
    links: Link;
    users: User[];
  }[];
}
