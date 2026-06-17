import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, User, Loader2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi! I'm Ajisha's virtual assistant. 🤖 Ask me anything about her skills, experience, projects, or send her a direct message!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  
  // State machine for email sending flow
  // 'idle' -> 'waiting_message' -> 'waiting_email' -> 'sending' -> 'sent'
  const [flowState, setFlowState] = useState<'idle' | 'waiting_message' | 'waiting_email' | 'sending' | 'sent'>('idle');
  const [pendingMessage, setPendingMessage] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const addMessage = (sender: 'bot' | 'user', text: string) => {
    setMessages(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substr(2, 9),
        sender,
        text,
        timestamp: new Date()
      }
    ]);
  };

  const handleQuickOption = (option: string) => {
    addMessage('user', option);
    
    // Simulate thinking delay
    setTimeout(() => {
      if (option.includes("About")) {
        addMessage('bot', "Ajisha TP is a 4th-year Computer Science and Engineering student at GEC Palakkad. She is passionate about software engineering, web development (React/TypeScript/Node.js), and AI/ML.");
      } else if (option.includes("Experience")) {
        addMessage('bot', "She has completed internships at GTech µLearn (Project Coordinator), C-DAC Noida (Cybersecurity), Southern Railway (Digital Systems), and Pacelab (IoT). She has practical experience in development, automation, and security!");
      } else if (option.includes("Projects")) {
        addMessage('bot', "Her key creations include:\n• Blood Bank Tracking System\n• StyleSense (AI Recommendation Tool)\n• Ransomware Simulator\n• 3D Solar Explorer (NASA Space Hackathon 2024)\n• XchangeIt (Campus Marketplace)");
      } else if (option.includes("Message") || option.includes("Contact")) {
        addMessage('bot', "Sure! Please type the message you would like to send to Ajisha:");
        setFlowState('waiting_message');
      }
    }, 600);
  };

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    addMessage('user', userText);
    setInputValue('');

    // Handle interactive SMTP send flow
    if (flowState === 'waiting_message') {
      setPendingMessage(userText);
      setTimeout(() => {
        addMessage('bot', "Got it. Now please enter your email address so Ajisha can get back to you:");
        setFlowState('waiting_email');
      }, 600);
      return;
    }

    if (flowState === 'waiting_email') {
      // Basic email validation
      if (!/\S+@\S+\.\S+/.test(userText.trim())) {
        setTimeout(() => {
          addMessage('bot', "That email format seems invalid. Please enter a valid email address (e.g. name@example.com):");
        }, 600);
        return;
      }

      const email = userText.trim();
      setFlowState('sending');

      // Bot response indicating sending process
      setTimeout(() => {
        addMessage('bot', "Sending your message to Ajisha...");
        triggerSmtpSend(pendingMessage, email);
      }, 400);
      return;
    }

    // Default conversational keyword matcher
    const text = userText.toLowerCase();
    setTimeout(() => {
      if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
        addMessage('bot', "Hello! How can I help you today? You can ask about Ajisha's skills, experience, projects, or drop her a line.");
      } else if (text.includes("experience") || text.includes("job") || text.includes("intern")) {
        addMessage('bot', "Ajisha has interned at GTech µLearn, C-DAC, Southern Railway, and Pacelab. She has experience with student coordination, cybersecurity simulators, digital workflow automation, and IoT!");
      } else if (text.includes("project") || text.includes("portfolio")) {
        addMessage('bot', "She has built projects like the Blood Bank Tracking System, StyleSense, a Ransomware Simulator, and the 3D Solar Explorer. You can find them in the Projects section above.");
      } else if (text.includes("skills") || text.includes("tech") || text.includes("react")) {
        addMessage('bot', "Ajisha works with React, TypeScript, Node.js, Tailwind CSS, Python, OpenCV, and Firebase. She enjoys full stack web development and AI applications.");
      } else if (text.includes("contact") || text.includes("mail") || text.includes("message") || text.includes("email")) {
        addMessage('bot', "I can help you send an email directly to her. What would you like to say in your message?");
        setFlowState('waiting_message');
      } else {
        addMessage('bot', "I'm not sure about that. But feel free to choose one of the quick options below, or choose 'Send a Message' to contact Ajisha directly!");
      }
    }, 600);
  };

  const triggerSmtpSend = async (message: string, email: string) => {
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      // Simulate SMTP sending
      setTimeout(() => {
        addMessage('bot', `📬 [Simulated SMTP] Message successfully sent from ${email}! Ajisha will respond soon.`);
        setFlowState('sent');
        // Reset flow state back to idle after short time
        setTimeout(() => setFlowState('idle'), 2000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: "Portfolio Chatbot Visitor",
          email: email,
          message: message,
          subject: `New Message from Portfolio Chatbot (${email})`
        })
      });

      const result = await response.json();
      if (response.status === 200 && result.success) {
        addMessage('bot', `📬 Message successfully delivered! Ajisha has been notified and will contact you at ${email}.`);
        setFlowState('sent');
      } else {
        console.error("Chatbot SMTP Send Failure:", result);
        addMessage('bot', "⚠️ Sorry, there was an issue sending your message. Please try using the Contact form at the bottom of the page.");
        setFlowState('idle');
      }
    } catch (error) {
      console.error("Chatbot SMTP Network Error:", error);
      addMessage('bot', "⚠️ A network error occurred while sending. Please check your connection or use the Contact form.");
      setFlowState('idle');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-[330px] sm:w-[380px] h-[480px] sm:h-[520px] rounded-2xl glass-panel shadow-2xl flex flex-col overflow-hidden mb-4 border border-card-border/80 dark:border-white/[0.08]"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-950/80 dark:to-purple-950/80 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-white/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wide">Ajisha's Assistant</h4>
                  <span className="text-[10px] text-blue-200 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online &bull; SMTP Connected
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-all text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/60 dark:bg-slate-950/40">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 max-w-[85%] ${
                      isBot ? 'self-start mr-auto' : 'self-end ml-auto flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs border ${
                        isBot
                          ? 'bg-blue-50 border-blue-150 text-blue-600 dark:bg-blue-950/60 dark:border-blue-900/60 dark:text-blue-400'
                          : 'bg-stone-100 border-card-border text-stone-700 dark:bg-white/[0.04] dark:border-white/[0.06] dark:text-white'
                      }`}
                    >
                      {isBot ? <Sparkles className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    </div>

                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                        isBot
                          ? 'bg-white text-stone-850 rounded-tl-none border border-card-border dark:bg-slate-900/90 dark:border-white/[0.04] dark:text-slate-200'
                          : 'bg-blue-600 text-white rounded-tr-none dark:bg-blue-700'
                      }`}
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}
              
              {flowState === 'sending' && (
                <div className="flex gap-2.5 max-w-[85%] self-start mr-auto items-center">
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-150 dark:bg-blue-950/60 dark:border-blue-900/60 flex items-center justify-center">
                    <Loader2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-spin" />
                  </div>
                  <span className="text-xs text-stone-400 font-semibold italic">Processing message...</span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions (Only show when idle and not in sending flow) */}
            {flowState === 'idle' && (
              <div className="p-3 bg-stone-100/50 dark:bg-slate-950/60 border-t border-card-border dark:border-white/[0.05] flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => handleQuickOption("👩‍💻 About Ajisha")}
                  className="px-2.5 py-1.5 rounded-lg border border-card-border dark:border-white/[0.05] bg-white dark:bg-slate-900 text-[11px] font-semibold text-stone-700 dark:text-slate-300 hover:border-blue-400/50 dark:hover:border-blue-400/50 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all cursor-pointer"
                >
                  👩‍💻 About Ajisha
                </button>
                <button
                  onClick={() => handleQuickOption("💼 Experience")}
                  className="px-2.5 py-1.5 rounded-lg border border-card-border dark:border-white/[0.05] bg-white dark:bg-slate-900 text-[11px] font-semibold text-stone-700 dark:text-slate-300 hover:border-blue-400/50 dark:hover:border-blue-400/50 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all cursor-pointer"
                >
                  💼 Experience
                </button>
                <button
                  onClick={() => handleQuickOption("🚀 Projects")}
                  className="px-2.5 py-1.5 rounded-lg border border-card-border dark:border-white/[0.05] bg-white dark:bg-slate-900 text-[11px] font-semibold text-stone-700 dark:text-slate-300 hover:border-blue-400/50 dark:hover:border-blue-400/50 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all cursor-pointer"
                >
                  🚀 Projects
                </button>
                <button
                  onClick={() => handleQuickOption("✉️ Send a Message")}
                  className="px-2.5 py-1.5 rounded-lg border border-card-border dark:border-white/[0.05] bg-white dark:bg-slate-900 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all cursor-pointer"
                >
                  ✉️ Send a Message
                </button>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-white dark:bg-slate-900 border-t border-card-border dark:border-white/[0.05] flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  flowState === 'waiting_message'
                    ? "Type your message..."
                    : flowState === 'waiting_email'
                    ? "Enter your email address..."
                    : "Type a message..."
                }
                className="flex-1 bg-stone-50 dark:bg-slate-950 px-3.5 py-2.5 rounded-xl border border-card-border dark:border-white/[0.06] text-xs sm:text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-600 text-stone-850 dark:text-slate-100 placeholder-stone-400 dark:placeholder-slate-600"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || flowState === 'sending'}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all disabled:opacity-40 cursor-pointer flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white shadow-lg shadow-blue-500/20 cursor-pointer relative overflow-hidden flex items-center justify-center focus:outline-none"
        aria-label="Toggle chatbot"
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 animate-pulse-glow" />
        )}
      </motion.button>
    </div>
  );
};
