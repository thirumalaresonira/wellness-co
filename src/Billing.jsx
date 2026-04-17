import React, { useState } from 'react';
import { 
  CreditCard, 
  Download, 
  Filter, 
  Search, 
  Plus, 
  TrendingUp, 
  ArrowUpRight, 
  Wallet, 
  Package, 
  ShieldCheck, 
  Layers,
  Clock,
  ChevronRight,
  MoreVertical,
  Zap,
  Ticket,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const invoices = [
  { id: "INV-2026-001", client: "Aria Thorne", date: "Apr 12, 2026", amount: "₹12,450", status: "Paid", method: "UPI" },
  { id: "INV-2026-002", client: "Leo Vance", date: "Apr 11, 2026", amount: "₹8,200", status: "Paid", method: "Card" },
  { id: "INV-2026-003", client: "Elena Gilbert", date: "Apr 10, 2026", amount: "₹4,500", status: "Pending", method: "Wallet" },
  { id: "INV-2026-004", client: "Marcus Wright", date: "Apr 09, 2026", amount: "₹22,100", status: "Paid", method: "Net Banking" },
];

const packages = [
  { name: "Detox Core", sessions: 12, price: "₹24,999", sold: 45, status: "Active" },
  { name: "Spine Alignment Pro", sessions: 8, price: "₹32,500", sold: 28, status: "Trending" },
  { name: "Skin Radiance", sessions: 5, price: "₹15,000", sold: 112, status: "Active" },
];

const Billing = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState('Invoices');
  const [view, setView] = useState('list'); // 'list' or 'tax'
  const [notification, setNotification] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleExportReport = (name) => {
    setIsGenerating(true);
    setNotification({ title: "Generating Secure Report", desc: `Compiling encrypted data for ${name}...`, color: "bg-blue-600" });
    
    setTimeout(() => {
      const content = `Wellness ERP | Secure Financial Report\nReport Type: ${name}\nTimestamp: ${new Date().toISOString()}\nStatus: Verified & Compliant\n----------------------------------\nGST Reference: ${Math.random().toString(36).substring(7).toUpperCase()}\nTotal Reconciliation: Verified`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${name.toLowerCase().replace(/ /g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setIsGenerating(false);
      setNotification({ title: "Report Downloaded", desc: `${name} is now available in your downloads.`, color: "bg-green-600" });
      setTimeout(() => setNotification(null), 3000);
    }, 2000);
  };

  if (view === 'tax') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 pb-20 max-w-6xl mx-auto relative"
      >
        <AnimatePresence>
          {notification && (
            <motion.div 
              initial={{ opacity: 0, y: -20, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, scale: 0.95, x: '-50%' }}
              className="fixed top-8 left-1/2 z-50 bg-[#ff8da1] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-xl min-w-[350px]"
            >
              <div className={`w-10 h-10 ${notification.color} rounded-xl flex items-center justify-center shadow-lg`}>
                {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <CheckCircle2 size={18} />}
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-widest">{notification.title}</p>
                <p className="text-[10px] text-gray-400 font-bold">{notification.desc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Tax Compliance & Analytics</h1>
            <p className="text-gray-400 font-medium text-lg">Centralized GST reporting and financial reconciliation.</p>
          </div>
          <button 
            onClick={() => setView('list')}
            className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm"
          >
            Back to Ledger
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { label: "Total GST Collected", val: "₹1,42,500", color: "text-purple-600", bg: "bg-purple-50" },
            { label: "Input Tax Credit", val: "₹28,400", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Net Tax Payable", val: "₹1,14,100", color: "text-orange-600", bg: "bg-orange-50" }
          ].map((stat, i) => (
            <div key={i} className="card p-8 premium-card-hover group">
               <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">{stat.label}</p>
               <h3 className={`text-3xl font-black ${stat.color}`}>{stat.val}</h3>
               <div className="mt-6 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Quarterly Sync</span>
                  <div className={`w-8 h-8 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center`}>
                     <Download size={14} />
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="card p-10 bg-white shadow-soft">
              <h3 className="text-sm font-black uppercase tracking-widest mb-10 pb-4 border-b border-gray-50 flex items-center justify-between">
                 GST Breakdown by Service
                 <Layers size={18} className="text-gray-200" />
              </h3>
              <div className="space-y-8">
                 {[
                   { service: "Therapy Sessions (18%)", tax: "₹84,200", progress: 70, color: "bg-purple-600" },
                   { service: "Wellness Packages (12%)", tax: "₹42,100", progress: 45, color: "bg-blue-500" },
                   { service: "Retail & Products (5%)", tax: "₹16,200", progress: 20, color: "bg-green-500" }
                 ].map((s, i) => (
                   <div key={i} className="space-y-3">
                      <div className="flex justify-between text-xs font-black">
                         <span>{s.service}</span>
                         <span className="text-gray-400">{s.tax}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                         <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${s.progress}%` }}
                          className={`h-full ${s.color} rounded-full`}
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="card p-10 bg-[#ff8da1] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                 <ShieldCheck size={150} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                 <div>
                    <h3 className="text-sm font-black uppercase tracking-widest mb-4">Export Protocol</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-10">
                       Generate and download compliant GST-ready invoices and summaries for external audits and CA filing.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <button 
                      onClick={() => handleExportReport('Annual Financial Report')}
                      disabled={isGenerating}
                      className="w-full py-5 bg-white text-black rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                       <Download size={18}/> Export Annual Report (FY 2025-26)
                    </button>
                    <button 
                      onClick={() => handleExportReport('Monthly GST Summary')}
                      disabled={isGenerating}
                      className="w-full py-5 bg-white/10 text-white rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                       <Download size={18}/> Monthly GST Summary (April)
                    </button>
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
      className="p-8 pb-20"
    >
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-black mb-1 font-outfit tracking-tight">Financial Engine</h1>
          <p className="text-gray-400 font-medium">Manage billing, subscriptions, and digital wallet operations.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setView('tax')}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            <Download size={18} /> Tax Reports
          </button>
          <button 
            className="btn-premium flex items-center gap-2 group active:scale-95 transition-all" 
            style={{ padding: '0.7rem 1.5rem' }}
            onClick={() => setCurrentView('CreateInvoice')}
          >
            <Plus size={20} className="group-hover:rotate-90 transition-transform" /> Generate Invoice
          </button>
        </div>
      </div>

      {/* Financial Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div className="card p-8 bg-[#ff8da1] text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <TrendingUp size={100} />
           </div>
           <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-4">Revenue MTD</p>
           <h3 className="text-4xl font-black mb-1">₹8.42L</h3>
           <p className="text-green-400 text-xs font-bold">+18.5% <ArrowUpRight className="inline" size={14}/></p>
        </div>
        <div className="card p-8 premium-card-hover">
           <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Wallet Float</p>
           <h3 className="text-4xl font-black mb-1 text-wellness-dark">₹2.15L</h3>
           <p className="text-gray-400 text-xs font-bold">Prepaid funds held</p>
        </div>
        <div className="card p-8 premium-card-hover group">
           <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Package Utilization</p>
              <Package size={18} className="text-gray-200 group-hover:text-purple-400 transition-colors" />
           </div>
           <h3 className="text-4xl font-black mb-1">92%</h3>
           <p className="text-blue-500 text-xs font-bold">Active sessions queued</p>
        </div>
        <div className="card p-8 premium-card-hover group">
           <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Avg Invoice Value</p>
              <Zap size={18} className="text-gray-200 group-hover:text-orange-400 transition-colors" />
           </div>
           <h3 className="text-4xl font-black mb-1">₹14.2k</h3>
           <p className="text-wellness-dark text-xs font-bold">Per patient (Avg)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Invoices or Packages */}
        <div className="lg:col-span-2 space-y-8">
           <div className="flex gap-8 border-b border-gray-100 mb-2">
              {['Invoices', 'Packages', 'Wallet History'].map(tab => (
                 <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${
                    activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                  }`}
                 >
                    {tab}
                    {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-full" />}
                 </button>
              ))}
           </div>

           <AnimatePresence mode="wait">
              {activeTab === 'Invoices' && (
                <motion.div 
                  key="invoices"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-[3rem] shadow-soft border border-black/5 overflow-hidden"
                >
                  <table className="w-full text-left">
                     <thead>
                        <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50">
                           <th className="px-10 py-6">Reference No.</th>
                           <th className="px-8 py-6">Patient Entity</th>
                           <th className="px-8 py-6">Amount</th>
                           <th className="px-8 py-6">Status</th>
                           <th className="px-10 py-6"></th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                        {invoices.map(inv => (
                          <tr key={inv.id} className="group hover:bg-gray-50/50 transition-colors">
                             <td className="px-10 py-6">
                                <p className="text-xs font-black text-gray-400">{inv.id}</p>
                                <p className="text-[10px] font-bold text-gray-300">{inv.date}</p>
                             </td>
                             <td className="px-8 py-6 font-bold text-sm">{inv.client}</td>
                             <td className="px-8 py-6 font-black text-sm">{inv.amount}</td>
                             <td className="px-8 py-6">
                                <span className={`badge ${inv.status === 'Paid' ? 'badge-success' : 'bg-orange-50 text-orange-600'}`}>
                                   {inv.status}
                                </span>
                             </td>
                             <td className="px-10 py-6 text-right">
                                <button className="p-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-gray-100 rounded-xl shadow-sm">
                                   <Download size={16} className="text-gray-400" />
                                </button>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
                </motion.div>
              )}

              {activeTab === 'Wallet History' && (
                <motion.div 
                  key="wallet-history"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-[3rem] shadow-soft border border-black/5 overflow-hidden"
                >
                  <div className="p-8 border-b border-gray-50">
                     <div className="flex justify-between items-center">
                        <h4 className="text-sm font-black uppercase tracking-widest">Digital Float Ledger</h4>
                        <div className="flex gap-2">
                           <span className="px-3 py-1 bg-green-50 text-green-600 text-[8px] font-bold rounded-full uppercase tracking-widest">Credits: ₹1.4L</span>
                           <span className="px-3 py-1 bg-red-50 text-red-600 text-[8px] font-bold rounded-full uppercase tracking-widest">Debits: ₹0.2L</span>
                        </div>
                     </div>
                  </div>
                  <div className="p-4">
                     {[
                        { type: 'Credit', source: 'UPI Recharge', amount: '+₹5,000', date: 'Today, 10:20 AM', status: 'Success' },
                        { type: 'Debit', source: 'Session: Spine Alignment', amount: '-₹4,500', date: 'Yesterday', status: 'Settled' },
                        { type: 'Credit', source: 'Annual Membership Bonus', amount: '+₹1,000', date: 'Apr 12', status: 'Success' },
                        { type: 'Debit', source: 'Ayurvedic Massage', amount: '-₹2,200', date: 'Apr 10', status: 'Settled' }
                     ].map((t, i) => (
                        <div key={i} className="flex items-center justify-between p-6 hover:bg-gray-50 rounded-2xl transition-colors">
                           <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.type === 'Credit' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                                 <Plus size={18} className={t.type === 'Debit' ? 'rotate-45' : ''} />
                              </div>
                              <div>
                                 <p className="text-sm font-bold">{t.source}</p>
                                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t.date}</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className={`text-sm font-black ${t.type === 'Credit' ? 'text-green-600' : 'text-black'}`}>{t.amount}</p>
                              <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{t.status}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Packages' && (
                <motion.div 
                  key="packages"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                   {packages.map(pkg => (
                      <div key={pkg.name} className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-black/5 group hover:shadow-premium transition-all duration-500">
                         <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                               <Package size={24} />
                            </div>
                            <span className="text-[10px] font-black text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-widest">{pkg.status}</span>
                         </div>
                         <h4 className="text-xl font-black mb-1">{pkg.name}</h4>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">{pkg.sessions} Sessions Included</p>
                         <div className="flex justify-between items-end">
                            <div>
                               <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Pricing</p>
                               <p className="text-2xl font-black font-outfit">{pkg.price}</p>
                            </div>
                            <button className="p-4 bg-gray-50 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all">
                               <ChevronRight size={20} />
                            </button>
                         </div>
                      </div>
                   ))}
                   <div className="border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                         <Plus size={24} />
                      </div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400">Design New Package</p>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

        {/* Right Sidebar: Membership & Wallet */}
        <div className="space-y-8">
           {/* Membership Tiers */}
           <div className="bg-white p-8 rounded-[3rem] shadow-soft border border-black/5">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                 <ShieldCheck size={24} className="text-wellness-dark" /> Tier Management
              </h3>
              <div className="space-y-4">
                 {[
                   { tier: "Silver", color: "bg-gray-100 text-gray-600", count: "450 Members" },
                   { tier: "Gold", color: "bg-orange-50 text-orange-600", count: "128 Members", active: true },
                   { tier: "Elite", color: "bg-[#ff8da1] text-white", count: "42 Members" }
                 ].map(m => (
                   <div key={m.tier} className={`p-6 rounded-3xl border transition-all cursor-pointer ${m.active ? 'border-purple-200 shadow-md translate-x-1' : 'border-transparent bg-gray-50/50 hover:bg-gray-50'}`}>
                      <div className="flex justify-between items-center mb-1">
                         <p className="font-black text-sm">{m.tier} Level</p>
                         <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${m.color}`}>{m.tier}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold">{m.count}</p>
                   </div>
                 ))}
              </div>
           </div>

           {/* Wallet System */}
           <div className="bg-gradient-to-br from-wellness-dark to-black p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                 <Wallet size={120} />
              </div>
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                       <Wallet size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Digital Wallet</h3>
                 </div>
                 <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-2">Total Managed Funds</p>
                 <h2 className="text-4xl font-black mb-8 font-outfit">₹2,15,400</h2>
                 <div className="space-y-4 mb-10">
                    <div className="flex justify-between text-xs font-bold text-gray-400">
                       <span>Live Auto-refills</span>
                       <span className="text-green-400">Active</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-green-400 w-[65%] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                    </div>
                 </div>
                 <button className="w-full py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Recharge Terminal
                 </button>
              </div>
           </div>

           {/* Quick Actions */}
           <div className="p-4 bg-purple-50 rounded-3xl border border-purple-100 flex items-start gap-3">
              <Zap size={18} className="text-purple-600 shrink-0 mt-0.5" />
              <p className="text-[10px] text-purple-900 leading-relaxed font-bold italic">
                 "Elite Members auto-earn 2.5% cashback on all wallet recharges above ₹50,000."
              </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Billing;
