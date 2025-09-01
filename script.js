// KenyaMotors Professional Website JavaScript
// Enhanced with modern features, performance optimization, and user experience improvements

class KenyaMotors {
  constructor() {
    this.cars = [];
    this.filteredCars = [];
    this.currentFilters = {};
    this.favorites = JSON.parse(localStorage.getItem('kenyamotors_favorites') || '[]');
    this.isLoading = false;
    
    this.init();
  }

  init() {
    this.loadCarsData();
    this.setupEventListeners();
    this.initializeComponents();
    this.setupIntersectionObserver();
    this.initializeAnalytics();
  }

  // Load and initialize car data
  loadCarsData() {
    this.cars = [
  {
    "id": 1,
    "make": "BMW",
    "model": "1 Series",
    "year": 2017,
    "price": 2048428,
    "mileage": 132078,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Reliable BMW 1 Series with great fuel efficiency and low maintenance.",
    "features": [
      "Heated Seats",
      "Sunroof",
      "Brake Assist"
    ],
    "location": "Machakos",
    "available": true,
    "featured": true
  },
  {
    "id": 2,
    "make": "Suzuki",
    "model": "Grand Vitara",
    "year": 2021,
    "price": 2405803,
    "mileage": 106880,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Robust Suzuki Grand Vitara built for durability and long-term reliability.",
    "features": [
      "Brake Assist",
      "LED Headlights",
      "Power Windows",
      "Tinted Windows",
      "Navigation"
    ],
    "location": "Garissa",
    "available": true,
    "featured": true
  },
  {
    "id": 3,
    "make": "Honda",
    "model": "Civic",
    "year": 2017,
    "price": 4635243,
    "mileage": 19753,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Well-maintained Honda Civic with excellent performance and reliability.",
    "features": [
      "Premium Sound",
      "Multiple Airbags",
      "Stability Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": true
  },
  {
    "id": 4,
    "make": "Nissan",
    "model": "Serena",
    "year": 2020,
    "price": 2114032,
    "mileage": 112103,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Robust Nissan Serena built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "EBD",
      "Stability Control",
      "Tow Hitch"
    ],
    "location": "Thika",
    "available": true,
    "featured": true
  },
  {
    "id": 5,
    "make": "BMW",
    "model": "X4",
    "year": 2019,
    "price": 4098380,
    "mileage": 133039,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Premium BMW X4 with luxury features and superior comfort.",
    "features": [
      "Push Start",
      "Sport Mode"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": true
  },
  {
    "id": 6,
    "make": "Kia",
    "model": "Cerato",
    "year": 2021,
    "price": 4015963,
    "mileage": 25679,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Premium Kia Cerato with luxury features and superior comfort.",
    "features": [
      "4WD/AWD",
      "Push Start",
      "Roof Rails",
      "Brake Assist"
    ],
    "location": "Thika",
    "available": true,
    "featured": true
  },
  {
    "id": 7,
    "make": "Subaru",
    "model": "Forester",
    "year": 2020,
    "price": 3944311,
    "mileage": 65212,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Reliable Subaru Forester with great fuel efficiency and low maintenance.",
    "features": [
      "Push Start",
      "Sunroof",
      "Power Windows",
      "Ventilated Seats",
      "Power Mirrors"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": true
  },
  {
    "id": 8,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2016,
    "price": 4615281,
    "mileage": 48390,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Efficient Honda Ridgeline with excellent handling and performance.",
    "features": [
      "Roof Rails",
      "Hill Start Assist"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": true
  },
  {
    "id": 9,
    "make": "Peugeot",
    "model": "iOn",
    "year": 2018,
    "price": 2998130,
    "mileage": 147091,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Reliable Peugeot iOn with great fuel efficiency and low maintenance.",
    "features": [
      "Sunroof",
      "Hill Start Assist",
      "Ventilated Seats",
      "4WD/AWD",
      "Air Conditioning",
      "Cruise Control"
    ],
    "location": "Narok",
    "available": true,
    "featured": true
  },
  {
    "id": 10,
    "make": "Hyundai",
    "model": "Kona",
    "year": 2023,
    "price": 3068931,
    "mileage": 17520,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Well-maintained Hyundai Kona with excellent performance and reliability.",
    "features": [
      "Backup Camera",
      "Leather Seats",
      "Hill Start Assist"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": true
  },
  {
    "id": 11,
    "make": "Mazda",
    "model": "Tribute",
    "year": 2017,
    "price": 2161162,
    "mileage": 135054,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Comfortable Mazda Tribute offering smooth ride and premium feel.",
    "features": [
      "Heated Seats",
      "Roof Rails",
      "Multiple Airbags",
      "Keyless Entry"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": true
  },
  {
    "id": 12,
    "make": "Honda",
    "model": "Fit",
    "year": 2017,
    "price": 2887854,
    "mileage": 54332,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Modern Honda Fit with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "Push Start",
      "Brake Assist"
    ],
    "location": "Thika",
    "available": true,
    "featured": true
  },
  {
    "id": 13,
    "make": "Subaru",
    "model": "Justy",
    "year": 2022,
    "price": 3624345,
    "mileage": 90794,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Quality Subaru Justy perfect for daily commuting and family use.",
    "features": [
      "Push Start",
      "EBD",
      "Cruise Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": true
  },
  {
    "id": 14,
    "make": "Mercedes",
    "model": "CLA",
    "year": 2017,
    "price": 2140306,
    "mileage": 143467,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Modern Mercedes CLA with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "ABS",
      "Cruise Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": true
  },
  {
    "id": 15,
    "make": "Mercedes",
    "model": "GLE",
    "year": 2022,
    "price": 2037191,
    "mileage": 30590,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Modern Mercedes GLE with advanced technology and safety features.",
    "features": [
      "Stability Control",
      "LED Headlights",
      "ABS",
      "Android Auto",
      "Multiple Airbags"
    ],
    "location": "Kericho",
    "available": true,
    "featured": true
  },
  {
    "id": 16,
    "make": "Peugeot",
    "model": "607",
    "year": 2024,
    "price": 3928177,
    "mileage": 53195,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Quality Peugeot 607 perfect for daily commuting and family use.",
    "features": [
      "Wireless Charging",
      "LED Headlights",
      "Navigation",
      "Hill Start Assist"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": true
  },
  {
    "id": 17,
    "make": "Peugeot",
    "model": "Expert",
    "year": 2017,
    "price": 1036823,
    "mileage": 100122,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Well-maintained Peugeot Expert with excellent performance and reliability.",
    "features": [
      "4WD/AWD",
      "Cruise Control"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": true
  },
  {
    "id": 18,
    "make": "Suzuki",
    "model": "Grand Vitara",
    "year": 2018,
    "price": 3747725,
    "mileage": 139205,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Robust Suzuki Grand Vitara built for durability and long-term reliability.",
    "features": [
      "ABS",
      "Android Auto",
      "Traction Control"
    ],
    "location": "Kisii",
    "available": true,
    "featured": true
  },
  {
    "id": 19,
    "make": "Renault",
    "model": "Scenic",
    "year": 2018,
    "price": 1011448,
    "mileage": 40250,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Comfortable Renault Scenic offering smooth ride and premium feel.",
    "features": [
      "Brake Assist",
      "LED Headlights"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": true
  },
  {
    "id": 20,
    "make": "Peugeot",
    "model": "Expert",
    "year": 2024,
    "price": 2520367,
    "mileage": 40537,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Modern Peugeot Expert with advanced technology and safety features.",
    "features": [
      "Tinted Windows",
      "Bluetooth",
      "Traction Control",
      "Air Conditioning",
      "ABS",
      "Wireless Charging"
    ],
    "location": "Thika",
    "available": true,
    "featured": true
  },
  {
    "id": 21,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2018,
    "price": 1989936,
    "mileage": 102637,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Well-maintained Volkswagen Polo with excellent performance and reliability.",
    "features": [
      "Hill Start Assist",
      "Traction Control"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": true
  },
  {
    "id": 22,
    "make": "Peugeot",
    "model": "RCZ",
    "year": 2019,
    "price": 1057214,
    "mileage": 39166,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Premium Peugeot RCZ with luxury features and superior comfort.",
    "features": [
      "Roof Rails",
      "Apple CarPlay"
    ],
    "location": "Thika",
    "available": true,
    "featured": true
  },
  {
    "id": 23,
    "make": "Ford",
    "model": "Galaxy",
    "year": 2019,
    "price": 2901649,
    "mileage": 71643,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Well-maintained Ford Galaxy with excellent performance and reliability.",
    "features": [
      "Air Conditioning",
      "Power Mirrors",
      "Hill Start Assist"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": true
  },
  {
    "id": 24,
    "make": "Peugeot",
    "model": "508",
    "year": 2023,
    "price": 2757934,
    "mileage": 52385,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Comfortable Peugeot 508 offering smooth ride and premium feel.",
    "features": [
      "Tinted Windows",
      "Wireless Charging",
      "Fog Lights",
      "Cruise Control"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": true
  },
  {
    "id": 25,
    "make": "Subaru",
    "model": "Vivio",
    "year": 2024,
    "price": 4777380,
    "mileage": 12357,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Spacious Subaru Vivio ideal for family trips and business use.",
    "features": [
      "Premium Sound",
      "LED Headlights"
    ],
    "location": "Garissa",
    "available": true,
    "featured": true
  },
  {
    "id": 26,
    "make": "Honda",
    "model": "HR-V",
    "year": 2015,
    "price": 1892945,
    "mileage": 39826,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Efficient Honda HR-V with excellent handling and performance.",
    "features": [
      "Bluetooth",
      "Keyless Entry",
      "Brake Assist"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": true
  },
  {
    "id": 27,
    "make": "Subaru",
    "model": "SVX",
    "year": 2023,
    "price": 4326338,
    "mileage": 25832,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Reliable Subaru SVX with great fuel efficiency and low maintenance.",
    "features": [
      "Bluetooth",
      "Tow Hitch",
      "Cruise Control",
      "Push Start"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": true
  },
  {
    "id": 28,
    "make": "Renault",
    "model": "Trafic",
    "year": 2015,
    "price": 960639,
    "mileage": 129208,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Premium Renault Trafic with luxury features and superior comfort.",
    "features": [
      "Tow Hitch",
      "Bluetooth",
      "Push Start",
      "Air Conditioning"
    ],
    "location": "Kericho",
    "available": true,
    "featured": true
  },
  {
    "id": 29,
    "make": "Nissan",
    "model": "X-Trail",
    "year": 2024,
    "price": 3419725,
    "mileage": 104997,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Premium Nissan X-Trail with luxury features and superior comfort.",
    "features": [
      "Roof Rails",
      "Power Windows",
      "Sunroof",
      "Apple CarPlay"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": true
  },
  {
    "id": 30,
    "make": "Mercedes",
    "model": "CLA",
    "year": 2017,
    "price": 1136755,
    "mileage": 64722,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Robust Mercedes CLA built for durability and long-term reliability.",
    "features": [
      "Android Auto",
      "Alloy Wheels",
      "Keyless Entry",
      "Leather Seats"
    ],
    "location": "Kisii",
    "available": true,
    "featured": true
  },
  {
    "id": 31,
    "make": "Toyota",
    "model": "C-HR",
    "year": 2021,
    "price": 3012267,
    "mileage": 149683,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Robust Toyota C-HR built for durability and long-term reliability.",
    "features": [
      "Air Conditioning",
      "Heated Seats"
    ],
    "location": "Kericho",
    "available": true,
    "featured": true
  },
  {
    "id": 32,
    "make": "Honda",
    "model": "Civic",
    "year": 2019,
    "price": 1676646,
    "mileage": 114051,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Efficient Honda Civic with excellent handling and performance.",
    "features": [
      "EBD",
      "Cruise Control",
      "Navigation"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": true
  },
  {
    "id": 33,
    "make": "BMW",
    "model": "X5",
    "year": 2019,
    "price": 3074864,
    "mileage": 99664,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Well-maintained BMW X5 with excellent performance and reliability.",
    "features": [
      "Cruise Control",
      "Tow Hitch",
      "Parking Sensors",
      "Heated Seats"
    ],
    "location": "Kisii",
    "available": true,
    "featured": true
  },
  {
    "id": 34,
    "make": "Renault",
    "model": "Koleos",
    "year": 2023,
    "price": 1112472,
    "mileage": 92281,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Stylish Renault Koleos perfect for urban driving and weekend trips.",
    "features": [
      "Alloy Wheels",
      "Tow Hitch",
      "EBD",
      "Android Auto",
      "Multiple Airbags",
      "4WD/AWD"
    ],
    "location": "Kericho",
    "available": true,
    "featured": true
  },
  {
    "id": 35,
    "make": "Honda",
    "model": "Element",
    "year": 2022,
    "price": 4003327,
    "mileage": 12850,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Stylish Honda Element perfect for urban driving and weekend trips.",
    "features": [
      "Tinted Windows",
      "Hill Start Assist",
      "Power Windows"
    ],
    "location": "Embu",
    "available": true,
    "featured": true
  },
  {
    "id": 36,
    "make": "Suzuki",
    "model": "Alto",
    "year": 2022,
    "price": 4237226,
    "mileage": 25276,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Quality Suzuki Alto perfect for daily commuting and family use.",
    "features": [
      "Sport Mode",
      "Heated Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": true
  },
  {
    "id": 37,
    "make": "Hyundai",
    "model": "i20",
    "year": 2020,
    "price": 3526596,
    "mileage": 145662,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Reliable Hyundai i20 with great fuel efficiency and low maintenance.",
    "features": [
      "LED Headlights",
      "Power Mirrors",
      "Hill Start Assist"
    ],
    "location": "Kisii",
    "available": true,
    "featured": true
  },
  {
    "id": 38,
    "make": "Volkswagen",
    "model": "Touareg",
    "year": 2015,
    "price": 1586191,
    "mileage": 80690,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Modern Volkswagen Touareg with advanced technology and safety features.",
    "features": [
      "Bluetooth",
      "Roof Rails"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": true
  },
  {
    "id": 39,
    "make": "Kia",
    "model": "Carnival",
    "year": 2021,
    "price": 991281,
    "mileage": 152257,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Efficient Kia Carnival with excellent handling and performance.",
    "features": [
      "Sunroof",
      "LED Headlights",
      "Traction Control",
      "Multiple Airbags"
    ],
    "location": "Embu",
    "available": true,
    "featured": true
  },
  {
    "id": 40,
    "make": "Toyota",
    "model": "Hilux",
    "year": 2023,
    "price": 3545164,
    "mileage": 44991,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Reliable Toyota Hilux with great fuel efficiency and low maintenance.",
    "features": [
      "Power Windows",
      "Ventilated Seats",
      "Dual Zone AC"
    ],
    "location": "Garissa",
    "available": true,
    "featured": true
  },
  {
    "id": 41,
    "make": "Mazda",
    "model": "RX-8",
    "year": 2016,
    "price": 3025290,
    "mileage": 99327,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Stylish Mazda RX-8 perfect for urban driving and weekend trips.",
    "features": [
      "Leather Seats",
      "Navigation",
      "Cruise Control"
    ],
    "location": "Thika",
    "available": true,
    "featured": true
  },
  {
    "id": 42,
    "make": "Kia",
    "model": "Rio",
    "year": 2016,
    "price": 4541736,
    "mileage": 72903,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Premium Kia Rio with luxury features and superior comfort.",
    "features": [
      "Sport Mode",
      "Brake Assist",
      "Fog Lights"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": true
  },
  {
    "id": 43,
    "make": "Subaru",
    "model": "WRX",
    "year": 2021,
    "price": 2123904,
    "mileage": 117022,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Quality Subaru WRX perfect for daily commuting and family use.",
    "features": [
      "Premium Sound",
      "Multiple Airbags",
      "Navigation",
      "Parking Sensors",
      "Keyless Entry"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": true
  },
  {
    "id": 44,
    "make": "BMW",
    "model": "X6",
    "year": 2023,
    "price": 2014941,
    "mileage": 118871,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Premium BMW X6 with luxury features and superior comfort.",
    "features": [
      "Tow Hitch",
      "ABS",
      "Sport Mode",
      "Premium Sound"
    ],
    "location": "Machakos",
    "available": true,
    "featured": true
  },
  {
    "id": 45,
    "make": "Hyundai",
    "model": "Ioniq",
    "year": 2019,
    "price": 4607851,
    "mileage": 53398,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Well-maintained Hyundai Ioniq with excellent performance and reliability.",
    "features": [
      "Power Windows",
      "EBD",
      "Cruise Control",
      "Eco Mode",
      "Power Mirrors"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": true
  },
  {
    "id": 46,
    "make": "Subaru",
    "model": "Baja",
    "year": 2024,
    "price": 1560384,
    "mileage": 144611,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Stylish Subaru Baja perfect for urban driving and weekend trips.",
    "features": [
      "LED Headlights",
      "4WD/AWD",
      "Push Start",
      "Fog Lights"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": true
  },
  {
    "id": 47,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2019,
    "price": 3337847,
    "mileage": 151062,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Well-maintained Volkswagen Polo with excellent performance and reliability.",
    "features": [
      "Brake Assist",
      "Tow Hitch",
      "Sport Mode",
      "Navigation",
      "Bluetooth",
      "Power Mirrors"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": true
  },
  {
    "id": 48,
    "make": "Volkswagen",
    "model": "T-Roc",
    "year": 2018,
    "price": 3304824,
    "mileage": 37336,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Robust Volkswagen T-Roc built for durability and long-term reliability.",
    "features": [
      "Tow Hitch",
      "Keyless Entry",
      "Dual Zone AC",
      "Sunroof",
      "Backup Camera",
      "Leather Seats"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": true
  },
  {
    "id": 49,
    "make": "Volkswagen",
    "model": "Arteon",
    "year": 2020,
    "price": 3583678,
    "mileage": 117436,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Well-maintained Volkswagen Arteon with excellent performance and reliability.",
    "features": [
      "Power Mirrors",
      "Heated Seats",
      "Parking Sensors",
      "Bluetooth",
      "Traction Control",
      "Ventilated Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": true
  },
  {
    "id": 50,
    "make": "BMW",
    "model": "Z3",
    "year": 2023,
    "price": 1276847,
    "mileage": 114401,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Well-maintained BMW Z3 with excellent performance and reliability.",
    "features": [
      "Power Mirrors",
      "Hill Start Assist",
      "Ventilated Seats",
      "4WD/AWD"
    ],
    "location": "Machakos",
    "available": true,
    "featured": true
  },
  {
    "id": 51,
    "make": "Mazda",
    "model": "3",
    "year": 2021,
    "price": 4372890,
    "mileage": 37164,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Reliable Mazda 3 with great fuel efficiency and low maintenance.",
    "features": [
      "Alloy Wheels",
      "4WD/AWD",
      "Premium Sound",
      "Ventilated Seats"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 52,
    "make": "BMW",
    "model": "X7",
    "year": 2015,
    "price": 835985,
    "mileage": 61011,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Stylish BMW X7 perfect for urban driving and weekend trips.",
    "features": [
      "Tinted Windows",
      "EBD",
      "Multiple Airbags",
      "Bluetooth",
      "Keyless Entry"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 53,
    "make": "Mercedes",
    "model": "CLA",
    "year": 2021,
    "price": 807253,
    "mileage": 88579,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Well-maintained Mercedes CLA with excellent performance and reliability.",
    "features": [
      "Sunroof",
      "Ventilated Seats",
      "EBD",
      "Premium Sound"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 54,
    "make": "Suzuki",
    "model": "Ignis",
    "year": 2024,
    "price": 4207544,
    "mileage": 149052,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Quality Suzuki Ignis perfect for daily commuting and family use.",
    "features": [
      "Roof Rails",
      "Sport Mode"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 55,
    "make": "Toyota",
    "model": "Avensis",
    "year": 2015,
    "price": 2179125,
    "mileage": 133785,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Well-maintained Toyota Avensis with excellent performance and reliability.",
    "features": [
      "Wireless Charging",
      "Sport Mode",
      "Backup Camera",
      "Tow Hitch",
      "Apple CarPlay"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 56,
    "make": "Toyota",
    "model": "Rav4",
    "year": 2023,
    "price": 3398711,
    "mileage": 16905,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Comfortable Toyota Rav4 offering smooth ride and premium feel.",
    "features": [
      "Tow Hitch",
      "Alloy Wheels",
      "Power Mirrors",
      "Apple CarPlay",
      "Backup Camera"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 57,
    "make": "Honda",
    "model": "Prelude",
    "year": 2021,
    "price": 1762805,
    "mileage": 74294,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Spacious Honda Prelude ideal for family trips and business use.",
    "features": [
      "Power Windows",
      "Hill Start Assist"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 58,
    "make": "Hyundai",
    "model": "Palisade",
    "year": 2022,
    "price": 3494816,
    "mileage": 94595,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Comfortable Hyundai Palisade offering smooth ride and premium feel.",
    "features": [
      "Brake Assist",
      "Cruise Control",
      "4WD/AWD"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 59,
    "make": "Mazda",
    "model": "CX-3",
    "year": 2024,
    "price": 4159268,
    "mileage": 110463,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Robust Mazda CX-3 built for durability and long-term reliability.",
    "features": [
      "Wireless Charging",
      "Hill Start Assist"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 60,
    "make": "Volkswagen",
    "model": "Jetta",
    "year": 2021,
    "price": 2517150,
    "mileage": 94895,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Quality Volkswagen Jetta perfect for daily commuting and family use.",
    "features": [
      "Tow Hitch",
      "Power Windows"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 61,
    "make": "Ford",
    "model": "Kuga",
    "year": 2021,
    "price": 4590223,
    "mileage": 42529,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Well-maintained Ford Kuga with excellent performance and reliability.",
    "features": [
      "Multiple Airbags",
      "LED Headlights",
      "Fog Lights"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 62,
    "make": "Mercedes",
    "model": "A-Class",
    "year": 2015,
    "price": 3210414,
    "mileage": 27926,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "White",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Modern Mercedes A-Class with advanced technology and safety features.",
    "features": [
      "EBD",
      "Heated Seats",
      "Air Conditioning"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 63,
    "make": "Peugeot",
    "model": "iOn",
    "year": 2016,
    "price": 910640,
    "mileage": 103287,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Modern Peugeot iOn with advanced technology and safety features.",
    "features": [
      "Keyless Entry",
      "Air Conditioning",
      "Cruise Control"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 64,
    "make": "Volkswagen",
    "model": "Scirocco",
    "year": 2021,
    "price": 3342454,
    "mileage": 107852,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Well-maintained Volkswagen Scirocco with excellent performance and reliability.",
    "features": [
      "Tow Hitch",
      "Premium Sound",
      "Tinted Windows"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 65,
    "make": "Peugeot",
    "model": "208",
    "year": 2015,
    "price": 3648356,
    "mileage": 30546,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Efficient Peugeot 208 with excellent handling and performance.",
    "features": [
      "Brake Assist",
      "Tow Hitch"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 66,
    "make": "Volkswagen",
    "model": "Tiguan",
    "year": 2022,
    "price": 4495900,
    "mileage": 73303,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Modern Volkswagen Tiguan with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "Sunroof",
      "Roof Rails",
      "Cruise Control"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 67,
    "make": "Toyota",
    "model": "Yaris",
    "year": 2017,
    "price": 4119060,
    "mileage": 114367,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Stylish Toyota Yaris perfect for urban driving and weekend trips.",
    "features": [
      "Wireless Charging",
      "Stability Control",
      "Traction Control",
      "Ventilated Seats",
      "Navigation",
      "Fog Lights"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 68,
    "make": "Honda",
    "model": "Prelude",
    "year": 2017,
    "price": 4032070,
    "mileage": 122182,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Quality Honda Prelude perfect for daily commuting and family use.",
    "features": [
      "Push Start",
      "Traction Control"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 69,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2017,
    "price": 1451855,
    "mileage": 20542,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Comfortable Ford Fiesta offering smooth ride and premium feel.",
    "features": [
      "Brake Assist",
      "Leather Seats",
      "Power Mirrors",
      "Stability Control",
      "Heated Seats"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 70,
    "make": "Subaru",
    "model": "Vivio",
    "year": 2023,
    "price": 2835255,
    "mileage": 86402,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Spacious Subaru Vivio ideal for family trips and business use.",
    "features": [
      "Dual Zone AC",
      "Hill Start Assist",
      "Stability Control",
      "Keyless Entry",
      "ABS"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 71,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2021,
    "price": 1572489,
    "mileage": 62291,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Reliable Ford Fiesta with great fuel efficiency and low maintenance.",
    "features": [
      "Multiple Airbags",
      "Power Windows",
      "Sport Mode"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 72,
    "make": "Kia",
    "model": "Cadenza",
    "year": 2023,
    "price": 4500718,
    "mileage": 68641,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Quality Kia Cadenza perfect for daily commuting and family use.",
    "features": [
      "Wireless Charging",
      "Keyless Entry"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 73,
    "make": "Ford",
    "model": "F-150",
    "year": 2019,
    "price": 4749734,
    "mileage": 107423,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Efficient Ford F-150 with excellent handling and performance.",
    "features": [
      "Roof Rails",
      "Cruise Control",
      "Push Start"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 74,
    "make": "Hyundai",
    "model": "i20",
    "year": 2020,
    "price": 4752400,
    "mileage": 82557,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Efficient Hyundai i20 with excellent handling and performance.",
    "features": [
      "ABS",
      "Push Start",
      "Air Conditioning"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 75,
    "make": "Renault",
    "model": "Megane",
    "year": 2022,
    "price": 1921877,
    "mileage": 144890,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Well-maintained Renault Megane with excellent performance and reliability.",
    "features": [
      "Heated Seats",
      "Navigation",
      "Hill Start Assist",
      "Cruise Control",
      "Leather Seats"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 76,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2021,
    "price": 4763909,
    "mileage": 49068,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Robust Mitsubishi Carisma built for durability and long-term reliability.",
    "features": [
      "Roof Rails",
      "Premium Sound"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 77,
    "make": "Toyota",
    "model": "Highlander",
    "year": 2017,
    "price": 4279352,
    "mileage": 36861,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Spacious Toyota Highlander ideal for family trips and business use.",
    "features": [
      "Leather Seats",
      "Bluetooth"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 78,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2018,
    "price": 4292441,
    "mileage": 92847,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Mitsubishi Pajero perfect for urban driving and weekend trips.",
    "features": [
      "Backup Camera"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 79,
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2024,
    "price": 2417368,
    "mileage": 68548,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Well-maintained Toyota Land Cruiser with excellent performance and reliability.",
    "features": [
      "Parking Sensors",
      "Keyless Entry",
      "Cruise Control"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 80,
    "make": "Mercedes",
    "model": "CLS",
    "year": 2017,
    "price": 2965307,
    "mileage": 32424,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Comfortable Mercedes CLS offering smooth ride and premium feel.",
    "features": [
      "Power Mirrors",
      "Alloy Wheels",
      "Leather Seats"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 81,
    "make": "Toyota",
    "model": "Auris",
    "year": 2021,
    "price": 1747836,
    "mileage": 40261,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Red",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Stylish Toyota Auris perfect for urban driving and weekend trips.",
    "features": [
      "Dual Zone AC",
      "Sport Mode",
      "Parking Sensors",
      "Stability Control",
      "Power Mirrors",
      "EBD"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 82,
    "make": "Peugeot",
    "model": "Boxer",
    "year": 2022,
    "price": 3355843,
    "mileage": 57783,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Modern Peugeot Boxer with advanced technology and safety features.",
    "features": [
      "Eco Mode",
      "Brake Assist",
      "Wireless Charging"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 83,
    "make": "Peugeot",
    "model": "2008",
    "year": 2020,
    "price": 3945719,
    "mileage": 23174,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Modern Peugeot 2008 with advanced technology and safety features.",
    "features": [
      "Heated Seats",
      "Stability Control",
      "Leather Seats"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 84,
    "make": "Suzuki",
    "model": "Ignis",
    "year": 2023,
    "price": 4793062,
    "mileage": 18127,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Stylish Suzuki Ignis perfect for urban driving and weekend trips.",
    "features": [
      "Eco Mode",
      "Multiple Airbags",
      "Fog Lights"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 85,
    "make": "Nissan",
    "model": "Leaf",
    "year": 2016,
    "price": 3734808,
    "mileage": 93807,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Premium Nissan Leaf with luxury features and superior comfort.",
    "features": [
      "Keyless Entry",
      "Power Mirrors"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 86,
    "make": "Mitsubishi",
    "model": "Lancer",
    "year": 2017,
    "price": 4742950,
    "mileage": 49543,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Stylish Mitsubishi Lancer perfect for urban driving and weekend trips.",
    "features": [
      "Air Conditioning",
      "Parking Sensors",
      "Power Mirrors",
      "Sunroof",
      "Apple CarPlay"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 87,
    "make": "BMW",
    "model": "M5",
    "year": 2023,
    "price": 4584950,
    "mileage": 152441,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Modern BMW M5 with advanced technology and safety features.",
    "features": [
      "Air Conditioning",
      "Brake Assist",
      "Cruise Control",
      "Tinted Windows"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 88,
    "make": "Honda",
    "model": "CR-V",
    "year": 2017,
    "price": 2644567,
    "mileage": 7888,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Well-maintained Honda CR-V with excellent performance and reliability.",
    "features": [
      "Alloy Wheels",
      "Multiple Airbags",
      "Air Conditioning",
      "Cruise Control",
      "Heated Seats"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 89,
    "make": "Hyundai",
    "model": "Elantra",
    "year": 2016,
    "price": 1166043,
    "mileage": 28081,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Well-maintained Hyundai Elantra with excellent performance and reliability.",
    "features": [
      "Brake Assist",
      "Hill Start Assist",
      "Tinted Windows",
      "Eco Mode"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 90,
    "make": "Suzuki",
    "model": "Splash",
    "year": 2024,
    "price": 2119315,
    "mileage": 113071,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Quality Suzuki Splash perfect for daily commuting and family use.",
    "features": [
      "Fog Lights",
      "Push Start",
      "Power Windows",
      "Eco Mode",
      "Hill Start Assist"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 91,
    "make": "Renault",
    "model": "Megane",
    "year": 2021,
    "price": 4196655,
    "mileage": 25820,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Efficient Renault Megane with excellent handling and performance.",
    "features": [
      "Roof Rails",
      "Sunroof",
      "Premium Sound",
      "Backup Camera",
      "Power Windows",
      "Bluetooth"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 92,
    "make": "Kia",
    "model": "Niro",
    "year": 2023,
    "price": 4201372,
    "mileage": 9692,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Premium Kia Niro with luxury features and superior comfort.",
    "features": [
      "Apple CarPlay",
      "EBD",
      "Ventilated Seats",
      "Traction Control",
      "Cruise Control"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 93,
    "make": "Nissan",
    "model": "Altima",
    "year": 2018,
    "price": 3194115,
    "mileage": 145837,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Modern Nissan Altima with advanced technology and safety features.",
    "features": [
      "Parking Sensors",
      "Stability Control"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 94,
    "make": "Volkswagen",
    "model": "Tiguan",
    "year": 2020,
    "price": 2161471,
    "mileage": 5922,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Efficient Volkswagen Tiguan with excellent handling and performance.",
    "features": [
      "Air Conditioning",
      "Dual Zone AC",
      "Leather Seats",
      "LED Headlights",
      "Keyless Entry",
      "Tow Hitch"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 95,
    "make": "Subaru",
    "model": "Justy",
    "year": 2016,
    "price": 2064409,
    "mileage": 31595,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Stylish Subaru Justy perfect for urban driving and weekend trips.",
    "features": [
      "Ventilated Seats",
      "Power Windows"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 96,
    "make": "Mercedes",
    "model": "SLK",
    "year": 2019,
    "price": 4129916,
    "mileage": 119158,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Modern Mercedes SLK with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "Navigation",
      "Power Mirrors"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 97,
    "make": "Mitsubishi",
    "model": "Space Star",
    "year": 2019,
    "price": 4270328,
    "mileage": 124852,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Reliable Mitsubishi Space Star with great fuel efficiency and low maintenance.",
    "features": [
      "Alloy Wheels",
      "Keyless Entry",
      "Heated Seats"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 98,
    "make": "Ford",
    "model": "Mondeo",
    "year": 2020,
    "price": 2942080,
    "mileage": 75179,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Quality Ford Mondeo perfect for daily commuting and family use.",
    "features": [
      "Tow Hitch",
      "Navigation"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 99,
    "make": "Nissan",
    "model": "Altima",
    "year": 2021,
    "price": 3236298,
    "mileage": 128559,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Comfortable Nissan Altima offering smooth ride and premium feel.",
    "features": [
      "Alloy Wheels",
      "LED Headlights"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 100,
    "make": "Peugeot",
    "model": "Boxer",
    "year": 2021,
    "price": 2570243,
    "mileage": 28070,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Stylish Peugeot Boxer perfect for urban driving and weekend trips.",
    "features": [
      "Traction Control",
      "LED Headlights"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 101,
    "make": "BMW",
    "model": "M3",
    "year": 2021,
    "price": 2117259,
    "mileage": 150455,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Stylish BMW M3 perfect for urban driving and weekend trips.",
    "features": [
      "Hill Start Assist",
      "Parking Sensors"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 102,
    "make": "BMW",
    "model": "X6",
    "year": 2019,
    "price": 1375613,
    "mileage": 69853,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Well-maintained BMW X6 with excellent performance and reliability.",
    "features": [
      "Tinted Windows",
      "Stability Control",
      "Tow Hitch",
      "LED Headlights",
      "Premium Sound"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 103,
    "make": "Suzuki",
    "model": "Vitara",
    "year": 2016,
    "price": 2680802,
    "mileage": 99489,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Spacious Suzuki Vitara ideal for family trips and business use.",
    "features": [
      "Parking Sensors",
      "Apple CarPlay",
      "Heated Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 104,
    "make": "Renault",
    "model": "Megane",
    "year": 2022,
    "price": 2632198,
    "mileage": 139477,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Robust Renault Megane built for durability and long-term reliability.",
    "features": [
      "EBD",
      "LED Headlights",
      "Traction Control",
      "Hill Start Assist",
      "Tinted Windows"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 105,
    "make": "Mazda",
    "model": "626",
    "year": 2018,
    "price": 1042058,
    "mileage": 17007,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Stylish Mazda 626 perfect for urban driving and weekend trips.",
    "features": [
      "Traction Control",
      "Leather Seats",
      "Brake Assist"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 106,
    "make": "BMW",
    "model": "Z4",
    "year": 2024,
    "price": 1197387,
    "mileage": 12827,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Stylish BMW Z4 perfect for urban driving and weekend trips.",
    "features": [
      "Power Windows",
      "Sport Mode",
      "Wireless Charging",
      "EBD",
      "Keyless Entry"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 107,
    "make": "Toyota",
    "model": "Premio",
    "year": 2020,
    "price": 1113184,
    "mileage": 11134,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Efficient Toyota Premio with excellent handling and performance.",
    "features": [
      "Tinted Windows",
      "Eco Mode",
      "Backup Camera",
      "Traction Control",
      "Parking Sensors"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 108,
    "make": "Volkswagen",
    "model": "T-Roc",
    "year": 2019,
    "price": 2158738,
    "mileage": 25581,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Red",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Spacious Volkswagen T-Roc ideal for family trips and business use.",
    "features": [
      "EBD",
      "Leather Seats",
      "Roof Rails",
      "Backup Camera",
      "Cruise Control",
      "Power Windows"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 109,
    "make": "Nissan",
    "model": "Maxima",
    "year": 2017,
    "price": 3151364,
    "mileage": 22995,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Premium Nissan Maxima with luxury features and superior comfort.",
    "features": [
      "Dual Zone AC",
      "Brake Assist",
      "Android Auto",
      "Alloy Wheels",
      "Roof Rails",
      "4WD/AWD"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 110,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2021,
    "price": 3291458,
    "mileage": 92734,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Spacious Hyundai Sonata ideal for family trips and business use.",
    "features": [
      "Leather Seats",
      "Sport Mode",
      "Roof Rails",
      "Push Start",
      "Tinted Windows",
      "Power Windows"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 111,
    "make": "Mercedes",
    "model": "GLC",
    "year": 2021,
    "price": 1484939,
    "mileage": 26806,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Quality Mercedes GLC perfect for daily commuting and family use.",
    "features": [
      "Alloy Wheels",
      "Power Mirrors"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 112,
    "make": "Peugeot",
    "model": "108",
    "year": 2024,
    "price": 4146164,
    "mileage": 22270,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Efficient Peugeot 108 with excellent handling and performance.",
    "features": [
      "Power Windows",
      "Hill Start Assist",
      "Dual Zone AC",
      "Heated Seats",
      "LED Headlights",
      "ABS"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 113,
    "make": "Subaru",
    "model": "SVX",
    "year": 2016,
    "price": 1091258,
    "mileage": 26078,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Comfortable Subaru SVX offering smooth ride and premium feel.",
    "features": [
      "Navigation",
      "Push Start",
      "Apple CarPlay",
      "Traction Control"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 114,
    "make": "BMW",
    "model": "X7",
    "year": 2021,
    "price": 3869610,
    "mileage": 69466,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Quality BMW X7 perfect for daily commuting and family use.",
    "features": [
      "Keyless Entry",
      "Hill Start Assist",
      "Tow Hitch",
      "Sunroof",
      "Traction Control"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 115,
    "make": "Peugeot",
    "model": "108",
    "year": 2024,
    "price": 4137406,
    "mileage": 62970,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Reliable Peugeot 108 with great fuel efficiency and low maintenance.",
    "features": [
      "Sunroof",
      "Bluetooth",
      "Leather Seats",
      "Traction Control",
      "Eco Mode",
      "Premium Sound"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 116,
    "make": "Hyundai",
    "model": "Palisade",
    "year": 2023,
    "price": 3707154,
    "mileage": 114128,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Comfortable Hyundai Palisade offering smooth ride and premium feel.",
    "features": [
      "Android Auto",
      "Roof Rails",
      "Traction Control",
      "Sunroof",
      "LED Headlights",
      "Keyless Entry"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 117,
    "make": "Nissan",
    "model": "Murano",
    "year": 2021,
    "price": 1288677,
    "mileage": 145444,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Spacious Nissan Murano ideal for family trips and business use.",
    "features": [
      "Tinted Windows",
      "Cruise Control",
      "LED Headlights",
      "Hill Start Assist"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 118,
    "make": "Hyundai",
    "model": "i10",
    "year": 2022,
    "price": 903081,
    "mileage": 13580,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Reliable Hyundai i10 with great fuel efficiency and low maintenance.",
    "features": [
      "Ventilated Seats",
      "Push Start",
      "Cruise Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 119,
    "make": "Toyota",
    "model": "Auris",
    "year": 2019,
    "price": 1515718,
    "mileage": 146120,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Spacious Toyota Auris ideal for family trips and business use.",
    "features": [
      "Sunroof",
      "Power Windows",
      "Backup Camera",
      "Fog Lights"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 120,
    "make": "Peugeot",
    "model": "607",
    "year": 2015,
    "price": 1712749,
    "mileage": 86785,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Well-maintained Peugeot 607 with excellent performance and reliability.",
    "features": [
      "Stability Control",
      "LED Headlights"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 121,
    "make": "Mitsubishi",
    "model": "Outlander",
    "year": 2020,
    "price": 4621452,
    "mileage": 124041,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Quality Mitsubishi Outlander perfect for daily commuting and family use.",
    "features": [
      "Backup Camera"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 122,
    "make": "Mazda",
    "model": "CX-5",
    "year": 2023,
    "price": 2735047,
    "mileage": 25043,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Premium Mazda CX-5 with luxury features and superior comfort.",
    "features": [
      "Tinted Windows",
      "Keyless Entry"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 123,
    "make": "Mercedes",
    "model": "GLC",
    "year": 2024,
    "price": 1623591,
    "mileage": 152977,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Modern Mercedes GLC with advanced technology and safety features.",
    "features": [
      "Tow Hitch",
      "Roof Rails",
      "Dual Zone AC",
      "Push Start",
      "Navigation",
      "Android Auto"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 124,
    "make": "Honda",
    "model": "Odyssey",
    "year": 2023,
    "price": 2634472,
    "mileage": 7420,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Modern Honda Odyssey with advanced technology and safety features.",
    "features": [
      "Stability Control",
      "Alloy Wheels",
      "Keyless Entry",
      "Parking Sensors",
      "Power Mirrors"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 125,
    "make": "Kia",
    "model": "Optima",
    "year": 2020,
    "price": 4241135,
    "mileage": 33396,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Well-maintained Kia Optima with excellent performance and reliability.",
    "features": [
      "Tow Hitch",
      "Traction Control",
      "Backup Camera",
      "Premium Sound"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 126,
    "make": "Peugeot",
    "model": "Partner",
    "year": 2022,
    "price": 2794866,
    "mileage": 63901,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Modern Peugeot Partner with advanced technology and safety features.",
    "features": [
      "Traction Control",
      "Air Conditioning",
      "Backup Camera"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 127,
    "make": "Honda",
    "model": "Civic",
    "year": 2018,
    "price": 1159817,
    "mileage": 59300,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Reliable Honda Civic with great fuel efficiency and low maintenance.",
    "features": [
      "Wireless Charging",
      "Ventilated Seats"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 128,
    "make": "Ford",
    "model": "Escape",
    "year": 2023,
    "price": 2792268,
    "mileage": 21692,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Robust Ford Escape built for durability and long-term reliability.",
    "features": [
      "Keyless Entry",
      "Power Mirrors",
      "Fog Lights",
      "Air Conditioning",
      "4WD/AWD",
      "Ventilated Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 129,
    "make": "Suzuki",
    "model": "Celerio",
    "year": 2021,
    "price": 3705961,
    "mileage": 119874,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Quality Suzuki Celerio perfect for daily commuting and family use.",
    "features": [
      "Parking Sensors",
      "Bluetooth",
      "Multiple Airbags",
      "Air Conditioning"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 130,
    "make": "Mitsubishi",
    "model": "Mirage",
    "year": 2018,
    "price": 2243142,
    "mileage": 96203,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Reliable Mitsubishi Mirage with great fuel efficiency and low maintenance.",
    "features": [
      "4WD/AWD",
      "Stability Control",
      "Power Mirrors",
      "Leather Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 131,
    "make": "Toyota",
    "model": "Avensis",
    "year": 2020,
    "price": 3081086,
    "mileage": 137421,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Well-maintained Toyota Avensis with excellent performance and reliability.",
    "features": [
      "Alloy Wheels",
      "Android Auto",
      "Push Start"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 132,
    "make": "Mitsubishi",
    "model": "Attrage",
    "year": 2017,
    "price": 1721802,
    "mileage": 123212,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Well-maintained Mitsubishi Attrage with excellent performance and reliability.",
    "features": [
      "Tinted Windows",
      "Alloy Wheels",
      "Dual Zone AC"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 133,
    "make": "BMW",
    "model": "320i",
    "year": 2022,
    "price": 2327365,
    "mileage": 125921,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Stylish BMW 320i perfect for urban driving and weekend trips.",
    "features": [
      "4WD/AWD",
      "Sport Mode"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 134,
    "make": "Ford",
    "model": "Galaxy",
    "year": 2023,
    "price": 4264355,
    "mileage": 40018,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Spacious Ford Galaxy ideal for family trips and business use.",
    "features": [
      "Alloy Wheels",
      "Backup Camera",
      "Power Mirrors",
      "Tinted Windows"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 135,
    "make": "Volkswagen",
    "model": "Atlas",
    "year": 2022,
    "price": 823876,
    "mileage": 62887,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Modern Volkswagen Atlas with advanced technology and safety features.",
    "features": [
      "Stability Control",
      "Hill Start Assist",
      "Power Windows"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 136,
    "make": "Volkswagen",
    "model": "Passat",
    "year": 2024,
    "price": 4640868,
    "mileage": 54340,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Comfortable Volkswagen Passat offering smooth ride and premium feel.",
    "features": [
      "Apple CarPlay",
      "Leather Seats",
      "Multiple Airbags",
      "Cruise Control",
      "Fog Lights"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 137,
    "make": "Toyota",
    "model": "C-HR",
    "year": 2018,
    "price": 1282393,
    "mileage": 80584,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Stylish Toyota C-HR perfect for urban driving and weekend trips.",
    "features": [
      "Sport Mode",
      "Alloy Wheels",
      "Leather Seats",
      "Hill Start Assist",
      "Tow Hitch"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 138,
    "make": "Nissan",
    "model": "Murano",
    "year": 2019,
    "price": 3830326,
    "mileage": 57069,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Quality Nissan Murano perfect for daily commuting and family use.",
    "features": [
      "Sunroof",
      "Dual Zone AC",
      "Multiple Airbags"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 139,
    "make": "Subaru",
    "model": "XV",
    "year": 2024,
    "price": 4102136,
    "mileage": 21483,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Reliable Subaru XV with great fuel efficiency and low maintenance.",
    "features": [
      "Sport Mode",
      "Push Start",
      "Roof Rails"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 140,
    "make": "Ford",
    "model": "Galaxy",
    "year": 2018,
    "price": 2165299,
    "mileage": 105974,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Modern Ford Galaxy with advanced technology and safety features.",
    "features": [
      "Stability Control",
      "4WD/AWD",
      "Multiple Airbags",
      "Sport Mode"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 141,
    "make": "Honda",
    "model": "Passport",
    "year": 2016,
    "price": 3690540,
    "mileage": 82574,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Modern Honda Passport with advanced technology and safety features.",
    "features": [
      "EBD",
      "Leather Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 142,
    "make": "Mazda",
    "model": "6",
    "year": 2020,
    "price": 4197389,
    "mileage": 80996,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Robust Mazda 6 built for durability and long-term reliability.",
    "features": [
      "Navigation",
      "Stability Control",
      "Tinted Windows",
      "Power Mirrors",
      "Bluetooth"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 143,
    "make": "Mitsubishi",
    "model": "Mirage",
    "year": 2016,
    "price": 3613168,
    "mileage": 99142,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Stylish Mitsubishi Mirage perfect for urban driving and weekend trips.",
    "features": [
      "Power Mirrors",
      "Android Auto",
      "Heated Seats",
      "Apple CarPlay",
      "Traction Control",
      "Cruise Control"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 144,
    "make": "Suzuki",
    "model": "Splash",
    "year": 2022,
    "price": 1436093,
    "mileage": 109205,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Efficient Suzuki Splash with excellent handling and performance.",
    "features": [
      "Bluetooth",
      "Tow Hitch",
      "Ventilated Seats",
      "Eco Mode",
      "Traction Control",
      "Premium Sound"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 145,
    "make": "BMW",
    "model": "X4",
    "year": 2016,
    "price": 2063851,
    "mileage": 69739,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Spacious BMW X4 ideal for family trips and business use.",
    "features": [
      "Premium Sound",
      "Bluetooth",
      "EBD"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 146,
    "make": "Suzuki",
    "model": "Grand Vitara",
    "year": 2023,
    "price": 2673471,
    "mileage": 29742,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Reliable Suzuki Grand Vitara with great fuel efficiency and low maintenance.",
    "features": [
      "ABS",
      "Fog Lights",
      "Tinted Windows",
      "Alloy Wheels",
      "Android Auto"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 147,
    "make": "Hyundai",
    "model": "Ioniq",
    "year": 2018,
    "price": 3763073,
    "mileage": 93744,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Reliable Hyundai Ioniq with great fuel efficiency and low maintenance.",
    "features": [
      "Leather Seats",
      "Brake Assist",
      "Keyless Entry"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 148,
    "make": "Hyundai",
    "model": "Staria",
    "year": 2024,
    "price": 3862273,
    "mileage": 6564,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Premium Hyundai Staria with luxury features and superior comfort.",
    "features": [
      "Dual Zone AC",
      "Bluetooth",
      "Keyless Entry"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 149,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2021,
    "price": 3343487,
    "mileage": 147019,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Reliable Mitsubishi Carisma with great fuel efficiency and low maintenance.",
    "features": [
      "Alloy Wheels",
      "Apple CarPlay"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 150,
    "make": "Mazda",
    "model": "Bongo",
    "year": 2020,
    "price": 3216090,
    "mileage": 108213,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Efficient Mazda Bongo with excellent handling and performance.",
    "features": [
      "Tinted Windows",
      "Power Mirrors"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 151,
    "make": "Mazda",
    "model": "Demio",
    "year": 2017,
    "price": 3623787,
    "mileage": 28727,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Efficient Mazda Demio with excellent handling and performance.",
    "features": [
      "EBD",
      "Parking Sensors",
      "ABS"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 152,
    "make": "Mazda",
    "model": "Bongo",
    "year": 2021,
    "price": 1430057,
    "mileage": 94172,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Stylish Mazda Bongo perfect for urban driving and weekend trips.",
    "features": [
      "Eco Mode",
      "Push Start",
      "Air Conditioning",
      "Tow Hitch"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 153,
    "make": "Honda",
    "model": "Prelude",
    "year": 2015,
    "price": 1743430,
    "mileage": 29387,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Comfortable Honda Prelude offering smooth ride and premium feel.",
    "features": [
      "Roof Rails",
      "4WD/AWD",
      "Push Start",
      "Keyless Entry",
      "Fog Lights",
      "Eco Mode"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 154,
    "make": "Hyundai",
    "model": "Accent",
    "year": 2016,
    "price": 4695476,
    "mileage": 50901,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Premium Hyundai Accent with luxury features and superior comfort.",
    "features": [
      "Stability Control",
      "Android Auto"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 155,
    "make": "Mazda",
    "model": "CX-5",
    "year": 2018,
    "price": 1782360,
    "mileage": 73915,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Well-maintained Mazda CX-5 with excellent performance and reliability.",
    "features": [
      "Leather Seats",
      "Navigation",
      "Traction Control",
      "Brake Assist",
      "Android Auto"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 156,
    "make": "Peugeot",
    "model": "508",
    "year": 2019,
    "price": 1100796,
    "mileage": 52876,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Spacious Peugeot 508 ideal for family trips and business use.",
    "features": [
      "Parking Sensors",
      "Wireless Charging",
      "Cruise Control",
      "LED Headlights",
      "Sport Mode",
      "Sunroof"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 157,
    "make": "Nissan",
    "model": "Serena",
    "year": 2024,
    "price": 4296409,
    "mileage": 110428,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Well-maintained Nissan Serena with excellent performance and reliability.",
    "features": [
      "Premium Sound",
      "Cruise Control",
      "Push Start",
      "Roof Rails",
      "Navigation"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 158,
    "make": "Mazda",
    "model": "MX-5",
    "year": 2016,
    "price": 2601688,
    "mileage": 116068,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Quality Mazda MX-5 perfect for daily commuting and family use.",
    "features": [
      "4WD/AWD",
      "Premium Sound",
      "Leather Seats",
      "Fog Lights"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 159,
    "make": "Volkswagen",
    "model": "T-Roc",
    "year": 2016,
    "price": 2650685,
    "mileage": 114934,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Premium Volkswagen T-Roc with luxury features and superior comfort.",
    "features": [
      "Air Conditioning",
      "Tow Hitch"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 160,
    "make": "BMW",
    "model": "i3",
    "year": 2024,
    "price": 3997046,
    "mileage": 6472,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Spacious BMW i3 ideal for family trips and business use.",
    "features": [
      "Android Auto",
      "Dual Zone AC",
      "Sport Mode",
      "Hill Start Assist",
      "Premium Sound"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 161,
    "make": "Nissan",
    "model": "Serena",
    "year": 2019,
    "price": 4406247,
    "mileage": 31633,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Spacious Nissan Serena ideal for family trips and business use.",
    "features": [
      "Backup Camera",
      "Keyless Entry",
      "Brake Assist"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 162,
    "make": "Nissan",
    "model": "Altima",
    "year": 2017,
    "price": 1721707,
    "mileage": 37177,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Stylish Nissan Altima perfect for urban driving and weekend trips.",
    "features": [
      "Backup Camera",
      "EBD",
      "Air Conditioning",
      "Sport Mode",
      "Alloy Wheels"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 163,
    "make": "Peugeot",
    "model": "508",
    "year": 2022,
    "price": 4662478,
    "mileage": 46369,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Quality Peugeot 508 perfect for daily commuting and family use.",
    "features": [
      "Brake Assist",
      "Sunroof",
      "Hill Start Assist",
      "Power Mirrors"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 164,
    "make": "Mitsubishi",
    "model": "Galant",
    "year": 2020,
    "price": 3881980,
    "mileage": 148552,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Quality Mitsubishi Galant perfect for daily commuting and family use.",
    "features": [
      "Eco Mode",
      "Fog Lights"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 165,
    "make": "Suzuki",
    "model": "Baleno",
    "year": 2017,
    "price": 2564761,
    "mileage": 154377,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Efficient Suzuki Baleno with excellent handling and performance.",
    "features": [
      "ABS",
      "Multiple Airbags",
      "Brake Assist",
      "Wireless Charging",
      "Roof Rails"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 166,
    "make": "Hyundai",
    "model": "i20",
    "year": 2022,
    "price": 2867544,
    "mileage": 121393,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Stylish Hyundai i20 perfect for urban driving and weekend trips.",
    "features": [
      "Roof Rails",
      "Tow Hitch",
      "EBD",
      "Power Mirrors",
      "Sport Mode"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 167,
    "make": "Suzuki",
    "model": "Alto",
    "year": 2023,
    "price": 3195195,
    "mileage": 126407,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Efficient Suzuki Alto with excellent handling and performance.",
    "features": [
      "Eco Mode",
      "Dual Zone AC",
      "Leather Seats",
      "ABS"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 168,
    "make": "Toyota",
    "model": "Avensis",
    "year": 2024,
    "price": 4145429,
    "mileage": 151821,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Efficient Toyota Avensis with excellent handling and performance.",
    "features": [
      "Push Start",
      "Fog Lights",
      "Ventilated Seats",
      "Brake Assist",
      "Traction Control",
      "Wireless Charging"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 169,
    "make": "Mazda",
    "model": "CX-30",
    "year": 2024,
    "price": 1444509,
    "mileage": 131749,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Efficient Mazda CX-30 with excellent handling and performance.",
    "features": [
      "Alloy Wheels",
      "LED Headlights",
      "Push Start",
      "Bluetooth",
      "4WD/AWD",
      "ABS"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 170,
    "make": "Peugeot",
    "model": "RCZ",
    "year": 2020,
    "price": 1554737,
    "mileage": 71650,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Premium Peugeot RCZ with luxury features and superior comfort.",
    "features": [
      "Backup Camera",
      "Power Mirrors",
      "Brake Assist",
      "Dual Zone AC",
      "EBD"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 171,
    "make": "Nissan",
    "model": "Altima",
    "year": 2016,
    "price": 3645731,
    "mileage": 57084,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Stylish Nissan Altima perfect for urban driving and weekend trips.",
    "features": [
      "EBD",
      "Dual Zone AC"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 172,
    "make": "Honda",
    "model": "Fit",
    "year": 2016,
    "price": 4020922,
    "mileage": 13686,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Stylish Honda Fit perfect for urban driving and weekend trips.",
    "features": [
      "Keyless Entry",
      "Backup Camera",
      "Alloy Wheels",
      "Tow Hitch"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 173,
    "make": "Subaru",
    "model": "WRX",
    "year": 2022,
    "price": 4191381,
    "mileage": 153040,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Stylish Subaru WRX perfect for urban driving and weekend trips.",
    "features": [
      "Parking Sensors",
      "Cruise Control"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 174,
    "make": "Volkswagen",
    "model": "Touareg",
    "year": 2021,
    "price": 1732488,
    "mileage": 95688,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Premium Volkswagen Touareg with luxury features and superior comfort.",
    "features": [
      "Apple CarPlay",
      "Dual Zone AC",
      "Wireless Charging",
      "Sport Mode",
      "Keyless Entry",
      "Navigation"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 175,
    "make": "Subaru",
    "model": "Impreza",
    "year": 2016,
    "price": 3570017,
    "mileage": 76614,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Stylish Subaru Impreza perfect for urban driving and weekend trips.",
    "features": [
      "Power Windows",
      "Push Start",
      "Heated Seats",
      "Cruise Control",
      "Stability Control"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 176,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2016,
    "price": 4619907,
    "mileage": 31216,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Reliable Honda Ridgeline with great fuel efficiency and low maintenance.",
    "features": [
      "Air Conditioning",
      "Stability Control"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 177,
    "make": "BMW",
    "model": "1 Series",
    "year": 2019,
    "price": 3150478,
    "mileage": 105520,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Stylish BMW 1 Series perfect for urban driving and weekend trips.",
    "features": [
      "4WD/AWD",
      "Navigation",
      "Hill Start Assist",
      "Parking Sensors",
      "Premium Sound"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 178,
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2015,
    "price": 915917,
    "mileage": 64221,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Spacious Toyota Land Cruiser ideal for family trips and business use.",
    "features": [
      "Parking Sensors",
      "Keyless Entry",
      "Eco Mode"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 179,
    "make": "Mazda",
    "model": "MX-5",
    "year": 2021,
    "price": 3994911,
    "mileage": 41600,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Premium Mazda MX-5 with luxury features and superior comfort.",
    "features": [
      "Backup Camera",
      "Stability Control"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 180,
    "make": "Subaru",
    "model": "Impreza",
    "year": 2018,
    "price": 3775461,
    "mileage": 16618,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Quality Subaru Impreza perfect for daily commuting and family use.",
    "features": [
      "Hill Start Assist",
      "Apple CarPlay",
      "Sunroof",
      "Multiple Airbags",
      "Dual Zone AC",
      "Wireless Charging"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 181,
    "make": "Subaru",
    "model": "SVX",
    "year": 2023,
    "price": 3999422,
    "mileage": 102145,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Robust Subaru SVX built for durability and long-term reliability.",
    "features": [
      "Heated Seats",
      "Brake Assist",
      "Parking Sensors"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 182,
    "make": "Kia",
    "model": "Carnival",
    "year": 2016,
    "price": 1078924,
    "mileage": 33039,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Comfortable Kia Carnival offering smooth ride and premium feel.",
    "features": [
      "Power Mirrors",
      "Android Auto",
      "Cruise Control"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 183,
    "make": "Mercedes",
    "model": "CLS",
    "year": 2016,
    "price": 1854310,
    "mileage": 56928,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Efficient Mercedes CLS with excellent handling and performance.",
    "features": [
      "Stability Control",
      "Bluetooth",
      "Tinted Windows",
      "Premium Sound",
      "Ventilated Seats"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 184,
    "make": "Subaru",
    "model": "SVX",
    "year": 2020,
    "price": 1942423,
    "mileage": 5860,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Spacious Subaru SVX ideal for family trips and business use.",
    "features": [
      "Heated Seats",
      "Sunroof",
      "Navigation",
      "Cruise Control",
      "Alloy Wheels"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 185,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2023,
    "price": 1546462,
    "mileage": 75149,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Comfortable Honda Ridgeline offering smooth ride and premium feel.",
    "features": [
      "Keyless Entry",
      "EBD"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 186,
    "make": "Nissan",
    "model": "Pathfinder",
    "year": 2023,
    "price": 2345316,
    "mileage": 108937,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Quality Nissan Pathfinder perfect for daily commuting and family use.",
    "features": [
      "Parking Sensors",
      "Push Start",
      "Sunroof",
      "Tow Hitch"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 187,
    "make": "BMW",
    "model": "X4",
    "year": 2019,
    "price": 1520573,
    "mileage": 46088,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Reliable BMW X4 with great fuel efficiency and low maintenance.",
    "features": [
      "Fog Lights",
      "Ventilated Seats",
      "Hill Start Assist",
      "Brake Assist",
      "Stability Control"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 188,
    "make": "Ford",
    "model": "Ranger",
    "year": 2015,
    "price": 2764952,
    "mileage": 56823,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Red",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Quality Ford Ranger perfect for daily commuting and family use.",
    "features": [
      "Bluetooth",
      "Heated Seats",
      "Ventilated Seats"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 189,
    "make": "Toyota",
    "model": "Tundra",
    "year": 2024,
    "price": 3727492,
    "mileage": 82717,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Premium Toyota Tundra with luxury features and superior comfort.",
    "features": [
      "Push Start",
      "4WD/AWD",
      "Bluetooth",
      "Air Conditioning",
      "Android Auto",
      "Backup Camera"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 190,
    "make": "Ford",
    "model": "Transit",
    "year": 2019,
    "price": 3755001,
    "mileage": 27539,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Efficient Ford Transit with excellent handling and performance.",
    "features": [
      "Navigation",
      "Power Windows",
      "Bluetooth"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 191,
    "make": "Ford",
    "model": "F-150",
    "year": 2024,
    "price": 2145666,
    "mileage": 11186,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Comfortable Ford F-150 offering smooth ride and premium feel.",
    "features": [
      "Backup Camera",
      "Sunroof"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 192,
    "make": "Honda",
    "model": "HR-V",
    "year": 2023,
    "price": 3138621,
    "mileage": 91340,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Black",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Robust Honda HR-V built for durability and long-term reliability.",
    "features": [
      "Multiple Airbags",
      "Push Start",
      "Android Auto",
      "Cruise Control",
      "Stability Control"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 193,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2022,
    "price": 2503720,
    "mileage": 130829,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Robust Hyundai Sonata built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "Push Start",
      "EBD"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 194,
    "make": "Nissan",
    "model": "Note",
    "year": 2021,
    "price": 4361608,
    "mileage": 126643,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Stylish Nissan Note perfect for urban driving and weekend trips.",
    "features": [
      "Air Conditioning",
      "Alloy Wheels",
      "Dual Zone AC"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 195,
    "make": "Toyota",
    "model": "Prius",
    "year": 2017,
    "price": 1207242,
    "mileage": 102463,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Spacious Toyota Prius ideal for family trips and business use.",
    "features": [
      "Heated Seats",
      "Dual Zone AC"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 196,
    "make": "Nissan",
    "model": "Teana",
    "year": 2023,
    "price": 2128039,
    "mileage": 98852,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Efficient Nissan Teana with excellent handling and performance.",
    "features": [
      "Tinted Windows",
      "Navigation",
      "Ventilated Seats"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 197,
    "make": "Honda",
    "model": "Insight",
    "year": 2015,
    "price": 3152093,
    "mileage": 72943,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Robust Honda Insight built for durability and long-term reliability.",
    "features": [
      "Brake Assist",
      "Stability Control",
      "Sport Mode",
      "Traction Control",
      "Multiple Airbags"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 198,
    "make": "Mitsubishi",
    "model": "Delica",
    "year": 2019,
    "price": 1086605,
    "mileage": 142920,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Comfortable Mitsubishi Delica offering smooth ride and premium feel.",
    "features": [
      "Roof Rails",
      "Air Conditioning",
      "Traction Control"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 199,
    "make": "Mazda",
    "model": "626",
    "year": 2022,
    "price": 3922607,
    "mileage": 66948,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Comfortable Mazda 626 offering smooth ride and premium feel.",
    "features": [
      "Multiple Airbags",
      "Cruise Control"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 200,
    "make": "Honda",
    "model": "Insight",
    "year": 2017,
    "price": 4218772,
    "mileage": 147264,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Quality Honda Insight perfect for daily commuting and family use.",
    "features": [
      "Heated Seats",
      "Android Auto",
      "EBD",
      "Cruise Control",
      "Roof Rails"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 201,
    "make": "Toyota",
    "model": "Premio",
    "year": 2021,
    "price": 2277883,
    "mileage": 116174,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Stylish Toyota Premio perfect for urban driving and weekend trips.",
    "features": [
      "Roof Rails",
      "EBD",
      "Multiple Airbags",
      "Hill Start Assist",
      "ABS",
      "Backup Camera"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 202,
    "make": "Nissan",
    "model": "Pathfinder",
    "year": 2018,
    "price": 4606703,
    "mileage": 45864,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Well-maintained Nissan Pathfinder with excellent performance and reliability.",
    "features": [
      "Air Conditioning",
      "Power Mirrors",
      "Traction Control",
      "LED Headlights",
      "Android Auto"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 203,
    "make": "Hyundai",
    "model": "i20",
    "year": 2016,
    "price": 2208881,
    "mileage": 84222,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Spacious Hyundai i20 ideal for family trips and business use.",
    "features": [
      "Apple CarPlay",
      "4WD/AWD"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 204,
    "make": "Mitsubishi",
    "model": "i-MiEV",
    "year": 2019,
    "price": 2690498,
    "mileage": 83371,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Stylish Mitsubishi i-MiEV perfect for urban driving and weekend trips.",
    "features": [
      "Navigation",
      "Power Windows"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 205,
    "make": "Mitsubishi",
    "model": "Attrage",
    "year": 2022,
    "price": 1763630,
    "mileage": 91288,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Modern Mitsubishi Attrage with advanced technology and safety features.",
    "features": [
      "Sport Mode",
      "Eco Mode",
      "Apple CarPlay",
      "Hill Start Assist",
      "ABS"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 206,
    "make": "Hyundai",
    "model": "Veloster",
    "year": 2016,
    "price": 2912080,
    "mileage": 23710,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Reliable Hyundai Veloster with great fuel efficiency and low maintenance.",
    "features": [
      "4WD/AWD",
      "Apple CarPlay",
      "Tow Hitch",
      "Ventilated Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 207,
    "make": "Hyundai",
    "model": "i10",
    "year": 2024,
    "price": 1976185,
    "mileage": 135515,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Spacious Hyundai i10 ideal for family trips and business use.",
    "features": [
      "Ventilated Seats",
      "Cruise Control",
      "Traction Control",
      "Stability Control"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 208,
    "make": "Subaru",
    "model": "STI",
    "year": 2018,
    "price": 3416033,
    "mileage": 33405,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Comfortable Subaru STI offering smooth ride and premium feel.",
    "features": [
      "Sunroof",
      "Keyless Entry"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 209,
    "make": "BMW",
    "model": "Z3",
    "year": 2024,
    "price": 3226597,
    "mileage": 105354,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Quality BMW Z3 perfect for daily commuting and family use.",
    "features": [
      "Wireless Charging",
      "Apple CarPlay",
      "Brake Assist",
      "Dual Zone AC"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 210,
    "make": "Volkswagen",
    "model": "Golf GTI",
    "year": 2018,
    "price": 3168498,
    "mileage": 141947,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Efficient Volkswagen Golf GTI with excellent handling and performance.",
    "features": [
      "Multiple Airbags",
      "Traction Control"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 211,
    "make": "Toyota",
    "model": "Tacoma",
    "year": 2023,
    "price": 2519108,
    "mileage": 142454,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Premium Toyota Tacoma with luxury features and superior comfort.",
    "features": [
      "Apple CarPlay",
      "4WD/AWD",
      "Premium Sound",
      "Parking Sensors",
      "Leather Seats",
      "Alloy Wheels"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 212,
    "make": "Hyundai",
    "model": "i30",
    "year": 2021,
    "price": 1845492,
    "mileage": 14407,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Well-maintained Hyundai i30 with excellent performance and reliability.",
    "features": [
      "LED Headlights",
      "Stability Control"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 213,
    "make": "Honda",
    "model": "Insight",
    "year": 2023,
    "price": 1722400,
    "mileage": 142103,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Stylish Honda Insight perfect for urban driving and weekend trips.",
    "features": [
      "Ventilated Seats",
      "Alloy Wheels",
      "4WD/AWD",
      "Backup Camera"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 214,
    "make": "Subaru",
    "model": "Baja",
    "year": 2016,
    "price": 1568175,
    "mileage": 70494,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Premium Subaru Baja with luxury features and superior comfort.",
    "features": [
      "Roof Rails",
      "Parking Sensors",
      "Navigation",
      "Multiple Airbags",
      "Wireless Charging"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 215,
    "make": "Subaru",
    "model": "Tribeca",
    "year": 2021,
    "price": 3517440,
    "mileage": 101208,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Spacious Subaru Tribeca ideal for family trips and business use.",
    "features": [
      "Sunroof",
      "Wireless Charging"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 216,
    "make": "Kia",
    "model": "Carnival",
    "year": 2015,
    "price": 2120323,
    "mileage": 83639,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Robust Kia Carnival built for durability and long-term reliability.",
    "features": [
      "Eco Mode",
      "Multiple Airbags",
      "Heated Seats",
      "Traction Control"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 217,
    "make": "Ford",
    "model": "Ranger",
    "year": 2020,
    "price": 1434244,
    "mileage": 108323,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Well-maintained Ford Ranger with excellent performance and reliability.",
    "features": [
      "Keyless Entry",
      "Ventilated Seats",
      "ABS",
      "Sunroof",
      "Hill Start Assist"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 218,
    "make": "Suzuki",
    "model": "Swift",
    "year": 2018,
    "price": 3580498,
    "mileage": 130805,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Well-maintained Suzuki Swift with excellent performance and reliability.",
    "features": [
      "Power Mirrors",
      "4WD/AWD",
      "Multiple Airbags",
      "Android Auto",
      "Leather Seats"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 219,
    "make": "Kia",
    "model": "Carnival",
    "year": 2023,
    "price": 2623788,
    "mileage": 114443,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Well-maintained Kia Carnival with excellent performance and reliability.",
    "features": [
      "Ventilated Seats",
      "Cruise Control",
      "Sunroof",
      "LED Headlights"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 220,
    "make": "Hyundai",
    "model": "Staria",
    "year": 2021,
    "price": 3539089,
    "mileage": 108666,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Robust Hyundai Staria built for durability and long-term reliability.",
    "features": [
      "Cruise Control",
      "Leather Seats"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 221,
    "make": "Volkswagen",
    "model": "Atlas",
    "year": 2022,
    "price": 1561911,
    "mileage": 69316,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Reliable Volkswagen Atlas with great fuel efficiency and low maintenance.",
    "features": [
      "Roof Rails",
      "Alloy Wheels",
      "Hill Start Assist"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 222,
    "make": "Mitsubishi",
    "model": "Colt",
    "year": 2015,
    "price": 3764956,
    "mileage": 27001,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Modern Mitsubishi Colt with advanced technology and safety features.",
    "features": [
      "Stability Control",
      "Tow Hitch",
      "Apple CarPlay",
      "Sunroof",
      "Bluetooth"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 223,
    "make": "Hyundai",
    "model": "Elantra",
    "year": 2020,
    "price": 2105563,
    "mileage": 110679,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Spacious Hyundai Elantra ideal for family trips and business use.",
    "features": [
      "Tinted Windows",
      "Sunroof",
      "Keyless Entry",
      "Power Mirrors",
      "Ventilated Seats",
      "Power Windows"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 224,
    "make": "Volkswagen",
    "model": "ID.4",
    "year": 2017,
    "price": 1925413,
    "mileage": 51357,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Spacious Volkswagen ID.4 ideal for family trips and business use.",
    "features": [
      "Air Conditioning",
      "Tow Hitch"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 225,
    "make": "Volkswagen",
    "model": "Touareg",
    "year": 2015,
    "price": 4252323,
    "mileage": 148089,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Reliable Volkswagen Touareg with great fuel efficiency and low maintenance.",
    "features": [
      "Wireless Charging",
      "Brake Assist"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 226,
    "make": "Mercedes",
    "model": "SL",
    "year": 2023,
    "price": 3629589,
    "mileage": 114751,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Quality Mercedes SL perfect for daily commuting and family use.",
    "features": [
      "Apple CarPlay",
      "Air Conditioning",
      "Power Mirrors"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 227,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2019,
    "price": 2666877,
    "mileage": 89873,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Quality Mitsubishi Carisma perfect for daily commuting and family use.",
    "features": [
      "Wireless Charging",
      "Eco Mode",
      "Alloy Wheels"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 228,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2015,
    "price": 4489908,
    "mileage": 6823,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Quality Volkswagen Polo perfect for daily commuting and family use.",
    "features": [
      "Fog Lights",
      "Eco Mode",
      "Navigation",
      "Parking Sensors"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 229,
    "make": "Nissan",
    "model": "Frontier",
    "year": 2022,
    "price": 4468253,
    "mileage": 84642,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Robust Nissan Frontier built for durability and long-term reliability.",
    "features": [
      "Apple CarPlay",
      "Brake Assist",
      "Multiple Airbags",
      "ABS",
      "Stability Control"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 230,
    "make": "Subaru",
    "model": "SVX",
    "year": 2020,
    "price": 2046488,
    "mileage": 54848,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Spacious Subaru SVX ideal for family trips and business use.",
    "features": [
      "Traction Control",
      "Tinted Windows",
      "Heated Seats",
      "Sunroof"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 231,
    "make": "Subaru",
    "model": "Justy",
    "year": 2015,
    "price": 1965743,
    "mileage": 75798,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Modern Subaru Justy with advanced technology and safety features.",
    "features": [
      "Sport Mode",
      "Parking Sensors",
      "LED Headlights"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 232,
    "make": "Volkswagen",
    "model": "ID.4",
    "year": 2020,
    "price": 1976892,
    "mileage": 10105,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Reliable Volkswagen ID.4 with great fuel efficiency and low maintenance.",
    "features": [
      "Sport Mode",
      "Backup Camera"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 233,
    "make": "Subaru",
    "model": "Legacy",
    "year": 2023,
    "price": 2286216,
    "mileage": 105406,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Comfortable Subaru Legacy offering smooth ride and premium feel.",
    "features": [
      "Roof Rails",
      "Brake Assist",
      "Bluetooth"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 234,
    "make": "Volkswagen",
    "model": "T-Cross",
    "year": 2019,
    "price": 1303988,
    "mileage": 59522,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Robust Volkswagen T-Cross built for durability and long-term reliability.",
    "features": [
      "Fog Lights",
      "Stability Control",
      "Navigation",
      "4WD/AWD"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 235,
    "make": "Ford",
    "model": "Ka",
    "year": 2019,
    "price": 2097224,
    "mileage": 29498,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Comfortable Ford Ka offering smooth ride and premium feel.",
    "features": [
      "ABS",
      "Hill Start Assist",
      "Multiple Airbags",
      "Dual Zone AC",
      "Stability Control",
      "Tow Hitch"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 236,
    "make": "Suzuki",
    "model": "XL7",
    "year": 2017,
    "price": 2765441,
    "mileage": 145369,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Quality Suzuki XL7 perfect for daily commuting and family use.",
    "features": [
      "4WD/AWD",
      "Keyless Entry",
      "Cruise Control",
      "Apple CarPlay",
      "Power Mirrors"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 237,
    "make": "Nissan",
    "model": "Serena",
    "year": 2022,
    "price": 2631581,
    "mileage": 92546,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Quality Nissan Serena perfect for daily commuting and family use.",
    "features": [
      "4WD/AWD",
      "Bluetooth",
      "Traction Control"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 238,
    "make": "Volkswagen",
    "model": "Golf",
    "year": 2015,
    "price": 1094720,
    "mileage": 136097,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Well-maintained Volkswagen Golf with excellent performance and reliability.",
    "features": [
      "Eco Mode",
      "Multiple Airbags",
      "Roof Rails",
      "Cruise Control",
      "ABS"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 239,
    "make": "Subaru",
    "model": "Impreza",
    "year": 2016,
    "price": 3582854,
    "mileage": 34792,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Reliable Subaru Impreza with great fuel efficiency and low maintenance.",
    "features": [
      "Tinted Windows",
      "Sunroof"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 240,
    "make": "Honda",
    "model": "CR-V",
    "year": 2022,
    "price": 1183338,
    "mileage": 77962,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Well-maintained Honda CR-V with excellent performance and reliability.",
    "features": [
      "Eco Mode",
      "Hill Start Assist",
      "Multiple Airbags",
      "Cruise Control",
      "Leather Seats",
      "Fog Lights"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 241,
    "make": "Hyundai",
    "model": "Ioniq",
    "year": 2015,
    "price": 4549930,
    "mileage": 146908,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Well-maintained Hyundai Ioniq with excellent performance and reliability.",
    "features": [
      "Traction Control",
      "Push Start",
      "Tinted Windows",
      "EBD",
      "Hill Start Assist"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 242,
    "make": "Peugeot",
    "model": "2008",
    "year": 2019,
    "price": 3706018,
    "mileage": 26929,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Robust Peugeot 2008 built for durability and long-term reliability.",
    "features": [
      "Alloy Wheels",
      "Apple CarPlay",
      "Wireless Charging",
      "Sport Mode",
      "EBD"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 243,
    "make": "Mitsubishi",
    "model": "Mirage",
    "year": 2023,
    "price": 3385389,
    "mileage": 72516,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "White",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Well-maintained Mitsubishi Mirage with excellent performance and reliability.",
    "features": [
      "Sport Mode"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 244,
    "make": "Toyota",
    "model": "Prius",
    "year": 2017,
    "price": 3900105,
    "mileage": 118254,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Premium Toyota Prius with luxury features and superior comfort.",
    "features": [
      "Tinted Windows",
      "EBD"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 245,
    "make": "Nissan",
    "model": "Frontier",
    "year": 2024,
    "price": 3556608,
    "mileage": 23603,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Reliable Nissan Frontier with great fuel efficiency and low maintenance.",
    "features": [
      "Bluetooth",
      "Brake Assist",
      "Push Start",
      "Heated Seats"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 246,
    "make": "Honda",
    "model": "Integra",
    "year": 2021,
    "price": 3423090,
    "mileage": 46036,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Red",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Stylish Honda Integra perfect for urban driving and weekend trips.",
    "features": [
      "Hill Start Assist",
      "Backup Camera",
      "Sunroof",
      "EBD",
      "ABS"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 247,
    "make": "Mitsubishi",
    "model": "Delica",
    "year": 2016,
    "price": 975985,
    "mileage": 103861,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Modern Mitsubishi Delica with advanced technology and safety features.",
    "features": [
      "Leather Seats",
      "ABS",
      "Premium Sound"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 248,
    "make": "Peugeot",
    "model": "Expert",
    "year": 2022,
    "price": 3808512,
    "mileage": 135263,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Well-maintained Peugeot Expert with excellent performance and reliability.",
    "features": [
      "4WD/AWD",
      "Backup Camera",
      "Apple CarPlay"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 249,
    "make": "Toyota",
    "model": "Vitz",
    "year": 2024,
    "price": 2450193,
    "mileage": 120449,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Stylish Toyota Vitz perfect for urban driving and weekend trips.",
    "features": [
      "Multiple Airbags",
      "Eco Mode",
      "Power Mirrors",
      "Sunroof"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 250,
    "make": "Suzuki",
    "model": "XL7",
    "year": 2021,
    "price": 2554766,
    "mileage": 79890,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Well-maintained Suzuki XL7 with excellent performance and reliability.",
    "features": [
      "Ventilated Seats",
      "Heated Seats",
      "LED Headlights"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 251,
    "make": "Nissan",
    "model": "Pathfinder",
    "year": 2022,
    "price": 4351382,
    "mileage": 104372,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Efficient Nissan Pathfinder with excellent handling and performance.",
    "features": [
      "Traction Control",
      "Android Auto",
      "Sport Mode",
      "Tow Hitch"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 252,
    "make": "Renault",
    "model": "Kadjar",
    "year": 2015,
    "price": 3879773,
    "mileage": 57006,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Stylish Renault Kadjar perfect for urban driving and weekend trips.",
    "features": [
      "Sunroof",
      "Push Start"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 253,
    "make": "Honda",
    "model": "Element",
    "year": 2018,
    "price": 991686,
    "mileage": 55860,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Spacious Honda Element ideal for family trips and business use.",
    "features": [
      "Sunroof",
      "EBD"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 254,
    "make": "Hyundai",
    "model": "Venue",
    "year": 2023,
    "price": 3225162,
    "mileage": 60039,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Robust Hyundai Venue built for durability and long-term reliability.",
    "features": [
      "Hill Start Assist",
      "Premium Sound",
      "Navigation",
      "ABS"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 255,
    "make": "Honda",
    "model": "Passport",
    "year": 2024,
    "price": 4063714,
    "mileage": 48432,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Reliable Honda Passport with great fuel efficiency and low maintenance.",
    "features": [
      "Multiple Airbags",
      "Hill Start Assist"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 256,
    "make": "Honda",
    "model": "Pilot",
    "year": 2016,
    "price": 4758697,
    "mileage": 60427,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Robust Honda Pilot built for durability and long-term reliability.",
    "features": [
      "LED Headlights",
      "ABS",
      "Roof Rails"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 257,
    "make": "Renault",
    "model": "Espace",
    "year": 2018,
    "price": 3821444,
    "mileage": 145701,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Robust Renault Espace built for durability and long-term reliability.",
    "features": [
      "Leather Seats"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 258,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2020,
    "price": 2362540,
    "mileage": 108609,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Spacious Mitsubishi Pajero ideal for family trips and business use.",
    "features": [
      "Backup Camera",
      "Power Windows",
      "Wireless Charging",
      "Premium Sound"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 259,
    "make": "Honda",
    "model": "CR-V",
    "year": 2016,
    "price": 2520646,
    "mileage": 104404,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Premium Honda CR-V with luxury features and superior comfort.",
    "features": [
      "Traction Control",
      "Air Conditioning"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 260,
    "make": "Honda",
    "model": "Element",
    "year": 2024,
    "price": 1139367,
    "mileage": 152347,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Modern Honda Element with advanced technology and safety features.",
    "features": [
      "Apple CarPlay",
      "Android Auto",
      "Brake Assist",
      "LED Headlights",
      "Backup Camera",
      "Ventilated Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 261,
    "make": "BMW",
    "model": "X3",
    "year": 2019,
    "price": 2389202,
    "mileage": 85933,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Efficient BMW X3 with excellent handling and performance.",
    "features": [
      "Power Windows",
      "Cruise Control",
      "Bluetooth"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 262,
    "make": "Renault",
    "model": "Clio",
    "year": 2015,
    "price": 825666,
    "mileage": 12876,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Premium Renault Clio with luxury features and superior comfort.",
    "features": [
      "Air Conditioning",
      "Dual Zone AC",
      "Navigation",
      "Brake Assist"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 263,
    "make": "BMW",
    "model": "X6",
    "year": 2017,
    "price": 2661953,
    "mileage": 89905,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Robust BMW X6 built for durability and long-term reliability.",
    "features": [
      "Navigation",
      "Traction Control",
      "Wireless Charging",
      "Parking Sensors"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 264,
    "make": "Hyundai",
    "model": "Accent",
    "year": 2020,
    "price": 4554630,
    "mileage": 114906,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Modern Hyundai Accent with advanced technology and safety features.",
    "features": [
      "Cruise Control",
      "Premium Sound",
      "Sunroof"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 265,
    "make": "Mazda",
    "model": "Protege",
    "year": 2020,
    "price": 2131180,
    "mileage": 129198,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Quality Mazda Protege perfect for daily commuting and family use.",
    "features": [
      "Eco Mode"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 266,
    "make": "Volkswagen",
    "model": "Jetta",
    "year": 2021,
    "price": 1143619,
    "mileage": 20029,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Stylish Volkswagen Jetta perfect for urban driving and weekend trips.",
    "features": [
      "Multiple Airbags",
      "LED Headlights",
      "Air Conditioning"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 267,
    "make": "Hyundai",
    "model": "Palisade",
    "year": 2017,
    "price": 4780089,
    "mileage": 137093,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Modern Hyundai Palisade with advanced technology and safety features.",
    "features": [
      "Alloy Wheels",
      "ABS"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 268,
    "make": "Hyundai",
    "model": "i30",
    "year": 2023,
    "price": 1958413,
    "mileage": 145495,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Premium Hyundai i30 with luxury features and superior comfort.",
    "features": [
      "Keyless Entry",
      "Bluetooth",
      "Air Conditioning"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 269,
    "make": "Volkswagen",
    "model": "Touareg",
    "year": 2023,
    "price": 2057880,
    "mileage": 20975,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Well-maintained Volkswagen Touareg with excellent performance and reliability.",
    "features": [
      "Air Conditioning",
      "ABS",
      "Alloy Wheels"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 270,
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "year": 2019,
    "price": 3376813,
    "mileage": 53554,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Quality Mitsubishi Eclipse Cross perfect for daily commuting and family use.",
    "features": [
      "Air Conditioning",
      "Brake Assist",
      "Ventilated Seats",
      "Dual Zone AC"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 271,
    "make": "Suzuki",
    "model": "SX4",
    "year": 2015,
    "price": 3519065,
    "mileage": 95579,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Premium Suzuki SX4 with luxury features and superior comfort.",
    "features": [
      "Air Conditioning",
      "Parking Sensors",
      "Stability Control",
      "Tow Hitch",
      "Power Mirrors"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 272,
    "make": "Renault",
    "model": "Zoe",
    "year": 2022,
    "price": 951303,
    "mileage": 99037,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Modern Renault Zoe with advanced technology and safety features.",
    "features": [
      "Android Auto",
      "LED Headlights"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 273,
    "make": "Volkswagen",
    "model": "Arteon",
    "year": 2019,
    "price": 1786118,
    "mileage": 68112,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Reliable Volkswagen Arteon with great fuel efficiency and low maintenance.",
    "features": [
      "Multiple Airbags",
      "Apple CarPlay"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 274,
    "make": "Volkswagen",
    "model": "T-Cross",
    "year": 2015,
    "price": 900319,
    "mileage": 54368,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Premium Volkswagen T-Cross with luxury features and superior comfort.",
    "features": [
      "Tinted Windows",
      "Parking Sensors",
      "4WD/AWD",
      "Brake Assist"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 275,
    "make": "Honda",
    "model": "Passport",
    "year": 2016,
    "price": 1454989,
    "mileage": 83560,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Modern Honda Passport with advanced technology and safety features.",
    "features": [
      "Fog Lights",
      "4WD/AWD",
      "Premium Sound",
      "Stability Control",
      "Multiple Airbags"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 276,
    "make": "Renault",
    "model": "Master",
    "year": 2018,
    "price": 1172189,
    "mileage": 70955,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Efficient Renault Master with excellent handling and performance.",
    "features": [
      "Ventilated Seats",
      "Tow Hitch",
      "Parking Sensors",
      "Power Windows",
      "Leather Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 277,
    "make": "Subaru",
    "model": "Outback",
    "year": 2019,
    "price": 1718860,
    "mileage": 50746,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Robust Subaru Outback built for durability and long-term reliability.",
    "features": [
      "Sport Mode",
      "EBD",
      "Power Windows",
      "ABS"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 278,
    "make": "Honda",
    "model": "HR-V",
    "year": 2016,
    "price": 4104197,
    "mileage": 141092,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Quality Honda HR-V perfect for daily commuting and family use.",
    "features": [
      "Bluetooth",
      "Roof Rails"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 279,
    "make": "Mercedes",
    "model": "CLA",
    "year": 2023,
    "price": 4647812,
    "mileage": 132754,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Comfortable Mercedes CLA offering smooth ride and premium feel.",
    "features": [
      "Backup Camera",
      "Sunroof",
      "Dual Zone AC"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 280,
    "make": "Mercedes",
    "model": "GLA",
    "year": 2020,
    "price": 4188396,
    "mileage": 108623,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Premium Mercedes GLA with luxury features and superior comfort.",
    "features": [
      "4WD/AWD",
      "Navigation",
      "Keyless Entry",
      "Sport Mode",
      "LED Headlights"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 281,
    "make": "Mitsubishi",
    "model": "Mirage",
    "year": 2019,
    "price": 3865495,
    "mileage": 49612,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Comfortable Mitsubishi Mirage offering smooth ride and premium feel.",
    "features": [
      "Bluetooth",
      "Brake Assist"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 282,
    "make": "Peugeot",
    "model": "108",
    "year": 2017,
    "price": 1431822,
    "mileage": 146029,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Reliable Peugeot 108 with great fuel efficiency and low maintenance.",
    "features": [
      "Power Windows",
      "Power Mirrors",
      "Sport Mode",
      "Leather Seats",
      "Push Start",
      "Eco Mode"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 283,
    "make": "Mazda",
    "model": "CX-9",
    "year": 2017,
    "price": 3186697,
    "mileage": 64807,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Stylish Mazda CX-9 perfect for urban driving and weekend trips.",
    "features": [
      "EBD",
      "Air Conditioning",
      "Multiple Airbags",
      "ABS",
      "LED Headlights"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 284,
    "make": "BMW",
    "model": "Z4",
    "year": 2023,
    "price": 1010273,
    "mileage": 37184,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Stylish BMW Z4 perfect for urban driving and weekend trips.",
    "features": [
      "ABS",
      "Roof Rails",
      "Sunroof",
      "Navigation"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 285,
    "make": "BMW",
    "model": "M3",
    "year": 2016,
    "price": 3515328,
    "mileage": 11632,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Quality BMW M3 perfect for daily commuting and family use.",
    "features": [
      "Navigation",
      "Apple CarPlay",
      "Power Windows",
      "Multiple Airbags"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 286,
    "make": "Ford",
    "model": "Ranger",
    "year": 2015,
    "price": 2824638,
    "mileage": 69475,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Well-maintained Ford Ranger with excellent performance and reliability.",
    "features": [
      "Air Conditioning",
      "Apple CarPlay",
      "Parking Sensors"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 287,
    "make": "Ford",
    "model": "Explorer",
    "year": 2019,
    "price": 3048329,
    "mileage": 127460,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Premium Ford Explorer with luxury features and superior comfort.",
    "features": [
      "Alloy Wheels",
      "Parking Sensors",
      "Keyless Entry",
      "Wireless Charging"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 288,
    "make": "Toyota",
    "model": "C-HR",
    "year": 2015,
    "price": 1292481,
    "mileage": 115422,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Quality Toyota C-HR perfect for daily commuting and family use.",
    "features": [
      "Cruise Control",
      "Tow Hitch"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 289,
    "make": "Subaru",
    "model": "Justy",
    "year": 2023,
    "price": 4059492,
    "mileage": 86625,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Premium Subaru Justy with luxury features and superior comfort.",
    "features": [
      "Android Auto",
      "Wireless Charging",
      "Stability Control"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 290,
    "make": "Nissan",
    "model": "Serena",
    "year": 2017,
    "price": 2305826,
    "mileage": 142075,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Efficient Nissan Serena with excellent handling and performance.",
    "features": [
      "EBD",
      "Android Auto",
      "Hill Start Assist",
      "LED Headlights"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 291,
    "make": "Mitsubishi",
    "model": "Delica",
    "year": 2018,
    "price": 4355540,
    "mileage": 76119,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Spacious Mitsubishi Delica ideal for family trips and business use.",
    "features": [
      "Bluetooth",
      "Wireless Charging",
      "Leather Seats",
      "Parking Sensors",
      "Power Mirrors",
      "4WD/AWD"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 292,
    "make": "Ford",
    "model": "Focus",
    "year": 2017,
    "price": 4761385,
    "mileage": 50097,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Reliable Ford Focus with great fuel efficiency and low maintenance.",
    "features": [
      "Backup Camera",
      "Dual Zone AC",
      "Leather Seats",
      "Heated Seats",
      "Ventilated Seats"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 293,
    "make": "Honda",
    "model": "City",
    "year": 2021,
    "price": 821264,
    "mileage": 120977,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Reliable Honda City with great fuel efficiency and low maintenance.",
    "features": [
      "Heated Seats",
      "Tow Hitch",
      "Bluetooth",
      "Air Conditioning"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 294,
    "make": "Renault",
    "model": "Wind",
    "year": 2015,
    "price": 1700923,
    "mileage": 76524,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Efficient Renault Wind with excellent handling and performance.",
    "features": [
      "Hill Start Assist",
      "Air Conditioning"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 295,
    "make": "Mercedes",
    "model": "Sprinter",
    "year": 2021,
    "price": 2302648,
    "mileage": 74083,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Well-maintained Mercedes Sprinter with excellent performance and reliability.",
    "features": [
      "Leather Seats",
      "EBD",
      "ABS",
      "Stability Control",
      "LED Headlights"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 296,
    "make": "Mercedes",
    "model": "GLC",
    "year": 2020,
    "price": 1584572,
    "mileage": 23770,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Premium Mercedes GLC with luxury features and superior comfort.",
    "features": [
      "Brake Assist",
      "Android Auto",
      "Alloy Wheels"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 297,
    "make": "Suzuki",
    "model": "Jimny",
    "year": 2022,
    "price": 2808959,
    "mileage": 92886,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Comfortable Suzuki Jimny offering smooth ride and premium feel.",
    "features": [
      "Tow Hitch",
      "Fog Lights",
      "Ventilated Seats",
      "Parking Sensors",
      "Keyless Entry"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 298,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "price": 3218695,
    "mileage": 60510,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Reliable Toyota Corolla with great fuel efficiency and low maintenance.",
    "features": [
      "Stability Control",
      "Heated Seats"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 299,
    "make": "Suzuki",
    "model": "S-Cross",
    "year": 2022,
    "price": 3843225,
    "mileage": 81931,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Efficient Suzuki S-Cross with excellent handling and performance.",
    "features": [
      "Fog Lights",
      "Android Auto",
      "Leather Seats"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 300,
    "make": "Nissan",
    "model": "X-Trail",
    "year": 2022,
    "price": 3375937,
    "mileage": 70786,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Nissan X-Trail perfect for urban driving and weekend trips.",
    "features": [
      "Power Windows",
      "Sunroof",
      "Heated Seats"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 301,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2015,
    "price": 3591107,
    "mileage": 41577,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Comfortable Hyundai Sonata offering smooth ride and premium feel.",
    "features": [
      "Multiple Airbags"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 302,
    "make": "Mercedes",
    "model": "B-Class",
    "year": 2023,
    "price": 4510747,
    "mileage": 54210,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Robust Mercedes B-Class built for durability and long-term reliability.",
    "features": [
      "Wireless Charging",
      "Tinted Windows",
      "Heated Seats",
      "Premium Sound",
      "Roof Rails",
      "ABS"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 303,
    "make": "Mercedes",
    "model": "CLS",
    "year": 2019,
    "price": 4068102,
    "mileage": 76264,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Quality Mercedes CLS perfect for daily commuting and family use.",
    "features": [
      "Heated Seats",
      "Cruise Control",
      "Sport Mode",
      "Hill Start Assist",
      "EBD"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 304,
    "make": "Peugeot",
    "model": "5008",
    "year": 2021,
    "price": 4201744,
    "mileage": 136868,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Spacious Peugeot 5008 ideal for family trips and business use.",
    "features": [
      "Tow Hitch",
      "ABS"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 305,
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "year": 2021,
    "price": 3191391,
    "mileage": 129015,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Well-maintained Mitsubishi Eclipse Cross with excellent performance and reliability.",
    "features": [
      "Apple CarPlay",
      "Backup Camera",
      "Hill Start Assist",
      "Ventilated Seats"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 306,
    "make": "Mazda",
    "model": "Bongo",
    "year": 2015,
    "price": 3651960,
    "mileage": 35514,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Stylish Mazda Bongo perfect for urban driving and weekend trips.",
    "features": [
      "Ventilated Seats",
      "Hill Start Assist",
      "Multiple Airbags",
      "Tinted Windows",
      "ABS"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 307,
    "make": "Renault",
    "model": "Megane",
    "year": 2019,
    "price": 1242394,
    "mileage": 93138,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Modern Renault Megane with advanced technology and safety features.",
    "features": [
      "Brake Assist",
      "Multiple Airbags",
      "Heated Seats",
      "Bluetooth"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 308,
    "make": "Subaru",
    "model": "Tribeca",
    "year": 2020,
    "price": 3232847,
    "mileage": 51056,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Reliable Subaru Tribeca with great fuel efficiency and low maintenance.",
    "features": [
      "Brake Assist",
      "Dual Zone AC"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 309,
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2022,
    "price": 2747967,
    "mileage": 87469,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Robust Toyota Land Cruiser built for durability and long-term reliability.",
    "features": [
      "EBD",
      "Tow Hitch",
      "Power Mirrors"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 310,
    "make": "Honda",
    "model": "Jazz",
    "year": 2015,
    "price": 3909553,
    "mileage": 38248,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Comfortable Honda Jazz offering smooth ride and premium feel.",
    "features": [
      "EBD",
      "Android Auto",
      "Apple CarPlay",
      "Keyless Entry",
      "Hill Start Assist",
      "Multiple Airbags"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 311,
    "make": "Suzuki",
    "model": "Swift",
    "year": 2017,
    "price": 1968112,
    "mileage": 122459,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Modern Suzuki Swift with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "Android Auto",
      "Keyless Entry",
      "Brake Assist"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 312,
    "make": "Mercedes",
    "model": "C-Class",
    "year": 2022,
    "price": 1024535,
    "mileage": 70137,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Comfortable Mercedes C-Class offering smooth ride and premium feel.",
    "features": [
      "Traction Control",
      "Parking Sensors",
      "Brake Assist"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 313,
    "make": "Mitsubishi",
    "model": "Attrage",
    "year": 2022,
    "price": 2459447,
    "mileage": 59242,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Efficient Mitsubishi Attrage with excellent handling and performance.",
    "features": [
      "Keyless Entry",
      "Premium Sound",
      "Tow Hitch"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 314,
    "make": "Mitsubishi",
    "model": "Challenger",
    "year": 2019,
    "price": 2659746,
    "mileage": 147486,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Well-maintained Mitsubishi Challenger with excellent performance and reliability.",
    "features": [
      "Hill Start Assist",
      "Tinted Windows",
      "Multiple Airbags"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 315,
    "make": "Honda",
    "model": "Fit",
    "year": 2015,
    "price": 1691339,
    "mileage": 16756,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Premium Honda Fit with luxury features and superior comfort.",
    "features": [
      "Backup Camera",
      "Multiple Airbags",
      "Wireless Charging",
      "Navigation"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 316,
    "make": "Mercedes",
    "model": "SLK",
    "year": 2020,
    "price": 2352887,
    "mileage": 90220,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Quality Mercedes SLK perfect for daily commuting and family use.",
    "features": [
      "Wireless Charging",
      "Backup Camera",
      "LED Headlights",
      "Keyless Entry",
      "Brake Assist",
      "Air Conditioning"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 317,
    "make": "Nissan",
    "model": "Qashqai",
    "year": 2016,
    "price": 1076789,
    "mileage": 103345,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "White",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Spacious Nissan Qashqai ideal for family trips and business use.",
    "features": [
      "Apple CarPlay",
      "Alloy Wheels",
      "Parking Sensors",
      "Cruise Control",
      "Eco Mode",
      "Bluetooth"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 318,
    "make": "Honda",
    "model": "Pilot",
    "year": 2017,
    "price": 1494153,
    "mileage": 123130,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Spacious Honda Pilot ideal for family trips and business use.",
    "features": [
      "Wireless Charging",
      "Multiple Airbags",
      "Roof Rails",
      "Leather Seats",
      "Keyless Entry"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 319,
    "make": "BMW",
    "model": "M3",
    "year": 2023,
    "price": 3004979,
    "mileage": 69133,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Premium BMW M3 with luxury features and superior comfort.",
    "features": [
      "Hill Start Assist",
      "Traction Control"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 320,
    "make": "Suzuki",
    "model": "Vitara",
    "year": 2022,
    "price": 1474011,
    "mileage": 128226,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Premium Suzuki Vitara with luxury features and superior comfort.",
    "features": [
      "Sport Mode",
      "Apple CarPlay",
      "Hill Start Assist",
      "Dual Zone AC",
      "Traction Control"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 321,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2015,
    "price": 2611119,
    "mileage": 5754,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Modern Honda Ridgeline with advanced technology and safety features.",
    "features": [
      "Traction Control",
      "Bluetooth",
      "Alloy Wheels",
      "Ventilated Seats"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 322,
    "make": "Honda",
    "model": "Insight",
    "year": 2016,
    "price": 3495871,
    "mileage": 80097,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Reliable Honda Insight with great fuel efficiency and low maintenance.",
    "features": [
      "Traction Control",
      "Roof Rails",
      "Premium Sound",
      "Hill Start Assist",
      "Ventilated Seats",
      "Fog Lights"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 323,
    "make": "Renault",
    "model": "Koleos",
    "year": 2024,
    "price": 3009072,
    "mileage": 21215,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Efficient Renault Koleos with excellent handling and performance.",
    "features": [
      "Multiple Airbags",
      "Cruise Control",
      "Tow Hitch"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 324,
    "make": "Ford",
    "model": "Explorer",
    "year": 2021,
    "price": 3998686,
    "mileage": 124950,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Premium Ford Explorer with luxury features and superior comfort.",
    "features": [
      "ABS",
      "Push Start",
      "Eco Mode"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 325,
    "make": "Mazda",
    "model": "CX-9",
    "year": 2021,
    "price": 3984859,
    "mileage": 149172,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Comfortable Mazda CX-9 offering smooth ride and premium feel.",
    "features": [
      "Multiple Airbags",
      "Power Windows",
      "Navigation",
      "Backup Camera",
      "Premium Sound",
      "Power Mirrors"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 326,
    "make": "Subaru",
    "model": "Baja",
    "year": 2016,
    "price": 1554612,
    "mileage": 129042,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Reliable Subaru Baja with great fuel efficiency and low maintenance.",
    "features": [
      "Cruise Control",
      "Parking Sensors",
      "Hill Start Assist"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 327,
    "make": "Hyundai",
    "model": "Santa Fe",
    "year": 2023,
    "price": 4410714,
    "mileage": 11183,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Reliable Hyundai Santa Fe with great fuel efficiency and low maintenance.",
    "features": [
      "Multiple Airbags",
      "Dual Zone AC"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 328,
    "make": "Peugeot",
    "model": "607",
    "year": 2023,
    "price": 1668500,
    "mileage": 153247,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Reliable Peugeot 607 with great fuel efficiency and low maintenance.",
    "features": [
      "Heated Seats",
      "Cruise Control",
      "Backup Camera",
      "Roof Rails"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 329,
    "make": "Subaru",
    "model": "Impreza",
    "year": 2019,
    "price": 1420314,
    "mileage": 143241,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Quality Subaru Impreza perfect for daily commuting and family use.",
    "features": [
      "EBD",
      "Push Start"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 330,
    "make": "Volkswagen",
    "model": "Golf",
    "year": 2024,
    "price": 4177837,
    "mileage": 116407,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Efficient Volkswagen Golf with excellent handling and performance.",
    "features": [
      "Navigation",
      "Eco Mode"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 331,
    "make": "Renault",
    "model": "Twingo",
    "year": 2020,
    "price": 1994358,
    "mileage": 6157,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Spacious Renault Twingo ideal for family trips and business use.",
    "features": [
      "Ventilated Seats",
      "LED Headlights",
      "Eco Mode",
      "Tinted Windows"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 332,
    "make": "Honda",
    "model": "Insight",
    "year": 2015,
    "price": 2118327,
    "mileage": 131147,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Comfortable Honda Insight offering smooth ride and premium feel.",
    "features": [
      "Tinted Windows",
      "Alloy Wheels",
      "Sport Mode"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 333,
    "make": "Mitsubishi",
    "model": "Triton",
    "year": 2019,
    "price": 2437934,
    "mileage": 152301,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Quality Mitsubishi Triton perfect for daily commuting and family use.",
    "features": [
      "ABS",
      "Fog Lights",
      "Power Mirrors",
      "Premium Sound",
      "Brake Assist"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 334,
    "make": "Hyundai",
    "model": "Venue",
    "year": 2024,
    "price": 2055142,
    "mileage": 131937,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Stylish Hyundai Venue perfect for urban driving and weekend trips.",
    "features": [
      "Bluetooth",
      "LED Headlights",
      "Sport Mode"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 335,
    "make": "Volkswagen",
    "model": "Golf",
    "year": 2019,
    "price": 1809006,
    "mileage": 38844,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Premium Volkswagen Golf with luxury features and superior comfort.",
    "features": [
      "Bluetooth",
      "Leather Seats",
      "Traction Control",
      "Power Windows",
      "EBD",
      "Apple CarPlay"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 336,
    "make": "Honda",
    "model": "Odyssey",
    "year": 2024,
    "price": 4003939,
    "mileage": 123885,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Quality Honda Odyssey perfect for daily commuting and family use.",
    "features": [
      "Power Mirrors",
      "Android Auto"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 337,
    "make": "BMW",
    "model": "X7",
    "year": 2018,
    "price": 3457212,
    "mileage": 47015,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Comfortable BMW X7 offering smooth ride and premium feel.",
    "features": [
      "Power Windows",
      "Power Mirrors",
      "Ventilated Seats",
      "Android Auto",
      "Keyless Entry",
      "Alloy Wheels"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 338,
    "make": "Suzuki",
    "model": "Across",
    "year": 2019,
    "price": 3648340,
    "mileage": 147080,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Spacious Suzuki Across ideal for family trips and business use.",
    "features": [
      "Navigation",
      "Sunroof"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 339,
    "make": "Toyota",
    "model": "Tacoma",
    "year": 2024,
    "price": 4693170,
    "mileage": 5012,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Premium Toyota Tacoma with luxury features and superior comfort.",
    "features": [
      "Fog Lights",
      "EBD",
      "Eco Mode",
      "Dual Zone AC",
      "Sport Mode"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 340,
    "make": "Renault",
    "model": "Twingo",
    "year": 2020,
    "price": 2885953,
    "mileage": 18142,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Spacious Renault Twingo ideal for family trips and business use.",
    "features": [
      "Power Mirrors",
      "Roof Rails",
      "Eco Mode"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 341,
    "make": "Mazda",
    "model": "BT-50",
    "year": 2021,
    "price": 4021909,
    "mileage": 81228,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Efficient Mazda BT-50 with excellent handling and performance.",
    "features": [
      "Leather Seats",
      "Traction Control",
      "4WD/AWD",
      "Keyless Entry"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 342,
    "make": "Honda",
    "model": "Fit",
    "year": 2017,
    "price": 4720309,
    "mileage": 32063,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Robust Honda Fit built for durability and long-term reliability.",
    "features": [
      "Power Mirrors",
      "Premium Sound",
      "Power Windows",
      "ABS",
      "Brake Assist"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 343,
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "year": 2022,
    "price": 4226155,
    "mileage": 50171,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Comfortable Mitsubishi Eclipse Cross offering smooth ride and premium feel.",
    "features": [
      "Keyless Entry",
      "Parking Sensors",
      "ABS",
      "Tow Hitch",
      "Bluetooth"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 344,
    "make": "Nissan",
    "model": "Altima",
    "year": 2024,
    "price": 2040813,
    "mileage": 67438,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Modern Nissan Altima with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "Eco Mode",
      "Sunroof",
      "Hill Start Assist",
      "Traction Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 345,
    "make": "Mitsubishi",
    "model": "Colt",
    "year": 2023,
    "price": 3135860,
    "mileage": 125938,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Spacious Mitsubishi Colt ideal for family trips and business use.",
    "features": [
      "Multiple Airbags",
      "Air Conditioning",
      "Tow Hitch",
      "Power Windows",
      "Sunroof",
      "Eco Mode"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 346,
    "make": "Toyota",
    "model": "Prius",
    "year": 2020,
    "price": 3465771,
    "mileage": 139552,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Modern Toyota Prius with advanced technology and safety features.",
    "features": [
      "4WD/AWD",
      "Keyless Entry",
      "Alloy Wheels",
      "Traction Control",
      "Tow Hitch"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 347,
    "make": "Peugeot",
    "model": "Expert",
    "year": 2021,
    "price": 1664086,
    "mileage": 71166,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Efficient Peugeot Expert with excellent handling and performance.",
    "features": [
      "Dual Zone AC",
      "Push Start",
      "Brake Assist",
      "Multiple Airbags",
      "Power Windows"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 348,
    "make": "BMW",
    "model": "i3",
    "year": 2019,
    "price": 3501943,
    "mileage": 136588,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Modern BMW i3 with advanced technology and safety features.",
    "features": [
      "Android Auto",
      "Fog Lights",
      "Keyless Entry",
      "Premium Sound",
      "LED Headlights"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 349,
    "make": "Nissan",
    "model": "Sentra",
    "year": 2015,
    "price": 3696123,
    "mileage": 26680,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Well-maintained Nissan Sentra with excellent performance and reliability.",
    "features": [
      "Power Mirrors",
      "Roof Rails"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 350,
    "make": "Suzuki",
    "model": "Jimny",
    "year": 2023,
    "price": 2143295,
    "mileage": 20514,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Spacious Suzuki Jimny ideal for family trips and business use.",
    "features": [
      "Push Start",
      "Multiple Airbags",
      "4WD/AWD",
      "Backup Camera"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 351,
    "make": "Renault",
    "model": "Trafic",
    "year": 2024,
    "price": 1380223,
    "mileage": 18498,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Robust Renault Trafic built for durability and long-term reliability.",
    "features": [
      "Dual Zone AC",
      "Leather Seats",
      "Alloy Wheels",
      "Traction Control"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 352,
    "make": "Renault",
    "model": "Trafic",
    "year": 2019,
    "price": 4349552,
    "mileage": 64887,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Stylish Renault Trafic perfect for urban driving and weekend trips.",
    "features": [
      "Roof Rails",
      "Dual Zone AC"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 353,
    "make": "Honda",
    "model": "Fit",
    "year": 2023,
    "price": 2823335,
    "mileage": 153766,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Reliable Honda Fit with great fuel efficiency and low maintenance.",
    "features": [
      "Heated Seats",
      "EBD",
      "Hill Start Assist",
      "Fog Lights"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 354,
    "make": "Mercedes",
    "model": "GLE",
    "year": 2016,
    "price": 4385691,
    "mileage": 26454,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Robust Mercedes GLE built for durability and long-term reliability.",
    "features": [
      "Keyless Entry",
      "4WD/AWD",
      "Multiple Airbags",
      "Power Mirrors"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 355,
    "make": "Suzuki",
    "model": "Jimny",
    "year": 2016,
    "price": 3368209,
    "mileage": 44955,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Premium Suzuki Jimny with luxury features and superior comfort.",
    "features": [
      "Dual Zone AC",
      "Push Start",
      "ABS",
      "Premium Sound",
      "Brake Assist"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 356,
    "make": "Hyundai",
    "model": "Ioniq",
    "year": 2022,
    "price": 3309388,
    "mileage": 42807,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Modern Hyundai Ioniq with advanced technology and safety features.",
    "features": [
      "Wireless Charging",
      "Roof Rails",
      "Power Windows",
      "EBD",
      "Stability Control"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 357,
    "make": "Toyota",
    "model": "Yaris",
    "year": 2022,
    "price": 986175,
    "mileage": 123689,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Red",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Efficient Toyota Yaris with excellent handling and performance.",
    "features": [
      "Sport Mode",
      "Tinted Windows"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 358,
    "make": "Toyota",
    "model": "Hilux",
    "year": 2020,
    "price": 1946720,
    "mileage": 140799,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Efficient Toyota Hilux with excellent handling and performance.",
    "features": [
      "LED Headlights",
      "Android Auto"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 359,
    "make": "Renault",
    "model": "Fluence",
    "year": 2023,
    "price": 3641842,
    "mileage": 39072,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Comfortable Renault Fluence offering smooth ride and premium feel.",
    "features": [
      "Air Conditioning",
      "Keyless Entry",
      "ABS"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 360,
    "make": "Hyundai",
    "model": "Elantra",
    "year": 2018,
    "price": 2440187,
    "mileage": 44285,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Spacious Hyundai Elantra ideal for family trips and business use.",
    "features": [
      "Tow Hitch",
      "Cruise Control",
      "EBD"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 361,
    "make": "Mazda",
    "model": "6",
    "year": 2016,
    "price": 1053300,
    "mileage": 116852,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Spacious Mazda 6 ideal for family trips and business use.",
    "features": [
      "Power Mirrors",
      "Brake Assist",
      "Apple CarPlay",
      "Alloy Wheels",
      "Power Windows"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 362,
    "make": "Nissan",
    "model": "Versa",
    "year": 2015,
    "price": 3788908,
    "mileage": 152543,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Modern Nissan Versa with advanced technology and safety features.",
    "features": [
      "4WD/AWD",
      "Apple CarPlay",
      "Sport Mode",
      "Power Windows",
      "Eco Mode"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 363,
    "make": "BMW",
    "model": "3 Series",
    "year": 2019,
    "price": 841871,
    "mileage": 150045,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Stylish BMW 3 Series perfect for urban driving and weekend trips.",
    "features": [
      "LED Headlights",
      "EBD"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 364,
    "make": "Toyota",
    "model": "Auris",
    "year": 2020,
    "price": 1049266,
    "mileage": 44848,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Quality Toyota Auris perfect for daily commuting and family use.",
    "features": [
      "Multiple Airbags",
      "LED Headlights",
      "Push Start",
      "Tinted Windows",
      "Alloy Wheels",
      "Air Conditioning"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 365,
    "make": "Mazda",
    "model": "6",
    "year": 2023,
    "price": 2967902,
    "mileage": 17977,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Reliable Mazda 6 with great fuel efficiency and low maintenance.",
    "features": [
      "ABS",
      "Cruise Control",
      "Dual Zone AC",
      "Stability Control",
      "Keyless Entry"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 366,
    "make": "Mitsubishi",
    "model": "Outlander",
    "year": 2024,
    "price": 3324831,
    "mileage": 55854,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Quality Mitsubishi Outlander perfect for daily commuting and family use.",
    "features": [
      "Android Auto",
      "Backup Camera",
      "Air Conditioning",
      "Sunroof"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 367,
    "make": "Mazda",
    "model": "CX-9",
    "year": 2015,
    "price": 3793489,
    "mileage": 135793,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Spacious Mazda CX-9 ideal for family trips and business use.",
    "features": [
      "Navigation",
      "Premium Sound",
      "Apple CarPlay",
      "Parking Sensors",
      "Wireless Charging",
      "Tinted Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 368,
    "make": "Subaru",
    "model": "Impreza",
    "year": 2017,
    "price": 3778344,
    "mileage": 97545,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Well-maintained Subaru Impreza with excellent performance and reliability.",
    "features": [
      "Leather Seats",
      "Dual Zone AC",
      "Tinted Windows",
      "Apple CarPlay"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 369,
    "make": "BMW",
    "model": "X5",
    "year": 2015,
    "price": 1101108,
    "mileage": 145541,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Quality BMW X5 perfect for daily commuting and family use.",
    "features": [
      "Tow Hitch",
      "Heated Seats",
      "Premium Sound",
      "Cruise Control"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 370,
    "make": "Ford",
    "model": "Focus",
    "year": 2020,
    "price": 1856405,
    "mileage": 66996,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Modern Ford Focus with advanced technology and safety features.",
    "features": [
      "Bluetooth",
      "Fog Lights",
      "LED Headlights"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 371,
    "make": "BMW",
    "model": "X4",
    "year": 2017,
    "price": 1669196,
    "mileage": 103517,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Well-maintained BMW X4 with excellent performance and reliability.",
    "features": [
      "Power Mirrors",
      "Apple CarPlay",
      "Keyless Entry",
      "Navigation"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 372,
    "make": "Toyota",
    "model": "Premio",
    "year": 2024,
    "price": 1535399,
    "mileage": 32887,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Well-maintained Toyota Premio with excellent performance and reliability.",
    "features": [
      "Traction Control",
      "Bluetooth",
      "Alloy Wheels",
      "Leather Seats",
      "Push Start"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 373,
    "make": "Nissan",
    "model": "Maxima",
    "year": 2018,
    "price": 1094486,
    "mileage": 20134,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Robust Nissan Maxima built for durability and long-term reliability.",
    "features": [
      "Ventilated Seats",
      "LED Headlights",
      "Backup Camera"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 374,
    "make": "Mitsubishi",
    "model": "Triton",
    "year": 2021,
    "price": 2007003,
    "mileage": 69847,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Well-maintained Mitsubishi Triton with excellent performance and reliability.",
    "features": [
      "Dual Zone AC",
      "EBD",
      "Android Auto",
      "4WD/AWD",
      "Keyless Entry",
      "Power Mirrors"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 375,
    "make": "Renault",
    "model": "Captur",
    "year": 2017,
    "price": 2727146,
    "mileage": 114766,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Comfortable Renault Captur offering smooth ride and premium feel.",
    "features": [
      "Roof Rails",
      "4WD/AWD",
      "Power Windows",
      "Eco Mode"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 376,
    "make": "Nissan",
    "model": "Altima",
    "year": 2017,
    "price": 2678964,
    "mileage": 91366,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Robust Nissan Altima built for durability and long-term reliability.",
    "features": [
      "Power Windows",
      "Alloy Wheels",
      "Bluetooth",
      "4WD/AWD",
      "Fog Lights",
      "Traction Control"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 377,
    "make": "Subaru",
    "model": "BRZ",
    "year": 2022,
    "price": 2373224,
    "mileage": 154546,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Reliable Subaru BRZ with great fuel efficiency and low maintenance.",
    "features": [
      "Bluetooth",
      "Power Windows",
      "Leather Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 378,
    "make": "Mazda",
    "model": "RX-8",
    "year": 2018,
    "price": 3085311,
    "mileage": 29884,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Modern Mazda RX-8 with advanced technology and safety features.",
    "features": [
      "Bluetooth",
      "Push Start",
      "Power Windows",
      "Ventilated Seats",
      "Premium Sound"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 379,
    "make": "Renault",
    "model": "Trafic",
    "year": 2023,
    "price": 4129692,
    "mileage": 139971,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Efficient Renault Trafic with excellent handling and performance.",
    "features": [
      "Stability Control",
      "Push Start",
      "Brake Assist"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 380,
    "make": "Peugeot",
    "model": "108",
    "year": 2015,
    "price": 4460043,
    "mileage": 61382,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Modern Peugeot 108 with advanced technology and safety features.",
    "features": [
      "Hill Start Assist",
      "Dual Zone AC",
      "Keyless Entry",
      "EBD",
      "Apple CarPlay",
      "Ventilated Seats"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 381,
    "make": "BMW",
    "model": "X7",
    "year": 2018,
    "price": 3477944,
    "mileage": 93265,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Comfortable BMW X7 offering smooth ride and premium feel.",
    "features": [
      "Navigation",
      "Fog Lights"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 382,
    "make": "Peugeot",
    "model": "407",
    "year": 2015,
    "price": 4113103,
    "mileage": 47805,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Robust Peugeot 407 built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "Eco Mode",
      "Tinted Windows"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 383,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2024,
    "price": 2916333,
    "mileage": 148997,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Robust Volkswagen Polo built for durability and long-term reliability.",
    "features": [
      "Hill Start Assist",
      "LED Headlights",
      "Ventilated Seats",
      "Traction Control"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 384,
    "make": "Honda",
    "model": "Prelude",
    "year": 2021,
    "price": 2789235,
    "mileage": 121009,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Efficient Honda Prelude with excellent handling and performance.",
    "features": [
      "Air Conditioning",
      "Premium Sound",
      "Heated Seats"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 385,
    "make": "Mitsubishi",
    "model": "i-MiEV",
    "year": 2018,
    "price": 3928998,
    "mileage": 76344,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Spacious Mitsubishi i-MiEV ideal for family trips and business use.",
    "features": [
      "Brake Assist",
      "Alloy Wheels",
      "Ventilated Seats",
      "Sunroof"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 386,
    "make": "Hyundai",
    "model": "Veloster",
    "year": 2017,
    "price": 3457633,
    "mileage": 61052,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Spacious Hyundai Veloster ideal for family trips and business use.",
    "features": [
      "EBD",
      "Leather Seats",
      "Ventilated Seats",
      "Push Start",
      "Power Windows",
      "Heated Seats"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 387,
    "make": "Renault",
    "model": "Koleos",
    "year": 2022,
    "price": 4096899,
    "mileage": 6825,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Modern Renault Koleos with advanced technology and safety features.",
    "features": [
      "Leather Seats",
      "Backup Camera",
      "Brake Assist",
      "Keyless Entry"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 388,
    "make": "Hyundai",
    "model": "Veloster",
    "year": 2023,
    "price": 2504693,
    "mileage": 94047,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Reliable Hyundai Veloster with great fuel efficiency and low maintenance.",
    "features": [
      "Eco Mode",
      "Apple CarPlay",
      "Sunroof",
      "Premium Sound",
      "Android Auto"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 389,
    "make": "Kia",
    "model": "Telluride",
    "year": 2018,
    "price": 1656128,
    "mileage": 83719,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Comfortable Kia Telluride offering smooth ride and premium feel.",
    "features": [
      "Heated Seats",
      "Bluetooth",
      "Sunroof"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 390,
    "make": "BMW",
    "model": "320i",
    "year": 2017,
    "price": 834022,
    "mileage": 131468,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Green",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Premium BMW 320i with luxury features and superior comfort.",
    "features": [
      "ABS",
      "Fog Lights",
      "Android Auto",
      "Sport Mode",
      "Leather Seats",
      "Ventilated Seats"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 391,
    "make": "Volkswagen",
    "model": "Golf",
    "year": 2024,
    "price": 1728612,
    "mileage": 61300,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Reliable Volkswagen Golf with great fuel efficiency and low maintenance.",
    "features": [
      "Hill Start Assist",
      "4WD/AWD",
      "Tow Hitch"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 392,
    "make": "Mazda",
    "model": "BT-50",
    "year": 2021,
    "price": 2202631,
    "mileage": 52087,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Premium Mazda BT-50 with luxury features and superior comfort.",
    "features": [
      "Apple CarPlay",
      "Bluetooth"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 393,
    "make": "Volkswagen",
    "model": "Golf GTI",
    "year": 2016,
    "price": 1408819,
    "mileage": 39496,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Robust Volkswagen Golf GTI built for durability and long-term reliability.",
    "features": [
      "Air Conditioning",
      "Bluetooth",
      "Ventilated Seats",
      "Fog Lights",
      "EBD"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 394,
    "make": "Volkswagen",
    "model": "Touareg",
    "year": 2023,
    "price": 984101,
    "mileage": 108152,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Modern Volkswagen Touareg with advanced technology and safety features.",
    "features": [
      "Sport Mode",
      "Keyless Entry",
      "LED Headlights",
      "Android Auto"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 395,
    "make": "Volkswagen",
    "model": "Jetta",
    "year": 2024,
    "price": 1526088,
    "mileage": 149894,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Spacious Volkswagen Jetta ideal for family trips and business use.",
    "features": [
      "Multiple Airbags",
      "Tinted Windows"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 396,
    "make": "Suzuki",
    "model": "Ignis",
    "year": 2016,
    "price": 2404711,
    "mileage": 150730,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Modern Suzuki Ignis with advanced technology and safety features.",
    "features": [
      "Parking Sensors",
      "Roof Rails",
      "Heated Seats",
      "EBD"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 397,
    "make": "Suzuki",
    "model": "Baleno",
    "year": 2021,
    "price": 1100561,
    "mileage": 140700,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Quality Suzuki Baleno perfect for daily commuting and family use.",
    "features": [
      "Sunroof",
      "LED Headlights"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 398,
    "make": "Hyundai",
    "model": "Staria",
    "year": 2023,
    "price": 4249607,
    "mileage": 56908,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Robust Hyundai Staria built for durability and long-term reliability.",
    "features": [
      "Wireless Charging",
      "Parking Sensors",
      "Brake Assist",
      "Keyless Entry",
      "Traction Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 399,
    "make": "Suzuki",
    "model": "Across",
    "year": 2024,
    "price": 4161458,
    "mileage": 92505,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "White",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Modern Suzuki Across with advanced technology and safety features.",
    "features": [
      "Fog Lights",
      "Bluetooth",
      "Air Conditioning",
      "Apple CarPlay"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 400,
    "make": "Hyundai",
    "model": "Tucson",
    "year": 2022,
    "price": 2134240,
    "mileage": 82305,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Reliable Hyundai Tucson with great fuel efficiency and low maintenance.",
    "features": [
      "Sunroof",
      "Push Start",
      "Backup Camera"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 401,
    "make": "Volkswagen",
    "model": "T-Cross",
    "year": 2024,
    "price": 1971443,
    "mileage": 141000,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Well-maintained Volkswagen T-Cross with excellent performance and reliability.",
    "features": [
      "Sport Mode",
      "Wireless Charging",
      "Dual Zone AC"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 402,
    "make": "Mercedes",
    "model": "SLK",
    "year": 2015,
    "price": 1061256,
    "mileage": 121273,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Modern Mercedes SLK with advanced technology and safety features.",
    "features": [
      "Multiple Airbags",
      "Premium Sound",
      "Dual Zone AC",
      "Sunroof"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 403,
    "make": "Mazda",
    "model": "626",
    "year": 2017,
    "price": 4038000,
    "mileage": 145106,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Quality Mazda 626 perfect for daily commuting and family use.",
    "features": [
      "Apple CarPlay",
      "Alloy Wheels",
      "Hill Start Assist",
      "Multiple Airbags"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 404,
    "make": "BMW",
    "model": "M3",
    "year": 2024,
    "price": 4269119,
    "mileage": 96986,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish BMW M3 perfect for urban driving and weekend trips.",
    "features": [
      "Traction Control",
      "Leather Seats"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 405,
    "make": "Honda",
    "model": "Passport",
    "year": 2024,
    "price": 2905631,
    "mileage": 75614,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Premium Honda Passport with luxury features and superior comfort.",
    "features": [
      "Eco Mode",
      "ABS",
      "Tow Hitch",
      "LED Headlights",
      "Leather Seats"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 406,
    "make": "Mercedes",
    "model": "GLE",
    "year": 2023,
    "price": 2053017,
    "mileage": 141585,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Spacious Mercedes GLE ideal for family trips and business use.",
    "features": [
      "Premium Sound",
      "Android Auto",
      "LED Headlights"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 407,
    "make": "Peugeot",
    "model": "RCZ",
    "year": 2016,
    "price": 3759665,
    "mileage": 75753,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Modern Peugeot RCZ with advanced technology and safety features.",
    "features": [
      "Power Mirrors",
      "4WD/AWD",
      "Tow Hitch",
      "Sunroof",
      "Push Start"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 408,
    "make": "Mitsubishi",
    "model": "Triton",
    "year": 2021,
    "price": 3779465,
    "mileage": 81744,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Modern Mitsubishi Triton with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "Heated Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 409,
    "make": "Mazda",
    "model": "CX-30",
    "year": 2016,
    "price": 2513331,
    "mileage": 68084,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Comfortable Mazda CX-30 offering smooth ride and premium feel.",
    "features": [
      "Multiple Airbags",
      "Eco Mode",
      "Leather Seats",
      "Dual Zone AC"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 410,
    "make": "Honda",
    "model": "Integra",
    "year": 2023,
    "price": 2594696,
    "mileage": 13613,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Spacious Honda Integra ideal for family trips and business use.",
    "features": [
      "Power Windows",
      "Android Auto",
      "LED Headlights"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 411,
    "make": "Honda",
    "model": "Passport",
    "year": 2023,
    "price": 1041827,
    "mileage": 134599,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Spacious Honda Passport ideal for family trips and business use.",
    "features": [
      "4WD/AWD",
      "Sport Mode",
      "Bluetooth",
      "Brake Assist",
      "Eco Mode"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 412,
    "make": "Ford",
    "model": "Ranger",
    "year": 2020,
    "price": 1110466,
    "mileage": 99792,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Well-maintained Ford Ranger with excellent performance and reliability.",
    "features": [
      "Cruise Control",
      "Air Conditioning",
      "EBD",
      "Premium Sound"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 413,
    "make": "Mitsubishi",
    "model": "Colt",
    "year": 2020,
    "price": 4130985,
    "mileage": 132146,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Premium Mitsubishi Colt with luxury features and superior comfort.",
    "features": [
      "Power Mirrors",
      "Cruise Control",
      "Keyless Entry"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 414,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2015,
    "price": 4319237,
    "mileage": 91742,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Well-maintained Mitsubishi Pajero with excellent performance and reliability.",
    "features": [
      "ABS",
      "Tow Hitch",
      "Keyless Entry"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 415,
    "make": "Mitsubishi",
    "model": "ASX",
    "year": 2024,
    "price": 2007063,
    "mileage": 108005,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Mitsubishi ASX perfect for urban driving and weekend trips.",
    "features": [
      "Eco Mode",
      "Sport Mode",
      "Alloy Wheels",
      "Navigation",
      "Traction Control",
      "Leather Seats"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 416,
    "make": "Kia",
    "model": "Sorento",
    "year": 2015,
    "price": 1817261,
    "mileage": 153548,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Well-maintained Kia Sorento with excellent performance and reliability.",
    "features": [
      "Stability Control",
      "Roof Rails",
      "Heated Seats",
      "Wireless Charging",
      "Hill Start Assist"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 417,
    "make": "Subaru",
    "model": "Leone",
    "year": 2019,
    "price": 2286142,
    "mileage": 73973,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Quality Subaru Leone perfect for daily commuting and family use.",
    "features": [
      "Fog Lights",
      "Sunroof"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 418,
    "make": "Hyundai",
    "model": "Palisade",
    "year": 2017,
    "price": 2587635,
    "mileage": 132121,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Spacious Hyundai Palisade ideal for family trips and business use.",
    "features": [
      "Android Auto",
      "4WD/AWD",
      "Push Start",
      "EBD",
      "Power Windows"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 419,
    "make": "Kia",
    "model": "Telluride",
    "year": 2018,
    "price": 3857574,
    "mileage": 152987,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Modern Kia Telluride with advanced technology and safety features.",
    "features": [
      "Sunroof",
      "Push Start",
      "Ventilated Seats",
      "Android Auto",
      "Hill Start Assist"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 420,
    "make": "BMW",
    "model": "M5",
    "year": 2023,
    "price": 1565545,
    "mileage": 24090,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Reliable BMW M5 with great fuel efficiency and low maintenance.",
    "features": [
      "Multiple Airbags",
      "4WD/AWD"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 421,
    "make": "Toyota",
    "model": "Premio",
    "year": 2020,
    "price": 3107752,
    "mileage": 150329,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Robust Toyota Premio built for durability and long-term reliability.",
    "features": [
      "LED Headlights",
      "Leather Seats",
      "Tinted Windows",
      "Tow Hitch",
      "Dual Zone AC",
      "ABS"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 422,
    "make": "Peugeot",
    "model": "5008",
    "year": 2023,
    "price": 1036005,
    "mileage": 79147,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Stylish Peugeot 5008 perfect for urban driving and weekend trips.",
    "features": [
      "Power Mirrors",
      "Navigation"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 423,
    "make": "Honda",
    "model": "Pilot",
    "year": 2017,
    "price": 1573962,
    "mileage": 26887,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Premium Honda Pilot with luxury features and superior comfort.",
    "features": [
      "Brake Assist",
      "Navigation"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 424,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2017,
    "price": 2844784,
    "mileage": 109112,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Stylish Mitsubishi Carisma perfect for urban driving and weekend trips.",
    "features": [
      "Tow Hitch",
      "Wireless Charging",
      "Apple CarPlay",
      "ABS"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 425,
    "make": "Suzuki",
    "model": "SX4",
    "year": 2021,
    "price": 2070745,
    "mileage": 74433,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Premium Suzuki SX4 with luxury features and superior comfort.",
    "features": [
      "4WD/AWD",
      "EBD",
      "Parking Sensors",
      "Dual Zone AC"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 426,
    "make": "BMW",
    "model": "M3",
    "year": 2017,
    "price": 3386721,
    "mileage": 120234,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Modern BMW M3 with advanced technology and safety features.",
    "features": [
      "Keyless Entry",
      "Power Mirrors",
      "Leather Seats"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 427,
    "make": "Renault",
    "model": "Kadjar",
    "year": 2016,
    "price": 1795867,
    "mileage": 96137,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Modern Renault Kadjar with advanced technology and safety features.",
    "features": [
      "Air Conditioning",
      "Power Windows",
      "Android Auto",
      "Tinted Windows",
      "Multiple Airbags",
      "ABS"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 428,
    "make": "Renault",
    "model": "Kadjar",
    "year": 2015,
    "price": 1409072,
    "mileage": 47308,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Efficient Renault Kadjar with excellent handling and performance.",
    "features": [
      "Stability Control",
      "Parking Sensors",
      "Air Conditioning"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 429,
    "make": "Peugeot",
    "model": "iOn",
    "year": 2018,
    "price": 1470848,
    "mileage": 33770,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Comfortable Peugeot iOn offering smooth ride and premium feel.",
    "features": [
      "Backup Camera",
      "Brake Assist"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 430,
    "make": "Nissan",
    "model": "Maxima",
    "year": 2015,
    "price": 1047635,
    "mileage": 100496,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Modern Nissan Maxima with advanced technology and safety features.",
    "features": [
      "Premium Sound",
      "Leather Seats",
      "Hill Start Assist",
      "Android Auto",
      "Ventilated Seats",
      "Eco Mode"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 431,
    "make": "Nissan",
    "model": "Versa",
    "year": 2015,
    "price": 2216723,
    "mileage": 49501,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Spacious Nissan Versa ideal for family trips and business use.",
    "features": [
      "Backup Camera",
      "Cruise Control",
      "Alloy Wheels"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 432,
    "make": "Ford",
    "model": "C-Max",
    "year": 2017,
    "price": 2517510,
    "mileage": 17573,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Red",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Quality Ford C-Max perfect for daily commuting and family use.",
    "features": [
      "Heated Seats",
      "Alloy Wheels",
      "Multiple Airbags"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 433,
    "make": "Nissan",
    "model": "Note",
    "year": 2022,
    "price": 2859611,
    "mileage": 135848,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Quality Nissan Note perfect for daily commuting and family use.",
    "features": [
      "4WD/AWD",
      "Multiple Airbags",
      "Hill Start Assist",
      "Apple CarPlay"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 434,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2024,
    "price": 4379622,
    "mileage": 128895,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Robust Honda Ridgeline built for durability and long-term reliability.",
    "features": [
      "Brake Assist",
      "Parking Sensors",
      "Traction Control",
      "Keyless Entry",
      "Ventilated Seats"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 435,
    "make": "Kia",
    "model": "Forte",
    "year": 2016,
    "price": 3087309,
    "mileage": 136411,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Stylish Kia Forte perfect for urban driving and weekend trips.",
    "features": [
      "Bluetooth",
      "Alloy Wheels"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 436,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2018,
    "price": 4297778,
    "mileage": 78212,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Comfortable Mitsubishi Carisma offering smooth ride and premium feel.",
    "features": [
      "Alloy Wheels",
      "4WD/AWD",
      "Traction Control",
      "Brake Assist",
      "Eco Mode"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 437,
    "make": "BMW",
    "model": "M3",
    "year": 2021,
    "price": 1494199,
    "mileage": 68289,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Robust BMW M3 built for durability and long-term reliability.",
    "features": [
      "Tow Hitch",
      "Fog Lights",
      "Push Start"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 438,
    "make": "Mercedes",
    "model": "CLS",
    "year": 2021,
    "price": 4284644,
    "mileage": 59184,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Quality Mercedes CLS perfect for daily commuting and family use.",
    "features": [
      "Sport Mode",
      "LED Headlights",
      "Navigation",
      "Stability Control",
      "Hill Start Assist",
      "Traction Control"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 439,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2021,
    "price": 1055038,
    "mileage": 10852,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Robust Mitsubishi Carisma built for durability and long-term reliability.",
    "features": [
      "Eco Mode",
      "Leather Seats",
      "Multiple Airbags",
      "Keyless Entry",
      "4WD/AWD"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 440,
    "make": "Volkswagen",
    "model": "Scirocco",
    "year": 2017,
    "price": 4395659,
    "mileage": 15991,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Stylish Volkswagen Scirocco perfect for urban driving and weekend trips.",
    "features": [
      "Brake Assist",
      "Air Conditioning",
      "Leather Seats",
      "Dual Zone AC"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 441,
    "make": "Mercedes",
    "model": "CLA",
    "year": 2021,
    "price": 3743356,
    "mileage": 134992,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Efficient Mercedes CLA with excellent handling and performance.",
    "features": [
      "Power Mirrors",
      "Cruise Control",
      "Backup Camera",
      "Push Start"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 442,
    "make": "Subaru",
    "model": "BRZ",
    "year": 2018,
    "price": 3687357,
    "mileage": 141949,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Efficient Subaru BRZ with excellent handling and performance.",
    "features": [
      "LED Headlights",
      "Traction Control",
      "Leather Seats",
      "Sport Mode"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 443,
    "make": "Ford",
    "model": "Edge",
    "year": 2023,
    "price": 3228380,
    "mileage": 68119,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Spacious Ford Edge ideal for family trips and business use.",
    "features": [
      "Hill Start Assist",
      "Heated Seats",
      "Stability Control",
      "Apple CarPlay"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 444,
    "make": "Nissan",
    "model": "Note",
    "year": 2017,
    "price": 4301834,
    "mileage": 70114,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Quality Nissan Note perfect for daily commuting and family use.",
    "features": [
      "EBD",
      "LED Headlights",
      "Parking Sensors",
      "Traction Control",
      "Air Conditioning"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 445,
    "make": "Kia",
    "model": "EV6",
    "year": 2021,
    "price": 3971159,
    "mileage": 128772,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Quality Kia EV6 perfect for daily commuting and family use.",
    "features": [
      "Stability Control",
      "Android Auto",
      "Premium Sound",
      "Tinted Windows",
      "Bluetooth"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 446,
    "make": "Nissan",
    "model": "Murano",
    "year": 2022,
    "price": 2154198,
    "mileage": 151576,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Comfortable Nissan Murano offering smooth ride and premium feel.",
    "features": [
      "Bluetooth",
      "Heated Seats"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 447,
    "make": "Nissan",
    "model": "Leaf",
    "year": 2021,
    "price": 2367379,
    "mileage": 80080,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Stylish Nissan Leaf perfect for urban driving and weekend trips.",
    "features": [
      "Premium Sound",
      "ABS",
      "Sport Mode",
      "Cruise Control"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 448,
    "make": "Mazda",
    "model": "CX-9",
    "year": 2020,
    "price": 1539105,
    "mileage": 122717,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Well-maintained Mazda CX-9 with excellent performance and reliability.",
    "features": [
      "Sport Mode",
      "Wireless Charging"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 449,
    "make": "Ford",
    "model": "Mustang",
    "year": 2016,
    "price": 4112085,
    "mileage": 117063,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Efficient Ford Mustang with excellent handling and performance.",
    "features": [
      "Power Windows",
      "Power Mirrors",
      "4WD/AWD",
      "Cruise Control",
      "Push Start"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 450,
    "make": "Mercedes",
    "model": "CLA",
    "year": 2020,
    "price": 3784977,
    "mileage": 102317,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Stylish Mercedes CLA perfect for urban driving and weekend trips.",
    "features": [
      "Hill Start Assist",
      "Dual Zone AC"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 451,
    "make": "Peugeot",
    "model": "Boxer",
    "year": 2024,
    "price": 3268602,
    "mileage": 71486,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Efficient Peugeot Boxer with excellent handling and performance.",
    "features": [
      "Stability Control",
      "Parking Sensors",
      "Dual Zone AC"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 452,
    "make": "Nissan",
    "model": "Altima",
    "year": 2020,
    "price": 1976715,
    "mileage": 114305,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Spacious Nissan Altima ideal for family trips and business use.",
    "features": [
      "Ventilated Seats",
      "Alloy Wheels",
      "Leather Seats",
      "Premium Sound",
      "ABS"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 453,
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2020,
    "price": 1578975,
    "mileage": 102389,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Efficient Suzuki Wagon R with excellent handling and performance.",
    "features": [
      "Power Mirrors",
      "Tinted Windows",
      "Hill Start Assist",
      "Brake Assist",
      "Backup Camera"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 454,
    "make": "Mazda",
    "model": "Protege",
    "year": 2024,
    "price": 1854702,
    "mileage": 118818,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Quality Mazda Protege perfect for daily commuting and family use.",
    "features": [
      "LED Headlights",
      "Sunroof",
      "Bluetooth"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 455,
    "make": "Subaru",
    "model": "Leone",
    "year": 2021,
    "price": 4296066,
    "mileage": 13894,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Quality Subaru Leone perfect for daily commuting and family use.",
    "features": [
      "EBD",
      "Power Windows"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 456,
    "make": "Ford",
    "model": "Transit",
    "year": 2018,
    "price": 1829966,
    "mileage": 18078,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Stylish Ford Transit perfect for urban driving and weekend trips.",
    "features": [
      "Power Windows",
      "LED Headlights",
      "Fog Lights",
      "Tow Hitch"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 457,
    "make": "Peugeot",
    "model": "Expert",
    "year": 2020,
    "price": 3021002,
    "mileage": 19053,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Premium Peugeot Expert with luxury features and superior comfort.",
    "features": [
      "Bluetooth",
      "Traction Control",
      "Multiple Airbags",
      "Fog Lights",
      "Dual Zone AC"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 458,
    "make": "Toyota",
    "model": "C-HR",
    "year": 2015,
    "price": 4402776,
    "mileage": 44936,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Well-maintained Toyota C-HR with excellent performance and reliability.",
    "features": [
      "Bluetooth",
      "Leather Seats",
      "Navigation",
      "Backup Camera"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 459,
    "make": "BMW",
    "model": "M3",
    "year": 2022,
    "price": 3384984,
    "mileage": 8474,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Stylish BMW M3 perfect for urban driving and weekend trips.",
    "features": [
      "LED Headlights",
      "Apple CarPlay",
      "Alloy Wheels"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 460,
    "make": "Kia",
    "model": "Niro",
    "year": 2016,
    "price": 2245423,
    "mileage": 48639,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Quality Kia Niro perfect for daily commuting and family use.",
    "features": [
      "Dual Zone AC",
      "Backup Camera",
      "Sunroof",
      "Tow Hitch"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 461,
    "make": "Honda",
    "model": "Insight",
    "year": 2020,
    "price": 1179979,
    "mileage": 35063,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Spacious Honda Insight ideal for family trips and business use.",
    "features": [
      "Apple CarPlay",
      "Wireless Charging",
      "Stability Control"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 462,
    "make": "Toyota",
    "model": "Hilux",
    "year": 2017,
    "price": 3161792,
    "mileage": 26936,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Stylish Toyota Hilux perfect for urban driving and weekend trips.",
    "features": [
      "Eco Mode",
      "Traction Control",
      "Bluetooth",
      "Leather Seats",
      "Sunroof"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 463,
    "make": "Mazda",
    "model": "Bongo",
    "year": 2019,
    "price": 3986717,
    "mileage": 50570,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Efficient Mazda Bongo with excellent handling and performance.",
    "features": [
      "Traction Control",
      "Android Auto",
      "Bluetooth",
      "Premium Sound",
      "Multiple Airbags"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 464,
    "make": "Toyota",
    "model": "Yaris",
    "year": 2018,
    "price": 1040151,
    "mileage": 142611,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Efficient Toyota Yaris with excellent handling and performance.",
    "features": [
      "Sunroof",
      "Keyless Entry",
      "Sport Mode"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 465,
    "make": "Subaru",
    "model": "Domingo",
    "year": 2017,
    "price": 4367451,
    "mileage": 154059,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Well-maintained Subaru Domingo with excellent performance and reliability.",
    "features": [
      "Keyless Entry",
      "Stability Control",
      "Sunroof",
      "Wireless Charging"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 466,
    "make": "Subaru",
    "model": "Tribeca",
    "year": 2020,
    "price": 3230349,
    "mileage": 152030,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Spacious Subaru Tribeca ideal for family trips and business use.",
    "features": [
      "Android Auto",
      "Tow Hitch",
      "Ventilated Seats"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 467,
    "make": "Subaru",
    "model": "Domingo",
    "year": 2016,
    "price": 3529115,
    "mileage": 67102,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Comfortable Subaru Domingo offering smooth ride and premium feel.",
    "features": [
      "Power Windows",
      "Traction Control",
      "Parking Sensors"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 468,
    "make": "Ford",
    "model": "S-Max",
    "year": 2019,
    "price": 1511461,
    "mileage": 9194,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Reliable Ford S-Max with great fuel efficiency and low maintenance.",
    "features": [
      "Hill Start Assist",
      "Cruise Control",
      "Stability Control",
      "Multiple Airbags"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 469,
    "make": "Renault",
    "model": "Twingo",
    "year": 2021,
    "price": 1249282,
    "mileage": 86793,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Quality Renault Twingo perfect for daily commuting and family use.",
    "features": [
      "Air Conditioning",
      "Android Auto",
      "Keyless Entry",
      "Heated Seats",
      "Power Mirrors",
      "Sunroof"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 470,
    "make": "Ford",
    "model": "F-150",
    "year": 2019,
    "price": 4629120,
    "mileage": 21607,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Robust Ford F-150 built for durability and long-term reliability.",
    "features": [
      "Hill Start Assist",
      "Multiple Airbags",
      "Parking Sensors",
      "Tinted Windows",
      "Power Windows"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 471,
    "make": "Subaru",
    "model": "Forester",
    "year": 2021,
    "price": 2935263,
    "mileage": 101856,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Robust Subaru Forester built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "Multiple Airbags",
      "Backup Camera",
      "Heated Seats",
      "Tow Hitch"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 472,
    "make": "Mercedes",
    "model": "AMG GT",
    "year": 2019,
    "price": 2871011,
    "mileage": 39673,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Reliable Mercedes AMG GT with great fuel efficiency and low maintenance.",
    "features": [
      "Push Start",
      "4WD/AWD",
      "Wireless Charging"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 473,
    "make": "Subaru",
    "model": "Leone",
    "year": 2015,
    "price": 3231222,
    "mileage": 86084,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Well-maintained Subaru Leone with excellent performance and reliability.",
    "features": [
      "Dual Zone AC",
      "Fog Lights",
      "Sunroof",
      "Cruise Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 474,
    "make": "Ford",
    "model": "Focus",
    "year": 2016,
    "price": 1098632,
    "mileage": 24132,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Premium Ford Focus with luxury features and superior comfort.",
    "features": [
      "Navigation",
      "Wireless Charging",
      "Power Mirrors",
      "Stability Control",
      "Backup Camera",
      "Tinted Windows"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 475,
    "make": "Suzuki",
    "model": "Across",
    "year": 2015,
    "price": 3157324,
    "mileage": 19157,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Spacious Suzuki Across ideal for family trips and business use.",
    "features": [
      "Wireless Charging",
      "Traction Control"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 476,
    "make": "BMW",
    "model": "M3",
    "year": 2024,
    "price": 3498700,
    "mileage": 36060,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Efficient BMW M3 with excellent handling and performance.",
    "features": [
      "Leather Seats",
      "Backup Camera",
      "4WD/AWD",
      "Premium Sound"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 477,
    "make": "Peugeot",
    "model": "2008",
    "year": 2024,
    "price": 4296242,
    "mileage": 39095,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Stylish Peugeot 2008 perfect for urban driving and weekend trips.",
    "features": [
      "Tinted Windows",
      "Air Conditioning",
      "Power Mirrors",
      "Ventilated Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 478,
    "make": "Hyundai",
    "model": "Genesis",
    "year": 2022,
    "price": 3850779,
    "mileage": 30087,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Green",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Spacious Hyundai Genesis ideal for family trips and business use.",
    "features": [
      "Tow Hitch",
      "Ventilated Seats",
      "Keyless Entry",
      "Sport Mode",
      "Wireless Charging"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 479,
    "make": "Kia",
    "model": "Forte",
    "year": 2023,
    "price": 1640316,
    "mileage": 13006,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "White",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Comfortable Kia Forte offering smooth ride and premium feel.",
    "features": [
      "Premium Sound",
      "Backup Camera",
      "Android Auto",
      "Tinted Windows"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 480,
    "make": "Toyota",
    "model": "Avensis",
    "year": 2019,
    "price": 1197580,
    "mileage": 93330,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Efficient Toyota Avensis with excellent handling and performance.",
    "features": [
      "Dual Zone AC",
      "Brake Assist",
      "Ventilated Seats",
      "Multiple Airbags"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 481,
    "make": "BMW",
    "model": "X4",
    "year": 2015,
    "price": 2617799,
    "mileage": 104064,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Well-maintained BMW X4 with excellent performance and reliability.",
    "features": [
      "Eco Mode",
      "Air Conditioning"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 482,
    "make": "Mercedes",
    "model": "S-Class",
    "year": 2024,
    "price": 2734506,
    "mileage": 33824,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Well-maintained Mercedes S-Class with excellent performance and reliability.",
    "features": [
      "Wireless Charging",
      "Alloy Wheels",
      "Leather Seats",
      "Push Start"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 483,
    "make": "Peugeot",
    "model": "3008",
    "year": 2023,
    "price": 4323372,
    "mileage": 31747,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Spacious Peugeot 3008 ideal for family trips and business use.",
    "features": [
      "4WD/AWD",
      "Sport Mode",
      "Stability Control",
      "Cruise Control",
      "Heated Seats",
      "Power Windows"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 484,
    "make": "Toyota",
    "model": "Rav4",
    "year": 2019,
    "price": 4736802,
    "mileage": 32902,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Comfortable Toyota Rav4 offering smooth ride and premium feel.",
    "features": [
      "Heated Seats",
      "Hill Start Assist",
      "EBD",
      "Power Windows",
      "Leather Seats",
      "4WD/AWD"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 485,
    "make": "Kia",
    "model": "EV6",
    "year": 2017,
    "price": 3567812,
    "mileage": 147572,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Stylish Kia EV6 perfect for urban driving and weekend trips.",
    "features": [
      "Bluetooth",
      "Parking Sensors",
      "Premium Sound",
      "Alloy Wheels",
      "Heated Seats",
      "Apple CarPlay"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 486,
    "make": "Renault",
    "model": "Fluence",
    "year": 2015,
    "price": 1801083,
    "mileage": 134197,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Reliable Renault Fluence with great fuel efficiency and low maintenance.",
    "features": [
      "Push Start",
      "Cruise Control",
      "Ventilated Seats",
      "Hill Start Assist",
      "Stability Control",
      "Dual Zone AC"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 487,
    "make": "Honda",
    "model": "Element",
    "year": 2020,
    "price": 3276767,
    "mileage": 109552,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Stylish Honda Element perfect for urban driving and weekend trips.",
    "features": [
      "Premium Sound",
      "Power Windows"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 488,
    "make": "Volkswagen",
    "model": "Atlas",
    "year": 2024,
    "price": 1705897,
    "mileage": 42725,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Premium Volkswagen Atlas with luxury features and superior comfort.",
    "features": [
      "Multiple Airbags",
      "Backup Camera",
      "Tinted Windows",
      "Power Mirrors",
      "Cruise Control"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 489,
    "make": "Hyundai",
    "model": "i30",
    "year": 2020,
    "price": 3987676,
    "mileage": 19926,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Modern Hyundai i30 with advanced technology and safety features.",
    "features": [
      "Fog Lights",
      "Premium Sound",
      "Sport Mode",
      "Apple CarPlay"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 490,
    "make": "Mazda",
    "model": "Bongo",
    "year": 2022,
    "price": 1368709,
    "mileage": 35775,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Black",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Modern Mazda Bongo with advanced technology and safety features.",
    "features": [
      "Ventilated Seats",
      "Traction Control",
      "Heated Seats",
      "Tinted Windows",
      "Push Start"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 491,
    "make": "Nissan",
    "model": "Murano",
    "year": 2024,
    "price": 1131721,
    "mileage": 125995,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Well-maintained Nissan Murano with excellent performance and reliability.",
    "features": [
      "Wireless Charging",
      "Tinted Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 492,
    "make": "Hyundai",
    "model": "i30",
    "year": 2024,
    "price": 2734271,
    "mileage": 13263,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Spacious Hyundai i30 ideal for family trips and business use.",
    "features": [
      "Multiple Airbags",
      "Brake Assist",
      "Stability Control",
      "Keyless Entry"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 493,
    "make": "Mazda",
    "model": "6",
    "year": 2015,
    "price": 4540073,
    "mileage": 65988,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "White",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Quality Mazda 6 perfect for daily commuting and family use.",
    "features": [
      "Fog Lights",
      "Dual Zone AC",
      "Cruise Control"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 494,
    "make": "Peugeot",
    "model": "iOn",
    "year": 2016,
    "price": 2516762,
    "mileage": 75905,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Quality Peugeot iOn perfect for daily commuting and family use.",
    "features": [
      "Push Start",
      "Cruise Control"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 495,
    "make": "Honda",
    "model": "Fit",
    "year": 2018,
    "price": 4100589,
    "mileage": 78225,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Quality Honda Fit perfect for daily commuting and family use.",
    "features": [
      "Sunroof",
      "Dual Zone AC",
      "Navigation",
      "Roof Rails",
      "ABS",
      "Stability Control"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 496,
    "make": "Mitsubishi",
    "model": "Lancer",
    "year": 2021,
    "price": 2452477,
    "mileage": 140601,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Premium Mitsubishi Lancer with luxury features and superior comfort.",
    "features": [
      "Parking Sensors",
      "4WD/AWD",
      "Multiple Airbags",
      "Air Conditioning",
      "Sunroof"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 497,
    "make": "Toyota",
    "model": "Tundra",
    "year": 2022,
    "price": 4574850,
    "mileage": 129725,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Efficient Toyota Tundra with excellent handling and performance.",
    "features": [
      "Backup Camera",
      "Bluetooth",
      "Multiple Airbags",
      "Dual Zone AC",
      "Stability Control"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 498,
    "make": "Subaru",
    "model": "Leone",
    "year": 2023,
    "price": 4098653,
    "mileage": 11919,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Well-maintained Subaru Leone with excellent performance and reliability.",
    "features": [
      "Traction Control",
      "Keyless Entry",
      "Navigation"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 499,
    "make": "Mercedes",
    "model": "Sprinter",
    "year": 2019,
    "price": 3694952,
    "mileage": 104782,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Comfortable Mercedes Sprinter offering smooth ride and premium feel.",
    "features": [
      "Brake Assist",
      "Stability Control",
      "Sunroof"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 500,
    "make": "Toyota",
    "model": "Tundra",
    "year": 2021,
    "price": 4182016,
    "mileage": 148756,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Modern Toyota Tundra with advanced technology and safety features.",
    "features": [
      "Keyless Entry",
      "Push Start"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 501,
    "make": "Kia",
    "model": "Sorento",
    "year": 2021,
    "price": 2311119,
    "mileage": 56160,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Spacious Kia Sorento ideal for family trips and business use.",
    "features": [
      "Apple CarPlay",
      "Air Conditioning",
      "Parking Sensors"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 502,
    "make": "Hyundai",
    "model": "Kona",
    "year": 2022,
    "price": 3488638,
    "mileage": 46231,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Quality Hyundai Kona perfect for daily commuting and family use.",
    "features": [
      "Sunroof",
      "Brake Assist",
      "Tow Hitch",
      "Hill Start Assist",
      "Eco Mode"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 503,
    "make": "Toyota",
    "model": "C-HR",
    "year": 2023,
    "price": 3188675,
    "mileage": 78295,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Well-maintained Toyota C-HR with excellent performance and reliability.",
    "features": [
      "Sport Mode",
      "Bluetooth",
      "Android Auto"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 504,
    "make": "Ford",
    "model": "Galaxy",
    "year": 2022,
    "price": 1424456,
    "mileage": 104508,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Well-maintained Ford Galaxy with excellent performance and reliability.",
    "features": [
      "Hill Start Assist",
      "Roof Rails"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 505,
    "make": "Peugeot",
    "model": "108",
    "year": 2015,
    "price": 4147482,
    "mileage": 69399,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Reliable Peugeot 108 with great fuel efficiency and low maintenance.",
    "features": [
      "Ventilated Seats",
      "LED Headlights"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 506,
    "make": "Subaru",
    "model": "Baja",
    "year": 2020,
    "price": 1522477,
    "mileage": 80270,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Modern Subaru Baja with advanced technology and safety features.",
    "features": [
      "Heated Seats",
      "Bluetooth",
      "Push Start"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 507,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2015,
    "price": 2950741,
    "mileage": 101931,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Robust Ford Fiesta built for durability and long-term reliability.",
    "features": [
      "Tinted Windows",
      "Keyless Entry",
      "Premium Sound",
      "Eco Mode",
      "4WD/AWD"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 508,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2015,
    "price": 4331226,
    "mileage": 122616,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Stylish Mitsubishi Pajero perfect for urban driving and weekend trips.",
    "features": [
      "Power Windows",
      "Dual Zone AC",
      "Roof Rails",
      "Multiple Airbags",
      "Android Auto"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 509,
    "make": "Hyundai",
    "model": "Kona",
    "year": 2021,
    "price": 2432658,
    "mileage": 107466,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Quality Hyundai Kona perfect for daily commuting and family use.",
    "features": [
      "Stability Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 510,
    "make": "Peugeot",
    "model": "iOn",
    "year": 2023,
    "price": 1007625,
    "mileage": 74867,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Spacious Peugeot iOn ideal for family trips and business use.",
    "features": [
      "Navigation",
      "Brake Assist",
      "4WD/AWD",
      "Wireless Charging",
      "Apple CarPlay"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 511,
    "make": "Honda",
    "model": "Odyssey",
    "year": 2018,
    "price": 3835918,
    "mileage": 92996,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Premium Honda Odyssey with luxury features and superior comfort.",
    "features": [
      "Stability Control",
      "Air Conditioning",
      "Premium Sound",
      "Android Auto"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 512,
    "make": "Peugeot",
    "model": "Partner",
    "year": 2015,
    "price": 4573372,
    "mileage": 153405,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Stylish Peugeot Partner perfect for urban driving and weekend trips.",
    "features": [
      "Hill Start Assist",
      "LED Headlights",
      "Fog Lights",
      "Keyless Entry"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 513,
    "make": "Honda",
    "model": "CR-V",
    "year": 2015,
    "price": 2951994,
    "mileage": 11308,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Quality Honda CR-V perfect for daily commuting and family use.",
    "features": [
      "Hill Start Assist",
      "Fog Lights",
      "Push Start"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 514,
    "make": "Mazda",
    "model": "Bongo",
    "year": 2015,
    "price": 2672105,
    "mileage": 53481,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Premium Mazda Bongo with luxury features and superior comfort.",
    "features": [
      "Alloy Wheels",
      "4WD/AWD",
      "Power Windows"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 515,
    "make": "Kia",
    "model": "Sorento",
    "year": 2015,
    "price": 929681,
    "mileage": 93523,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Stylish Kia Sorento perfect for urban driving and weekend trips.",
    "features": [
      "Stability Control",
      "LED Headlights",
      "Navigation",
      "Ventilated Seats",
      "Premium Sound"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 516,
    "make": "Suzuki",
    "model": "Jimny",
    "year": 2023,
    "price": 4268798,
    "mileage": 117063,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Premium Suzuki Jimny with luxury features and superior comfort.",
    "features": [
      "Alloy Wheels",
      "Heated Seats",
      "Sport Mode",
      "Roof Rails",
      "Apple CarPlay"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 517,
    "make": "Nissan",
    "model": "Titan",
    "year": 2020,
    "price": 2984123,
    "mileage": 106118,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Reliable Nissan Titan with great fuel efficiency and low maintenance.",
    "features": [
      "Tinted Windows",
      "Eco Mode",
      "LED Headlights",
      "Navigation"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 518,
    "make": "Subaru",
    "model": "Forester",
    "year": 2016,
    "price": 3697149,
    "mileage": 49158,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Modern Subaru Forester with advanced technology and safety features.",
    "features": [
      "Power Mirrors",
      "Premium Sound"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 519,
    "make": "Renault",
    "model": "Trafic",
    "year": 2020,
    "price": 3465001,
    "mileage": 50251,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Comfortable Renault Trafic offering smooth ride and premium feel.",
    "features": [
      "Traction Control",
      "Keyless Entry",
      "Alloy Wheels",
      "Brake Assist",
      "Sunroof"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 520,
    "make": "Honda",
    "model": "HR-V",
    "year": 2023,
    "price": 2905680,
    "mileage": 128391,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Premium Honda HR-V with luxury features and superior comfort.",
    "features": [
      "EBD",
      "Multiple Airbags",
      "Sunroof"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 521,
    "make": "Volkswagen",
    "model": "Scirocco",
    "year": 2019,
    "price": 4569350,
    "mileage": 68210,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Quality Volkswagen Scirocco perfect for daily commuting and family use.",
    "features": [
      "Bluetooth",
      "Multiple Airbags"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 522,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2016,
    "price": 3658201,
    "mileage": 103930,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Spacious Volkswagen Polo ideal for family trips and business use.",
    "features": [
      "Keyless Entry",
      "Power Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 523,
    "make": "Ford",
    "model": "Edge",
    "year": 2015,
    "price": 1533580,
    "mileage": 109663,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Stylish Ford Edge perfect for urban driving and weekend trips.",
    "features": [
      "Brake Assist",
      "ABS",
      "Tinted Windows"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 524,
    "make": "Peugeot",
    "model": "308",
    "year": 2018,
    "price": 3477946,
    "mileage": 150902,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Well-maintained Peugeot 308 with excellent performance and reliability.",
    "features": [
      "Eco Mode",
      "Cruise Control",
      "Power Mirrors"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 525,
    "make": "Suzuki",
    "model": "Alto",
    "year": 2024,
    "price": 2330494,
    "mileage": 126428,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Well-maintained Suzuki Alto with excellent performance and reliability.",
    "features": [
      "Keyless Entry",
      "Push Start",
      "Leather Seats"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 526,
    "make": "BMW",
    "model": "5 Series",
    "year": 2024,
    "price": 1608332,
    "mileage": 99348,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Modern BMW 5 Series with advanced technology and safety features.",
    "features": [
      "EBD",
      "Fog Lights",
      "Cruise Control",
      "ABS"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 527,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2018,
    "price": 4682333,
    "mileage": 92268,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Reliable Honda Ridgeline with great fuel efficiency and low maintenance.",
    "features": [
      "Sport Mode",
      "Hill Start Assist",
      "Tow Hitch",
      "Leather Seats",
      "Brake Assist"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 528,
    "make": "Subaru",
    "model": "Leone",
    "year": 2015,
    "price": 2190861,
    "mileage": 85685,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Robust Subaru Leone built for durability and long-term reliability.",
    "features": [
      "Tow Hitch",
      "Cruise Control",
      "Dual Zone AC",
      "Tinted Windows",
      "Premium Sound",
      "Multiple Airbags"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 529,
    "make": "Peugeot",
    "model": "207",
    "year": 2024,
    "price": 2760365,
    "mileage": 141997,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Robust Peugeot 207 built for durability and long-term reliability.",
    "features": [
      "Wireless Charging",
      "Tow Hitch"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 530,
    "make": "Kia",
    "model": "Sportage",
    "year": 2015,
    "price": 4604193,
    "mileage": 56422,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Stylish Kia Sportage perfect for urban driving and weekend trips.",
    "features": [
      "Cruise Control",
      "Tinted Windows",
      "Ventilated Seats",
      "Hill Start Assist",
      "Sunroof",
      "Tow Hitch"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 531,
    "make": "Kia",
    "model": "Cerato",
    "year": 2019,
    "price": 3813879,
    "mileage": 94244,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Modern Kia Cerato with advanced technology and safety features.",
    "features": [
      "4WD/AWD",
      "Navigation",
      "Bluetooth",
      "Keyless Entry",
      "Premium Sound",
      "Backup Camera"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 532,
    "make": "Mazda",
    "model": "Demio",
    "year": 2022,
    "price": 1486629,
    "mileage": 99852,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Comfortable Mazda Demio offering smooth ride and premium feel.",
    "features": [
      "Tinted Windows",
      "LED Headlights",
      "Push Start",
      "Roof Rails"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 533,
    "make": "Mercedes",
    "model": "GLA",
    "year": 2020,
    "price": 4515983,
    "mileage": 91100,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Robust Mercedes GLA built for durability and long-term reliability.",
    "features": [
      "Hill Start Assist",
      "Apple CarPlay",
      "Bluetooth"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 534,
    "make": "Volkswagen",
    "model": "Passat",
    "year": 2016,
    "price": 3098690,
    "mileage": 33240,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Comfortable Volkswagen Passat offering smooth ride and premium feel.",
    "features": [
      "Backup Camera",
      "Brake Assist",
      "Ventilated Seats",
      "Fog Lights",
      "Power Windows",
      "Power Mirrors"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 535,
    "make": "Hyundai",
    "model": "i30",
    "year": 2024,
    "price": 4107882,
    "mileage": 57589,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Well-maintained Hyundai i30 with excellent performance and reliability.",
    "features": [
      "Leather Seats",
      "Power Mirrors"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 536,
    "make": "Mercedes",
    "model": "A-Class",
    "year": 2019,
    "price": 1247864,
    "mileage": 18792,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Premium Mercedes A-Class with luxury features and superior comfort.",
    "features": [
      "Wireless Charging",
      "Parking Sensors",
      "Traction Control",
      "Fog Lights",
      "Tinted Windows",
      "Air Conditioning"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 537,
    "make": "Mitsubishi",
    "model": "Outlander",
    "year": 2015,
    "price": 1980984,
    "mileage": 73340,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Stylish Mitsubishi Outlander perfect for urban driving and weekend trips.",
    "features": [
      "Traction Control",
      "Ventilated Seats"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 538,
    "make": "Nissan",
    "model": "X-Trail",
    "year": 2022,
    "price": 2243643,
    "mileage": 57575,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Efficient Nissan X-Trail with excellent handling and performance.",
    "features": [
      "Cruise Control",
      "Brake Assist",
      "Power Mirrors",
      "Wireless Charging",
      "Android Auto"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 539,
    "make": "Volkswagen",
    "model": "Golf",
    "year": 2020,
    "price": 2510210,
    "mileage": 34392,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Stylish Volkswagen Golf perfect for urban driving and weekend trips.",
    "features": [
      "Android Auto",
      "EBD"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 540,
    "make": "Mitsubishi",
    "model": "Lancer",
    "year": 2022,
    "price": 1258898,
    "mileage": 7712,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Efficient Mitsubishi Lancer with excellent handling and performance.",
    "features": [
      "Sport Mode",
      "Navigation",
      "Alloy Wheels",
      "Ventilated Seats",
      "Leather Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 541,
    "make": "Renault",
    "model": "Wind",
    "year": 2021,
    "price": 1180260,
    "mileage": 46773,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Robust Renault Wind built for durability and long-term reliability.",
    "features": [
      "Alloy Wheels",
      "Eco Mode",
      "LED Headlights"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 542,
    "make": "Mitsubishi",
    "model": "Mirage",
    "year": 2016,
    "price": 1850261,
    "mileage": 115074,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Reliable Mitsubishi Mirage with great fuel efficiency and low maintenance.",
    "features": [
      "Sunroof",
      "Backup Camera",
      "Android Auto",
      "Traction Control",
      "Wireless Charging",
      "Multiple Airbags"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 543,
    "make": "Nissan",
    "model": "Teana",
    "year": 2017,
    "price": 4502819,
    "mileage": 113955,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Premium Nissan Teana with luxury features and superior comfort.",
    "features": [
      "Tinted Windows",
      "Alloy Wheels",
      "Parking Sensors",
      "Multiple Airbags",
      "Stability Control",
      "Sunroof"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 544,
    "make": "Peugeot",
    "model": "207",
    "year": 2017,
    "price": 4453049,
    "mileage": 119248,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Stylish Peugeot 207 perfect for urban driving and weekend trips.",
    "features": [
      "Wireless Charging",
      "4WD/AWD",
      "EBD",
      "Sunroof",
      "Sport Mode"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 545,
    "make": "Mazda",
    "model": "Axela",
    "year": 2017,
    "price": 4103508,
    "mileage": 53385,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Well-maintained Mazda Axela with excellent performance and reliability.",
    "features": [
      "Sunroof",
      "4WD/AWD",
      "Wireless Charging",
      "EBD"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 546,
    "make": "Hyundai",
    "model": "Veloster",
    "year": 2019,
    "price": 3997337,
    "mileage": 20589,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Modern Hyundai Veloster with advanced technology and safety features.",
    "features": [
      "Multiple Airbags",
      "Heated Seats",
      "Ventilated Seats",
      "Backup Camera"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 547,
    "make": "Ford",
    "model": "Mondeo",
    "year": 2017,
    "price": 3145191,
    "mileage": 144929,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Well-maintained Ford Mondeo with excellent performance and reliability.",
    "features": [
      "Parking Sensors",
      "Keyless Entry",
      "Navigation",
      "Sport Mode",
      "Power Mirrors",
      "Ventilated Seats"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 548,
    "make": "Ford",
    "model": "Ranger",
    "year": 2022,
    "price": 2339844,
    "mileage": 33728,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Stylish Ford Ranger perfect for urban driving and weekend trips.",
    "features": [
      "Alloy Wheels",
      "Power Windows",
      "4WD/AWD"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 549,
    "make": "Peugeot",
    "model": "607",
    "year": 2019,
    "price": 1013782,
    "mileage": 124201,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Spacious Peugeot 607 ideal for family trips and business use.",
    "features": [
      "Tow Hitch",
      "Bluetooth",
      "Navigation"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 550,
    "make": "Subaru",
    "model": "SVX",
    "year": 2015,
    "price": 1317645,
    "mileage": 17542,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Reliable Subaru SVX with great fuel efficiency and low maintenance.",
    "features": [
      "Power Windows",
      "LED Headlights",
      "ABS",
      "Roof Rails"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 551,
    "make": "Hyundai",
    "model": "Santa Fe",
    "year": 2024,
    "price": 1012474,
    "mileage": 42503,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Stylish Hyundai Santa Fe perfect for urban driving and weekend trips.",
    "features": [
      "ABS",
      "Tow Hitch",
      "Traction Control",
      "EBD",
      "Bluetooth"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 552,
    "make": "Ford",
    "model": "F-150",
    "year": 2024,
    "price": 4318218,
    "mileage": 98775,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Well-maintained Ford F-150 with excellent performance and reliability.",
    "features": [
      "Fog Lights",
      "Wireless Charging",
      "Traction Control"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 553,
    "make": "Mazda",
    "model": "3",
    "year": 2017,
    "price": 2051801,
    "mileage": 68058,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Premium Mazda 3 with luxury features and superior comfort.",
    "features": [
      "Power Windows",
      "Apple CarPlay"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 554,
    "make": "Mitsubishi",
    "model": "Galant",
    "year": 2024,
    "price": 1068127,
    "mileage": 13745,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Modern Mitsubishi Galant with advanced technology and safety features.",
    "features": [
      "Ventilated Seats",
      "Traction Control",
      "Backup Camera",
      "Power Mirrors",
      "Brake Assist"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 555,
    "make": "Kia",
    "model": "Soul",
    "year": 2015,
    "price": 4196508,
    "mileage": 74242,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Efficient Kia Soul with excellent handling and performance.",
    "features": [
      "Bluetooth",
      "Power Windows"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 556,
    "make": "Mitsubishi",
    "model": "Space Star",
    "year": 2015,
    "price": 4566336,
    "mileage": 143891,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Modern Mitsubishi Space Star with advanced technology and safety features.",
    "features": [
      "ABS",
      "Bluetooth",
      "Fog Lights",
      "Power Mirrors",
      "Tinted Windows",
      "Air Conditioning"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 557,
    "make": "BMW",
    "model": "X3",
    "year": 2017,
    "price": 1639649,
    "mileage": 149789,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Premium BMW X3 with luxury features and superior comfort.",
    "features": [
      "Sport Mode",
      "Fog Lights",
      "Brake Assist",
      "Wireless Charging"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 558,
    "make": "BMW",
    "model": "i3",
    "year": 2022,
    "price": 4298364,
    "mileage": 11605,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Comfortable BMW i3 offering smooth ride and premium feel.",
    "features": [
      "Tinted Windows",
      "LED Headlights",
      "Eco Mode"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 559,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2022,
    "price": 1657894,
    "mileage": 33330,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Spacious Hyundai Sonata ideal for family trips and business use.",
    "features": [
      "Tow Hitch",
      "Push Start",
      "Android Auto",
      "Brake Assist",
      "Wireless Charging"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 560,
    "make": "Volkswagen",
    "model": "ID.4",
    "year": 2022,
    "price": 3238656,
    "mileage": 56012,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Premium Volkswagen ID.4 with luxury features and superior comfort.",
    "features": [
      "Parking Sensors",
      "Dual Zone AC",
      "Air Conditioning",
      "Power Windows"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 561,
    "make": "Honda",
    "model": "Civic",
    "year": 2023,
    "price": 2173670,
    "mileage": 93390,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Spacious Honda Civic ideal for family trips and business use.",
    "features": [
      "Apple CarPlay",
      "EBD",
      "Sunroof",
      "Brake Assist"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 562,
    "make": "Mazda",
    "model": "RX-8",
    "year": 2019,
    "price": 3326872,
    "mileage": 83819,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Reliable Mazda RX-8 with great fuel efficiency and low maintenance.",
    "features": [
      "Android Auto",
      "Leather Seats",
      "Heated Seats",
      "Dual Zone AC",
      "Multiple Airbags",
      "Premium Sound"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 563,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2022,
    "price": 3889201,
    "mileage": 130172,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Reliable Mitsubishi Pajero with great fuel efficiency and low maintenance.",
    "features": [
      "Backup Camera",
      "Navigation",
      "Multiple Airbags",
      "Dual Zone AC"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 564,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2017,
    "price": 4418282,
    "mileage": 81906,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Modern Volkswagen Polo with advanced technology and safety features.",
    "features": [
      "Roof Rails",
      "LED Headlights",
      "Bluetooth",
      "Power Windows"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 565,
    "make": "Renault",
    "model": "Fluence",
    "year": 2018,
    "price": 2340883,
    "mileage": 151089,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Well-maintained Renault Fluence with excellent performance and reliability.",
    "features": [
      "Apple CarPlay",
      "Fog Lights",
      "Tinted Windows",
      "Tow Hitch",
      "Push Start",
      "Keyless Entry"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 566,
    "make": "Mazda",
    "model": "Axela",
    "year": 2018,
    "price": 3212375,
    "mileage": 118780,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Comfortable Mazda Axela offering smooth ride and premium feel.",
    "features": [
      "Fog Lights",
      "Roof Rails",
      "Apple CarPlay",
      "Power Windows",
      "Power Mirrors",
      "Multiple Airbags"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 567,
    "make": "Peugeot",
    "model": "RCZ",
    "year": 2016,
    "price": 3503949,
    "mileage": 32136,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Well-maintained Peugeot RCZ with excellent performance and reliability.",
    "features": [
      "Sport Mode",
      "Premium Sound",
      "Power Mirrors",
      "Stability Control",
      "Heated Seats",
      "Android Auto"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 568,
    "make": "Mazda",
    "model": "MX-5",
    "year": 2020,
    "price": 1620592,
    "mileage": 89454,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Stylish Mazda MX-5 perfect for urban driving and weekend trips.",
    "features": [
      "Cruise Control",
      "Sport Mode"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 569,
    "make": "Suzuki",
    "model": "Kizashi",
    "year": 2016,
    "price": 2904162,
    "mileage": 15271,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Stylish Suzuki Kizashi perfect for urban driving and weekend trips.",
    "features": [
      "Heated Seats",
      "Hill Start Assist",
      "Cruise Control",
      "Parking Sensors"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 570,
    "make": "Ford",
    "model": "Mondeo",
    "year": 2019,
    "price": 886487,
    "mileage": 95590,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Comfortable Ford Mondeo offering smooth ride and premium feel.",
    "features": [
      "Fog Lights",
      "Navigation"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 571,
    "make": "Mazda",
    "model": "Demio",
    "year": 2019,
    "price": 3131207,
    "mileage": 133592,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Stylish Mazda Demio perfect for urban driving and weekend trips.",
    "features": [
      "Leather Seats",
      "Hill Start Assist",
      "Air Conditioning",
      "Backup Camera",
      "Cruise Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 572,
    "make": "Volkswagen",
    "model": "Jetta",
    "year": 2017,
    "price": 4246455,
    "mileage": 140614,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Efficient Volkswagen Jetta with excellent handling and performance.",
    "features": [
      "Parking Sensors",
      "ABS",
      "Fog Lights",
      "LED Headlights",
      "Tinted Windows"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 573,
    "make": "Kia",
    "model": "Niro",
    "year": 2016,
    "price": 2598055,
    "mileage": 18437,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Stylish Kia Niro perfect for urban driving and weekend trips.",
    "features": [
      "Backup Camera",
      "Sport Mode",
      "Apple CarPlay",
      "Sunroof",
      "Hill Start Assist",
      "Eco Mode"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 574,
    "make": "Toyota",
    "model": "Auris",
    "year": 2016,
    "price": 4378688,
    "mileage": 11875,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Spacious Toyota Auris ideal for family trips and business use.",
    "features": [
      "Sport Mode",
      "Eco Mode",
      "Fog Lights",
      "Dual Zone AC",
      "Power Windows"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 575,
    "make": "Peugeot",
    "model": "407",
    "year": 2019,
    "price": 2783793,
    "mileage": 89216,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Reliable Peugeot 407 with great fuel efficiency and low maintenance.",
    "features": [
      "EBD",
      "Eco Mode",
      "Heated Seats",
      "ABS",
      "LED Headlights",
      "Power Mirrors"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 576,
    "make": "Renault",
    "model": "Trafic",
    "year": 2016,
    "price": 4249216,
    "mileage": 93842,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Stylish Renault Trafic perfect for urban driving and weekend trips.",
    "features": [
      "Alloy Wheels",
      "Tinted Windows",
      "Parking Sensors",
      "Bluetooth",
      "Multiple Airbags"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 577,
    "make": "Subaru",
    "model": "Outback",
    "year": 2019,
    "price": 4611480,
    "mileage": 44381,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Modern Subaru Outback with advanced technology and safety features.",
    "features": [
      "Multiple Airbags",
      "Sport Mode",
      "Roof Rails",
      "Keyless Entry",
      "Cruise Control",
      "Push Start"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 578,
    "make": "Ford",
    "model": "Escape",
    "year": 2019,
    "price": 4537867,
    "mileage": 5243,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Spacious Ford Escape ideal for family trips and business use.",
    "features": [
      "Multiple Airbags",
      "Hill Start Assist"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 579,
    "make": "Mitsubishi",
    "model": "Delica",
    "year": 2023,
    "price": 3939029,
    "mileage": 85074,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Efficient Mitsubishi Delica with excellent handling and performance.",
    "features": [
      "Power Windows",
      "Leather Seats",
      "Keyless Entry",
      "Sunroof"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 580,
    "make": "BMW",
    "model": "Z3",
    "year": 2018,
    "price": 3293998,
    "mileage": 114403,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Premium BMW Z3 with luxury features and superior comfort.",
    "features": [
      "Traction Control",
      "Hill Start Assist"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 581,
    "make": "Hyundai",
    "model": "Staria",
    "year": 2020,
    "price": 3238326,
    "mileage": 77588,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Comfortable Hyundai Staria offering smooth ride and premium feel.",
    "features": [
      "ABS",
      "Roof Rails",
      "Hill Start Assist",
      "Sunroof",
      "Heated Seats"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 582,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2023,
    "price": 3805572,
    "mileage": 108072,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Well-maintained Mitsubishi Pajero with excellent performance and reliability.",
    "features": [
      "Hill Start Assist",
      "Tinted Windows",
      "EBD",
      "Brake Assist",
      "Multiple Airbags"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 583,
    "make": "Peugeot",
    "model": "407",
    "year": 2019,
    "price": 4459873,
    "mileage": 22800,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Well-maintained Peugeot 407 with excellent performance and reliability.",
    "features": [
      "Tinted Windows",
      "Power Windows",
      "Stability Control",
      "Dual Zone AC"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 584,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2019,
    "price": 2144595,
    "mileage": 34383,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Robust Ford Fiesta built for durability and long-term reliability.",
    "features": [
      "Sport Mode",
      "Dual Zone AC",
      "Android Auto",
      "Ventilated Seats",
      "Navigation"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 585,
    "make": "Nissan",
    "model": "Maxima",
    "year": 2017,
    "price": 1641878,
    "mileage": 67123,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Spacious Nissan Maxima ideal for family trips and business use.",
    "features": [
      "Fog Lights",
      "Traction Control",
      "Air Conditioning"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 586,
    "make": "Toyota",
    "model": "Premio",
    "year": 2022,
    "price": 1151559,
    "mileage": 143889,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Quality Toyota Premio perfect for daily commuting and family use.",
    "features": [
      "Alloy Wheels",
      "Roof Rails",
      "Android Auto",
      "Fog Lights"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 587,
    "make": "Ford",
    "model": "Mondeo",
    "year": 2020,
    "price": 841776,
    "mileage": 82645,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Quality Ford Mondeo perfect for daily commuting and family use.",
    "features": [
      "Air Conditioning",
      "Apple CarPlay",
      "Dual Zone AC",
      "Hill Start Assist",
      "ABS"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 588,
    "make": "Ford",
    "model": "S-Max",
    "year": 2022,
    "price": 4377254,
    "mileage": 118453,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Quality Ford S-Max perfect for daily commuting and family use.",
    "features": [
      "Power Mirrors",
      "Apple CarPlay",
      "Eco Mode",
      "Tow Hitch"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 589,
    "make": "Renault",
    "model": "Twingo",
    "year": 2021,
    "price": 2578118,
    "mileage": 18205,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Reliable Renault Twingo with great fuel efficiency and low maintenance.",
    "features": [
      "Tinted Windows",
      "Cruise Control",
      "Air Conditioning"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 590,
    "make": "Mazda",
    "model": "Demio",
    "year": 2017,
    "price": 1518867,
    "mileage": 25997,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Reliable Mazda Demio with great fuel efficiency and low maintenance.",
    "features": [
      "ABS",
      "Tow Hitch",
      "Alloy Wheels"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 591,
    "make": "Honda",
    "model": "Prelude",
    "year": 2016,
    "price": 2332913,
    "mileage": 35605,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Spacious Honda Prelude ideal for family trips and business use.",
    "features": [
      "ABS",
      "Stability Control",
      "Tinted Windows",
      "Fog Lights",
      "Sunroof"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 592,
    "make": "Suzuki",
    "model": "Swift",
    "year": 2016,
    "price": 3342037,
    "mileage": 120863,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Spacious Suzuki Swift ideal for family trips and business use.",
    "features": [
      "LED Headlights"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 593,
    "make": "Renault",
    "model": "Twingo",
    "year": 2016,
    "price": 977087,
    "mileage": 26841,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Reliable Renault Twingo with great fuel efficiency and low maintenance.",
    "features": [
      "Push Start",
      "4WD/AWD",
      "Sunroof"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 594,
    "make": "Volkswagen",
    "model": "Arteon",
    "year": 2018,
    "price": 3708986,
    "mileage": 143194,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Well-maintained Volkswagen Arteon with excellent performance and reliability.",
    "features": [
      "Apple CarPlay",
      "Hill Start Assist",
      "Heated Seats",
      "Android Auto"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 595,
    "make": "Mercedes",
    "model": "SLK",
    "year": 2021,
    "price": 4577941,
    "mileage": 121061,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Comfortable Mercedes SLK offering smooth ride and premium feel.",
    "features": [
      "Dual Zone AC",
      "EBD",
      "Backup Camera",
      "Power Windows",
      "Fog Lights"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 596,
    "make": "BMW",
    "model": "Z3",
    "year": 2023,
    "price": 3384129,
    "mileage": 137908,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Spacious BMW Z3 ideal for family trips and business use.",
    "features": [
      "Bluetooth",
      "Keyless Entry"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 597,
    "make": "Hyundai",
    "model": "Veloster",
    "year": 2021,
    "price": 3609455,
    "mileage": 74446,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Modern Hyundai Veloster with advanced technology and safety features.",
    "features": [
      "Android Auto",
      "Traction Control"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 598,
    "make": "Toyota",
    "model": "Premio",
    "year": 2017,
    "price": 3109523,
    "mileage": 142708,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Stylish Toyota Premio perfect for urban driving and weekend trips.",
    "features": [
      "Premium Sound",
      "Android Auto",
      "Eco Mode",
      "4WD/AWD",
      "Roof Rails",
      "ABS"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 599,
    "make": "Peugeot",
    "model": "Boxer",
    "year": 2018,
    "price": 3987173,
    "mileage": 41861,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Reliable Peugeot Boxer with great fuel efficiency and low maintenance.",
    "features": [
      "Multiple Airbags",
      "Sunroof"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 600,
    "make": "Ford",
    "model": "Edge",
    "year": 2024,
    "price": 1116186,
    "mileage": 89769,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Efficient Ford Edge with excellent handling and performance.",
    "features": [
      "Keyless Entry",
      "Parking Sensors",
      "Backup Camera",
      "Bluetooth",
      "Traction Control"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 601,
    "make": "Mercedes",
    "model": "E-Class",
    "year": 2020,
    "price": 4411622,
    "mileage": 112965,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Efficient Mercedes E-Class with excellent handling and performance.",
    "features": [
      "Apple CarPlay",
      "Power Mirrors",
      "Sunroof"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 602,
    "make": "Hyundai",
    "model": "i30",
    "year": 2019,
    "price": 4035831,
    "mileage": 25227,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Premium Hyundai i30 with luxury features and superior comfort.",
    "features": [
      "Alloy Wheels",
      "Stability Control",
      "Android Auto"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 603,
    "make": "BMW",
    "model": "X5",
    "year": 2021,
    "price": 1527456,
    "mileage": 29463,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Spacious BMW X5 ideal for family trips and business use.",
    "features": [
      "Roof Rails",
      "Bluetooth",
      "Tow Hitch",
      "Hill Start Assist"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 604,
    "make": "Toyota",
    "model": "Vitz",
    "year": 2017,
    "price": 1228444,
    "mileage": 87193,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Quality Toyota Vitz perfect for daily commuting and family use.",
    "features": [
      "Backup Camera",
      "Traction Control",
      "Heated Seats",
      "Tow Hitch",
      "ABS"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 605,
    "make": "Mitsubishi",
    "model": "Mirage",
    "year": 2015,
    "price": 3152623,
    "mileage": 76960,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Modern Mitsubishi Mirage with advanced technology and safety features.",
    "features": [
      "Brake Assist",
      "Air Conditioning",
      "Fog Lights"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 606,
    "make": "Honda",
    "model": "Fit",
    "year": 2021,
    "price": 2441892,
    "mileage": 11504,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Honda Fit perfect for urban driving and weekend trips.",
    "features": [
      "Navigation",
      "4WD/AWD",
      "Hill Start Assist",
      "Parking Sensors"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 607,
    "make": "Hyundai",
    "model": "Veloster",
    "year": 2022,
    "price": 2221294,
    "mileage": 56472,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Well-maintained Hyundai Veloster with excellent performance and reliability.",
    "features": [
      "Push Start",
      "Hill Start Assist",
      "Parking Sensors",
      "Fog Lights"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 608,
    "make": "Ford",
    "model": "Mondeo",
    "year": 2016,
    "price": 2716484,
    "mileage": 53183,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Efficient Ford Mondeo with excellent handling and performance.",
    "features": [
      "Air Conditioning",
      "Power Mirrors",
      "4WD/AWD",
      "Stability Control"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 609,
    "make": "Suzuki",
    "model": "Celerio",
    "year": 2017,
    "price": 4697874,
    "mileage": 75116,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Quality Suzuki Celerio perfect for daily commuting and family use.",
    "features": [
      "LED Headlights",
      "Stability Control"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 610,
    "make": "Mazda",
    "model": "BT-50",
    "year": 2020,
    "price": 3096322,
    "mileage": 93896,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Stylish Mazda BT-50 perfect for urban driving and weekend trips.",
    "features": [
      "Power Windows",
      "Navigation",
      "Air Conditioning",
      "Ventilated Seats",
      "Hill Start Assist"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 611,
    "make": "Subaru",
    "model": "Domingo",
    "year": 2022,
    "price": 4218163,
    "mileage": 69183,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Spacious Subaru Domingo ideal for family trips and business use.",
    "features": [
      "Heated Seats",
      "Sport Mode",
      "Keyless Entry",
      "Roof Rails",
      "Power Mirrors"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 612,
    "make": "Mazda",
    "model": "3",
    "year": 2016,
    "price": 1120234,
    "mileage": 135482,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Comfortable Mazda 3 offering smooth ride and premium feel.",
    "features": [
      "Leather Seats",
      "Backup Camera",
      "Fog Lights"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 613,
    "make": "Mitsubishi",
    "model": "ASX",
    "year": 2018,
    "price": 4743425,
    "mileage": 104792,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Spacious Mitsubishi ASX ideal for family trips and business use.",
    "features": [
      "Cruise Control",
      "Tow Hitch",
      "EBD",
      "Premium Sound",
      "Ventilated Seats",
      "Air Conditioning"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 614,
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "year": 2019,
    "price": 3466428,
    "mileage": 119902,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Modern Mitsubishi Eclipse Cross with advanced technology and safety features.",
    "features": [
      "Power Windows",
      "ABS",
      "Multiple Airbags",
      "Leather Seats",
      "Premium Sound"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 615,
    "make": "Renault",
    "model": "Trafic",
    "year": 2019,
    "price": 4720205,
    "mileage": 138420,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Well-maintained Renault Trafic with excellent performance and reliability.",
    "features": [
      "ABS",
      "Navigation"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 616,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2019,
    "price": 2299918,
    "mileage": 149503,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Robust Volkswagen Polo built for durability and long-term reliability.",
    "features": [
      "Backup Camera",
      "Wireless Charging",
      "Parking Sensors",
      "Push Start",
      "Premium Sound"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 617,
    "make": "Nissan",
    "model": "Leaf",
    "year": 2024,
    "price": 3679988,
    "mileage": 25937,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Efficient Nissan Leaf with excellent handling and performance.",
    "features": [
      "Heated Seats",
      "Parking Sensors",
      "Apple CarPlay"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 618,
    "make": "Ford",
    "model": "Transit",
    "year": 2024,
    "price": 1352066,
    "mileage": 39645,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Premium Ford Transit with luxury features and superior comfort.",
    "features": [
      "LED Headlights",
      "Parking Sensors"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 619,
    "make": "Nissan",
    "model": "Juke",
    "year": 2023,
    "price": 3953368,
    "mileage": 13034,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Nissan Juke perfect for urban driving and weekend trips.",
    "features": [
      "Power Mirrors",
      "Bluetooth",
      "Android Auto",
      "Keyless Entry"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 620,
    "make": "Mazda",
    "model": "RX-8",
    "year": 2021,
    "price": 940949,
    "mileage": 119276,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Stylish Mazda RX-8 perfect for urban driving and weekend trips.",
    "features": [
      "Alloy Wheels",
      "Push Start"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 621,
    "make": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 2454293,
    "mileage": 39955,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Modern Toyota Camry with advanced technology and safety features.",
    "features": [
      "Brake Assist",
      "EBD",
      "Sport Mode",
      "Keyless Entry",
      "Ventilated Seats"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 622,
    "make": "Honda",
    "model": "Odyssey",
    "year": 2015,
    "price": 1845502,
    "mileage": 31962,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Efficient Honda Odyssey with excellent handling and performance.",
    "features": [
      "Alloy Wheels",
      "Traction Control",
      "Eco Mode",
      "Bluetooth"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 623,
    "make": "Peugeot",
    "model": "607",
    "year": 2022,
    "price": 4247875,
    "mileage": 65433,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Stylish Peugeot 607 perfect for urban driving and weekend trips.",
    "features": [
      "Brake Assist",
      "LED Headlights",
      "Bluetooth",
      "Tinted Windows",
      "Premium Sound"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 624,
    "make": "Toyota",
    "model": "Highlander",
    "year": 2017,
    "price": 906213,
    "mileage": 95344,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Comfortable Toyota Highlander offering smooth ride and premium feel.",
    "features": [
      "Tow Hitch",
      "ABS",
      "LED Headlights",
      "Parking Sensors",
      "Cruise Control",
      "Tinted Windows"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 625,
    "make": "Nissan",
    "model": "Titan",
    "year": 2020,
    "price": 4739643,
    "mileage": 36861,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Robust Nissan Titan built for durability and long-term reliability.",
    "features": [
      "ABS",
      "Navigation"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 626,
    "make": "Mercedes",
    "model": "CLA",
    "year": 2023,
    "price": 3095525,
    "mileage": 41575,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Well-maintained Mercedes CLA with excellent performance and reliability.",
    "features": [
      "Traction Control",
      "Fog Lights",
      "Leather Seats",
      "Roof Rails",
      "Tow Hitch"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 627,
    "make": "BMW",
    "model": "1 Series",
    "year": 2024,
    "price": 4687134,
    "mileage": 46730,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Modern BMW 1 Series with advanced technology and safety features.",
    "features": [
      "Traction Control",
      "Stability Control"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 628,
    "make": "Peugeot",
    "model": "508",
    "year": 2021,
    "price": 2739655,
    "mileage": 118603,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Well-maintained Peugeot 508 with excellent performance and reliability.",
    "features": [
      "Eco Mode",
      "Push Start",
      "4WD/AWD"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 629,
    "make": "Honda",
    "model": "City",
    "year": 2022,
    "price": 1214568,
    "mileage": 124793,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Robust Honda City built for durability and long-term reliability.",
    "features": [
      "Power Mirrors",
      "Sport Mode"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 630,
    "make": "Nissan",
    "model": "X-Trail",
    "year": 2023,
    "price": 4208885,
    "mileage": 123719,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Spacious Nissan X-Trail ideal for family trips and business use.",
    "features": [
      "Power Mirrors",
      "Brake Assist",
      "Navigation",
      "Alloy Wheels"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 631,
    "make": "Suzuki",
    "model": "Swift",
    "year": 2024,
    "price": 3156614,
    "mileage": 59014,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Premium Suzuki Swift with luxury features and superior comfort.",
    "features": [
      "Cruise Control",
      "Multiple Airbags",
      "Navigation",
      "Tow Hitch",
      "Ventilated Seats"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 632,
    "make": "Nissan",
    "model": "Teana",
    "year": 2022,
    "price": 862889,
    "mileage": 26522,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Stylish Nissan Teana perfect for urban driving and weekend trips.",
    "features": [
      "Cruise Control",
      "Traction Control",
      "Leather Seats",
      "Parking Sensors"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 633,
    "make": "BMW",
    "model": "M3",
    "year": 2015,
    "price": 2735633,
    "mileage": 33545,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Well-maintained BMW M3 with excellent performance and reliability.",
    "features": [
      "Dual Zone AC",
      "Stability Control",
      "Power Windows",
      "Push Start",
      "Apple CarPlay",
      "Sport Mode"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 634,
    "make": "Renault",
    "model": "Fluence",
    "year": 2023,
    "price": 3375569,
    "mileage": 64081,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Efficient Renault Fluence with excellent handling and performance.",
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Dual Zone AC",
      "Brake Assist",
      "Fog Lights"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 635,
    "make": "Peugeot",
    "model": "207",
    "year": 2022,
    "price": 1500694,
    "mileage": 46433,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Robust Peugeot 207 built for durability and long-term reliability.",
    "features": [
      "LED Headlights",
      "Wireless Charging",
      "Multiple Airbags",
      "Roof Rails",
      "Traction Control",
      "4WD/AWD"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 636,
    "make": "Renault",
    "model": "Twingo",
    "year": 2021,
    "price": 1808450,
    "mileage": 84190,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Stylish Renault Twingo perfect for urban driving and weekend trips.",
    "features": [
      "Tow Hitch",
      "Multiple Airbags",
      "Air Conditioning",
      "Tinted Windows"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 637,
    "make": "Peugeot",
    "model": "RCZ",
    "year": 2018,
    "price": 1367227,
    "mileage": 74352,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Premium Peugeot RCZ with luxury features and superior comfort.",
    "features": [
      "Power Mirrors",
      "Power Windows",
      "Fog Lights",
      "Wireless Charging"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 638,
    "make": "Mitsubishi",
    "model": "Lancer",
    "year": 2018,
    "price": 4387652,
    "mileage": 128409,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Modern Mitsubishi Lancer with advanced technology and safety features.",
    "features": [
      "Bluetooth",
      "Heated Seats",
      "Traction Control",
      "Hill Start Assist"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 639,
    "make": "Renault",
    "model": "Trafic",
    "year": 2022,
    "price": 4516139,
    "mileage": 100186,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Modern Renault Trafic with advanced technology and safety features.",
    "features": [
      "Apple CarPlay",
      "Air Conditioning",
      "Wireless Charging",
      "Parking Sensors",
      "Sunroof",
      "Traction Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 640,
    "make": "Renault",
    "model": "Scenic",
    "year": 2018,
    "price": 4308665,
    "mileage": 112808,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Quality Renault Scenic perfect for daily commuting and family use.",
    "features": [
      "Bluetooth",
      "Wireless Charging",
      "Android Auto",
      "Traction Control",
      "Heated Seats"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 641,
    "make": "Kia",
    "model": "Ceed",
    "year": 2019,
    "price": 844894,
    "mileage": 124430,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Comfortable Kia Ceed offering smooth ride and premium feel.",
    "features": [
      "Heated Seats",
      "Android Auto",
      "Navigation",
      "Parking Sensors"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 642,
    "make": "Peugeot",
    "model": "iOn",
    "year": 2018,
    "price": 4221609,
    "mileage": 11084,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Black",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Quality Peugeot iOn perfect for daily commuting and family use.",
    "features": [
      "Alloy Wheels",
      "Wireless Charging",
      "Ventilated Seats",
      "LED Headlights",
      "Bluetooth",
      "Sport Mode"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 643,
    "make": "Mazda",
    "model": "Axela",
    "year": 2024,
    "price": 2419064,
    "mileage": 8144,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Modern Mazda Axela with advanced technology and safety features.",
    "features": [
      "Roof Rails",
      "Eco Mode",
      "ABS",
      "Sport Mode",
      "Brake Assist",
      "Dual Zone AC"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 644,
    "make": "Mercedes",
    "model": "E-Class",
    "year": 2019,
    "price": 4354751,
    "mileage": 146525,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Premium Mercedes E-Class with luxury features and superior comfort.",
    "features": [
      "Hill Start Assist",
      "Navigation",
      "Parking Sensors",
      "Backup Camera",
      "Tow Hitch",
      "Android Auto"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 645,
    "make": "Subaru",
    "model": "BRZ",
    "year": 2023,
    "price": 1770512,
    "mileage": 84664,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Robust Subaru BRZ built for durability and long-term reliability.",
    "features": [
      "Eco Mode",
      "Hill Start Assist",
      "Parking Sensors",
      "4WD/AWD",
      "Power Windows"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 646,
    "make": "Kia",
    "model": "Cerato",
    "year": 2019,
    "price": 2198388,
    "mileage": 83163,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Spacious Kia Cerato ideal for family trips and business use.",
    "features": [
      "Power Windows",
      "4WD/AWD"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 647,
    "make": "Kia",
    "model": "Ceed",
    "year": 2016,
    "price": 4357634,
    "mileage": 25921,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Modern Kia Ceed with advanced technology and safety features.",
    "features": [
      "Eco Mode",
      "Stability Control",
      "Power Mirrors",
      "Fog Lights",
      "Keyless Entry",
      "Push Start"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 648,
    "make": "Renault",
    "model": "Twingo",
    "year": 2015,
    "price": 3410148,
    "mileage": 141370,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Modern Renault Twingo with advanced technology and safety features.",
    "features": [
      "Brake Assist",
      "Push Start",
      "ABS"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 649,
    "make": "Suzuki",
    "model": "Kizashi",
    "year": 2022,
    "price": 1171553,
    "mileage": 55362,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Comfortable Suzuki Kizashi offering smooth ride and premium feel.",
    "features": [
      "LED Headlights",
      "Leather Seats"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 650,
    "make": "Kia",
    "model": "Rio",
    "year": 2022,
    "price": 4056065,
    "mileage": 95617,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Modern Kia Rio with advanced technology and safety features.",
    "features": [
      "Roof Rails",
      "Keyless Entry",
      "Push Start",
      "Wireless Charging",
      "LED Headlights"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 651,
    "make": "Mercedes",
    "model": "Sprinter",
    "year": 2023,
    "price": 4655976,
    "mileage": 13661,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Reliable Mercedes Sprinter with great fuel efficiency and low maintenance.",
    "features": [
      "Leather Seats",
      "Hill Start Assist",
      "Navigation",
      "Air Conditioning",
      "Traction Control"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 652,
    "make": "Hyundai",
    "model": "Staria",
    "year": 2020,
    "price": 3765822,
    "mileage": 57150,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Efficient Hyundai Staria with excellent handling and performance.",
    "features": [
      "Tow Hitch",
      "Air Conditioning"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 653,
    "make": "Mazda",
    "model": "Demio",
    "year": 2016,
    "price": 932727,
    "mileage": 119873,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Comfortable Mazda Demio offering smooth ride and premium feel.",
    "features": [
      "LED Headlights",
      "Tinted Windows",
      "Push Start"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 654,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2017,
    "price": 1474385,
    "mileage": 37903,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Comfortable Hyundai Sonata offering smooth ride and premium feel.",
    "features": [
      "Bluetooth",
      "Hill Start Assist"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 655,
    "make": "Toyota",
    "model": "Avensis",
    "year": 2021,
    "price": 3740186,
    "mileage": 101841,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Comfortable Toyota Avensis offering smooth ride and premium feel.",
    "features": [
      "Fog Lights",
      "Brake Assist"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 656,
    "make": "Kia",
    "model": "Telluride",
    "year": 2020,
    "price": 1832661,
    "mileage": 99686,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "White",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Stylish Kia Telluride perfect for urban driving and weekend trips.",
    "features": [
      "Heated Seats",
      "Backup Camera",
      "Power Mirrors"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 657,
    "make": "BMW",
    "model": "X3",
    "year": 2020,
    "price": 3596322,
    "mileage": 17180,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Quality BMW X3 perfect for daily commuting and family use.",
    "features": [
      "Brake Assist",
      "Android Auto",
      "Power Windows",
      "Traction Control",
      "Hill Start Assist",
      "Stability Control"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 658,
    "make": "Hyundai",
    "model": "Ioniq",
    "year": 2024,
    "price": 814359,
    "mileage": 43111,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Efficient Hyundai Ioniq with excellent handling and performance.",
    "features": [
      "Navigation",
      "Fog Lights"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 659,
    "make": "Honda",
    "model": "Insight",
    "year": 2015,
    "price": 1289628,
    "mileage": 25614,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Spacious Honda Insight ideal for family trips and business use.",
    "features": [
      "Wireless Charging",
      "Tow Hitch",
      "EBD",
      "Sport Mode",
      "Air Conditioning",
      "Sunroof"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 660,
    "make": "Nissan",
    "model": "Juke",
    "year": 2021,
    "price": 4526310,
    "mileage": 59507,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Efficient Nissan Juke with excellent handling and performance.",
    "features": [
      "Cruise Control",
      "ABS",
      "Navigation"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 661,
    "make": "Ford",
    "model": "Kuga",
    "year": 2020,
    "price": 2697273,
    "mileage": 84234,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Robust Ford Kuga built for durability and long-term reliability.",
    "features": [
      "Parking Sensors",
      "Backup Camera",
      "Sport Mode",
      "Dual Zone AC",
      "Wireless Charging",
      "EBD"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 662,
    "make": "Peugeot",
    "model": "3008",
    "year": 2015,
    "price": 1584383,
    "mileage": 150993,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Premium Peugeot 3008 with luxury features and superior comfort.",
    "features": [
      "ABS",
      "Parking Sensors",
      "Premium Sound",
      "Bluetooth"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 663,
    "make": "Suzuki",
    "model": "Swift",
    "year": 2020,
    "price": 2651480,
    "mileage": 24517,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Efficient Suzuki Swift with excellent handling and performance.",
    "features": [
      "Keyless Entry",
      "Ventilated Seats",
      "Premium Sound",
      "Parking Sensors"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 664,
    "make": "Subaru",
    "model": "WRX",
    "year": 2022,
    "price": 2119083,
    "mileage": 39742,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Quality Subaru WRX perfect for daily commuting and family use.",
    "features": [
      "LED Headlights",
      "Stability Control",
      "Leather Seats"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 665,
    "make": "Honda",
    "model": "Odyssey",
    "year": 2017,
    "price": 1461566,
    "mileage": 6574,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Premium Honda Odyssey with luxury features and superior comfort.",
    "features": [
      "Power Windows",
      "Power Mirrors"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 666,
    "make": "Subaru",
    "model": "Baja",
    "year": 2019,
    "price": 3763089,
    "mileage": 114334,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Modern Subaru Baja with advanced technology and safety features.",
    "features": [
      "Heated Seats",
      "Premium Sound",
      "EBD",
      "ABS",
      "Navigation"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 667,
    "make": "BMW",
    "model": "1 Series",
    "year": 2019,
    "price": 3608729,
    "mileage": 21422,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Stylish BMW 1 Series perfect for urban driving and weekend trips.",
    "features": [
      "Multiple Airbags",
      "ABS",
      "Wireless Charging"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 668,
    "make": "Peugeot",
    "model": "iOn",
    "year": 2020,
    "price": 1582212,
    "mileage": 22907,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Comfortable Peugeot iOn offering smooth ride and premium feel.",
    "features": [
      "Roof Rails",
      "Navigation"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 669,
    "make": "Suzuki",
    "model": "Baleno",
    "year": 2019,
    "price": 2558948,
    "mileage": 131384,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Robust Suzuki Baleno built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "Android Auto"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 670,
    "make": "Ford",
    "model": "Mondeo",
    "year": 2016,
    "price": 2366068,
    "mileage": 125962,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Reliable Ford Mondeo with great fuel efficiency and low maintenance.",
    "features": [
      "Wireless Charging",
      "Sport Mode",
      "Parking Sensors"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 671,
    "make": "BMW",
    "model": "X4",
    "year": 2017,
    "price": 4673073,
    "mileage": 100369,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Modern BMW X4 with advanced technology and safety features.",
    "features": [
      "Leather Seats",
      "Bluetooth",
      "Brake Assist",
      "Cruise Control",
      "Power Mirrors"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 672,
    "make": "Suzuki",
    "model": "SX4",
    "year": 2019,
    "price": 2566335,
    "mileage": 22314,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Premium Suzuki SX4 with luxury features and superior comfort.",
    "features": [
      "Fog Lights",
      "Dual Zone AC"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 673,
    "make": "Mitsubishi",
    "model": "i-MiEV",
    "year": 2017,
    "price": 3296608,
    "mileage": 20106,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Premium Mitsubishi i-MiEV with luxury features and superior comfort.",
    "features": [
      "Leather Seats",
      "Power Windows",
      "Parking Sensors",
      "ABS",
      "Power Mirrors",
      "Android Auto"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 674,
    "make": "Suzuki",
    "model": "XL7",
    "year": 2017,
    "price": 847628,
    "mileage": 13261,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Robust Suzuki XL7 built for durability and long-term reliability.",
    "features": [
      "Backup Camera",
      "Heated Seats",
      "Tinted Windows",
      "Cruise Control",
      "Ventilated Seats"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 675,
    "make": "Suzuki",
    "model": "Vitara",
    "year": 2023,
    "price": 3382091,
    "mileage": 128825,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Well-maintained Suzuki Vitara with excellent performance and reliability.",
    "features": [
      "Brake Assist",
      "Stability Control",
      "Parking Sensors",
      "Eco Mode"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 676,
    "make": "Volkswagen",
    "model": "Tiguan",
    "year": 2015,
    "price": 2565210,
    "mileage": 74589,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Quality Volkswagen Tiguan perfect for daily commuting and family use.",
    "features": [
      "ABS",
      "Navigation",
      "Dual Zone AC",
      "Power Mirrors",
      "Roof Rails",
      "Leather Seats"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 677,
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "year": 2019,
    "price": 916817,
    "mileage": 149784,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Robust Mitsubishi Eclipse Cross built for durability and long-term reliability.",
    "features": [
      "Premium Sound",
      "Bluetooth"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 678,
    "make": "Toyota",
    "model": "Vitz",
    "year": 2024,
    "price": 1663423,
    "mileage": 126598,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Reliable Toyota Vitz with great fuel efficiency and low maintenance.",
    "features": [
      "EBD",
      "Stability Control"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 679,
    "make": "Subaru",
    "model": "SVX",
    "year": 2021,
    "price": 1053871,
    "mileage": 42592,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Modern Subaru SVX with advanced technology and safety features.",
    "features": [
      "Eco Mode",
      "Dual Zone AC"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 680,
    "make": "Ford",
    "model": "Ranger",
    "year": 2021,
    "price": 4427397,
    "mileage": 141772,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Spacious Ford Ranger ideal for family trips and business use.",
    "features": [
      "Alloy Wheels",
      "Sport Mode",
      "Power Windows",
      "Stability Control",
      "Push Start"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 681,
    "make": "BMW",
    "model": "5 Series",
    "year": 2020,
    "price": 1653823,
    "mileage": 104669,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Reliable BMW 5 Series with great fuel efficiency and low maintenance.",
    "features": [
      "Navigation",
      "Brake Assist"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 682,
    "make": "Mercedes",
    "model": "GLS",
    "year": 2015,
    "price": 1455813,
    "mileage": 110741,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Spacious Mercedes GLS ideal for family trips and business use.",
    "features": [
      "Push Start",
      "Fog Lights",
      "Dual Zone AC",
      "Air Conditioning",
      "Tow Hitch",
      "Multiple Airbags"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 683,
    "make": "Suzuki",
    "model": "Kizashi",
    "year": 2015,
    "price": 2302910,
    "mileage": 110230,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Spacious Suzuki Kizashi ideal for family trips and business use.",
    "features": [
      "Hill Start Assist",
      "Bluetooth",
      "Sunroof",
      "Ventilated Seats",
      "Multiple Airbags"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 684,
    "make": "BMW",
    "model": "X6",
    "year": 2016,
    "price": 3504776,
    "mileage": 117571,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Premium BMW X6 with luxury features and superior comfort.",
    "features": [
      "Dual Zone AC",
      "Hill Start Assist",
      "Tow Hitch",
      "Multiple Airbags",
      "Traction Control"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 685,
    "make": "Toyota",
    "model": "Prius",
    "year": 2017,
    "price": 1011978,
    "mileage": 58745,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Well-maintained Toyota Prius with excellent performance and reliability.",
    "features": [
      "Air Conditioning",
      "Traction Control",
      "Wireless Charging",
      "Android Auto",
      "Sunroof",
      "Dual Zone AC"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 686,
    "make": "Volkswagen",
    "model": "Golf GTI",
    "year": 2015,
    "price": 825196,
    "mileage": 43393,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Efficient Volkswagen Golf GTI with excellent handling and performance.",
    "features": [
      "Alloy Wheels",
      "Hill Start Assist",
      "Premium Sound",
      "Traction Control",
      "Wireless Charging"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 687,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2022,
    "price": 1418521,
    "mileage": 79594,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Modern Hyundai Sonata with advanced technology and safety features.",
    "features": [
      "Bluetooth",
      "Power Mirrors",
      "Air Conditioning",
      "Push Start",
      "Sunroof",
      "Ventilated Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 688,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2018,
    "price": 4289495,
    "mileage": 9414,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Spacious Honda Ridgeline ideal for family trips and business use.",
    "features": [
      "Cruise Control",
      "Navigation"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 689,
    "make": "Suzuki",
    "model": "XL7",
    "year": 2021,
    "price": 4275783,
    "mileage": 65630,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Quality Suzuki XL7 perfect for daily commuting and family use.",
    "features": [
      "Fog Lights",
      "Tow Hitch",
      "Tinted Windows"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 690,
    "make": "Mercedes",
    "model": "E-Class",
    "year": 2023,
    "price": 2247206,
    "mileage": 10876,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Reliable Mercedes E-Class with great fuel efficiency and low maintenance.",
    "features": [
      "Premium Sound",
      "Dual Zone AC"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 691,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2015,
    "price": 4097219,
    "mileage": 125498,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Comfortable Ford Fiesta offering smooth ride and premium feel.",
    "features": [
      "Power Windows",
      "ABS",
      "Tow Hitch"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 692,
    "make": "Mitsubishi",
    "model": "Attrage",
    "year": 2022,
    "price": 2017672,
    "mileage": 132085,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Modern Mitsubishi Attrage with advanced technology and safety features.",
    "features": [
      "Hill Start Assist",
      "Power Mirrors"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 693,
    "make": "Mercedes",
    "model": "Sprinter",
    "year": 2017,
    "price": 917673,
    "mileage": 31227,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Reliable Mercedes Sprinter with great fuel efficiency and low maintenance.",
    "features": [
      "ABS",
      "Apple CarPlay",
      "Multiple Airbags",
      "Premium Sound",
      "Sport Mode"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 694,
    "make": "BMW",
    "model": "X1",
    "year": 2015,
    "price": 4340693,
    "mileage": 150405,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Reliable BMW X1 with great fuel efficiency and low maintenance.",
    "features": [
      "Premium Sound",
      "Roof Rails"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 695,
    "make": "Renault",
    "model": "Fluence",
    "year": 2020,
    "price": 2872862,
    "mileage": 51924,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Comfortable Renault Fluence offering smooth ride and premium feel.",
    "features": [
      "Navigation",
      "Roof Rails",
      "Stability Control",
      "Bluetooth",
      "4WD/AWD"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 696,
    "make": "Suzuki",
    "model": "Kizashi",
    "year": 2016,
    "price": 1467181,
    "mileage": 116844,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Robust Suzuki Kizashi built for durability and long-term reliability.",
    "features": [
      "Air Conditioning",
      "Roof Rails"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 697,
    "make": "Honda",
    "model": "Pilot",
    "year": 2023,
    "price": 1872918,
    "mileage": 98081,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Reliable Honda Pilot with great fuel efficiency and low maintenance.",
    "features": [
      "Backup Camera",
      "Roof Rails",
      "Dual Zone AC"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 698,
    "make": "Subaru",
    "model": "Forester",
    "year": 2021,
    "price": 3525397,
    "mileage": 58257,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Stylish Subaru Forester perfect for urban driving and weekend trips.",
    "features": [
      "Multiple Airbags",
      "Sport Mode",
      "Cruise Control",
      "Power Mirrors"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 699,
    "make": "Hyundai",
    "model": "i20",
    "year": 2020,
    "price": 1125521,
    "mileage": 39310,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Spacious Hyundai i20 ideal for family trips and business use.",
    "features": [
      "Keyless Entry",
      "Brake Assist",
      "Hill Start Assist",
      "EBD",
      "Wireless Charging"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 700,
    "make": "Kia",
    "model": "EV6",
    "year": 2024,
    "price": 1442586,
    "mileage": 76488,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Reliable Kia EV6 with great fuel efficiency and low maintenance.",
    "features": [
      "Hill Start Assist",
      "Air Conditioning",
      "Cruise Control",
      "Brake Assist"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 701,
    "make": "Toyota",
    "model": "Highlander",
    "year": 2024,
    "price": 1809927,
    "mileage": 52661,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Efficient Toyota Highlander with excellent handling and performance.",
    "features": [
      "Apple CarPlay",
      "Wireless Charging",
      "EBD",
      "Air Conditioning"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 702,
    "make": "Toyota",
    "model": "Highlander",
    "year": 2024,
    "price": 2788382,
    "mileage": 152345,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Well-maintained Toyota Highlander with excellent performance and reliability.",
    "features": [
      "Power Mirrors",
      "Premium Sound",
      "Push Start",
      "Parking Sensors",
      "Apple CarPlay",
      "Hill Start Assist"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 703,
    "make": "Peugeot",
    "model": "407",
    "year": 2023,
    "price": 1381713,
    "mileage": 116475,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Quality Peugeot 407 perfect for daily commuting and family use.",
    "features": [
      "Heated Seats",
      "Eco Mode",
      "Sport Mode"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 704,
    "make": "Ford",
    "model": "Mustang",
    "year": 2018,
    "price": 4293206,
    "mileage": 127888,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Quality Ford Mustang perfect for daily commuting and family use.",
    "features": [
      "Tow Hitch",
      "Fog Lights",
      "Traction Control",
      "Heated Seats",
      "Apple CarPlay"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 705,
    "make": "Mazda",
    "model": "CX-30",
    "year": 2018,
    "price": 1571880,
    "mileage": 62390,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Reliable Mazda CX-30 with great fuel efficiency and low maintenance.",
    "features": [
      "4WD/AWD",
      "Leather Seats",
      "Sport Mode",
      "Stability Control",
      "Ventilated Seats"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 706,
    "make": "Mercedes",
    "model": "GLA",
    "year": 2022,
    "price": 2739415,
    "mileage": 13904,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Modern Mercedes GLA with advanced technology and safety features.",
    "features": [
      "Power Mirrors",
      "Keyless Entry",
      "Navigation"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 707,
    "make": "Mercedes",
    "model": "S-Class",
    "year": 2017,
    "price": 4365859,
    "mileage": 154987,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Reliable Mercedes S-Class with great fuel efficiency and low maintenance.",
    "features": [
      "Bluetooth",
      "Push Start",
      "ABS"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 708,
    "make": "Kia",
    "model": "Ceed",
    "year": 2019,
    "price": 3106326,
    "mileage": 44823,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Well-maintained Kia Ceed with excellent performance and reliability.",
    "features": [
      "Apple CarPlay",
      "Eco Mode",
      "Brake Assist",
      "Navigation",
      "Sport Mode",
      "Keyless Entry"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 709,
    "make": "Ford",
    "model": "Escape",
    "year": 2019,
    "price": 2177280,
    "mileage": 25959,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Premium Ford Escape with luxury features and superior comfort.",
    "features": [
      "Leather Seats",
      "Eco Mode"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 710,
    "make": "Hyundai",
    "model": "Elantra",
    "year": 2016,
    "price": 2060299,
    "mileage": 30556,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Robust Hyundai Elantra built for durability and long-term reliability.",
    "features": [
      "Push Start",
      "Keyless Entry"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 711,
    "make": "Mercedes",
    "model": "A-Class",
    "year": 2016,
    "price": 2629592,
    "mileage": 9580,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Quality Mercedes A-Class perfect for daily commuting and family use.",
    "features": [
      "Dual Zone AC",
      "4WD/AWD",
      "Keyless Entry",
      "Power Windows"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 712,
    "make": "Peugeot",
    "model": "508",
    "year": 2024,
    "price": 2910094,
    "mileage": 120139,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Spacious Peugeot 508 ideal for family trips and business use.",
    "features": [
      "Leather Seats",
      "Parking Sensors",
      "Tinted Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 713,
    "make": "Honda",
    "model": "Civic",
    "year": 2021,
    "price": 3035938,
    "mileage": 32453,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Reliable Honda Civic with great fuel efficiency and low maintenance.",
    "features": [
      "Eco Mode",
      "Sunroof",
      "Tow Hitch",
      "Push Start"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 714,
    "make": "BMW",
    "model": "1 Series",
    "year": 2023,
    "price": 3874976,
    "mileage": 65226,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Reliable BMW 1 Series with great fuel efficiency and low maintenance.",
    "features": [
      "EBD",
      "Android Auto",
      "Keyless Entry"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 715,
    "make": "Suzuki",
    "model": "Baleno",
    "year": 2020,
    "price": 2977896,
    "mileage": 52753,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Comfortable Suzuki Baleno offering smooth ride and premium feel.",
    "features": [
      "Wireless Charging",
      "Push Start",
      "Power Windows",
      "Heated Seats",
      "Apple CarPlay"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 716,
    "make": "Mitsubishi",
    "model": "Attrage",
    "year": 2019,
    "price": 1108500,
    "mileage": 148737,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Mitsubishi Attrage perfect for urban driving and weekend trips.",
    "features": [
      "Keyless Entry",
      "Eco Mode",
      "Wireless Charging"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 717,
    "make": "Mitsubishi",
    "model": "Outlander",
    "year": 2019,
    "price": 2316170,
    "mileage": 93483,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Premium Mitsubishi Outlander with luxury features and superior comfort.",
    "features": [
      "Multiple Airbags",
      "Power Mirrors",
      "Sport Mode"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 718,
    "make": "BMW",
    "model": "X1",
    "year": 2023,
    "price": 3087425,
    "mileage": 116601,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Spacious BMW X1 ideal for family trips and business use.",
    "features": [
      "Tinted Windows",
      "Sunroof",
      "Brake Assist"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 719,
    "make": "Honda",
    "model": "Odyssey",
    "year": 2018,
    "price": 3621233,
    "mileage": 44472,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Well-maintained Honda Odyssey with excellent performance and reliability.",
    "features": [
      "Bluetooth",
      "Premium Sound",
      "Multiple Airbags"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 720,
    "make": "Ford",
    "model": "Kuga",
    "year": 2021,
    "price": 1551842,
    "mileage": 34715,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Spacious Ford Kuga ideal for family trips and business use.",
    "features": [
      "Wireless Charging",
      "Navigation",
      "Power Windows",
      "Roof Rails"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 721,
    "make": "Toyota",
    "model": "Rav4",
    "year": 2023,
    "price": 3589910,
    "mileage": 142561,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Well-maintained Toyota Rav4 with excellent performance and reliability.",
    "features": [
      "Multiple Airbags",
      "Heated Seats",
      "Roof Rails",
      "Navigation",
      "EBD"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 722,
    "make": "Toyota",
    "model": "Highlander",
    "year": 2015,
    "price": 1085782,
    "mileage": 143099,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Stylish Toyota Highlander perfect for urban driving and weekend trips.",
    "features": [
      "Air Conditioning",
      "Sport Mode"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 723,
    "make": "Mercedes",
    "model": "B-Class",
    "year": 2019,
    "price": 1939703,
    "mileage": 10251,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Comfortable Mercedes B-Class offering smooth ride and premium feel.",
    "features": [
      "Sport Mode",
      "Parking Sensors",
      "Android Auto"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 724,
    "make": "Mitsubishi",
    "model": "Delica",
    "year": 2020,
    "price": 3017478,
    "mileage": 6899,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Robust Mitsubishi Delica built for durability and long-term reliability.",
    "features": [
      "Power Mirrors",
      "Air Conditioning",
      "Sport Mode",
      "Parking Sensors",
      "Push Start",
      "Bluetooth"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 725,
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "price": 929948,
    "mileage": 100869,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Efficient Honda Civic with excellent handling and performance.",
    "features": [
      "LED Headlights",
      "Multiple Airbags",
      "Navigation",
      "Wireless Charging",
      "Tow Hitch",
      "Alloy Wheels"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 726,
    "make": "Nissan",
    "model": "Juke",
    "year": 2021,
    "price": 2435105,
    "mileage": 12450,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Red",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Robust Nissan Juke built for durability and long-term reliability.",
    "features": [
      "Heated Seats",
      "ABS",
      "Premium Sound"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 727,
    "make": "Renault",
    "model": "Captur",
    "year": 2017,
    "price": 3657163,
    "mileage": 31615,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Renault Captur perfect for urban driving and weekend trips.",
    "features": [
      "Apple CarPlay",
      "4WD/AWD",
      "Traction Control",
      "Multiple Airbags",
      "Alloy Wheels"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 728,
    "make": "Mitsubishi",
    "model": "Outlander",
    "year": 2024,
    "price": 3028290,
    "mileage": 125686,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Premium Mitsubishi Outlander with luxury features and superior comfort.",
    "features": [
      "Roof Rails",
      "Air Conditioning",
      "Alloy Wheels",
      "Fog Lights",
      "Navigation",
      "ABS"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 729,
    "make": "Ford",
    "model": "Edge",
    "year": 2020,
    "price": 1521326,
    "mileage": 67926,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Black",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Robust Ford Edge built for durability and long-term reliability.",
    "features": [
      "Traction Control",
      "Brake Assist"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 730,
    "make": "Mercedes",
    "model": "SL",
    "year": 2021,
    "price": 2945333,
    "mileage": 126367,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Comfortable Mercedes SL offering smooth ride and premium feel.",
    "features": [
      "Power Mirrors",
      "Tinted Windows",
      "Wireless Charging",
      "Multiple Airbags"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 731,
    "make": "Mazda",
    "model": "CX-9",
    "year": 2022,
    "price": 2209956,
    "mileage": 34072,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Reliable Mazda CX-9 with great fuel efficiency and low maintenance.",
    "features": [
      "Dual Zone AC",
      "Alloy Wheels"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 732,
    "make": "Renault",
    "model": "Kadjar",
    "year": 2021,
    "price": 4775777,
    "mileage": 91274,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Robust Renault Kadjar built for durability and long-term reliability.",
    "features": [
      "Sport Mode",
      "Ventilated Seats"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 733,
    "make": "Peugeot",
    "model": "508",
    "year": 2018,
    "price": 1548877,
    "mileage": 25307,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Quality Peugeot 508 perfect for daily commuting and family use.",
    "features": [
      "Stability Control",
      "Android Auto",
      "Navigation",
      "Air Conditioning"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 734,
    "make": "Mazda",
    "model": "BT-50",
    "year": 2017,
    "price": 3556386,
    "mileage": 101939,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Reliable Mazda BT-50 with great fuel efficiency and low maintenance.",
    "features": [
      "Push Start",
      "Fog Lights"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 735,
    "make": "Renault",
    "model": "Kangoo",
    "year": 2020,
    "price": 2321170,
    "mileage": 101642,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Premium Renault Kangoo with luxury features and superior comfort.",
    "features": [
      "Keyless Entry",
      "Power Mirrors",
      "Apple CarPlay",
      "Traction Control"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 736,
    "make": "Kia",
    "model": "Forte",
    "year": 2017,
    "price": 1878066,
    "mileage": 105040,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Stylish Kia Forte perfect for urban driving and weekend trips.",
    "features": [
      "Power Mirrors",
      "Heated Seats",
      "Wireless Charging",
      "Traction Control"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 737,
    "make": "Hyundai",
    "model": "i10",
    "year": 2019,
    "price": 2183040,
    "mileage": 12240,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "White",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Efficient Hyundai i10 with excellent handling and performance.",
    "features": [
      "EBD",
      "Push Start",
      "Ventilated Seats",
      "Dual Zone AC",
      "Heated Seats"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 738,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2018,
    "price": 3465111,
    "mileage": 28806,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Reliable Ford Fiesta with great fuel efficiency and low maintenance.",
    "features": [
      "Air Conditioning",
      "Tinted Windows",
      "Multiple Airbags",
      "Eco Mode"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 739,
    "make": "Volkswagen",
    "model": "Atlas",
    "year": 2021,
    "price": 3954013,
    "mileage": 78240,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Quality Volkswagen Atlas perfect for daily commuting and family use.",
    "features": [
      "Sunroof",
      "Power Windows"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 740,
    "make": "Mercedes",
    "model": "C-Class",
    "year": 2017,
    "price": 3066657,
    "mileage": 22697,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Well-maintained Mercedes C-Class with excellent performance and reliability.",
    "features": [
      "Sunroof",
      "4WD/AWD",
      "Tinted Windows"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 741,
    "make": "Honda",
    "model": "Pilot",
    "year": 2021,
    "price": 4229054,
    "mileage": 111328,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Robust Honda Pilot built for durability and long-term reliability.",
    "features": [
      "Sport Mode",
      "Ventilated Seats",
      "Navigation",
      "Apple CarPlay"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 742,
    "make": "Volkswagen",
    "model": "Touareg",
    "year": 2017,
    "price": 2038772,
    "mileage": 36962,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Well-maintained Volkswagen Touareg with excellent performance and reliability.",
    "features": [
      "Apple CarPlay",
      "Navigation",
      "Eco Mode",
      "Push Start"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 743,
    "make": "Mercedes",
    "model": "GLC",
    "year": 2022,
    "price": 3467223,
    "mileage": 40366,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Comfortable Mercedes GLC offering smooth ride and premium feel.",
    "features": [
      "4WD/AWD",
      "Stability Control",
      "Navigation"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 744,
    "make": "Mercedes",
    "model": "SL",
    "year": 2017,
    "price": 3410860,
    "mileage": 56601,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Robust Mercedes SL built for durability and long-term reliability.",
    "features": [
      "Push Start",
      "ABS",
      "Roof Rails"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 745,
    "make": "BMW",
    "model": "M5",
    "year": 2017,
    "price": 4728242,
    "mileage": 131851,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Modern BMW M5 with advanced technology and safety features.",
    "features": [
      "Tow Hitch",
      "Keyless Entry",
      "EBD",
      "Navigation",
      "Wireless Charging"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 746,
    "make": "Mercedes",
    "model": "GLE",
    "year": 2019,
    "price": 2369445,
    "mileage": 25002,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Modern Mercedes GLE with advanced technology and safety features.",
    "features": [
      "Cruise Control",
      "Dual Zone AC"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 747,
    "make": "Ford",
    "model": "F-150",
    "year": 2018,
    "price": 3468134,
    "mileage": 43421,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Spacious Ford F-150 ideal for family trips and business use.",
    "features": [
      "Multiple Airbags",
      "Ventilated Seats",
      "Brake Assist",
      "Premium Sound"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 748,
    "make": "Hyundai",
    "model": "i30",
    "year": 2021,
    "price": 4614591,
    "mileage": 148866,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Stylish Hyundai i30 perfect for urban driving and weekend trips.",
    "features": [
      "Roof Rails",
      "Brake Assist",
      "Wireless Charging"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 749,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2020,
    "price": 892871,
    "mileage": 107431,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "White",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Reliable Honda Ridgeline with great fuel efficiency and low maintenance.",
    "features": [
      "Multiple Airbags",
      "Brake Assist"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 750,
    "make": "Kia",
    "model": "Telluride",
    "year": 2019,
    "price": 1968799,
    "mileage": 46872,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Modern Kia Telluride with advanced technology and safety features.",
    "features": [
      "Tinted Windows",
      "Alloy Wheels",
      "Power Windows",
      "Apple CarPlay"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 751,
    "make": "Nissan",
    "model": "Sentra",
    "year": 2022,
    "price": 3395735,
    "mileage": 153785,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Robust Nissan Sentra built for durability and long-term reliability.",
    "features": [
      "Tow Hitch",
      "Wireless Charging",
      "Bluetooth",
      "Dual Zone AC"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 752,
    "make": "Kia",
    "model": "Cadenza",
    "year": 2021,
    "price": 4677519,
    "mileage": 55073,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Premium Kia Cadenza with luxury features and superior comfort.",
    "features": [
      "Eco Mode",
      "Dual Zone AC",
      "Power Windows"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 753,
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2021,
    "price": 940854,
    "mileage": 50850,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Efficient Toyota Land Cruiser with excellent handling and performance.",
    "features": [
      "Fog Lights",
      "Ventilated Seats",
      "LED Headlights",
      "Eco Mode",
      "4WD/AWD"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 754,
    "make": "Peugeot",
    "model": "2008",
    "year": 2020,
    "price": 1551716,
    "mileage": 110977,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Comfortable Peugeot 2008 offering smooth ride and premium feel.",
    "features": [
      "Multiple Airbags",
      "Navigation"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 755,
    "make": "Renault",
    "model": "Espace",
    "year": 2023,
    "price": 4253902,
    "mileage": 27471,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Red",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Well-maintained Renault Espace with excellent performance and reliability.",
    "features": [
      "Roof Rails",
      "Push Start"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 756,
    "make": "Hyundai",
    "model": "i10",
    "year": 2022,
    "price": 4784366,
    "mileage": 103919,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Quality Hyundai i10 perfect for daily commuting and family use.",
    "features": [
      "Roof Rails",
      "Navigation",
      "Dual Zone AC",
      "Bluetooth"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 757,
    "make": "Mitsubishi",
    "model": "Galant",
    "year": 2022,
    "price": 3040182,
    "mileage": 6856,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Premium Mitsubishi Galant with luxury features and superior comfort.",
    "features": [
      "Traction Control",
      "Roof Rails",
      "Navigation",
      "Eco Mode",
      "EBD"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 758,
    "make": "Mitsubishi",
    "model": "Outlander",
    "year": 2022,
    "price": 1792379,
    "mileage": 11704,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Efficient Mitsubishi Outlander with excellent handling and performance.",
    "features": [
      "Power Windows",
      "Brake Assist",
      "Eco Mode",
      "Backup Camera"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 759,
    "make": "Kia",
    "model": "Rio",
    "year": 2018,
    "price": 1157302,
    "mileage": 134247,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Modern Kia Rio with advanced technology and safety features.",
    "features": [
      "Air Conditioning",
      "Brake Assist",
      "Ventilated Seats",
      "Android Auto"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 760,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2017,
    "price": 2275279,
    "mileage": 149480,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Well-maintained Mitsubishi Carisma with excellent performance and reliability.",
    "features": [
      "Heated Seats",
      "Parking Sensors",
      "Sunroof",
      "Tow Hitch"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 761,
    "make": "Toyota",
    "model": "Prius",
    "year": 2024,
    "price": 2745516,
    "mileage": 141987,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Stylish Toyota Prius perfect for urban driving and weekend trips.",
    "features": [
      "Parking Sensors",
      "Tinted Windows"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 762,
    "make": "Nissan",
    "model": "Frontier",
    "year": 2024,
    "price": 3030227,
    "mileage": 111829,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Quality Nissan Frontier perfect for daily commuting and family use.",
    "features": [
      "ABS",
      "Ventilated Seats"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 763,
    "make": "Renault",
    "model": "Kangoo",
    "year": 2022,
    "price": 1859802,
    "mileage": 64723,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Premium Renault Kangoo with luxury features and superior comfort.",
    "features": [
      "Stability Control",
      "Parking Sensors",
      "Fog Lights"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 764,
    "make": "Suzuki",
    "model": "Ignis",
    "year": 2023,
    "price": 2711839,
    "mileage": 116691,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Robust Suzuki Ignis built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "Multiple Airbags",
      "Hill Start Assist",
      "Push Start"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 765,
    "make": "Nissan",
    "model": "X-Trail",
    "year": 2020,
    "price": 3974688,
    "mileage": 83644,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Reliable Nissan X-Trail with great fuel efficiency and low maintenance.",
    "features": [
      "Power Mirrors",
      "Wireless Charging",
      "Roof Rails",
      "Navigation"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 766,
    "make": "Mitsubishi",
    "model": "Delica",
    "year": 2019,
    "price": 3200172,
    "mileage": 55406,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Robust Mitsubishi Delica built for durability and long-term reliability.",
    "features": [
      "Premium Sound",
      "Stability Control",
      "Eco Mode"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 767,
    "make": "Mazda",
    "model": "Tribute",
    "year": 2019,
    "price": 4459658,
    "mileage": 151604,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Efficient Mazda Tribute with excellent handling and performance.",
    "features": [
      "Android Auto",
      "ABS",
      "Premium Sound",
      "Brake Assist"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 768,
    "make": "Nissan",
    "model": "Serena",
    "year": 2016,
    "price": 1698572,
    "mileage": 14683,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Premium Nissan Serena with luxury features and superior comfort.",
    "features": [
      "Heated Seats",
      "Sunroof",
      "Parking Sensors",
      "Wireless Charging"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 769,
    "make": "Mitsubishi",
    "model": "Lancer",
    "year": 2015,
    "price": 4035596,
    "mileage": 11542,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Comfortable Mitsubishi Lancer offering smooth ride and premium feel.",
    "features": [
      "Power Mirrors",
      "Fog Lights",
      "Cruise Control",
      "Brake Assist",
      "Keyless Entry"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 770,
    "make": "Ford",
    "model": "Mondeo",
    "year": 2019,
    "price": 3968264,
    "mileage": 75062,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Modern Ford Mondeo with advanced technology and safety features.",
    "features": [
      "Backup Camera",
      "Cruise Control",
      "ABS"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 771,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2017,
    "price": 2223382,
    "mileage": 73323,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Well-maintained Mitsubishi Carisma with excellent performance and reliability.",
    "features": [
      "Navigation",
      "Push Start",
      "Air Conditioning",
      "Premium Sound",
      "Apple CarPlay"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 772,
    "make": "Honda",
    "model": "Civic",
    "year": 2018,
    "price": 1680232,
    "mileage": 122071,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Quality Honda Civic perfect for daily commuting and family use.",
    "features": [
      "LED Headlights",
      "Power Mirrors",
      "Heated Seats",
      "Apple CarPlay",
      "ABS"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 773,
    "make": "Hyundai",
    "model": "Palisade",
    "year": 2021,
    "price": 3205602,
    "mileage": 66648,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Well-maintained Hyundai Palisade with excellent performance and reliability.",
    "features": [
      "Backup Camera",
      "Sport Mode",
      "Sunroof",
      "Power Mirrors",
      "Keyless Entry"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 774,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2016,
    "price": 2239240,
    "mileage": 67412,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Well-maintained Hyundai Sonata with excellent performance and reliability.",
    "features": [
      "Push Start",
      "Ventilated Seats",
      "Android Auto",
      "Wireless Charging",
      "Power Mirrors",
      "Brake Assist"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 775,
    "make": "Mercedes",
    "model": "GLA",
    "year": 2024,
    "price": 1879393,
    "mileage": 98455,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Comfortable Mercedes GLA offering smooth ride and premium feel.",
    "features": [
      "Fog Lights",
      "Tinted Windows"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 776,
    "make": "Subaru",
    "model": "Leone",
    "year": 2020,
    "price": 2376990,
    "mileage": 73346,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Premium Subaru Leone with luxury features and superior comfort.",
    "features": [
      "Tow Hitch",
      "Cruise Control"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 777,
    "make": "Mercedes",
    "model": "A-Class",
    "year": 2019,
    "price": 3131947,
    "mileage": 8504,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Robust Mercedes A-Class built for durability and long-term reliability.",
    "features": [
      "ABS",
      "Heated Seats",
      "Alloy Wheels"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 778,
    "make": "Ford",
    "model": "Transit",
    "year": 2021,
    "price": 1416844,
    "mileage": 146238,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Stylish Ford Transit perfect for urban driving and weekend trips.",
    "features": [
      "Keyless Entry",
      "Power Windows",
      "Bluetooth",
      "Backup Camera"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 779,
    "make": "BMW",
    "model": "5 Series",
    "year": 2020,
    "price": 1718880,
    "mileage": 38792,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Modern BMW 5 Series with advanced technology and safety features.",
    "features": [
      "Keyless Entry",
      "Heated Seats",
      "Hill Start Assist"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 780,
    "make": "Honda",
    "model": "HR-V",
    "year": 2016,
    "price": 2133718,
    "mileage": 41588,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Spacious Honda HR-V ideal for family trips and business use.",
    "features": [
      "Cruise Control",
      "Bluetooth",
      "Alloy Wheels",
      "Push Start",
      "Heated Seats"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 781,
    "make": "Suzuki",
    "model": "Celerio",
    "year": 2019,
    "price": 4776963,
    "mileage": 52391,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Quality Suzuki Celerio perfect for daily commuting and family use.",
    "features": [
      "Backup Camera",
      "EBD",
      "ABS",
      "Power Windows"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 782,
    "make": "Peugeot",
    "model": "108",
    "year": 2021,
    "price": 3919932,
    "mileage": 153388,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Premium Peugeot 108 with luxury features and superior comfort.",
    "features": [
      "Bluetooth",
      "Tinted Windows",
      "Hill Start Assist",
      "Tow Hitch",
      "Brake Assist",
      "Push Start"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 783,
    "make": "Mercedes",
    "model": "C-Class",
    "year": 2021,
    "price": 2659169,
    "mileage": 8079,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Reliable Mercedes C-Class with great fuel efficiency and low maintenance.",
    "features": [
      "Apple CarPlay",
      "Cruise Control",
      "Traction Control"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 784,
    "make": "Ford",
    "model": "Focus",
    "year": 2021,
    "price": 4088016,
    "mileage": 70668,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Reliable Ford Focus with great fuel efficiency and low maintenance.",
    "features": [
      "Hill Start Assist",
      "Multiple Airbags",
      "Backup Camera",
      "Apple CarPlay",
      "Sunroof"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 785,
    "make": "Ford",
    "model": "Kuga",
    "year": 2015,
    "price": 1868037,
    "mileage": 44295,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Quality Ford Kuga perfect for daily commuting and family use.",
    "features": [
      "Leather Seats",
      "Hill Start Assist"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 786,
    "make": "Peugeot",
    "model": "108",
    "year": 2023,
    "price": 2575297,
    "mileage": 97475,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Comfortable Peugeot 108 offering smooth ride and premium feel.",
    "features": [
      "Navigation",
      "Apple CarPlay",
      "Wireless Charging",
      "Heated Seats",
      "ABS"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 787,
    "make": "Suzuki",
    "model": "Kizashi",
    "year": 2016,
    "price": 2870208,
    "mileage": 56677,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Stylish Suzuki Kizashi perfect for urban driving and weekend trips.",
    "features": [
      "Eco Mode",
      "Dual Zone AC"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 788,
    "make": "Mercedes",
    "model": "C-Class",
    "year": 2024,
    "price": 2127515,
    "mileage": 105816,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Modern Mercedes C-Class with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "Alloy Wheels",
      "Leather Seats",
      "Cruise Control",
      "Roof Rails"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 789,
    "make": "Nissan",
    "model": "Serena",
    "year": 2024,
    "price": 1131897,
    "mileage": 101932,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Modern Nissan Serena with advanced technology and safety features.",
    "features": [
      "Wireless Charging",
      "Leather Seats",
      "Traction Control",
      "Ventilated Seats",
      "ABS"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 790,
    "make": "Volkswagen",
    "model": "Touareg",
    "year": 2024,
    "price": 2344168,
    "mileage": 128100,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Reliable Volkswagen Touareg with great fuel efficiency and low maintenance.",
    "features": [
      "Power Mirrors",
      "Ventilated Seats",
      "Backup Camera",
      "LED Headlights",
      "Android Auto"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 791,
    "make": "BMW",
    "model": "X7",
    "year": 2022,
    "price": 4286734,
    "mileage": 16969,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Stylish BMW X7 perfect for urban driving and weekend trips.",
    "features": [
      "Power Mirrors",
      "EBD",
      "ABS"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 792,
    "make": "Mitsubishi",
    "model": "ASX",
    "year": 2017,
    "price": 3117164,
    "mileage": 38286,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Comfortable Mitsubishi ASX offering smooth ride and premium feel.",
    "features": [
      "Heated Seats",
      "Sunroof",
      "EBD",
      "Eco Mode"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 793,
    "make": "Peugeot",
    "model": "208",
    "year": 2019,
    "price": 3631604,
    "mileage": 103924,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Comfortable Peugeot 208 offering smooth ride and premium feel.",
    "features": [
      "Sunroof",
      "Stability Control",
      "Heated Seats"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 794,
    "make": "Mitsubishi",
    "model": "ASX",
    "year": 2020,
    "price": 2667577,
    "mileage": 21690,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Reliable Mitsubishi ASX with great fuel efficiency and low maintenance.",
    "features": [
      "Tinted Windows",
      "Backup Camera",
      "Parking Sensors",
      "Bluetooth"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 795,
    "make": "Ford",
    "model": "Ranger",
    "year": 2024,
    "price": 3248153,
    "mileage": 145895,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Premium Ford Ranger with luxury features and superior comfort.",
    "features": [
      "Tinted Windows",
      "LED Headlights"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 796,
    "make": "Suzuki",
    "model": "Swift",
    "year": 2018,
    "price": 3401501,
    "mileage": 89199,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Efficient Suzuki Swift with excellent handling and performance.",
    "features": [
      "Eco Mode",
      "Multiple Airbags",
      "Navigation"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 797,
    "make": "Ford",
    "model": "Ka",
    "year": 2024,
    "price": 3392449,
    "mileage": 31049,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Reliable Ford Ka with great fuel efficiency and low maintenance.",
    "features": [
      "Sunroof",
      "Power Windows",
      "EBD",
      "Dual Zone AC",
      "Parking Sensors"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 798,
    "make": "Kia",
    "model": "Cadenza",
    "year": 2017,
    "price": 4128173,
    "mileage": 128317,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Robust Kia Cadenza built for durability and long-term reliability.",
    "features": [
      "Alloy Wheels",
      "EBD",
      "Keyless Entry",
      "Tow Hitch"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 799,
    "make": "Toyota",
    "model": "C-HR",
    "year": 2019,
    "price": 914671,
    "mileage": 61169,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Stylish Toyota C-HR perfect for urban driving and weekend trips.",
    "features": [
      "Alloy Wheels",
      "Tow Hitch"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 800,
    "make": "Mazda",
    "model": "Axela",
    "year": 2022,
    "price": 2885601,
    "mileage": 129447,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Modern Mazda Axela with advanced technology and safety features.",
    "features": [
      "4WD/AWD",
      "Keyless Entry",
      "ABS"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 801,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2019,
    "price": 1327251,
    "mileage": 71251,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Stylish Mitsubishi Pajero perfect for urban driving and weekend trips.",
    "features": [
      "Stability Control",
      "ABS",
      "Fog Lights",
      "Push Start"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 802,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2017,
    "price": 4095494,
    "mileage": 32769,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Modern Ford Fiesta with advanced technology and safety features.",
    "features": [
      "Alloy Wheels",
      "Multiple Airbags"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 803,
    "make": "Honda",
    "model": "Element",
    "year": 2019,
    "price": 4666299,
    "mileage": 153122,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Modern Honda Element with advanced technology and safety features.",
    "features": [
      "Roof Rails",
      "ABS",
      "Brake Assist"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 804,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2021,
    "price": 1839903,
    "mileage": 80418,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Comfortable Hyundai Sonata offering smooth ride and premium feel.",
    "features": [
      "Sport Mode",
      "Eco Mode",
      "Traction Control",
      "Ventilated Seats",
      "Apple CarPlay",
      "Multiple Airbags"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 805,
    "make": "Ford",
    "model": "Mustang",
    "year": 2017,
    "price": 3812599,
    "mileage": 135727,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Spacious Ford Mustang ideal for family trips and business use.",
    "features": [
      "Stability Control",
      "Tinted Windows",
      "ABS",
      "Power Mirrors",
      "Apple CarPlay"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 806,
    "make": "Peugeot",
    "model": "607",
    "year": 2019,
    "price": 1449657,
    "mileage": 144776,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Quality Peugeot 607 perfect for daily commuting and family use.",
    "features": [
      "Dual Zone AC",
      "Fog Lights"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 807,
    "make": "Toyota",
    "model": "Premio",
    "year": 2017,
    "price": 893546,
    "mileage": 19288,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Black",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Robust Toyota Premio built for durability and long-term reliability.",
    "features": [
      "Navigation",
      "Sport Mode",
      "Heated Seats",
      "LED Headlights"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 808,
    "make": "Kia",
    "model": "Cadenza",
    "year": 2023,
    "price": 2785096,
    "mileage": 143842,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Stylish Kia Cadenza perfect for urban driving and weekend trips.",
    "features": [
      "EBD"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 809,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2024,
    "price": 2369668,
    "mileage": 53831,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Efficient Hyundai Sonata with excellent handling and performance.",
    "features": [
      "Apple CarPlay",
      "Sport Mode",
      "Push Start",
      "4WD/AWD"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 810,
    "make": "Volkswagen",
    "model": "Tiguan",
    "year": 2015,
    "price": 3915289,
    "mileage": 87928,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Well-maintained Volkswagen Tiguan with excellent performance and reliability.",
    "features": [
      "Roof Rails",
      "Tinted Windows",
      "Leather Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 811,
    "make": "Nissan",
    "model": "Juke",
    "year": 2015,
    "price": 930063,
    "mileage": 98188,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Quality Nissan Juke perfect for daily commuting and family use.",
    "features": [
      "Brake Assist",
      "Backup Camera"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 812,
    "make": "Subaru",
    "model": "Outback",
    "year": 2015,
    "price": 4735980,
    "mileage": 58631,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Robust Subaru Outback built for durability and long-term reliability.",
    "features": [
      "Backup Camera",
      "Power Windows",
      "Cruise Control"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 813,
    "make": "Renault",
    "model": "Captur",
    "year": 2019,
    "price": 1604519,
    "mileage": 137201,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Robust Renault Captur built for durability and long-term reliability.",
    "features": [
      "Tinted Windows",
      "Brake Assist",
      "EBD"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 814,
    "make": "Mercedes",
    "model": "Sprinter",
    "year": 2015,
    "price": 1046884,
    "mileage": 64584,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Stylish Mercedes Sprinter perfect for urban driving and weekend trips.",
    "features": [
      "Premium Sound",
      "Power Mirrors",
      "Heated Seats"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 815,
    "make": "Ford",
    "model": "Focus",
    "year": 2023,
    "price": 1362123,
    "mileage": 67864,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Robust Ford Focus built for durability and long-term reliability.",
    "features": [
      "Backup Camera",
      "Traction Control"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 816,
    "make": "Peugeot",
    "model": "2008",
    "year": 2023,
    "price": 4770904,
    "mileage": 101871,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Efficient Peugeot 2008 with excellent handling and performance.",
    "features": [
      "Tinted Windows",
      "Sunroof",
      "Leather Seats"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 817,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2017,
    "price": 2058332,
    "mileage": 60343,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Spacious Volkswagen Polo ideal for family trips and business use.",
    "features": [
      "Power Mirrors",
      "Traction Control",
      "Cruise Control",
      "Backup Camera"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 818,
    "make": "Ford",
    "model": "S-Max",
    "year": 2023,
    "price": 1227769,
    "mileage": 122093,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Reliable Ford S-Max with great fuel efficiency and low maintenance.",
    "features": [
      "Hill Start Assist",
      "Sunroof",
      "Power Mirrors"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 819,
    "make": "Hyundai",
    "model": "Accent",
    "year": 2022,
    "price": 2628655,
    "mileage": 124771,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Quality Hyundai Accent perfect for daily commuting and family use.",
    "features": [
      "Sport Mode",
      "Premium Sound",
      "Bluetooth",
      "Hill Start Assist",
      "EBD",
      "Traction Control"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 820,
    "make": "BMW",
    "model": "M5",
    "year": 2019,
    "price": 1041053,
    "mileage": 150511,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Modern BMW M5 with advanced technology and safety features.",
    "features": [
      "Tinted Windows",
      "ABS",
      "Power Windows",
      "Bluetooth"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 821,
    "make": "Mazda",
    "model": "Axela",
    "year": 2021,
    "price": 3443092,
    "mileage": 52167,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Mazda Axela perfect for urban driving and weekend trips.",
    "features": [
      "Premium Sound",
      "Cruise Control",
      "Traction Control",
      "Hill Start Assist"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 822,
    "make": "Ford",
    "model": "S-Max",
    "year": 2020,
    "price": 1970476,
    "mileage": 44427,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Stylish Ford S-Max perfect for urban driving and weekend trips.",
    "features": [
      "Dual Zone AC",
      "Power Windows",
      "Tinted Windows",
      "Stability Control",
      "Air Conditioning"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 823,
    "make": "Toyota",
    "model": "Prius",
    "year": 2018,
    "price": 4420046,
    "mileage": 37962,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Reliable Toyota Prius with great fuel efficiency and low maintenance.",
    "features": [
      "Alloy Wheels",
      "ABS",
      "Ventilated Seats"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 824,
    "make": "Mercedes",
    "model": "GLC",
    "year": 2019,
    "price": 3223152,
    "mileage": 110116,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Comfortable Mercedes GLC offering smooth ride and premium feel.",
    "features": [
      "Power Windows",
      "Brake Assist",
      "ABS",
      "Cruise Control",
      "Sport Mode"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 825,
    "make": "Mercedes",
    "model": "GLA",
    "year": 2023,
    "price": 3247347,
    "mileage": 142296,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Spacious Mercedes GLA ideal for family trips and business use.",
    "features": [
      "Apple CarPlay",
      "EBD",
      "Fog Lights",
      "Tow Hitch",
      "Sport Mode"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 826,
    "make": "Suzuki",
    "model": "Splash",
    "year": 2018,
    "price": 4361009,
    "mileage": 89239,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Comfortable Suzuki Splash offering smooth ride and premium feel.",
    "features": [
      "Apple CarPlay",
      "Traction Control",
      "4WD/AWD"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 827,
    "make": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 2827546,
    "mileage": 72049,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Premium Toyota Camry with luxury features and superior comfort.",
    "features": [
      "EBD",
      "Ventilated Seats"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 828,
    "make": "Mazda",
    "model": "Demio",
    "year": 2020,
    "price": 3947163,
    "mileage": 15078,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Efficient Mazda Demio with excellent handling and performance.",
    "features": [
      "Android Auto",
      "Power Windows",
      "Tinted Windows",
      "LED Headlights",
      "Sport Mode"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 829,
    "make": "Honda",
    "model": "Civic",
    "year": 2019,
    "price": 3700105,
    "mileage": 41797,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Robust Honda Civic built for durability and long-term reliability.",
    "features": [
      "Heated Seats",
      "Eco Mode",
      "Apple CarPlay",
      "Hill Start Assist",
      "Premium Sound"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 830,
    "make": "Mitsubishi",
    "model": "Space Star",
    "year": 2019,
    "price": 2468742,
    "mileage": 132808,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Modern Mitsubishi Space Star with advanced technology and safety features.",
    "features": [
      "Android Auto",
      "Cruise Control",
      "Parking Sensors",
      "Brake Assist"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 831,
    "make": "Mazda",
    "model": "CX-5",
    "year": 2019,
    "price": 2807725,
    "mileage": 39180,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Well-maintained Mazda CX-5 with excellent performance and reliability.",
    "features": [
      "Sunroof",
      "Backup Camera",
      "Cruise Control",
      "Android Auto"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 832,
    "make": "Nissan",
    "model": "X-Trail",
    "year": 2019,
    "price": 1915677,
    "mileage": 7033,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Reliable Nissan X-Trail with great fuel efficiency and low maintenance.",
    "features": [
      "Cruise Control",
      "4WD/AWD",
      "Air Conditioning",
      "Sunroof",
      "Backup Camera"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 833,
    "make": "Kia",
    "model": "Rio",
    "year": 2022,
    "price": 879756,
    "mileage": 42175,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Quality Kia Rio perfect for daily commuting and family use.",
    "features": [
      "Tinted Windows",
      "Navigation",
      "LED Headlights",
      "Tow Hitch"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 834,
    "make": "Ford",
    "model": "Mustang",
    "year": 2024,
    "price": 1443043,
    "mileage": 60601,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Quality Ford Mustang perfect for daily commuting and family use.",
    "features": [
      "Cruise Control",
      "Traction Control",
      "Push Start"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 835,
    "make": "Nissan",
    "model": "Note",
    "year": 2017,
    "price": 4054052,
    "mileage": 111228,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Well-maintained Nissan Note with excellent performance and reliability.",
    "features": [
      "Traction Control",
      "Sunroof",
      "Eco Mode"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 836,
    "make": "Mitsubishi",
    "model": "Galant",
    "year": 2015,
    "price": 1590536,
    "mileage": 142546,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Well-maintained Mitsubishi Galant with excellent performance and reliability.",
    "features": [
      "4WD/AWD",
      "Stability Control"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 837,
    "make": "Mercedes",
    "model": "SLK",
    "year": 2015,
    "price": 1950831,
    "mileage": 104160,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Well-maintained Mercedes SLK with excellent performance and reliability.",
    "features": [
      "Wireless Charging",
      "Bluetooth"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 838,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2018,
    "price": 2977154,
    "mileage": 139640,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Efficient Volkswagen Polo with excellent handling and performance.",
    "features": [
      "Multiple Airbags",
      "Traction Control"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 839,
    "make": "Subaru",
    "model": "STI",
    "year": 2024,
    "price": 2212312,
    "mileage": 42770,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Modern Subaru STI with advanced technology and safety features.",
    "features": [
      "Cruise Control",
      "Parking Sensors",
      "Keyless Entry",
      "Fog Lights",
      "Heated Seats"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 840,
    "make": "Kia",
    "model": "Rio",
    "year": 2018,
    "price": 1636595,
    "mileage": 78726,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Quality Kia Rio perfect for daily commuting and family use.",
    "features": [
      "Push Start",
      "Bluetooth",
      "Android Auto"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 841,
    "make": "Nissan",
    "model": "Note",
    "year": 2024,
    "price": 1177633,
    "mileage": 7085,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Quality Nissan Note perfect for daily commuting and family use.",
    "features": [
      "Backup Camera",
      "Power Windows",
      "Apple CarPlay"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 842,
    "make": "Subaru",
    "model": "Justy",
    "year": 2020,
    "price": 1861194,
    "mileage": 9819,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Robust Subaru Justy built for durability and long-term reliability.",
    "features": [
      "Cruise Control",
      "Premium Sound",
      "Eco Mode",
      "Tinted Windows"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 843,
    "make": "BMW",
    "model": "M3",
    "year": 2023,
    "price": 2874718,
    "mileage": 74081,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Comfortable BMW M3 offering smooth ride and premium feel.",
    "features": [
      "Android Auto",
      "Brake Assist",
      "Tinted Windows"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 844,
    "make": "Ford",
    "model": "Ranger",
    "year": 2017,
    "price": 3276985,
    "mileage": 12717,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Spacious Ford Ranger ideal for family trips and business use.",
    "features": [
      "Keyless Entry",
      "Roof Rails",
      "ABS",
      "Dual Zone AC",
      "EBD"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 845,
    "make": "Honda",
    "model": "Fit",
    "year": 2021,
    "price": 3328625,
    "mileage": 132303,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Premium Honda Fit with luxury features and superior comfort.",
    "features": [
      "Air Conditioning",
      "Roof Rails",
      "Power Mirrors"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 846,
    "make": "Peugeot",
    "model": "Expert",
    "year": 2018,
    "price": 1966505,
    "mileage": 111214,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Quality Peugeot Expert perfect for daily commuting and family use.",
    "features": [
      "Leather Seats",
      "Power Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 847,
    "make": "Kia",
    "model": "Cerato",
    "year": 2017,
    "price": 3403880,
    "mileage": 153812,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Efficient Kia Cerato with excellent handling and performance.",
    "features": [
      "Air Conditioning",
      "Tow Hitch",
      "LED Headlights"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 848,
    "make": "Suzuki",
    "model": "Celerio",
    "year": 2021,
    "price": 2663781,
    "mileage": 127277,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Premium Suzuki Celerio with luxury features and superior comfort.",
    "features": [
      "Traction Control",
      "Push Start",
      "Apple CarPlay",
      "Tinted Windows"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 849,
    "make": "Peugeot",
    "model": "207",
    "year": 2024,
    "price": 2652806,
    "mileage": 39406,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Spacious Peugeot 207 ideal for family trips and business use.",
    "features": [
      "Leather Seats",
      "EBD",
      "Bluetooth",
      "Keyless Entry"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 850,
    "make": "Suzuki",
    "model": "S-Cross",
    "year": 2020,
    "price": 3298938,
    "mileage": 65937,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Modern Suzuki S-Cross with advanced technology and safety features.",
    "features": [
      "Navigation",
      "Wireless Charging"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 851,
    "make": "Peugeot",
    "model": "108",
    "year": 2023,
    "price": 4565516,
    "mileage": 143669,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Premium Peugeot 108 with luxury features and superior comfort.",
    "features": [
      "Hill Start Assist",
      "4WD/AWD",
      "Ventilated Seats",
      "Traction Control",
      "Stability Control",
      "Android Auto"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 852,
    "make": "Volkswagen",
    "model": "T-Cross",
    "year": 2019,
    "price": 3866027,
    "mileage": 54297,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Modern Volkswagen T-Cross with advanced technology and safety features.",
    "features": [
      "Push Start",
      "Dual Zone AC"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 853,
    "make": "Mitsubishi",
    "model": "Space Star",
    "year": 2016,
    "price": 1507570,
    "mileage": 118232,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Efficient Mitsubishi Space Star with excellent handling and performance.",
    "features": [
      "Alloy Wheels",
      "Roof Rails",
      "Sport Mode",
      "Air Conditioning",
      "Power Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 854,
    "make": "Mercedes",
    "model": "GLE",
    "year": 2020,
    "price": 2734733,
    "mileage": 142048,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Reliable Mercedes GLE with great fuel efficiency and low maintenance.",
    "features": [
      "LED Headlights",
      "Sport Mode",
      "Cruise Control",
      "4WD/AWD",
      "Roof Rails",
      "Heated Seats"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 855,
    "make": "Mercedes",
    "model": "C-Class",
    "year": 2021,
    "price": 4293159,
    "mileage": 141542,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Red",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Robust Mercedes C-Class built for durability and long-term reliability.",
    "features": [
      "Dual Zone AC",
      "Sunroof",
      "EBD",
      "Ventilated Seats",
      "Android Auto"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 856,
    "make": "Toyota",
    "model": "Yaris",
    "year": 2016,
    "price": 4583419,
    "mileage": 10748,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Reliable Toyota Yaris with great fuel efficiency and low maintenance.",
    "features": [
      "ABS",
      "Tow Hitch",
      "4WD/AWD",
      "Stability Control",
      "Tinted Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 857,
    "make": "Suzuki",
    "model": "Baleno",
    "year": 2018,
    "price": 4108154,
    "mileage": 15383,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Robust Suzuki Baleno built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "Traction Control",
      "Backup Camera",
      "EBD"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 858,
    "make": "Mazda",
    "model": "Protege",
    "year": 2017,
    "price": 4269529,
    "mileage": 122356,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Robust Mazda Protege built for durability and long-term reliability.",
    "features": [
      "Stability Control",
      "4WD/AWD",
      "Navigation"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 859,
    "make": "Toyota",
    "model": "Highlander",
    "year": 2024,
    "price": 1839532,
    "mileage": 22355,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Quality Toyota Highlander perfect for daily commuting and family use.",
    "features": [
      "Brake Assist",
      "Air Conditioning",
      "Keyless Entry",
      "Sport Mode"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 860,
    "make": "Mazda",
    "model": "CX-5",
    "year": 2023,
    "price": 963466,
    "mileage": 122495,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Modern Mazda CX-5 with advanced technology and safety features.",
    "features": [
      "Android Auto",
      "Wireless Charging",
      "Keyless Entry",
      "EBD",
      "Sunroof",
      "Alloy Wheels"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 861,
    "make": "Hyundai",
    "model": "Genesis",
    "year": 2016,
    "price": 3902608,
    "mileage": 152749,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Spacious Hyundai Genesis ideal for family trips and business use.",
    "features": [
      "Navigation",
      "ABS",
      "Hill Start Assist"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 862,
    "make": "Toyota",
    "model": "Tundra",
    "year": 2021,
    "price": 2152436,
    "mileage": 113701,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Stylish Toyota Tundra perfect for urban driving and weekend trips.",
    "features": [
      "Air Conditioning",
      "Ventilated Seats",
      "Heated Seats",
      "Cruise Control",
      "Apple CarPlay",
      "Stability Control"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 863,
    "make": "Hyundai",
    "model": "Sonata",
    "year": 2018,
    "price": 963507,
    "mileage": 82840,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Modern Hyundai Sonata with advanced technology and safety features.",
    "features": [
      "Traction Control",
      "Parking Sensors"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 864,
    "make": "Mercedes",
    "model": "S-Class",
    "year": 2017,
    "price": 1827588,
    "mileage": 83324,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Robust Mercedes S-Class built for durability and long-term reliability.",
    "features": [
      "Cruise Control",
      "Air Conditioning",
      "Leather Seats",
      "Heated Seats",
      "Power Mirrors"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 865,
    "make": "Volkswagen",
    "model": "Tiguan",
    "year": 2016,
    "price": 4442098,
    "mileage": 41575,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Stylish Volkswagen Tiguan perfect for urban driving and weekend trips.",
    "features": [
      "Roof Rails",
      "Stability Control",
      "Heated Seats",
      "Cruise Control",
      "Apple CarPlay",
      "Dual Zone AC"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 866,
    "make": "Subaru",
    "model": "Domingo",
    "year": 2020,
    "price": 4505287,
    "mileage": 143010,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Comfortable Subaru Domingo offering smooth ride and premium feel.",
    "features": [
      "Cruise Control",
      "Power Windows",
      "Bluetooth",
      "Fog Lights",
      "Eco Mode",
      "Keyless Entry"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 867,
    "make": "Mazda",
    "model": "3",
    "year": 2017,
    "price": 3688454,
    "mileage": 144651,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Quality Mazda 3 perfect for daily commuting and family use.",
    "features": [
      "Apple CarPlay",
      "Tow Hitch",
      "Multiple Airbags",
      "Power Windows"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 868,
    "make": "Mazda",
    "model": "3",
    "year": 2020,
    "price": 4010924,
    "mileage": 99135,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Robust Mazda 3 built for durability and long-term reliability.",
    "features": [
      "Roof Rails",
      "Alloy Wheels",
      "Hill Start Assist",
      "LED Headlights",
      "Parking Sensors"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 869,
    "make": "Volkswagen",
    "model": "Jetta",
    "year": 2020,
    "price": 3311462,
    "mileage": 31010,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Premium Volkswagen Jetta with luxury features and superior comfort.",
    "features": [
      "Sunroof",
      "Android Auto",
      "Dual Zone AC",
      "Roof Rails",
      "4WD/AWD"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 870,
    "make": "Subaru",
    "model": "XV",
    "year": 2019,
    "price": 1520830,
    "mileage": 140087,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Premium Subaru XV with luxury features and superior comfort.",
    "features": [
      "Fog Lights",
      "Roof Rails",
      "Sunroof",
      "4WD/AWD",
      "Navigation"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 871,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2020,
    "price": 2858549,
    "mileage": 9302,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Efficient Mitsubishi Carisma with excellent handling and performance.",
    "features": [
      "Bluetooth",
      "EBD",
      "Alloy Wheels",
      "Keyless Entry",
      "Navigation"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 872,
    "make": "Volkswagen",
    "model": "Jetta",
    "year": 2018,
    "price": 4765963,
    "mileage": 49807,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Well-maintained Volkswagen Jetta with excellent performance and reliability.",
    "features": [
      "Backup Camera",
      "Eco Mode"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 873,
    "make": "Hyundai",
    "model": "Kona",
    "year": 2016,
    "price": 1187297,
    "mileage": 84350,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Modern Hyundai Kona with advanced technology and safety features.",
    "features": [
      "Alloy Wheels",
      "Tow Hitch",
      "Sport Mode"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 874,
    "make": "Mercedes",
    "model": "B-Class",
    "year": 2015,
    "price": 2971365,
    "mileage": 102647,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Well-maintained Mercedes B-Class with excellent performance and reliability.",
    "features": [
      "Eco Mode",
      "Alloy Wheels",
      "Backup Camera",
      "Traction Control"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 875,
    "make": "Peugeot",
    "model": "Partner",
    "year": 2022,
    "price": 2697502,
    "mileage": 68960,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Black",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Modern Peugeot Partner with advanced technology and safety features.",
    "features": [
      "Brake Assist",
      "Tow Hitch",
      "Android Auto"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 876,
    "make": "BMW",
    "model": "5 Series",
    "year": 2023,
    "price": 807181,
    "mileage": 136750,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Comfortable BMW 5 Series offering smooth ride and premium feel.",
    "features": [
      "Alloy Wheels",
      "Ventilated Seats",
      "Cruise Control",
      "Parking Sensors",
      "Traction Control",
      "4WD/AWD"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 877,
    "make": "Mazda",
    "model": "RX-8",
    "year": 2024,
    "price": 2178901,
    "mileage": 135526,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Stylish Mazda RX-8 perfect for urban driving and weekend trips.",
    "features": [
      "Premium Sound",
      "Bluetooth",
      "EBD"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 878,
    "make": "Subaru",
    "model": "Baja",
    "year": 2018,
    "price": 2114245,
    "mileage": 11801,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Stylish Subaru Baja perfect for urban driving and weekend trips.",
    "features": [
      "Stability Control",
      "Air Conditioning",
      "Heated Seats",
      "Leather Seats"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 879,
    "make": "Mitsubishi",
    "model": "Space Star",
    "year": 2017,
    "price": 4189933,
    "mileage": 56542,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Comfortable Mitsubishi Space Star offering smooth ride and premium feel.",
    "features": [
      "Backup Camera",
      "Wireless Charging"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 880,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2015,
    "price": 2155517,
    "mileage": 39824,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Stylish Ford Fiesta perfect for urban driving and weekend trips.",
    "features": [
      "Wireless Charging",
      "Sport Mode",
      "Roof Rails",
      "ABS"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 881,
    "make": "Peugeot",
    "model": "108",
    "year": 2018,
    "price": 1318583,
    "mileage": 81807,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Premium Peugeot 108 with luxury features and superior comfort.",
    "features": [
      "EBD",
      "Air Conditioning",
      "Dual Zone AC",
      "Sunroof",
      "Leather Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 882,
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "year": 2016,
    "price": 2700023,
    "mileage": 11191,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Well-maintained Mitsubishi Eclipse Cross with excellent performance and reliability.",
    "features": [
      "Air Conditioning",
      "Tinted Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 883,
    "make": "Mitsubishi",
    "model": "Challenger",
    "year": 2020,
    "price": 4403307,
    "mileage": 12866,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Robust Mitsubishi Challenger built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "Stability Control",
      "Brake Assist",
      "EBD"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 884,
    "make": "Mitsubishi",
    "model": "Lancer",
    "year": 2017,
    "price": 4167569,
    "mileage": 73374,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Quality Mitsubishi Lancer perfect for daily commuting and family use.",
    "features": [
      "Air Conditioning",
      "Dual Zone AC",
      "Parking Sensors",
      "Leather Seats"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 885,
    "make": "Mazda",
    "model": "CX-30",
    "year": 2020,
    "price": 4467920,
    "mileage": 68477,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-premio.jpg",
    "description": "Quality Mazda CX-30 perfect for daily commuting and family use.",
    "features": [
      "Dual Zone AC",
      "Stability Control"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 886,
    "make": "BMW",
    "model": "5 Series",
    "year": 2016,
    "price": 1448921,
    "mileage": 99610,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Modern BMW 5 Series with advanced technology and safety features.",
    "features": [
      "Premium Sound",
      "Wireless Charging",
      "Alloy Wheels",
      "Stability Control"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 887,
    "make": "Mazda",
    "model": "BT-50",
    "year": 2020,
    "price": 3287709,
    "mileage": 152867,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Efficient Mazda BT-50 with excellent handling and performance.",
    "features": [
      "Cruise Control",
      "Eco Mode",
      "Tow Hitch",
      "Dual Zone AC",
      "Fog Lights"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 888,
    "make": "Peugeot",
    "model": "3008",
    "year": 2015,
    "price": 1551280,
    "mileage": 70850,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Well-maintained Peugeot 3008 with excellent performance and reliability.",
    "features": [
      "Parking Sensors",
      "Alloy Wheels"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 889,
    "make": "Volkswagen",
    "model": "T-Cross",
    "year": 2016,
    "price": 2947145,
    "mileage": 150628,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Modern Volkswagen T-Cross with advanced technology and safety features.",
    "features": [
      "Premium Sound",
      "EBD",
      "Navigation",
      "Traction Control"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 890,
    "make": "Peugeot",
    "model": "iOn",
    "year": 2017,
    "price": 1154464,
    "mileage": 117605,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Robust Peugeot iOn built for durability and long-term reliability.",
    "features": [
      "Leather Seats",
      "Backup Camera",
      "Power Mirrors",
      "Sport Mode"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 891,
    "make": "Mitsubishi",
    "model": "Mirage",
    "year": 2022,
    "price": 3119784,
    "mileage": 19791,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Well-maintained Mitsubishi Mirage with excellent performance and reliability.",
    "features": [
      "Alloy Wheels",
      "Premium Sound"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 892,
    "make": "Subaru",
    "model": "Baja",
    "year": 2015,
    "price": 1010948,
    "mileage": 96713,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Reliable Subaru Baja with great fuel efficiency and low maintenance.",
    "features": [
      "Tinted Windows",
      "Brake Assist",
      "Cruise Control"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 893,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2015,
    "price": 1429866,
    "mileage": 74110,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Well-maintained Toyota Corolla with excellent performance and reliability.",
    "features": [
      "Heated Seats",
      "Tow Hitch",
      "Eco Mode",
      "Cruise Control",
      "Android Auto"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 894,
    "make": "BMW",
    "model": "M5",
    "year": 2015,
    "price": 2653222,
    "mileage": 74752,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Efficient BMW M5 with excellent handling and performance.",
    "features": [
      "Tow Hitch",
      "Heated Seats"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 895,
    "make": "Suzuki",
    "model": "Grand Vitara",
    "year": 2017,
    "price": 2473037,
    "mileage": 103666,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Comfortable Suzuki Grand Vitara offering smooth ride and premium feel.",
    "features": [
      "Stability Control",
      "LED Headlights"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 896,
    "make": "Mercedes",
    "model": "S-Class",
    "year": 2021,
    "price": 4680375,
    "mileage": 102398,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Stylish Mercedes S-Class perfect for urban driving and weekend trips.",
    "features": [
      "Alloy Wheels",
      "Sport Mode"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 897,
    "make": "Kia",
    "model": "Sorento",
    "year": 2020,
    "price": 3861296,
    "mileage": 29393,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Robust Kia Sorento built for durability and long-term reliability.",
    "features": [
      "Bluetooth",
      "Fog Lights"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 898,
    "make": "Mitsubishi",
    "model": "Attrage",
    "year": 2021,
    "price": 4556932,
    "mileage": 139927,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Spacious Mitsubishi Attrage ideal for family trips and business use.",
    "features": [
      "Ventilated Seats",
      "Tow Hitch",
      "Navigation"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 899,
    "make": "Toyota",
    "model": "Auris",
    "year": 2021,
    "price": 2664463,
    "mileage": 81884,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Quality Toyota Auris perfect for daily commuting and family use.",
    "features": [
      "Premium Sound",
      "Eco Mode"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 900,
    "make": "Honda",
    "model": "Jazz",
    "year": 2023,
    "price": 2299857,
    "mileage": 106401,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Reliable Honda Jazz with great fuel efficiency and low maintenance.",
    "features": [
      "Push Start",
      "Fog Lights",
      "Tow Hitch",
      "Bluetooth",
      "Roof Rails"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 901,
    "make": "Mitsubishi",
    "model": "Galant",
    "year": 2020,
    "price": 1656522,
    "mileage": 61521,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Well-maintained Mitsubishi Galant with excellent performance and reliability.",
    "features": [
      "EBD",
      "Backup Camera",
      "4WD/AWD",
      "Traction Control",
      "Parking Sensors"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 902,
    "make": "Nissan",
    "model": "Leaf",
    "year": 2019,
    "price": 4205174,
    "mileage": 33614,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Spacious Nissan Leaf ideal for family trips and business use.",
    "features": [
      "Cruise Control",
      "Bluetooth",
      "ABS",
      "Apple CarPlay"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 903,
    "make": "Honda",
    "model": "Accord",
    "year": 2019,
    "price": 1152448,
    "mileage": 105581,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Well-maintained Honda Accord with excellent performance and reliability.",
    "features": [
      "LED Headlights",
      "4WD/AWD",
      "Hill Start Assist",
      "EBD",
      "Wireless Charging"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 904,
    "make": "BMW",
    "model": "1 Series",
    "year": 2024,
    "price": 851037,
    "mileage": 98450,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Stylish BMW 1 Series perfect for urban driving and weekend trips.",
    "features": [
      "Hill Start Assist",
      "Backup Camera"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 905,
    "make": "Peugeot",
    "model": "508",
    "year": 2024,
    "price": 3546911,
    "mileage": 21978,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Quality Peugeot 508 perfect for daily commuting and family use.",
    "features": [
      "Backup Camera",
      "Navigation"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 906,
    "make": "Mercedes",
    "model": "Sprinter",
    "year": 2022,
    "price": 2667056,
    "mileage": 85320,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Modern Mercedes Sprinter with advanced technology and safety features.",
    "features": [
      "Leather Seats",
      "Traction Control",
      "Cruise Control",
      "Parking Sensors",
      "EBD"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 907,
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2020,
    "price": 2347510,
    "mileage": 125790,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Stylish Suzuki Wagon R perfect for urban driving and weekend trips.",
    "features": [
      "Bluetooth",
      "Multiple Airbags",
      "Heated Seats",
      "Fog Lights"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 908,
    "make": "Ford",
    "model": "S-Max",
    "year": 2019,
    "price": 2331202,
    "mileage": 12577,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Reliable Ford S-Max with great fuel efficiency and low maintenance.",
    "features": [
      "ABS",
      "Dual Zone AC",
      "Hill Start Assist",
      "Backup Camera",
      "Android Auto"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 909,
    "make": "Ford",
    "model": "Mustang",
    "year": 2020,
    "price": 2369701,
    "mileage": 85923,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Quality Ford Mustang perfect for daily commuting and family use.",
    "features": [
      "Fog Lights",
      "Android Auto",
      "Brake Assist",
      "Power Mirrors",
      "Sunroof"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 910,
    "make": "Kia",
    "model": "Cadenza",
    "year": 2018,
    "price": 2329141,
    "mileage": 146030,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Comfortable Kia Cadenza offering smooth ride and premium feel.",
    "features": [
      "Android Auto",
      "Alloy Wheels",
      "Power Windows",
      "Stability Control"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 911,
    "make": "Nissan",
    "model": "Juke",
    "year": 2022,
    "price": 2002344,
    "mileage": 69041,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Comfortable Nissan Juke offering smooth ride and premium feel.",
    "features": [
      "Sunroof",
      "Dual Zone AC",
      "Cruise Control",
      "Parking Sensors",
      "Hill Start Assist",
      "Heated Seats"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 912,
    "make": "Peugeot",
    "model": "Boxer",
    "year": 2023,
    "price": 4657191,
    "mileage": 18531,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Spacious Peugeot Boxer ideal for family trips and business use.",
    "features": [
      "Wireless Charging",
      "Roof Rails",
      "Fog Lights",
      "Heated Seats"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 913,
    "make": "Ford",
    "model": "Mustang",
    "year": 2015,
    "price": 4070872,
    "mileage": 67390,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Comfortable Ford Mustang offering smooth ride and premium feel.",
    "features": [
      "Keyless Entry",
      "Push Start",
      "Sunroof",
      "Apple CarPlay"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 914,
    "make": "Mazda",
    "model": "CX-3",
    "year": 2016,
    "price": 2442692,
    "mileage": 128734,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Modern Mazda CX-3 with advanced technology and safety features.",
    "features": [
      "Push Start",
      "Android Auto",
      "Hill Start Assist",
      "Power Windows"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 915,
    "make": "Renault",
    "model": "Clio",
    "year": 2022,
    "price": 830688,
    "mileage": 30449,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Robust Renault Clio built for durability and long-term reliability.",
    "features": [
      "Sunroof",
      "Power Mirrors",
      "Leather Seats",
      "Power Windows",
      "Hill Start Assist"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 916,
    "make": "Peugeot",
    "model": "407",
    "year": 2016,
    "price": 3659998,
    "mileage": 128788,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Premium Peugeot 407 with luxury features and superior comfort.",
    "features": [
      "Android Auto",
      "Multiple Airbags",
      "Fog Lights",
      "Navigation",
      "4WD/AWD",
      "Power Windows"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 917,
    "make": "Mitsubishi",
    "model": "Carisma",
    "year": 2018,
    "price": 4703159,
    "mileage": 20742,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Robust Mitsubishi Carisma built for durability and long-term reliability.",
    "features": [
      "Push Start",
      "Fog Lights",
      "Backup Camera",
      "Power Mirrors",
      "Stability Control",
      "4WD/AWD"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 918,
    "make": "Mazda",
    "model": "MX-5",
    "year": 2024,
    "price": 4316633,
    "mileage": 91170,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Stylish Mazda MX-5 perfect for urban driving and weekend trips.",
    "features": [
      "EBD",
      "Push Start",
      "Parking Sensors"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 919,
    "make": "Volkswagen",
    "model": "T-Cross",
    "year": 2021,
    "price": 2386229,
    "mileage": 94765,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Stylish Volkswagen T-Cross perfect for urban driving and weekend trips.",
    "features": [
      "Tinted Windows",
      "Cruise Control"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 920,
    "make": "Mercedes",
    "model": "B-Class",
    "year": 2024,
    "price": 3770424,
    "mileage": 86258,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Comfortable Mercedes B-Class offering smooth ride and premium feel.",
    "features": [
      "Power Windows",
      "Push Start",
      "Stability Control",
      "Cruise Control",
      "Fog Lights",
      "Roof Rails"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 921,
    "make": "Suzuki",
    "model": "XL7",
    "year": 2024,
    "price": 1950800,
    "mileage": 131949,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Reliable Suzuki XL7 with great fuel efficiency and low maintenance.",
    "features": [
      "EBD",
      "Multiple Airbags",
      "LED Headlights"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 922,
    "make": "Subaru",
    "model": "BRZ",
    "year": 2021,
    "price": 2462532,
    "mileage": 114302,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Premium Subaru BRZ with luxury features and superior comfort.",
    "features": [
      "LED Headlights",
      "4WD/AWD",
      "Eco Mode",
      "Ventilated Seats"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 923,
    "make": "Mazda",
    "model": "CX-3",
    "year": 2020,
    "price": 4589495,
    "mileage": 24419,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Black",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Stylish Mazda CX-3 perfect for urban driving and weekend trips.",
    "features": [
      "Hill Start Assist",
      "Ventilated Seats",
      "Roof Rails",
      "Heated Seats",
      "4WD/AWD"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 924,
    "make": "Mitsubishi",
    "model": "Pajero",
    "year": 2016,
    "price": 1238562,
    "mileage": 129971,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Robust Mitsubishi Pajero built for durability and long-term reliability.",
    "features": [
      "4WD/AWD",
      "Premium Sound",
      "Sunroof",
      "Leather Seats",
      "Hill Start Assist",
      "Power Windows"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 925,
    "make": "Volkswagen",
    "model": "Golf",
    "year": 2021,
    "price": 3342361,
    "mileage": 126552,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Spacious Volkswagen Golf ideal for family trips and business use.",
    "features": [
      "Heated Seats",
      "Traction Control",
      "Cruise Control",
      "4WD/AWD"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 926,
    "make": "BMW",
    "model": "X6",
    "year": 2018,
    "price": 3129621,
    "mileage": 56533,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Premium BMW X6 with luxury features and superior comfort.",
    "features": [
      "Bluetooth",
      "Brake Assist",
      "Stability Control",
      "Wireless Charging",
      "Air Conditioning",
      "Sunroof"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 927,
    "make": "Hyundai",
    "model": "i30",
    "year": 2021,
    "price": 2936435,
    "mileage": 40745,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Spacious Hyundai i30 ideal for family trips and business use.",
    "features": [
      "Bluetooth",
      "Sport Mode",
      "Tinted Windows"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 928,
    "make": "Mitsubishi",
    "model": "Space Star",
    "year": 2018,
    "price": 1799992,
    "mileage": 13983,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/Nissan X-Trail.jpg",
    "description": "Modern Mitsubishi Space Star with advanced technology and safety features.",
    "features": [
      "Heated Seats",
      "4WD/AWD",
      "LED Headlights"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 929,
    "make": "Mitsubishi",
    "model": "ASX",
    "year": 2021,
    "price": 2706430,
    "mileage": 48481,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Comfortable Mitsubishi ASX offering smooth ride and premium feel.",
    "features": [
      "Backup Camera",
      "Wireless Charging",
      "Power Windows"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 930,
    "make": "Peugeot",
    "model": "508",
    "year": 2018,
    "price": 2519393,
    "mileage": 108002,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Stylish Peugeot 508 perfect for urban driving and weekend trips.",
    "features": [
      "Power Mirrors",
      "Air Conditioning",
      "EBD",
      "Premium Sound",
      "Hill Start Assist",
      "Sunroof"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 931,
    "make": "Hyundai",
    "model": "Ioniq",
    "year": 2017,
    "price": 2804814,
    "mileage": 153790,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Quality Hyundai Ioniq perfect for daily commuting and family use.",
    "features": [
      "4WD/AWD",
      "Roof Rails",
      "Premium Sound",
      "Bluetooth"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 932,
    "make": "Renault",
    "model": "Wind",
    "year": 2023,
    "price": 4701987,
    "mileage": 57774,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Well-maintained Renault Wind with excellent performance and reliability.",
    "features": [
      "LED Headlights",
      "Eco Mode"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 933,
    "make": "Renault",
    "model": "Twingo",
    "year": 2016,
    "price": 3697295,
    "mileage": 135529,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Efficient Renault Twingo with excellent handling and performance.",
    "features": [
      "Stability Control",
      "LED Headlights",
      "Navigation",
      "Apple CarPlay",
      "4WD/AWD"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 934,
    "make": "Mitsubishi",
    "model": "ASX",
    "year": 2021,
    "price": 2674815,
    "mileage": 12522,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Stylish Mitsubishi ASX perfect for urban driving and weekend trips.",
    "features": [
      "Dual Zone AC",
      "Android Auto",
      "Heated Seats"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 935,
    "make": "Renault",
    "model": "Clio",
    "year": 2024,
    "price": 1555141,
    "mileage": 128114,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Modern Renault Clio with advanced technology and safety features.",
    "features": [
      "Hill Start Assist",
      "Multiple Airbags",
      "Stability Control",
      "Sport Mode"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 936,
    "make": "Honda",
    "model": "CR-V",
    "year": 2023,
    "price": 2743508,
    "mileage": 121482,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "2.2L",
    "color": "Green",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Well-maintained Honda CR-V with excellent performance and reliability.",
    "features": [
      "Dual Zone AC",
      "Bluetooth",
      "LED Headlights",
      "Air Conditioning"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 937,
    "make": "Subaru",
    "model": "SVX",
    "year": 2022,
    "price": 2392804,
    "mileage": 121633,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Gray",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Well-maintained Subaru SVX with excellent performance and reliability.",
    "features": [
      "Cruise Control",
      "Power Mirrors",
      "Sunroof",
      "Stability Control",
      "Hill Start Assist",
      "ABS"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 938,
    "make": "Mazda",
    "model": "CX-5",
    "year": 2020,
    "price": 3973371,
    "mileage": 102097,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Modern Mazda CX-5 with advanced technology and safety features.",
    "features": [
      "Tinted Windows",
      "Alloy Wheels",
      "Stability Control"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 939,
    "make": "Volkswagen",
    "model": "Jetta",
    "year": 2024,
    "price": 4542625,
    "mileage": 70980,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Robust Volkswagen Jetta built for durability and long-term reliability.",
    "features": [
      "Dual Zone AC",
      "Sport Mode",
      "Sunroof",
      "Heated Seats"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 940,
    "make": "Honda",
    "model": "Pilot",
    "year": 2024,
    "price": 4135189,
    "mileage": 82817,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Maroon",
    "condition": "Used",
    "img": "images/honda-insight.jpg",
    "description": "Spacious Honda Pilot ideal for family trips and business use.",
    "features": [
      "Tinted Windows"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 941,
    "make": "Nissan",
    "model": "Altima",
    "year": 2022,
    "price": 1272865,
    "mileage": 114857,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.6L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Comfortable Nissan Altima offering smooth ride and premium feel.",
    "features": [
      "Sunroof",
      "Parking Sensors",
      "Premium Sound",
      "Hill Start Assist",
      "Keyless Entry"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 942,
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2023,
    "price": 4297544,
    "mileage": 99021,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Quality Honda Ridgeline perfect for daily commuting and family use.",
    "features": [
      "Fog Lights",
      "Multiple Airbags",
      "Leather Seats"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 943,
    "make": "Mazda",
    "model": "3",
    "year": 2021,
    "price": 1487621,
    "mileage": 17319,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Spacious Mazda 3 ideal for family trips and business use.",
    "features": [
      "Brake Assist",
      "Sunroof",
      "Power Mirrors",
      "Android Auto",
      "LED Headlights",
      "Keyless Entry"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 944,
    "make": "Hyundai",
    "model": "Genesis",
    "year": 2023,
    "price": 3003641,
    "mileage": 15748,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "White",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Efficient Hyundai Genesis with excellent handling and performance.",
    "features": [
      "Tow Hitch",
      "Stability Control",
      "Tinted Windows",
      "Air Conditioning",
      "Sport Mode"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 945,
    "make": "Suzuki",
    "model": "Swift",
    "year": 2018,
    "price": 4592839,
    "mileage": 131386,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Premium Suzuki Swift with luxury features and superior comfort.",
    "features": [
      "Navigation",
      "Leather Seats",
      "Stability Control"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 946,
    "make": "Ford",
    "model": "Fiesta",
    "year": 2024,
    "price": 1569407,
    "mileage": 81831,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Reliable Ford Fiesta with great fuel efficiency and low maintenance.",
    "features": [
      "Android Auto",
      "Alloy Wheels",
      "Stability Control",
      "Sunroof",
      "Navigation"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 947,
    "make": "BMW",
    "model": "3 Series",
    "year": 2020,
    "price": 4060632,
    "mileage": 88211,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Reliable BMW 3 Series with great fuel efficiency and low maintenance.",
    "features": [
      "Apple CarPlay",
      "Keyless Entry"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 948,
    "make": "Mercedes",
    "model": "GLA",
    "year": 2019,
    "price": 3453032,
    "mileage": 57087,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-civic.jpg",
    "description": "Robust Mercedes GLA built for durability and long-term reliability.",
    "features": [
      "Alloy Wheels",
      "Fog Lights",
      "Backup Camera",
      "Wireless Charging"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 949,
    "make": "Subaru",
    "model": "XV",
    "year": 2023,
    "price": 2787507,
    "mileage": 121927,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Spacious Subaru XV ideal for family trips and business use.",
    "features": [
      "Sport Mode",
      "Sunroof",
      "Leather Seats",
      "EBD"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 950,
    "make": "Mazda",
    "model": "RX-8",
    "year": 2022,
    "price": 2683766,
    "mileage": 116180,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Spacious Mazda RX-8 ideal for family trips and business use.",
    "features": [
      "EBD",
      "Leather Seats",
      "Sport Mode",
      "Power Mirrors",
      "Premium Sound",
      "Heated Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 951,
    "make": "Hyundai",
    "model": "Staria",
    "year": 2017,
    "price": 2190578,
    "mileage": 150102,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Well-maintained Hyundai Staria with excellent performance and reliability.",
    "features": [
      "Keyless Entry",
      "Backup Camera",
      "Bluetooth"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 952,
    "make": "Volkswagen",
    "model": "T-Cross",
    "year": 2024,
    "price": 3033565,
    "mileage": 119102,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Comfortable Volkswagen T-Cross offering smooth ride and premium feel.",
    "features": [
      "4WD/AWD",
      "Keyless Entry",
      "Heated Seats",
      "Fog Lights"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 953,
    "make": "BMW",
    "model": "X6",
    "year": 2019,
    "price": 3386368,
    "mileage": 153791,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Red",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Modern BMW X6 with advanced technology and safety features.",
    "features": [
      "Apple CarPlay",
      "Power Mirrors",
      "Alloy Wheels"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 954,
    "make": "Suzuki",
    "model": "Jimny",
    "year": 2015,
    "price": 4368894,
    "mileage": 68663,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "4.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Well-maintained Suzuki Jimny with excellent performance and reliability.",
    "features": [
      "Backup Camera",
      "EBD"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 955,
    "make": "Hyundai",
    "model": "Tucson",
    "year": 2021,
    "price": 2686865,
    "mileage": 122343,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-landcruiser.jpg",
    "description": "Stylish Hyundai Tucson perfect for urban driving and weekend trips.",
    "features": [
      "Heated Seats",
      "Sport Mode",
      "Tinted Windows"
    ],
    "location": "Kakamega",
    "available": true,
    "featured": false
  },
  {
    "id": 956,
    "make": "Volkswagen",
    "model": "Polo",
    "year": 2015,
    "price": 4420417,
    "mileage": 84611,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-cx5.jpg",
    "description": "Stylish Volkswagen Polo perfect for urban driving and weekend trips.",
    "features": [
      "Stability Control",
      "Roof Rails",
      "Hill Start Assist",
      "Traction Control"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 957,
    "make": "Mercedes",
    "model": "S-Class",
    "year": 2016,
    "price": 2447401,
    "mileage": 130270,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Premium Mercedes S-Class with luxury features and superior comfort.",
    "features": [
      "Heated Seats",
      "Air Conditioning"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 958,
    "make": "Subaru",
    "model": "WRX",
    "year": 2015,
    "price": 830311,
    "mileage": 110999,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/bmw-x5.jpg",
    "description": "Premium Subaru WRX with luxury features and superior comfort.",
    "features": [
      "Navigation",
      "4WD/AWD",
      "Fog Lights",
      "Wireless Charging"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 959,
    "make": "Peugeot",
    "model": "2008",
    "year": 2019,
    "price": 3598287,
    "mileage": 147363,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Robust Peugeot 2008 built for durability and long-term reliability.",
    "features": [
      "Hill Start Assist",
      "Tinted Windows",
      "Parking Sensors",
      "Stability Control",
      "Ventilated Seats"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 960,
    "make": "Kia",
    "model": "Forte",
    "year": 2021,
    "price": 4373161,
    "mileage": 11344,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Comfortable Kia Forte offering smooth ride and premium feel.",
    "features": [
      "Cruise Control",
      "Alloy Wheels"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 961,
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "year": 2020,
    "price": 3653248,
    "mileage": 53855,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.6L",
    "color": "Black",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Modern Mitsubishi Eclipse Cross with advanced technology and safety features.",
    "features": [
      "Tinted Windows",
      "Tow Hitch"
    ],
    "location": "Thika",
    "available": true,
    "featured": false
  },
  {
    "id": 962,
    "make": "Nissan",
    "model": "Note",
    "year": 2019,
    "price": 1547450,
    "mileage": 27009,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Stylish Nissan Note perfect for urban driving and weekend trips.",
    "features": [
      "Stability Control",
      "ABS",
      "LED Headlights",
      "Hill Start Assist",
      "Android Auto"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 963,
    "make": "Nissan",
    "model": "Note",
    "year": 2016,
    "price": 4770845,
    "mileage": 64508,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Well-maintained Nissan Note with excellent performance and reliability.",
    "features": [
      "Fog Lights",
      "Power Mirrors",
      "Keyless Entry"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 964,
    "make": "Suzuki",
    "model": "Celerio",
    "year": 2019,
    "price": 1135582,
    "mileage": 132952,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/subaru-impreza.jpg",
    "description": "Premium Suzuki Celerio with luxury features and superior comfort.",
    "features": [
      "Push Start",
      "Apple CarPlay",
      "Dual Zone AC",
      "Navigation"
    ],
    "location": "Garissa",
    "available": true,
    "featured": false
  },
  {
    "id": 965,
    "make": "Subaru",
    "model": "Domingo",
    "year": 2022,
    "price": 3936675,
    "mileage": 152910,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Spacious Subaru Domingo ideal for family trips and business use.",
    "features": [
      "Android Auto",
      "Sunroof",
      "Leather Seats"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 966,
    "make": "Peugeot",
    "model": "407",
    "year": 2018,
    "price": 3062973,
    "mileage": 11085,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/subaru-brz.jpg",
    "description": "Stylish Peugeot 407 perfect for urban driving and weekend trips.",
    "features": [
      "Android Auto",
      "Power Mirrors",
      "Wireless Charging",
      "Apple CarPlay"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 967,
    "make": "Hyundai",
    "model": "Kona",
    "year": 2016,
    "price": 4239176,
    "mileage": 46696,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "1.3L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Stylish Hyundai Kona perfect for urban driving and weekend trips.",
    "features": [
      "Backup Camera",
      "ABS",
      "Heated Seats",
      "Navigation",
      "Eco Mode"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 968,
    "make": "Hyundai",
    "model": "Ioniq",
    "year": 2019,
    "price": 3109760,
    "mileage": 151695,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.0L",
    "color": "Red",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Modern Hyundai Ioniq with advanced technology and safety features.",
    "features": [
      "Navigation",
      "Keyless Entry"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 969,
    "make": "Subaru",
    "model": "WRX",
    "year": 2024,
    "price": 1811961,
    "mileage": 108449,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Premium Subaru WRX with luxury features and superior comfort.",
    "features": [
      "Sport Mode",
      "Tow Hitch",
      "Eco Mode",
      "Multiple Airbags",
      "Premium Sound",
      "Sunroof"
    ],
    "location": "Embu",
    "available": true,
    "featured": false
  },
  {
    "id": 970,
    "make": "Kia",
    "model": "Telluride",
    "year": 2019,
    "price": 4138108,
    "mileage": 43911,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/bmw-1series.jpg",
    "description": "Reliable Kia Telluride with great fuel efficiency and low maintenance.",
    "features": [
      "Air Conditioning",
      "Tow Hitch",
      "Leather Seats",
      "Keyless Entry",
      "Premium Sound"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 971,
    "make": "Hyundai",
    "model": "Staria",
    "year": 2017,
    "price": 4149141,
    "mileage": 110515,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/BMW 320i.jpg",
    "description": "Well-maintained Hyundai Staria with excellent performance and reliability.",
    "features": [
      "Power Windows",
      "Multiple Airbags",
      "Sunroof",
      "Brake Assist",
      "Tinted Windows",
      "Roof Rails"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 972,
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "year": 2017,
    "price": 3633007,
    "mileage": 17388,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Reliable Mitsubishi Eclipse Cross with great fuel efficiency and low maintenance.",
    "features": [
      "Multiple Airbags",
      "Stability Control",
      "Alloy Wheels",
      "Heated Seats"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 973,
    "make": "Mitsubishi",
    "model": "Challenger",
    "year": 2019,
    "price": 1561540,
    "mileage": 92343,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Red",
    "condition": "Used",
    "img": "images/mazda-6.jpg",
    "description": "Quality Mitsubishi Challenger perfect for daily commuting and family use.",
    "features": [
      "Keyless Entry",
      "Cruise Control",
      "Premium Sound",
      "Tow Hitch",
      "Dual Zone AC",
      "Parking Sensors"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 974,
    "make": "Nissan",
    "model": "Serena",
    "year": 2023,
    "price": 1392198,
    "mileage": 131712,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Spacious Nissan Serena ideal for family trips and business use.",
    "features": [
      "Hill Start Assist",
      "Stability Control"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 975,
    "make": "Subaru",
    "model": "SVX",
    "year": 2023,
    "price": 1443873,
    "mileage": 78900,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Reliable Subaru SVX with great fuel efficiency and low maintenance.",
    "features": [
      "Tinted Windows",
      "Stability Control",
      "Wireless Charging",
      "Power Windows",
      "Heated Seats",
      "Sport Mode"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 976,
    "make": "Mercedes",
    "model": "C-Class",
    "year": 2023,
    "price": 984441,
    "mileage": 95943,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "3.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/subaru-outback.jpg",
    "description": "Robust Mercedes C-Class built for durability and long-term reliability.",
    "features": [
      "Apple CarPlay",
      "Cruise Control",
      "Push Start"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 977,
    "make": "Hyundai",
    "model": "Veloster",
    "year": 2017,
    "price": 979901,
    "mileage": 149383,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "1.5L",
    "color": "Silver",
    "condition": "Used",
    "img": "images/nissan-serena.jpg",
    "description": "Stylish Hyundai Veloster perfect for urban driving and weekend trips.",
    "features": [
      "Keyless Entry",
      "Cruise Control"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 978,
    "make": "Ford",
    "model": "Explorer",
    "year": 2018,
    "price": 1561878,
    "mileage": 65955,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.8L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/Toyota Corolla.avif",
    "description": "Well-maintained Ford Explorer with excellent performance and reliability.",
    "features": [
      "Tinted Windows",
      "Leather Seats",
      "ABS",
      "Power Mirrors",
      "Apple CarPlay",
      "Keyless Entry"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 979,
    "make": "Mercedes",
    "model": "GLS",
    "year": 2015,
    "price": 4790686,
    "mileage": 133173,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/bmw-z4.jpg",
    "description": "Spacious Mercedes GLS ideal for family trips and business use.",
    "features": [
      "Keyless Entry",
      "ABS",
      "Stability Control",
      "Wireless Charging",
      "Eco Mode"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 980,
    "make": "Subaru",
    "model": "Forester",
    "year": 2021,
    "price": 3476375,
    "mileage": 130903,
    "fuelType": "hybrid",
    "transmission": "manual",
    "engineSize": "3.0L",
    "color": "Purple",
    "condition": "Used",
    "img": "images/nissan-note.jpg",
    "description": "Spacious Subaru Forester ideal for family trips and business use.",
    "features": [
      "Ventilated Seats",
      "Tow Hitch",
      "Sport Mode",
      "Keyless Entry",
      "Fog Lights"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 981,
    "make": "BMW",
    "model": "Z4",
    "year": 2015,
    "price": 1650618,
    "mileage": 99004,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Robust BMW Z4 built for durability and long-term reliability.",
    "features": [
      "Bluetooth",
      "Hill Start Assist",
      "Eco Mode",
      "Multiple Airbags"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 982,
    "make": "Honda",
    "model": "City",
    "year": 2016,
    "price": 2702582,
    "mileage": 62029,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.5L",
    "color": "Yellow",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Premium Honda City with luxury features and superior comfort.",
    "features": [
      "Roof Rails",
      "Apple CarPlay",
      "Eco Mode"
    ],
    "location": "Nyeri",
    "available": true,
    "featured": false
  },
  {
    "id": 983,
    "make": "Peugeot",
    "model": "407",
    "year": 2019,
    "price": 3413562,
    "mileage": 126045,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.3L",
    "color": "Green",
    "condition": "Used",
    "img": "images/nissan-teana.jpg",
    "description": "Quality Peugeot 407 perfect for daily commuting and family use.",
    "features": [
      "Push Start",
      "Bluetooth",
      "4WD/AWD",
      "Ventilated Seats"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 984,
    "make": "Toyota",
    "model": "Tacoma",
    "year": 2022,
    "price": 2680555,
    "mileage": 43108,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.8L",
    "color": "Green",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Reliable Toyota Tacoma with great fuel efficiency and low maintenance.",
    "features": [
      "Push Start",
      "Stability Control",
      "Brake Assist",
      "Android Auto",
      "Air Conditioning",
      "Apple CarPlay"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 985,
    "make": "Subaru",
    "model": "Legacy",
    "year": 2015,
    "price": 3496176,
    "mileage": 96537,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/honda-accord.jpg",
    "description": "Quality Subaru Legacy perfect for daily commuting and family use.",
    "features": [
      "Wireless Charging",
      "Keyless Entry",
      "Power Mirrors",
      "Dual Zone AC"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 986,
    "make": "Toyota",
    "model": "Vitz",
    "year": 2019,
    "price": 4327968,
    "mileage": 60378,
    "fuelType": "hybrid",
    "transmission": "automatic",
    "engineSize": "1.0L",
    "color": "Blue",
    "condition": "Used",
    "img": "images/Mazda Demio.jpg",
    "description": "Comfortable Toyota Vitz offering smooth ride and premium feel.",
    "features": [
      "Alloy Wheels",
      "Push Start",
      "Fog Lights",
      "Sport Mode"
    ],
    "location": "Machakos",
    "available": true,
    "featured": false
  },
  {
    "id": 987,
    "make": "Mitsubishi",
    "model": "Delica",
    "year": 2015,
    "price": 1847686,
    "mileage": 137566,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "2.5L",
    "color": "White",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Spacious Mitsubishi Delica ideal for family trips and business use.",
    "features": [
      "Parking Sensors",
      "Cruise Control",
      "Hill Start Assist"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 988,
    "make": "BMW",
    "model": "320i",
    "year": 2019,
    "price": 4496965,
    "mileage": 127395,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Brown",
    "condition": "Used",
    "img": "images/subaru-legacy.jpg",
    "description": "Robust BMW 320i built for durability and long-term reliability.",
    "features": [
      "Eco Mode",
      "Bluetooth",
      "Traction Control",
      "Premium Sound",
      "Apple CarPlay"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 989,
    "make": "Peugeot",
    "model": "3008",
    "year": 2016,
    "price": 1102050,
    "mileage": 127836,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "3.5L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/Honda Fit.jpg",
    "description": "Premium Peugeot 3008 with luxury features and superior comfort.",
    "features": [
      "EBD",
      "4WD/AWD",
      "Hill Start Assist"
    ],
    "location": "Kisii",
    "available": true,
    "featured": false
  },
  {
    "id": 990,
    "make": "Kia",
    "model": "Soul",
    "year": 2018,
    "price": 2531166,
    "mileage": 132962,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "2.2L",
    "color": "White",
    "condition": "Used",
    "img": "images/Subaru Forester.avif",
    "description": "Comfortable Kia Soul offering smooth ride and premium feel.",
    "features": [
      "Hill Start Assist",
      "Heated Seats"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 991,
    "make": "Ford",
    "model": "C-Max",
    "year": 2020,
    "price": 1285379,
    "mileage": 106903,
    "fuelType": "electric",
    "transmission": "manual",
    "engineSize": "2.0L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/mazda-axela.jpg",
    "description": "Spacious Ford C-Max ideal for family trips and business use.",
    "features": [
      "Heated Seats",
      "Sunroof"
    ],
    "location": "Nairobi",
    "available": true,
    "featured": false
  },
  {
    "id": 992,
    "make": "Mazda",
    "model": "Bongo",
    "year": 2019,
    "price": 4649135,
    "mileage": 93046,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "3.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Comfortable Mazda Bongo offering smooth ride and premium feel.",
    "features": [
      "Leather Seats",
      "Air Conditioning",
      "Power Windows",
      "Eco Mode"
    ],
    "location": "Nakuru",
    "available": true,
    "featured": false
  },
  {
    "id": 993,
    "make": "Suzuki",
    "model": "Vitara",
    "year": 2018,
    "price": 824517,
    "mileage": 104698,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "Black",
    "condition": "Used",
    "img": "images/mazda-bt50.jpg",
    "description": "Well-maintained Suzuki Vitara with excellent performance and reliability.",
    "features": [
      "Power Mirrors",
      "ABS"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 994,
    "make": "BMW",
    "model": "X6",
    "year": 2023,
    "price": 3061527,
    "mileage": 13013,
    "fuelType": "petrol",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Green",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Reliable BMW X6 with great fuel efficiency and low maintenance.",
    "features": [
      "Fog Lights",
      "Air Conditioning",
      "Apple CarPlay"
    ],
    "location": "Eldoret",
    "available": true,
    "featured": false
  },
  {
    "id": 995,
    "make": "Renault",
    "model": "Koleos",
    "year": 2016,
    "price": 2400878,
    "mileage": 34830,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Black",
    "condition": "Used",
    "img": "images/honda-crv.jpg",
    "description": "Reliable Renault Koleos with great fuel efficiency and low maintenance.",
    "features": [
      "Eco Mode",
      "Sunroof"
    ],
    "location": "Narok",
    "available": true,
    "featured": false
  },
  {
    "id": 996,
    "make": "Mitsubishi",
    "model": "i-MiEV",
    "year": 2024,
    "price": 1114744,
    "mileage": 145226,
    "fuelType": "electric",
    "transmission": "automatic",
    "engineSize": "4.0L",
    "color": "Navy",
    "condition": "Used",
    "img": "images/nissan-juke.jpg",
    "description": "Reliable Mitsubishi i-MiEV with great fuel efficiency and low maintenance.",
    "features": [
      "Ventilated Seats",
      "4WD/AWD",
      "EBD",
      "Navigation"
    ],
    "location": "Mombasa",
    "available": true,
    "featured": false
  },
  {
    "id": 997,
    "make": "Volkswagen",
    "model": "Arteon",
    "year": 2016,
    "price": 1812513,
    "mileage": 13751,
    "fuelType": "diesel",
    "transmission": "manual",
    "engineSize": "1.4L",
    "color": "Gold",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Modern Volkswagen Arteon with advanced technology and safety features.",
    "features": [
      "Power Mirrors",
      "Android Auto",
      "Keyless Entry",
      "Hill Start Assist",
      "Eco Mode",
      "LED Headlights"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  },
  {
    "id": 998,
    "make": "Suzuki",
    "model": "Celerio",
    "year": 2022,
    "price": 4118333,
    "mileage": 122777,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.2L",
    "color": "Orange",
    "condition": "Used",
    "img": "images/toyota-hilux.jpg",
    "description": "Stylish Suzuki Celerio perfect for urban driving and weekend trips.",
    "features": [
      "Brake Assist",
      "Heated Seats",
      "EBD",
      "Air Conditioning"
    ],
    "location": "Kisumu",
    "available": true,
    "featured": false
  },
  {
    "id": 999,
    "make": "Hyundai",
    "model": "Ioniq",
    "year": 2023,
    "price": 2233719,
    "mileage": 149811,
    "fuelType": "petrol",
    "transmission": "manual",
    "engineSize": "1.0L",
    "color": "White",
    "condition": "Used",
    "img": "images/toyota-rav4.jpg",
    "description": "Efficient Hyundai Ioniq with excellent handling and performance.",
    "features": [
      "Apple CarPlay",
      "Dual Zone AC",
      "Leather Seats"
    ],
    "location": "Kerugoya",
    "available": true,
    "featured": false
  },
  {
    "id": 1000,
    "make": "Mitsubishi",
    "model": "Delica",
    "year": 2021,
    "price": 3269088,
    "mileage": 139214,
    "fuelType": "diesel",
    "transmission": "automatic",
    "engineSize": "1.4L",
    "color": "Beige",
    "condition": "Used",
    "img": "images/bmw-x3.jpg",
    "description": "Modern Mitsubishi Delica with advanced technology and safety features.",
    "features": [
      "LED Headlights",
      "Air Conditioning",
      "Eco Mode",
      "Keyless Entry",
      "Dual Zone AC",
      "Navigation"
    ],
    "location": "Kericho",
    "available": true,
    "featured": false
  }
];
    this.filteredCars = [...this.cars];
  }

  // Setup all event listeners
  setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation
    this.setupNavigation();
    
    // Search and filtering
    this.setupSearchFilters();
    this.setupAdditionalSearchFeatures();
    
    // Forms
    this.setupContactForm();
    this.setupFinancingCalculator();
    
    // Modals
    this.setupModals();
    
    // Back to top
    this.setupBackToTop();
    
    // Lazy loading
    this.setupLazyLoading();
    
    // Smooth scrolling
    this.setupSmoothScrolling();
    
    // Action buttons
    this.setupActionButtons();
    
    // Header action buttons
    this.setupHeaderActions();
  }

  // Navigation functionality
  setupNavigation() {
    console.log('Setting up navigation...');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    console.log('Navigation elements found:', {
      navToggle: !!navToggle,
      navMenu: !!navMenu,
      navLinks: navLinks.length
    });

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        console.log('Mobile menu toggled');
      });
    }

    // Navigation link functionality
    navLinks.forEach((link, index) => {
      console.log(`Setting up nav link ${index}:`, link.textContent, link.getAttribute('href'));
      
      link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Nav link clicked:', link.textContent, link.getAttribute('href'));
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Get the target section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        console.log('Target section:', targetId, !!targetSection);
        
        if (targetSection) {
          // Special handling for inventory link
          if (targetId === 'inventory') {
            console.log('Opening inventory modal...');
            this.showCompleteInventory();
          } else {
            // Smooth scroll to target section
            console.log('Scrolling to section:', targetId);
            targetSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        } else {
          console.log('Target section not found:', targetId);
        }
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav') && navMenu?.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Search and filtering functionality
  setupSearchFilters() {
    const searchForm = document.querySelector('.search-form');
    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const yearSelect = document.getElementById('year');
    const priceMinInput = document.getElementById('price-min');
    const priceMaxInput = document.getElementById('price-max');
    const fuelTypeSelect = document.getElementById('fuel-type');
    const transmissionSelect = document.getElementById('transmission');

    // Populate filter options
    this.populateFilterOptions();

    // Search form submission
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.performSearch();
      });
    }

    // Real-time filtering
    [makeSelect, modelSelect, yearSelect, priceMinInput, priceMaxInput, fuelTypeSelect, transmissionSelect].forEach(element => {
      if (element) {
        element.addEventListener('change', () => this.performSearch());
        if (element.type === 'number') {
          element.addEventListener('input', () => this.performSearch());
        }
      }
    });
  }

  // Setup additional search functionality
  setupAdditionalSearchFeatures() {
    const advancedSearchToggle = document.getElementById('advanced-search-toggle');
    const searchSection = document.querySelector('.search-section');

    // Advanced search toggle
    if (advancedSearchToggle && searchSection) {
      advancedSearchToggle.addEventListener('click', () => {
        searchSection.classList.toggle('expanded');
        const isExpanded = searchSection.classList.contains('expanded');
        advancedSearchToggle.textContent = isExpanded ? 'Simple Search' : 'Advanced Search';
        advancedSearchToggle.setAttribute('aria-expanded', isExpanded);
      });
    }

    // Header search button functionality
    const headerSearchBtn = document.querySelector('.header-actions .btn-outline[aria-label="Search vehicles"]');
    console.log('Header search button found:', !!headerSearchBtn);
    if (headerSearchBtn) {
      headerSearchBtn.addEventListener('click', () => {
        console.log('Header search button clicked');
        // Scroll to search section
        const searchSection = document.querySelector('.search-section');
        if (searchSection) {
          searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          this.showNotification('Search for your perfect vehicle using the filters below!', 'info');
        } else {
          console.log('Search section not found');
        }
      });
    }

    // Quick search button (if exists elsewhere)
    const quickSearchBtn = document.querySelector('button[aria-label="Search vehicles"]:not(.header-actions .btn-outline)');
    if (quickSearchBtn) {
      quickSearchBtn.addEventListener('click', () => {
        const searchSection = document.querySelector('.search-section');
        if (searchSection) {
          searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          this.showNotification('Use the search form to find your perfect vehicle!', 'info');
        }
      });
    }
  }

  // Setup header action buttons
  setupHeaderActions() {
    console.log('Setting up header actions...');
    
    // Test Drive button in header
    const headerTestDriveBtn = document.querySelector('.header-actions .btn-primary[aria-label="Schedule test drive"]');
    console.log('Header test drive button found:', !!headerTestDriveBtn);
    if (headerTestDriveBtn) {
      headerTestDriveBtn.addEventListener('click', () => {
        console.log('Header test drive button clicked');
        this.showNotification('Test drive scheduling coming soon! Contact us at +254 720 317626 to schedule your test drive.', 'info');
      });
    }

    // Logo click - scroll to top
    const logoLink = document.querySelector('.logo a');
    console.log('Logo link found:', !!logoLink);
    if (logoLink) {
      logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Logo clicked, scrolling to top');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // Populate filter dropdowns
  populateFilterOptions() {
    const makes = [...new Set(this.cars.map(car => car.make))];
    const models = [...new Set(this.cars.map(car => car.model))];
    const years = [...new Set(this.cars.map(car => car.year))].sort((a, b) => b - a);

    this.populateSelect('make', makes);
    this.populateSelect('model', models);
    this.populateSelect('year', years);
  }

  populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    if (!select) return;

    const currentValue = select.value;
    select.innerHTML = `<option value="">All ${selectId.charAt(0).toUpperCase() + selectId.slice(1)}s</option>`;
    
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      select.appendChild(optionElement);
    });

    select.value = currentValue;
  }

  // Perform search with current filters
  performSearch() {
    const make = document.getElementById('make')?.value;
    const model = document.getElementById('model')?.value;
    const year = document.getElementById('year')?.value;
    const priceMin = parseInt(document.getElementById('price-min')?.value) || 0;
    const priceMax = parseInt(document.getElementById('price-max')?.value) || Infinity;
    const fuelType = document.getElementById('fuel-type')?.value;
    const transmission = document.getElementById('transmission')?.value;

    this.filteredCars = this.cars.filter(car => {
      return (
        (!make || car.make === make) &&
        (!model || car.model === model) &&
        (!year || car.year === parseInt(year)) &&
        (car.price >= priceMin && car.price <= priceMax) &&
        (!fuelType || car.fuelType === fuelType) &&
        (!transmission || car.transmission === transmission)
      );
    });

    // Show filtered results in inventory modal
    const displayCars = this.filteredCars.slice(0, 100); // Show up to 100 cars
    this.displayInventoryModalCars(displayCars);
    this.updateShowingCars(1, Math.min(displayCars.length, this.filteredCars.length));
    
    // Show the inventory modal with filtered results
    const inventoryModal = document.getElementById('inventoryModal');
    if (inventoryModal) {
      this.showModal(inventoryModal);
    }
    
    this.showNotification(`Found ${this.filteredCars.length} vehicles matching your criteria!`, 'success');
  }

  // Display cars in the grid
  displayCars(carsToShow = this.filteredCars) {
    console.log('displayCars called');
    const featuredGrid = document.getElementById('featuredVehicles');

    const displayGrid = (grid, cars) => {
      if (!grid) {
        console.error('Grid not found!');
        return;
      }
      
      console.log('Displaying', cars.length, 'cars in grid');
      grid.innerHTML = '';
      
      cars.forEach(car => {
        const card = this.createCarCard(car);
        grid.appendChild(card);
      });
    };

    // Display ONLY featured cars in featured section (max 6)
    const featuredCars = this.cars.filter(car => car.featured).slice(0, 6);
    console.log('Featured cars:', featuredCars.length);
    displayGrid(featuredGrid, featuredCars);
    
    // Update search results count
    this.updateSearchResultsCount(this.cars.length);
  }

  // Create individual car card
  createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.setAttribute('data-car-id', car.id);

    const isFavorite = this.favorites.includes(car.id);
    
    card.innerHTML = `
      <div class="vehicle-image">
        <img src="${car.img}" alt="${car.make} ${car.model}" loading="lazy">
        ${car.featured ? '<span class="vehicle-badge">Featured</span>' : ''}
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="vehicle-content">
        <h3 class="vehicle-title">${car.make} ${car.model}</h3>
        <div class="vehicle-price">KES ${car.price.toLocaleString()}</div>
        <div class="vehicle-specs">
          <div class="spec-item">
            <i class="fas fa-calendar"></i>
            <span>${car.year}</span>
          </div>
          <div class="spec-item">
            <i class="fas fa-road"></i>
            <span>${car.mileage.toLocaleString()} km</span>
          </div>
          <div class="spec-item">
            <i class="fas fa-gas-pump"></i>
            <span>${car.fuelType}</span>
          </div>
          <div class="spec-item">
            <i class="fas fa-cog"></i>
            <span>${car.transmission}</span>
          </div>
        </div>
        <div class="vehicle-actions">
          <button class="btn btn-primary btn-sm view-details" data-car-id="${car.id}">
            <i class="fas fa-eye"></i>
            View Details
          </button>
          <button class="btn btn-outline btn-sm schedule-test-drive" data-car-id="${car.id}">
            <i class="fas fa-calendar"></i>
            Test Drive
          </button>
        </div>
      </div>
    `;

    // Add event listeners to card
    this.addCardEventListeners(card, car);

    return card;
  }

  // Add event listeners to car card
  addCardEventListeners(card, car) {
    const favoriteBtn = card.querySelector('.favorite-btn');
    const viewDetailsBtn = card.querySelector('.view-details');
    const testDriveBtn = card.querySelector('.schedule-test-drive');

    // Favorite functionality
    favoriteBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFavorite(car.id, favoriteBtn);
    });

    // View details
    viewDetailsBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showVehicleDetails(car);
    });

    // Schedule test drive
    testDriveBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.scheduleTestDrive(car);
    });

    // Card click for details
    card.addEventListener('click', () => {
      this.showVehicleDetails(car);
    });
  }

  // Toggle favorite status
  toggleFavorite(carId, button) {
    const index = this.favorites.indexOf(carId);
    
    if (index > -1) {
      this.favorites.splice(index, 1);
      button.classList.remove('active');
      button.setAttribute('aria-label', 'Add to favorites');
      this.showNotification('Removed from favorites', 'info');
    } else {
      this.favorites.push(carId);
      button.classList.add('active');
      button.setAttribute('aria-label', 'Remove from favorites');
      this.showNotification('Added to favorites', 'success');
    }

    localStorage.setItem('kenyamotors_favorites', JSON.stringify(this.favorites));
  }

  // Show vehicle details modal
  showVehicleDetails(car) {
    const modal = document.getElementById('vehicleModal');
    const modalTitle = document.getElementById('vehicleModalTitle');
    const modalBody = document.getElementById('vehicleModalBody');

    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.textContent = `${car.make} ${car.model}`;
    
    modalBody.innerHTML = `
      <div class="vehicle-details">
        <div class="vehicle-gallery">
          <div class="main-image">
            <img src="${car.img}" alt="${car.make} ${car.model}" id="mainImage">
          </div>
          <div class="thumbnail-images">
            <img src="${car.img}" alt="${car.make} ${car.model} - Main" 
                 class="thumbnail active" 
                 onclick="changeMainImage('${car.img}', this)">
          </div>
        </div>
        
        <div class="vehicle-info">
          <div class="vehicle-header">
            <h3>${car.make} ${car.model}</h3>
            <div class="vehicle-price">KES ${car.price.toLocaleString()}</div>
          </div>
          
          <div class="vehicle-description">
            <p>${car.description}</p>
          </div>
          
          <div class="vehicle-specifications">
            <h4>Specifications</h4>
            <div class="specs-grid">
              <div class="spec-item">
                <span class="spec-label">Year:</span>
                <span class="spec-value">${car.year}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Mileage:</span>
                <span class="spec-value">${car.mileage.toLocaleString()} km</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Fuel Type:</span>
                <span class="spec-value">${car.fuelType}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Transmission:</span>
                <span class="spec-value">${car.transmission}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Engine Size:</span>
                <span class="spec-value">${car.engineSize}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Color:</span>
                <span class="spec-value">${car.color}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Condition:</span>
                <span class="spec-value">${car.condition}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Location:</span>
                <span class="spec-value">${car.location}</span>
              </div>
            </div>
          </div>
          
          <div class="vehicle-features">
            <h4>Features</h4>
            <div class="features-list">
              ${car.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
          </div>
          
          <div class="vehicle-actions">
            <button class="btn btn-primary" onclick="scheduleTestDrive(${car.id})">
              <i class="fas fa-calendar"></i>
              Schedule Test Drive
            </button>
            <button class="btn btn-outline" onclick="contactAboutVehicle(${car.id})">
              <i class="fas fa-phone"></i>
              Contact About This Vehicle
            </button>
            <button class="btn btn-outline favorite-btn ${this.favorites.includes(car.id) ? 'active' : ''}" 
                    onclick="toggleFavorite(${car.id}, this)">
              <i class="fas fa-heart"></i>
              ${this.favorites.includes(car.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    `;

    this.showModal(modal);
  }

  // Setup modals
  setupModals() {
    console.log('Setting up modals...');
    const modals = document.querySelectorAll('.modal');
    console.log('Found modals:', modals.length);
    
    modals.forEach(modal => {
      const closeBtn = modal.querySelector('.modal-close');
      
      closeBtn?.addEventListener('click', () => {
        this.hideModal(modal);
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.hideModal(modal);
        }
      });
    });

    // Clear filters button in inventory modal
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', () => {
        this.clearFilters();
        this.showCompleteInventory(); // Reload the modal with all cars
      });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modals.forEach(modal => {
          if (modal.classList.contains('active')) {
            this.hideModal(modal);
          }
        });
      }
    });
  }

  // Show modal
  showModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Hide modal
  hideModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Setup contact form
  setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactForm(contactForm);
      });
    }
  }

  // Handle contact form submission
  async handleContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Show loading state
    this.showLoading();
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      this.showNotification('Thank you! Your message has been sent successfully.', 'success');
      form.reset();
      
      // Track form submission
      this.trackEvent('contact_form_submitted', {
        subject: data.subject,
        has_newsletter: data.newsletter ? 'yes' : 'no'
      });
      
    } catch (error) {
      this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
      this.hideLoading();
    }
  }

  // Setup financing calculator
  setupFinancingCalculator() {
    const calculateBtn = document.getElementById('calculate-payment');
    
    if (calculateBtn) {
      calculateBtn.addEventListener('click', () => {
        this.calculatePayment();
      });
    }
  }

  // Calculate loan payment
  calculatePayment() {
    const vehiclePrice = parseFloat(document.getElementById('vehicle-price')?.value) || 0;
    const downPayment = parseFloat(document.getElementById('down-payment')?.value) || 0;
    const loanTerm = parseInt(document.getElementById('loan-term')?.value) || 36;
    const interestRate = parseFloat(document.getElementById('interest-rate')?.value) || 12;

    if (vehiclePrice <= 0 || downPayment >= vehiclePrice) {
      this.showNotification('Please enter valid values for the calculation.', 'error');
      return;
    }

    const loanAmount = vehiclePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    let monthlyPayment;
    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / numberOfPayments;
    } else {
      monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;
    const principal = loanAmount;

    this.displayPaymentResult(monthlyPayment, principal, totalInterest);
  }

  // Display payment calculation results
  displayPaymentResult(monthlyPayment, principal, totalInterest) {
    const resultDiv = document.getElementById('payment-result');
    const monthlyPaymentDiv = document.getElementById('monthly-payment');
    const principalDiv = document.getElementById('principal-amount');
    const interestDiv = document.getElementById('interest-amount');
    const totalInterestDiv = document.getElementById('total-interest');

    if (resultDiv && monthlyPaymentDiv && principalDiv && interestDiv && totalInterestDiv) {
      monthlyPaymentDiv.textContent = `KES ${monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
      principalDiv.textContent = `KES ${principal.toLocaleString()}`;
      interestDiv.textContent = `KES ${(monthlyPayment - principal / 36).toLocaleString(undefined, {maximumFractionDigits: 0})}`;
      totalInterestDiv.textContent = `KES ${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
      
      resultDiv.style.display = 'block';
    }
  }

  // Setup back to top button
  setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // Setup lazy loading for images
  setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  // Setup smooth scrolling
  setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Setup action buttons functionality
  setupActionButtons() {
    // Schedule test drive buttons
    const testDriveBtns = document.querySelectorAll('button[aria-label="Schedule test drive"], .schedule-test-drive');
    testDriveBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showNotification('Test drive scheduling feature coming soon! We\'ll contact you shortly.', 'info');
      });
    });

    // Apply Now buttons
    const applyBtns = document.querySelectorAll('.btn');
    applyBtns.forEach(btn => {
      if (btn.textContent.includes('Apply Now')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.showNotification('Financing application submitted! We\'ll contact you within 24 hours.', 'success');
        });
      }
    });

    // Our Story buttons
    const storyBtns = document.querySelectorAll('.btn');
    storyBtns.forEach(btn => {
      if (btn.textContent.includes('Our Story')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.showNotification('About us section coming soon!', 'info');
        });
      }
    });

    // View All Vehicles button - Show complete inventory modal
    const viewAllBtn = document.getElementById('viewAllVehiclesBtn');
    console.log('View All Vehicles button:', viewAllBtn);
    if (viewAllBtn) {
      viewAllBtn.addEventListener('click', (e) => {
        console.log('View All Vehicles button clicked!');
        e.preventDefault();
        this.showCompleteInventory();
      });
    } else {
      console.error('View All Vehicles button not found!');
    }

    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceName = card.querySelector('h3')?.textContent || 'Service';
        this.showNotification(`${serviceName} details coming soon!`, 'info');
      });
    });

    // Action cards
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const actionName = card.querySelector('h3')?.textContent || 'Action';
        this.showNotification(`${actionName} feature coming soon!`, 'info');
      });
    });
  }

  // Show complete inventory of all 1000 cars
  showCompleteInventory() {
    console.log('showCompleteInventory called');
    const inventoryModal = document.getElementById('inventoryModal');
    
    if (inventoryModal) {
      console.log('Inventory modal found, showing...');
      // Show the modal
      this.showModal(inventoryModal);
      
      // Load first 50 cars in the modal
      const initialCars = this.cars.slice(0, 50);
      console.log('Loading', initialCars.length, 'cars in modal');
      this.displayInventoryModalCars(initialCars);
      
      // Setup modal load more functionality
      this.setupModalLoadMore();
      
      // Update showing cars text
      this.updateShowingCars(1, 50);
      
      this.showNotification(`Showing ${initialCars.length} of ${this.cars.length} vehicles in our complete inventory!`, 'success');
    } else {
      console.error('Inventory modal not found!');
    }
  }

  // Display cars in inventory modal
  displayInventoryModalCars(carsToShow) {
    const modalGrid = document.getElementById('inventoryModalGrid');
    
    if (!modalGrid) return;
    
    modalGrid.innerHTML = '';
    
    carsToShow.forEach(car => {
      const card = this.createCarCard(car);
      modalGrid.appendChild(card);
    });
  }

  // Setup modal load more functionality
  setupModalLoadMore() {
    const modalLoadMoreBtn = document.getElementById('modalLoadMoreBtn');
    if (!modalLoadMoreBtn) return;

    let currentIndex = 50; // Start after the first 50 cars
    
    modalLoadMoreBtn.onclick = () => {
      const nextBatch = this.cars.slice(currentIndex, currentIndex + 50);
      if (nextBatch.length > 0) {
        this.appendCarsToModal(nextBatch);
        currentIndex += 50;
        
        // Update showing cars text
        const startIndex = 1;
        const endIndex = Math.min(currentIndex, this.cars.length);
        this.updateShowingCars(startIndex, endIndex);
        
        // Hide button if no more cars
        if (currentIndex >= this.cars.length) {
          modalLoadMoreBtn.style.display = 'none';
          this.showNotification('All vehicles loaded!', 'success');
        } else {
          this.showNotification(`Loaded ${nextBatch.length} more vehicles. ${this.cars.length - currentIndex} remaining.`, 'info');
        }
      }
    };
  }

  // Append cars to modal grid
  appendCarsToModal(carsToAdd) {
    const modalGrid = document.getElementById('inventoryModalGrid');
    if (!modalGrid) return;
    
    carsToAdd.forEach(car => {
      const card = this.createCarCard(car);
      modalGrid.appendChild(card);
    });
  }

  // Update showing cars text
  updateShowingCars(start, end) {
    const showingCars = document.getElementById('showingCars');
    if (showingCars) {
      showingCars.textContent = `Showing ${start}-${end} of ${this.cars.length}`;
    }
  }

  // Setup load more button functionality
  setupLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    let currentIndex = 20; // Start after the first 20 cars (default display)
    
    loadMoreBtn.style.display = 'block';
    
    loadMoreBtn.onclick = () => {
      const nextBatch = this.cars.slice(currentIndex, currentIndex + 50);
      if (nextBatch.length > 0) {
        this.appendCarsToInventory(nextBatch);
        currentIndex += 50;
        
        // Hide button if no more cars
        if (currentIndex >= this.cars.length) {
          loadMoreBtn.style.display = 'none';
          this.showNotification('All vehicles loaded!', 'success');
        } else {
          this.showNotification(`Loaded ${nextBatch.length} more vehicles. ${this.cars.length - currentIndex} remaining.`, 'info');
        }
      }
    };
  }

  // Append cars to inventory grid
  appendCarsToInventory(carsToAdd) {
    const inventoryGrid = document.getElementById('carGrid');
    if (!inventoryGrid) return;
    
    carsToAdd.forEach(car => {
      const card = this.createCarCard(car);
      inventoryGrid.appendChild(card);
    });
  }

  // Display cars in inventory section
  displayInventoryCars(carsToShow) {
    const inventoryGrid = document.getElementById('carGrid');
    
    if (!inventoryGrid) return;
    
    inventoryGrid.innerHTML = '';
    
    carsToShow.forEach(car => {
      const card = this.createCarCard(car);
      inventoryGrid.appendChild(card);
    });
  }

  // Clear all search filters
  clearFilters() {
    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const yearSelect = document.getElementById('year');
    const priceMinInput = document.getElementById('price-min');
    const priceMaxInput = document.getElementById('price-max');
    const fuelTypeSelect = document.getElementById('fuel-type');
    const transmissionSelect = document.getElementById('transmission');

    if (makeSelect) makeSelect.value = '';
    if (modelSelect) modelSelect.value = '';
    if (yearSelect) yearSelect.value = '';
    if (priceMinInput) priceMinInput.value = '';
    if (priceMaxInput) priceMaxInput.value = '';
    if (fuelTypeSelect) fuelTypeSelect.value = '';
    if (transmissionSelect) transmissionSelect.value = '';

    // Reset filtered cars to all cars
    this.filteredCars = [...this.cars];
  }

  // Update search results count
  updateSearchResultsCount(count) {
    const resultsCount = document.querySelector('.search-results-count');
    if (resultsCount) {
      resultsCount.textContent = `${count} vehicle${count !== 1 ? 's' : ''} found`;
    }
  }

  // Setup intersection observer for animations
  setupIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      const animatedElements = document.querySelectorAll('.vehicle-card, .service-card, .action-card');
      animatedElements.forEach(el => observer.observe(el));
    }
  }

  // Initialize components
  initializeComponents() {
    console.log('Initializing components...');
    console.log('Total cars loaded:', this.cars.length);
    console.log('Featured cars:', this.cars.filter(car => car.featured).length);
    
    this.displayCars();
    this.loadTestimonials();
    this.updateSearchResultsCount(this.cars.length);
    
    // Hide the inventory section by default (only show in modal)
    const inventorySection = document.getElementById('inventory');
    if (inventorySection) {
      inventorySection.style.display = 'none';
    }
  }

  // Load testimonials
  loadTestimonials() {
    const testimonials = [
      {
        name: 'John Kamau',
        role: 'Business Owner',
        quote: 'KenyaMotors helped me find the perfect vehicle for my business. Their financing options made it affordable and the service was exceptional.',
        rating: 5
      },
      {
        name: 'Sarah Wanjiku',
        role: 'Teacher',
        quote: 'I was nervous about buying a used car, but KenyaMotors made the process so smooth. The vehicle was exactly as described and I\'m very happy with my purchase.',
        rating: 5
      },
      {
        name: 'David Ochieng',
        role: 'Engineer',
        quote: 'Professional service from start to finish. The team at KenyaMotors really knows their vehicles and helped me find exactly what I was looking for.',
        rating: 5
      }
    ];

    const testimonialsGrid = document.getElementById('testimonials');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
      <div class="testimonial-card">
        <div class="testimonial-quote">"${testimonial.quote}"</div>
        <div class="testimonial-author">
          <div class="author-avatar">${testimonial.name.charAt(0)}</div>
          <div class="author-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.role}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Update search results count
  updateSearchResults() {
    const resultsCount = document.querySelector('.search-results-count');
    if (resultsCount) {
      resultsCount.textContent = `${this.filteredCars.length} vehicle${this.filteredCars.length !== 1 ? 's' : ''} found`;
    }
  }

  // Show loading spinner
  showLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
      spinner.style.display = 'flex';
      this.isLoading = true;
    }
  }

  // Hide loading spinner
  hideLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
      spinner.style.display = 'none';
      this.isLoading = false;
    }
  }

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${this.getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }

  // Get notification icon
  getNotificationIcon(type) {
    const icons = {
      success: 'check-circle',
      error: 'exclamation-circle',
      warning: 'exclamation-triangle',
      info: 'info-circle'
    };
    return icons[type] || 'info-circle';
  }

  // Schedule test drive
  scheduleTestDrive(car) {
    this.showNotification(`Test drive scheduled for ${car.make} ${car.model}. We'll contact you soon!`, 'success');
    this.trackEvent('test_drive_scheduled', {
      car_make: car.make,
      car_model: car.model,
      car_price: car.price
    });
  }

  // Contact about vehicle
  contactAboutVehicle(carId) {
    const car = this.cars.find(c => c.id === carId);
    if (car) {
      this.showNotification(`We'll contact you about the ${car.make} ${car.model} soon!`, 'success');
      this.trackEvent('vehicle_inquiry', {
        car_make: car.make,
        car_model: car.model,
        car_price: car.price
      });
    }
  }

  // Initialize analytics
  initializeAnalytics() {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'KenyaMotors - Find Your Dream Car',
        page_location: window.location.href
      });
    }
  }

  // Track custom events
  trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }
    
    // Console log for development
    console.log(`Event tracked: ${eventName}`, parameters);
  }
}

// Global functions for HTML onclick handlers
function changeMainImage(src, thumbnail) {
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  if (mainImage) {
    mainImage.src = src;
  }
  
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  thumbnail.classList.add('active');
}

function scheduleTestDrive(carId) {
  window.kenyaMotors?.scheduleTestDrive(window.kenyaMotors.cars.find(c => c.id === carId));
}

function contactAboutVehicle(carId) {
  window.kenyaMotors?.contactAboutVehicle(carId);
}

function toggleFavorite(carId, button) {
  window.kenyaMotors?.toggleFavorite(carId, button);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.kenyaMotors = new KenyaMotors();
});

// Service Worker for PWA features
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}