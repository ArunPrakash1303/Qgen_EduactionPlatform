import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { showSnack } from '../utils/toast';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

export default function Dashboard({ user, isDark }) {
  const tc = isDark ? '#9BA3BB' : '#5A6278';
  const gc = isDark ? '#2A3042' : '#DDE2EE';

  const chartOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { labels: { color: tc, font: { family: 'DM Sans' } } } },
    scales: { x: { ticks: { color: tc }, grid: { color: gc } }, y: { ticks: { color: tc }, grid: { color: gc } } }
  };

  const AdminDashboard = () => (
    <>
      <div className="row g-3 mb-4">
        <div className="col-md-3"><div className="stat-card"><div className="stat-icon blue"><i className="bi bi-people"></i></div><div><div className="stat-val" style={{color:'var(--primary)'}}>3,250</div><div className="stat-label">Total Students</div></div></div></div>
        <div className="col-md-3"><div className="stat-card"><div className="stat-icon green"><i className="bi bi-house-door"></i></div><div><div className="stat-val" style={{color:'var(--accent)'}}>425</div><div className="stat-label">Hostel Students</div></div></div></div>
        <div className="col-md-3"><div className="stat-card"><div className="stat-icon yellow"><i className="bi bi-person-badge"></i></div><div><div className="stat-val" style={{color:'var(--yellow-dark)'}}>12 / 120</div><div className="stat-label">HODs / Staff</div></div></div></div>
        <div className="col-md-3"><div className="stat-card"><div className="stat-icon red"><i className="bi bi-cash-stack"></i></div><div><div className="stat-val" style={{color:'#E53935'}}>65</div><div className="stat-label">Fee Pending</div></div></div></div>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">Year-wise Join %</div>
            <div style={{ height: '220px' }}>
              <Bar data={{ labels: ['2023','2024','2025','2026'], datasets: [{ label: 'Join %', data: [75,82,88,94], backgroundColor: '#1B3A6B' }] }} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">Year-wise Pass %</div>
            <div style={{ height: '220px' }}>
              <Line data={{ labels: ['2023','2024','2025','2026'], datasets: [{ label: 'Pass %', data: [88,90,91,95], borderColor: '#3AB54A', pointerBackgroundColor: '#3AB54A' }] }} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">Recent Admission Activity</div>
            <div className="activity-item"><div className="activity-text"><strong>Riya Sharma</strong> admitted to CSE.</div><div className="activity-time">10 min ago</div></div>
            <div className="activity-item"><div className="activity-text"><strong>Hostel Fee</strong> paid by Arun.</div><div className="activity-time">1 hour ago</div></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">HODs List</div>
            <table className="table-custom">
              <thead><tr><th>Dept</th><th>HOD Name</th><th>Contact</th></tr></thead>
              <tbody>
                <tr><td>CSE</td><td>Prof. Suresh</td><td>suresh@edu.in</td></tr>
                <tr><td>ECE</td><td>Prof. James</td><td>james@edu.in</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );

  const StudentDashboard = () => (
    <>
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="card-custom p-4" style={{ background: 'var(--surface2)', borderLeft: '6px solid var(--primary)' }}>
            <div className="section-title text-primary"><i className="bi bi-alarm"></i> Active Exam</div>
            <div style={{ fontSize: '18px', fontWeight: 700 }}>CS401 - Data Structures</div>
            <div style={{ color: 'var(--text2)', marginTop: '4px' }}><strong>Hall:</strong> A-Block 204 | <strong>Invigilator:</strong> Prof. Ramya</div>
          </div>
        </div>
        <div className="col-md-3"><div className="stat-card"><div className="stat-icon green"><i className="bi bi-award"></i></div><div><div className="stat-val">8.4</div><div className="stat-label">Total CGPA</div></div></div></div>
        <div className="col-md-3"><div className="stat-card"><div className="stat-icon blue"><i className="bi bi-percent"></i></div><div><div className="stat-val">82%</div><div className="stat-label">Mark %</div></div></div></div>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">Next Timetable</div>
            <table className="table-custom">
              <thead><tr><th>Date</th><th>Subject</th><th>Time</th></tr></thead>
              <tbody>
                <tr><td>Jan 15</td><td>CS401 - DSA</td><td>09:00 AM</td></tr>
                <tr><td>Jan 17</td><td>MA201 - Maths</td><td>09:00 AM</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">Exam Performance</div>
            <div style={{ height: '200px' }}>
              <Bar data={{ labels: ['Sem 1','Sem 2','Sem 3','Sem 4'], datasets: [{ label: 'Marks %', data: [78,81,85,82], backgroundColor: '#3AB54A' }] }} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const TeacherDashboard = () => (
    <>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">My Timetable</div>
            <table className="table-custom">
              <thead><tr><th>Time</th><th>Class</th><th>Subject</th></tr></thead>
              <tbody><tr><td>09:00 - 10:00</td><td>CSE A</td><td>Data Structures</td></tr><tr><td>11:00 - 12:00</td><td>ECE B</td><td>Microcontrollers</td></tr></tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="section-title">Representative Class Attendance (ECE A)</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', textAlign: 'center', marginTop: '20px' }}>92% Present Today</div>
            <button className="btn-primary-custom w-100 mt-4" onClick={() => showSnack('Attendance tracking opened','info')}>View Full Details</button>
          </div>
        </div>
      </div>
    </>
  );

  const HODDashboard = () => (
    <>
      <div className="card-custom p-4 mb-4">
        <div className="d-flex justify-content-between">
          <div className="section-title">Department Overview (ECE)</div>
          <select className="form-select-custom w-auto"><option>All Batches</option><option>2022-2026</option></select>
        </div>
        <div className="row g-3 mt-2 text-center">
          <div className="col-4"><h5>Students Pass %</h5><h2 style={{color:'var(--accent)'}}>89%</h2></div>
          <div className="col-4"><h5>Students Attd.</h5><h2 style={{color:'var(--primary)'}}>94%</h2></div>
          <div className="col-4"><h5>Staff Attd.</h5><h2 style={{color:'var(--yellow-dark)'}}>98%</h2></div>
        </div>
      </div>
      <div className="card-custom p-4">
        <div className="section-title">Staff Efficiency</div>
        <table className="table-custom">
          <thead><tr><th>Teacher</th><th>Subject</th><th>Pass %</th></tr></thead>
          <tbody><tr><td>Prof. Ramya</td><td>Microcontrollers</td><td>92%</td></tr></tbody>
        </table>
      </div>
    </>
  );

  const PrincipalDashboard = () => (
    <>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="d-flex justify-content-between"><div className="section-title">Dept Attendance</div><select className="form-select-custom w-auto"><option>Students</option><option>Teachers</option></select></div>
            <div style={{ height: '220px', marginTop:'16px' }}>
              <Bar data={{ labels: ['CSE','ECE','MECH','CIVIL'], datasets: [{ label: 'Attendance %', data: [94,92,88,95], backgroundColor: '#1B3A6B' }] }} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-custom p-4">
            <div className="d-flex justify-content-between"><div className="section-title">Dept Marks</div><select className="form-select-custom w-auto"><option>Batch 2024</option></select></div>
            <div style={{ height: '220px', marginTop:'16px' }}>
              <Line data={{ labels: ['CSE','ECE','MECH','CIVIL'], datasets: [{ label: 'Avg Marks %', data: [82,79,74,85], borderColor: '#3AB54A' }] }} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ExamCellDashboard = () => (
    <>
      <div className="card-custom p-4" style={{ background: 'var(--surface2)', borderLeft: '6px solid var(--accent)' }}>
        <div className="section-title text-accent">Current Exam</div>
        <div style={{ fontSize: '18px', fontWeight: 700 }}>Jan 15 - CS401 (Data Structures)</div>
        <div style={{ color: 'var(--text2)', marginTop: '8px', fontSize: '14px' }}><strong>Invigilator:</strong> Prof. Ramya | Dept: CSE | Ph: 9876543210</div>
      </div>
      <div className="card-custom p-4 mt-3">
        <div className="d-flex justify-content-between">
          <div className="section-title">Previous Exams</div>
          <select className="form-select-custom w-auto" style={{maxWidth:'150px'}}><option>Filter by Batch</option></select>
        </div>
        <table className="table-custom mt-2">
          <thead><tr><th>Date</th><th>Exam</th><th>Invigilator</th></tr></thead>
          <tbody><tr><td>Jan 12</td><td>MA201</td><td>Prof. Suresh (MECH) - 9876543211</td></tr></tbody>
        </table>
      </div>
    </>
  );

  return (
    <>
      <div className="page-header">
        {/* <div className="page-title">Welcome back, {user.name}</div> */}
        <div className="page-subtitle">Here is your customized {user.name} dashboard overview.</div>
      </div>
      
      {user.name === 'Admin' && <AdminDashboard />}
      {user.name === 'Student' && <StudentDashboard />}
      {user.name === 'Teacher' && <TeacherDashboard />}
      {user.name === 'HOD' && <HODDashboard />}
      {user.name === 'Principal' && <PrincipalDashboard />}
      {user.name === 'Exam Cell Staff' && <ExamCellDashboard />}
    </>
  );
}
