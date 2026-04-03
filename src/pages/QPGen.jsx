import React, { useState } from 'react';
import { showSnack } from '../utils/toast';

export default function QPGen({ user }) {
  const isTeacher = user.name === 'Teacher';
  const isHOD = user.name === 'HOD';
  const isPrincipal = user.name === 'Principal';
  
  const [showPreview, setShowPreview] = useState(false);
  const [showEditReason, setShowEditReason] = useState(false);
  const [reason, setReason] = useState('');

  const handleSend = () => {
    showSnack(`Sent to Exam Cell by ${user.name} (${new Date().toLocaleString()})`, 'success');
  };

  const submitEdit = () => {
    setShowEditReason(false);
    showSnack('Question paper is now unlocking for edits...', 'info');
  };

  return (
    <>
      <div className="page-header">
        <div className="page-title">Question Paper Generation</div>
        <div className="page-subtitle">Generate, Preview, and Send QP to Exam Cell</div>
      </div>

      <div className="card-custom p-4 mb-4">
        <div className="section-title">Generate New Paper</div>
        <div className="row g-3">
          <div className="col-12">
            <div className="upload-zone" onClick={() => setShowPreview(true)}>
              <div className="upload-zone-icon">📄</div>
              <div className="upload-zone-text">Click to upload Syllabus/Source & Generate</div>
            </div>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="card-custom p-4">
          <div className="section-title">Paper Preview (CS401 - DSA)</div>
          <div style={{ background: 'var(--surface2)', padding: '16px', borderRadius: '10px' }}>
            <h5 className="text-center">QGEN UNIVERSITY</h5>
            <div className="text-center mb-3">Time: 3 Hours | Max Marks: 100</div>
            <p>1. Explain Quick Sort algorithm. (10M)</p>
            <p>2. What is a binary tree? (5M)</p>
          </div>
          
          <div className="d-flex gap-2 mt-4">
            <button className="btn-outline-custom" onClick={() => setShowEditReason(true)} disabled={isPrincipal}>
              <i className="bi bi-pencil"></i> Edit Paper
            </button>
            <button className="btn-accent-custom" onClick={handleSend}>
              <i className="bi bi-send"></i> Send to Exam Cell
            </button>
            {isPrincipal && <button className="btn-primary-custom" onClick={() => showSnack('Emergency Override Send', 'warning')}>Emergency Override</button>}
          </div>

          {showEditReason && (
            <div className="mt-3 p-3" style={{ border: '1px solid var(--border)', borderRadius: '10px' }}>
              <label className="form-label-custom">Reason to Edit</label>
              <textarea className="form-control-custom mb-3" rows="2" placeholder="e.g. Questions too hard, syllabus miss..." value={reason} onChange={e => setReason(e.target.value)}></textarea>
              <button className="btn-primary-custom" onClick={submitEdit}>Confirm & Edit</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
