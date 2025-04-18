import React from 'react'; 
import { FiUsers, FiAward, FiGlobe, FiClock, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  const styles = {
    hero: {
      backgroundColor: '#2F855A',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionHeading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#2d3748',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '40px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      margin: '20px 0',
    },
    timelineItem: {
      borderLeft: '3px solid #2F855A',
      padding: '20px 30px',
      margin: '0 0 30px 30px',
      position: 'relative',
    },
    iconWrapper: {
      backgroundColor: '#f0fff4',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
    },
    teamMember: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    sectionHeading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#2d3748',
      textAlign: 'center'
    },
    iconWrapper: {
      marginBottom: '15px'
    }
  };

  const team = [
    { name: 'Danish Anwar', role: 'CEO', photo: '/team1.jpg' },
    { name: 'Ehtesham Ahmed', role: 'CTO', photo: '/team2.jpg' },
    { name: 'Danish Anwar', role: 'Lead Developer', photo: '/team3.jpg' },
    { name: 'Nehal Ahmed', role: 'Project Manager', photo: '/team4.jpg' },
  ];

  // Updated journey timeline for a startup launched in 2025
  const journeyTimeline = [
    {
      year: 2025,
      message: 'Startup launched with a visionary team and innovative ideas.',
    },
    // {
    //   year: 2026,
    //   message: 'Achieved our first milestone and secured seed funding.',
    // },
    // {
    //   year: 2027,
    //   message: 'Launched our flagship product and expanded our market reach.',
    // },
    // {
    //   year: 2028,
    //   message: 'Established strategic partnerships and scaled operations.',
    // },
  ];

  const values = [
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'Relentlessly pursuing excellence, we set high standards and consistently surpass expectations through innovation and continuous improvement.'
    },
    {
      icon: <FiUsers />,
      title: 'Collaboration',
      description: 'Collaboration is at the heart of our success – by uniting diverse talents, we achieve collective victories and elevate every project.'
    },
    {
      icon: <FiGlobe />,
      title: 'Innovation',
      description: 'We embrace change and spark forward-thinking solutions that tackle tomorrow’s challenges today.'
    },
    {
      icon: <FiClock />,
      title: 'Reliability',
      description: 'Our unwavering commitment to reliability ensures consistent performance and builds trust in everything we do.'
    }
  ];

  const handleContact = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  return (
    <div style={{ backgroundColor: '#fff5e6', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
            About Our Company
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
            Pioneering technology solutions since 2025
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={styles.container}>
          <div style={styles.card}>
            <h2 style={styles.sectionHeading}>Our Journey</h2>
            <div style={{ lineHeight: '1.6', color: '#4a5568' }}>
              <p>
              At Code Qalb, a dynamic tech startup founded in 2025, we empower small businesses to thrive in the digital era. Our journey, marked by rapid growth and relentless innovation, has transformed us from a modest startup into a forward-thinking technology partner. We’re committed to driving digital transformation with cutting-edge solutions designed to accelerate your business growth.
              </p>
              
              <div style={{ margin: '40px 0' }}>
                {journeyTimeline.map((item, index) => (
                  <div key={index} style={styles.timelineItem}>
                    <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>{item.year}</h3>
                    <p style={{ color: '#4a5568' }}>{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={styles.container}>
        <h2 style={styles.sectionHeading}>Our Core Values</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}
        >
          {values.map((value, index) => (
            <div key={index} style={{ textAlign: 'center', padding: '20px' }}>
              <div style={styles.iconWrapper}>
                {React.cloneElement(value.icon, { style: { fontSize: '1.5rem', color: '#2F855A' } })}
              </div>
              <h3 style={{ color: '#2d3748', marginBottom: '15px' }}>{value.title}</h3>
              <p style={{ color: '#4a5568' }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Team Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionHeading, textAlign: 'center' }}>Meet Our Team</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}>
            {team.map((member, index) => (
              <div key={index} style={styles.teamMember}>
                <img 
                  src={member.photo} 
                  alt={member.name}
                  style={{ 
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '20px'
                  }}
                />
                <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>{member.name}</h3>
                <p style={{ color: '#4a5568', marginBottom: '15px' }}>{member.role}</p>
                {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <FiLinkedin style={{ color: '#2F855A', cursor: 'pointer' }} />
                  <FiTwitter style={{ color: '#2F855A', cursor: 'pointer' }} />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#2F855A' }}>
        <div style={{ ...styles.container, textAlign: 'center' }}>
          <h2 style={{ ...styles.sectionHeading, color: 'white' }}>
            Want to Join Our Team?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#e2e8f0' }}>
            We're always looking for talented individuals to join our growing team.
          </p>
          <Link to="/career">
            <button style={{ 
              backgroundColor: 'white',
              color: '#2F855A',
              padding: '15px 40px',
              borderRadius: '25px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}>
              View Open Positions
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
