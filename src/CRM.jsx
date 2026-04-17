import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  Calendar, 
  Plus, 
  Download,
  CheckCircle2,
  Clock,
  UserPlus,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const clients = [
  { id: 1, name: "Aria Thorne", email: "aria.t@gmail.com", phone: "+1 234 567 890", lastVisit: "2 days ago", status: "Active", history: "Spine Alignment", spent: "₹1,24,500" },
  { id: 2, name: "Leo Vance", email: "leo.v@outlook.com", phone: "+1 234 567 891", lastVisit: "4 days ago", status: "Active", history: "Muscle Recovery", spent: "₹82,400" },
  { id: 3, name: "Elena Gilbert", email: "elena.g@yahoo.com", phone: "+1 234 567 892", lastVisit: "1 week ago", status: "Pending", history: "Deep Tissue", spent: "₹45,000" },
  { id: 4, name: "Marcus Wright", email: "marcus.w@gmail.com", phone: "+1 234 567 893", lastVisit: "3 weeks ago", status: "Inactive", history: "Detox Wrap", spent: "₹2,10,000" },
  { id: 5, name: "Sarah Connor", email: "sarah.c@tech.com", phone: "+1 234 567 894", lastVisit: "1 month ago", status: "Active", history: "Reiki", spent: "₹30,500" },
];

const CRM = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('list'); // 'list' or 'add'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    history: '',
    status: 'Active'
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleExport = () => {
    // Simulate CSV generation
    const headers = ["ID", "Name", "Email", "Phone", "Last Visit", "Status", "Treatment", "Spent"];
    const csvContent = [
      headers.join(","),
      ...clients.map(c => `${c.id},${c.name},${c.email},${c.phone},${c.lastVisit},${c.status},${c.history},${c.spent.replace(/,/g, '')}`)
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `wellness_clients_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  if (view === 'add') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 pb-20 max-w-4xl mx-auto"
      >
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black mb-2 tracking-tighter">Add New Patient</h1>
            <p className="text-gray-400 font-medium">Create a clinical entity record in the enterprise database.</p>
          </div>
          <button 
            onClick={() => setView('list')}
            className="p-4 hover:bg-gray-50 rounded-2xl border border-gray-100 transition-all shadow-sm flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500"
          >
             Cancel
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card p-8 bg-white/50 backdrop-blur-md">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Personal Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Dr. John Doe"
                    className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-medium text-sm"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-medium text-sm"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-medium text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-8 bg-white/50 backdrop-blur-md">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Clinical Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Primary Treatment Group</label>
                  <select className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-medium text-sm appearance-none">
                    <option>Spine Alignment</option>
                    <option>Deep Tissue Massage</option>
                    <option>Metabolic Detox</option>
                    <option>Cryotherapy</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Initial Status</label>
                  <div className="flex gap-4">
                    <button className="flex-1 py-4 bg-green-50 text-green-600 rounded-2xl font-black text-xs uppercase tracking-widest border border-green-100">Active</button>
                    <button className="flex-1 py-4 bg-gray-50 text-gray-400 rounded-2xl font-black text-xs uppercase tracking-widest border border-transparent">Pending</button>
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => setView('list')}
                    className="btn-premium w-full py-5 text-base shadow-premium hover:shadow-2xl transition-all"
                  >
                    Save Client Record
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 pb-20 relative"
    >
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-[#ff8da1] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-xl min-w-[320px]"
          >
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle2 size={16} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest">Intelligence Report Exported</p>
              <p className="text-[10px] text-gray-400 font-bold">CSV database successfully compiled and downloaded.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-black mb-1 font-outfit tracking-tight">Client Relations</h1>
          <p className="text-gray-400 font-medium">Enterprise database management with clinical precision.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            <Download size={18} /> Export CSV
          </button>
          <button 
            onClick={() => setView('add')}
            className="btn-premium flex items-center gap-3 active:scale-95 transition-transform"
          >
            <UserPlus size={20} /> Add New Client
          </button>
        </div>
      </div>

      {/* Analytics Mini-row */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        {[
          { label: "Total Active Clients", val: "1,284", growth: "+5%", color: "text-green-500", bg: "bg-green-50" },
          { label: "Retention Benchmark", val: "84.2%", growth: "Optimal", color: "text-blue-500", bg: "bg-blue-50" },
          { label: "Avg. Lifetime Value", val: "₹1,25,000", growth: "+12%", color: "text-purple-500", bg: "bg-purple-50" }
        ].map((stat, i) => (
          <div key={i} className="card p-8 premium-card-hover group">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{stat.label}</p>
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-black">{stat.val}</h3>
              <span className={`text-[10px] font-bold ${stat.color} ${stat.bg} px-3 py-1 rounded-full uppercase tracking-widest`}>{stat.growth}</span>
            </div>
            <div className="mt-6 h-1 w-full bg-gray-50 rounded-full overflow-hidden">
               <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: '70%' }} 
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`h-full ${stat.color.replace('text', 'bg')}`}
               ></motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[3rem] shadow-soft border border-black/5 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/20">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Filter by name, metabolic history, or clinician..." 
              className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-[1.5rem] text-sm font-medium focus:ring-4 focus:ring-purple-100 transition-all outline-none shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <button className="p-4 bg-white rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all shadow-sm">
              <Filter size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50">
                <th className="px-10 py-6">Patient Entity</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6">Treatment Record</th>
                <th className="px-6 py-6 text-right">Total Billing</th>
                <th className="px-10 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {clients.map((client) => (
                <motion.tr 
                  key={client.id}
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                  className="transition-colors group cursor-pointer"
                >
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center font-black text-purple-600 border border-purple-100/50 shadow-sm group-hover:scale-110 transition-transform">
                        {client.name.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-black text-sm group-hover:text-black transition-colors">{client.name}</p>
                        <p className="text-xs text-gray-400 font-medium">{client.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`badge ${
                      client.status === 'Active' ? 'badge-success' : 
                      client.status === 'Pending' ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       <p className="text-sm font-bold">{client.history}</p>
                       <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                       <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{client.lastVisit}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <p className="text-sm font-black text-wellness-dark">{client.spent}</p>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                       <button className="p-2 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-gray-100"><Mail size={16} className="text-gray-400" /></button>
                       <button className="p-2 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-gray-100"><ArrowRight size={16} className="text-purple-400" /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default CRM;
