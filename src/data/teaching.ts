export interface TeachingItem {
  course: string;
  role: string;
  institution: string;
  time: string;
  notes?: string;
}

export interface SupervisionItem {
  student: string;
  degree: string;
  institution: string;
  time: string;
  thesisTitle?: string;
  coSupervision?: string;
}

export const teachingItems: TeachingItem[] = [
  {
    course: 'Secure and Robust AI Model Development (DAT945)',
    role: 'Guest Lecturer',
    institution: 'University of Stavanger',
    time: 'Fall 2025',
  },
  {
    course: 'Security and Vulnerability in Networks (DAT510)',
    role: 'Teaching Assistant',
    institution: 'University of Stavanger',
    time: 'Fall 2024',
  },
  {
    course: 'Blockchain Technologies and Application (DAT655)',
    role: 'Teaching Assistant',
    institution: 'University of Stavanger',
    time: 'Spring 2024',
  },
  {
    course: 'Big Data Analytics Programming (GSI7633)',
    role: 'Lecturer',
    institution: 'Yonsei University',
    time: 'Spring 2022',
  },
  {
    course: 'AI Application (GSI7674)',
    role: 'Lecturer',
    institution: 'Yonsei University',
    time: 'Spring 2022',
  },
  {
    course: 'Machine Learning (GSI7645)',
    role: 'Lecturer',
    institution: 'Yonsei University',
    time: 'Spring 2021',
  },
  {
    course: 'Big Data Analytics Programming (GSI7633-2)',
    role: 'Lecturer',
    institution: 'Yonsei University',
    time: 'Spring 2021',
  },
  {
    course: 'Big Data Analytics Programming (GSI7633-1)',
    role: 'Lecturer',
    institution: 'Yonsei University',
    time: 'Spring 2021',
  },
  {
    course: 'Unstructured Data Analysis (GSI7622)',
    role: 'Lecturer',
    institution: 'Yonsei University',
    time: 'Fall 2020',
  },
  {
    course: 'Big Data Analytics Programming (GSI7564)',
    role: 'Lecturer',
    institution: 'Yonsei University',
    time: 'Fall 2020',
  },
  {
    course: 'Data Intensive System (DAT500)',
    role: 'Student Assistant',
    institution: 'University of Stavanger',
    time: 'Spring 2019',
  },
  {
    course: 'Web Programming (DAT310)',
    role: 'Student Assistant',
    institution: 'University of Stavanger',
    time: 'Spring 2018',
  },
];

export const supervisionItems: SupervisionItem[] = [
  {
    student: 'Espen Sele',
    degree: "Master's Thesis",
    institution: 'University of Stavanger',
    time: '2025',
    thesisTitle: 'Leveraging Symmetric Neural Cryptography with Homomorphic Properties in Federated Learning',
    coSupervision: 'Co-supervised with Prof. Ferhat Ozgur Catak',
  },
  {
    student: 'Mina Cecilie Woien',
    degree: "Master's Thesis",
    institution: 'University of Stavanger',
    time: '2024',
    thesisTitle: 'Asymmetric Neural Cryptography with Homomorphic and Probabilistic Properties',
    coSupervision: 'Co-supervised with Prof. Ferhat Ozgur Catak',
  },
];
