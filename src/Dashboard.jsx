import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CRM from './CRM';
import AIFollowUps from './AIFollowUps';
import Appointments from './Appointments';
import Billing from './Billing';
import BranchManagement from './BranchManagement';
import ClientProfile from './ClientProfile';
import TherapyTracking from './TherapyTracking';
import AIAnalytics from './AIAnalytics';
import RealTimeStats from './RealTimeStats';
import AIRecommendations from './AIRecommendations';
import CreateInvoice from './CreateInvoice';
import { 
  Users, 
  Calendar, 
  Activity, 
  CreditCard, 
  MessageSquare, 
  Settings, 
  Search, 
  Bell, 
  User, 
  ChevronRight, 
  Play, 
  TrendingUp, 
  MapPin, 
  Sparkles,
  ArrowUpRight,
  Plus,
  PhoneCall as PhoneIcon,
  CircleUserRound,
  LayoutDashboard,
  BrainCircuit,
  Settings2,
  RefreshCcw,
  X,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  Zap
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 },
  { name: 'Thu', revenue: 4500 },
  { name: 'Fri', revenue: 6000 },
  { name: 'Sat', revenue: 8000 },
  { name: 'Sun', revenue: 7000 },
];

const SidebarItem = ({ icon: Icon, label, active = false, onClick, indicator }) => (
  <div 
    className={`sidebar-item ${active ? 'active' : ''} cursor-pointer transition-all duration-300 relative group overflow-hidden`}
    onClick={onClick}
  >
    <div className={`absolute inset-0 bg-gradient-to-r from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${active ? 'opacity-100' : ''}`}></div>
    <div className="relative flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <Icon size={20} className={`${active ? 'text-pink-600' : 'text-gray-500'}`} />
        <span className={`font-medium ${active ? 'text-black' : 'text-gray-500'}`}>{label}</span>
      </div>
      {indicator && (
        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(255,141,161,0.6)] animate-pulse"></span>
      )}
    </div>
    {active && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#ff8da1] rounded-l-full"></div>}
  </div>
);

const NotificationDrawer = ({ isOpen, onClose }) => {
  const notifications = [
    { id: 1, title: "Peak Demand Alert", desc: "Branch East is reaching 95% occupancy. Open dynamic pricing?", type: "alert", time: "12m ago" },
    { id: 2, title: "AI Sync Complete", desc: "124 patient transcripts processed and sentiment analyzed.", type: "success", time: "45m ago" },
    { id: 3, title: "New Inventory Match", desc: "Aroma Oils predicted to run low by Friday. Order queued.", type: "system", time: "2h ago" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-[70] p-8 glass"
          >
            <div className="flex justify-between items-center mb-10">
               <div>
                  <h2 className="text-2xl font-bold">Pulse Center</h2>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Real-time Operations</p>
               </div>
               <button onClick={onClose} className="p-2 hover:bg-pink-50 rounded-full transition-colors"><X size={20}/></button>
            </div>
            
            <div className="space-y-6">
               {notifications.map(n => (
                 <div key={n.id} className="p-6 rounded-[2rem] bg-white shadow-soft border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
                    <div className="flex justify-between mb-2">
                       <span className={`text-[10px] font-bold uppercase tracking-widest ${n.type === 'alert' ? 'text-orange-500' : 'text-green-500'}`}>{n.type}</span>
                       <span className="text-[10px] text-gray-400 font-bold">{n.time}</span>
                    </div>
                    <h4 className="font-bold mb-1 group-hover:text-purple-600 transition-colors">{n.title}</h4>
                    <p className="text-xs text-wellness-gray leading-relaxed">{n.desc}</p>
                 </div>
               ))}
            </div>
            
            <div className="mt-12 p-8 bg-[#ff8da1] rounded-[2.5rem] text-white shadow-lg">
               <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={20} className="text-white/80" />
                  <p className="text-sm font-bold">AI Strategy Active</p>
               </div>
               <p className="text-xs text-white/70 mb-6 italic leading-relaxed">"System is currently optimizing therapist rotation at Primary branch based on live energy trends."</p>
               <button className="w-full py-4 bg-white/20 hover:bg-white/30 transition-all rounded-2xl text-[10px] font-bold uppercase tracking-widest border-none text-white">View Active Layers</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Overview = ({ setCurrentView }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-7xl mx-auto"
  >
    {/* Welcome Header */}
    <div className="flex justify-between items-end mb-8">
      <div>
        <h1 className="text-3xl font-bold mb-1 font-outfit">Clinic Overview</h1>
        <p className="text-gray-400 font-medium">Welcome back, Sarah. <strong>Branch Primary</strong> is currently at peak efficiency.</p>
      </div>
      <button 
        className="btn-premium flex items-center gap-2 group" 
        style={{ padding: '0.8rem 1.5rem' }}
        onClick={() => setCurrentView('Appointments')}
      >
        <Plus size={18} className="group-hover:rotate-90 transition-transform" /> New Appointment
      </button>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="stat-card cursor-pointer group premium-card-hover" onClick={() => setCurrentView('Appointments')}>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-pink-50/50 rounded-2xl group-hover:bg-pink-100 transition-colors">
            <Calendar className="text-pink-500" size={24} />
          </div>
          <span className="flex items-center text-green-500 text-sm font-bold">
            +12% <ArrowUpRight size={14} />
          </span>
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Daily Bookings</p>
        <h3 className="text-3xl font-bold mt-1">42</h3>
      </div>
      <div className="stat-card cursor-pointer group premium-card-hover" onClick={() => setCurrentView('CRM')}>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-pink-50 rounded-2xl group-hover:bg-pink-100 transition-colors">
            <Users className="text-pink-500" size={24} />
          </div>
          <span className="flex items-center text-green-500 text-sm font-bold">
            +8% <ArrowUpRight size={14} />
          </span>
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Global Clients</p>
        <h3 className="text-3xl font-bold mt-1">1,280</h3>
      </div>
      <div className="stat-card cursor-pointer group premium-card-hover" onClick={() => setCurrentView('Billing')}>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors">
            <CreditCard className="text-green-500" size={24} />
          </div>
          <span className="flex items-center text-red-500 text-sm font-bold">
            -2% <ArrowUpRight size={14} className="rotate-90" />
          </span>
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Live Revenue</p>
        <h3 className="text-3xl font-bold mt-1">₹85.4k</h3>
      </div>
      <div className="stat-card cursor-pointer group premium-card-hover" onClick={() => setCurrentView('RealTimeStats')}>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-pink-100/30 rounded-2xl group-hover:bg-pink-100 transition-colors overflow-hidden">
            <Sparkles className="text-pink-500 animate-pulse" size={24} />
          </div>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full animate-pulse">OPTIMAL</span>
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">AI Status</p>
        <h3 className="text-3xl font-bold mt-1">Pulse On</h3>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Column */}
      <div className="lg:col-span-2 space-y-8">
        {/* Revenue Chart */}
        <div className="card p-8 group">
          <div className="flex justify-between items-center mb-8">
            <div>
               <h3 className="text-xl font-bold">Global Performance</h3>
               <p className="text-xs text-gray-400 font-medium italic">Consolidated revenue stream across 3 nodes.</p>
            </div>
            <select className="bg-pink-50/50 border-none px-4 py-2 outline-none text-xs font-bold font-outfit rounded-xl cursor-pointer">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-[300px] w-full cursor-pointer" onClick={() => setCurrentView('Billing')}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff8da1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ff8da1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 'bold'}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', padding: '20px' }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#ff8da1" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="ai-hint flex gap-6 items-start relative overflow-hidden group">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-0 right-0 p-8"
          >
             <Sparkles size={120} />
          </motion.div>
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md grow-0 shrink-0 border border-gray-100">
            <BrainCircuit size={28} className="text-purple-600" />
          </div>
          <div className="relative z-10">
            <h4 className="font-bold text-xl mb-1 font-outfit">Optimization Preset Available</h4>
            <p className="text-wellness-gray text-sm leading-relaxed mb-6">"Branch Primary experiencing session overlap in Zone 3. Recommend active load redistribution across therapists."</p>
            <div className="flex gap-3">
               <button 
                className="px-6 py-2.5 bg-[#ff8da1] text-white rounded-xl text-xs font-bold shadow-lg hover:shadow-xl hover:bg-[#ff7a91] transition-all flex items-center gap-2 group"
                onClick={() => setCurrentView('AIAnalytics')}
               >
                 Deploy AI Strategy <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button 
                className="px-6 py-2.5 bg-white/60 backdrop-blur-md border border-white rounded-xl text-xs font-bold hover:bg-white transition-all shadow-sm"
                onClick={() => setCurrentView('RealTimeStats')}
               >
                 View Diagnostics
               </button>
            </div>
          </div>
        </div>

        {/* Video Sessions Log */}
        <div className="card p-8 group">
          <div className="flex justify-between items-center mb-8">
             <h3 className="text-xl font-bold font-outfit">Visual Clinical Sync</h3>
             <button className="text-[10px] font-bold text-blue-500 uppercase tracking-widest hover:underline" onClick={() => setCurrentView('TherapyTracking')}>History Vault</button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[
              { client: "Aria Thorne", module: "Spine Alignment", time: "2h ago" },
              { client: "Leo Vance", module: "Muscle Recovery", time: "4h ago" }
            ].map((session, i) => (
              <div key={i} className="space-y-4 group/item">
                <div className="video-thumb group cursor-pointer relative aspect-video overflow-hidden rounded-3xl" onClick={() => setCurrentView('TherapyTracking')}>
                   <img 
                    src={`https://images.unsplash.com/photo-1544161515-4af6b1d8e1c3?auto=format&fit=crop&q=80&w=400&index=${i}`} 
                    className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700 brightness-95" 
                   />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                     <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center border border-white/50">
                        <Play className="text-white fill-white ml-0.5" size={24} />
                     </div>
                   </div>
                   <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-white/30 backdrop-blur-md rounded-lg text-[8px] font-bold text-white uppercase tracking-widest">LIVE CLIP</span>
                   </div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div className="cursor-pointer" onClick={() => setCurrentView('ClientProfile')}>
                    <p className="font-bold text-sm hover:text-purple-600 transition-colors">{session.client}</p>
                    <p className="text-xs text-gray-400 font-medium">{session.module}</p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-1 rounded-full uppercase tracking-widest">{session.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side Column */}
      <div className="space-y-8">
        {/* Upcoming Appointments */}
        <div className="card p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold font-outfit">Agenda</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{new Date().toDateString()}</p>
          </div>
          <div className="space-y-6">
            {[
              { name: "John Smith", time: "09:00 AM", service: "Aromatherapy", status: "Confirmed" },
              { name: "Elena Gilbert", time: "10:30 AM", service: "Deep Tissue", status: "Pending" },
              { name: "Marcus Wright", time: "12:00 PM", service: "Detox Wrap", status: "Confirmed" },
              { name: "Sarah Connor", time: "02:30 PM", service: "Reiki", status: "Cancelled" }
            ].map((appt, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-2xl transition-all" onClick={() => setCurrentView('Appointments')}>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex-shrink-0 flex items-center justify-center font-black text-gray-300 group-hover:bg-purple-50 group-hover:text-purple-500 transition-colors text-sm">
                  {appt.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm group-hover:text-black transition-colors">{appt.name}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{appt.time} • {appt.service}</p>
                </div>
                <ChevronRight size={16} className="text-gray-200 group-hover:text-purple-300 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Multi-branch status */}
        <div className="card p-8 cursor-pointer group premium-card-hover" onClick={() => setCurrentView('MultiBranch')}>
          <div className="flex justify-between items-center mb-8">
             <h3 className="text-xl font-bold font-outfit">Active Nodes</h3>
             <MapPin size={18} className="text-gray-300 group-hover:text-purple-500 transition-colors" />
          </div>
          <div className="space-y-6">
            {[
              { branch: "Branch Primary", occupancy: 92 },
              { branch: "Branch East", occupancy: 65 },
              { branch: "Wellness Hub South", occupancy: 78 }
            ].map((branch, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-wellness-gray font-bold uppercase tracking-widest">{branch.branch}</span>
                  <span className={branch.occupancy > 80 ? 'text-green-500' : 'text-blue-500'}>{branch.occupancy}% Load</span>
                </div>
                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${branch.occupancy}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={`h-full rounded-full ${branch.occupancy > 80 ? 'bg-gradient-to-r from-green-300 to-green-500' : 'bg-gradient-to-r from-blue-300 to-blue-500'}`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Voice Pulse */}
        <div className="bg-[#ff8da1] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
             <PhoneIcon size={120} />
          </div>
          <div className="relative z-10">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                   <Sparkles size={16} className="text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">AI Voice Stream</h3>
             </div>
             <p className="text-xs text-gray-400 mb-8 leading-relaxed font-medium">System is processing live post-alignment follow-ups. Efficiency rate is +14% above baseline.</p>
             <div className="h-20 flex items-end gap-1.5 mb-8">
                {[4,8,3,9,5,10,4,7,3,8,6,9].map((h, i) => (
                  <motion.div 
                    key={i} 
                    animate={{ height: [`${h * 5}%`, `${h * 10}%`, `${h * 7}%`] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    className="flex-1 bg-white/20 rounded-t-sm"
                  ></motion.div>
                ))}
             </div>
             <button 
               className="w-full py-4 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
               onClick={() => setCurrentView('AIFollowUps')}
             >
               Enter Stream Console
             </button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const SettingsModule = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-4xl mx-auto"
  >
    <div className="mb-12">
      <h1 className="text-4xl font-black tracking-tight mb-2">System Config</h1>
      <p className="text-gray-400 font-medium">Manage your clinical environment and AI synchronization parameters.</p>
    </div>

    <div className="space-y-8">
      {/* Profile Section */}
      <div className="card p-8 group hover:border-[#ff8da1]/30 transition-all">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-pink-50 rounded-[2rem] flex items-center justify-center border-4 border-white shadow-xl relative overflow-hidden">
               <User className="text-[#ff8da1]" size={40} />
               <div className="absolute bottom-0 inset-x-0 h-1/3 bg-black/40 backdrop-blur-md flex items-center justify-center">
                  <span className="text-[8px] text-white font-black uppercase">Edit</span>
               </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Dr. Sarah Mills</h3>
              <p className="text-pink-400 font-bold uppercase tracking-widest text-[10px]">Chief Clinician • Branch Primary</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-gray-50 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-all">Update Credentials</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AI Preferences */}
        <div className="card p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-50 rounded-2xl text-purple-600">
               <BrainCircuit size={20} />
            </div>
            <h4 className="font-bold text-lg">Neural Hub Tuning</h4>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
               <span className="text-sm font-medium text-gray-500">Voice Synthesis</span>
               <select className="bg-gray-50 border-none px-4 py-2 text-xs font-bold rounded-xl outline-none">
                  <option>Female (Samantha)</option>
                  <option>Male (Leopold)</option>
                  <option>Neural (Aria)</option>
               </select>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-sm font-medium text-gray-500">Sentiment Sensitivity</span>
               <div className="flex items-center gap-2">
                  <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-purple-500 w-[84%]"></div>
                  </div>
                  <span className="text-[10px] font-bold">84%</span>
               </div>
            </div>
          </div>
        </div>

        {/* Global Tokens */}
        <div className="card p-8 bg-sky-400 text-white border-none">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/20 rounded-2xl">
               <Zap size={20} />
            </div>
            <h4 className="font-bold text-lg">Operational Tokens</h4>
          </div>
          <div className="p-6 bg-white/10 rounded-2xl border border-white/20 mb-6">
             <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 mb-2">Master API Key</p>
             <p className="font-mono text-sm tracking-wider">WLNS_PROD_84F2E_XXXX</p>
          </div>
          <button className="w-full py-4 bg-white text-sky-600 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">Rotate Access Keys</button>
        </div>
      </div>

      {/* Security & Access */}
      <div className="card p-8">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                  <AlertCircle size={20} />
               </div>
               <div>
                  <h4 className="font-bold">Two-Factor Authentication</h4>
                  <p className="text-xs text-gray-400 font-medium">Protect clinical records with hardware keys or SMS.</p>
               </div>
            </div>
            <div className="w-12 h-6 bg-[#ff8da1] rounded-full relative p-1 cursor-pointer">
               <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
            </div>
         </div>
      </div>
    </div>
  </motion.div>
);

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('Overview');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const renderView = () => {
    switch(currentView) {
      case 'CRM': return <CRM key="crm" />;
      case 'AIFollowUps': return <AIFollowUps key="ai-followups" />;
      case 'Appointments': return <Appointments key="appointments" />;
      case 'Billing': return <Billing key="billing" setCurrentView={setCurrentView} />;
      case 'CreateInvoice': return <CreateInvoice onBack={() => setCurrentView('Billing')} />;
      case 'MultiBranch': return <BranchManagement key="branches" />;
      case 'ClientProfile': return <ClientProfile key="client-profile" />;
      case 'TherapyTracking': return <TherapyTracking key="therapy-tracking" />;
      case 'AIAnalytics': return <AIAnalytics key="ai-analytics" />;
      case 'AIRecommendations': return <AIRecommendations key="ai-recommendations" />;
      case 'RealTimeStats': return <RealTimeStats key="realtime-pulse" />;
      case 'Settings': return <SettingsModule key="settings" />;
      default: return <Overview key="overview" setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="flex bg-[#f0f7ff] min-h-screen relative overflow-hidden">
      {/* Sidebar */}
      <aside className="sidebar fixed h-screen bg-sky-50/50 backdrop-blur-xl z-50 border-r border-sky-100">
        <Link to="/" className="flex items-center gap-3 mb-12 px-4 group cursor-pointer hover:opacity-80 transition-all">
          <div className="w-12 h-12 bg-[#ff8da1] rounded-2xl flex items-center justify-center shadow-xl shadow-pink-200 group-hover:scale-110 transition-transform">
            <Sparkles className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-glow">Wellness Co</span>
        </Link>

        <nav className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-1">
          <p className="px-4 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-4">Management</p>
          <SidebarItem 
            icon={LayoutDashboard} 
            label="Overview" 
            active={currentView === 'Overview'} 
            onClick={() => setCurrentView('Overview')}
          />
          <SidebarItem 
            icon={Users} 
            label="CRM" 
            active={currentView === 'CRM'} 
            onClick={() => setCurrentView('CRM')}
          />
          <SidebarItem 
            icon={CircleUserRound} 
            label="Client Profiles" 
            active={currentView === 'ClientProfile'} 
            onClick={() => setCurrentView('ClientProfile')}
          />
          <SidebarItem 
            icon={Activity} 
            label="Therapy Tracking" 
            active={currentView === 'TherapyTracking'} 
            onClick={() => setCurrentView('TherapyTracking')}
            indicator
          />
          <SidebarItem 
            icon={Calendar} 
            label="Appointments" 
            active={currentView === 'Appointments'}
            onClick={() => setCurrentView('Appointments')}
          />
          <SidebarItem 
            icon={CreditCard} 
            label="Billing" 
            active={currentView === 'Billing' || currentView === 'CreateInvoice'}
            onClick={() => setCurrentView('Billing')}
          />
          <SidebarItem 
            icon={MapPin} 
            label="Multi-branch" 
            active={currentView === 'MultiBranch'}
            onClick={() => setCurrentView('MultiBranch')}
          />
          
          <p className="px-4 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mt-10 mb-4">AI Intelligence</p>
          <SidebarItem 
            icon={MessageSquare} 
            label="AI Follow-ups" 
            active={currentView === 'AIFollowUps'}
            onClick={() => setCurrentView('AIFollowUps')}
          />
          <SidebarItem 
            icon={Sparkles} 
            label="AI Recommendations" 
            active={currentView === 'AIRecommendations'}
            onClick={() => setCurrentView('AIRecommendations')}
          />
          <SidebarItem 
            icon={BrainCircuit} 
            label="AI Analytics" 
            active={currentView === 'AIAnalytics'}
            onClick={() => setCurrentView('AIAnalytics')}
          />
          <SidebarItem 
            icon={TrendingUp} 
            label="Real-time Pulse" 
            active={currentView === 'RealTimeStats'}
            onClick={() => setCurrentView('RealTimeStats')}
            indicator
          />
        </nav>

        <div className="mt-auto px-4 pb-8 space-y-1">
          <SidebarItem 
            icon={Settings} 
            label="Settings" 
            active={currentView === 'Settings'}
            onClick={() => setCurrentView('Settings')}
          />
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-400 transition-all cursor-pointer hover:bg-[#ff8da1] hover:text-white group">
            <ArrowLeft size={18} className="group-hover:text-white transition-colors" />
            <span className="text-xs font-black uppercase tracking-widest transition-colors">Back</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main flex-1 ml-64 p-12">
        {/* Topbar */}
        <header className="topbar mb-12">
          <div className="search-bar hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-purple-100">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Search clients, metabolic syncs, or branch nodes..." className="font-medium" />
          </div>

          <div className="flex items-center gap-8">
            <div 
               onClick={() => setIsNotificationOpen(true)}
               className="relative p-3 bg-sky-50/30 backdrop-blur-md rounded-2xl shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all border border-sky-100/50"
            >
              <Bell size={22} className="text-gray-600" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-pink-500 rounded-full border-2 border-white shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
            </div>
            
            <div className="flex items-center gap-4 pl-6 border-l border-gray-100">
              <div className="text-right">
                <p className="text-sm font-black italic tracking-tight">DR. SARAH MILLS</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Chief Clinician</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center border-2 border-white shadow-md">
                <User size={24} className="text-purple-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>

      <NotificationDrawer 
         isOpen={isNotificationOpen} 
         onClose={() => setIsNotificationOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;
