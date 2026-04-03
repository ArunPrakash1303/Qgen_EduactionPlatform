import React from 'react';
import { showSnack } from '../utils/toast';

export default function Results({ user }) {
  const isStudent = user.name === 'Student';

  return (
    <>
      <div className="page-header">
        <div className="page-title">{isStudent ? 'My Results' : 'Results Management'}</div>
        <div className="page-subtitle">{isStudent ? 'View and track your previous semester results' : 'View students results with filters'}</div>
      </div>

      <div className="card-custom p-4">
        {!isStudent && (
          <div className="d-flex gap-3 mb-4">
            <div style={{flex:1}}>
              <label className="form-label-custom">Department</label>
              <select className="form-select-custom"><option>CSE</option><option>ECE</option></select>
            </div>
            <div style={{flex:1}}>
              <label className="form-label-custom">Batch</label>
              <select className="form-select-custom"><option>2022-2026</option></select>
            </div>
            <div style={{flex:1}}>
              <label className="form-label-custom">Semester</label>
              <select className="form-select-custom"><option>Semester 4</option></select>
            </div>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="section-title mb-0">{isStudent ? 'Semester 4 Result Overview' : 'Class CSE Batch 22-26 Results'}</div>
        </div>

        <table className="table-custom">
          <thead>
            <tr>
              {!isStudent && <th>Student / Roll No</th>}
              <th>Subject</th>
              <th>Marks</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {!isStudent && <td style={{fontWeight:600}}>Rahul (CS21001)</td>}
              <td>CS401 - DSA</td>
              <td>82/100</td>
              <td><span className="badge-custom badge-green">Pass</span></td>
              <td><button className="btn-outline-custom" style={{padding:'4px 8px'}} onClick={()=>showSnack('Downloading PDF', 'success')}><i className="bi bi-download"></i></button></td>
            </tr>
            <tr>
              {!isStudent && <td style={{fontWeight:600}}>Priya (CS21002)</td>}
              <td>MA201 - Maths</td>
              <td>42/100</td>
              <td><span className="badge-custom badge-red">Fail</span></td>
              <td><button className="btn-outline-custom" style={{padding:'4px 8px'}}><i className="bi bi-download"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
