import { motion } from 'motion/react';

const NeonLine = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className="relative my-6"
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-800"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 bg-black text-xs text-green-400 font-mono">
          ✦ ✦ ✦
        </span>
      </div>
    </motion.div>
  );
};

export default NeonLine;