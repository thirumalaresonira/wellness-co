import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  MapPin, 
  Phone, 
  Mail, 
  Activity, 
  Heart, 
  Target, 
  Clock, 
  Play, 
  CreditCard, 
  Wallet, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  FileText,
  Video,
  Plus,
  Zap,
  Thermometer,
  Wind
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

const vitalData = [
  { day: 'Mon', stress: 65, sleep: 7.2, hrv: 55 },
  { day: 'Tue', stress: 40, sleep: 8.1, hrv: 62 },
  { day: 'Wed', stress: 55, sleep: 6.8, hrv: 58 },
  { day: 'Thu', stress: 30, sleep: 7.5, hrv: 65 },
  { day: 'Fri', stress: 50, sleep: 7.0, hrv: 61 },
  { day: 'Sat', stress: 20, sleep: 9.2, hrv: 70 },
  { day: 'Sun', stress: 25, sleep: 8.8, hrv: 72 },
];

const ClientProfile = () => {
  const clientData = {
    name: "Aria Thorne",
    age: 28,
    status: "Gold Member",
    email: "aria.thorne@example.com",
    phone: "+1 (555) 902-4567",
    location: "Bayside District, NY",
    wallet: "₹4,500.00",
    package: "Premium Detox - 12 Sessions",
    membershipExpires: "Dec 31, 2026",
    goals: ["Weight Loss", "Chronic Inflammation Recovery", "Skin Glow"],
    medicalHistory: "Type 2 Diabetes (Managed), Mild Scoliosis, Post-viral Fatigue",
    lifestyle: "Sedentary work, Regular yoga, High-protein diet"
  };

  const therapySessions = [
    { id: 1, date: "Apr 12, 2026", service: "Aromatherapy Alignment", notes: "Significant improvement in spine mobility. Client reported better sleep.", duration: "60 min", status: "Completed" },
    { id: 2, date: "Apr 05, 2026", service: "Detox Wrap & Infra-red", notes: "Good cytokine response. Skin clarity +15% based on visual scan.", duration: "90 min", status: "Completed" },
    { id: 3, date: "Mar 28, 2026", service: "Spine Realignment", notes: "Initial assessment. L4-L5 tension noted.", duration: "45 min", status: "Completed" },
  ];

  const videos = [
    { id: 1, title: "Initial Posture Scan", type: "Before", date: "Mar 28", thumb: "https://images.unsplash.com/photo-1544161515-4af6b1d8e1c3?auto=format&fit=crop&q=80&w=400" },
    { id: 2, title: "Mid-Treatment Progress", type: "After", date: "Apr 12", thumb: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=400" },
    { id: 3, title: "Session Recording - Spine", type: "Full", date: "Apr 12", thumb: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=400" },
  ];

  const [notification, setNotification] = useState(null);

  const handleAction = (type) => {
    const messages = {
      message: { title: "Secure Message Sent", desc: `Direct communication link established with ${clientData.name}.`, color: "bg-blue-500" },
      call: { title: "Initiating VoIP Call", desc: `Connecting to encrypted line ${clientData.phone}...`, color: "bg-orange-500" },
      livesync: { title: "Live Sync Active", desc: "Establishing real-time biometric stream and video link.", color: "bg-purple-600" }
    };

    setNotification(messages[type]);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 pb-20 relative"
    >
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%' }}
            className="fixed top-8 left-1/2 z-50 bg-[#ff8da1] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-xl min-w-[320px]"
          >
            <div className={`w-10 h-10 ${notification.color} rounded-xl flex items-center justify-center shadow-lg`}>
              {notification.title.includes('Call') ? <Phone size={18} /> : notification.title.includes('Message') ? <Mail size={18} /> : <Zap size={18} fill="white" />}
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest">{notification.title}</p>
              <p className="text-[10px] text-gray-400 font-bold">{notification.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Header */}
      <div className="bg-white rounded-[3rem] p-8 shadow-soft border border-black/5 mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative">
            <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-wellness-pink to-wellness-lavender flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
               <span className="text-4xl font-bold text-white">AT</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100">
               <Settings size={18} className="text-gray-400" />
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-1">{clientData.name}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                  <span className="flex items-center gap-1"><MapPin size={14}/> {clientData.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                  <span className="text-wellness-dark bg-wellness-pink/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{clientData.status}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleAction('message')}
                  className="p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all shadow-sm active:scale-95"
                >
                  <Mail size={20} className="text-gray-600" />
                </button>
                <button 
                  onClick={() => handleAction('call')}
                  className="p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all shadow-sm active:scale-95"
                >
                  <Phone size={20} className="text-gray-600" />
                </button>
                <button 
                  onClick={() => handleAction('livesync')}
                  className="btn-premium flex items-center gap-2 active:scale-95 transition-all" 
                  style={{ padding: '0.6rem 1.2rem' }}
                >
                  <Zap size={18} fill="currentColor" /> Live Sync
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-gray-50">
              <div className="space-y-1 text-center md:text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Wallet Balance</p>
                <p className="text-xl font-bold text-green-600 flex items-center justify-center md:justify-start gap-1"><Wallet size={18}/> {clientData.wallet}</p>
              </div>
              <div className="space-y-1 text-center md:text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Package</p>
                <p className="text-sm font-bold truncate">{clientData.package}</p>
              </div>
              <div className="space-y-1 text-center md:text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Last Visit</p>
                <p className="text-sm font-bold">2 days ago</p>
              </div>
              <div className="space-y-1 text-center md:text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total Sessions</p>
                <p className="text-sm font-bold">42 sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Biometrics & Stats */}
        <div className="lg:col-span-2 space-y-8">
          {/* Biometrics Chart */}
          <div className="card p-8 group">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold">Vital Biometrics</h3>
                <p className="text-xs text-gray-400">Sleep, Stress & HRV tracking from wearable sync.</p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">Sleep</span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded-lg">Stress</span>
              </div>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={vitalData}>
                  <defs>
                    <linearGradient id="colorSleep" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} 
                  />
                  <Area type="monotone" dataKey="sleep" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorSleep)" />
                  <Area type="monotone" dataKey="stress" stroke="#ec4899" strokeWidth={3} fillOpacity={1} fill="url(#colorStress)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Medical History */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5">
                 <Thermometer size={120} />
              </div>
              <div className="flex items-center gap-3 mb-6 text-wellness-dark">
                <Heart size={20} className="text-pink-400" />
                <h3 className="font-bold text-lg">Medical History</h3>
              </div>
              <p className="text-sm text-wellness-gray leading-relaxed mb-6">{clientData.medicalHistory}</p>
              <div className="p-4 bg-pink-50/50 rounded-2xl border border-pink-100/50">
                 <p className="text-[10px] font-bold text-pink-600 uppercase tracking-widest mb-1">Clinic Alert</p>
                 <p className="text-xs text-pink-700 italic">Pre-session sugar levels check required for intensive therapy.</p>
              </div>
            </div>

            {/* Health Goals */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5">
                 <Wind size={120} />
              </div>
              <div className="flex items-center gap-3 mb-6 text-wellness-dark">
                <Target size={20} className="text-blue-400" />
                <h3 className="font-bold text-lg">Health Goals</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {clientData.goals.map(g => (
                  <span key={g} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border border-blue-100">{g}</span>
                ))}
                <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"><Plus size={14} /></button>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-400">Overall Progress</span>
                    <span className="text-blue-500">65%</span>
                 </div>
                 <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{width: 0}} 
                      whileInView={{width: '65%'}} 
                      transition={{duration: 1}}
                      className="h-full bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
                    ></motion.div>
                 </div>
              </div>
            </div>
          </div>

          {/* Therapy Timeline */}
          <div className="bg-white rounded-[2.5rem] shadow-soft border border-black/5 overflow-hidden">
             <div className="p-8 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
                <h3 className="font-bold text-xl flex items-center gap-3"><Clock size={24}/> Therapy Records</h3>
                <button className="text-xs font-bold text-blue-500 hover:underline">Export clinical sync</button>
             </div>
             <div className="p-2">
                <div className="space-y-1">
                  {therapySessions.map((session, i) => (
                    <div key={i} className="p-6 rounded-3xl hover:bg-gray-50/80 transition-all group flex items-start gap-6">
                      <div className="text-center shrink-0 w-16">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{session.date.split(' ')[0]}</p>
                        <p className="text-lg font-bold">{session.date.split(' ')[1].replace(',','')}</p>
                      </div>
                      <div className="h-12 w-1 bg-gray-100 rounded-full shrink-0 group-hover:bg-purple-200 transition-colors"></div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-bold text-sm group-hover:text-purple-600 transition-colors">{session.service}</h4>
                          <span className={`badge ${session.status === 'Completed' ? 'badge-success' : 'bg-gray-50 text-gray-400'}`}>{session.status}</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">"{session.notes}"</p>
                      </div>
                      <button className="self-center p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-gray-100 rounded-xl shadow-sm">
                        <ChevronRight size={16} className="text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Visual Progress & AI */}
        <div className="space-y-8">
          {/* Detailed Lifestyle Snapshot */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5">
            <h3 className="font-bold text-lg mb-6">Lifestyle Profile</h3>
            <div className="space-y-4">
               {[
                 { icon: <Activity className="text-orange-400" size={16}/>, label: "Daily Steps", value: "8,420" },
                 { icon: <Heart className="text-red-400" size={16}/>, label: "Avg. Heart Rate", value: "68 bpm" },
                 { icon: <Zap className="text-yellow-400" size={16}/>, label: "Active Calories", value: "450 kcal" }
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                       {item.icon}
                       <span className="text-xs font-semibold text-gray-500">{item.label}</span>
                    </div>
                    <span className="text-sm font-bold">{item.value}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Visual Analysis Grid */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg flex items-center gap-3"><Video size={20}/> Visual Analysis</h3>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold">PRO</span>
             </div>
             <div className="space-y-4">
                {videos.map(v => (
                  <motion.div 
                    key={v.id} 
                    whileHover={{ scale: 1.02 }}
                    className="group relative aspect-video rounded-3xl overflow-hidden bg-gray-100 cursor-pointer"
                  >
                     <img src={v.thumb} className="w-full h-full object-cover brightness-95" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                           <Play fill="white" className="text-white ml-0.5" size={18} />
                        </div>
                     </div>
                     <div className="absolute bottom-4 left-4 text-white">
                        <span className={`px-2 py-0.5 rounded-lg text-[8px] font-bold uppercase tracking-widest mb-1 inline-block ${
                          v.type === 'Before' ? 'bg-red-400' : v.type === 'After' ? 'bg-green-400' : 'bg-blue-400'
                        }`}>{v.type}</span>
                        <h4 className="text-sm font-bold leading-none">{v.title}</h4>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* AI Growth Recommendations */}
          <div className="bg-gradient-to-br from-wellness-lavender to-wellness-pink/20 p-8 rounded-[2.5rem] border border-white shadow-soft relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Sparkles size={120} />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <Sparkles size={16} className="text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg">AI Recovery Insight</h3>
                </div>
                <p className="text-sm text-gray-700 italic mb-6 leading-relaxed">
                   "Aria's posture scan shows significant thoracic improvement. We recommend switching the next session to <strong>Cryotherapy</strong> to consolidate inflammation gains."
                </p>
                <div className="flex gap-2">
                   <button className="flex-1 bg-white p-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all">Accept Optimization</button>
                   <button className="bg-white/50 p-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all">Dismiss</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientProfile;
