import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'dark' ? (
        <FiSun className="w-[18px] h-[18px]" />
      ) : (
        <FiMoon className="w-[18px] h-[18px]" />
      )}
    </motion.button>
  );
}