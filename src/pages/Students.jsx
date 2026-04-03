import React from 'react';
import { showSnack } from '../utils/toast';

export default function Students({ user }) {
  const isTeacher = user.name === 'Teacher';
  const isHOD = user.name === 'HOD';
  const isAdmin = user.name === 'Admin';

  const students = [
    { id:'CS21001', name:'Rahul Kumar', dept:'CSE', batch:'2022-2026', class:'CSE A Sec', status:'Active' },
    { id:'CS21002', name:'Priya Sharma', dept:'CSE', batch:'2022-2026', class:'CSE B Sec', status:'Active' },
    { id:'EE21010', name:'Meena Raj', dept:'ECE', batch:'2023-2027', class:'ECE A Sec', status:'Active' },
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Students Directory</div>
        <div className="page-subtitle">Manage profiles, review marks and attendance</div>
      </div>
      
      <div className="card-custom p-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <div style={{ display: 'flex', gap: '8px', flex: 1, maxWidth: '600px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <i className="bi bi-search" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text3)' }}></i>
              <input className="form-control-custom" placeholder="Search students... (e.g. CS21001)" style={{ paddingLeft: '38px' }}/>
            </div>
            {isAdmin && <select className="form-select-custom w-25"><option>All Depts</option><option>CSE</option></select>}
            <select className="form-select-custom w-25"><option>Filter Batch</option><option>2022-2026</option></select>
            <select className="form-select-custom w-25"><option>Filter Class</option><option>CSE A Sec</option></select>
          </div>
          <div>
            <button className="btn-outline-custom" onClick={() => showSnack('Exported Students List', 'success')}><i className="bi bi-download"></i></button>
            {isTeacher && <button className="btn-primary-custom ms-2" onClick={() => showSnack('Representative class edits only.', 'info')}><i className="bi bi-pencil-square"></i> Edit My Class</button>}
          </div>
        </div>
        
        <table className="table-custom">
          <thead>
            <tr><th>Student ID</th><th>Name</th><th>Department & Class</th><th>Batch</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td><code>{s.id}</code></td>
                <td><span style={{ fontWeight: 600 }}>{s.name}</span></td>
                <td><span className="badge-custom badge-blue">{s.dept}</span> <small className="text-muted ms-1">{s.class}</small></td>
                <td>{s.batch}</td>
                <td><span className={`badge-custom badge-green`}>{s.status}</span></td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="btn-outline-custom" style={{ padding: '4px 10px', fontSize: '11px' }} onClick={() => showSnack(`Viewing full profile`, 'info')}><i className="bi bi-eye"></i></button>
                    {(isAdmin || isHOD) && (
                      <button className="btn-outline-custom" style={{ padding: '4px 10px', fontSize: '11px' }} onClick={() => showSnack('Forwarded to Principal', 'success')}><i className="bi bi-arrow-right"></i> Filter & Fwd</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
