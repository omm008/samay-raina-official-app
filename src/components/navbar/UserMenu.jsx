import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UserMenu = ({ isOpen, user, onLogout }) => {
  const safeUser = user || { name: "User", email: "user@example.com" };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="user-menu absolute right-0 mt-2 w-52 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(220, 60, 34, 0.15) 30%, rgba(0, 0, 0, 0.4) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(220, 60, 34, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="px-4 py-3 border-b border-red-500/20">
            <p className="text-white font-medium text-sm">{safeUser?.name}</p>
            <p className="text-gray-300 text-xs">{safeUser?.email}</p>
          </div>
          
          <motion.button
            onClick={() => alert("Profile page coming soon!")}
            className="w-full text-left px-4 py-3 text-gray-200 hover:text-yellow-300 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ x: 4 }}
            style={{
              background: 'transparent',
            }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>👤</span>
              <span>Profile</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
          
          <motion.button
            onClick={() => alert("Orders page coming soon!")}
            className="w-full text-left px-4 py-3 text-gray-200 hover:text-yellow-300 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ x: 4 }}
            style={{
              background: 'transparent',
            }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>📦</span>
              <span>Orders</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
          
          <motion.button
            onClick={onLogout}
            className="w-full text-left px-4 py-3 text-gray-200 hover:text-red-300 transition-all duration-300 group relative overflow-hidden border-t border-red-500/20 mt-1"
            whileHover={{ x: 4 }}
            style={{
              background: 'transparent',
            }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>🚪</span>
              <span>Logout</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserMenu;