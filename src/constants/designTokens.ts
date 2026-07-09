/**
 * Design Tokens - Centralized color and spacing system
 * Use these values throughout the application for consistency
 */

export const colors = {
  // Primary colors
  primary: {
    green: "#10B981",
    greenDark: "#059669",
    greenLight: "#34D399",
  },
  
  // Background colors
  background: {
    dark: "#111827",
    darker: "#0F172A",
    card: "#1F2937",
  },
  
  // Text colors
  text: {
    primary: "#F9FAFB",
    secondary: "#D1D5DB",
    tertiary: "#9CA3AF",
  },
  
  // Border colors
  border: {
    default: "#374151",
    light: "#4B5563",
  },
  
  // Status colors
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
};

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
};

export const borderRadius = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "1.5rem",
  full: "9999px",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  primary: "0 10px 30px rgba(16, 185, 129, 0.3)",
};
