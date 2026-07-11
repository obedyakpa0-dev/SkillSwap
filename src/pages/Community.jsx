import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare, TrendingUp, Heart,
  MessageCircle, Eye, Clock, Pin, BadgeCheck, Plus,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';

function CodeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  );
}

const categories = [
  { id: 'all', label: 'All Topics', icon: MessageSquare },
  { id: 'frontend', label: 'Frontend', icon: CodeIcon },
  { id: 'backend', label: 'Backend', icon: CodeIcon },
  { id: 'design', label: 'Design', icon: CodeIcon },
  { id: 'career', label: 'Career', icon: TrendingUp },
  { id: 'general', label: 'General', icon: MessageSquare },
];

const discussions = [
  {
    id: 1,
    title: 'Best practices for React state management in 2025?',
    author: 'Sarah Kim',
    avatar: 'SK',
    category: 'frontend',
    content: 'I am starting a new project and wondering what the current consensus is on state management. Should I use Zustand, Redux Toolkit, or just React Context?',
    replies: 24,
    views: 342,
    likes: 18,
    time: '2 hours ago',
    pinned: true,
    solved: true,
  },
  {
    id: 2,
    title: 'Tips for first-time mentors: How to structure a good session',
    author: 'Alex Chen',
    avatar: 'AC',
    category: 'general',
    content: 'After running 30+ sessions, here are my top tips for creating effective peer-to-peer learning experiences...',
    replies: 56,
    views: 890,
    likes: 94,
    time: '5 hours ago',
    pinned: true,
    solved: false,
    isMe: true,
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox: When to use which?',
    author: 'David Wilson',
    avatar: 'DW',
    category: 'frontend',
    content: 'I keep mixing up when to use Grid and when to use Flexbox. What rules of thumb do you follow?',
    replies: 31,
    views: 567,
    likes: 42,
    time: '8 hours ago',
    pinned: false,
    solved: true,
  },
  {
    id: 4,
    title: 'Transitioning from college projects to real-world codebases',
    author: 'Emily Watson',
    avatar: 'EW',
    category: 'career',
    content: 'I am about to start my first internship and I am nervous about working on a real codebase. Any advice?',
    replies: 47,
    views: 723,
    likes: 65,
    time: '1 day ago',
    pinned: false,
    solved: false,
  },
  {
    id: 5,
    title: 'Design systems: Building reusable components that scale',
    author: 'James Chen',
    avatar: 'JC',
    category: 'design',
    content: 'What are the key principles for building a design system that works across multiple products?',
    replies: 19,
    views: 234,
    likes: 28,
    time: '1 day ago',
    pinned: false,
    solved: false,
  },
  {
    id: 6,
    title: 'Node.js authentication: JWT vs Session-based',
    author: 'Maria Lopez',
    avatar: 'ML',
    category: 'backend',
    content: 'I am building an API and trying to decide between JWT and session-based authentication. What are the trade-offs?',
    replies: 33,
    views: 456,
    likes: 51,
    time: '2 days ago',
    pinned: false,
    solved: true,
  },
];

const popularTopics = [
  { label: 'React Hooks', posts: 128 },
  { label: 'TypeScript', posts: 95 },
  { label: 'Career Advice', posts: 82 },
  { label: 'Python', posts: 74 },
  { label: 'System Design', posts: 68 },
  { label: 'Git & GitHub', posts: 61 },
];

const categoryColors = {
  frontend: 'bg-gradient-to-r from-blue-500 to-blue-600',
  backend: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
  design: 'bg-gradient-to-r from-purple-500 to-purple-600',
  career: 'bg-gradient-to-r from-amber-500 to-amber-600',
  general: 'bg-gradient-to-r from-neutral-500 to-neutral-600',
};

const badgeColorMap = {
  frontend: 'primary',
  backend: 'success',
  design: 'secondary',
  career: 'warning',
  general: 'neutral',
};

function DiscussionCard({ discussion, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <Card className={`p-8 flex flex-col gap-4 group ${discussion.isMe ? 'ring-2 ring-primary-300 ring-offset-1' : ''}`}>
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar initials={discussion.avatar} size="md" className="h-12 w-12 text-sm font-bold" />
              {discussion.pinned && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
                  <Pin className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <div>
              <p className={`text-sm font-bold ${discussion.isMe ? 'text-primary-700' : 'text-neutral-900'}`}>
                {discussion.author}
                {discussion.isMe && (
                  <span className="ml-2 text-xs font-normal bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">You</span>
                )}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3.5 w-3.5 text-neutral-400" />
                <span className="text-xs text-neutral-500">{discussion.time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              color={badgeColorMap[discussion.category] || 'neutral'}
              variant="outline"
              className="text-xs font-semibold whitespace-nowrap"
            >
              {discussion.category}
            </Badge>
            {discussion.solved && (
              <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <BadgeCheck className="h-3.5 w-3.5" />
                Solved
              </div>
            )}
          </div>
        </div>

        {/* Title & Content */}
        <div>
          <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
            {discussion.title}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
            {discussion.content}
          </p>
        </div>

        {/* Reaction Counts */}
        <div className="flex items-center gap-6 pt-4 border-t border-neutral-100">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-red-500 transition-colors group/btn"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover/btn:bg-red-50 flex items-center justify-center transition-colors">
              <Heart className="h-4 w-4 group-hover/btn:fill-red-400 transition-all" />
            </div>
            <span className="font-semibold">{discussion.likes}</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-blue-500 transition-colors group/btn"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover/btn:bg-blue-50 flex items-center justify-center transition-colors">
              <MessageCircle className="h-4 w-4" />
            </div>
            <span className="font-semibold">{discussion.replies} replies</span>
          </motion.button>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
              <Eye className="h-4 w-4" />
            </div>
            <span className="font-semibold">{discussion.views} views</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredDiscussions = discussions.filter((d) => {
    const matchesCategory = selectedCategory === 'all' || d.category === selectedCategory;
    const matchesSearch = !search || d.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Community Discussions
              </h1>
              <p className="text-lg text-white/90 max-w-xl">
                Ask questions, share knowledge, and connect with learners who are on the same journey
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                icon={Plus}
                className="bg-white text-emerald-700 hover:bg-white/90 border-0 shadow-xl font-bold px-8 py-4 text-base whitespace-nowrap"
              >
                New Post
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="lg:w-72 shrink-0">
            <div className="sticky top-6 space-y-6">
              {/* Categories */}
              <Card className="p-8">
                <h3 className="text-base font-bold text-neutral-900 mb-5">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    const count = cat.id === 'all' ? discussions.length : discussions.filter(d => d.category === cat.id).length;
                    return (
                      <motion.button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        whileHover={{ x: 4 }}
                        className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-200'
                            : 'text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4" />
                          <span>{cat.label}</span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/25 text-white' : 'bg-neutral-200 text-neutral-600'
                        }`}>
                          {count}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </Card>

              {/* Popular Topics */}
              <Card className="p-8">
                <h3 className="text-base font-bold text-neutral-900 mb-5">Trending Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((topic) => (
                    <motion.button
                      key={topic.label}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-neutral-100 to-neutral-200 hover:from-primary-100 hover:to-primary-50 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-primary-700 transition-all"
                    >
                      <span>{topic.label}</span>
                      <span className="text-neutral-400 text-[10px]">{topic.posts}</span>
                    </motion.button>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Main Feed */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Search */}
            <SearchBar
              placeholder="Search discussions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />

            {/* Discussions */}
            <div className="space-y-6">
              {filteredDiscussions.map((discussion, index) => (
                <DiscussionCard key={discussion.id} discussion={discussion} index={index} />
              ))}
            </div>

            {filteredDiscussions.length === 0 && (
              <Card className="p-8">
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center mb-6">
                    <MessageSquare className="h-10 w-10 text-neutral-400" />
                  </div>
                  <p className="text-lg font-semibold text-neutral-700 mb-2">No discussions found</p>
                  <p className="text-sm text-neutral-500">Try a different category or search term</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
