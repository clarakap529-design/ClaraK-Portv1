import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  aiInsight: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const imageMap: { [key: string]: string } = {
  'ecommerce fashion': 'https://images.unsplash.com/photo-1629019597573-9c149be022b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9ufGVufDF8fHx8MTc2NDgzMzUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
  'writing workspace': 'https://images.unsplash.com/photo-1610547169157-bc65b25ca263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NDg5MTY5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  'fitness health': 'https://images.unsplash.com/photo-1634144646738-809a0f8897c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRofGVufDF8fHx8MTc2NDg2Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'finance data': 'https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwZGF0YXxlbnwxfHx8fDE3NjQ4OTE3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'smart home': 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWV8ZW58MXx8fHwxNzY0ODg1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'online learning': 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjQ4OTE3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [showAIInsight, setShowAIInsight] = useState(false);

  const imageUrl = imageMap[project.image] || '';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      <div className="relative h-64 bg-slate-100 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <button
          onClick={() => setShowAIInsight(!showAIInsight)}
          className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
        >
          <Sparkles className={`w-5 h-5 transition-colors ${showAIInsight ? 'text-blue-600' : 'text-slate-600'}`} />
        </button>
      </div>

      <div className="p-6">
        <div className="text-sm text-blue-600 mb-2">{project.category}</div>
        <h3 className="mb-2">{project.title}</h3>
        <p className="text-slate-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showAIInsight && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-blue-100"
          >
            <div className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-blue-900 mb-1">AI Insight</div>
                  <p className="text-sm text-slate-700">{project.aiInsight}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}