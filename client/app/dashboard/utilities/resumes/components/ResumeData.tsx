// ResumeData.ts

export interface Resume {
    id: number;
    name: string;
    phone: string;
    date: string;
    experience: number;
    resume: string;
    status: string;
  }
  
  export const Resumes: Resume[] = [
    { id: 1, name: 'Christine Brooks', phone: '+91-9876543210', date: '04 Sep 2023', experience: 1, resume: 'Resume1.pdf', status: 'Qualified' },
    { id: 2, name: 'Rosie Pearson', phone: '+91-9876543210', date: '28 May 2023', experience: 5, resume: 'Resume1.pdf', status: 'On Hold' },
    { id: 3, name: 'Darrell Caldwell', phone: '+91-9876543210', date: '23 Nov 2023', experience: 3, resume: 'Resume1.pdf', status: 'Rejected' },
    { id: 4, name: 'Gilbert Johnston', phone: '+91-9876543210', date: '05 Feb 2023', experience: 2, resume: 'Resume1.pdf', status: 'Qualified' },
    { id: 5, name: 'Alan Cain', phone: '+91-9876543210', date: '29 Jul 2023', experience: 4, resume: 'Resume1.pdf', status: 'Rejected' },
    { id: 6, name: 'Alfred Murray', phone: '+91-9876543210', date: '15 Aug 2023', experience: 5, resume: 'Resume1.pdf', status: 'Qualified' },
    { id: 7, name: 'Maggie Sullivan', phone: '+91-9876543210', date: '21 Dec 2023', experience: 7, resume: 'Resume1.pdf', status: 'Rejected' },
    { id: 8, name: 'Rosie Todd', phone: '+91-9876543210', date: '30 Apr 2023', experience: 3, resume: 'Resume1.pdf', status: 'On Hold' },
    { id: 9, name: 'Dollie Hines', phone: '+91-9876543210', date: '09 Jan 2023', experience: 3, resume: 'Resume1.pdf', status: 'On Hold' },
  ];
  