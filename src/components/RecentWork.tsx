import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    name: 'Project 1',
    link: '#'
  },
  {
    name: 'Project 2',
    link: '#'
  },
  {
    name: 'Project 3',
    link: '#'
  }
];

export default function RecentWork() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-4">
      <h2 className="text-xs font-mono text-black dark:text-gray-500 mb-4 font-bold">RECENT WORK</h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.link}
            className="flex justify-between items-center group mb-3 last:mb-0"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-mono text-[0.875rem] text-black dark:text-white group-hover:text-black/70 dark:group-hover:text-gray-400 transition-colors">
              {project.name}
            </span>
            <FiArrowUpRight className="text-black dark:text-gray-500 w-[0.875rem] h-[0.875rem]" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}