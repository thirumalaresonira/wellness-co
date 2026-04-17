import React, { useState, useRef } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Search, 
  MoreVertical, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ArrowUpRight,
  Send,
  User,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const activityLog = [
  { id: 1, client: "Aria Thorne", type: "Voice", duration: "2m 14s", status: "Completed", summary: "Post-alignment check-up. Client reported slight soreness. AI recommended Epsom salt bath.", time: "10:30 AM" },
  { id: 2, client: "Leo Vance", type: "Text", status: "Sent", summary: "Reminder for upcoming Muscle Recovery session on Friday.", time: "09:45 AM" },
  { id: 3, client: "Marcus Wright", type: "Voice", duration: "45s", status: "No Answer", summary: "Automated attempt to reschedule missed detox wrap. Will retry in 2h.", time: "08:15 AM" },
  { id: 4, client: "Elena Gilbert", type: "Voice", duration: "3m 02s", status: "Completed", summary: "Retention call. Offered 10% discount for next deep tissue session. Client booked.", time: "Yesterday" },
];

const AIFollowUps = () => {
  const [activeCall, setActiveCall] = useState(activityLog[0]);
  const [view, setView] = useState('list'); // 'list' or 'live'
  const [isSyncing, setIsSyncing] = useState(false);
  const recognitionRef = useRef(null);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello Aria, I hope you're feeling better today. How is your recovery progressing?" }
  ]);
  const [currentTranscription, setCurrentTranscription] = useState("");

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Attempt to find a natural sounding female voice
    const voices = synth.getVoices();
    const femaleVoice = voices.find(v => 
       (v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('Google US English')) && 
       v.lang.startsWith('en')
    ) || voices.find(v => v.lang.startsWith('en'));
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    utterance.pitch = 1.2; // Slightly higher for a feminine, friendly "wellness" tone
    utterance.rate = 0.95; 
    
    synth.speak(utterance);
    
    return new Promise(resolve => {
      utterance.onend = resolve;
    });
  };

  const stopVoiceSession = () => {
    window.speechSynthesis.cancel();
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsSyncing(false);
    setCurrentTranscription("");
  };

  const startVoiceSession = async () => {
    setIsSyncing(true);
    
    // AI asks the first question
    await speak(messages[messages.length - 1].text);
    
    // Start listening for client reply
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognitionRef.current = recognition;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
         const transcript = Array.from(event.results)
           .map(result => result[0])
           .map(result => result.transcript)
           .join('');
         
         setCurrentTranscription(transcript);
         
         if (event.results[0].isFinal) {
            setMessages(prev => [...prev, { role: 'client', text: transcript }]);
            handleAIChain(transcript);
         }
      };

      recognition.onerror = () => setIsSyncing(false);
      recognition.onend = () => {};
      
      recognition.start();
    } else {
      alert("Voice recognition not supported in this browser.");
      setIsSyncing(false);
    }
  };

  const handleAIChain = async (clientText) => {
    // Simulate AI thinking and replying
    setTimeout(async () => {
      const aiReply = "Thank you for sharing that. I've noted the stiffness. Would you like me to book a quick recovery check-up for tomorrow?";
      setMessages(prev => [...prev, { role: 'assistant', text: aiReply }]);
      setCurrentTranscription("");
      await speak(aiReply);
    }, 1500);
  };

  if (view === 'live') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 pb-20 max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Live AI Follow-up Pulse</h1>
            <p className="text-gray-400 font-medium text-lg">Real-time autonomous voice stream and sentiment monitoring.</p>
          </div>
          <button 
            onClick={() => setView('list')}
            className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            Return to Log
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
             {/* Active Voice Stream Visualization */}
             <div className="card p-10 bg-pink-50/50 backdrop-blur-xl border border-pink-100/50 text-black relative overflow-hidden group min-h-[400px]">
                <div className="absolute top-0 right-0 p-10 opacity-30">
                   <Zap size={200} className="text-pink-300 blur-3xl animate-pulse" />
                </div>
                
                <div className="relative z-10">
                   <div className="flex justify-between items-center mb-12">
                      <div className="flex items-center gap-4">
                         <div className={`w-4 h-4 rounded-full ${isSyncing ? 'bg-pink-500 animate-ping' : 'bg-pink-200'}`}></div>
                         <h3 className="text-xs font-black uppercase tracking-[0.2em] text-pink-400">Live Voice Node: 0x4f2e</h3>
                      </div>
                      <span className={`text-[10px] font-black ${isSyncing ? 'text-pink-600 bg-pink-500/10 border-pink-500/20' : 'text-gray-400 bg-gray-500/5 border-gray-500/10'} px-4 py-1 rounded-full border uppercase tracking-widest`}>
                        {isSyncing ? 'Active Stream' : 'Ready'}
                      </span>
                   </div>

                   <div className="flex flex-col items-center justify-center space-y-12">
                      <div className="flex items-end gap-2 h-32">
                         {[...Array(24)].map((_, i) => (
                           <motion.div 
                            key={i}
                            animate={isSyncing ? { height: [20, Math.random() * 100 + 20, 20] } : { height: 5 }} 
                            transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
                            className="w-2 bg-gradient-to-t from-pink-400 to-pink-100 rounded-full"
                           />
                         ))}
                      </div>
                      <div className="text-center">
                         {!isSyncing ? (
                            <button 
                              onClick={startVoiceSession}
                              className="btn-premium px-10 py-5 text-lg shadow-2xl active:scale-95 translate-y-4"
                            >
                               <Sparkles className="inline mr-2" size={24}/> Initiate Natural Voice Session
                            </button>
                         ) : (
                            <div className="space-y-6">
                               <div className="flex flex-col items-center gap-4">
                                  <p className="text-xl font-bold">Analyzing Sentiment: <span className="text-pink-500">Positive (84%)</span></p>
                                  <p className="text-xs text-pink-400 font-medium tracking-widest uppercase flex items-center justify-center gap-2">
                                     <Phone size={14} className="animate-pulse" /> AI is speaking...
                                  </p>
                               </div>
                               <button 
                                 onClick={stopVoiceSession}
                                 className="px-8 py-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all shadow-lg active:scale-95"
                               >
                                  Stop Conversation
                               </button>
                            </div>
                         )}
                      </div>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Node Latency", val: isSyncing ? "14ms" : "0ms", status: isSyncing ? "Optimal" : "Idle" },
                  { label: "AI Confidence", val: isSyncing ? "99.2%" : "---", status: isSyncing ? "High" : "---" },
                  { label: "Speech Clarity", val: isSyncing ? "HD Voice" : "Ready", status: "Secure" }
                ].map((s, i) => (
                  <div key={i} className="card p-6 bg-white shadow-soft">
                     <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2">{s.label}</p>
                     <p className="text-xl font-black">{s.val}</p>
                     <span className={`text-[8px] font-bold ${s.status === 'Optimal' ? 'text-green-500' : 'text-gray-400'} block mt-2 uppercase tracking-tighter`}>{s.status}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <div className="bg-white p-8 rounded-[3rem] shadow-soft border border-black/5 flex-1 min-h-[500px] flex flex-col">
                <h3 className="font-bold text-lg mb-8 flex items-center justify-between">
                   <div className="flex items-center gap-3"><Send size={20}/> Real-time Feed</div>
                   {isSyncing && <span className="text-[8px] font-black text-red-500 animate-pulse uppercase tracking-widest">Live Transcribing</span>}
                </h3>
                <div className="flex-1 space-y-6 overflow-y-auto pr-2 max-h-[450px]">
                   {messages.map((m, i) => (
                      <div key={i} className={`space-y-1 ${m.role === 'client' ? 'text-right' : ''}`}>
                         <p className={`text-[8px] font-black tracking-[0.2em] uppercase ${m.role === 'client' ? 'text-gray-400' : 'text-purple-400'}`}>
                            {m.role === 'client' ? 'Client' : 'Wellness AI'}
                         </p>
                         <p className={`text-sm ${m.role === 'client' ? 'font-bold' : 'text-gray-500 font-medium italic'} leading-relaxed`}>
                            "{m.text}"
                         </p>
                      </div>
                   ))}
                   
                   {currentTranscription && (
                      <div className="space-y-1 text-right">
                         <p className="text-[8px] font-black text-blue-400 tracking-[0.2em] uppercase animate-pulse">Capturing Voice...</p>
                         <p className="text-sm font-bold leading-relaxed text-blue-500 italic">
                            "{currentTranscription}..."
                         </p>
                      </div>
                   )}
                </div>
                <button className="w-full mt-auto py-4 bg-red-50 text-red-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all">
                   Manual Intercept [SOS]
                </button>
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
          <h1 className="text-3xl font-bold mb-1">AI Voice & Messaging</h1>
          <p className="text-gray-400 text-sm">Autonomous reach-out and patient retention system.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setView('live')}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#ff8da1] text-white rounded-xl text-sm font-bold shadow-lg hover:bg-[#ff7a91] transition-all active:scale-95"
          >
            <Zap size={18} fill="currentColor" /> Live Dashboard
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Analytics Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-[2rem] shadow-soft border border-black/5">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-50 rounded-2xl">
                  <Phone className="text-purple-600" size={24} />
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full inline-block">88% Successful</p>
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">Calls Completed (Today)</h3>
              <p className="text-3xl font-bold">142</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] shadow-soft border border-black/5">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <MessageSquare className="text-blue-600" size={24} />
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full inline-block">+24% MoM</p>
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">Messages Sent</h3>
              <p className="text-3xl font-bold">4,821</p>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-[2.5rem] shadow-soft border border-black/5 overflow-hidden">
            <div className="p-6 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
              <h3 className="font-bold text-lg">Autonomous Activity Log</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Filter log..." 
                  className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl text-xs focus:ring-2 focus:ring-purple-100 outline-none"
                />
              </div>
            </div>
            <div className="divide-y divide-gray-50">
              {activityLog.map((log) => (
                <div 
                  key={log.id} 
                  className={`p-6 cursor-pointer hover:bg-gray-50 transition-colors flex items-start gap-4 ${activeCall.id === log.id ? 'bg-purple-50/50' : ''}`}
                  onClick={() => setActiveCall(log)}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    log.type === 'Voice' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {log.type === 'Voice' ? <Phone size={18} /> : <MessageSquare size={18} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-1">
                      <p className="font-bold text-sm">{log.client}</p>
                      <span className="text-[10px] text-gray-400 font-medium">{log.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-1 mb-2">{log.summary}</p>
                    <div className="flex items-center gap-4">
                      <span className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${
                        log.status === 'Completed' ? 'text-green-500' : log.status === 'Sent' ? 'text-blue-500' : 'text-orange-500'
                      }`}>
                        {log.status === 'Completed' ? <CheckCircle2 size={12} /> : log.status === 'Sent' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                        {log.status}
                      </span>
                      {log.duration && <span className="text-[10px] text-gray-400 font-bold flex items-center gap-1"><Clock size={12}/> {log.duration}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details / Transcript Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-[2.5rem] shadow-soft border border-black/5 p-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center font-bold text-xl text-gray-400">
                {activeCall.client.split(' ').map(n=>n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-lg">{activeCall.client}</h3>
                <p className="text-sm text-gray-400">Activity Detail</p>
              </div>
            </div>

            <div className="bg-purple-50/50 rounded-3xl p-6 border border-purple-100 mb-8">
              <div className="flex items-center gap-2 mb-3 text-purple-600">
                <Sparkles size={16} />
                <h4 className="font-bold text-sm">AI Summary</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed italic">
                "{activeCall.summary}"
              </p>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 mb-8 pr-2">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Wellness AI (Assistant)</p>
                <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none text-sm text-gray-600">
                  "Hello {activeCall.client.split(' ')[0]}, this is Wellness Co. I'm calling to see how you're feeling after your session."
                </div>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pr-1">Client</p>
                <div className="bg-[#ff8da1] text-white p-4 rounded-2xl rounded-tr-none text-sm text-left inline-block max-w-[90%]">
                  "Oh hi, yeah I'm feeling okay, a little stiff in the lower back though."
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Wellness AI (Assistant)</p>
                <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none text-sm text-gray-600">
                  "That's quite normal after a primary alignment. I'd recommend a warm Epsom salt soak for 20 minutes tonight. Would you like me to note this for Dr. Mills?"
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3">
                <User size={18} className="text-gray-400" />
                <p className="text-xs text-gray-500">Dr. Mills was notified automatically</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-3 bg-gray-100 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all">Take Over Call</button>
                <button className="p-3 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all"><MoreVertical size={18}/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFollowUps;
