import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface AICompanionProps {
  currentSection: string;
}

const contextualMessages = {
  hero: {
    message: "👋 Hey! I'm your AI guide. I'll pop in with insights as you explore. Click me anytime to chat!",
    delay: 2000
  },
  projects: {
    message: "💡 Tip: Click the sparkle icon on any project to hear the story behind it.",
    delay: 3000
  },
  about: {
    message: "🤖 Want to know more? Try the 'Ask Me Anything' section - I can answer questions about the designer's work!",
    delay: 2000
  },
  contact: {
    message: "📬 Ready to connect? I'll help you send a message in a conversational way.",
    delay: 2000
  }
};

export function AICompanion({ currentSection }: AICompanionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasShownForSection, setHasShownForSection] = useState<Set<string>>(new Set(['hero']));
  const [currentMessage, setCurrentMessage] = useState(contextualMessages.hero.message);

  useEffect(() => {
    // Show initial message on hero
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, contextualMessages.hero.delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show contextual messages when entering new sections
    if (!hasShownForSection.has(currentSection) && currentSection !== 'hero') {
      const sectionMessage = contextualMessages[currentSection as keyof typeof contextualMessages];
      if (sectionMessage) {
        const timer = setTimeout(() => {
          setCurrentMessage(sectionMessage.message);
          setIsVisible(true);
          setIsExpanded(false);
          setHasShownForSection(new Set([...hasShownForSection, currentSection]));
        }, sectionMessage.delay);

        return () => clearTimeout(timer);
      }
    }
  }, [currentSection, hasShownForSection]);

  const quickActions = [
    { label: 'View Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'About Me', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Get in Touch', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {isExpanded ? (
            <motion.div
              initial={{ width: 80, height: 80 }}
              animate={{ width: 320, height: 'auto' }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white">AI Assistant</span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="p-4">
                <p className="text-sm text-slate-700 mb-4">{currentMessage}</p>
                
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 mb-2">Quick Actions:</p>
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        action.action();
                        setIsExpanded(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-sm"
                    >
                      <span>{action.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(true)}
              className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center group"
            >
              <Sparkles className="w-7 h-7 text-white" />
              
              {/* Notification badge for new contextual message */}
              {currentSection !== 'hero' && !hasShownForSection.has(currentSection) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
                />
              )}

              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-blue-600 rounded-full"
              />
            </motion.button>
          )}

          {/* Minimized tooltip */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute bottom-0 right-20 bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
            >
              <p className="text-sm text-slate-700">Click for help!</p>
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
