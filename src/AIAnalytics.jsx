import React, { useState } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  AlertCircle, 
  Sparkles, 
  BrainCircuit, 
  ArrowUpRight, 
  BarChart3,
  PieChart as PieIcon,
  Search,
  ChevronRight,
  Package,
  Layers
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { motion } from 'framer-motion';

const retentionData = [
  { name: 'Branch Primary', retention: 92, ltv: 4500 },
  { name: 'Branch East', retention: 78, ltv: 3200 },
  { name: 'Wellness Hub', retention: 85, ltv: 3800 },
];

const riskData = [
  { subject: 'Retention', A: 120, B: 110, fullMark: 150 },
  { subject: 'Revenue', A: 98, B: 130, fullMark: 150 },
  { subject: 'Engagement', A: 86, B: 130, fullMark: 150 },
  { subject: 'Uptime', A: 99, B: 100, fullMark: 150 },
  { subject: 'Growth', A: 85, B: 90, fullMark: 150 },
];

const COLORS = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981'];

const AIAnalytics = () => {
  const [view, setView] = useState('list'); // 'list', 'prediction', or 'audit'
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRunPrediction = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setView('prediction');
    }, 1500);
  };

  const handleDeepAudit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setView('audit');
    }, 1200);
  };

  if (view === 'audit') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 pb-20 max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-[#ff8da1] rounded-2xl flex items-center justify-center shadow-lg shadow-pink-100">
                <Search className="text-white" size={24} />
             </div>
             <div>
                <h1 className="text-4xl font-black tracking-tight mb-1">Deep Systems Audit</h1>
                <p className="text-gray-400 font-medium">Full clinical integrity and network security sweep.</p>
             </div>
          </div>
          <button 
            onClick={() => setView('list')}
            className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            Exit Audit Mode
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           <div className="lg:col-span-1 space-y-6">
              {[
                { label: "Clinical Data", status: "Secure", val: "1.4TB" },
                { label: "Network Nodes", status: "Active", val: "12/12" },
                { label: "AI Empathy Core", status: "Optimal", val: "v4.2" },
                { label: "Last Sweep", status: "Complete", val: "2m ago" }
              ].map((s, i) => (
                <div key={i} className="card p-6 bg-white border border-gray-100 shadow-sm">
                   <div className="flex justify-between items-center mb-2">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{s.label}</p>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   </div>
                   <p className="text-xl font-black">{s.val}</p>
                   <p className="text-[10px] font-bold text-green-500 mt-1 uppercase tracking-tighter">{s.status} Status</p>
                </div>
              ))}
           </div>

           <div className="lg:col-span-3 space-y-8">
              <div className="card bg-gray-900 border-none p-0 overflow-hidden shadow-2xl">
                 <div className="p-6 bg-gray-800 flex justify-between items-center border-b border-gray-700">
                    <div className="flex items-center gap-3">
                       <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Integrity Terminal [ROOT]</p>
                    </div>
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                    </div>
                 </div>
                 <div className="p-8 font-mono text-[11px] text-green-400/80 space-y-2 h-[400px] overflow-y-auto bg-black/50 backdrop-blur-xl">
                    <p className="text-gray-500">[SYSTEM] Initialization deep sweep sequence...</p>
                    <p>» Checking Node: 0x4f2e [South Branch] ... <span className="text-green-500">EXCELLENT</span></p>
                    <p>» Pinging AI Memory Buffer ... <span className="text-green-500">INTEGRITY 100%</span></p>
                    <p>» Scanning Patient Records for Churn Anomalies ... <span className="text-yellow-400">3 IDENTIFIED</span></p>
                    <p className="text-gray-500">[SECURITY] AES-256 handshake established with Branch 4.</p>
                    <p>» Verifying Clinician Credentials ... <span className="text-green-500">AUTHENTICATED</span></p>
                    <p>» Neural Weights Calibration Check ... <span className="text-purple-400">DRIFT: 0.002s [NORMAL]</span></p>
                    <p className="text-gray-500 mt-4 animate-pulse">_ Generating full biometric report... Please wait.</p>
                 </div>
              </div>

              <div className="bg-wellness-mint/10 border border-wellness-mint/20 p-8 rounded-[2rem] flex items-center gap-6">
                 <div className="p-4 bg-white rounded-2xl shadow-sm text-wellness-dark">
                    <AlertCircle size={32} />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Systems Integrity: 99.98%</h4>
                    <p className="text-sm text-gray-600">The last 24h of operations show zero unauthorized access attempts and optimal AI decision consistency.</p>
                 </div>
                 <button className="ml-auto px-8 py-4 bg-[#ff8da1] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#ff7a91] transition-all shadow-lg active:scale-95">
                    Generate Log Token
                 </button>
              </div>
           </div>
        </div>
      </motion.div>
    );
  }

  if (view === 'prediction') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 pb-20 max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200">
                <Sparkles className="text-white" size={24} />
             </div>
             <div>
                <h1 className="text-4xl font-black tracking-tight mb-1">Predictive Model: v8.4</h1>
                <p className="text-gray-400 font-medium">Neural forecasting for Q3-Q4 2026 expansion cycles.</p>
             </div>
          </div>
          <button 
            onClick={() => setView('list')}
            className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            Back to Overview
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* High Fidelity Insights */}
           <div className="lg:col-span-2 space-y-8">
              <div className="card p-10 bg-[#ff8da1] text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-10 opacity-10">
                    <BrainCircuit size={150} />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-10">Revenue Probability Matrix</h3>
                    <div className="flex items-center gap-12 mb-12">
                       <div>
                          <p className="text-5xl font-black mb-2 animate-pulse">₹12.8M</p>
                          <p className="text-xs text-green-400 font-bold uppercase tracking-widest">Predicted Quarterly Revenue</p>
                       </div>
                       <div className="h-20 w-px bg-white/10"></div>
                       <div>
                          <p className="text-5xl font-black mb-2">94.2%</p>
                          <p className="text-xs text-purple-400 font-bold uppercase tracking-widest">Model Confidence Level</p>
                       </div>
                    </div>
                    <div className="space-y-6">
                       <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                          "Based on a 1.2M point data analysis, the system predicts a significant revenue surge in **Spine Alignment** and **Detox Packages** due to seasonal wellness spikes."
                       </p>
                       <div className="flex gap-4">
                          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">View Correlation Map</button>
                          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Download PDF Model</button>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 <div className="card p-8 bg-white shadow-premium">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Patient Flow Projection</h4>
                    <div className="flex items-end gap-2 h-24 mb-6">
                       {[40, 65, 45, 90, 75, 40].map((h, i) => (
                         <motion.div 
                          key={i} 
                          initial={{ height: 0 }} 
                          animate={{ height: `${h}%` }} 
                          className="flex-1 bg-gradient-to-t from-gray-50 to-gray-200 rounded-lg"
                         />
                       ))}
                    </div>
                    <p className="text-xs font-bold text-gray-700">+18% increase in patient bookings expected for August.</p>
                 </div>
                 <div className="card p-8 bg-white shadow-premium relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       <Zap size={60} />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Churn Prevention Logic</h4>
                    <p className="text-2xl font-black text-orange-500 mb-2">42 Patients</p>
                    <p className="text-xs font-medium text-gray-500">Predicted at-risk for July. System has auto-generated 3 marketing sequences.</p>
                 </div>
              </div>
           </div>

           {/* Strategic Proposals */}
           <div className="space-y-8">
              <div className="card p-10 bg-white shadow-premium flex flex-col h-full border-2 border-purple-50">
                 <h3 className="text-sm font-black uppercase tracking-widest mb-10 pb-4 border-b border-gray-50">Strategic Proposals</h3>
                 <div className="space-y-8 flex-1">
                    {[
                      { icon: <TrendingUp size={20}/>, title: "Resource Optimization", desc: "Reallocate 2 therapists from Branch East to Wellness Hub for peak hours (10AM - 2PM)." },
                      { icon: <Package size={20}/>, title: "Inventory Pre-order", desc: "Increase 'Aroma Oils' stock by 40% to prevent predicted stock-out in week 3 of June." },
                      { icon: <Users size={20}/>, title: "VIP Loyalty Sync", desc: "Launch 'Elite Recovery' campaign targeting top 50 high-LTV patients." }
                    ].map((p, i) => (
                      <div key={i} className="flex gap-4 group cursor-pointer hover:translate-x-1 transition-transform">
                         <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                            {p.icon}
                         </div>
                         <div>
                            <p className="text-sm font-extrabold mb-1 group-hover:text-purple-600 transition-colors">{p.title}</p>
                            <p className="text-[10px] text-gray-400 font-medium leading-relaxed">{p.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <button className="btn-premium w-full py-5 text-lg shadow-xl active:scale-95 transition-all mt-10">
                    Apply Network Changes
                 </button>
              </div>
           </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 pb-20"
    >
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
           <div className="w-14 h-14 bg-[#ff8da1] rounded-[1.5rem] flex items-center justify-center shadow-lg">
              <BrainCircuit className="text-white" size={32} />
           </div>
           <div>
              <h1 className="text-3xl font-bold mb-1 font-outfit">AI Advanced Analytics</h1>
              <p className="text-gray-400 text-sm">Predictive modeling, branch benchmarking, and patient churn analysis.</p>
           </div>
        </div>
        <div className="flex gap-4">
           <button 
            onClick={handleDeepAudit}
            disabled={isProcessing}
            className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
           >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                   >
                     <Search size={18} />
                   </motion.div>
                   Sweeping...
                </div>
              ) : (
                <><Search size={18} /> Deep Audit</>
              )}
           </button>
           <button 
            onClick={handleRunPrediction}
            disabled={isProcessing}
            className="btn-premium flex items-center gap-2 relative overflow-hidden" 
            style={{ padding: '0.7rem 1.5rem' }}
           >
              {isProcessing ? (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  >
                    <Zap size={18} />
                  </motion.div>
                  Syncing Neural Nodes...
                </>
              ) : (
                <>
                  <Sparkles size={18} /> Run Prediction
                </>
              )}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Retention Benchmarking - Radar Chart */}
        <div className="lg:col-span-2 card p-8 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
             <BarChart3 size={200} />
          </div>
          <h3 className="text-xl font-bold mb-8">Branch Network Benchmark</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskData}>
                <PolarGrid stroke="#f3f4f6" />
                <PolarAngleAxis dataKey="subject" tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 'bold'}} />
                <PolarRadiusAxis />
                <Radar name="Benchmark" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                <Radar name="Current Performance" dataKey="B" stroke="#ec4899" fill="#ec4899" fillOpacity={0.3} />
                <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-6 bg-purple-50 rounded-[2rem] border border-purple-100 flex items-center gap-4">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="text-purple-600" size={24} />
             </div>
             <p className="text-xs text-purple-800 italic leading-relaxed">
                <strong>AI Insight:</strong> Branch East shows a 15% revenue gap in engagement vs retention. Automated follow-ups are underperforming there due to high message-ignore rates.
             </p>
          </div>
        </div>

        {/* Predictive Churn Analysis */}
        <div className="lg:col-span-2 card p-8 group overflow-hidden">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
             <Zap size={24} className="text-orange-400" /> High-Risk Churn Analysis
          </h3>
          <div className="space-y-6">
             {[
               { name: "John Smith", risk: 82, ltv: "$14k", reason: "Missed 3 sessions" },
               { name: "Elena Gilbert", risk: 45, ltv: "$8.4k", reason: "High stress sync" },
               { name: "Marcus Wright", risk: 12, ltv: "$12k", reason: "Optimal engagement" },
               { name: "Aria Thorne", risk: 5, ltv: "$22k", reason: "Peak retention" }
             ].map((client, i) => (
               <div key={i} className="flex items-center gap-6 p-6 rounded-[2rem] bg-gray-50/50 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center font-bold text-gray-400 border border-gray-100 shrink-0">
                     {client.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div className="flex-1">
                     <div className="flex justify-between mb-2">
                        <p className="font-bold text-sm">{client.name}</p>
                        <span className="text-[10px] font-bold text-gray-400">{client.ltv} LTV</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden border border-gray-100">
                           <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${client.risk}%` }} 
                              className={`h-full rounded-full ${client.risk > 70 ? 'bg-red-400' : client.risk > 40 ? 'bg-orange-400' : 'bg-green-400'}`}
                           ></motion.div>
                        </div>
                        <span className={`text-[10px] font-bold ${client.risk > 70 ? 'text-red-500' : client.risk > 40 ? 'text-orange-500' : 'text-green-500'}`}>
                           {client.risk}% Risk
                        </span>
                     </div>
                  </div>
               </div>
             ))}
          </div>
          <button className="w-full mt-8 py-5 bg-[#ff8da1] text-white rounded-2xl text-xs font-bold shadow-lg hover:shadow-xl hover:bg-[#ff7a91] transition-all flex items-center justify-center gap-3">
             Generate Recovery Campaigns <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Inventory Optimization & Resource Allocation */}
        <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <Package size={80} />
           </div>
           <h3 className="font-bold text-lg mb-6 flex items-center gap-2"><Package size={20}/> Stock Pulse</h3>
           <div className="space-y-6">
              {[
                { label: "Oils (Aroma)", val: 12, max: 100, alert: true },
                { label: "Sauna Mats", val: 88, max: 100 },
                { label: "Detox Solvents", val: 45, max: 100 }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">
                      <span className={item.alert ? 'text-red-500 font-black' : ''}>{item.label}</span>
                      <span>{item.val}%</span>
                   </div>
                   <div className="h-4 w-full bg-gray-50 rounded-full p-1 border border-white">
                      <motion.div 
                         initial={{ width: 0 }} 
                         animate={{ width: `${item.val}%` }} 
                         className={`h-full rounded-full shadow-inner ${item.val < 20 ? 'bg-red-400' : 'bg-blue-400'}`}
                      ></motion.div>
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-8 pt-8 border-t border-gray-50 text-center">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Inventory AI</p>
              <p className="text-xs text-wellness-gray italic leading-relaxed">System has auto-triggered order for "Oils (Aroma)" due at Thursday 2PM.</p>
           </div>
        </div>

        {/* Global Efficiency Pie */}
        <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5">
           <h3 className="font-bold text-lg mb-6 flex items-center gap-2"><PieIcon size={20}/> Branch Efficiency</h3>
           <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie
                       data={[
                         { name: 'Direct Rev', value: 400 },
                         { name: 'Upsell', value: 300 },
                         { name: 'Packages', value: 300 },
                         { name: 'Retail', value: 200 },
                       ]}
                       cx="50%"
                       cy="50%"
                       innerRadius={50}
                       outerRadius={80}
                       paddingAngle={5}
                       dataKey="value"
                    >
                       {COLORS.map((color, index) => (
                         <Cell key={`cell-${index}`} fill={color} />
                       ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '15px', border: 'none' }} />
                 </PieChart>
              </ResponsiveContainer>
           </div>
           <div className="grid grid-cols-2 gap-2 mt-6">
              {['Direct', 'Upsell', 'Pkg', 'Retail'].map((l, i) => (
                <div key={i} className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}}></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{l}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Performance Layers */}
        <div className="lg:col-span-2 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-[2.5rem] border border-white shadow-soft relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
              <Layers size={150} />
           </div>
           <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-10">
                 <div>
                    <h3 className="text-2xl font-bold mb-1">Optimized Growth Layers</h3>
                    <p className="text-sm text-gray-500">AI-predicted revenue layering for Q3 2026.</p>
                 </div>
                 <div className="p-4 bg-white rounded-3xl shadow-sm text-center">
                    <p className="text-3xl font-bold text-indigo-600">+34%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expected Growth</p>
                 </div>
              </div>
              <div className="flex gap-4 mt-auto">
                 <button className="flex-1 py-4 bg-white rounded-[2rem] text-xs font-bold text-indigo-600 shadow-sm border border-indigo-100 hover:shadow-md transition-all">Export Modeling</button>
                 <button className="flex-1 py-4 bg-indigo-600 text-white rounded-[2rem] text-xs font-bold shadow-lg hover:shadow-xl transition-all">Apply Strategy</button>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAnalytics;
