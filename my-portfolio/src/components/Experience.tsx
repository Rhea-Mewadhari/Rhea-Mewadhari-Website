import { Box, Container, Typography, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { useState } from 'react';

const experienceData = [
  {
    id: 1,
    year: '2025',
    company: 'Games Global',
    position: 'Graduate Developer',
    duration: 'January - May 2025',
    description: 'Starting my professional journey as a Graduate Developer, contributing to game development and software solutions.',
    highlights: [
      'Developing robust game features and systems',
      'Collaborating with cross-functional teams',
      'Writing clean, maintainable code',
      'Participating in code reviews and best practices',
    ],
    icon: '🎮',
  },
  {
    id: 2,
    year: '2025',
    company: 'Tech Company',
    position: 'Software Developer Level 1',
    duration: 'June 2025 - Present',
    description: 'Contributing to innovative software solutions and enterprise applications.',
    highlights: [
      'Building full-stack web applications',
      'Implementing new features based on requirements',
      'Debugging and optimizing application performance',
      'Collaborating with senior developers and architects',
    ],
    icon: '💻',
  },
  {
    id: 3,
    year: '2024',
    company: 'Call for Code hosted by IBM',
    position: 'Team Lead',
    duration: 'March - October 2024',
    description: 'Led a team in developing VITA, an AI healthcare chatbot for remote communities.',
    highlights: [
      'Planned and supervised project objectives and team meetings to meet deadlines',
      'Curated a comprehensive repository of validated medical treatments with medical practitioners',
      'Developed and implemented three distinct models for image quality and diagnostic accuracy',
      'Successfully implemented a RAG system for natural conversations with the chatbot',
    ],
    icon: '🏥',
  },
  {
    id: 4,
    year: '2024',
    company: 'IBM TechXchange',
    position: 'Developer',
    duration: 'September 2024 (10 days)',
    description: 'Contributed to UrbanLens project, focusing on environmental data and sustainability metrics.',
    highlights: [
      'Curated comprehensive strategy for retrieving urban and environmental metrics',
      'Developed and implemented project strategy and user flow within the web app',
      'Successfully implemented a RAG system for accurate and up-to-date metrics access',
    ],
    icon: '🌍',
  },
  {
    id: 5,
    year: '2024',
    company: 'Udacity Nanodegree (Sponsored by AWS)',
    position: 'Student',
    duration: 'June - August 2024',
    description: 'Completed intensive AWS Cloud Development Nanodegree ahead of schedule.',
    highlights: [
      'Completed all tasks and projects two months ahead of schedule',
      'Concurrently completed nanodegree while pursuing BSc IT',
      'Undertook additional dynamic data science analysis using Python, Pandas, and Matplotlib',
      'Earned praise from session lead for exceptional work quality',
    ],
    icon: '☁️',
  },
];

export default function Experience() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Box
      id="experience"
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Experience
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              color: '#aaa',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Here's my professional journey and academic experiences.
          </Typography>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {experienceData.map((exp, index) => (
            <Box
              key={exp.id}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              sx={{
                display: 'flex',
                gap: 3,
                mb: 4,
                position: 'relative',
              }}
            >
              {/* Timeline Dot & Line */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: '20px',
                    height: '20px',
                    bgcolor: hoveredId === exp.id ? '#667eea' : 'rgba(102, 126, 234, 0.5)',
                    border: '3px solid #2d2d44',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredId === exp.id ? '0 0 15px rgba(102, 126, 234, 0.6)' : 'none',
                    mt: 1,
                  }}
                />
                {index < experienceData.length - 1 && (
                  <Box
                    sx={{
                      width: '2px',
                      height: '200px',
                      bgcolor: 'rgba(102, 126, 234, 0.2)',
                      mt: 1,
                    }}
                  />
                )}
              </Box>

              {/* Content Card */}
              <Paper
                sx={{
                  flex: 1,
                  p: 4,
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                  border: '1px solid rgba(102, 126, 234, 0.3)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  transform: hoveredId === exp.id ? 'translateX(20px)' : 'translateX(0)',
                  boxShadow:
                    hoveredId === exp.id
                      ? '0 20px 60px rgba(102, 126, 234, 0.4)'
                      : '0 5px 20px rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden',
                  position: 'relative',
                  mb: 2,
                }}
                elevation={0}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  {/* Year Badge */}
                  <Box
                    sx={{
                      display: 'inline-block',
                      bgcolor: 'rgba(102, 126, 234, 0.2)',
                      color: '#667eea',
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      mb: 2,
                    }}
                  >
                    {exp.year}
                  </Box>

                  {/* Icon & Title */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Typography variant="h4" sx={{ color: '#667eea' }}>
                      {exp.icon}
                    </Typography>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: '700',
                          transition: 'color 0.3s ease',
                          color: hoveredId === exp.id ? '#667eea' : 'white',
                        }}
                      >
                        {exp.position}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#aaa',
                          fontWeight: '600',
                        }}
                      >
                        {exp.company}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Duration */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#888',
                      display: 'block',
                      mb: 2,
                      fontStyle: 'italic',
                    }}
                  >
                    {exp.duration}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#bbb',
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {exp.description}
                  </Typography>

                  {/* Highlights */}
                  <Box
                    sx={{
                      maxHeight: hoveredId === exp.id ? '500px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                    }}
                  >
                    <Box sx={{ mt: 2, pl: 2, borderLeft: '2px solid rgba(102, 126, 234, 0.5)' }}>
                      {exp.highlights.map((highlight, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            color: '#aaa',
                            mb: 1,
                            fontSize: '0.95rem',
                            '&:before': {
                              content: '"✓ "',
                              color: '#667eea',
                              fontWeight: 'bold',
                              mr: 1,
                            },
                          }}
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}