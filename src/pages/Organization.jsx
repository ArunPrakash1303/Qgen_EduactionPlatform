import React, { useState } from 'react';
import { showSnack } from '../utils/toast';

export default function Organization({ user }) {
  const [orgType, setOrgType] = useState('College');

  return (
    <>
      <div className="page-header">
        <div className="page-title">Organization Details</div>
        <div className="page-subtitle">Manage institution profile and configuration</div>
      </div>
      
      <div className="card-custom p-4 mb-4">
        <div className="section-title">General Information</div>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label-custom">Organization Name</label>
            <input className="form-control-custom" defaultValue="Qgen University" disabled={user.name!=='Admin'} />
          </div>
          <div className="col-md-6">
            <label className="form-label-custom">Organization Type <span style={{color:'red'}}>*</span></label>
            <select 
              className="form-select-custom" 
              value={orgType} 
              onChange={e => setOrgType(e.target.value)}
              disabled={user.name!=='Admin'}
            >
              <option value="School">School</option>
              <option value="College">College</option>
            </select>
            <div style={{fontSize:'11px', color:'var(--text3)', marginTop:'4px'}}>
              Based on this, exam types will change (e.g., Semesters vs Term Exams).
            </div>
          </div>
          <div className="col-12">
            <label className="form-label-custom">Address</label>
            <textarea className="form-control-custom" rows="2" defaultValue="123 Education City, Knowledge Park" disabled={user.name!=='Admin'}></textarea>
          </div>
          <div className="col-md-6">
            <label className="form-label-custom">Email</label>
            <input className="form-control-custom" defaultValue="contact@qgen.edu" disabled={user.name!=='Admin'} />
          </div>
          <div className="col-md-6">
            <label className="form-label-custom">Phone</label>
            <input className="form-control-custom" defaultValue="+91 80000 00000" disabled={user.name!=='Admin'} />
          </div>
          {user.name === 'Admin' && (
            <div className="col-12 mt-3">
              <button className="btn-primary-custom" onClick={() => showSnack('Organization details updated!', 'success')}>
                <i className="bi bi-save"></i> Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
