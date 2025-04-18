
import React, { useState, useEffect } from 'react';
import {
  FiSearch,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiUsers,
  FiCloud,
  FiGlobe
} from 'react-icons/fi';
import { SiEthereum } from 'react-icons/si';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const services = [
  {
    icon: <FiCode style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
    title: 'Web Development',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'CMS Integration',
      'API Development',
      'Website Maintenance'
    ],
    tech: ['React', 'Node.js', 'Python', 'WordPress', 'MongoDB']
  },
  {
    icon: <FiSmartphone style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
    title: 'Mobile App Development',
    features: [
      'iOS & Android Apps',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Testing & Deployment',
      'Maintenance & Updates'
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    icon: <FiDatabase style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
    title: 'Software Development',
    features: [
      'Custom Software Solutions',
      'ERP Systems',
      'CRM Development',
      'Cloud Integration',
      'Legacy System Modernization'
    ],
    tech: ['Java', '.NET', 'Docker', 'AWS', 'MySQL']
  },
  {
    icon: <FiUsers style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
    title: 'IT Consulting',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'IT Infrastructure Audit',
      'Cybersecurity Consulting',
      'Project Management'
    ],
    tech: ['ITIL', 'COBIT', 'NIST', 'GDPR', 'ISO 27001']
  },
  {
    icon: <FiCloud style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
    title: 'Cloud Services',
    features: [
      'Cloud Migration',
      'Server Management',
      'Cloud Security',
      'DevOps Automation',
      '24/7 Monitoring'
    ],
    tech: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform']
  },
  {
    icon: <SiEthereum style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
    title: 'Blockchain Development',
    features: [
      'Smart Contract Development',
      'Decentralized Applications (dApps)',
      'Security Auditing',
      'DeFi Solutions',
      'NFT Platform Development'
    ],
    tech: ['Ethereum', 'Solidity', 'Truffle', 'Hyperledger', 'IPFS']
  },
  {
    icon: <FiGlobe style={{ fontSize: '2.5rem', color: '#2F855A' }} />,
    title: 'Digital Marketing',
    features: [
      'SEO & SEM Strategies',
      'Content Marketing',
      'Email Campaigns',
      'Social Media Management',
      'Analytics & Reporting'
    ],
    tech: ['Google Ads', 'Facebook Ads', 'SEMrush', 'Mailchimp', 'HubSpot']
  }
];

const jobs = [
  {
    id: 1,
    category: 'Web Development',
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'We are looking for an experienced React developer to join our team...'
  },
  {
    id: 2,
    category: 'Mobile App Development',
    title: 'React Native Developer',
    type: 'Full-time',
    location: 'Onsite',
    department: 'Mobile',
    description: 'Join our mobile team to build native and cross-platform applications...'
  },
  {
    id: 3,
    category: 'Software Development',
    title: 'Backend Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Software',
    description: 'Expert in Node.js and Python for building scalable server-side applications...'
  },
  {
    id: 4,
    category: 'IT Consulting',
    title: 'IT Consultant',
    type: 'Contract',
    location: 'Remote',
    department: 'Consulting',
    description: 'Provide strategic IT consulting and project management services...'
  },
  {
    id: 5,
    category: 'Cloud Services',
    title: 'Cloud Architect',
    type: 'Full-time',
    location: 'Hybrid',
    department: 'Cloud',
    description: 'Design and manage robust cloud infrastructures across multiple platforms...'
  },
  {
    id: 6,
    category: 'Blockchain Development',
    title: 'Blockchain Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Develop smart contracts and decentralized applications using blockchain technology...'
  },
  {
    id: 7,
    category: 'Digital Marketing',
    title: 'Digital Marketing Specialist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Marketing',
    description: 'Develop and execute digital marketing strategies across SEO, SEM, social media, and email to drive engagement.'
  },
  {
    id: 8,
    category: 'Digital Marketing',
    title: 'SEO Manager',
    type: 'Contract',
    location: 'Onsite',
    department: 'Marketing',
    description: 'Lead our SEO efforts to improve search rankings, optimize on‑page content, and manage backlink strategies.'
  }
];

const perks = [
  { icon: <FiBriefcase />, title: 'Flexible Hours', description: 'Work when you\'re most productive' },
  { icon: <FiDollarSign />, title: 'Competitive Salary', description: 'We offer attractive compensation' },
  { icon: <FiUsers />, title: 'Great Team', description: 'Collaborate with talented professionals' },
  { icon: <FiCloud />, title: 'Remote Options', description: 'Work from anywhere for many positions' }
];

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ department: '', type: '' });
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [formData, setFormData] = useState({ name: '', email: '', resume: null });

  useEffect(() => {
    const results = jobs.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = filters.department ? job.department === filters.department : true;
      const matchesType = filters.type ? job.type === filters.type : true;
      return matchesSearch && matchesDept && matchesType;
    });
    setFilteredJobs(results);
  }, [searchTerm, filters]);

  const groupedJobs = filteredJobs.reduce((groups, job) => {
    (groups[job.category] = groups[job.category] || []).push(job);
    return groups;
  }, {});

  const handleApply = job => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleInputChange = e => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const message = `New Application for ${selectedJob.title}:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n*Please attach the resume file to this message*\n\nJob Details:\nTitle: ${selectedJob.title}\nType: ${selectedJob.type}\nLocation: ${selectedJob.location}\nDepartment: ${selectedJob.department}`;
    const whatsappUrl = `https://wa.me/6389616657?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', resume: null });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0fff4' }}>
      {/* Hero */}
      <div style={{
        backgroundColor: '#2F855A',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to right, #2F855A, #38A169)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Build the Future with Us</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '32px', maxWidth: '800px', margin: '0 auto' }}>
          Join our team of innovators and shape the tech landscape. We're looking for passionate individuals to help us deliver exceptional services across all our practice areas.
        </p>
      </div>

      {/* Search & Filters */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px 20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop: '-40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              minWidth: '300px',
              padding: '12px 16px',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          />
          <select
            value={filters.department}
            onChange={e => setFilters(f => ({ ...f, department: e.target.value }))}
            style={{
              padding: '12px 16px',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '1rem',
              minWidth: '200px'
            }}
          >
            <option value="">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Mobile">Mobile</option>
            <option value="Software">Software</option>
            <option value="Consulting">Consulting</option>
            <option value="Cloud">Cloud</option>
            <option value="Marketing">Marketing</option>
          </select>
          <select
            value={filters.type}
            onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}
            style={{
              padding: '12px 16px',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '1rem',
              minWidth: '200px'
            }}
          >
            <option value="">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Contract">Contract</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* Job Listings */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        {Object.keys(groupedJobs).length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#4a5568' }}>
              No job openings match your criteria
            </h3>
            <p style={{ color: '#718096' }}>
              Try adjusting your search filters or check back later for new opportunities.
            </p>
          </div>
        ) : (
          Object.entries(groupedJobs).map(([category, jobsInCat]) => {
            const svc = services.find(s => s.title === category);
            return (
              <div key={category} style={{ marginBottom: '60px' }}>
                {/* Service Detail */}
                {svc && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    marginBottom: '40px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    borderLeft: '4px solid #2F855A'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{
                        backgroundColor: '#ebf8ff',
                        padding: '16px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {React.cloneElement(svc.icon, { style: { fontSize: '2.5rem', color: '#2F855A' } })}
                      </div>
                      <h2 style={{
                        fontSize: '1.75rem',
                        fontWeight: 'bold',
                        color: '#2F855A',
                        margin: 0
                      }}>{svc.title}</h2>
                    </div>
                    <div style={{
                      display: 'grid',
                      gap: '32px',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: '600',
                          marginBottom: '16px',
                          color: '#2d3748'
                        }}>What We Offer</h3>
                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px'
                        }}>
                          {svc.features.map((f, i) => (
                            <li key={i} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              color: '#4a5568'
                            }}>
                              <span style={{ color: '#2F855A', marginTop: '2px' }}>•</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: '600',
                          marginBottom: '16px',
                          color: '#2d3748'
                        }}>Technologies We Use</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {svc.tech.map((t, i) => (
                            <span key={i} style={{
                              backgroundColor: '#f0fff4',
                              color: '#22543d',
                              padding: '6px 12px',
                              borderRadius: '20px',
                              fontSize: '0.875rem',
                              fontWeight: '500',
                              border: '1px solid #c6f6d5'
                            }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Jobs Grid */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#2d3748',
                  paddingBottom: '8px',
                  borderBottom: '2px solid #e2e8f0'
                }}>
                  Current Openings in {category}
                </h3>
                <div style={{
                  display: 'grid',
                  gap: '24px',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))'
                }}>
                  {jobsInCat.map(job => (
                    <div key={job.id} style={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      padding: '24px',
                      border: '1px solid #edf2f7'
                    }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: '12px',
                        color: '#2d3748'
                      }}>{job.title}</h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        color: '#4a5568',
                        marginBottom: '16px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}>
                          <FiMapPin /> {job.location}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}>
                          <FiClock /> {job.type}
                        </span>
                      </div>
                      <p style={{ color: '#4a5568', marginBottom: '24px', lineHeight: 1.5 }}>
                        {job.description}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                          backgroundColor: '#ebf8ff',
                          color: '#2b6cb0',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>{job.department}</span>
                        <button
                          onClick={() => handleApply(job)}
                          style={{
                            backgroundColor: '#2F855A',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: '500'
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Perks */}
      <div style={{
        margin: '80px auto 40px',
        maxWidth: '1200px',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '48px 32px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '40px',
          textAlign: 'center',
          color: '#2F855A'
        }}>Why Join Our Team?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          {perks.map((perk, i) => (
            <div key={i} style={{
              padding: '24px',
              backgroundColor: '#f7faf7',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#2F855A' }}>
                {perk.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#2d3748' }}>
                {perk.title}
              </h3>
              <p style={{ color: '#4a5568', lineHeight: 1.5 }}>
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            maxWidth: '500px',
            margin: 'auto',
            padding: '32px',
            borderRadius: '12px',
            border: 'none',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          },
          overlay: { backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }
        }}
      >
        <h2 style={{ marginBottom: '8px', color: '#2d3748' }}>
          Apply for {selectedJob?.title}
        </h2>
        <p style={{ marginBottom: '24px', color: '#718096' }}>
          {selectedJob?.department} • {selectedJob?.location}
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: 500 }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: 500 }}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            />
          </div>
          <div style={{
            backgroundColor: '#f0fff4',
            padding: '16px',
            borderRadius: '8px',
            border: '1px dashed #c6f6d5',
            textAlign: 'center'
          }}>
            <p style={{ marginBottom: '12px', fontWeight: 500, color: '#22543d' }}>
              Please send your resume via WhatsApp
            </p>
            <p style={{ fontSize: '0.875rem', color: '#718096' }}>
              After submitting, you’ll be redirected where you can attach your resume.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                flex: 1,
                backgroundColor: '#2F855A',
                color: 'white',
                padding: '12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              Continue to WhatsApp
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
