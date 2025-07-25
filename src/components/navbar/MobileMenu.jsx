import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({
  isOpen,
  navItems = [],
  isAuthenticated,
  user,
  onLogout,
}) => {
  const safeUser = user || { name: "User", email: "user@example.com" };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mobile-menu lg:hidden border-t overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(220, 60, 34, 0.15) 30%, rgba(0, 0, 0, 0.4) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(220, 60, 34, 0.3)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="px-4 py-4 space-y-2">
            {/* Navigation Items */}
            {Array.isArray(navItems) &&
              navItems.map((item, index) => {
                if (!item || !item.href || !item.label) {
                  return null;
                }

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-5 py-4 rounded-xl font-medium transition-all duration-300 group overflow-hidden relative ${
                          isActive
                            ? "text-black shadow-lg"
                            : "text-white hover:text-yellow-300"
                        }`
                      }
                      style={({ isActive }) => ({
                        background: isActive
                          ? "linear-gradient(135deg, rgb(239 68 68) 0%, rgb(251 191 36) 100%)"
                          : "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: isActive 
                          ? "1px solid rgba(251, 191, 36, 0.4)"
                          : "1px solid rgba(255, 255, 255, 0.1)",
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
                        {item.icon}
                      </motion.span>
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Enhanced hover effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(220, 60, 34, 0.15) 0%, rgba(251, 191, 36, 0.1) 50%, rgba(220, 60, 34, 0.15) 100%)',
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

            {/* Mobile Auth Section */}
            {!isAuthenticated ? (
              <div className="pt-4 border-t border-gray-700/50 space-y-2">
                <Link
                  to="/login"
                  className="block px-4 py-3 text-white hover:text-yellow-300 font-medium transition-colors duration-300"
                >
                  🔐 Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium text-center hover:from-red-700 hover:to-red-800 transition-all duration-300"
                >
                  🎯 Sign Up
                </Link>
              </div>
            ) : (
              /* Mobile User Menu */
              <div className="pt-4 border-t border-gray-700/50 space-y-2">
                <div className="px-4 py-2">
                  <p className="text-white font-medium">{safeUser?.name}</p>
                  <p className="text-gray-400 text-sm">{safeUser?.email}</p>
                </div>
                <button
                  onClick={() => alert("Profile page coming soon!")}
                  className="w-full text-left px-4 py-3 text-white hover:text-yellow-300 transition-colors duration-300"
                >
                  👤 Profile
                </button>
                <button
                  onClick={() => alert("Orders page coming soon!")}
                  className="w-full text-left px-4 py-3 text-white hover:text-yellow-300 transition-colors duration-300"
                >
                  📦 Orders
                </button>
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-3 text-white hover:text-yellow-300 transition-colors duration-300"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
