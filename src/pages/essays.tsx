import { motion } from 'framer-motion';

interface Essay {
  title: string;
  date: string;
  status: string;
}

const essays: Essay[] = [
  { title: "Thoughts brewing on AI autonomy...", date: "Soon", status: "Drafting" },
  { title: "Exploring the beauty of less...", date: "Soon", status: "Writing" },
  { title: "Interface musings in progress...", date: "Soon", status: "Ideating" },
  { title: "Building this site in public...", date: "Soon", status: "Drafting" },
  { title: "Notes on capturing attention...", date: "Soon", status: "Writing" },
  { title: "Pondering system stability...", date: "Soon", status: "Ideating" },
  { title: "Innovation decay rate theory...", date: "Soon", status: "Writing" },
  { title: "Minimalism: A work in progress...", date: "Soon", status: "Drafting" },
  { title: "Design psychology thoughts loading...", date: "Soon", status: "Ideating" },
  { title: "Sustainable creativity manifesto...", date: "Soon", status: "Writing" },
  { title: "Iteration chronicles loading...", date: "Soon", status: "Drafting" },
];

export default function Essays() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="space-y-6">
        {essays.map((essay, index) => (
          <motion.div
            key={essay.title}
            className="flex items-center justify-between group cursor-not-allowed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-2">
              <span className="font-mono text-[0.875rem] text-black/70 dark:text-white/70 transition-colors">
                {essay.title}
              </span>
              <motion.span 
                className="text-[0.75rem] font-mono text-green-600 dark:text-green-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {essay.status}
              </motion.span>
            </div>
            <span className="font-mono text-[0.875rem] text-black/40 dark:text-white/40">
              {essay.date}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}