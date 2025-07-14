// constants/index.js
export const CATEGORIES = ['all', 'Thực phẩm tươi sống', 'Đồ đóng hộp', 'Đồ uống', 'Đồ ăn vặt', 'Loại khác'];

export const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'Home' },
  { id: 'products', label: 'Quản lý sản phẩm', icon: 'Package' },
  { id: 'analytics', label: 'Thống kê', icon: 'BarChart3' },
  { id: 'users', label: 'Người dùng', icon: 'Users' },
  { id: 'settings', label: 'Cài đặt', icon: 'Settings' }
];

export const PRODUCT_STATUS = {
  ACTIVE: 'active',
  EXPIRY: 'expiry',
  EXPIRED: 'expired',
  YES: 'yes',
  NO: 'no'
};

export const INITIAL_PRODUCTS = [
   {
    id: 11,
    image: 'https://tse3.mm.bing.net/th/id/OIP.t7BdIvmCO4Yw2A49Oz8gjgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    name: 'Trứng gà',
    category: 'Trứng',
    addedDate: '2025-07-13',
    expiryDate: '2025-07-25',
    unit: 'Vỉ',
    quantityNow: 5,
    note: 'Để ngăn mát, không rửa',
    status: 'active', // ✅ còn hạn
    used: 'no',
  },
  {
    id: 10,
    image: 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P05047_2.jpg',
    name: 'Sữa tươi Vinamilk',
    category: 'Thực phẩm',
    addedDate: '2025-07-01',
    expiryDate: '2025-12-01',
    unit: 'Hộp',
    quantityNow: 100,
    note: 'Bảo quản lạnh',
    status: 'active', // ✅ còn hạn nhiều
    used: 'no',
  },
  {
    id: 9,
    image: 'https://comtambason.com/wp-content/uploads/2020/12/Banh-mi.png',
    name: 'Bánh mì',
    category: 'Thực phẩm',
    addedDate: '2025-07-10',
    expiryDate: '2025-07-15',
    unit: 'Ổ',
    quantityNow: 50,
    note: '',
    status: 'expiry', // ⚠️ còn 2 ngày
    used: 'no',
  },
  {
    id: 8,
    image: 'https://th.bing.com/th/id/R.96cdf03ccd538d43896b0278e6d4a07e?rik=9VcGi0%2bcQXtP%2bA&pid=ImgRaw&r=0',
    name: 'Thịt bò tươi',
    category: 'Thịt',
    addedDate: '2025-07-12',
    expiryDate: '2025-07-13',
    unit: 'Kg',
    quantityNow: 2,
    note: 'Dùng trong 2 ngày',
    status: 'expired', // ⚠️ còn 1 ngày
    used: 'no',
  },
  {
    id: 7,
    image: 'https://tse4.mm.bing.net/th/id/OIP.2cR2OAoLE6qH3cAICSMwOAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    name: 'Nước suối Lavie',
    category: 'Nước uống',
    addedDate: '2025-07-05',
    expiryDate: '2026-07-05',
    unit: 'Chai',
    quantityNow: 30,
    note: '',
    status: 'active', // ✅ còn lâu mới hết
    used: 'no',
  },
  {
    id: 6,
    image: 'https://tse3.mm.bing.net/th/id/OIP.t7BdIvmCO4Yw2A49Oz8gjgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    name: 'Trứng gà',
    category: 'Trứng',
    addedDate: '2025-07-08',
    expiryDate: '2025-07-20',
    unit: 'Vỉ',
    quantityNow: 2,
    note: 'Để ngăn mát, không rửa',
    status: 'active', // ✅ còn hạn
    used: 'no',
  },
  {
    id: 5,
    image: 'https://th.bing.com/th/id/R.5731002fafa6e2f4744dd457b4a012b5?rik=PBAEvANzNrXf8g&pid=ImgRaw&r=0',
    name: 'Trà xanh C2',
    category: 'Nước uống',
    addedDate: '2025-07-11',
    expiryDate: '2026-01-11',
    unit: 'Chai',
    quantityNow: 0,
    note: '',
    status: 'expired', // ❌ đã dùng hết
    used: 'yes',
  },
  {
    id: 4,
    image: 'https://hatgiongphuongnam.com/asset/upload/image/hat-giong-rau-xa-lach-xoan1.1_.jpg',
    name: 'Rau xà lách',
    category: 'Rau xanh',
    addedDate: '2025-07-11',
    expiryDate: '2025-07-13',
    unit: 'Bó',
    quantityNow: 0,
    note: 'Gói giấy, để ngăn rau',
    status: 'expired', // ❌ hôm nay là ngày hết hạn
    used: 'yes',
  },
  {
    id: 3,
    image: "https://tse4.mm.bing.net/th/id/OIP.4G9K29qngZcxMUNxm56oeAHaHP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Bánh kem",
    category: "Bánh ngọt",
    addedDate: "2025-07-12",
    expiryDate: "2025-07-13",
    unit: "Chiếc",
    quantityNow: 0,
    note: "",
    status: "expired", // ❌ hết hạn hôm nay
    used: 'yes',
  },
  {
    id: 2,
    image: "https://i.ytimg.com/vi/n-HDNu5dCAU/maxresdefault.jpg",
    name: "Sữa chua trái cây",
    category: "Sản phẩm từ sữa",
    addedDate: "2025-07-05",
    expiryDate: "2025-07-10",
    unit: "Hộp",
    quantityNow: 0,
    note: "Ngọt dịu",
    status: "expired", // ❌ quá hạn 3 ngày
    used: 'yes',
  },
  {
    id: 1,
    image: "https://th.bing.com/th/id/OIP.Zta2ANBaezpAWJ16ewtLswHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Cá hồi đông lạnh",
    category: "Thủy sản",
    addedDate: "2025-07-01",
    expiryDate: "2025-08-01",
    unit: "Kg",
    quantityNow: 0,
    note: "Ngăn đá",
    status: "expired", // ❌ đã dùng hết
    used: 'yes',
  },
];