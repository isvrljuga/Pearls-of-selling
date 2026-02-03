
export interface Pearl {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string[];
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}
