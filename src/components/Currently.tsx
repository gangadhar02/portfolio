import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const previousRoles = [
  {
    title: 'Performance Marketing & Strategy',
    period: '2024 - Present',
    company: 'GrowthSchool',
    location: 'Bengaluru',
  },
  {
    title: 'Growth Marketing',
    period: '2022 - 2024',
    company: 'Scaler',
    location: 'Bengaluru',
  },
  {
    title: 'Digital Marketing',
    period: '2021 - 2022',
    company: 'Teachable',
    location: 'Bengaluru',
  }
];

export default function Currently() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-4 mb-8">
      <h2 className="text-xs font-mono text-black dark:text-gray-500 mb-4 font-bold">CURRENTLY</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-mono text-[0.875rem] font-bold text-black dark:text-white">Performance Marketing & Strategy</h3>
            <p className="font-mono text-[0.875rem] text-black dark:text-gray-500 mt-1">2024 - Present</p>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="flex items-center space-x-2">
              <p className="font-mono text-[0.875rem] text-black dark:text-white">GrowthSchool</p>
              <Image
                src="/favicons/growthschool.svg"
                alt="GrowthSchool"
                width={16}
                height={16}
                className="rounded-sm"
              />
            </div>
            <p className="font-mono text-[0.875rem] text-black dark:text-gray-500 mt-1">Bengaluru</p>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[0.875rem] text-black dark:text-gray-500 font-mono hover:text-black/70 dark:hover:text-white transition-colors mb-4"
        >
          {isExpanded ? 'Hide previous roles' : 'Previous roles'}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden space-y-4"
            >
              {previousRoles.slice(1).map((role) => (
                <motion.div
                  key={`${role.title}-${role.period}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-mono text-[0.875rem] text-black dark:text-gray-300">{role.title}</h3>
                    <p className="font-mono text-[0.875rem] text-black dark:text-gray-500 mt-1">{role.period}</p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <p className="font-mono text-[0.875rem] text-black dark:text-gray-300">{role.company}</p>
                    <p className="font-mono text-[0.875rem] text-black dark:text-gray-500 mt-1">{role.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}