import React from 'react';
import { Header } from './components/Header';   
import { TranslatorCard } from './components/TranslatorCard';        
import { HistoryList } from './components/HistoryList';        
import { TranslationProvider } from './context/TranslationContext';           
import { Github } from 'lucide-react';             
  
function App() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Header />
          <main className="mt-8 space-y-8">
            <TranslatorCard />
            <HistoryList />
          </main>
          <footer className="mt-12 text-center space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Emoji Translator. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with 💜 by</span>
              <a
                href="https://github.com/kumaryash-24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                <Github size={16} />
                Kumar Yash
              </a>
            </div>
          </footer>
        </div>
      </div>
    </TranslationProvider>
  );
}

export default App;
