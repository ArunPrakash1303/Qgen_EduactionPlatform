import React, { useState } from 'react';
import { showSnack } from '../utils/toast';

export default function Communications({ user }) {
  const [chatMsg, setChatMsg] = useState('');
  
  return (
    <>
      <div className="page-header">
        <div className="page-title">Communication Panel</div>
        <div className="page-subtitle">Complaints Tracking and Slack-like Internal Chat</div>
      </div>
      
      <div className="row g-3">
        <div className="col-lg-6">
          <div className="card-custom p-4 mb-3" style={{ height: '100%' }}>
            <div className="section-title">Raise Complaint</div>
            <div className="mb-3">
              <label className="form-label-custom">Send Complaint To</label>
              <select className="form-select-custom">
                {user.name === 'Student' && <option>Principal</option>}
                {user.name === 'Student' && <option>Admin</option>}
                {user.name === 'Teacher' && <option>HOD</option>}
                {user.name === 'Teacher' && <option>Principal</option>}
                {user.name === 'HOD' && <option>Principal</option>}
                {user.name === 'Exam Cell Staff' && <option>Principal</option>}
                {(user.name === 'Principal' || user.name === 'Admin') && <option>Review Received Complaints</option>}
              </select>
            </div>
            {(user.name === 'Principal' || user.name === 'Admin') ? (
              <div style={{ background: 'var(--surface2)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ fontWeight: 600, fontSize:'13px' }}>Fee Discrepancy (from CS21001)</div>
                <button className="btn-outline-custom mt-2" style={{ padding:'4px 10px', fontSize:'11px' }}>Reply to Student</button>
              </div>
            ) : (
              <>
                <div className="mb-3"><label className="form-label-custom">Subject</label><input className="form-control-custom" /></div>
                <div className="mb-3"><label className="form-label-custom">Details</label><textarea className="form-control-custom" rows="3"></textarea></div>
                <button className="btn-primary-custom w-100" onClick={() => showSnack('Complaint Submitted', 'success')}><i className="bi bi-send"></i> Submit Complaint</button>
              </>
            )}
            
            {user.name === 'Principal' && (
              <div className="mt-4 border-top pt-4">
                <div className="section-title">Virtual Meeting</div>
                <button className="btn-accent-custom w-100" onClick={() => showSnack('Meeting Link Created!','info')}><i className="bi bi-camera-video"></i> Create Global Meeting Link</button>
              </div>
            )}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card-custom p-4" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="section-title">Chat Panel (Slack-style)</div>
            <div className="mb-2">
              <input className="form-control-custom" placeholder="Search Email ID to Chat (e.g. ramya.r@ins.com)" />
            </div>
            
            <div style={{ flex: 1, border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', background: 'var(--surface2)', overflowY: 'auto', minHeight: '300px' }}>
              <div style={{ display:'flex', gap:'10px', marginBottom:'16px' }}>
                <div className="avatar">RS</div>
                <div>
                  <div style={{ fontSize:'12px', fontWeight:600 }}>ramya.r@ins.com <span style={{color:'var(--text3)', fontSize:'10px'}}>10:45 AM</span></div>
                  <div style={{ background:'var(--surface)', padding:'8px 12px', borderRadius:'0 8px 8px 8px', marginTop:'4px', border:'1px solid var(--border)' }}>Hello! When is the exam schedule finalized?</div>
                </div>
              </div>
            </div>

            <div className="mt-3 d-flex gap-2">
              <input className="form-control-custom" placeholder="Type a message..." value={chatMsg} onChange={e=>setChatMsg(e.target.value)} />
              <button className="btn-primary-custom" onClick={() => { setChatMsg(''); showSnack('Message Sent', 'success') }}><i className="bi bi-send"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
