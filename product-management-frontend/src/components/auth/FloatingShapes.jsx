import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <>
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 right-16 w-12 h-12 bg-white/20 rotate-45"
      />

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-12 right-24 w-16 h-16 bg-white/10 rotate-45"
      />

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-16 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-white/20"
      />

      <div className="absolute top-24 left-10 w-16 h-16 rounded-full bg-white/15" />
    </>
  );
};

export default FloatingShapes;