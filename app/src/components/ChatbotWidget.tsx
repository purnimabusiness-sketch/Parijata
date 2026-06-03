import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  isTag?: boolean;
}

const botResponses: Record<string, string> = {
  default:
    "Thank you for reaching out to The Parijata Dental Studio! You can call us at +91 89992 69685 or WhatsApp +91 86552 28422 to book an appointment. Our clinic is open Monday to Saturday, 10 AM to 7 PM. Is there anything specific about our dental services you'd like to know?",
  appointment:
    "We'd be happy to schedule your appointment! Please call us at +91 89992 69685 or fill out the appointment form on our website. Walk-ins are also welcome, though appointments are recommended for specialist consultations with Dr. Aishwarya.",
  timing:
    "Our clinic hours are Monday to Saturday, 10:00 AM to 7:00 PM. We are closed on Sundays. Emergency cases are attended to during working hours.",
  location:
    "We're located at Shop No. 6, Sumit Plumeria, Daag Daag, Khadpabandh, Ponda, Goa 403401 \u2014 right behind the Honda Showroom in Jayceenagar.",
  implant:
    "Dr. Aishwarya specializes in dental implants using advanced technology. We offer single-tooth to full-arch implant restorations. The process typically involves a consultation, planning with digital imaging, placement, and restoration. Please book a consultation to discuss your specific case.",
  rootcanal:
    "We provide pain-free root canal treatment using modern rotary instruments and digital imaging. Dr. Raghunandan ensures a comfortable experience with his gentle approach. Most treatments are completed in 1-2 sessions.",
  crown:
    "Dr. Aishwarya is an MDS Prosthodontist specializing in crowns and bridges. We offer ceramic, zirconia, and metal crowns matched precisely to your natural teeth. A consultation will help determine the best option for you.",
  cost:
    "Treatment costs vary depending on the procedure and complexity. We'd be happy to provide an estimate after a consultation. Please call +91 89992 69685 or visit our clinic for a personalized treatment plan and quote.",
  whitening:
    "We offer professional teeth whitening services that can brighten your smile by several shades. The procedure is safe, effective, and performed under expert supervision. Results are visible immediately after the session!",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.match(/(appointment|book|schedule|visit)/))
    return botResponses.appointment;
  if (lower.match(/(hour|timing|open|close|time)/)) return botResponses.timing;
  if (lower.match(/(location|address|where|place|map|ponda|goa)/))
    return botResponses.location;
  if (lower.match(/(implant|tooth replacement)/)) return botResponses.implant;
  if (lower.match(/(root canal|rct|rootcanal)/)) return botResponses.rootcanal;
  if (lower.match(/(crown|bridge|cap)/)) return botResponses.crown;
  if (lower.match(/(cost|price|fee|charge|expensive|cheap)/))
    return botResponses.cost;
  if (lower.match(/(whitening|bleach|bright|yellow|stain)/))
    return botResponses.whitening;
  return botResponses.default;
}

const quickReplyTags = ['Book Appointment', 'Our Location', 'Dental Implants'];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Namaste! Welcome to The Parijata Dental Studio. How can we help you with your dental care today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTags, setShowTags] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now(), text: text.trim(), isUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setShowTags(false);

    setTimeout(() => {
      const botText = getBotResponse(userMsg.text);
      const botMsg: Message = { id: Date.now() + 1, text: botText, isUser: false };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      setShowTags(true);
    }, 800 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {/* FAB Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-terracotta text-white shadow-lg hover:bg-terracotta-dark transition-colors flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-mist"
          >
            {/* Header */}
            <div className="bg-deep-earth px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-terracotta/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-parijata-gold" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Parijata Assistant</p>
                  <p className="text-white/50 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.isUser ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.isUser ? 'bg-sage/20' : 'bg-terracotta/10'
                    }`}
                  >
                    {msg.isUser ? (
                      <User className="w-3.5 h-3.5 text-sage" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-terracotta" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.isUser
                        ? 'bg-deep-earth text-white rounded-br-md'
                        : 'bg-cream text-deep-earth rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-terracotta" />
                  </div>
                  <div className="bg-cream px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-sage/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-sage/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-sage/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Reply Tags - always show after bot response */}
              {!isTyping && showTags && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {quickReplyTags.map((text) => (
                    <button
                      key={text}
                      onClick={() => handleSend(text)}
                      className="px-3 py-1.5 text-xs rounded-full border border-mist text-sage hover:border-sage hover:text-deep-earth hover:bg-sage/5 transition-all"
                    >
                      {text}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-mist flex gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 bg-cream rounded-full text-sm text-deep-earth placeholder:text-sage/50 outline-none focus:ring-2 focus:ring-parijata-gold/30"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center hover:bg-terracotta-dark transition-colors disabled:opacity-40 disabled:hover:bg-terracotta shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
