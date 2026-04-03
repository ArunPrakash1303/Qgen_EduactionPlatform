import React from 'react';
import { showSnack } from '../utils/toast';

export default function Accommodation({ user }) {
  const isAdmin = user.name === 'Admin';
  
  return (
    <>
      <div className="page-header">
        <div className="page-title">Accommodation / Hostel</div>
        <div className="page-subtitle">Manage hostel details, food menu, fees and complaints</div>
      </div>
      
      <div className="row g-3">
        <div className="col-lg-7">
          <div className="card-custom p-4 mb-3">
            <div className="section-title">Hostel Details & Availability</div>
            <div className="row g-3 text-center mb-4">
              <div className="col-4">
                <div style={{ background:'var(--surface2)', padding:'14px', borderRadius:'10px' }}>
                  <div style={{ fontSize:'24px', fontWeight:700, color:'var(--primary)'}}>Boys Hostel</div>
                  <div style={{ fontSize:'12px', color:'var(--text3)'}}>240 / 300 Occupied</div>
                </div>
              </div>
              <div className="col-4">
                <div style={{ background:'var(--surface2)', padding:'14px', borderRadius:'10px' }}>
                  <div style={{ fontSize:'24px', fontWeight:700, color:'var(--accent)'}}>Girls Hostel</div>
                  <div style={{ fontSize:'12px', color:'var(--text3)'}}>185 / 200 Occupied</div>
                </div>
              </div>
              <div className="col-4">
                <div style={{ background:'var(--surface2)', padding:'14px', borderRadius:'10px' }}>
                  <div style={{ fontSize:'24px', fontWeight:700, color:'var(--yellow-dark)'}}>Staff Quarters</div>
                  <div style={{ fontSize:'12px', color:'var(--text3)'}}>12 / 20 Occupied</div>
                </div>
              </div>
            </div>
            
            <div className="section-title">Food Menu (Current Week)</div>
            <table className="table-custom">
              <thead><tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th></tr></thead>
              <tbody>
                <tr><td><strong>Monday</strong></td><td>Idli & Sambar</td><td>Meals & Ponnanganni Keerai</td><td>Chapati & Veg Kurma</td></tr>
                <tr><td><strong>Tuesday</strong></td><td>Dosa & Chutney</td><td>Variety Rice</td><td>Parotta & Salna</td></tr>
              </tbody>
            </table>
            {isAdmin && <button className="btn-outline-custom mt-3" onClick={() => showSnack('Menu edit modal opened','info')}><i className="bi bi-pencil"></i> Alter Food Menu</button>}
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card-custom p-4 mb-3">
            <div className="section-title">Hostel Complaints</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background:'var(--surface2)', padding:'12px', borderRadius:'8px' }}>
                <div style={{ fontWeight: 600, fontSize:'13px' }}>Room 204 Fan Issue</div>
                <div style={{ fontSize:'11.5px', color:'var(--text3)' }}>Reported by Rahul (CS21001)</div>
                <div className="mt-2">
                  <span className="badge-custom badge-yellow">Pending</span>
                </div>
              </div>
            </div>
            {(user.name === 'Student' || user.name === 'Teacher') && (
              <button className="btn-primary-custom w-100 mt-3" onClick={() => showSnack('Complaint raised successfully','success')}><i className="bi bi-exclamation-triangle"></i> Raise Hostel Complaint</button>
            )}
            {isAdmin && (
              <button className="btn-primary-custom w-100 mt-3" onClick={() => showSnack('Viewed complaints','info')}><i className="bi bi-eye"></i> Respond to Complaints</button>
            )}
          </div>

          <div className="card-custom p-4">
            <div className="section-title">Fees Structure & Docs</div>
            <div style={{ fontSize:'13px', color:'var(--text2)', marginBottom:'12px' }}>
              Annual Hostel Fee: ₹45,000<br/>
              Mess Fee (Monthly): ₹3,500
            </div>
            <div className="d-flex gap-2">
              <button className="btn-outline-custom w-100" onClick={() => showSnack('Fee rules downloaded','success')}><i className="bi bi-download"></i> Rules & Fees PDF</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
