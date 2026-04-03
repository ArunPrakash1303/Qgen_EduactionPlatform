import React, { useState } from 'react';
import { showSnack } from '../utils/toast';

export default function ExamScheduler({ user }) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <div className="page-header">
        <div className="page-title">Exam Scheduler</div>
        <div className="page-subtitle">Allocate halls, set invigilators, batch mapping via Excel</div>
      </div>

      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card-custom p-4 mb-3">
            <div className="d-flex justify-content-between">
              <div className="section-title mb-0">Scheduled Exams</div>
              <div>
                <button className="btn-accent-custom" onClick={() => setShowModal(true)}>
                  <i className="bi bi-file-earmark-excel"></i> Schedule by Excel
                </button>
              </div>
            </div>
            
            <div className="d-flex gap-2 mt-3 mb-3">
              <select className="form-select-custom w-25"><option>Filter Batch</option><option>2022-2026</option></select>
              <select className="form-select-custom w-25"><option>Filter Semester</option><option>Sem 4</option></select>
            </div>

            <table className="table-custom">
              <thead><tr><th>Date</th><th>Batch</th><th>Subject</th><th>Hall & Invigilator</th></tr></thead>
              <tbody>
                <tr>
                  <td>Jan 15, 09:00</td>
                  <td>2022-2026 (Sem 4)</td>
                  <td>CS401 - DSA</td>
                  <td>A-Block 204 <br/> <small className="text-muted">Prof. Ramya</small></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card-custom p-4 mb-3">
            <div className="section-title">Available Staffs Filtering</div>
            <select className="form-select-custom mb-3"><option>Filter by Department</option><option>CSE</option></select>
            <div style={{fontSize:'12px', color:'var(--text2)', background:'var(--surface2)', padding:'10px', borderRadius:'6px'}}>
              <strong>Prof. Suresh (CSE)</strong> is free on Jan 15th 09:00 - 12:00
            </div>
          </div>

          <div className="card-custom p-4">
            <div className="section-title">Hall Ticket Generation</div>
            <p style={{fontSize:'13px', color:'var(--text2)'}}>Allocate halls and assign invigilators first. Generated hall tickets will automatically push to students' My Documents.</p>
            <button className="btn-primary-custom w-100" onClick={() => showSnack('Hall tickets generated and distributed', 'success')}>Execute Generation Process</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div className="card-custom p-4" style={{width:'500px'}}>
            <div className="section-title">Schedule by Excel</div>
            <p style={{fontSize:'13px'}}>Upload your structured excel file detailing semester names, batches (e.g. 2016-2020), dates, timings, and invigilators.</p>
            <div className="upload-zone mb-3 mt-3">Drop Excel File Here</div>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn-outline-custom" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-primary-custom" onClick={() => { setShowModal(false); showSnack('Preview modal loading...', 'info') }}>Upload & Preview</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
