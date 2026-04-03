import React from 'react';
import { showSnack } from '../utils/toast';

export default function Teachers({ user }) {
  const teachers = [
    { id: 'T001', name: 'Prof. Ramya', dept: 'ECE', att: '96%', perf: 'Excellent' },
    { id: 'T002', name: 'Prof. Suresh', dept: 'CSE', att: '90%', perf: 'Good' },
    { id: 'T003', name: 'Prof. Ramesh', dept: 'Mech', att: '98%', perf: 'Excellent' }
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Teachers / Staffs Management</div>
        <div className="page-subtitle">Manage staff attendance, documents and information</div>
      </div>
      
      <div className="card-custom p-4">
        <div className="d-flex justify-content-between mb-3">
          <div className="section-title mb-0">Staff Directory</div>
          <button className="btn-primary-custom" onClick={() => showSnack('Add Teacher Modal Opened', 'info')}><i className="bi bi-person-plus"></i> Add Staff</button>
        </div>
        
        <table className="table-custom">
          <thead>
            <tr><th>Staff ID</th><th>Name</th><th>Department</th><th>Attendance</th><th>Performance Target</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {teachers.map((t, i) => (
              <tr key={i}>
                <td><code>{t.id}</code></td>
                <td style={{ fontWeight: 600 }}>{t.name}</td>
                <td><span className="badge-custom badge-blue">{t.dept}</span></td>
                <td>{t.att}</td>
                <td>{t.perf}</td>
                <td>
                  <button className="btn-outline-custom" style={{ padding:'4px 10px', fontSize:'11px' }} onClick={() => showSnack(`Editing ${t.name}`, 'info')}><i className="bi bi-pencil"></i> Edit</button>
                  <button className="btn-outline-custom ms-1" style={{ padding:'4px 10px', fontSize:'11px' }} onClick={() => showSnack(`Uploading docs for ${t.name}`, 'info')}><i className="bi bi-upload"></i> Docs</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
