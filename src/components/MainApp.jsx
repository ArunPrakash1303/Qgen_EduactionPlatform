import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Dashboard from '../pages/Dashboard';
import QPGen from '../pages/QPGen';
import ExamScheduler from '../pages/ExamScheduler';
import Students from '../pages/Students';
import Admission from '../pages/Admission';
import Results from '../pages/Results';
import Documents from '../pages/Documents';
import Reports from '../pages/Reports';
import Communications from '../pages/Communications';
import Settings from '../pages/Settings';
import Organization from '../pages/Organization';
import PageAction from '../pages/PageAction';
import Inbox from '../pages/Inbox';
import Attendance from '../pages/Attendance';
import Teachers from '../pages/Teachers';
import Accommodation from '../pages/Accommodation';
import Transport from '../pages/Transport';
import Announcements from '../pages/Announcements';

const pages = {
  dashboard: Dashboard,
  qpgen: QPGen,
  'exam-scheduler': ExamScheduler,
  students: Students,
  admission: Admission,
  results: Results,
  documents: Documents,
  reports: Reports,
  communications: Communications,
  settings: Settings,
  organization: Organization,
  'page-action': PageAction,
  inbox: Inbox,
  attendance: Attendance,
  teachers: Teachers,
  accommodation: Accommodation,
  transport: Transport,
  announcements: Announcements
};

export default function MainApp({ user, onLogout, isDark, toggleTheme }) {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [currentLabel, setCurrentLabel] = useState('Dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  const handleNavigate = (pageKey, label) => {
    setCurrentPage(pageKey);
    setCurrentLabel(label);
    if (window.innerWidth <= 768) {
      setMobileShow(false);
    }
  };

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setMobileShow(!mobileShow);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const PageComponent = pages[currentPage];

  return (
    <>
      {mobileShow && <div className="sidebar-overlay" onClick={() => setMobileShow(false)}></div>}
      <Sidebar 
        user={user} 
        sidebarCollapsed={sidebarCollapsed} 
        mobileShow={mobileShow} 
        onNavigate={handleNavigate} 
        currentPage={currentPage}
        onLogout={onLogout}
        onClose={() => setMobileShow(false)}
      />
      
      <Topbar 
        user={user} 
        sidebarCollapsed={sidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
        currentLabel={currentLabel}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onLogout={onLogout}
      />
      
      <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {PageComponent ? (
              <PageComponent user={user} isDark={isDark} />
            ) : (
              <div className="card-custom p-5 text-center">
                <i className="bi bi-tools" style={{ fontSize: '3rem', color: 'var(--text3)' }}></i>
                <h5 style={{ marginTop: '16px', fontFamily: "'Outfit', sans-serif" }}>Coming Soon</h5>
                <p style={{ color: 'var(--text3)' }}>{currentLabel} module is under development.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
