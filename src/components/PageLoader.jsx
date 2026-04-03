import React from 'react';
import { motion } from 'framer-motion';

function PageLoader({ onFinish }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      id="page-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--surface)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '28px'
      }}
    >
      <div className="loader-paper"></div>
      <div className="loader-paper"></div>
      <div className="loader-paper"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '8px' }}>
          <div className="loader-logo-icon">
            <div className="loader-book"></div>
            <div className="loader-bulb">💡</div>
          </div>
          <div>
            <div className="loader-title"><span className="q">Q</span><span className="gen">Gen</span></div>
            <div className="loader-subtitle">Question Paper Generator</div>
          </div>
        </div>
        <div className="loader-progress" style={{ margin: '20px auto 12px' }}>
          <div className="loader-progress-bar"></div>
        </div>
        <div className="loader-dots"><span></span><span></span><span></span></div>
        <div style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '12px' }}>
          Initializing academic platform...
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PageLoader;
