import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Zap, 
  Battery, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Menu,
  X,
  AlertTriangle,
  CheckCircle2,
  Settings,
  Fuel, 
  CircleDot,
  Facebook,
  ExternalLink,
  MessageSquare,
  Car,
  Bike,
  Ship,
  Truck,
  Quote,
  Search
} from 'lucide-react';
import { 
  RESCUE_HOTLINES, 
  SOS_WARRANTY, 
  BRANDS, 
  PRODUCT_CATEGORIES,
  SERVICES, 
  TESTIMONIALS,
  BRANCHES, 
  LANDLINE,
  VEHICLE_DATA
} from './constants';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col w-fit ${className}`}>
    <div className="flex items-stretch">
      {/* MP88 */}
      <div className="relative flex flex-col justify-between pr-1 pb-0.5">
        <div 
          className="text-[28px] sm:text-[36px] font-black italic tracking-tighter leading-none text-[#FF6600]" 
          style={{ 
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 2px 2px 0 #000'
          }}
        >
          MP88
        </div>
        {/* Swoosh */}
        <div className="absolute bottom-0 left-0 w-[105%] h-[6px] sm:h-[8px] bg-black" style={{ clipPath: 'polygon(0 0, 100% 40%, 98% 100%, 0 100%)' }}></div>
      </div>
      {/* Red Box */}
      <div className="bg-[#E32613] text-white px-2 sm:px-3 py-1 flex flex-col justify-center ml-1">
        <div className="text-[14px] sm:text-[16px] font-bold leading-none tracking-wide">BATTERY WORLD</div>
        <div className="text-[11px] sm:text-[13px] font-medium leading-none tracking-wide mt-0.5">WE DELIVER</div>
      </div>
    </div>
    {/* Orange Box */}
    <div className="bg-[#FF6600] text-white text-center py-1 mt-1 w-full">
      <div className="text-[20px] sm:text-[24px] font-bold leading-none tracking-widest">09989996788</div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRescueFab, setShowRescueFab] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  const [finderType, setFinderType] = useState('Automotive');
  const [finderMake, setFinderMake] = useState('');
  const [finderModel, setFinderModel] = useState('');
  const [finderYear, setFinderYear] = useState('');
  const [finderVariant, setFinderVariant] = useState('');
  const [finderResult, setFinderResult] = useState<string | null>(null);

  const availableMakes = useMemo(() => Object.keys(VEHICLE_DATA[finderType] || {}), [finderType]);
  const availableModels = useMemo(() => finderMake ? Object.keys(VEHICLE_DATA[finderType]?.[finderMake] || {}) : [], [finderType, finderMake]);
  const availableYears = useMemo(() => finderModel ? Object.keys(VEHICLE_DATA[finderType]?.[finderMake]?.[finderModel] || {}) : [], [finderType, finderMake, finderModel]);
  const availableVariants = useMemo(() => finderYear ? Object.keys(VEHICLE_DATA[finderType]?.[finderMake]?.[finderModel]?.[finderYear] || {}) : [], [finderType, finderMake, finderModel, finderYear]);

  const handleFindBattery = () => {
    if (finderType && finderMake && finderModel && finderYear && finderVariant) {
      setFinderResult(VEHICLE_DATA[finderType][finderMake][finderModel][finderYear][finderVariant]);
    }
  };

  useEffect(() => { setFinderMake(''); setFinderModel(''); setFinderYear(''); setFinderVariant(''); setFinderResult(null); }, [finderType]);
  useEffect(() => { setFinderModel(''); setFinderYear(''); setFinderVariant(''); setFinderResult(null); }, [finderMake]);
  useEffect(() => { setFinderYear(''); setFinderVariant(''); setFinderResult(null); }, [finderModel]);
  useEffect(() => { setFinderVariant(''); setFinderResult(null); }, [finderYear]);
  useEffect(() => { setFinderResult(null); }, [finderVariant]);

  const categorizedResults = useMemo(() => {
    if (!finderResult) return null;
    const batteries = finderResult.split(' / ');
    const categories: Record<string, string[]> = {
      'High-End (Premium)': [],
      'Mid-Range (Standard)': [],
      'Budget (Economy)': []
    };

    batteries.forEach(battery => {
      const upper = battery.toUpperCase();
      if (upper.includes('EXCEL') || upper.includes('AMARON') || upper.includes('DELKOR') || upper.includes('ACDELCO')) {
        categories['High-End (Premium)'].push(battery);
      } else if (upper.includes('GOLD') || upper.includes('GS') || upper.includes('RAIDEN') || upper.includes('YOKOHAMA')) {
        categories['Mid-Range (Standard)'].push(battery);
      } else {
        categories['Budget (Economy)'].push(battery);
      }
    });

    return categories;
  }, [finderResult]);

  const locationCategories = useMemo(() => ['All', 'Mactan', 'Cebu', 'Tagbilaran', 'Mandaue', 'Dapitan', 'Dipolog', 'Davao'], []);

  const filteredBranches = useMemo(() => {
    if (selectedLocation === 'All') return BRANCHES;
    return BRANCHES.filter(branch => {
      // Logic for Dipolog / Dapitan combined entry
      if (selectedLocation === 'Dapitan' || selectedLocation === 'Dipolog') {
        return (
          branch.location === 'Dipolog' || 
          branch.location === 'Dapitan' || 
          branch.name.toUpperCase().includes('DIPOLOG') || 
          branch.name.toUpperCase().includes('DAPITAN')
        );
      }
      return branch.location === selectedLocation;
    });
  }, [selectedLocation]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      setIsMenuOpen(false);
      window.history.pushState(null, '', `#${id}`);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-85px 0px -70% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ['home', 'battery-finder', 'products', 'services', 'locations', 'contact'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Find Battery', id: 'battery-finder' },
    { name: 'Products', id: 'products' },
    { name: 'Services', id: 'services' },
    { name: 'Locations', id: 'locations' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      {/* Fixed Emergency Banner */}
      <div className="fixed top-0 inset-x-0 z-[70] bg-red-600 text-white py-1.5 px-4 text-center text-[10px] sm:text-xs font-black flex items-center justify-center gap-4 overflow-hidden shadow-lg">
        <div className="animate-marquee whitespace-nowrap">
          🚨 24/7 BATTERY RESCUE: {RESCUE_HOTLINES[3]} / {RESCUE_HOTLINES[2]} 🚨 FREE DELIVERY & INSTALLATION IN MACTAN, CEBU, MANDAUE & MORE! 🚨 LANDLINE: {LANDLINE} 🚨
        </div>
      </div>

      {/* Persistence Navigation Bar */}
      <nav className={`fixed top-[28px] inset-x-0 z-[60] transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-0' : 'bg-white/90 py-1'
      } border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <div className="flex items-center">
              <a 
                href="#home" 
                onClick={(e) => handleLinkClick(e, 'home')} 
                className="flex-shrink-0 flex items-center gap-4 group transition-transform hover:scale-[1.02]"
              >
                <Logo className="scale-75 sm:scale-90 origin-left" />
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`font-bold text-[11px] uppercase tracking-widest transition-all duration-300 hover:text-red-600 relative py-2 ${
                    activeSection === item.id 
                      ? 'text-red-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600' 
                      : 'text-gray-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href={`tel:${RESCUE_HOTLINES[3]}`}
                className="bg-red-600 text-white px-5 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-xl shadow-red-500/20 active:scale-95"
              >
                <Zap size={14} fill="white" />
                Rescue
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-gray-900 bg-gray-50 border border-gray-200"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden fixed inset-x-0 bg-white border-b border-gray-200 transition-all duration-500 ease-in-out shadow-2xl overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}>
          <div className="px-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`flex items-center justify-between p-4 rounded-xl font-bold transition-all ${
                  activeSection === item.id ? 'bg-red-50 text-red-600' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                {item.name}
                <ChevronRight size={18} className={activeSection === item.id ? 'opacity-100' : 'opacity-30'} />
              </a>
            ))}
            <div className="pt-4">
              <a 
                href={`tel:${RESCUE_HOTLINES[3]}`}
                onClick={() => setIsMenuOpen(false)}
                className="block bg-red-600 text-white text-center py-4 rounded-xl font-black text-lg shadow-lg active:scale-95 transition-transform"
              >
                CALL RESCUE NOW
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-[108px]">
        {/* Hero Section */}
        <section id="home" className="relative bg-black overflow-hidden py-16 lg:py-32 scroll-mt-24">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600" 
              alt="Automotive background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest mb-4 shadow-xl">
                <AlertTriangle size={14} className="mr-2" /> Authorized Motolite Distributor
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
                Your trusted ally to power <span className="text-yellow-400">long haul use.</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">
                The region's authority in all battery-related requirements. 24/7 Rescue, Free Delivery, and Free Installation across Cebu, Davao, and Bohol.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href={`tel:${RESCUE_HOTLINES[3]}`}
                  className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-yellow-400/20 active:scale-95"
                >
                  <Phone size={24} />
                  {RESCUE_HOTLINES[3]}
                </a>
                <a 
                  href="#battery-finder"
                  onClick={(e) => handleLinkClick(e, 'battery-finder')}
                  className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95"
                >
                  <Search size={24} />
                  Find Battery
                </a>
              </div>
            </div>

            <div className="lg:w-2/5 relative">
              <div className="bg-white p-8 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] space-y-6 max-w-sm mx-auto">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                  <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
                    <Battery size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">Expert Care</h3>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">24/7 Diagnostics</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Battery State-of-Health Check",
                    "Alternator Charging System Check",
                    "State-of-the-art Testing Tech",
                    "Dedicated Specialist Assistance"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="font-semibold text-sm leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                   <div className="text-[10px] text-gray-400 mb-3 font-black uppercase tracking-widest text-center">Need Battery Advice?</div>
                   <div className="flex flex-col gap-3">
                      <a 
                        href="#contact"
                        onClick={(e) => handleLinkClick(e, 'contact')}
                        className="w-full bg-black text-white px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-600 transition-all shadow-xl active:scale-95"
                      >
                        <MessageSquare size={20} />
                        Consult with our Specialists
                      </a>
                      <p className="text-[10px] text-gray-400 text-center font-bold uppercase">Our team is available 24/7</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Battery Finder */}
        <section id="battery-finder" className="py-24 bg-gray-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2">
                {/* Left side: Form */}
                <div className="p-10 lg:p-16">
                  <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4">Battery Finder</h2>
                  <p className="text-4xl font-black text-gray-900 tracking-tighter mb-8">FIND THE RIGHT BATTERY FOR YOUR VEHICLE</p>
                  
                  <div className="space-y-6">
                    {/* Type Selection */}
                    <div className="flex gap-4 mb-8">
                      {['Automotive', 'Motorcycle'].map(type => (
                        <button
                          key={type}
                          onClick={() => setFinderType(type)}
                          className={`flex-1 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${finderType === type ? 'bg-red-600 text-white shadow-lg shadow-red-200' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    {/* Selects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all"
                        value={finderMake}
                        onChange={(e) => setFinderMake(e.target.value)}
                      >
                        <option value="">Select Brand</option>
                        {availableMakes.map(make => <option key={make} value={make}>{make}</option>)}
                      </select>
                      
                      <select 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all disabled:opacity-50"
                        value={finderModel}
                        onChange={(e) => setFinderModel(e.target.value)}
                        disabled={!finderMake}
                      >
                        <option value="">Select Model</option>
                        {availableModels.map(model => <option key={model} value={model}>{model}</option>)}
                      </select>

                      <select 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all disabled:opacity-50"
                        value={finderYear}
                        onChange={(e) => setFinderYear(e.target.value)}
                        disabled={!finderModel}
                      >
                        <option value="">Select Year</option>
                        {availableYears.map(year => <option key={year} value={year}>{year}</option>)}
                      </select>

                      <select 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all disabled:opacity-50 md:col-span-2"
                        value={finderVariant}
                        onChange={(e) => setFinderVariant(e.target.value)}
                        disabled={!finderYear}
                      >
                        <option value="">Select Variant</option>
                        {availableVariants.map(variant => <option key={variant} value={variant}>{variant}</option>)}
                      </select>
                    </div>

                    <button 
                      onClick={handleFindBattery}
                      disabled={!finderVariant}
                      className="w-full bg-black text-white py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-red-600 transition-all shadow-xl disabled:opacity-50 disabled:hover:bg-black mt-4 flex items-center justify-center gap-2"
                    >
                      <Search size={18} /> Find My Battery
                    </button>
                  </div>
                </div>

                {/* Right side: Result */}
                <div className="bg-gray-900 p-10 lg:p-16 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <Battery size={400} className="absolute -right-20 -bottom-20 rotate-12" />
                  </div>
                  
                  <div className="relative z-10 w-full">
                    {finderResult ? (
                      <div className="animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                          <CheckCircle2 size={40} className="text-white" />
                        </div>
                        <h3 className="text-sm font-black text-yellow-400 uppercase tracking-widest mb-6">Recommended Batteries</h3>
                        <div className="space-y-6 mb-8 text-left">
                          {categorizedResults && (Object.entries(categorizedResults) as [string, string[]][]).map(([category, batteries]) => (
                            batteries.length > 0 && (
                              <div key={category} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2 ${
                                  category.includes('High') ? 'text-yellow-500' : 
                                  category.includes('Mid') ? 'text-blue-400' : 'text-gray-400'
                                }`}>
                                  <span className="h-px w-4 bg-current opacity-30"></span>
                                  {category}
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                  {batteries.map((battery, index) => (
                                    <div key={index} className="bg-white/5 py-3 px-5 rounded-xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all flex items-center justify-between">
                                      <p className="text-lg font-black tracking-tighter text-white group-hover:text-yellow-400 transition-colors">
                                        {battery}
                                      </p>
                                      <div className={`w-2 h-2 rounded-full ${
                                        category.includes('High') ? 'bg-yellow-500' : 
                                        category.includes('Mid') ? 'bg-blue-400' : 'bg-gray-400'
                                      }`}></div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )
                          ))}
                        </div>
                        
                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm mb-8">
                          <p className="text-sm font-medium text-gray-300 mb-4">Available for immediate delivery and installation.</p>
                          <a 
                            href={`tel:${RESCUE_HOTLINES[3]}`}
                            className="w-full bg-red-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-xl flex items-center justify-center gap-2"
                          >
                            <Phone size={18} /> Call to Order
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-500 flex flex-col items-center">
                        <Car size={64} className="mb-6 opacity-20" />
                        <p className="text-xl font-bold">Select your vehicle details to see the recommended battery.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4">Our Products</h2>
              <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">OPTIONS FOR ALL YOUR BATTERY NEEDS</p>
              <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
              {PRODUCT_CATEGORIES.map((category) => (
                <div key={category.id} className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl hover:border-red-100 transition-all hover:-translate-y-2">
                  <div className="w-20 h-20 bg-white text-gray-900 rounded-full flex items-center justify-center mb-8 shadow-md group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {category.icon === 'Car' && <Car size={36} />}
                    {category.icon === 'Bike' && <Bike size={36} />}
                    {category.icon === 'Ship' && <Ship size={36} />}
                  </div>
                  <h3 className="font-black text-2xl tracking-tight text-gray-900 mb-4 uppercase">{category.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase mb-8">Premium Brands We Carry</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
              {BRANDS.map((brand) => (
                <div key={brand.name} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center group hover:shadow-xl hover:border-red-100 transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all scale-100 group-hover:scale-110">{brand.flag}</div>
                  <h3 className="font-black text-lg tracking-tight text-gray-900 group-hover:text-red-600 transition-colors uppercase">{brand.name}</h3>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{brand.origin}</p>
                </div>
              ))}
              <div className="bg-red-600 p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center text-white text-center">
                <h3 className="font-black text-2xl italic text-yellow-400">Widest Range</h3>
                <p className="text-[10px] uppercase font-bold opacity-80 mt-2 tracking-widest">Global Standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 bg-gray-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
              <div className="max-w-2xl">
                <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4">Motolite Services</h2>
                <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">EXPERT CARE ON THE ROAD</p>
                <p className="text-gray-500 mt-6 text-lg font-medium">Professional roadside assistance and specialized automotive power services available around the clock.</p>
              </div>
              <div className="flex items-center gap-5 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-red-500/5">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shadow-inner">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <div className="font-black text-sm uppercase text-gray-900 tracking-widest">SOS Warranty</div>
                  <div className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-tight">#{SOS_WARRANTY}</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {SERVICES.map((svc) => (
                <div key={svc.id} className="group p-10 bg-white rounded-[2.5rem] shadow-sm border border-transparent hover:border-red-100 hover:shadow-2xl transition-all duration-500 flex flex-col">
                  <div className="w-20 h-20 bg-gray-900 text-white rounded-[1.5rem] flex items-center justify-center mb-10 shadow-lg group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500">
                    {svc.icon === 'Zap' && <Zap size={36} />}
                    {svc.icon === 'Truck' && <Truck size={36} />}
                    {svc.icon === 'ShieldCheck' && <ShieldCheck size={36} />}
                    {svc.icon === 'Settings' && <Settings size={36} />}
                    {svc.icon === 'Battery' && <Battery size={36} />}
                    {svc.icon === 'Fuel' && <Fuel size={36} />}
                    {svc.icon === 'CircleDot' && <CircleDot size={36} />}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter leading-tight">{svc.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium flex-grow">{svc.description}</p>
                  <a href={`tel:${RESCUE_HOTLINES[3]}`} className="mt-8 inline-flex items-center gap-3 text-red-600 font-black uppercase text-xs tracking-[0.2em] group-hover:translate-x-2 transition-all">
                    Inquire Now <ChevronRight size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Grid with Category Filtering */}
        <section id="locations" className="py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
              <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4">Branch Network</h2>
              <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">OUR LOCATIONS</p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {locationCategories.map(loc => (
                  <button 
                    key={loc} 
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 ${
                      selectedLocation === loc 
                        ? 'bg-red-600 text-white shadow-lg shadow-red-200 ring-2 ring-red-100 ring-offset-2' 
                        : 'bg-gray-50 border border-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-600 hover:border-red-100'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-[400px]">
              {filteredBranches.length > 0 ? (
                filteredBranches.map((branch, idx) => (
                  <div key={`${branch.name}-${idx}`} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-red-100 transition-all flex flex-col h-full group fade-in">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-black text-gray-900 tracking-tighter leading-tight text-xl group-hover:text-red-600 transition-colors uppercase">{branch.name}</h3>
                      <span className="bg-yellow-400 text-black text-[9px] font-black uppercase px-3 py-1 rounded-full shadow-sm">{branch.location}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed font-medium">{branch.address}</p>
                    <div className="space-y-4 mt-auto pt-8 border-t border-gray-50">
                      <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                        <Clock size={18} className="text-red-500 shrink-0" />
                        {branch.hours}
                      </div>
                      <a 
                        href={`tel:${branch.phone}`}
                        className="flex items-center gap-3 text-xs font-black text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-widest"
                      >
                        <Phone size={18} className="text-blue-500 shrink-0" />
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400 space-y-4">
                  <MapPin size={48} className="opacity-20" />
                  <p className="font-black uppercase tracking-widest text-xs">No branches found in this category</p>
                  <button 
                    onClick={() => setSelectedLocation('All')}
                    className="text-red-600 text-xs font-black underline uppercase tracking-widest"
                  >
                    View All Branches
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-xs font-black text-yellow-400 uppercase tracking-[0.3em] mb-4">Testimonials</h2>
              <p className="text-4xl lg:text-5xl font-black tracking-tighter">WHAT OUR CLIENTS SAY ABOUT US</p>
              <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-800 p-10 rounded-[2rem] relative">
                  <Quote className="absolute top-8 right-8 text-gray-700 opacity-50" size={48} />
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed mb-8 relative z-10">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-black text-lg">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-24 bg-gray-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4">Contact Us</h2>
                  <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">GET IN TOUCH</p>
                  <p className="text-gray-500 mt-6 text-lg font-medium leading-relaxed">
                    Our team is available 24/7 to help you with your automotive power needs and emergency rescues.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <Phone className="text-red-600 mb-4" size={32} />
                  <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-2">Rescue Hotlines</h4>
                  <div className="space-y-2">
                    {RESCUE_HOTLINES.map(num => (
                      <a key={num} href={`tel:${num}`} className="block text-xl font-black text-gray-900 hover:text-red-600 transition-colors tracking-tight">{num}</a>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 font-bold uppercase mt-4 tracking-widest">Immediate 24/7 Response</p>
                </div>
              </div>

              <div className="bg-white p-8 lg:p-10 rounded-[3rem] shadow-xl shadow-gray-200 border border-gray-100 text-center flex flex-col items-center justify-center space-y-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Facebook size={32} fill="currentColor" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">CONTACT US IN FACEBOOK</h3>
                  <p className="text-gray-500 font-medium text-sm max-w-xs mx-auto">
                    You can message us in our page.
                  </p>
                </div>
                
                <a 
                  href="https://www.facebook.com/MaboloNearSMCityCebu/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs bg-blue-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                  <ExternalLink size={18} />
                  Visit our Page
                </a>
                
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Connect with us online
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1 space-y-8">
              <div className="flex items-center gap-3">
                <Logo className="scale-90 origin-left" />
              </div>
              <p className="text-gray-500 font-bold leading-relaxed text-sm">
                Expert automotive power and 24/7 rescue services across the Philippines.
              </p>
            </div>

            <div className="col-span-1">
              <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-10 text-yellow-400">Quick Links</h4>
              <ul className="space-y-5 text-gray-500 font-black text-xs uppercase tracking-widest">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} onClick={(e) => handleLinkClick(e, item.id)} className="hover:text-white transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-10 text-yellow-400">Head Office</h4>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-yellow-400 shrink-0" size={24} />
                  <p className="text-gray-500 text-sm font-bold leading-relaxed">Benley Building, Mabolo, Cebu City, PH</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-yellow-400 shrink-0" size={24} />
                  <div className="space-y-1">
                    <a href={`tel:${RESCUE_HOTLINES[3]}`} className="block text-gray-500 text-sm font-black tracking-widest hover:text-white transition-colors">{RESCUE_HOTLINES[3]}</a>
                    <span className="block text-gray-500 text-xs font-black tracking-widest">{LANDLINE}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1">
               <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-10 text-yellow-400">Coverage</h4>
               <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-wider text-gray-500">
                  <li>Mactan</li>
                  <li>Cebu</li>
                  <li>Mandaue</li>
                  <li>Davao</li>
                  <li>Bohol</li>
               </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-12 text-center text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
            <p>© 2024 MP88 BATTERY WORLD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* Rescue FAB */}
      {showRescueFab && (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-5">
          <div className="bg-white px-6 py-3 rounded-2xl shadow-2xl text-black text-[10px] font-black border-2 border-red-600 uppercase tracking-widest animate-bounce">
             🚨 Need Rescue?
          </div>
          <a 
            href={`tel:${RESCUE_HOTLINES[3]}`}
            className="w-16 h-16 bg-red-600 text-white rounded-[1.5rem] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          >
            <Zap size={32} fill="white" />
          </a>
        </div>
      )}
    </div>
  );
};

export default App;