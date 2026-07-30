import { ApartmentType, Amenity, GalleryItem, FAQItem, LocationPoint } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBubOlCtxbKZOhCoiPcwyeOwDNWXzF3zEI9rbMxsJzlNpx8q2qXa0VEIurhF8yiP7UwQe4FPJw2oldhh8vZKghWSz8EPdTuoyrQHrp2nAry6L5JPd0jhdSA-raPVEo0yTpoptx9MXxVx2GJeXH3CGF6D6u5Rik3yk4Z4MS1cTV1wfg84vnVhzBA_D6aaDh33JGByUU-sxHJkRoR7o7x7Q3Yshc33mIZKCbPtJr1qn6zHa8AaiL3SWGfMQ';

export const HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwt1c1aCoTBAMEy9l4JECKj5Rce4cVMW7vgi5uZM4bUCMDZldURbe8nC3je3VuGjkmJm1FqBU5f8-uUxkI97ZiZvGlWGCKek9kp9WhewCt2f4E4zS_bIvRSbILlcGUmoo_LOhXMBQu6_AI6bop4R5FIrfsXBBysb_eX6Z4mOa19THSjo5UfT4S8BBpm2KjKz9nokE6BbpOxm9B6TJFTeVI0_wQwNDhRC_Aw29OIdZ37TZbuabEYFyzwQ';

export const OVERVIEW_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU8MLcPSah3z1jpzXaFvbu7azYCuwESu8vw3vhBb97XGNXwTsSGRv9y6gwnJwKuKp6zbLsm8oD_eHvSSFvTr7WZjZqAyDOozm04NRvQvjeTEnMpxaJSUNIEEo_4qUdKas3bIEjnxe5WvEEfbI99EgdUFXe9yohe9WuIXPze6Z53YtmjG7Gqb8PJ-Ijv-hu1Qb3wWQ6VEZF7klEg9DdiuZyWJY7u0yebyFrMzIP__lJxig8CIbejH_L-g';

export const LOCATION_MAP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgJomEhvZcxAzCa4ZTbq7bV0QY8JLWB0_a-_sEzriIncdfTEVv953e431TwK2DoTnlBoMy7vj-9aACDZCt_h3g55yHcY8FMUMonEBQByyc_Q-QduugU152rO13U75PBN00vyp0T9f4HnfcchRC9tX4wTpecmH7BaDsScQByDQELY-SxYfqKUKe1yFoNekFtEgwEctIZUP-BbgJc5_L1AQajmx8SQSy7iOdT7uewTkitVbytt2wLEUJkg';

export const ARCHITECTURE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZjxITybcf2Np6y06QVfO0rA2bTSE_EpS-Fn0AM81e5DnL2213Faly71fIGn_ZEXKzY4IEDzQ0VLzm74PibPNKZ3sfiGStQUFQAZG-VH3e9IizCEI2ov7O0qPZ9G1V6NidVWw541VZJNjXNWEYTmxz6KgmZx37uHUKvkwTNLr_RPnDpCBKSE6YgTR5Xzsqm9W1XmUTr8U5xngHKBdqZiq5-1N2nTVrjrO-0GX7iJllESE9kP2r06elSA';

export const CTA_EVENING_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGqxkXRuIC70DmY17S3VqLr2hs540BiSGOoyrpMrKn6qaUjSQPTlCpZMGqsG3fRukLJeRzZCKb2V4MvGMfe_IjJJsD7n5iJUhIzCt9siWilxQydAywFshPz4-cBnX44ijq_DdJubMWeps497BcTfqzZviHoe3xo1GHrjd9QfA0BZGtupR-G5i-GDfKasa-MvZsbaZ0LT3SIF7W8-LKmCrzXwgrVWNc5q1NR2q9InO5wxtDjTqnMEbl3g';

export const APARTMENT_TYPES: ApartmentType[] = [
  {
    id: 'studio-exec',
    name: 'Executive Studio',
    category: 'studio',
    area: '38.5 m²',
    view: 'Thành Phố & Vịnh Hạ Long',
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    priceFrom: 1.85,
    priceFormatted: '1,85 Tỷ VNĐ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVNrICy1YtFnUdDcYlrC4HkMxdGD-naB49tIfvRAWEfYEJcWSzExt83DoDTcjq-NJuA2s_MfeFHrW4C4bftGPP_T4q1exBzWm2NEgDbVsTRjkJ7a1BF-22ETAdzfo49u8NEaK9fND6-nj5rfSt8t-ABDolduAOVLyH2btrS_oSzGjcW42VPwteJOTiUaBPTpt_MK32tDOWZQYKP_ARgvyGbVHnGFQOJArNZlNrmJVmSxZ0HEod6vUs-w',
    floorPlan2D: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Thiết kế thông minh tối ưu không gian, ban công rộng mở đón nắng gió biển tự nhiên. Lựa chọn tuyệt vời cho các nhà đầu tư kinh doanh homestay nghỉ dưỡng cao cấp.',
    features: ['Kính Low-E kịch trần', 'Ban công ngắm cảnh vịnh', 'Bàn giao đầy đủ nội thất cao cấp', 'Hệ thống Smart Home tự động']
  },
  {
    id: 'studio-plus',
    name: 'Premium Studio Plus',
    category: 'studio-plus',
    area: '52.2 m²',
    view: 'Toàn Cảnh Vịnh Di Sản',
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    priceFrom: 2.55,
    priceFormatted: '2,55 Tỷ VNĐ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAYPpRIMkawz6b-7FU1DQFAJ6WMnSopOUkjF1-sJOihSN4pgUnaeNb5KdesqCfhCRLtOS-8mifcBePaJsxQlSjLK_kBOH61wWLLF-DzL0mYJ00Xu2tewUdc3yadDbhpsCwycWXp5VmT1itP9iGud5d1rgYpi3eriiNB9vLgPVdTSISb-nfBa4h8XEq6Wo-JNV5ZNZ57R_Wq0yvbSHkldXE3hH7qdDybjY9eZCS2dhVDydSufEwqrSSpw',
    floorPlan2D: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
    description: 'Không gian mở tràn ngập ánh sáng tự nhiên với phòng khách và bếp liên thông mềm mại. Sở hữu góc view trực diện vịnh biển ngoạn mục.',
    features: ['Khu vực tiếp khách riêng biệt', 'Phòng tắm chuẩn Resort với bồn tắm nằm', 'Logia phơi đồ kín đáo', 'Điều hòa trung tâm âm trần']
  },
  {
    id: '2br-suite',
    name: 'Elite 2BR Suite',
    category: '2br',
    area: '86.4 m²',
    view: 'Trực Diện Vịnh & Đảo Kỳ Vĩ',
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    priceFrom: 4.20,
    priceFormatted: '4,20 Tỷ VNĐ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpQmIfnCMdG2QeyefGEgXn-Sod2v2QMsSc4G48n3q4zlZ1_ZIE_UHnaIMlQyjQfQOvt3rkwaz6U2YhLsUQKS-EsyWtfM8_DDkMtMVXizYq3aVgzx0UHGDK8wcRpvexmZi_F1twnQo2bco80qFqbjOYAMap0_XRugmOlRv4LxDEegZb3eXkh-Hl4jteRRgVhr76ARrIdvhty_pLJ7eLKK3sHqFGpiSSrbijhA2DYLs4Cb49NflS8AkMyA',
    floorPlan2D: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    description: 'Lựa chọn hoàn hảo cho gia đình đa thế hệ. Thiết kế 2 phòng ngủ riêng biệt mang đến sự riêng tư tuyệt đối nhưng vẫn ấm cúng tại khu vực sinh hoạt chung.',
    features: ['Phòng Master có W.C riêng xa xỉ', 'Ban công trải dài ôm trọn phòng khách', 'Nội thất nhập khẩu Châu Âu', 'Khóa cửa vân tay bảo mật 4 lớp']
  },
  {
    id: '3br-grand',
    name: 'Grand Heritage 3BR',
    category: '3br',
    area: '124.8 m²',
    view: 'Panorama 360 độ Vịnh & Marina',
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    priceFrom: 6.80,
    priceFormatted: '6,80 Tỷ VNĐ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbrBrWEMod8M1Igag0KZ9Jd9fC10_a84hnB5RLhXmYpCU0YC6vXAeJ6pr-59hA2I2sznJINt1GTeTehU40cddlxR8EQ6n7yQLbuPRRRrQ84B4Qhgjuf0-dX3jfWR7MtVszU6j6Y2iOt-gNaTFCTWEBP8nuWol1UlG9swVsfVymu6ZNzXfmIYCAdw8ZWwnRiwi3KlqSJReMqfeUN00HVZO5EMEdDtE5hoIbzjGcFih5LhIHeY9pY3WYwQ',
    floorPlan2D: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Căn hộ góc cao cấp sở hữu góc tầm nhìn 270 - 360 độ ôm trọn bến du thuyền và mặt biển Hạ Long. Đẳng cấp sống thượng lưu được khẳng định qua từng đường nét.',
    features: ['Phòng ngủ Master góc kính cong', 'Bếp đảo hiện đại phong cách Ý', 'Thang máy thẻ từ phân tầng riêng', 'Đặc quyền dịch vụ Quản gia 24/7']
  },
  {
    id: 'penthouse-panorama',
    name: 'Sky Penthouse Panorama',
    category: 'penthouse',
    area: '210.5 m²',
    view: 'Đỉnh Cao Tuyệt Đối - Vịnh Hạ Long',
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    priceFrom: 12.50,
    priceFormatted: '12,50 Tỷ VNĐ',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    floorPlan2D: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    description: 'Bộ sưu tập giới hạn chỉ 6 căn Penthouse độc bản tại tầng đỉnh. Hồ bơi riêng ngoài trời, sân vườn riêng và tầm nhìn trực diện bầu trời di sản.',
    features: ['Bể bơi Jacuzzi vô cực trên không', 'Sân vườn Sky Garden riêng', 'Đại sảnh riêng biệt xa xỉ', 'Chỗ đỗ xe định danh ngầm']
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'infinity-pool',
    title: 'Bể Bơi Vô Cực Trên Không',
    category: 'sports',
    icon: 'pool',
    description: 'Bể bơi tràn bờ độ cao 100m tầm nhìn mây trời vịnh Hạ Long. Sử dụng công nghệ lọc muối điện phân cao cấp an toàn cho sức khỏe.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi9JrQjbwSF9QpHGGFwqwRLQ1M_WGhUZbqqGxVRbdscLNG7OkRGQ8yTcImIbyfenMrTs0o5n-ejK9R2NBGjK2PyQ9CccWVjcCoeK952RUZu3wNz86AOgJUuIOqmEkO5QfCiV4i3kZ-5x_V4d6a8kvrQ5eJUJI4QrohmUzQE9-7HGF_EWFPrmGUlcg4SBdKxrFq1RtU4iU2hLsHnifuW0BguHxK1UX_kQwNM5PpvtBuhIwS-rw4OVJeGg',
    location: 'Tầng 30'
  },
  {
    id: 'sky-gym',
    title: 'Sky Gym & Yoga Studio',
    category: 'sports',
    icon: 'fitness_center',
    description: 'Phòng tập thể thao trang bị hệ thống máy Technogym thế hệ mới nhất với kính panoramic view ngắm toàn cảnh đại dương.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    location: 'Tầng 29'
  },
  {
    id: 'wellness-spa',
    title: 'Trung Tâm Spa & Wellness',
    category: 'wellness',
    icon: 'spa',
    description: 'Liệu trình chăm sóc sức khỏe Địa Trung Hải với phòng xông hơi đá muối Himalaya, bể sục Hydrotherapy và khu trị liệu độc bản.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    location: 'Tầng 4'
  },
  {
    id: 'sky-lounge',
    title: 'Lounge Bar & Cigar Club',
    category: 'leisure',
    icon: 'wine_bar',
    description: 'Không gian thư giãn đẳng cấp phục vụ các loại vang hảo hạng, xì gà thượng hạng và âm nhạc Jazz sống động hàng đêm.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACxaZhYoEym5k2DT9HclxwF2vJ2v5y6zVVGToIxi0xWYPm33eDMlbYwfI1bYweAJkaEWz3pZONxHmFBMVsTVtoE6BlhTa3d51d0KhBuaKZiqAlA9xrPLI5EQCQrxp-UUnUwWgoq7qARZ3Av8AR9CGAE7WxL_kKHNwfMseEGgonjzyL9wGckpnMgisuP5egavuVVpXs69PxzmPy8CR42dKa2B6aS-EjQJCcGQrcqlLBJ7TwXqU_6GmYAA',
    location: 'Tầng 30'
  },
  {
    id: 'zen-garden',
    title: 'Vườn Thiền Zen Botanical',
    category: 'wellness',
    icon: 'park',
    description: 'Công viên cây xanh trên cao thiết kế theo phong cách nhiệt đới, nơi du khách tìm thấy sự tĩnh lặng và tái tạo năng lượng.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    location: 'Tầng Khối Đế & Tầng Mái'
  },
  {
    id: 'fine-dining',
    title: 'Nhà Hàng Fine Dining 5*',
    category: 'dining',
    icon: 'restaurant',
    description: 'Ẩm thực Á - Âu chuẩn 5 sao chế biến từ hải sản tươi ngon nhất Hạ Long dưới bàn tay nghệ nhân bếp trưởng quốc tế.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACxaZhYoEym5k2DT9HclxwF2vJ2v5y6zVVGToIxi0xWYPm33eDMlbYwfI1bYweAJkaEWz3pZONxHmFBMVsTVtoE6BlhTa3d51d0KhBuaKZiqAlA9xrPLI5EQCQrxp-UUnUwWgoq7qARZ3Av8AR9CGAE7WxL_kKHNwfMseEGgonjzyL9wGckpnMgisuP5egavuVVpXs69PxzmPy8CR42dKa2B6aS-EjQJCcGQrcqlLBJ7TwXqU_6GmYAA',
    location: 'Tầng 1 - 2'
  },
  {
    id: 'yacht-club',
    title: 'Bến Du Thuyền Quốc Tế',
    category: 'leisure',
    icon: 'sailing',
    description: 'Liền kề bến đậu du thuyền hiện đại bậc nhất thành phố Hạ Long, cung cấp dịch vụ cho thuê du thuyền riêng cho cư dân.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgJomEhvZcxAzCa4ZTbq7bV0QY8JLWB0_a-_sEzriIncdfTEVv953e431TwK2DoTnlBoMy7vj-9aACDZCt_h3g55yHcY8FMUMonEBQByyc_Q-QduugU152rO13U75PBN00vyp0T9f4HnfcchRC9tX4wTpecmH7BaDsScQByDQELY-SxYfqKUKe1yFoNekFtEgwEctIZUP-BbgJc5_L1AQajmx8SQSy7iOdT7uewTkitVbytt2wLEUJkg',
    location: 'Liền kề dự án'
  },
  {
    id: 'kids-club',
    title: 'Khu Vui Chơi Trẻ Em Kid Zone',
    category: 'leisure',
    icon: 'child_care',
    description: 'Khu vui chơi phát triển trí tuệ và thể chất an toàn dành cho các bé với huấn luyện viên giám sát chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?auto=format&fit=crop&w=800&q=80',
    location: 'Tầng 3'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Toàn cảnh Prima Bay bên Vịnh Hạ Long',
    category: 'exterior',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUOVGMv4AiKIAEidl3Q-QnxpwPnOVSTLkJNH618eESPRsuYaAKZ9KH4DXw5XRzPP5pVS9cuGkkRYUerIm1nDEiU_eoc2mdj-Bc8ZnNbLvvLY3zs4YJIH2hGYKF7fh7BTXiVOesM5LL1IBP7Aw9t1CAlDvgto3Qlhr7MBcpPKF6zmacrK2t-X1gotJBOC04kx_eGtppddFPHWJlmNpPGoo_QpP021CFD19OBQbIzloa1NtTcTItSLjPt37vuxb1uR7WtXY',
    caption: 'Kiến trúc biểu tượng vươn mình ra biển lớn'
  },
  {
    id: 'gal-2',
    title: 'Bể Bơi Vô Cực Hoàng Hôn',
    category: 'amenities',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi9JrQjbwSF9QpHGGFwqwRLQ1M_WGhUZbqqGxVRbdscLNG7OkRGQ8yTcImIbyfenMrTs0o5n-ejK9R2NBGjK2PyQ9CccWVjcCoeK952RUZu3wNz86AOgJUuIOqmEkO5QfCiV4i3kZ-5x_V4d6a8kvrQ5eJUJI4QrohmUzQE9-7HGF_EWFPrmGUlcg4SBdKxrFq1RtU4iU2hLsHnifuW0BguHxK1UX_kQwNM5PpvtBuhIwS-rw4OVJeGg',
    caption: 'Tầm nhìn bao quát hoàng hôn rực rỡ trên Vịnh'
  },
  {
    id: 'gal-3',
    title: 'Nhà Hàng Sang Trọng Fine Dining',
    category: 'interior',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACxaZhYoEym5k2DT9HclxwF2vJ2v5y6zVVGToIxi0xWYPm33eDMlbYwfI1bYweAJkaEWz3pZONxHmFBMVsTVtoE6BlhTa3d51d0KhBuaKZiqAlA9xrPLI5EQCQrxp-UUnUwWgoq7qARZ3Av8AR9CGAE7WxL_kKHNwfMseEGgonjzyL9wGckpnMgisuP5egavuVVpXs69PxzmPy8CR42dKa2B6aS-EjQJCcGQrcqlLBJ7TwXqU_6GmYAA',
    caption: 'Nội thất gỗ cao cấp kết hợp ánh sáng hiện đại'
  },
  {
    id: 'gal-4',
    title: 'Phòng Khách Căn Hộ 3BR Grand',
    category: 'interior',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbrBrWEMod8M1Igag0KZ9Jd9fC10_a84hnB5RLhXmYpCU0YC6vXAeJ6pr-59hA2I2sznJINt1GTeTehU40cddlxR8EQ6n7yQLbuPRRRrQ84B4Qhgjuf0-dX3jfWR7MtVszU6j6Y2iOt-gNaTFCTWEBP8nuWol1UlG9swVsfVymu6ZNzXfmIYCAdw8ZWwnRiwi3KlqSJReMqfeUN00HVZO5EMEdDtE5hoIbzjGcFih5LhIHeY9pY3WYwQ',
    caption: 'Cửa kính kịch trần góc panorama 270 độ'
  },
  {
    id: 'gal-5',
    title: 'Prima Bay Lung Linh Ban Đêm',
    category: 'night',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGqxkXRuIC70DmY17S3VqLr2hs540BiSGOoyrpMrKn6qaUjSQPTlCpZMGqsG3fRukLJeRzZCKb2V4MvGMfe_IjJJsD7n5iJUhIzCt9siWilxQydAywFshPz4-cBnX44ijq_DdJubMWeps497BcTfqzZviHoe3xo1GHrjd9QfA0BZGtupR-G5i-GDfKasa-MvZsbaZ0LT3SIF7W8-LKmCrzXwgrVWNc5q1NR2q9InO5wxtDjTqnMEbl3g',
    caption: 'Ánh sáng kiến trúc lộng lẫy quyến rũ về đêm'
  },
  {
    id: 'gal-6',
    title: 'Khu Vực Sảnh Đón Tiếp 5*',
    category: 'interior',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZjxITybcf2Np6y06QVfO0rA2bTSE_EpS-Fn0AM81e5DnL2213Faly71fIGn_ZEXKzY4IEDzQ0VLzm74PibPNKZ3sfiGStQUFQAZG-VH3e9IizCEI2ov7O0qPZ9G1V6NidVWw541VZJNjXNWEYTmxz6KgmZx37uHUKvkwTNLr_RPnDpCBKSE6YgTR5Xzsqm9W1XmUTr8U5xngHKBdqZiq5-1N2nTVrjrO-0GX7iJllESE9kP2r06elSA',
    caption: 'Sảnh đón tiếp cao 9m với hệ tường đá cẩm thạch Ý'
  },
  {
    id: 'gal-7',
    title: 'Nội Thất Phòng Ngủ Executive',
    category: 'interior',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVNrICy1YtFnUdDcYlrC4HkMxdGD-naB49tIfvRAWEfYEJcWSzExt83DoDTcjq-NJuA2s_MfeFHrW4C4bftGPP_T4q1exBzWm2NEgDbVsTRjkJ7a1BF-22ETAdzfo49u8NEaK9fND6-nj5rfSt8t-ABDolduAOVLyH2btrS_oSzGjcW42VPwteJOTiUaBPTpt_MK32tDOWZQYKP_ARgvyGbVHnGFQOJArNZlNrmJVmSxZ0HEod6vUs-w',
    caption: 'Tông màu trung tính sang trọng dịu mắt'
  },
  {
    id: 'gal-8',
    title: 'Phòng Khách Căn Hộ Studio Plus',
    category: 'interior',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAYPpRIMkawz6b-7FU1DQFAJ6WMnSopOUkjF1-sJOihSN4pgUnaeNb5KdesqCfhCRLtOS-8mifcBePaJsxQlSjLK_kBOH61wWLLF-DzL0mYJ00Xu2tewUdc3yadDbhpsCwycWXp5VmT1itP9iGud5d1rgYpi3eriiNB9vLgPVdTSISb-nfBa4h8XEq6Wo-JNV5ZNZ57R_Wq0yvbSHkldXE3hH7qdDybjY9eZCS2dhVDydSufEwqrSSpw',
    caption: 'Tối ưu công năng với khu vực tiếp khách rộng rãi'
  }
];

export const LOCATION_POINTS: LocationPoint[] = [
  {
    id: 'loc-1',
    name: 'Câu Lạc Bộ Du Thuyền Quốc Tế',
    distance: '150m',
    time: '2 Phút Đi Bộ',
    icon: 'directions_boat',
    category: 'travel'
  },
  {
    id: 'loc-2',
    name: 'Bãi Biển Marina Bay',
    distance: '300m',
    time: '3 Phút Đi Bộ',
    icon: 'beach_access',
    category: 'nature'
  },
  {
    id: 'loc-3',
    name: 'Tổ Hợp Thương Mại & Chợ Đêm',
    distance: '800m',
    time: '5 Phút Di Chuyển',
    icon: 'shopping_bag',
    category: 'shopping'
  },
  {
    id: 'loc-4',
    name: 'Công Viên Giải Trí Sun World Halong',
    distance: '4.5km',
    time: '8 Phút Lái Xe',
    icon: 'theater_comedy',
    category: 'entertainment'
  },
  {
    id: 'loc-5',
    name: 'Bảo Tàng & Thư Viện Quảng Ninh',
    distance: '7.2km',
    time: '12 Phút Lái Xe',
    icon: 'account_balance',
    category: 'entertainment'
  },
  {
    id: 'loc-6',
    name: 'Sân Bay Quốc Tế Vân Đồn',
    distance: '48km',
    time: '45 Phút Lái Xe',
    icon: 'flight_takeoff',
    category: 'travel'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Pháp lý của căn hộ Prima Bay như thế nào?',
    answer: 'Tất cả các căn hộ tại Prima Bay Hạ Long đều sở hữu pháp lý hoàn chỉnh 100%: Sở hữu lâu dài (Sổ hồng) đối với người có quốc tịch Việt Nam và 50 năm đối với cá nhân/tổ chức người nước ngoài theo quy định của Luật Bất động sản mới nhất.',
    category: 'legal'
  },
  {
    id: 'faq-2',
    question: 'Dự án dự kiến khi nào sẽ hoàn thành và bàn giao?',
    answer: 'Hiện tại dự án đã hoàn thiện 98% phần thô và cất nóc, đang tiến hành công tác sơn mặt ngoài kính Low-E và hoàn thiện nội thất. Thời gian dự kiến cất cánh bàn giao chìa khóa đến cư dân là Quý 4/2024.',
    category: 'progress'
  },
  {
    id: 'faq-3',
    question: 'Chính sách hỗ trợ tài chính và ưu đãi thanh toán như thế nào?',
    answer: 'Chủ đầu tư BIM Land kết hợp cùng các ngân hàng lớn (Vietcombank, MBBank, Techcombank) hỗ trợ gói vay tối đa 70% giá trị căn hộ, hỗ trợ lãi suất 0% và ân hạn nợ gốc lên đến 24 tháng. Khách hàng thanh toán sớm bằng vốn tự có nhận ngay chiết khấu lên tới 10%.',
    category: 'finance'
  },
  {
    id: 'faq-4',
    question: 'Chương trình ủy thác cho thuê và vận hành ra sao?',
    answer: 'Prima Bay hợp tác cùng đơn vị vận hành quản lý khách sạn danh tiếng quốc tế. Chủ sở hữu có thể tham gia Chương trình Ủy thác Cho thuê (Rental Program) chia sẻ lợi nhuận lên đến 85/15 và tặng kèm 15 đêm nghỉ dưỡng miễn phí mỗi năm trên toàn hệ thống BIM Group.',
    category: 'operation'
  },
  {
    id: 'faq-5',
    question: 'Phí quản lý vận hành dịch vụ là bao nhiêu?',
    answer: 'Phí dịch vụ vận hành dự kiến là 18.000 VNĐ/m²/tháng (chưa bao gồm VAT). Phí này bao gồm toàn bộ dịch vụ an ninh 24/7, vệ sinh khu vực dùng chung, bảo trì hệ thống kỹ thuật, chăm sóc cảnh quan và sử dụng miễn phí các tiện ích cơ bản như Bể bơi vô cực, Gym.',
    category: 'operation'
  }
];
