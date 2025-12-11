import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

const conversationFlow = [
  {
    field: 'name',
    aiMessage: "Hi! I'd love to help you get in touch. What's your name?",
    placeholder: 'Your name'
  },
  {
    field: 'email',
    aiMessage: "Nice to meet you, {name}! What's the best email to reach you?",
    placeholder: 'your@email.com'
  },
  {
    field: 'message',
    aiMessage: "Perfect! What would you like to discuss?",
    placeholder: 'Tell me about your project...',
    multiline: true
  }
];

export function Contact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const currentField = conversationFlow[currentStep];
  const aiMessage = currentField?.aiMessage.replace('{name}', formData.name) || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    setFormData({ ...formData, [currentField.field]: inputValue });
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (currentStep < conversationFlow.length - 1) {
        setCurrentStep(currentStep + 1);
        setInputValue('');
      } else {
        setIsSubmitted(true);
      }
    }, 600);
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData({ name: '', email: '', message: '' });
    setInputValue('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl">
          <div className="bg-white rounded-xl p-6 min-h-[400px] flex flex-col">
            <div className="flex-1 space-y-4 mb-6">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {/* Previous messages */}
                    {conversationFlow.slice(0, currentStep).map((step, index) => (
                      <div key={`past-${index}`} className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1 bg-blue-50 rounded-lg p-3">
                            <p className="text-sm text-slate-700">
                              {step.aiMessage.replace('{name}', formData.name)}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-slate-900 text-white rounded-lg px-4 py-2 max-w-[80%]">
                            <p className="text-sm">{formData[step.field as keyof typeof formData]}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Current AI message */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 bg-blue-50 rounded-lg p-3">
                        <p className="text-sm text-slate-700">{aiMessage}</p>
                      </div>
                    </div>

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                        </div>
                        <div className="flex-1 bg-blue-50 rounded-lg p-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="mb-2">Thanks for reaching out!</h3>
                    <p className="text-slate-600 mb-6">
                      I'll get back to you soon, {formData.name}!
                    </p>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!isSubmitted && (
              <form onSubmit={handleSubmit} className="flex gap-2">
                {currentField?.multiline ? (
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={currentField.placeholder}
                    rows={3}
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                ) : (
                  <input
                    type={currentField?.field === 'email' ? 'email' : 'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={currentField?.placeholder}
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}