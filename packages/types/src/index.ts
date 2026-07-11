export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'customer' | 'employee' | 'kitchen' | 'admin' | 'company_manager' | 'owner';
  avatar_url?: string;
  is_active: boolean;
  created_at: string;
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
  created_at: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category_id: string;
  image_url?: string;
  is_available: boolean;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  company_id: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  created_at: string;
}

export interface OrderItem {
  id: string;
  menu_item_id: string;
  quantity: number;
  unit_price: number;
  notes?: string;
}
