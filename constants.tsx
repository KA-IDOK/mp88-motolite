
import React from 'react';
import { Battery, Zap, Truck, ShieldCheck, Settings, Fuel, CircleDot, Ship, Bike, Car } from 'lucide-react';
import { Branch, Service, BatteryBrand } from './types';

export const RESCUE_HOTLINES = [
  '09086727032',
  '09651808719',
  '09277666924',
  '09989996788'
];

export const LANDLINE = '0325137369';
export const SOS_WARRANTY = '09062420612';

export const BRANDS: BatteryBrand[] = [
  { name: 'MOTOLITE', origin: 'Philippines', flag: '🇵🇭' },
  { name: 'DELKOR', origin: 'South Korea', flag: '🇰🇷' },
  { name: 'ACDELCO', origin: 'USA', flag: '🇺🇸' },
  { name: 'AMARON', origin: 'India', flag: '🇮🇳' },
  { name: 'GS', origin: 'Indonesia', flag: '🇮🇩' },
  { name: 'RAIDEN', origin: 'Japan', flag: '🇯🇵' },
  { name: 'YOKOHAMA', origin: 'Malaysia', flag: '🇲🇾' },
  { name: 'DYNA POWER', origin: 'Philippines', flag: '🇵🇭' },
  { name: 'POWER GO', origin: 'China', flag: '🇨🇳' }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Built for the country\'s terrain and road conditions. Reliable power for everyday driving.',
    icon: 'Car'
  },
  {
    id: 'motorcycle',
    title: 'Motorcycle',
    description: 'High-performance batteries for your two-wheeled adventures. Long-lasting and durable.',
    icon: 'Bike'
  },
  {
    id: 'marine',
    title: 'Marine',
    description: 'Your reliable source for all your marine needs. Powering your journey across the waters.',
    icon: 'Ship'
  }
];

export const SERVICES: Service[] = [
  { id: 'res-q', title: 'RES-Q', description: '24/7 Emergency battery rescue response anywhere in our coverage areas.', icon: 'Zap' },
  { id: 'express', title: 'Express Hatid', description: 'Free delivery and expert installation right at your doorstep.', icon: 'Truck' },
  { id: 'warranty', title: 'E-Warranty', description: 'Hassle-free SOS warranty claims and battery state-of-health checks.', icon: 'ShieldCheck' },
  { id: 'jumpstart', title: 'Jumpstart', description: 'Quick boost to get your vehicle moving again.', icon: 'Zap' },
  { id: 'gasup', title: 'Gas-up Rescue', description: 'Emergency fuel delivery when you run out on the road.', icon: 'Fuel' },
  { id: 'vulcanizing', title: 'Vulcanizing', description: 'Tire repair and assistance for flats.', icon: 'CircleDot' }
];

export const TESTIMONIALS = [
  {
    name: "Juan Dela Cruz",
    role: "Daily Commuter",
    content: "MP88 Battery World saved me when my car died in the middle of traffic. Their RES-Q service was incredibly fast!",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Business Owner",
    content: "I always rely on their Express Hatid for our delivery fleet. The free installation and reliable warranty give me peace of mind.",
    rating: 5
  },
  {
    name: "Carlos Reyes",
    role: "Motorcycle Enthusiast",
    content: "Best selection of motorcycle batteries. The staff really knows their stuff and helped me pick the perfect battery for my bike.",
    rating: 5
  }
];

export const BRANCHES: Branch[] = [
  {
    name: 'LAPU-LAPU (POBLACION)',
    address: 'Poblacion, Front of Central Elementary School, Lapu-Lapu City, Cebu',
    hours: '7:00am to 7:00pm',
    phone: '09277666924',
    location: 'Mactan'
  },
  {
    name: 'CORDOVA (TIANGUE)',
    address: 'Tiangue Road, Kinalumsan, Lapu-Lapu City (Near ALT COMPLEX)',
    hours: '7:00am to 5:00mn',
    phone: '09651808719',
    location: 'Mactan'
  },
  {
    name: 'TALISAY',
    address: 'Raphael Rabaya Rd., Tabunok, Talisay City (Near Brgy Hall)',
    hours: '7:00am to 8:00pm',
    phone: '09277666924',
    location: 'Cebu'
  },
  {
    name: 'MANDAUE (JAGOBIAO)',
    address: 'National Highway, Jagobiao, Mandaue City (Near ABS-CBN)',
    hours: '7:00am to 9:00pm',
    phone: '09277666924',
    location: 'Mandaue'
  },
  {
    name: 'CEBU CITY (MABOLO)',
    address: 'Unit 3, Benley Building, Mabolo, Cebu City (Across SM City)',
    hours: '7:00am to 9:00pm',
    phone: '09277666924',
    location: 'Cebu'
  },
  {
    name: 'TAGBILARAN',
    address: 'Mansasa Seaside, Tagbilaran City (Near Lantaw Restaurant)',
    hours: '7:00am to 7:00pm',
    phone: '09260354865',
    location: 'Tagbilaran'
  },
  {
    name: 'DAVAO',
    address: 'Near SM Lanang, Davao City',
    hours: '8:00am to 5:00pm',
    phone: '09989996788',
    location: 'Davao'
  },
  {
    name: 'DIPOLOG / DAPITAN',
    address: 'Near Rotunda Brgy. Pulo, Dapitan City',
    hours: '8:00am to 5:00pm',
    phone: '09989996788',
    location: 'Dipolog'
  }
];

export const COVERAGE_AREAS = [
  'Cebu City', 'Talisay', 'Minglanilla', 'Mandaue City', 
  'Lapu-Lapu City', 'Cordova', 'Consolacion', 'Liloan', 
  'Danao', 'Tagbilaran'
];

export const VEHICLE_DATA: Record<string, Record<string, Record<string, Record<string, Record<string, string>>>>> = {
  Automotive: {
    Toyota: {
      Vios: {
        '2018-2025': {
          '1.3 Base/E/J': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / ACDelco 1SNF / Raiden 1SNF / Yokohama 1SNF',
          '1.5 G/TRD': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / ACDelco 1SNF / Raiden 1SNF / Yokohama 1SNF'
        },
        '2008-2017': {
          'All Variants': 'Motolite Gold 1SNF / Delkor 1SNF / Amaron 1SNF / GS 1SNF / Dyna Power 1SNF / Power Go 1SNF'
        }
      },
      Fortuner: {
        '2016-2025': {
          '2.4 G/V (Diesel)': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF',
          '2.8 Q/LTD/GR-S (Diesel)': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF',
          '2.7 G (Gas)': 'Motolite Excel 2SMF / Amaron 2SMF / Delkor 2SMF / Raiden 2SMF'
        },
        '2005-2015': {
          'All Variants': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Dyna Power 3SMF'
        }
      },
      Innova: {
        '2023-2025': {
          'Zenix 2.0 Gas/Hybrid': 'Motolite Excel DIN55 / Amaron DIN55 / Delkor DIN55'
        },
        '2016-2025': {
          '2.8 Diesel': 'Motolite Excel 2SMF / Amaron 2SMF / Delkor 2SMF / ACDelco 2SMF / Raiden 2SMF / Yokohama 2SMF',
          '2.0 Gas': 'Motolite Excel 1SMF / Amaron 1SMF / Delkor 1SMF / Raiden 1SMF'
        },
        '2005-2015': {
          'All Variants': 'Motolite Gold 2SMF / Amaron 2SMF / Delkor 2SMF / GS 2SMF / Dyna Power 2SMF'
        }
      },
      Hilux: {
        '2016-2025': {
          '2.4 Diesel': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF',
          '2.8 Diesel / GR-S': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF',
          'Conquest 4x4': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / Raiden 3SMF'
        },
        '2005-2015': {
          'All Variants': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Power Go 3SMF'
        }
      },
      Wigo: {
        '2024-2025': {
          '1.0 E/G/TRD': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L / GS 40B19L'
        },
        '2014-2023': {
          '1.0 E/G/TRD': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L / GS 40B19L / Raiden 40B19L / Yokohama 40B19L'
        }
      },
      Raize: {
        '2022-2025': {
          '1.2 E/G': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF',
          '1.0 Turbo': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF'
        }
      },
      'Corolla Cross': {
        '2020-2025': {
          '1.8 G (Gas)': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF',
          '1.8 Hybrid / GR-S': 'Motolite Excel DIN44 / Amaron DIN44 / Delkor DIN44'
        }
      },
      'Yaris Cross': {
        '2023-2025': {
          '1.5 G/V (Gas)': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF',
          '1.5 Hybrid': 'Motolite Excel DIN44 / Amaron DIN44 / Delkor DIN44'
        }
      },
      Avanza: {
        '2022-2025': {
          '1.3 E/J / 1.5 G': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L'
        },
        '2012-2021': {
          '1.3 E/J / 1.5 G': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L / Raiden 40B19L / Yokohama 40B19L'
        },
        '2006-2011': {
          'All Variants': 'Motolite Gold 1SNF / Amaron 1SNF / Delkor 1SNF / GS 1SNF / Dyna Power 1SNF'
        }
      },
      Veloz: {
        '2022-2025': {
          '1.5 G/V': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L'
        }
      },
      Rush: {
        '2018-2025': {
          '1.5 E/G': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L / ACDelco 40B19L / Raiden 40B19L / Yokohama 40B19L'
        }
      },
      Hiace: {
        '2019-2025': {
          'Commuter/GL Grandia': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF',
          'Super Grandia': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF'
        },
        '2005-2018': {
          'All Variants': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Dyna Power 3SMF'
        }
      },
      'Land Cruiser': {
        '2022-2025': {
          'LC300 3.3L Diesel': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF'
        },
        '2008-2021': {
          'LC200 4.5L Diesel': 'Motolite Excel 3SMF (x2) / Amaron 3SMF (x2) / Delkor 3SMF (x2)'
        }
      },
      Revo: {
        '1998-2005': {
          'Diesel': 'Motolite Gold 2SMF / Amaron 2SMF / Delkor 2SMF',
          'Gas': 'Motolite Gold 1SMF / Amaron 1SMF'
        }
      },
      'Tamaraw FX': {
        '1991-2002': {
          'Diesel': 'Motolite Gold 2SMF / Amaron 2SMF',
          'Gas': 'Motolite Gold 1SMF / Amaron 1SNF'
        }
      }
    },
    Honda: {
      Civic: {
        '2022-2025': {
          '1.5 V/RS Turbo': 'Motolite Excel 1SMF / Amaron 1SMF / Delkor 1SMF'
        },
        '2016-2021': {
          '1.8 E/S / 1.5 RS Turbo': 'Motolite Excel 1SMF / Amaron 1SMF / Delkor 1SMF / ACDelco 1SMF / Raiden 1SMF / Yokohama 1SMF'
        },
        '2006-2015': {
          'All Variants': 'Motolite Gold 1SMF / Amaron 1SMF / Delkor 1SMF / GS 1SMF / Dyna Power 1SMF'
        }
      },
      City: {
        '2021-2025': {
          '1.5 S/V/RS': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF'
        },
        '2014-2020': {
          '1.5 E/V/RS': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / GS 1SNF / Raiden 1SNF / Yokohama 1SNF'
        },
        '2009-2013': {
          'All Variants': 'Motolite Gold 1SNF / Amaron 1SNF / Delkor 1SNF / Dyna Power 1SNF'
        }
      },
      CRV: {
        '2024-2025': {
          '1.5 V/VX Turbo': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF',
          '2.0 RS e:HEV Hybrid': 'Motolite Excel DIN44 / Amaron DIN44 / Delkor DIN44'
        },
        '2017-2023': {
          '2.0 Gas': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF',
          '1.6 Diesel': 'Motolite Excel 2SMF / Amaron 2SMF / Delkor 2SMF / Raiden 2SMF'
        },
        '2007-2016': {
          'All Variants': 'Motolite Gold 1SMF / Amaron 1SMF / Delkor 1SMF / GS 1SMF'
        }
      },
      BRV: {
        '2023-2025': {
          '1.5 S/V/VX': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF'
        },
        '2016-2022': {
          '1.5 S/V': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / ACDelco 1SNF / Raiden 1SNF'
        }
      },
      Brio: {
        '2014-2025': {
          '1.2 S/V/RS': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L / GS 40B19L / Raiden 40B19L / Yokohama 40B19L'
        }
      },
      HRV: {
        '2022-2025': {
          '1.5 S/V Turbo': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF'
        },
        '2015-2021': {
          '1.8 E/V/RS': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / ACDelco 1SNF / Raiden 1SNF'
        }
      },
      'ZR-V': {
        '2023-2025': {
          '1.5 Turbo': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF'
        }
      },
      'Older Models': {
        '1990-2005': {
          'Civic/City/Accord': 'Motolite Gold 1SMF / Amaron 1SMF / Delkor 1SMF'
        }
      }
    },
    Mitsubishi: {
      Montero: {
        '2016-2025': {
          '2.4 GLX/GLS/GT': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF'
        },
        '2008-2015': {
          'All Variants': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Dyna Power 3SMF'
        }
      },
      Mirage: {
        '2012-2025': {
          '1.2 GLX/GLS (Hatch/G4)': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L / GS 40B19L / Raiden 40B19L / Yokohama 40B19L'
        }
      },
      Xpander: {
        '2018-2025': {
          '1.5 GLX/GLS/Cross': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / ACDelco 1SNF / Raiden 1SNF / Yokohama 1SNF'
        }
      },
      Triton: {
        '2024-2025': {
          '2.4 GL/GLX/GLS/Athlete': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / Raiden 3SMF'
        }
      },
      Xforce: {
        '2024-2025': {
          '1.5 GLS/GT': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF'
        }
      },
      Strada: {
        '2015-2024': {
          '2.4 GLX/GLS/Athlete': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF'
        },
        '2006-2014': {
          'All Variants': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Power Go 3SMF'
        }
      },
      Adventure: {
        '1998-2017': {
          'Diesel Variants': 'Motolite Gold 2SMF / Amaron 2SMF / Delkor 2SMF / GS 2SMF / Dyna Power 2SMF',
          'Gas Variants': 'Motolite Gold 1SMF / Amaron 1SMF / Delkor 1SMF / GS 1SMF'
        }
      },
      L300: {
        '1987-2025': {
          '2.5 Diesel (FB/Exceed)': 'Motolite Gold 2SMF / Amaron 2SMF / Delkor 2SMF / GS 2SMF / Dyna Power 2SMF',
          '2.0 Gas': 'Motolite Gold 1SMF / Amaron 1SMF / Delkor 1SMF'
        }
      },
      Pajero: {
        'All Years': {
          'Field Master/BK': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF'
        }
      }
    },
    Ford: {
      Ranger: {
        '2023-2025': {
          '2.0 Turbo/Bi-Turbo': 'Motolite Excel DIN74 / Amaron DIN74 / Delkor DIN74 / Raiden DIN74',
          'Raptor 3.0 V6': 'Motolite Excel DIN80 / Amaron DIN80 / Delkor DIN80'
        },
        '2012-2022': {
          '2.2 XLT/XLS': 'Motolite Excel DIN66 / Amaron DIN66 / Delkor DIN66 / ACDelco DIN66 / Raiden DIN66 / Yokohama DIN66',
          '2.0 Wildtrak/Raptor': 'Motolite Excel DIN74 / Amaron DIN74 / Delkor DIN74 / ACDelco DIN74 / Raiden DIN74 / Yokohama DIN74'
        }
      },
      Everest: {
        '2023-2025': {
          '2.0 Turbo/Bi-Turbo': 'Motolite Excel DIN74 / Amaron DIN74 / Delkor DIN74 / Raiden DIN74'
        },
        '2015-2022': {
          '2.2 Trend/Titanium': 'Motolite Excel DIN66 / Amaron DIN66 / Delkor DIN66 / ACDelco DIN66 / Raiden DIN66 / Yokohama DIN66',
          '2.0 Titanium/Sport': 'Motolite Excel DIN74 / Amaron DIN74 / Delkor DIN74 / ACDelco DIN74 / Raiden DIN74 / Yokohama DIN74'
        }
      },
      Territory: {
        '2023-2025': {
          '1.5 Titanium/Titanium X': 'Motolite Excel DIN66 / Amaron DIN66 / Delkor DIN66 / Raiden DIN66'
        },
        '2020-2022': {
          '1.5 Trend/Titanium': 'Motolite Excel DIN55 / Amaron DIN55 / Delkor DIN55 / ACDelco DIN55 / Raiden DIN55'
        }
      },
      Bronco: {
        '2024-2025': {
          '2.7L V6': 'Motolite Excel DIN80 / Amaron DIN80 / Delkor DIN80'
        }
      }
    },
    Nissan: {
      Navara: {
        '2015-2025': {
          '2.5 EL/VE/VL/PRO-4X': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF'
        }
      },
      Almera: {
        '2022-2025': {
          '1.0 Turbo VE/VL': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF'
        },
        '2013-2021': {
          '1.5 Base/E/V/VL': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / ACDelco 1SNF / Raiden 1SNF / Yokohama 1SNF'
        }
      },
      Terra: {
        '2022-2025': {
          '2.5 EL/VE/VL/Sport': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / Raiden 3SMF'
        },
        '2018-2021': {
          '2.5 EL/VE/VL': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF'
        }
      },
      Kicks: {
        '2022-2025': {
          'e-POWER EL/VE/VL': 'Motolite Excel DIN44 / Amaron DIN44 / Delkor DIN44'
        }
      },
      Z: {
        '2023-2025': {
          '3.0 V6 Twin Turbo': 'Motolite Excel Q85 / Amaron Q85 / Delkor Q85'
        }
      }
    },
    Geely: {
      Coolray: {
        '2019-2025': {
          '1.5 Comfort/Premium/Sport': 'Motolite Excel DIN66 / Amaron DIN66 / Delkor DIN66 / Raiden DIN66'
        }
      },
      Okavango: {
        '2020-2025': {
          '1.5 Comfort/Urban/Urban Plus': 'Motolite Excel DIN74 / Amaron DIN74 / Delkor DIN74 / Raiden DIN74'
        }
      },
      Emgrand: {
        '2022-2025': {
          '1.5 S/Comfort/Premium': 'Motolite Excel DIN55 / Amaron DIN55 / Delkor DIN55 / Raiden DIN55'
        }
      }
    },
    MG: {
      ZS: {
        '2018-2025': {
          '1.5 Style/Alpha/Luxury': 'Motolite Excel DIN55 / Amaron DIN55 / Delkor DIN55 / Raiden DIN55'
        }
      },
      MG5: {
        '2019-2025': {
          '1.5 Core/Style/Alpha': 'Motolite Excel DIN55 / Amaron DIN55 / Delkor DIN55 / Raiden DIN55'
        }
      }
    },
    GAC: {
      GS3: {
        '2019-2025': {
          '1.5/1.3T': 'Motolite Excel DIN55 / Amaron DIN55 / Delkor DIN55 / Raiden DIN55'
        }
      },
      GA4: {
        '2019-2025': {
          '1.5/1.3T': 'Motolite Excel DIN55 / Amaron DIN55 / Delkor DIN55 / Raiden DIN55'
        }
      }
    },
    Chery: {
      'Tiggo 7 Pro': {
        '2021-2025': {
          '1.5 Turbo': 'Motolite Excel DIN66 / Amaron DIN66 / Delkor DIN66 / Raiden DIN66'
        }
      },
      'Tiggo 8 Pro': {
        '2022-2025': {
          '1.6 Turbo/PHEV': 'Motolite Excel DIN74 / Amaron DIN74 / Delkor DIN74 / Raiden DIN74'
        }
      }
    },
    Hyundai: {
      Accent: {
        '2011-2025': {
          '1.4 Gas': 'Motolite Excel 1SMF / Amaron 1SMF / Delkor 1SMF / ACDelco 1SMF / Raiden 1SMF / Yokohama 1SMF',
          '1.6 CRDi Diesel': 'Motolite Excel 2SMF / Amaron 2SMF / Delkor 2SMF / ACDelco 2SMF / Raiden 2SMF / Yokohama 2SMF'
        }
      },
      Stargazer: {
        '2022-2025': {
          '1.5 GL/GLS/Premium': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF'
        }
      },
      Creta: {
        '2022-2025': {
          '1.5 GL/GLS/Premium': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF'
        }
      },
      H100: {
        '2005-2025': {
          '2.5 CRDi Diesel': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Dyna Power 3SMF'
        }
      }
    },
    Kia: {
      Seltos: {
        '2019-2025': {
          '2.0 LX/EX/SX': 'Motolite Excel 1SMF / Amaron 1SMF / Delkor 1SMF / Raiden 1SMF'
        }
      },
      Stonic: {
        '2020-2025': {
          '1.4 LX/EX': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF'
        }
      },
      K2500: {
        '2018-2025': {
          '2.5 CRDi Diesel': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Dyna Power 3SMF'
        }
      }
    },
    Suzuki: {
      S_Presso: {
        '2020-2025': {
          '1.0 GL/GL MT/AGS': 'Motolite Excel 40B19L / Amaron 40B19L / Delkor 40B19L / Raiden 40B19L'
        }
      },
      XL7: {
        '2020-2025': {
          '1.5 GLX': 'Motolite Excel 1SNF / Amaron 1SNF / Delkor 1SNF / Raiden 1SNF'
        }
      }
    },
    Isuzu: {
      DMax: {
        '2013-2025': {
          '1.9/3.0 LS/LT': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF'
        },
        '2003-2012': {
          'All Variants': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Dyna Power 3SMF'
        }
      },
      muX: {
        '2014-2025': {
          '1.9/3.0 LS/LS-A/LS-E': 'Motolite Excel 3SMF / Amaron 3SMF / Delkor 3SMF / ACDelco 3SMF / Raiden 3SMF / Yokohama 3SMF'
        }
      },
      Crosswind: {
        '2001-2017': {
          'All Variants': 'Motolite Gold 2SMF / Amaron 2SMF / Delkor 2SMF / GS 2SMF / Dyna Power 2SMF'
        }
      },
      Traviz: {
        '2019-2025': {
          '2.5 Diesel': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Dyna Power 3SMF'
        }
      },
      'N-Series (Trucks)': {
        'All Years': {
          'NLR/NMR/NPR/NQR': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF / GS 3SMF / Dyna Power 3SMF'
        }
      },
      'Older Models': {
        '1990-2010': {
          'Hilander/Fuego/Trooper': 'Motolite Gold 3SMF / Amaron 3SMF / Delkor 3SMF'
        }
      }
    },
    Mazda: {
      'Mazda 2': {
        '2015-2025': {
          '1.5 V/Elite': 'Motolite Excel Q85 (I-Stop) / Amaron Q85 / Delkor Q85 / ACDelco Q85 / Raiden Q85'
        }
      },
      'Mazda 3': {
        '2014-2025': {
          '1.5/2.0 V/Elite/Premium': 'Motolite Excel Q85 (I-Stop) / Amaron Q85 / Delkor Q85 / ACDelco Q85 / Raiden Q85'
        }
      },
      'CX-5': {
        '2012-2025': {
          '2.0/2.5 Pro/Sport': 'Motolite Excel Q85 (I-Stop) / Amaron Q85 / Delkor Q85 / ACDelco Q85 / Raiden Q85'
        }
      },
      'BT-50': {
        '2012-2025': {
          '2.2/3.2 4x2/4x4': 'Motolite Excel DIN66 / Amaron DIN66 / Delkor DIN66 / ACDelco DIN66 / Raiden DIN66 / Yokohama DIN66'
        }
      }
    },
    Subaru: {
      Forester: {
        '2013-2025': {
          '2.0 i-L/i-S': 'Motolite Excel Q85 (I-Stop) / Amaron Q85 / Delkor Q85 / ACDelco Q85 / Raiden Q85'
        }
      },
      XV: {
        '2012-2025': {
          '2.0 i/i-S': 'Motolite Excel Q85 (I-Stop) / Amaron Q85 / Delkor Q85 / ACDelco Q85 / Raiden Q85'
        }
      }
    }
  },
  Motorcycle: {
    Yamaha: {
      NMAX: {
        '2015-2025': {
          '155 ABS/Non-ABS': 'Motolite MF YTX7L-BS / GS YTX7L-BS / Yuasa YTX7L-BS'
        }
      },
      Aerox: {
        '2017-2025': {
          '155 Standard/S': 'Motolite MF YTX7L-BS / GS YTX7L-BS / Yuasa YTX7L-BS'
        }
      },
      Mio: {
        '2010-2025': {
          'Sporty/i125/Soul': 'Motolite MF YTX4L-BS / GS YTX4L-BS / Yuasa YTX4L-BS',
          'Fazzio 125': 'Motolite MF YTZ6V / GS YTZ6V / Yuasa YTZ6V'
        }
      },
      Sniper: {
        '2015-2025': {
          '150/155': 'Motolite MF YTZ5S / GS YTZ5S / Yuasa YTZ5S'
        }
      },
      XSR155: {
        '2019-2025': {
          'Standard': 'Motolite MF YTZ5S / GS YTZ5S / Yuasa YTZ5S'
        }
      }
    },
    Honda: {
      Click: {
        '2018-2025': {
          '125i/150i/160': 'Motolite MF YTZ6V / GS YTZ6V / Yuasa YTZ6V'
        }
      },
      PCX: {
        '2018-2025': {
          '150/160': 'Motolite MF YTZ8V / GS YTZ8V / Yuasa YTZ8V'
        }
      },
      ADV: {
        '2019-2025': {
          '150/160': 'Motolite MF YTZ8V / GS YTZ8V / Yuasa YTZ8V'
        }
      },
      Beat: {
        '2015-2025': {
          '110 Fi': 'Motolite MF YTX4L-BS / GS YTX4L-BS / Yuasa YTX4L-BS'
        }
      },
      WinnerX: {
        '2024-2025': {
          'Standard/ABS': 'Motolite MF YTZ6V / GS YTZ6V / Yuasa YTZ6V'
        }
      }
    },
    Kawasaki: {
      Rouser: {
        '2012-2025': {
          '135/180/200': 'Motolite MF YTX9-BS / GS YTX9-BS / Yuasa YTX9-BS',
          'NS125': 'Motolite MF YTX7L-BS / GS YTX7L-BS'
        }
      },
      Ninja: {
        '2015-2025': {
          '250/300/400': 'Motolite MF YTX9-BS / GS YTX9-BS / Yuasa YTX9-BS'
        }
      }
    },
    Suzuki: {
      Raider: {
        '2015-2025': {
          '150 Fi/Carb': 'Motolite MF YTZ5S / GS YTZ5S / Yuasa YTZ5S'
        }
      },
      Gixxer: {
        '2016-2025': {
          '150/250': 'Motolite MF YTZ7S / GS YTZ7S / Yuasa YTZ7S'
        }
      }
    },
    Kymco: {
      Like: {
        '2015-2025': {
          '125/150': 'Motolite MF YTX7L-BS / GS YTX7L-BS / Yuasa YTX7L-BS'
        }
      },
      Xciting: {
        '2018-2025': {
          '300/400': 'Motolite MF YTX12-BS / GS YTX12-BS / Yuasa YTX12-BS'
        }
      },
      Super8: {
        '2012-2025': {
          '150': 'Motolite MF YTX7L-BS / GS YTX7L-BS / Yuasa YTX7L-BS'
        }
      }
    },
    Vespa: {
      Primavera: {
        '2015-2025': {
          '150': 'Motolite MF YTX7L-BS / GS YTX7L-BS / Yuasa YTX7L-BS'
        }
      },
      Sprint: {
        '2015-2025': {
          '150': 'Motolite MF YTX7L-BS / GS YTX7L-BS / Yuasa YTX7L-BS'
        }
      },
      GTS: {
        '2015-2025': {
          '300': 'Motolite MF YTX12-BS / GS YTX12-BS / Yuasa YTX12-BS'
        }
      }
    },
    KTM: {
      Duke: {
        '2015-2025': {
          '200/390': 'Motolite MF YTX9-BS / GS YTX9-BS / Yuasa YTX9-BS'
        }
      },
      RC: {
        '2015-2025': {
          '200/390': 'Motolite MF YTX9-BS / GS YTX9-BS / Yuasa YTX9-BS'
        }
      }
    },
    Bajaj: {
      RE: {
        'All Years': {
          '4S/Compact/Maxima': 'Motolite MF YTX7L-BS / GS YTX7L-BS / Yuasa YTX7L-BS'
        }
      },
      Pulsar: {
        'All Years': {
          '150/180/200NS': 'Motolite MF YTX9-BS / GS YTX9-BS / Yuasa YTX9-BS'
        }
      }
    },
    TVS: {
      King: {
        'All Years': {
          'Deluxe/Duramax': 'Motolite MF YTX7L-BS / GS YTX7L-BS / Yuasa YTX7L-BS'
        }
      },
      Dazz: {
        'All Years': {
          '110 Fi': 'Motolite MF YTX4L-BS / GS YTX4L-BS / Yuasa YTX4L-BS'
        }
      }
    }
  }
};
