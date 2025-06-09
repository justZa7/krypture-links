import { motion } from 'motion/react';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 opacity-75 blur-md animate-pulse"></div>
        <div className="relative">
          <Image
            src="./profile.png"
            alt="Profile"
            className="rounded-full w-24 h-24 border-2 border-green-400 object-cover"
          />
        </div>
      </div>
      
      <motion.h1 
        className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        @krypture
      </motion.h1>
      
      <motion.p 
        className="mt-2 text-gray-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Crypto | Blockchain | Web3
      </motion.p>
    </motion.div>
  );
};

export default ProfileCard;