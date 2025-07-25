import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import UserMenu from './UserMenu';

const AuthSection = ({ 
  isAuthenticated, 
  user, 
  isUserMenuOpen, 
  setIsUserMenuOpen, 
  handleLogout 
}) => {
  if (isAuthenticated) {
    return (
      <div className="relative">
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(220, 60, 34, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="user-menu-button flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 group overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(220, 60, 34, 0.3)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="User menu"
        >
          <motion.div 
            className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg"
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: '0 2px 8px rgba(220, 60, 34, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            }}
          >
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </motion.div>
          <span className="hidden md:block text-white text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300">
            {user?.name?.split(" ")[0] || "User"}
          </span>
          <motion.span 
            className="text-white text-xs group-hover:text-yellow-300 transition-colors duration-300"
            animate={isUserMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
          
          {/* Enhanced hover effect */}
          <motion.div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(220, 60, 34, 0.15) 0%, rgba(251, 191, 36, 0.1) 50%, rgba(220, 60, 34, 0.15) 100%)',
            }}
          />
        </motion.button>

        <UserMenu 
          isOpen={isUserMenuOpen}
          user={user}
          onLogout={handleLogout}
        />
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-3">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/login"
          className="px-4 py-2 text-white hover:text-yellow-300 font-medium transition-all duration-300 rounded-lg relative group overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <span className="relative z-10">Login</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </Link>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.05, y: -2 }} 
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/signup"
          className="px-5 py-2.5 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl relative group overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #DC3C22 0%, #EF4444 50%, #DC2626 100%)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            boxShadow: '0 4px 15px rgba(220, 60, 34, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
        >
          <span className="relative z-10">Sign Up</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
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
        </Link>
      </motion.div>
    </div>
  );
};

export default AuthSection;