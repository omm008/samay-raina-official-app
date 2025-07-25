import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const DesktopNavigation = ({ navItems = [] }) => {
  // Safety check for navItems
  if (!Array.isArray(navItems) || navItems.length === 0) {
    return null;
  }

  return (
    <div className="hidden lg:flex items-center space-x-1">
      {navItems.map((item, index) => {
        // Safety check for each item
        if (!item || !item.href || !item.label) {
          return null;
        }

        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
            whileHover={{ y: -3, scale: 1.02 }}
          >
            <NavLink
              to={item.href}
              className={({ isActive }) => 
                `relative px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 group overflow-hidden ${
                  isActive 
                    ? "text-black shadow-lg" 
                    : "text-white hover:text-yellow-300"
                }`
              }
              style={({ isActive }) => ({
                background: isActive
                  ? "linear-gradient(135deg, rgb(239 68 68) 0%, rgb(251 191 36) 100%)"
                  : "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: isActive 
                  ? "1px solid rgba(251, 191, 36, 0.4)"
                  : "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: isActive
                  ? "0 8px 25px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  : "0 4px 15px rgba(0, 0, 0, 0.1)",
              })}
            >
              <motion.span 
                className="text-lg relative z-10"
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                {item.icon || "•"}
              </motion.span>
              <span className="relative z-10">{item.label}</span>
              
              {/* Enhanced hover effect with animated gradient */}
              <motion.div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(220, 60, 34, 0.15) 0%, rgba(251, 191, 36, 0.1) 50%, rgba(220, 60, 34, 0.15) 100%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Glow effect on hover */}
              <motion.div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  boxShadow: "0 0 25px rgba(239, 68, 68, 0.4), 0 0 50px rgba(251, 191, 36, 0.2)",
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['-200% -200%', '200% 200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </NavLink>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DesktopNavigation;
