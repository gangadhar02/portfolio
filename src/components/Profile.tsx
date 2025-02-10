import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="flex items-center space-x-4 py-4 mb-8">
      <Image
        src="/avatar.jpg"
        alt="Profile"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <h1 className="text-[0.875rem] font-mono text-black dark:text-white">
          Hi, I am <span className="font-bold">Gangadhar</span>.
        </h1>
        <p className="text-[0.875rem] text-black dark:text-gray-500 font-mono">
          A Performance marketer and Creative Strategist based in Bengaluru, India.
        </p>
      </div>
    </div>
  );
}