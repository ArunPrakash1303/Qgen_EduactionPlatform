import React, { useState } from 'react';
import { showSnack } from '../utils/toast';
import { ROLES } from '../config/roles';

export default function Settings({ user }) {
  const [preferences, setPreferences] = useState({
    dark: false,
    email: true,
    sms: false,
    backup: true
  });

  const togglePref = (key, label) => {
    setPreferences(p => ({ ...p, [key]: !p[key] }));
    showSnack(`${label} toggled`, 'info');
  };

  const prefsData = [
    { key: 'dark', label: 'Dark Mode', desc: 'Switch to dark theme' },
    { key: 'email', label: 'Email Notifications', desc: 'Receive email alerts' },
    { key: 'sms', label: 'SMS Alerts', desc: 'Get SMS for exams' },
    { key: 'backup', label: 'Auto Backup', desc: 'Daily data backup' }
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Settings</div>
        <div className="page-subtitle">Manage your profile, security and system preferences</div>
      </div>
      
      <div className="row g-3">
        <div className="col-lg-6">
          <div className="card-custom p-4 mb-3">
            <div className="section-title">Profile Settings</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="avatar" style={{ width: '60px', height: '60px', fontSize: '20px', background: user.color }}>{user.abbr}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px' }}>{user.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--text3)' }}>qgen.institution.edu.in</div>
              </div>
              <button className="btn-outline-custom" style={{ marginLeft: 'auto' }} onClick={() => showSnack('Photo upload opened','info')}><i className="bi bi-camera"></i> Change Photo</button>
            </div>
            
            <div className="row g-3">
              <div className="col-md-6"><label className="form-label-custom">First Name</label><input className="form-control-custom" defaultValue={user.name}/></div>
              <div className="col-md-6"><label className="form-label-custom">Employee ID</label><input className="form-control-custom" defaultValue={`QG${Math.floor(1000+Math.random()*9000)}`}/></div>
              <div className="col-12"><label className="form-label-custom">Email</label><input className="form-control-custom" defaultValue="admin@qgen.edu.in"/></div>
              <div className="col-12"><button className="btn-primary-custom" onClick={() => showSnack('Profile updated!', 'success')}><i className="bi bi-save"></i> Save Changes</button></div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card-custom p-4 mb-3">
            <div className="section-title">Change Password</div>
            <div className="row g-3">
              <div className="col-12"><label className="form-label-custom">Current Password</label><input type="password" className="form-control-custom" placeholder="••••••••"/></div>
              <div className="col-12"><label className="form-label-custom">New Password</label><input type="password" className="form-control-custom" placeholder="••••••••"/></div>
              <div className="col-12"><label className="form-label-custom">Confirm Password</label><input type="password" className="form-control-custom" placeholder="••••••••"/></div>
              <div className="col-12"><button className="btn-accent-custom" onClick={() => showSnack('Password changed successfully!', 'success')}><i className="bi bi-shield-lock"></i> Update Password</button></div>
            </div>
          </div>
          
          <div className="card-custom p-4">
            <div className="section-title">System Preferences</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {prefsData.map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div><div style={{ fontWeight: 600, fontSize: '13.5px' }}>{s.label}</div><div style={{ fontSize: '12px', color: 'var(--text3)' }}>{s.desc}</div></div>
                  <div 
                    className={`toggle-switch ${preferences[s.key] ? 'on' : ''}`}
                    style={{ position: 'relative', width: '44px', height: '24px', cursor: 'pointer' }} 
                    onClick={() => togglePref(s.key, s.label)}
                  >
                    <div style={{ position: 'absolute', inset: 0, background: preferences[s.key] ? 'var(--primary)' : 'var(--border)', borderRadius: '99px', transition: 'background 0.3s' }}></div>
                    <div style={{ position: 'absolute', width: '18px', height: '18px', background: '#fff', borderRadius: '50%', top: '3px', left: preferences[s.key] ? '23px' : '3px', transition: 'left 0.3s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
