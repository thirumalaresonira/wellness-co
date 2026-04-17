import React from 'react';
import {
  Users,
  Calendar,
  PhoneCall,
  BarChart3,
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  BrainCircuit,
  Zap,
  Globe,
  CreditCard,
  LayoutDashboard,
  Share2,
  Link as SocialLink,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  RefreshCcw,
  Star,
  ShieldCheck,
  X as CloseIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import cryotherapyImg from './assets/cryotherapy.png';
import hyperbaricImg from './assets/hyperbaric.png';
import ivDripImg from './assets/iv-drip.png';
import redLightImg from './assets/red-light.png';

const TherapyCard = ({ title, description, videoUrl, posterUrl, bgColor }) => {
  const videoRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Playback failed or was interrupted
          console.log("Interactive playback prevented:", error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group overflow-hidden rounded-[2.5rem] p-4 ${bgColor} transition-all duration-500 shadow-soft hover:shadow-xl`}
    >
      <div className="relative aspect-square md:aspect-video mb-6 rounded-[2rem] overflow-hidden shadow-inner bg-gray-100">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster={posterUrl}
          className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 z-10"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-20" />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-2xl font-bold mb-2 text-wellness-dark">{title}</h3>
        <p className="text-wellness-gray text-sm leading-relaxed mb-4">{description}</p>
        <div className="inline-flex items-center text-xs font-black uppercase tracking-widest text-wellness-dark group-hover:gap-2 transition-all">
          Learn More <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, colorClass }) => (
  <motion.div
    whileHover={{ y: -15, scale: 1.02 }}
    className={`p-10 rounded-[2.5rem] shadow-soft transition-all duration-500 border border-black/5 backdrop-blur-sm premium-card-hover ${colorClass}`}
  >
    <div className="flex items-center justify-center w-14 h-14 mb-8 rounded-2xl bg-pink-100 shadow-sm">
      <Icon className="text-wellness-dark" size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-wellness-gray text-base leading-relaxed mb-6">{description}</p>
    <div className="flex items-center gap-2 text-wellness-dark font-bold text-sm cursor-pointer group">
      Explore Module <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </div>
  </motion.div>
);

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const navLinks = [
    {
      id: 'platform',
      name: 'Platform',
      items: [
        { title: 'Unified CRM', desc: 'Centralized patient health data' },
        { title: 'Smart Billing', desc: 'Automated membership invoicing' },
        { title: 'Scheduling', desc: 'AI-optimized resource booking' }
      ]
    },
    {
      id: 'ai-intelligence',
      name: 'AI Intelligence',
      items: [
        { title: 'Facial Mapping', desc: 'Deep-learning dermal and aesthetic analysis.', icon: BrainCircuit },
        { title: 'Retention AI', desc: 'Self-correcting neural follow-up loops.', icon: RefreshCcw },
        { title: 'Biometric Sync', desc: 'Live clinical biometric telemetry tracking.', icon: Zap }
      ]
    },
    {
      id: 'solutions',
      name: 'Solutions',
      items: [
        { title: 'Medical Spas', desc: 'Workflow scaling for premium aesthetics.', icon: Sparkles },
        { title: 'Wellness Centers', desc: 'Holistic clinical practice management.', icon: Globe },
        { title: 'Multi-locations', desc: 'Cross-branch synchronized operations.', icon: MapPin }
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100; // Offset for fixed nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveDropdown(null);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f7ff] custom-scrollbar overflow-x-hidden selection:bg-[#ff8da1] selection:text-white">
      {/* Navigation - Futuristic Command Capsule */}
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[100] transition-all duration-700 ${
        isScrolled ? 'top-4' : 'top-8'
      }`}>
        <div className="bg-sky-200/95 backdrop-blur-3xl border border-white/40 shadow-[0_32px_64px_-16px_rgba(56,189,248,0.3)] rounded-[3rem] px-8 py-4 flex justify-between items-center relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Brand */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 bg-[#ff8da1] rounded-2xl flex items-center justify-center shadow-2xl group/logo cursor-pointer overflow-hidden transform hover:rotate-[15deg] transition-all">
              <Sparkles className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-black">Wellness</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ff8da1]">Operating System</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12 relative z-10">
            {navLinks.map(link => (
              <div
                key={link.name}
                className="relative group py-2"
              >
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-black/60 hover:text-black transition-all flex items-center gap-2 cursor-pointer select-none active:scale-95"
                >
                  {link.name}
                  <div className="w-1 h-1 rounded-full bg-[#ff8da1] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-[3]"></div>
                </div>

              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4 relative z-10">
            <Link to="/dashboard" className="px-8 py-4 bg-[#ff8da1] text-white rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest hover:bg-[#ff7a91] transition-all shadow-xl active:scale-95 flex items-center gap-3">
              Clinical Portal <LayoutDashboard size={16} />
            </Link>
          </div>
        </div>
      </nav>



      {/* Hero Section - Neural Sanctuary UI */}
      <section className="relative min-h-screen w-full pt-60 pb-40 px-[5%] overflow-hidden flex items-center">
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-[0.8] grayscale-[0.1] scale-105"
          >
            <source src="/videos/Homepage.webm" type="video/webm" />
          </video>
          {/* Neural Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#dbeafe]/80 via-transparent to-[#dbeafe]/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#dbeafe_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Hero Content - Left Aligned */}
          <div className="lg:col-span-8 space-y-12 text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-sky-100/60 backdrop-blur-md rounded-2xl border border-sky-200 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-700">Neural Sync v4.2 Active</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-8xl font-black mb-10 leading-[0.95] tracking-[-0.05em] text-black">
                The New <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Clinical Data</span> <br />
                Standard.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-medium">
                Bridging the gap between high-fidelity AI diagnostics and personalized clinical care journeys.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-8"
            >
              <Link
                to="/dashboard"
                className="px-12 py-6 bg-[#ff8da1] text-white rounded-3xl text-sm font-black uppercase tracking-widest shadow-[0_24px_48px_-12px_rgba(255,141,161,0.3)] hover:bg-[#ff7a91] hover:scale-105 active:scale-95 transition-all"
              >
                Access Dashboard
              </Link>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={20} className="fill-black ml-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black uppercase tracking-widest text-black">Watch Film</span>
                  <span className="text-[10px] text-gray-400 font-bold">2m 14s Clinical Demo</span>
                </div>
              </div>
            </motion.div>
          </div>

          </div>
        </div>
      </section>


      {/* Therapy Showcase Section */}
      <section id="ai-intelligence" className="relative py-32 px-[5%] mesh-gradient overflow-hidden">
        <div className="absolute inset-0 bg-sky-50/40 backdrop-blur-[2px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 bg-wellness-mint text-[10px] font-black uppercase tracking-[0.2em] rounded-full text-emerald-800 border border-emerald-100 mb-6 inline-block"
            >
              Curated Treatments
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
            >
              Advanced Wellness <br /> Therapies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-wellness-gray max-w-2xl leading-relaxed"
            >
              Experience cutting-edge treatments powered by AI-driven care and precision tracking.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TherapyCard
              title="AI Facial Mapping"
              description="Precision skin analysis and rejuvenation plans using deep-learning aesthetics tracking."
              videoUrl="https://player.vimeo.com/progressive_redirect/playback/462103328/rendition/540p/file.mp4?loc=external&signature=d9468e89f6fd1d916298517208573b06323cfc25"
              posterUrl="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
              bgColor="bg-wellness-lavender"
            />
            <TherapyCard
              title="Hyperbaric Oxygen"
              description="Supercharge cellular repair and cognitive function with pressurized oxygen saturation monitoring."
              videoUrl="https://player.vimeo.com/progressive_redirect/playback/434045526/rendition/540p/file.mp4?loc=external&signature=c27bc377a060938ff408544d08a2fe62f489370c"
              posterUrl={hyperbaricImg}
              bgColor="bg-wellness-mint"
            />
            <TherapyCard
              title="Dynamic Cryotherapy"
              description="Advanced recovery with localized thermal tracking for maximum metabolic efficiency."
              videoUrl="https://player.vimeo.com/progressive_redirect/playback/494639999/rendition/540p/file.mp4?loc=external&signature=12467d018693c0429f9e38f260170a734e6f4770"
              posterUrl={cryotherapyImg}
              bgColor="bg-wellness-pink"
            />
            <TherapyCard
              title="Face Wellness & Anti-Aging"
              description="AI-guided treatments designed to revitalize skin cellular health and restore youthful radiance."
              videoUrl="https://player.vimeo.com/progressive_redirect/playback/434045545/rendition/540p/file.mp4?loc=external&signature=6a94b4369e946a4959a4cabee7976159c6563c62"
              posterUrl="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
              bgColor="bg-wellness-lavender/40"
            />
            <TherapyCard
              title="IV Drip Therapy"
              description="Direct-to-bloodstream nutrient infusions for immediate hydration and metabolic optimization."
              videoUrl="https://player.vimeo.com/progressive_redirect/playback/462103328/rendition/540p/file.mp4?loc=external&signature=d9468e89f6fd1d916298517208573b06323cfc25"
              posterUrl={ivDripImg}
              bgColor="bg-wellness-mint/40"
            />
            <TherapyCard
              title="Red Light Therapy"
              description="Photobiomodulation treatments to enhance cellular energy and reduce systemic inflammation."
              videoUrl="https://player.vimeo.com/progressive_redirect/playback/434045526/rendition/540p/file.mp4?loc=external&signature=c27bc377a060938ff408544d08a2fe62f489370c"
              posterUrl={redLightImg}
              bgColor="bg-wellness-pink/40"
            />
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="platform" className="relative py-40 px-[5%] mesh-gradient overflow-hidden">
        <div className="absolute inset-0 bg-sky-50/40 backdrop-blur-[2px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Built for Enterprise Scale</h2>
            <p className="text-xl text-wellness-gray max-w-2xl mx-auto">One platform to manage client lifetimes, branch networks, and AI follow-ups with medical precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Client Management"
              description="Unified health profiles and personalized care history for every unique patient journey."
              colorClass="bg-wellness-lavender/40 hover:bg-wellness-lavender border-wellness-lavender/30"
            />
            <FeatureCard
              icon={Calendar}
              title="Smart Scheduling"
              description="AI-optimized booking engine with automated resource allocation and room management."
              colorClass="bg-wellness-mint/40 hover:bg-wellness-mint border-wellness-mint/30"
            />
            <FeatureCard
              icon={CreditCard}
              title="Billing & Memberships"
              description="Seamless recurring revenue, membership tier automation, and clinical invoicing."
              colorClass="bg-wellness-pink/40 hover:bg-wellness-pink border-wellness-pink/30"
            />
            <FeatureCard
              icon={Zap}
              title="AI Follow-ups"
              description="Intelligent post-therapy engagement and retention loops driven by biometric data."
              colorClass="bg-[#fff7ed]/50 hover:bg-[#fff7ed] border-[#fff7ed]/30"
            />
            <FeatureCard
              icon={BarChart3}
              title="Analytics Dashboard"
              description="Real-time clinical insights into clinic performance, occupancy, and therapy outcomes."
              colorClass="bg-[#f0f9ff]/50 hover:bg-[#f0f9ff] border-[#f0f9ff]/30"
            />
            <FeatureCard
              icon={Globe}
              title="Multi-branch Management"
              description="Synchronized operations and centralized inventory across global wellness networks."
              colorClass="bg-[#f0fdf4]/50 hover:bg-[#f0fdf4] border-[#f0fdf4]/30"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="solutions" className="py-32 px-[5%] bg-sky-100 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">How It Works</h2>
            <p className="text-xl text-wellness-gray max-w-xl mx-auto">A seamless 4-step workflow to modernize your wellness operations.</p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-gray-100 z-0 -translate-y-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { icon: Users, title: "Manage Clients", desc: "Onboard patients with unified profiles", color: "bg-wellness-lavender" },
                { icon: Sparkles, title: "Track Therapies", desc: "Monitor sessions and metrics in real-time", color: "bg-wellness-mint" },
                { icon: BrainCircuit, title: "AI Follow-ups", desc: "Automate retention with intelligent loops", color: "bg-[#fff7ed]" },
                { icon: TrendingUp, title: "Grow Revenue", desc: "Scale with clinical data-driven insights", color: "bg-wellness-pink" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 relative`}>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-xs font-black shadow-sm border border-pink-200">
                      0{idx + 1}
                    </div>
                    <step.icon size={32} className="text-wellness-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-wellness-gray leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-[5%] bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h3 className="text-3xl font-black mb-4 italic">"The gold standard for modern wellness clinics."</h3>
            <p className="text-wellness-gray leading-relaxed mb-6">Trusted by 500+ premium centers worldwide to automate patient retention and scale therapy outcomes.</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-wellness-dark overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=32" alt="Reviewer" />
              </div>
              <div>
                <p className="font-bold">Dr. Amanda Vane</p>
                <p className="text-xs text-wellness-gray font-bold uppercase tracking-widest">Medical Director, Elite Wellness</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 grayscale opacity-40">
            {['VOGUE', 'BIZ INSIDER', 'Wired', 'Forbes', 'GQ', 'Health'].map(item => (
              <span key={item} className="text-xl font-black">{item}</span>
            ))}
          </div>
        </div>
      </section>






      {/* Detailed Redesigned Footer */}
      <footer className="py-24 px-[5%] bg-[#f0f9ff] border-t border-sky-100 text-wellness-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#ff8da1] rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">The Wellness Co.</span>
            </div>
            <p className="text-wellness-gray text-base leading-relaxed mb-10">
              India's First & Foremost Integrative Luxury Wellness Clinics. Discover Cutting-Edge USFDA, CE, and MFDS Approved Therapies based on our principles of enhanced Oxygenation, Hydration, and Blood Circulation for increased vitality, longevity, and well-being.
            </p>
          </div>

          {/* Therapies Column */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-black uppercase mb-8 tracking-widest italic">Therapies</h4>
            <ul className="flex flex-col gap-3 text-wellness-gray font-medium text-sm">
              {[
                "Whole Body Cryotherapy",
                "IV Drip Therapy",
                "Hyperbaric Oxygen Therapy",
                "Red Light Therapy",
                "EMS Training",
                "Advanced Genetic Screening",
                "Hydrafacial SYNDEO",
                "View All Therapies"
              ].map(item => (
                <li key={item} className="hover:text-black cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-black uppercase mb-8 tracking-widest italic">Locations</h4>
            <ul className="flex flex-col gap-3 text-wellness-gray font-medium text-sm">
              {[
                "Golf Course Road, Gurugram",
                "Defence Colony, New Delhi",
                "Punjabi Bagh, New Delhi",
                "Bandra, Mumbai",
                "Marine Drive, Mumbai",
                "Banjara Hills, Hyderabad",
                "St. Mark's Road, Bengaluru",
                "Sadashiva Nagar, Bengaluru",
                "Jayanagar, Bengaluru",
                "TTK Road, Chennai",
                "Sarabha Nagar, Ludhiana",
                "Sindhu Bhavan Marg, Ahmedabad",
                "Gachibowli, Hyderabad"
              ].map(item => (
                <li key={item} className="hover:text-black cursor-pointer transition-colors flex items-center gap-2 leading-tight">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-black uppercase mb-8 tracking-widest italic">Explore</h4>
            <ul className="flex flex-col gap-3 text-wellness-gray font-medium text-sm">
              {[
                "Home",
                "About Us",
                "Contact Us",
                "Our Locations",
                "FAQs",
                "Media & Gallery",
                "Wellness Blog",
                "Sitemap"
              ].map(item => (
                <li key={item} className="hover:text-black cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-black uppercase mb-8 tracking-widest italic">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:1.800.121.2429" className="flex items-center justify-between bg-wellness-dark text-white px-5 py-2.5 rounded-full shadow-sm group hover:scale-[1.02] transition-all">
                <span className="font-bold text-xs tracking-tight">1.800.121.2429</span>
                <Phone size={16} fill="white" className="rotate-12 group-hover:rotate-0 transition-transform" />
              </a>
              <a href="https://wa.me/919599440939" className="flex items-center justify-between bg-wellness-dark text-white px-5 py-2.5 rounded-full shadow-sm group hover:scale-[1.02] transition-all">
                <span className="font-bold text-xs tracking-tight">+91.95994.40939</span>
                <Phone size={16} fill="white" className="rotate-12 group-hover:rotate-0 transition-transform" />
              </a>
              <a href="mailto:hello@thewellnessco.in" className="flex items-center justify-between bg-wellness-dark text-white px-5 py-2.5 rounded-full shadow-sm group hover:scale-[1.02] transition-all">
                <span className="font-bold text-[11px] tracking-tight">hello@thewellnessco.in</span>
                <Mail size={16} fill="white" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-wellness-gray text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 Wellness Co Enterprise Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Globe size={24} className="text-wellness-gray hover:text-[#14b8a6] cursor-pointer transition-colors" />
            <Share2 size={24} className="text-wellness-gray hover:text-[#14b8a6] cursor-pointer transition-colors" />
            <SocialLink size={24} className="text-wellness-gray hover:text-[#14b8a6] cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
