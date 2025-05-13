import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollProvider } from './context/ScrollContext';
import LandingPage from './views/landingPage/LandingPage';

function App() {
  return (
    <ScrollProvider>
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
        <Navbar />
        <main>
          <LandingPage />
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App;
