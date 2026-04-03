import React from 'react';
import { NAV_CONFIG } from '../config/navigation';

export default function Sidebar({ user, sidebarCollapsed, mobileShow, onNavigate, currentPage, onLogout, onClose }) {
  const sections = NAV_CONFIG[user.name] || NAV_CONFIG.Admin;

  return (
    <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileShow ? 'mobile-show' : ''}`} id="sidebar">
      <div className="sidebar-logo">
        <i className="bi bi-triangle-fill" style={{ fontSize: '24px', color: '#fff', transform: 'rotate(90deg)' }}></i>
        <div className="sidebar-logo-text" style={{ textTransform: 'uppercase', fontSize: '1.2rem', letterSpacing: '2px', flex: 1 }}>QGEN NET</div>
        {window.innerWidth <= 768 && (
          <button className="mobile-close-btn" onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '20px' }}>
            <i className="bi bi-x"></i>
          </button>
        )}
      </div>
      
      <nav className="sidebar-nav">
        {sections.map((sec, i) => (
          <React.Fragment key={i}>
            <div className="sidebar-section-label">{sec.label}</div>
            {sec.items.map(item => (
              <button 
                key={item.page}
                className={`nav-item-btn ${currentPage === item.page ? 'active' : ''}`}
                onClick={() => onNavigate(item.page, item.label)}
              >
                <i className={`bi ${item.icon} nav-icon`}></i>
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </nav>
      
      <svg className="sidebar-nodes" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="50" r="14" fill="none" stroke="#fff" strokeWidth="6" />
        <circle cx="65" cy="25" r="9" fill="none" stroke="#fff" strokeWidth="6" />
        <circle cx="85" cy="65" r="11" fill="none" stroke="#fff" strokeWidth="6" />
        <circle cx="50" cy="85" r="7" fill="none" stroke="#fff" strokeWidth="6" />
        <line x1="32" y1="41" x2="57" y2="30" stroke="#fff" strokeWidth="6" />
        <line x1="34" y1="54" x2="74" y2="63" stroke="#fff" strokeWidth="6" />
        <line x1="77" y1="69" x2="56" y2="81" stroke="#fff" strokeWidth="6" />
      </svg>
    </div>
  );
}
