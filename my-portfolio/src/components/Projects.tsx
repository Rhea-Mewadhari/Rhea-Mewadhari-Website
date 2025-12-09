import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'VITA (Virtual Interactive Treatment Advisor)',
    description: 'An AI healthcare chatbot for remote communities',
    icon: '🏥',
    tags: ['AI', 'Healthcare', 'Python'],
    link: 'https://github.com/Rhea-Mewadhari/Supernova_Call_for_Code',
  },
  {
    id: 2,
    title: 'UrbanLens',
    description: 'An app that uses geospatial data to evaluate green spaces and assess air quality in cities.',
    icon: '🌍',
    tags: ['Geospatial', 'Data Science', 'Web App'],
    link: 'https://github.com/Rhea-Mewadhari/UrbanLens',
  },
  {
    id: 3,
    title: 'Create Own Neural Network',
    description: 'Creating A Neural network to classify flower species.',
    icon: '🌸',
    tags: ['ML', 'Python', 'Neural Networks'],
    link: 'https://github.com/Rhea-Mewadhari/Create-My-Own-Neural-Network',
  },
  {
    id: 4,
    title: 'Dog Classifier',
    description: 'A CLI application that distinguishes dogs from not dogs, as well as classifies dog breeds.',
    icon: '🐕',
    tags: ['Computer Vision', 'Python', 'AI'],
    link: 'https://github.com/Rhea-Mewadhari/Dog-Classifier-with-Pretrained-Neural-Network',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Box
      id="projects"
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
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
          }}
        >
          Projects
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            color: '#aaa',
            textAlign: 'center',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          With a strong foundation in programming, data science, and AI, I love creating innovative solutions that improve accessibility and sustainability. I'm excited about the potential to drive meaningful change through technology. Here are some of my recent projects:
        </Typography>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr',
            },
            gap: 3,
          }}
        >
          {projectsData.map((project) => (
            <Paper
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: hoveredId === project.id ? 'translateY(-15px) scale(1.02)' : 'translateY(0)',
                boxShadow:
                  hoveredId === project.id
                    ? '0 20px 60px rgba(102, 126, 234, 0.4)'
                    : '0 5px 20px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: hoveredId === project.id ? '100%' : '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  transition: 'left 0.6s ease',
                },
              }}
              elevation={0}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <Box
                  sx={{
                    fontSize: '3rem',
                    mb: 2,
                    transition: 'transform 0.3s ease',
                    transform: hoveredId === project.id ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                  }}
                >
                  {project.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '700',
                    color: hoveredId === project.id ? '#667eea' : 'white',
                    mb: 1,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: '#bbb',
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(102, 126, 234, 0.2)',
                        color: '#667eea',
                        fontWeight: '600',
                        border: '1px solid #667eea',
                      }}
                    />
                  ))}
                </Box>

                {/* Links */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    opacity: hoveredId === project.id ? 1 : 0.7,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Box
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#667eea',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#764ba2',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                    View on GitHub
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}