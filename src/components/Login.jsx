import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ROLES } from '../config/roles';
import { showSnack } from '../utils/toast';

function Login({ onLogin, isDark, toggleTheme }) {
  const [role, setRole] = useState('Admin');
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('Admin');
  const [error, setError] = useState('');

  const handleRoleSelect = (r) => {
    setRole(r);
    setUsername(r);
    setPassword(ROLES[r].pass || '');
    setError('');
  };

  const doLogin = () => {
    const roleData = ROLES[role];
    if (!roleData || password !== roleData.pass) {
      setError('Invalid credentials. Please try again.');
      showSnack('Invalid credentials. Please try again.', 'error');
      return;
    }
    showSnack(`Welcome back, ${role}! ✓`, 'success');
    onLogin({ name: role, ...roleData });
  };

  return (
    <motion.div 
      className="login-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="login-left">
        <motion.div className="login-brand-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>🎓</motion.div>
        <div className="login-brand-name">
          <span className="q" style={{ color: isDark ? '#3AB54A' : '#fff' }}>Q</span>
          <span className="gen" style={{ color: isDark ? '#F5C518' : 'rgba(255,255,255,0.85)' }}>Gen</span>
        </div>
        <div className="login-brand-tagline">Question Paper Generator & Exam Scheduler</div>
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="login-feature"><i className="bi bi-file-earmark-check"></i> AI-Powered Question Generation</div>
          <div className="login-feature"><i className="bi bi-calendar3"></i> Smart Exam Scheduling</div>
          <div className="login-feature"><i className="bi bi-people"></i> Complete Student Management</div>
          <div className="login-feature"><i className="bi bi-graph-up"></i> Analytics & Reports</div>
          <div className="login-feature"><i className="bi bi-shield-check"></i> Multi-Role Access Control</div>
        </div>
      </div>
      
      <div className="login-right">
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={isDark ? "bi bi-sun" : "bi bi-moon-stars"}></i>
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
        <motion.div 
          className="login-card"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="login-title">Welcome back 👋</div>
          <div className="login-subtitle">Sign in to your Qgen account</div>
          
          <div className="login-form-group">
            <label className="form-label-custom">Select Role</label>
            <div className="role-pills">
              {Object.keys(ROLES).map(r => (
                <div 
                  key={r}
                  className={`role-pill ${role === r ? 'selected' : ''}`}
                  onClick={() => handleRoleSelect(r)}
                >
                  {r === 'Exam Cell Staff' ? 'Exam Cell' : r}
                </div>
              ))}
            </div>
          </div>
          
          <div className="login-form-group">
            <label className="form-label-custom">Username</label>
            <div className="input-icon-wrap">
              <i className="bi bi-person icon"></i>
              <input 
                type="text" 
                className="login-input" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username" 
              />
            </div>
          </div>
          
          <div className="login-form-group">
            <label className="form-label-custom">Password</label>
            <div className="input-icon-wrap">
              <i className="bi bi-lock icon"></i>
              <input 
                type="password" 
                className="login-input" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password" 
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}>Forgot password?</span>
          </div>
          
          {error && <div style={{ color: '#EF4444', fontSize: '12px', marginBottom: '10px' }}>{error}</div>}
          
          <button className="login-btn" onClick={doLogin}>
            <i className="bi bi-box-arrow-in-right"></i> Sign In
          </button>
          
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '11.5px', color: 'var(--text3)', background: 'var(--surface2)', padding: '10px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text2)' }}>Demo:</strong> Admin/Admin &nbsp;|&nbsp; Student/name &nbsp;|&nbsp; Teacher/staff
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Login;
