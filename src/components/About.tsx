import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Brain, Heart, Zap } from 'lucide-react';

const aiQuestions = [
  {
    question: "What's your design philosophy?",
    answer: "I believe great design is invisible. It should solve problems so elegantly that users don't even notice it's there. My approach combines user empathy with data-driven decision making."
  },
  {
    question: "How do you approach AI in design?",
    answer: "AI should enhance human creativity, not replace it. I use AI as a collaborative tool - for research, rapid prototyping, and exploring possibilities I might not have considered."
  },
  {
    question: "What makes you different?",
    answer: "I bridge the gap between design and technology. I can talk to engineers about APIs and to users about their pain points. Plus, I built this AI-enhanced portfolio, which is pretty cool!"
  },
  {
    question: "What are you passionate about?",
    answer: "Accessible design that works for everyone. I'm passionate about creating digital experiences that empower people, regardless of their abilities or background."
  }
];

export function About() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const handleQuestionClick = (index: number) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
      return;
    }

    setIsThinking(true);
    setSelectedQuestion(null);
    
    setTimeout(() => {
      setIsThinking(false);
      setSelectedQuestion(index);
    }, 800);
  };

  return (
    <section id="about" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-slate-600">Get to know me</span>
            </div>
            
            <h2 className="mb-6">About Me</h2>
            
            <p className="text-slate-600 mb-6">
              I'm a product designer with 6+ years of experience creating digital experiences 
              that people love. I specialize in UX/UI design, design systems, and recently, 
              designing for AI-powered products.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">User-Centered</h4>
                  <p className="text-sm text-slate-600">Every decision starts with understanding user needs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">Innovation-Driven</h4>
                  <p className="text-sm text-slate-600">Constantly exploring new technologies and methodologies</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">AI-Enhanced</h4>
                  <p className="text-sm text-slate-600">Leveraging AI to create smarter, more adaptive experiences</p>
                </div>
              </div>
            </div>
          </div>

          {/* Removed Ask Me Anything section */}
        </div>
      </div>
    </section>
  );
}