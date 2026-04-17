import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Download, 
  Printer, 
  Send, 
  Calculator,
  User,
  Sparkles,
  Search,
  CheckCircle2,
  CreditCard
} from 'lucide-react';

const CreateInvoice = ({ onBack }) => {
  const [items, setItems] = useState([
    { id: 1, service: "Deep Tissue Alignment", qty: 1, price: 4500 },
  ]);
  const [client, setClient] = useState("");
  const [isSent, setIsSent] = useState(false);

  // Safe calculation logic
  const subtotal = items.reduce((acc, item) => {
    const q = parseFloat(item.qty) || 0;
    const p = parseFloat(item.price) || 0;
    return acc + (q * p);
  }, 0);
  
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const addItem = () => {
    setItems([...items, { id: Date.now(), service: "", qty: 1, price: 0 }]);
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  if (isSent) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
           <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h2 className="text-4xl font-black mb-2 italic">Invoice Dispatched</h2>
        <p className="text-gray-400 mb-8 max-w-sm">The digital invoice has been sent to the patient's verified email and linked UPI terminal.</p>
        <div className="flex gap-4">
           <button onClick={onBack} className="px-8 py-3 bg-[#ff8da1] text-white rounded-2xl font-bold shadow-lg hover:bg-[#ff7a91] transition-all">Return to Billing</button>
           <button className="px-8 py-3 bg-white border border-gray-100 rounded-2xl font-bold flex items-center gap-2 shadow-sm"><Printer size={18}/> Print Copy</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={18} /> Back to Ledger
        </button>
        <div className="flex gap-4">
           <button className="p-3 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all shadow-sm"><Printer size={20} className="text-gray-400"/></button>
           <button className="p-3 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all shadow-sm"><Download size={20} className="text-gray-400"/></button>
           <button 
            onClick={() => setIsSent(true)}
            className="btn-premium flex items-center gap-2" 
            style={{ padding: '0.7rem 1.5rem' }}
           >
              <Send size={18} /> Dispatch Invoice
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Invoice Builder */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white rounded-[3rem] p-10 shadow-soft border border-black/5">
              <div className="flex justify-between mb-12">
                 <div>
                    <div className="flex items-center gap-2 mb-4">
                       <Sparkles size={24} className="text-purple-600" />
                       <span className="text-2xl font-black tracking-tighter">Wellness Co</span>
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                       Branch Primary Node<br />
                       GSTIN: 29AAAAA0000A1Z5<br />
                       Mumbai, Maharashtra
                    </p>
                 </div>
                 <div className="text-right">
                    <h2 className="text-4xl font-black mb-2 italic">INVOICE</h2>
                    <p className="text-xs text-gray-400 font-bold">Date: {new Date().toLocaleDateString()}</p>
                    <p className="text-xs text-gray-400 font-bold">Ref: INV-{Math.floor(Math.random()*9000)+1000}</p>
                 </div>
              </div>

              {/* Patient Select */}
              <div className="mb-10 p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                       <User size={20} className="text-gray-400" />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Bill To</p>
                       <input 
                        type="text" 
                        placeholder="Search Client Name..." 
                        className="bg-transparent border-none outline-none font-bold text-lg p-0 focus:ring-0"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                       />
                    </div>
                 </div>
                 <Search size={20} className="text-gray-300" />
              </div>

              {/* Items List */}
              <div className="space-y-4 mb-10">
                 <div className="grid grid-cols-12 gap-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50 pb-4">
                    <div className="col-span-6">Clinical Service</div>
                    <div className="col-span-2 text-center">Qty</div>
                    <div className="col-span-3 text-right">Unit Price (₹)</div>
                    <div className="col-span-1"></div>
                 </div>

                 {items.map(item => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 px-4 items-center group">
                       <div className="col-span-6">
                          <input 
                            type="text" 
                            placeholder="Service Name" 
                            className="w-full text-sm font-bold bg-transparent border-none focus:ring-1 focus:ring-purple-100 rounded-lg p-1"
                            value={item.service}
                            onChange={(e) => updateItem(item.id, 'service', e.target.value)}
                          />
                       </div>
                       <div className="col-span-2">
                          <input 
                            type="number" 
                            className="w-full text-center text-sm font-bold bg-gray-50 border-none rounded-lg p-1"
                            value={item.qty}
                            onChange={(e) => updateItem(item.id, 'qty', e.target.value)}
                          />
                       </div>
                       <div className="col-span-3">
                          <input 
                            type="number" 
                            className="w-full text-right text-sm font-black bg-transparent border-none focus:ring-1 focus:ring-purple-100 rounded-lg p-1"
                            value={item.price}
                            onChange={(e) => updateItem(item.id, 'price', e.target.value)}
                          />
                       </div>
                       <div className="col-span-1 text-right">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="p-1 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition-all"
                          >
                             <Trash2 size={16} />
                          </button>
                       </div>
                    </div>
                 ))}

                 <button 
                  onClick={addItem}
                  className="w-full py-3 border border-dashed border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 hover:bg-gray-50 transition-all mt-4"
                 >
                    <Plus size={14}/> Add Service Line
                 </button>
              </div>

              {/* Total Calculation */}
              <div className="border-t border-gray-50 pt-8 flex justify-end">
                 <div className="w-64 space-y-3">
                    <div className="flex justify-between text-sm">
                       <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Subtotal</span>
                       <span className="font-bold">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">GST (18%)</span>
                       <span className="font-bold">₹{tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-wellness-dark text-white p-4 rounded-2xl shadow-xl mt-4">
                       <span className="font-bold text-xs uppercase tracking-widest opacity-60">Total Payable</span>
                       <span className="text-xl font-black">₹{total.toLocaleString()}</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-8">
           <div className="bg-white p-8 rounded-[3rem] shadow-soft border border-black/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><CreditCard size={20}/> Payment Link</h3>
              <p className="text-xs text-gray-400 mb-8 leading-relaxed">Select gateway for collection.</p>
              
              <div className="space-y-4">
                 {['UPI Terminal', 'Direct Bank Transfer', 'Digital Wallet'].map(m => (
                    <div key={m} className="p-4 rounded-2xl border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-purple-50 transition-all group">
                       <span className="text-xs font-bold text-gray-600">{m}</span>
                       <div className="w-4 h-4 rounded-full border-2 border-gray-200"></div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="ai-hint p-8 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-8 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <Calculator size={16} className="text-purple-600" />
                 </div>
                 <h3 className="font-bold text-lg">AI Smart Billing</h3>
              </div>
              <p className="text-xs text-wellness-gray italic leading-relaxed">
                 "Loyalty discount available for Gold members."
              </p>
              <button className="mt-6 w-full py-3 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:shadow-md transition-all">Apply AI Discount</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
