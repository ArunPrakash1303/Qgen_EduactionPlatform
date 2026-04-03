import React, { useState, useEffect, useRef } from 'react';

export default function Topbar({ user, sidebarCollapsed, toggleSidebar, currentLabel, isDark, toggleTheme, onLogout }) {
  const [showNotif, setShowNotif] = useState(false);
  const notifRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotif(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, [notifRef]);

  return (
    <div className={`topbar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="topbar-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </button>
        <div className="topbar-search">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      
      <div className="topbar-actions">
        <button className="topbar-btn" onClick={toggleTheme} title={isDark ? 'Light Mode' : 'Dark Mode'}>
          <i className={isDark ? "bi bi-sun" : "bi bi-moon-stars"}></i>
        </button>
        <button className="topbar-btn" title="Calendar">
          <i className="bi bi-calendar3"></i>
        </button>
        <button className="topbar-btn" title="Favorites">
          <i className="bi bi-star"></i>
        </button>
        <button className="topbar-btn" title="Settings">
          <i className="bi bi-gear"></i>
        </button>
        
        <div style={{ position: 'relative' }} ref={notifRef}>
          <button className="topbar-btn" onClick={() => setShowNotif(!showNotif)}>
            <i className="bi bi-bell"></i>
            <div className="badge-dot"></div>
          </button>
          
          <div className={`dropdown-panel ${showNotif ? 'show' : ''}`}>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: '13px', color: 'var(--text)' }}>
              Notifications
            </div>
            <div className="notif-item">
              <div className="notif-dot"></div>
              <div><div className="notif-text">New exam scheduled: CS101 Final Exam</div><div className="notif-time">2 min ago</div></div>
            </div>
            <div className="notif-item">
              <div className="notif-dot" style={{ background: 'var(--yellow-dark)' }}></div>
              <div><div className="notif-text">Hall ticket generation completed for 245 students</div><div className="notif-time">1 hr ago</div></div>
            </div>
            <div className="notif-item">
              <div className="notif-dot" style={{ background: '#EF4444' }}></div>
              <div><div className="notif-text">Complaint from Student ID: S1042 pending</div><div className="notif-time">3 hr ago</div></div>
            </div>
            <div className="notif-item">
              <div className="notif-dot" style={{ background: 'var(--primary)' }}></div>
              <div><div className="notif-text">Results published for Semester 4</div><div className="notif-time">Yesterday</div></div>
            </div>
          </div>
        </div>
        
        <div className="user-profile-btn" title="Profile">
          <span className="user-profile-name d-none d-md-block">{user.name}</span>
          <div className="avatar" style={{ background: user.color }}>{user.abbr}</div>
        </div>
        
        <button className="topbar-btn" onClick={onLogout} title="Sign Out" style={{ color: '#EF4444', marginLeft: '4px' }}>
          <i className="bi bi-power"></i>
        </button>
      </div>
    </div>
  );
}
