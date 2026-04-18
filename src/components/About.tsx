import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Zap } from 'lucide-react';

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
    <footer id="about" className="py-20 bg-gray-100">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,220px)_1fr] lg:grid-cols-[minmax(0,260px)_1fr] gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16 items-start">
          <h2 className="mb-0 md:pt-1">About Me</h2>
          <div>
            <p className="text-slate-600 mb-3">
              Hi, thanks for visiting my site. I have 12+ years crafting enterprise solutions and most
              recently designing AI-driven products at scale. I specialize in Reporting & Analytics and Data
              Visualization, and I'm endlessly curious about what it means to design for the agentic AI era.
            </p>
            <p className="text-slate-600 mb-0">
              I'm an AI enthusiast who builds as much as I design — regularly using Figma Make and Loveable
              as part of my design workflow. Lately I've been expanding into Cursor, using it to build a
              chart-generating Figma plugin and this portfolio site.
            </p>

            <div className="space-y-4 mt-10">
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
        </div>
      </div>
    </footer>
  );
}