import React from 'react';

export default function Reports({ user }) {
  const isAdmin = user.name === 'Admin';
  const isExamCell = user.name === 'Exam Cell Staff';

  return (
    <>
      <div className="page-header">
        <div className="page-title">Reports & Analytics</div>
        <div className="page-subtitle">Custom insights and aggregated data</div>
      </div>

      <div className="row g-3">
        {isAdmin && (
          <div className="col-12">
            <div className="card-custom p-4">
              <div className="section-title">Admin Operational Reports</div>
              <div className="row g-3">
                <div className="col-md-4">
                  <div style={{ background:'var(--surface2)', padding:'16px', borderRadius:'8px' }}>
                    <div style={{fontWeight:600, fontSize:'14px'}}>Fees/Payment Collections</div>
                    <div style={{color:'var(--accent)', fontSize:'20px', fontWeight:800, marginTop:'8px'}}>₹ 1.2 Cr Total</div>
                    <button className="btn-outline-custom w-100 mt-2">Generate PDF</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={{ background:'var(--surface2)', padding:'16px', borderRadius:'8px' }}>
                    <div style={{fontWeight:600, fontSize:'14px'}}>Organization In/Out Parcel</div>
                    <div style={{fontSize:'12px', color:'var(--text2)', marginTop:'8px'}}>
                      ECE Lab Components: 540<br/>Damaged: 12<br/>Received: 80
                    </div>
                    <button className="btn-outline-custom w-100 mt-2">Export Data</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={{ background:'var(--surface2)', padding:'16px', borderRadius:'8px' }}>
                    <div style={{fontWeight:600, fontSize:'14px'}}>Hostel Expenses Report</div>
                    <div style={{fontSize:'12px', color:'var(--text2)', marginTop:'8px'}}>Monthly Restock: ₹12.5L</div>
                    <button className="btn-outline-custom w-100 mt-2">Generate PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(isExamCell || user.name === 'Principal') && (
          <div className="col-12">
            <div className="card-custom p-4">
              <div className="section-title">Examination Oversight Reports</div>
              <div style={{ display:'flex', gap:'12px' }}>
                <div className="stat-card" style={{flex:1}}>
                  <div className="stat-icon blue"><i className="bi bi-journal-check"></i></div>
                  <div><div className="stat-val">94.5%</div><div className="stat-label">Students Exam Attendance</div></div>
                </div>
                <div className="stat-card" style={{flex:1}}>
                  <div className="stat-icon green"><i className="bi bi-people"></i></div>
                  <div><div className="stat-val">48</div><div className="stat-label">Total Invigilators Deployed</div></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
