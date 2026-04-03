import React from 'react';
import { showSnack } from '../utils/toast';

export default function Documents({ user }) {
  const isStudent = user.name === 'Student';
  const isTeacher = user.name === 'Teacher';
  const isAdmin = user.name === 'Admin';
  const isExamCell = user.name === 'Exam Cell Staff';

  return (
    <>
      <div className="page-header">
        <div className="page-title">My Documents</div>
        <div className="page-subtitle">Access study materials, ID proofs, pay slips, and QPs</div>
      </div>
      
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">Upload Personal Documents</div>
            <div className="mb-3">
              <label className="form-label-custom">Document Type</label>
              <select className="form-select-custom">
                <option>Government ID Proof (Aadhar/PAN)</option>
                {isStudent && <option>Bank Passbook</option>}
                {isAdmin && <option>Staff ID / Photo Creation</option>}
                <option>Others</option>
              </select>
            </div>
            <div className="upload-zone" onClick={() => showSnack('File dialog opened', 'info')} style={{ padding:'24px' }}>
              <i className="bi bi-cloud-arrow-up" style={{ fontSize:'24px' }}></i>
              <div className="mt-2">Click to Upload Document</div>
            </div>
            {isAdmin && <button className="btn-primary-custom w-100 mt-3" onClick={() => showSnack('Account created with docs', 'success')}>Create HOD/Teacher Account</button>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-custom p-4" style={{ height: '100%' }}>
            <div className="section-title">Available Files to Download</div>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'12px' }}>
              {isStudent && (
                <>
                  <li className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                    <div><i className="bi bi-file-earmark-pdf text-danger"></i> CS401 Previous Question Paper</div>
                    <button className="btn-outline-custom" style={{padding:'4px'}} onClick={()=>showSnack('Downloading QP', 'success')}><i className="bi bi-download"></i></button>
                  </li>
                  <li className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                    <div><strong><i className="bi bi-ticket-detailed text-primary"></i> Hall Ticket (Dec 2025)</strong></div>
                    <button className="btn-accent-custom" style={{padding:'4px 10px'}} onClick={()=>showSnack('Downloading Hall Ticket', 'success')}><i className="bi bi-download"></i> Ticket</button>
                  </li>
                </>
              )}
              {isTeacher && (
                <li className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                  <div><i className="bi bi-file-earmark-ruled text-success"></i> Monthly Pay Slip - Oct 2026</div>
                  <button className="btn-outline-custom" style={{padding:'4px'}} onClick={()=>showSnack('Downloading Pay Slip', 'success')}><i className="bi bi-download"></i></button>
                </li>
              )}
              {(isExamCell || isAdmin) && (
                <>
                  <li className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                    <div>Upload Study Materials for Students/Teachers</div>
                    <button className="btn-accent-custom" style={{padding:'4px 10px'}} onClick={()=>showSnack('Publishing to portals', 'success')}><i className="bi bi-publish"></i> Publish</button>
                  </li>
                </>
              )}
              <li className="d-flex justify-content-between align-items-center">
                <div><i className="bi bi-file-earmark-text text-primary"></i> Transport & Fee Rules.pdf</div>
                <button className="btn-outline-custom" style={{padding:'4px'}}><i className="bi bi-eye"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
