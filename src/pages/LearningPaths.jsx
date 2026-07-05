import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Palette, Database, ShieldCheck, TrendingUp,
  Briefcase, ArrowRight, Clock, Star, Users, BookOpen,
  ChevronRight, Play, CheckCircle, BarChart3,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { learningPaths } from '../data/learningPaths';

const iconMap = { Code, Palette, Database, ShieldCheck, TrendingUp, Briefcase, BarChart3 };

export default function LearningPaths() {
  const [paths] = useState(learningPaths);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto"
    >
      <div className="mb-6">
        <h1 className="text-lg font-bold tracking-tight text-neutral-900">Learning Paths</h1>
        <p className="text-sm text-neutral-500 mt-0.5">Structured learning journeys to master new skills</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((path) => {
          const Icon = iconMap[path.icon] || Code;
          const isStarted = path.progress > 0;

          return (
            <Card key={path.id} hover className="flex flex-col p-5">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${path.color} mb-4`}>
                <Icon className="h-6 w-6" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-semibold text-neutral-900">{path.title}</h3>
                <Badge color="primary" variant="solid" className="text-[10px]">{path.level}</Badge>
              </div>

              <p className="text-xs text-neutral-500 leading-relaxed flex-1 mb-4">{path.description}</p>

              {isStarted && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-neutral-500">Progress</span>
                    <span className="font-medium text-primary-600">{path.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-neutral-100">
                    <div className="h-1.5 rounded-full bg-primary-600 transition-all" style={{ width: `${path.progress}%` }} />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {path.lessons} lessons
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {path.duration}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {path.modules.slice(0, 3).map((mod) => (
                  <Badge key={mod} color="neutral" variant="outline" className="text-[10px]">{mod}</Badge>
                ))}
                {path.modules.length > 3 && (
                  <Badge color="neutral" variant="outline" className="text-[10px]">+{path.modules.length - 3} more</Badge>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-medium text-neutral-700">{path.rating}</span>
                  <span className="text-neutral-400">· {path.enrolled} enrolled</span>
                </div>
                <Button size="sm" icon={isStarted ? Play : ArrowRight}>
                  {isStarted ? 'Continue' : 'Start'}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}
