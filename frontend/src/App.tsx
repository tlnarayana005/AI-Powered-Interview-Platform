import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Toaster position="top-right" />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="px-4 py-6 sm:px-6 lg:px-8"
        >
          <AppRoutes />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
