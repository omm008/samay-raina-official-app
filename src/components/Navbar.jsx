import React from "react";
import { motion } from "framer-motion";
import { useNavbarState } from "./navbar/useNavbarState";
import Logo from "./navbar/Logo";
import DesktopNavigation from "./navbar/DesktopNavigation";
import CartIcon from "./navbar/CartIcon";
import AuthSection from "./navbar/AuthSection";
import MobileMenuButton from "./navbar/MobileMenuButton";
import MobileMenu from "./navbar/MobileMenu";

const NavBar = () => {
  const {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isUserMenuOpen,
    setIsUserMenuOpen,
    user,
    isAuthenticated,
    itemCount,
    navItems,
    handleLogout,
    handleCartClick,
  } = useNavbarState();

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-700 rounded-xl ${isScrolled
            ? "py-2 md:py-3"
            : "py-3 md:py-4"
          }`}
        style={{
          background: isScrolled
            ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(220, 60, 34, 0.2) 30%, rgba(0, 0, 0, 0.6) 100%)'
            : 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(220, 60, 34, 0.15) 40%, rgba(251, 191, 36, 0.1) 70%, rgba(0, 0, 0, 0.4) 100%)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          border: isScrolled
            ? '1px solid rgba(220, 60, 34, 0.4)'
            : '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: isScrolled
            ? '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 8px 25px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Desktop Navigation */}
            <DesktopNavigation navItems={navItems} />

            {/* Right Side - Cart, Auth, Mobile Menu */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Cart Icon */}
              <CartIcon itemCount={itemCount} onClick={handleCartClick} />

              {/* Authentication Section */}
              <AuthSection
                isAuthenticated={isAuthenticated}
                user={user}
                isUserMenuOpen={isUserMenuOpen}
                setIsUserMenuOpen={setIsUserMenuOpen}
                handleLogout={handleLogout}
              />

              {/* Mobile Menu Button */}
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          navItems={navItems}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={handleLogout}
        />
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div
        className={`transition-all duration-300 ${isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
          }`}
      ></div>
    </>
  );
};

export default NavBar;
