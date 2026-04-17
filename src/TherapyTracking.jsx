import React, { useState } from 'react';
import { 
  Activity, 
  TrendingUp, 
  FileText, 
  Video, 
  Play, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Heart, 
  Zap, 
  Droplets,
  Calendar,
  User,
  MoreVertical,
  Plus
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const sessionData = [
  { session: 'S1', energy: 60, pain: 80, skin: 40 },
  { session: 'S2', energy: 65, pain: 70, skin: 45 },
  { session: 'S3', energy: 75, pain: 50, skin: 60 },
  { session: 'S4', energy: 80, pain: 30, skin: 75 },
  { session: 'S5', energy: 90, pain: 15, skin: 85 },
];

const sessions = [
  { id: 1, name: "Spine Alignment", date: "Apr 12, 2026", therapist: "Dr. Mills", time: "10:30 AM", type: "Visual Tech" },
  { id: 2, name: "Cryo Recovery", date: "Apr 08, 2026", therapist: "Marcus W.", time: "02:00 PM", type: "Active" },
  { id: 3, name: "Detox Wrap", date: "Apr 02, 2026", therapist: "Elena G.", time: "11:15 AM", type: "Passive" },
  { id: 4, name: "Infra-red Sauna", date: "Mar 25, 2026", therapist: "Dr. Mills", time: "04:30 PM", type: "Thermal" },
];

const MetricCard = ({ icon: Icon, label, value, color, growth }) => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-soft border border-black/5">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={24} className="text-wellness-dark" />
      </div>
      <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">{growth}</span>
    </div>
    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
    <h3 className="text-2xl font-bold">{value}</h3>
  </div>
);

const TherapyTracking = () => {
  const [selectedSession, setSelectedSession] = useState(sessions[0]);
  const [view, setView] = useState('list'); // 'list' or 'add'

  if (view === 'add') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 max-w-5xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">New Progress Log</h1>
            <p className="text-gray-400 font-medium text-lg">Detailed clinical outcome recording for real-time sync.</p>
          </div>
          <button 
            onClick={() => setView('list')}
            className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm"
          >
            Cancel Entry
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="card p-10 bg-white/70 backdrop-blur-xl border-white shadow-premium">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-50 pb-4">Biometric Calibration</h3>
              
              <div className="space-y-8">
                <div>
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block">Session Type</label>
                   <div className="grid grid-cols-2 gap-4">
                      {['Spinal Alignment', 'Cryo Recovery', 'Detox Wrap', 'Infra-red'].map(t => (
                        <button key={t} className="p-4 bg-gray-50 border border-transparent hover:border-purple-200 rounded-2xl text-left transition-all group">
                           <p className="text-xs font-bold text-gray-600 group-hover:text-purple-600">{t}</p>
                        </button>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block">Energy Score (1-100)</label>
                    <input type="number" placeholder="92" className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl outline-none focus:ring-4 focus:ring-orange-100 transition-all font-black text-xl text-orange-600" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block">Pain Index (1-100)</label>
                    <input type="number" placeholder="12" className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-black text-xl text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card p-10 bg-white/70 backdrop-blur-xl border-white shadow-premium">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-50 pb-4">Clinical Observations</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block">Therapist Notes</label>
                  <textarea 
                    rows="6"
                    placeholder="Describe recovery pattern and physiological responses..."
                    className="w-full bg-gray-50 border border-gray-100 p-6 rounded-[2rem] outline-none focus:ring-4 focus:ring-purple-100 transition-all font-medium text-sm leading-relaxed"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setView('list')}
                    className="btn-premium w-full py-6 text-lg shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    <Activity size={24} /> Finalize Progress Log
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-wellness-lavender/20 to-wellness-pink/20 p-8 rounded-[3rem] border border-white flex items-center gap-6">
               <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-purple-600 shrink-0">
                  <Sparkles size={32} />
               </div>
               <div>
                  <h4 className="font-bold text-sm text-wellness-dark">AI Intelligence Sync</h4>
                  <p className="text-xs text-gray-500 font-medium">Data will be automatically synthesized into lifetime recovery trends and metabolic reports.</p>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8"
    >
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-1 font-outfit">Therapy Progress Engine</h1>
          <p className="text-gray-400 text-sm">Visualizing clinical outcomes and therapeutic data sync.</p>
        </div>
        <div className="flex gap-4">
           <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-full h-full rounded-full" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#ff8da1] flex items-center justify-center text-[10px] text-white font-bold">+12</div>
           </div>
           <button 
            onClick={() => setView('add')}
            className="btn-premium flex items-center gap-2 active:scale-95 transition-all" 
            style={{ padding: '0.6rem 1.2rem' }}
           >
              <Plus size={18} /> New Progress Log
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Metrics & Charts */}
        <div className="lg:col-span-3 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard icon={Zap} label="Energy Score" value="92/100" color="bg-orange-50" growth="+15%" />
            <MetricCard icon={Droplets} label="Pain Index" value="12/100" color="bg-blue-50" growth="-42%" />
            <MetricCard icon={Heart} label="Skin Recovery" value="88%" color="bg-pink-50" growth="+22%" />
          </div>

          <div className="card p-8 group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <TrendingUp size={150} />
            </div>
            <div className="flex justify-between items-center mb-10 relative z-10">
               <div>
                  <h3 className="text-xl font-bold">Therapeutic Recovery Trend</h3>
                  <p className="text-xs text-gray-400">Comparing energy gains vs pain reduction across 5 sessions.</p>
               </div>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Energy</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Pain Index</span>
                  </div>
               </div>
            </div>
            <div className="h-[350px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sessionData}>
                  <defs>
                    <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPain" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="session" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', padding: '15px' }} 
                  />
                  <Area type="monotone" dataKey="energy" stroke="#fbbf24" strokeWidth={4} fillOpacity={1} fill="url(#colorEnergy)" />
                  <Area type="monotone" dataKey="pain" stroke="#60a5fa" strokeWidth={4} fillOpacity={1} fill="url(#colorPain)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-lg flex items-center gap-2"><FileText size={20}/> Therapist Notes</h3>
                   <span className="text-[10px] font-bold text-gray-400">LAST SYNC: 2H AGO</span>
                </div>
                <div className="space-y-4">
                   <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-3xl border border-gray-100 italic">
                      "Client shows remarkable spinal adjustment response. Energy levels have stabilized post-session. Recommendation is to proceed with cold-therapy integration to reduce residual inflammation."
                   </p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center font-bold text-orange-600">SM</div>
                      <div>
                         <p className="text-sm font-bold">Dr. Sarah Mills</p>
                         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Chief Clinician</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2"><Sparkles size={20} className="text-purple-500" /> Session Recovery Analysis</h3>
                <div className="space-y-6">
                   {[
                     { label: "Spinal Mobility", val: 88, color: "bg-orange-400" },
                     { label: "Muscle Tension", val: 24, color: "bg-blue-400" },
                     { label: "Metabolic Rate", val: 76, color: "bg-green-400" }
                   ].map((m, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                           <span className="text-gray-400 uppercase tracking-widest">{m.label}</span>
                           <span>{m.val}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                           <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: `${m.val}%` }} 
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className={`h-full rounded-full ${m.color}`}
                           ></motion.div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Right: Timeline & Visuals */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5">
             <h3 className="font-bold text-xl mb-8 flex items-center gap-3"><Video size={24}/> Visual Timeline</h3>
             <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm">
                     <img 
                        src={`https://images.unsplash.com/photo-1544161515-4af6b1d8e1c3?auto=format&fit=crop&q=80&w=400&index=${i}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90" 
                     />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 transform group-hover:scale-110 transition-transform">
                           <Play fill="white" className="text-white ml-0.5" size={20} />
                        </div>
                     </div>
                     <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-80">Session {4-i}</p>
                        <h4 className="text-sm font-bold leading-tight">Visual Analysis Sync</h4>
                     </div>
                  </div>
                ))}
             </div>
             <button className="w-full mt-6 py-4 bg-gray-50 rounded-2xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                View Comprehensive Vault <ArrowRight size={14} />
             </button>
          </div>

          <div className="bg-wellness-lavender/30 p-8 rounded-[2.5rem] border border-wellness-lavender shadow-soft">
             <h3 className="font-bold text-lg mb-6 flex items-center gap-3 text-wellness-dark"><Calendar size={20}/> Session History</h3>
             <div className="space-y-4">
                {sessions.map(s => (
                  <div 
                    key={s.id} 
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedSession.id === s.id ? 'bg-white border-purple-200 shadow-md translate-x-2' : 'bg-white/50 border-transparent hover:bg-white hover:shadow-sm'
                    }`}
                    onClick={() => setSelectedSession(s)}
                  >
                    <div className="flex justify-between items-start mb-1">
                       <p className="text-xs font-bold">{s.name}</p>
                       <span className="text-[8px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded uppercase tracking-widest">{s.type}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-medium">{s.date} • {s.therapist}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TherapyTracking;
