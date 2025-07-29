function CourseCard({ title, desc, details, img }) {
  return (
    <div className="course-card" style={{
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(124,58,237,0.07)',
      padding: '0 0 24px 0',
      width: '320px',
      marginBottom: '16px'
    }}>
      <img src={img} alt={title} style={{
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '12px 12px 0 0',
        marginBottom: '18px'
      }} />
      <div style={{ padding: '0 24px' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>{title}</h3>
        <p style={{ fontSize: '0.98rem', color: '#555', marginBottom: '16px' }}>{desc}</p>
        <ul style={{ padding: 0, marginBottom: '18px', listStyle: 'none' }}>
          {details.map((d, i) => (
            <li key={i} style={{ fontSize: '0.95rem', color: '#222', marginBottom: '6px' }}>{d}</li>
          ))}
        </ul>
        <button style={{
          background: '#7c3aed',
          color: '#fff',
          border: 'none',
          borderRadius: '24px',
          padding: '10px 0',
          width: '100%',
          fontWeight: 600,
          fontSize: '1rem',
          cursor: 'pointer'
        }}>Learn More</button>
      </div>
    </div>
  )
}
export default CourseCard