import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbarState = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const location = useLocation();

  // Navigation items
  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/products", label: "Products", icon: "🛍️" },
    { href: "/about", label: "About", icon: "🎭" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for user in localStorage and listen for changes
  useEffect(() => {
    const loadUserData = () => {
      try {
        const savedUser = localStorage.getItem("samay-app-user");
        if (savedUser) {
          const userData = JSON.parse(savedUser);
          setUser(userData);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.warn("Error loading user data");
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    const loadCartData = () => {
      try {
        const savedCart = localStorage.getItem("samay-app-cart");
        if (savedCart) {
          const cartItems = JSON.parse(savedCart);
          const count = cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          );
          setItemCount(count);
        } else {
          setItemCount(0);
        }
      } catch (error) {
        console.warn("Error loading cart data");
        setItemCount(0);
      }
    };

    // Initial load
    loadUserData();
    loadCartData();

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = (e) => {
      if (e.key === "samay-app-user") {
        loadUserData();
      }
      if (e.key === "samay-app-cart") {
        loadCartData();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Also listen for custom events (when user logs in/out in same tab)
    const handleAuthChange = () => {
      loadUserData();
      loadCartData();
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.user-menu') && !event.target.closest('.user-menu-button')) {
        setIsUserMenuOpen(false);
      }
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isUserMenuOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isUserMenuOpen, isMobileMenuOpen]);

  // Close menus on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  // Handlers
  const handleLogout = () => {
    localStorage.removeItem("samay-app-user");
    localStorage.removeItem("samay-app-cart");
    setUser(null);
    setIsAuthenticated(false);
    setItemCount(0);
    setIsUserMenuOpen(false);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("authChange"));
    
    // Smooth redirect to home
    window.location.href = "/";
  };

  const handleCartClick = () => {
    alert("Cart functionality coming soon!");
  };

  return {
    // State
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isUserMenuOpen,
    setIsUserMenuOpen,
    user,
    isAuthenticated,
    itemCount,
    navItems,
    
    // Handlers
    handleLogout,
    handleCartClick,
  };
};