import React from 'react';
import { showSnack } from '../utils/toast';

export default function PageAction({ user }) {
  const roles = ['Student', 'Teacher', 'HOD', 'Principal', 'Exam Cell Staff'];
  const pages = ['Dashboard','Documents','Results','Admissions','Reports','Communication Panel'];

  return (
    <>
      <div className="page-header">
        <div className="page-title">Page Access Control</div>
        <div className="page-subtitle">Manage menu access and permissions for all roles</div>
      </div>
      
      <div className="card-custom p-4">
        <div className="section-title">Access Matrix</div>
        <div style={{ overflowX: 'auto' }}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Menu / Page</th>
                {roles.map(r => <th key={r}>{r}</th>)}
              </tr>
            </thead>
            <tbody>
              {pages.map(page => (
                <tr key={page}>
                  <td style={{ fontWeight: 600 }}>{page}</td>
                  {roles.map(r => (
                    <td key={r}>
                      <input 
                        type="checkbox" 
                        defaultChecked={Math.random() > 0.3} 
                        onChange={() => showSnack(`Access updated for ${r}`, 'info')} 
                        style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: 'var(--primary)' }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4">
          <button className="btn-primary-custom" onClick={() => showSnack('Permissions Saved!', 'success')}>
            <i className="bi bi-shield-check"></i> Update Permissions
          </button>
        </div>
      </div>
    </>
  );
}
