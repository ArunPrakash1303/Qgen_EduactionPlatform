import React from 'react';
import { showSnack } from '../utils/toast';

export default function Announcements({ user }) {
  const notices = [
    { title:'Semester Exams Circular', msg:'All students must bring hall tickets.', time:'Today, 10:00 AM', type:'yellow' },
    { title:'Holiday Notice', msg:'Pongal Holidays declared from 14th to 16th.', time:'Yesterday, 4:00 PM', type:'blue' },
    { title:'Results Published', msg:'Semester 3 results are out in the student portal.', time:'2 Days Ago', type:'green' },
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Announcements</div>
        <div className="page-subtitle">Institute Circulars and Official Announcements</div>
      </div>
      
      <div className="card-custom p-4 mb-3">
        <div className="d-flex justify-content-between mb-3">
          <div className="section-title mb-0">Notice Board</div>
          {(user.name === 'Admin' || user.name === 'HOD' || user.name === 'Principal') && (
            <button className="btn-primary-custom" onClick={() => showSnack('New Circular Modal', 'info')}><i className="bi bi-megaphone"></i> Publish Circular</button>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {notices.map((a, i) => (
            <div key={i} style={{ padding: '16px', background: 'var(--surface2)', borderRadius: '10px', borderLeft: `6px solid var(--${a.type==='yellow'?'yellow-dark':a.type==='green'?'accent':'primary'})` }}>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{a.title}</div>
              <div style={{ fontSize: '13.5px', color: 'var(--text2)' }}>{a.msg}</div>
              <div style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '8px' }}>{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
