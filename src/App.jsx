import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageLoader from './components/PageLoader';
import Login from './components/Login';
import MainApp from './components/MainApp';

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      <AnimatePresence>
        {loading && <PageLoader key="loader" onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        !user ? (
          <Login onLogin={(roleData) => setUser(roleData)} isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        ) : (
          <MainApp user={user} onLogout={() => setUser(null)} isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        )
      )}
    </>
  );
}

export default App;
