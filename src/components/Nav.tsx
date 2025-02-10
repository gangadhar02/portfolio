import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHome, FiFileText, FiCommand } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const router = useRouter();

  return (
    <div className="flex justify-center py-8">
      <nav className="flex items-center space-x-4 bg-white dark:bg-[#111111]/90 border border-gray-200 dark:border-none backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm">
        <Link 
          href="/" 
          className={`flex items-center space-x-2 transition-colors duration-200 ${
            router.pathname === '/' 
              ? 'text-black dark:text-white font-bold' 
              : 'text-black dark:text-white hover:text-black/70 dark:hover:text-white/70'
          }`}
        >
          <FiHome className="w-4 h-4" />
          <span className="font-mono text-[13px]">Home</span>
        </Link>
        <Link 
          href="/essays" 
          className={`flex items-center space-x-2 transition-colors duration-200 ${
            router.pathname === '/essays' 
              ? 'text-black dark:text-white font-bold' 
              : 'text-black dark:text-white hover:text-black/70 dark:hover:text-white/70'
          }`}
        >
          <FiFileText className="w-4 h-4" />
          <span className="font-mono text-[13px]">Essays</span>
        </Link>
        <div className="h-4 w-[1px] bg-black/10 dark:bg-gray-800" />
        <button className="flex items-center space-x-1.5 px-2 py-1 text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors duration-200">
          <FiCommand className="w-4 h-4" />
          <span className="font-mono text-[13px]">+ K</span>
        </button>
        <ThemeToggle />
      </nav>
    </div>
  );
}