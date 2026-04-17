import React, { useState } from 'react';
import { 
  MapPin, 
  Users, 
  TrendingUp, 
  Calendar, 
  ChevronRight, 
  Activity,
  ArrowUpRight,
  MoreVertical,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';

const branches = [
  { id: 1, name: "Branch Primary", location: "Downtown Metro", manager: "Dr. Sarah Mills", status: "Optimal", revenue: "$42,000", occupancy: 92, staff: 12 },
  { id: 2, name: "Branch East", location: "Green Valley", manager: "Marcus Wright", status: "Active", revenue: "$28,500", occupancy: 65, staff: 8 },
  { id: 3, name: "Wellness Hub South", location: "Bayside District", manager: "Elena Gilbert", status: "Active", revenue: "$31,200", occupancy: 78, staff: 10 },
  { id: 4, name: "Core North", location: "Tech Park", manager: "Leo Vance", status: "Planned", revenue: "$0", occupancy: 0, staff: 0 },
];

const BranchManagement = () => {
  const [view, setView] = useState('list'); // 'list' or 'add'

  if (view === 'add') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 pb-20 max-w-5xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">New Branch Deployment</h1>
            <p className="text-gray-400 font-medium text-lg">Expanding the clinical network with strategic infrastructure.</p>
          </div>
          <button 
            onClick={() => setView('list')}
            className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            Cancel Deployment
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           <div className="lg:col-span-2 space-y-8">
              <div className="card p-10 bg-white shadow-premium">
                 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-50 pb-4">Geographical Node Details</h3>
                 <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Branch Designation</label>
                          <input type="text" placeholder="e.g. Wellness Hub West" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-bold text-sm" />
                       </div>
                       <div>
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Primary Location</label>
                          <div className="relative">
                             <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                             <input type="text" placeholder="City, District" className="w-full bg-gray-50 border border-gray-100 pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-bold text-sm" />
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Executive Leadership</label>
                          <select className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-bold text-sm appearance-none">
                             <option>Select Appointed Manager</option>
                             <option>Marcus Wright</option>
                             <option>Elena Gilbert</option>
                             <option>Leo Vance</option>
                          </select>
                       </div>
                       <div>
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Resource Allocation</label>
                          <input type="number" placeholder="Number of Clinicians" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-bold text-sm" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="card p-10 bg-[#ff8da1] text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                    <TrendingUp size={100} />
                 </div>
                 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 border-b border-white/10 pb-4">Network Capability</h3>
                 <p className="text-sm text-gray-300 leading-relaxed mb-10 italic">
                    "Expanding into a new node will increase the total network metadata throughput by approximately 24%."
                 </p>
                 <button 
                  onClick={() => setView('list')}
                  className="w-full py-5 bg-white text-black rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                 >
                    <Activity size={18} /> Finalize Node Setup
                 </button>
              </div>

              <div className="bg-wellness-mint/20 p-8 rounded-[3rem] border border-wellness-mint flex items-start gap-4 shadow-soft">
                 <div className="p-3 bg-white rounded-2xl shadow-sm text-wellness-dark">
                    <Users size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-sm text-wellness-dark">Staffing Sync</h4>
                    <p className="text-[10px] text-wellness-dark/60 font-medium">Automatic recruitment workflows will trigger upon node finalization.</p>
                 </div>
              </div>
           </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Network Management</h1>
          <p className="text-gray-400 text-sm">Monitor multi-branch performance and resource allocation.</p>
        </div>
        <button 
          onClick={() => setView('add')}
          className="btn-premium flex items-center gap-2 active:scale-95 transition-all" 
          style={{ padding: '0.6rem 1.2rem' }}
        >
          <Layers size={18} /> New Branch
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch) => (
              <motion.div 
                key={branch.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <MapPin size={120} />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{branch.name}</h3>
                    <p className="text-sm text-gray-400 flex items-center gap-1"><MapPin size={14}/> {branch.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    branch.status === 'Optimal' ? 'bg-green-50 text-green-600' : 
                    branch.status === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {branch.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Manager</p>
                    <p className="text-sm font-semibold">{branch.manager}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Staff</p>
                    <p className="text-sm font-semibold">{branch.staff} Clinicians</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-400">Occupancy</span>
                    <span>{branch.occupancy}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${branch.occupancy}%` }}
                      className={`h-full rounded-full ${branch.occupancy > 80 ? 'bg-green-400' : 'bg-blue-400'}`}
                    ></motion.div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center">
                  <div className="text-lg font-bold">
                    {branch.revenue} <span className="text-[10px] text-gray-400 font-normal ml-1">Today</span>
                  </div>
                  <button className="p-2 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all"><ChevronRight size={18}/></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-[#ff8da1] text-white p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-20">
              <TrendingUp size={120} />
            </div>
            <h3 className="text-xl font-bold mb-2">Network Growth</h3>
            <p className="text-gray-400 text-xs mb-8">Branch expansion progress</p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl font-bold">4</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Active<br/>Nodes</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <span>Total Network Revenue</span>
                <span className="text-green-400">$102k</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full">
                <div className="h-full w-3/4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5">
            <h3 className="font-bold mb-6">Upcoming Branch Events</h3>
            <div className="space-y-6">
              {[
                { event: "Core North Opening", date: "May 12", type: "Launch" },
                { event: "Branch East Audit", date: "Apr 28", type: "Security" },
                { event: "Primary Staff Sync", date: "Apr 20", type: "Admin" }
              ].map((ev, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[8px] font-bold text-gray-400 uppercase">{ev.date.split(' ')[0]}</span>
                    <span className="text-sm font-bold">{ev.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{ev.event}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{ev.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchManagement;
