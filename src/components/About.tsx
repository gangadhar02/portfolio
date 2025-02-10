import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-4 mb-8">
      <h2 className="text-xs font-mono text-black dark:text-gray-500 mb-4 font-bold">ABOUT</h2>
      <p className="font-mono text-[0.875rem] text-black dark:text-gray-400 leading-relaxed">
        I do marketing. I also like making, leading, and taking things from 0 to 1. 
        I have a deep passion for good tech and design. I am often learning and 
        experimenting with AI, code, design, photo, and film. I value high agency, 
        creativity, and big-picture thinking.
      </p>
    </motion.div>
  );
}