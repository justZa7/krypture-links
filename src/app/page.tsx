'use client';

import { motion } from 'framer-motion';
import ProfileCard from '@/components/ProfileCard';
import LinkCard from '@/components/LinkCard';
import NeonLine from '@/components/NeonLine';
import AnimatedText from '@/components/AnimatedText';
import AnimatedBeams from '@/components/AnimatedBeams';

import { 
  FaXTwitter,
  FaTiktok,
  FaInstagram,
  FaDiscord
} from "react-icons/fa6";

export default function Home() {
  const links = [
    {
      id: 1,
      title: 'TikTok',
      url: 'https://www.tiktok.com/@krypture1',
      icon: <FaTiktok/>,
      color: 'from-green-400 to-emerald-200',
    },
    {
      id: 2,
      title: 'Twitter/X',
      url: 'https://x.com/krypture0x',
      icon: <FaXTwitter/>,
      color: 'from-green-300 to-cyan-200',
    },
    {
      id: 3,
      title: 'Instagram',
      url: 'https://www.instagram.com/croco.sol',
      icon: <FaInstagram/>,
      color: 'from-purple-400 to-pink-300',
    },
    {
      id: 4,
      title: 'Discord',
      url: 'https://discord.gg/mA5FYwpy',
      icon: <FaDiscord/>,
      color: 'from-blue-400 to-sky-300',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12 px-4 relative overflow-hidden z-10">
      {/* Animated beams background */}
      <AnimatedBeams />
      
      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md space-y-8 relative z-10"
      >
        <ProfileCard />

        <NeonLine />

        <AnimatedText 
          text="My Social Links" 
          className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400" 
        />

        <div className="space-y-4">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              title={link.title}
              url={link.url}
              icon={link.icon}
              color={link.color}
            />
          ))}
        </div>

        <NeonLine />

        <motion.p 
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Thanks for visiting! ✨
        </motion.p>
      </motion.div>
    </div>
  );
}