import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  History, 
  Sparkles, 
  TrendingUp, 
  AlertTriangle, 
  ChevronRight,
  Zap,
  Star,
  ShieldCheck
} from 'lucide-react';

const RecommendationCard = ({ title, subtitle, icon: Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="bg-white/80 backdrop-blur-xl border border-gray-100 p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform ${color}`}>
      <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className={`w-12 h-12 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center mb-6`}>
        <Icon className={color} size={24} />
      </div>
      <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{subtitle}</h4>
      <h3 className="text-xl font-black tracking-tight mb-4">{title}</h3>
      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#ff8da1]">
        Configure Plan <ChevronRight size={14} />
      </button>
    </div>
  </motion.div>
);

const AIRecommendations = () => {
  return (
    <div className="max-w-7xl mx-auto pb-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
           <div className="px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-200">
              Active Recommendation Engine
           </div>
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-2">Neural Client Growth</h1>
        <p className="text-gray-400 font-medium text-lg">AI-driven treatment paths based on biological and behavioral data.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Matrix */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-8 bg-sky-50/50 backdrop-blur-xl rounded-[2.5rem] border border-sky-100">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-sky-400 mb-8 flex items-center gap-2">
              <Users size={16} /> Input Matrix
            </h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Demographics</p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold shadow-sm">Age 34</span>
                   <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold shadow-sm">Female</span>
                   <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold shadow-sm">Athlete</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Biological Goals</p>
                <div className="space-y-3">
                  {['Inflammation Reduction', 'Redox Optimization', 'Muscle Recovery'].map(goal => (
                    <div key={goal} className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-gray-50">
                       <Target className="text-sky-500" size={16} />
                       <span className="text-xs font-bold">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Therapy History</p>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold">Total Sessions</span>
                    <span className="text-xs font-black text-sky-600">42</span>
                  </div>
                  <div className="flex gap-1 h-2 bg-sky-50 rounded-full overflow-hidden">
                    <div className="w-1/3 bg-sky-400"></div>
                    <div className="w-1/4 bg-pink-400"></div>
                    <div className="w-1/6 bg-purple-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Recommendations */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecommendationCard 
              title="Hyperbaric Oxygen + IV"
              subtitle="Optimized Protocol"
              icon={Zap}
              color="text-sky-500"
              delay={0.1}
            />
            <RecommendationCard 
              title="Platinum Rejuvenation"
              subtitle="Package Upgrade"
              icon={Star}
              color="text-[#ff8da1]"
              delay={0.2}
            />
          </div>

          {/* Critical Risk Insights */}
          <div className="p-10 bg-red-50/50 backdrop-blur-xl rounded-[3rem] border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <AlertTriangle size={160} className="text-red-500" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-20 h-20 bg-red-100 rounded-[2rem] flex items-center justify-center shrink-0">
                <AlertTriangle className="text-red-500" size={40} />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-black tracking-tight text-red-900">Drop-off Risk Detected</h3>
                <p className="text-red-700/70 font-medium max-w-lg">Client 'Aria Thorne' hasn't synchronized therapy nodes in 14 days. Retention probability is dropping below 40%.</p>
              </div>
              <button className="md:ml-auto px-8 py-4 bg-red-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-200 active:scale-95 transition-all">
                Trigger Recovery Logic
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Growth Potential', val: '+24%', icon: TrendingUp, color: 'text-green-500' },
              { label: 'Neural Alignment', val: '92%', icon: ShieldCheck, color: 'text-sky-500' },
              { label: 'Predicted Lifetime Value', val: '₹145k', icon: Sparkles, color: 'text-purple-500' }
            ].map((stat, i) => (
              <div key={i} className="card p-6 flex flex-col items-center text-center">
                <div className={`p-3 rounded-2xl bg-gray-50 mb-4 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
                <p className="text-xl font-black">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;
