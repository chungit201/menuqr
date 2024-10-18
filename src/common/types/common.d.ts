interface Product {
  id: string;
  name: string;
  engName: string;
  price: number;
  originalPrice: number;
  lastPrice: number;
  isActive: boolean;
  imageUrl: string;
  deleteAt?: string;
  productProperties: ProductProperty[];
  note: string;
  description: string;
  categoryId: string;
  isAvailable: boolean;
}

interface IHome {
  serviceFacilityId: string;
  tableId: string;
}

interface IListStore {
  items: StoreDetail[];
  metaData: MetaData;
}

interface StoreDetail {
  id: string;
  name: string;
  engName?: string;
  products?: Product[];
  province: Province;
  district: District;
  ward: Ward;
  address: string;
  imageStoreUrl: string | null;
  bestSeller?: Product[];
}

interface MetaData {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

interface Province {
  id?: string;
  name: string;
  engName?: string;
}
interface District {
  id?: string;
  name: string;
  engName?: string;
  provinceId?: string;
}
interface Ward {
  id?: string;
  name: string;
  engName?: string;
  districtId?: string;
}
