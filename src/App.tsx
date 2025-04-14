import React, { useState } from 'react';
import AnimatedCheckbox from './components/AnimatedCheckbox';
import { motion } from 'framer-motion';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Contemplate existence', completed: false },
    { id: 3, text: 'Learn SwiftUI', completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-orange-400 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <motion.h1 
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Peerlist Challenge Day 3
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-0.5 bg-white/40 mx-auto my-2 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl text-white/90 font-light tracking-wide"
        >
          Animated Checkbox
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl"
      >
        <div className="flex items-center mb-8">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <h1 className="text-black text-lg ml-4">lol</h1>
        </div>
        
        <div className="space-y-4">
          {todos.map((todo) => (
            <AnimatedCheckbox
              key={todo.id}
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              label={todo.text}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default App;