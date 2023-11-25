"use client";
import { motion } from "framer-motion";

const NavItem = ({ item, icon }: { item: string; icon: React.JSX.Element }) => {
  return (
    <motion.button
      title={item}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      type="button"
      className="flex items-center justify-center gap-2 p-3 hover:bg-gray rounded-full"
    >
      {icon}
    </motion.button>
  );
};
export default NavItem;
