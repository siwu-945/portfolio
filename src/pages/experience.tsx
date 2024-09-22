import React from 'react'

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  padding: '2rem',
}

const cardStyle = {
  backgroundColor: '#dfcdcd',
  borderRadius: '8px',
  padding: '1.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
}

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Susquehanna International Group (SIG)',
      url: 'https://www.sig.com/',
      description:
        'Susquehanna has become one of the largest and most successful proprietary trading firms in the world. With deep integration of Trading, Technology, and Quantitative Research',
      role: 'Software Developer',
    },
    {
      id: 2,
      company: 'Bristol Myers Squibb',
      url: 'https://www.bms.com/',
      description:
        'Bristol-Myers Squibb is a global biopharmaceutical company whose mission is to discover, develop and deliver innovative medicines that help patients prevail over serious diseases.',
      role: 'Cloud Developer',
    },
    {
      id: 3,
      company: 'School Teaching Assistant',
      url: '#',
      description:
        'I held weekly office hours, graded assignments, and assist professors in weekly lab sections.',
      role: 'Teaching Assistant',
    },
  ]

  return (
    <div style={containerStyle}>
      {experiences.map((exp) => (
        <div key={exp.id} style={cardStyle}>
          <h2 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '1rem' }}>
            <a href={exp.url} target="_blank">
              {exp.company}
            </a>
          </h2>
          <p style={{ color: '#666', marginBottom: '1rem' }}>{exp.description}</p>
          <p style={{ color: '#0066cc', fontWeight: 'bold' }}>Role: {exp.role}</p>
        </div>
      ))}
    </div>
  )
}
