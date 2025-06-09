import { motion } from 'motion/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkCardProps {
  title: string;
  url: string;
  icon: ReactNode;
  color: string;
}

const LinkCard = ({ title, url, icon, color }: LinkCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <div className={`bg-gradient-to-r ${color} p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="bg-black rounded-xl p-4 flex items-center justify-between hover:bg-gray-900 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{icon}</span>
              <span className="font-medium">{title}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LinkCard;