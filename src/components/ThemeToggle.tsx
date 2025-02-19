import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon className="w-5 h-5 text-gray-800 dark:text-white" />
      ) : (
        <FaSun className="w-5 h-5 text-gray-800 dark:text-white" />
      )}
    </button>
  );
} 