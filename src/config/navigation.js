export const NAV_CONFIG = {
  Admin: [
    { label: 'MAIN', items: [
      { icon: 'bi-grid', label: 'Dashboard', page: 'dashboard' },
      { icon: 'bi-building', label: 'Organization', page: 'organization' },
      { icon: 'bi-shield-lock', label: 'Page Action', page: 'page-action' },
    ]},
    { label: 'MANAGEMENT', items: [
      { icon: 'bi-person-plus', label: 'Admissions', page: 'admission' },
      { icon: 'bi-folder2', label: 'Documents', page: 'documents' },
      { icon: 'bi-house-door', label: 'Accommodation/Hostel', page: 'accommodation' },
      { icon: 'bi-bus-front', label: 'Transport Details', page: 'transport' }
    ]},
    { label: 'INSIGHTS', items: [
      { icon: 'bi-bar-chart-line', label: 'Reports & Analytics', page: 'reports' },
      { icon: 'bi-chat-dots', label: 'Communication Panel', page: 'communications' },
      { icon: 'bi-megaphone', label: 'Announcements', page: 'announcements' }
    ]},
    { label: 'SYSTEM', items: [
      { icon: 'bi-gear', label: 'Settings', page: 'settings' },
    ]}
  ],
  Student: [
    { label: 'MY PORTAL', items: [
      { icon: 'bi-grid', label: 'Dashboard', page: 'dashboard' },
      { icon: 'bi-folder2', label: 'My Documents', page: 'documents' },
      { icon: 'bi-award', label: 'My Results', page: 'results' },
      { icon: 'bi-person-badge', label: 'My Profile', page: 'settings' },
    ]},
    { label: 'COMMUNICATIONS', items: [
      { icon: 'bi-chat-text', label: 'Complaints & Chats', page: 'communications' },
      { icon: 'bi-megaphone', label: 'Announcements', page: 'announcements' },
    ]},
    { label: 'FACILITIES', items: [
      { icon: 'bi-house-door', label: 'Accommodation/Hostel', page: 'accommodation' },
      { icon: 'bi-bus-front', label: 'Transport Details', page: 'transport' }
    ]}
  ],
  Teacher: [
    { label: 'TEACHING', items: [
      { icon: 'bi-grid', label: 'Dashboard', page: 'dashboard' },
      { icon: 'bi-inbox', label: 'Inbox', page: 'inbox' },
      { icon: 'bi-file-earmark-text', label: 'Question Papers', page: 'qpgen' },
      { icon: 'bi-people', label: 'Students', page: 'students' },
      { icon: 'bi-calendar-check', label: 'Attendance', page: 'attendance' },
      { icon: 'bi-folder2', label: 'Documents', page: 'documents' },
      { icon: 'bi-award', label: 'Results', page: 'results' },
    ]},
    { label: 'COMMUNICATIONS', items: [
      { icon: 'bi-chat-text', label: 'Complaints & Chats', page: 'communications' },
      { icon: 'bi-megaphone', label: 'Announcements', page: 'announcements' }
    ]},
    { label: 'FACILITIES', items: [
      { icon: 'bi-house-door', label: 'Accommodation/Hostel', page: 'accommodation' },
      { icon: 'bi-bus-front', label: 'Transport Details', page: 'transport' }
    ]}
  ],
  HOD: [
    { label: 'DEPARTMENT', items: [
      { icon: 'bi-grid', label: 'Dashboard', page: 'dashboard' },
      { icon: 'bi-inbox', label: 'Inbox', page: 'inbox' },
      { icon: 'bi-file-earmark-text', label: 'Question Papers', page: 'qpgen' },
      { icon: 'bi-person-badge', label: 'Teachers/Staffs', page: 'teachers' },
      { icon: 'bi-people', label: 'Students', page: 'students' },
      { icon: 'bi-award', label: 'Results', page: 'results' },
      { icon: 'bi-folder2', label: 'Documents', page: 'documents' },
    ]},
    { label: 'COMMUNICATIONS', items: [
      { icon: 'bi-chat-text', label: 'Complaints & Chats', page: 'communications' },
      { icon: 'bi-megaphone', label: 'Announcements', page: 'announcements' }
    ]},
    { label: 'FACILITIES', items: [
      { icon: 'bi-house-door', label: 'Accommodation/Hostel', page: 'accommodation' },
      { icon: 'bi-bus-front', label: 'Transport Details', page: 'transport' }
    ]}
  ],
  Principal: [
    { label: 'PRINCIPAL', items: [
      { icon: 'bi-grid', label: 'Dashboard', page: 'dashboard' },
      { icon: 'bi-inbox', label: 'Inbox', page: 'inbox' },
      { icon: 'bi-person-badge', label: 'Teachers/Staffs', page: 'teachers' },
      { icon: 'bi-folder2', label: 'Documents', page: 'documents' },
      { icon: 'bi-bar-chart-line', label: 'Reports', page: 'reports' }
    ]},
    { label: 'COMMUNICATIONS', items: [
      { icon: 'bi-chat-dots', label: 'Communication Panel', page: 'communications' },
      { icon: 'bi-megaphone', label: 'Announcements', page: 'announcements' }
    ]},
    { label: 'FACILITIES', items: [
      { icon: 'bi-house-door', label: 'Accommodation/Hostel', page: 'accommodation' },
      { icon: 'bi-bus-front', label: 'Transport Details', page: 'transport' }
    ]},
    { label: 'SYSTEM', items: [
      { icon: 'bi-gear', label: 'Settings', page: 'settings' },
    ]}
  ],
  'Exam Cell Staff': [
    { label: 'EXAM CELL', items: [
      { icon: 'bi-grid', label: 'Dashboard', page: 'dashboard' },
      { icon: 'bi-inbox', label: 'Inbox', page: 'inbox' },
      { icon: 'bi-calendar3', label: 'Exam Scheduler', page: 'exam-scheduler' },
      { icon: 'bi-folder2', label: 'Documents', page: 'documents' },
      { icon: 'bi-bar-chart-line', label: 'Reports', page: 'reports' },
    ]},
    { label: 'COMMUNICATIONS', items: [
      { icon: 'bi-chat-dots', label: 'Communication Panel', page: 'communications' },
      { icon: 'bi-megaphone', label: 'Announcements', page: 'announcements' }
    ]},
    { label: 'FACILITIES', items: [
      { icon: 'bi-house-door', label: 'Accommodation/Hostel', page: 'accommodation' },
      { icon: 'bi-bus-front', label: 'Transport Details', page: 'transport' }
    ]}
  ]
};
