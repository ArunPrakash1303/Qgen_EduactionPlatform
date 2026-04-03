import React from 'react';
import { showSnack } from '../utils/toast';

export default function Inbox({ user }) {
  const isTeacher = user.name === 'Teacher';
  const isHOD = user.name === 'HOD';
  const isPrincipal = user.name === 'Principal';
  const isExamCell = user.name === 'Exam Cell Staff';

  const requests = [
    { from: 'Rahul Kumar (Student)', doc: 'Medical Leave Request.pdf', date: 'Today', status: 'Pending' },
    { from: 'Priya Sharma (Student)', doc: 'OD Permission.pdf', date: 'Yesterday', status: 'Approved' }
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Inbox</div>
        <div className="page-subtitle">Review permissions and requested documents</div>
      </div>
      
      <div className="card-custom p-4">
        <div className="section-title">Received Documents</div>
        
        <table className="table-custom">
          <thead>
            <tr><th>From</th><th>Document</th><th>Date</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {(isExamCell ? [{from:'Prof. Ramesh', doc:'CS401 QA Paper.pdf', date:'Today', status:'Pending'}] : requests).map((r, i) => (
              <tr key={i}>
                <td>{r.from}</td>
                <td>
                  <i className="bi bi-file-earmark-pdf" style={{color:'#E53935'}}></i> {r.doc}
                </td>
                <td>{r.date}</td>
                <td><span className={`badge-custom ${r.status==='Approved' ? 'badge-green' : 'badge-yellow'}`}>{r.status}</span></td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="btn-outline-custom" style={{ padding:'4px 8px', fontSize:'11px' }} onClick={() => showSnack('Preview opened','info')}><i className="bi bi-eye"></i></button>
                    {r.status === 'Pending' && (
                      <button className="btn-accent-custom" style={{ padding:'4px 8px', fontSize:'11px' }} onClick={() => showSnack('Approved and forwarded','success')}><i className="bi bi-check"></i> Approve & Forward</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isTeacher && <div className="mt-3"><small style={{color:'var(--text3)'}}>If required, forward these to HOD or Principal.</small></div>}
      </div>
    </>
  );
}
