import tourImg01 from "../image/Travel-img1.jpg";
import tourImg02 from "../image/Travel-img2.jpg";
import tourImg03 from "../image/Travel-img3.jpg";
import tourImg04 from "../image/Travel-img4.jpg";
import tourImg05 from "../image/Travel-img5.jpg";
import tourImg06 from "../image/Travel-img6.jpg";
import tourImg07 from "../image/Travel-img7.jpg";
import tourImg08 from "../image/Travel-img8.jpg";


const tours = [
  {
    id: "01",
    title: "Taj Mahal",
    city: "Agra",
    distance: 300,
    address: ' Taj Mahal , Agra',
    price: 79200,
    maxGroupSize: 10,
    desc: "The Taj Mahal, a UNESCO World Heritage Site, is an exquisite marble mausoleum located in Agra, India. Built in the 17th century by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it stands as a testament to timeless love and architectural brilliance. Its symmetrical beauty, intricate carvings, and stunning reflection in the adjacent Yamuna River make it a breathtaking marvel of Mughal architecture.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "Karle Bone",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Amber Palace",
    city: "Rajsthan",
    distance: 400,
    address: 'Amber Palace , Rajsthan',
    price: 76800,
    maxGroupSize: 8,
    desc: "The Amber Palace, nestled in the rugged hills outside Jaipur, Rajasthan, is a magnificent fort-palace complex that echoes the opulence of Rajputana royalty. Built in the 16th century by Raja Man Singh I, it showcases a blend of Rajput and Mughal architectural styles, adorned with intricate frescoes, mirror work, and marble carvings. With its sprawling courtyards, ornate halls, and panoramic views of the surrounding landscape, the Amber Palace stands as a majestic symbol of Rajasthan's rich cultural heritage.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Qutub Minar",
    city: "Delhi",
    distance: 500,
    address: 'Qutub Minar , Delhi',
    price: 60800,
    maxGroupSize: 8,
    desc: "The Qutub Minar, standing tall in Delhi, India, is an iconic UNESCO World Heritage Site and the world's tallest brick minaret. Built in the early 13th century by Qutb-ud-din Aibak, it showcases exquisite Indo-Islamic architecture, adorned with intricate carvings and verses from the Quran. The imposing tower, surrounded by historical ruins and lush greenery, serves as a testament to Delhi's rich cultural and architectural legacy.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Charminar",
    city: "Hyderabad",
    distance: 500,
    address: 'Charminar , Hyderabad',
    price: 68000,
    maxGroupSize: 8,
    desc: "The Charminar, an iconic monument in Hyderabad, India, is a symbol of the city's rich history and architectural grandeur. Built in 1591 by Sultan Muhammad Quli Qutb Shah, it is a stunning example of Indo-Islamic architecture, featuring four grand arches supporting towering minarets. The name Charminar translates to Four Towers in Urdu and Persian, reflecting its distinctive design. Surrounded by bustling markets and vibrant culture, the Charminar remains a beloved landmark and a testament to Hyderabad's heritage.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Golden Temple",
    city: "Punjab",
    distance: 500,
    address: 'Golden Temple , Punjab',
    price: 60000,
    maxGroupSize: 8,
    desc: "The Golden Temple, also known as Sri Harmandir Sahib, is a sacred Sikh gurdwara located in Amritsar, Punjab, India. Adorned with stunning gold-plated domes, it is a spiritual and architectural marvel that attracts millions of pilgrims and tourists annually. Surrounded by a serene pool of water known as the Amrit Sarovar, the temple embodies the Sikh principles of equality, community service, and devotion to the divine. As the holiest shrine in Sikhism, the Golden Temple stands as a beacon of peace, unity, and religious tolerance.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Dal Lake",
    city: "Srinagar",
    distance: 500,
    address: 'Dal Lake , Srinagar',
    price: 70400,
    maxGroupSize: 8,
    desc: "The Dal Lake, a jewel of Srinagar in Jammu and Kashmir, India, is a symbol of tranquility and natural beauty. Spanning over 15 kilometers, it is renowned for its shimmering waters, colorful houseboats, and floating gardens. Encircled by majestic mountains and lined with picturesque Mughal gardens, the lake offers a serene retreat for tourists and locals alike. Whether it's a leisurely shikara ride at sunset or a stay in a traditional houseboat, Dal Lake captivates visitors with its timeless charm and serene ambiance.this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Gateway of India",
    city: "Mumbai",
    distance: 500,
    address: 'Gateway of India , Mumbai',
    price: 63200,
    maxGroupSize: 8,
    desc: "The Gateway of India, an iconic monument in Mumbai, India, is a symbol of the city's grandeur and historical significance. Built in the early 20th century to commemorate the visit of King George V and Queen Mary, it stands as a magnificent blend of Indo-Saracenic and European architectural styles. Set against the backdrop of the Arabian Sea, the majestic archway welcomes visitors to the bustling city of Mumbai. Surrounded by bustling markets, vibrant street life, and scenic waterfront views, the Gateway of India remains a timeless landmark and a testament to India's colonial past.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Bara Imambara",
    city: "Lucknow",
    distance: 500,
    address: 'Bara Imambara , Lucknow',
    price: 79200,
    maxGroupSize: 8,
    desc: "The Bara Imambara, located in Lucknow, India, is an architectural marvel and a symbol of Awadhi grandeur. Built in the 18th century by Nawab Asaf-ud-Daula, it is famous for its unique design and historical significance. The central hall, known as the Bara Imambara, is one of the largest arched constructions in the world without the support of beams or pillars. Adjacent to it lies the Bhulbhulaiya, a labyrinth of passages and corridors that adds to the intrigue of the structure. As a testament to Lucknow's rich cultural heritage, the Bara Imambara continues to fascinate visitors with its intricate architecture and intriguing history.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
