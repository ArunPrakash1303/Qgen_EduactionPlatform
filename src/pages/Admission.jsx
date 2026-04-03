import React from 'react';
import { showSnack } from '../utils/toast';

export default function Admission({ user }) {
  const isAdmin = user.name === 'Admin';
  
  const items = [
    { name:'Riya Sharma', course:'B.E. CS', status:'Approved', fee: 'Paid' },
    { name:'Vivek Singh', course:'B.Tech IT', status:'Pending', fee: 'Unpaid' }
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Admissions & Fees</div>
        <div className="page-subtitle">Process admissions, upload bulk lists, and track fee payments</div>
      </div>
      
      <div className="row g-3">
        <div className="col-lg-7">
          <div className="card-custom p-4">
            <div className="d-flex justify-content-between mb-3">
              <div className="section-title mb-0">New Admission</div>
              {isAdmin && (
                <button className="btn-accent-custom" onClick={() => showSnack('Bulk Excel Upload modal opened', 'info')}>
                  <i className="bi bi-file-earmark-excel"></i> Bulk Excel Upload
                </button>
              )}
            </div>
            
            <div className="row g-3">
              <div className="col-md-6"><label className="form-label-custom">First Name</label><input className="form-control-custom" /></div>
              <div className="col-md-6"><label className="form-label-custom">Course</label><select className="form-select-custom"><option>B.E CSE</option></select></div>
              <div className="col-12"><button className="btn-primary-custom" onClick={() => showSnack('Admission Submitted!', 'success')}>Submit</button></div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-5">
          <div className="card-custom p-4">
            <div className="section-title">Status & Fees Tracking</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {items.map((a, i) => (
                <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'12px', background:'var(--surface2)', borderRadius:'10px' }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{a.name}</div>
                    <div style={{ fontSize: '11.5px', color:'var(--text3)' }}>{a.course}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <span className={`badge-custom ${a.status==='Approved' ? 'badge-green' : 'badge-yellow'}`}>{a.status}</span>
                    <div className="mt-1">
                      <span className={`badge-custom ${a.fee==='Paid' ? 'badge-blue' : 'badge-red'}`}>{a.fee}</span>
                    </div>
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
