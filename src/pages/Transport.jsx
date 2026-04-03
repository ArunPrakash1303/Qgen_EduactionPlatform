import React from 'react';
import { showSnack } from '../utils/toast';

export default function Transport({ user }) {
  const isAdmin = user.name === 'Admin';
  const routes = [
    { route: 'Route A - City Center', bus: 'TN 01 AB 1234', driver: 'Mani', contact: '9876543210' },
    { route: 'Route B - South Zone', bus: 'TN 02 XY 9876', driver: 'Velu', contact: '9876543211' }
  ];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Transport Details</div>
        <div className="page-subtitle">Bus routes, drivers, and transport fee tracking</div>
      </div>
      
      <div className="card-custom p-4">
        <div className="d-flex justify-content-between mb-3">
          <div className="section-title mb-0">Active Bus Routes</div>
          {isAdmin && <button className="btn-primary-custom" onClick={() => showSnack('New route modal opened', 'info')}><i className="bi bi-plus-lg"></i> Add Route</button>}
        </div>
        
        <table className="table-custom">
          <thead>
            <tr><th>Route Name</th><th>Bus Number</th><th>Driver Name</th><th>Driver Contact</th>{isAdmin && <th>Actions</th>}</tr>
          </thead>
          <tbody>
            {routes.map((r, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{r.route}</td>
                <td><span className="badge-custom badge-blue">{r.bus}</span></td>
                <td>{r.driver}</td>
                <td>{r.contact}</td>
                {isAdmin && (
                  <td>
                    <button className="btn-outline-custom" style={{ padding:'4px 10px', fontSize:'11px' }} onClick={() => showSnack(`Editing ${r.route}`, 'info')}><i className="bi bi-pencil"></i> Edit</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
