import React from 'react';
import { showSnack } from '../utils/toast';

export default function Attendance({ user }) {
  const students = [
    { id: 'CS21001', name: 'Rahul Kumar', status: 'Present' },
    { id: 'CS21002', name: 'Priya Sharma', status: 'Absent' },
    { id: 'CS21003', name: 'Arun Patel', status: 'Present' }
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Attendance Management</div>
        <div className="page-subtitle">Take everyday attendance for assigned classes</div>
      </div>
      
      <div className="card-custom p-4">
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <label className="form-label-custom">Class & Section</label>
            <select className="form-select-custom"><option>ECE A Sec</option><option>ECE B Sec</option></select>
          </div>
          <div className="col-md-4">
            <label className="form-label-custom">Date</label>
            <input type="date" className="form-control-custom" defaultValue="2026-04-01" />
          </div>
          <div className="col-md-4 d-flex align-items-end">
            <button className="btn-primary-custom w-100"><i className="bi bi-person-check"></i> Load Students</button>
          </div>
        </div>
        
        <table className="table-custom">
          <thead>
            <tr><th>Student ID</th><th>Name</th><th>Status</th><th>Mark</th></tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td><code>{s.id}</code></td>
                <td style={{ fontWeight: 600 }}>{s.name}</td>
                <td><span className={`badge-custom ${s.status==='Present' ? 'badge-green' : 'badge-red'}`}>{s.status}</span></td>
                <td>
                  <button className="btn-outline-custom" style={{ padding:'4px 10px', fontSize:'11px' }} onClick={() => showSnack(`Marked present`, 'success')}><i className="bi bi-check"></i> Present</button>
                  <button className="btn-outline-custom ms-1" style={{ padding:'4px 10px', fontSize:'11px' }} onClick={() => showSnack(`Marked absent`, 'error')}><i className="bi bi-x"></i> Absent</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mt-4">
          <button className="btn-accent-custom" onClick={() => showSnack(`Attendance uploaded successfully`, 'success')}>
            <i className="bi bi-cloud-arrow-up"></i> Upload Attendance
          </button>
        </div>
      </div>
    </>
  );
}
