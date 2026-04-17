import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock, 
  User, 
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const schedule = [
  { id: 1, time: "09:00 AM", client: "John Smith", service: "Aromatherapy", status: "Confirmed", duration: "60 min" },
  { id: 2, time: "10:30 AM", client: "Elena Gilbert", service: "Deep Tissue", status: "Pending", duration: "90 min" },
  { id: 3, time: "12:00 PM", client: "Marcus Wright", service: "Detox Wrap", status: "Confirmed", duration: "45 min" },
  { id: 4, time: "02:30 PM", client: "Sarah Connor", service: "Reiki", status: "Cancelled", duration: "60 min" },
  { id: 5, time: "04:00 PM", client: "Aria Thorne", service: "Spine Alignment", status: "Confirmed", duration: "30 min" },
];

const Appointments = () => {
  const [selectedDay, setSelectedDay] = useState(15);
  const [view, setView] = useState('list'); // 'list' or 'book'

  if (view === 'book') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Book Clinical Session</h1>
            <p className="text-gray-400 font-medium text-lg">Synchronize patient flow with real-time branch capacity.</p>
          </div>
          <button 
            onClick={() => setView('list')}
            className="p-4 hover:bg-gray-50 rounded-2xl border border-gray-100 transition-all shadow-sm flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500"
          >
            Cancel Booking
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="card p-10 bg-white shadow-premium relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-5">
                  <User size={80} />
               </div>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 pb-4 border-b border-gray-50">Patient Selection</h3>
               
               <div className="space-y-6">
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Search Existing Patient</label>
                    <div className="relative">
                       <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                       <input type="text" placeholder="Start typing name..." className="w-full bg-gray-50 border border-gray-100 pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-medium text-sm" />
                    </div>
                 </div>

                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Treatment Group</label>
                    <select className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-medium text-sm appearance-none">
                       <option>Spine Alignment (30 min)</option>
                       <option>Aromatherapy Sensory (60 min)</option>
                       <option>Deep Tissue Recovery (90 min)</option>
                       <option>Metabolic Detox (45 min)</option>
                    </select>
                 </div>
               </div>
            </div>

            <div className="bg-wellness-dark text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
               <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">Membership Optimization</h4>
               <p className="text-lg font-medium leading-relaxed italic">
                  "Booking this session on Tuesday at 10:30 AM aligns with the client's historical recovery peak."
               </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card p-10 bg-white shadow-premium">
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 pb-4 border-b border-gray-50">Logistics & Timing</h3>
               
               <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Proposed Date</label>
                        <input type="date" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-bold text-sm" />
                     </div>
                     <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Proposed Time</label>
                        <input type="time" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-bold text-sm" />
                     </div>
                  </div>

                  <div>
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Special Requests</label>
                     <textarea rows="4" placeholder="Extra towels, specific clinician fragrance preference..." className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-purple-100 transition-all font-medium text-sm"></textarea>
                  </div>

                  <button 
                    onClick={() => setView('list')}
                    className="btn-premium w-full py-5 text-lg shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                     <CalendarIcon size={22} /> Confirm Reservation
                  </button>
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
          <h1 className="text-3xl font-bold mb-1">Schedule & Booking</h1>
          <p className="text-gray-400 text-sm">Optimize branch resources and manage patient flow.</p>
        </div>
        <button 
          onClick={() => setView('book')}
          className="btn-premium flex items-center gap-2 active:scale-95 transition-all" 
          style={{ padding: '0.6rem 1.2rem' }}
        >
          <Plus size={18} /> Book Session
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Calendar Side */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-[2rem] shadow-soft border border-black/5 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold">April 2026</h3>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-gray-50 rounded-lg"><ChevronLeft size={16}/></button>
                <button className="p-1.5 hover:bg-gray-50 rounded-lg"><ChevronRight size={16}/></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-4">
              {['S','M','T','W','T','F','S'].map(d => (
                <span key={d} className="text-[10px] font-bold text-gray-400 uppercase">{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({length: 30}, (_, i) => i + 1).map(d => (
                <button 
                  key={d}
                  onClick={() => setSelectedDay(d)}
                  className={`aspect-square flex items-center justify-center text-sm font-medium rounded-xl transition-all ${
                    selectedDay === d ? 'bg-[#ff8da1] text-white shadow-lg shadow-pink-100' : 'hover:bg-gray-50'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-wellness-mint/20 rounded-[2rem] p-6 border border-wellness-mint/30">
            <div className="flex items-center gap-2 mb-3 text-wellness-dark">
              <AlertCircle size={18} />
              <h4 className="font-bold text-sm">Optimization Tip</h4>
            </div>
            <p className="text-xs text-wellness-dark/70 leading-relaxed">
              Branch Primary has a 2-hour gap between 12:45 PM and 2:45 PM. AI has suggested pushing 2 pending bookings to this slot.
            </p>
          </div>
        </div>

        {/* Timeline Side */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-[2.5rem] shadow-soft border border-black/5 overflow-hidden">
            <div className="p-6 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h3 className="font-bold text-lg">Daily Agenda</h3>
                <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs font-bold shadow-sm">April {selectedDay}, 2026</span>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Find session..." 
                  className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl text-xs focus:ring-2 focus:ring-purple-100 outline-none"
                />
              </div>
            </div>

            <div className="p-2">
              <div className="space-y-2">
                {schedule.map((slot) => (
                  <motion.div 
                    key={slot.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 rounded-3xl hover:bg-gray-50/80 transition-all flex items-center gap-6 group"
                  >
                    <div className="w-20 text-sm font-bold text-gray-400 shrink-0">
                      {slot.time}
                    </div>
                    <div className="h-12 w-1 bg-gray-100 rounded-full shrink-0 group-hover:bg-purple-200 transition-colors"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-sm group-hover:text-purple-600 transition-colors">{slot.client}</h4>
                          <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                            <Clock size={12} /> {slot.service} • {slot.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                            slot.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 
                            slot.status === 'Pending' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'
                          }`}>
                            {slot.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-white border border-gray-100 rounded-xl hover:shadow-sm"><CheckCircle2 size={16} className="text-green-500" /></button>
                      <button className="p-2 bg-white border border-gray-100 rounded-xl hover:shadow-sm"><XCircle size={16} className="text-red-400" /></button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
