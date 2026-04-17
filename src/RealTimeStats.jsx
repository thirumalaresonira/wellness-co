import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Activity, 
  Users, 
  Zap, 
  ArrowUpRight, 
  ArrowDownRight,
  Target,
  Clock,
  MapPin,
  RefreshCcw,
  Sparkles
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
  LineChart,
  Line
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// Initial data generator
const generateLiveStats = () => Array.from({ length: 10 }, (_, i) => ({
  time: `${i}:00`,
  load: Math.floor(Math.random() * 40) + 50,
  revenue: Math.floor(Math.random() * 1000) + 2000,
  sessions: Math.floor(Math.random() * 5) + 5
}));

const RealTimeStats = () => {
  const [data, setData] = useState(generateLiveStats());
  const [activeUsers, setActiveUsers] = useState(124);
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          load: Math.floor(Math.random() * 40) + 50,
          revenue: Math.floor(Math.random() * 1000) + 2000,
          sessions: Math.floor(Math.random() * 5) + 5
        }];
        return newData;
      });
      setActiveUsers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      setLastUpdate(new Date().toLocaleTimeString());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-8 pb-20"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            <Activity className="text-wellness-dark" size={32} />
            Live Network Pulse
          </h1>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <RefreshCcw size={14} className="animate-spin-slow" /> 
            Last sync: {lastUpdate} • Real-time branch monitoring active
          </p>
        </div>
        <div className="flex gap-4">
           <div className="px-5 py-2.5 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-green-700">Network Optimal</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Live Chart */}
        <div className="lg:col-span-3 card p-8 group relative overflow-hidden">
           <div className="flex justify-between items-center mb-10">
              <div>
                 <h3 className="text-xl font-bold">Session Load Density</h3>
                 <p className="text-xs text-gray-400">Live stream of active therapy sessions across all branches.</p>
              </div>
              <div className="flex gap-6">
                 <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Global Load</p>
                    <p className="text-xl font-bold text-purple-600">{data[data.length-1].load}%</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Sessions</p>
                    <p className="text-xl font-bold text-blue-500">{data[data.length-1].sessions}</p>
                 </div>
              </div>
           </div>
           <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={data}>
                    <defs>
                       <linearGradient id="colorPulse" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                       </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    <YAxis domain={[0, 100]} hide />
                    <Tooltip 
                       contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                       labelStyle={{ fontWeight: 'bold' }}
                    />
                    <Area 
                       type="step" 
                       dataKey="load" 
                       stroke="#8b5cf6" 
                       strokeWidth={4} 
                       fillOpacity={1} 
                       fill="url(#colorPulse)" 
                    />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Right Stats Sidebar */}
        <div className="space-y-6">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative group-hover:text-white transition-colors duration-500">
                 <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Global Reach</p>
                 <h2 className="text-5xl font-black mb-1">{activeUsers}</h2>
                 <p className="text-sm font-semibold opacity-80">Users currently in-app</p>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5">
              <h3 className="font-bold mb-6 flex items-center gap-2"><MapPin size={18}/> Branch Heat</h3>
              <div className="space-y-6">
                 {[
                   { name: "Primary", val: 92, trend: "up" },
                   { name: "East", val: 65, trend: "down" },
                   { name: "South", val: 78, trend: "up" }
                 ].map((branch, i) => (
                   <div key={i} className="flex justify-between items-center p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div>
                         <p className="text-sm font-bold">{branch.name}</p>
                         <p className="text-[10px] text-gray-400 font-medium">Branch Performance</p>
                      </div>
                      <div className="text-right">
                         <p className="text-sm font-bold">{branch.val}%</p>
                         <span className={`text-[10px] font-bold flex items-center gap-0.5 ${branch.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {branch.trend === 'up' ? <ArrowUpRight size={10}/> : <ArrowDownRight size={10}/>}
                            {branch.trend === 'up' ? '+4%' : '-2%'}
                         </span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Bottom Metrics */}
        <div className="lg:col-span-2 bg-gradient-to-br from-wellness-pink/20 to-wellness-lavender/20 p-8 rounded-[2.5rem] border border-white shadow-soft">
           <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold flex items-center gap-2"><Sparkles size={24} className="text-purple-600" /> AI Traffic Prediction</h3>
              <span className="text-[10px] font-bold text-purple-600">PREDICTIVE SYNC: TRUE</span>
           </div>
           <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={data.slice(-7)}>
                    <Bar dataKey="revenue" fill="#8b5cf6" radius={[15, 15, 0, 0]} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '15px', border: 'none' }} />
                 </BarChart>
              </ResponsiveContainer>
           </div>
           <div className="mt-8 pt-8 border-t border-white/50">
              <p className="text-xs text-wellness-gray leading-relaxed text-center font-medium italic">
                 "Network traffic is expected to spike by 12% in the next hour at <strong>Branch South</strong>. AI has automatically notified therapist 'Marcus Wright' to prep his station."
              </p>
           </div>
        </div>

        <div className="lg:col-span-2 card p-8">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Engagement Velocity</h3>
              <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center"><Clock size={16} className="text-gray-400" /></div>
              </div>
           </div>
           <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={data}>
                    <Line type="monotone" dataKey="sessions" stroke="#ec4899" strokeWidth={4} dot={{ r: 4, fill: '#ec4899' }} activeDot={{ r: 8 }} />
                    <Tooltip contentStyle={{ borderRadius: '15px' }} />
                 </LineChart>
              </ResponsiveContainer>
           </div>
           <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Avg Session Time</p>
                 <p className="text-lg font-bold">54 mins</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Peak Velocity</p>
                 <p className="text-lg font-bold">12.4 s/m</p>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RealTimeStats;
