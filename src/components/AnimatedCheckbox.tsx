import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface AnimatedCheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const AnimatedCheckbox: React.FC<AnimatedCheckboxProps> = ({
  checked,
  onChange,
  label,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onChange();
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <motion.div
      className="flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-6 h-6">
        {/* Default box */}
        <motion.div
          className="absolute inset-0 border-2 border-black rounded-sm bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />

        {/* Animated paths */}
        {isAnimating && (
          <motion.svg
            className="absolute inset-0 w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
          >
            <motion.path
              d="M 3 21 L 3 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            />
            <motion.path
              d="M 3 3 L 21 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            />
            <motion.path
              d="M 21 3 L 21 21"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.2, delay: 0.6 }}
            />
            <motion.path
              d="M 21 21 L 3 21"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.2, delay: 0.8 }}
            />
          </motion.svg>
        )}

        {/* Checkmark */}
        {checked && !isAnimating && (
          <motion.svg
            className="absolute inset-0 w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M 6 12 L 10 16 L 18 8" />
          </motion.svg>
        )}
      </div>
      <motion.span
        className={`text-lg ${checked ? 'line-through text-black/40' : 'text-black'}`}
        animate={{
          opacity: checked ? 0.6 : 1,
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedCheckbox;