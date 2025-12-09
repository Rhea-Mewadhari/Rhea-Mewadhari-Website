import { Box, Container, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import { SiReact, SiDotnet, SiPython, SiJavascript, SiCplusplus, SiMysql, SiAmazon, SiLangchain } from 'react-icons/si';

const languageSkills = [
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'C++', icon: SiCplusplus },
  { name: 'SQL', icon: SiMysql },
];

const frameworkSkills = [
  { name: 'React', icon: SiReact },
  { name: '.NET (C#)', icon: SiDotnet },
  { name: 'AWS Strands', icon: SiAmazon },
  { name: 'LangChain', icon: SiLangchain },
];

const specializationSkills = [
  { name: 'Data Science', level: 80 },
  { name: 'AI/ML', level: 75 },
  { name: 'Data Structures & Algorithms', level: 90 },
  { name: 'Web Development', level: 70 },
  { name: 'UI/UX Design', level: 75 },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Box
      id="skills"
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
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
          Skills
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            color: '#555',
            textAlign: 'center',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          My academic background has equipped me with a solid foundation in computer science. Here are some of my technical skills.
        </Typography>

        {/* Languages Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#667eea',
              mb: 4,
              textAlign: 'center',
            }}
          >
            Languages
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 3,
            }}
          >
            {languageSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Paper
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: hoveredSkill === skill.name ? 'translateY(-10px) scale(1.05)' : 'translateY(0)',
                    boxShadow: hoveredSkill === skill.name ? '0 15px 40px rgba(102, 126, 234, 0.3)' : '0 5px 15px rgba(0,0,0,0.1)',
                  }}
                  elevation={0}
                >
                  <Box
                    sx={{
                      fontSize: '3rem',
                      mb: 2,
                      color: '#667eea',
                      transition: 'all 0.3s ease',
                      transform: hoveredSkill === skill.name ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                    }}
                  >
                    <IconComponent />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: '600',
                      color: hoveredSkill === skill.name ? '#667eea' : '#333',
                      transition: 'color 0.3s ease',
                      textAlign: 'center',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        </Box>

        {/* Frameworks & Technologies Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#667eea',
              mb: 4,
              textAlign: 'center',
            }}
          >
            Frameworks & Technologies
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 3,
            }}
          >
            {frameworkSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Paper
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: hoveredSkill === skill.name ? 'translateY(-10px) scale(1.05)' : 'translateY(0)',
                    boxShadow: hoveredSkill === skill.name ? '0 15px 40px rgba(102, 126, 234, 0.3)' : '0 5px 15px rgba(0,0,0,0.1)',
                  }}
                  elevation={0}
                >
                  <Box
                    sx={{
                      fontSize: '3rem',
                      mb: 2,
                      color: '#667eea',
                      transition: 'all 0.3s ease',
                      transform: hoveredSkill === skill.name ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                    }}
                  >
                    <IconComponent />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: '600',
                      color: hoveredSkill === skill.name ? '#667eea' : '#333',
                      transition: 'color 0.3s ease',
                      textAlign: 'center',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        </Box>

        {/* Specializations Section */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#667eea',
              mb: 4,
              textAlign: 'center',
            }}
          >
            Specializations
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            {specializationSkills.map((skill) => (
              <Box
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: hoveredSkill === skill.name ? 'translateX(8px)' : 'translateX(0)',
                }}
              >
                {/* Skill Name & Percentage */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: '600',
                      color: hoveredSkill === skill.name ? '#667eea' : '#333',
                      transition: 'color 0.3s ease',
                      fontSize: '1rem',
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: '700',
                      color: '#667eea',
                      fontSize: '0.9rem',
                      bgcolor: 'rgba(102, 126, 234, 0.1)',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '12px',
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>

                {/* Progress Bar */}
                <Box
                  sx={{
                    position: 'relative',
                    height: '8px',
                    bgcolor: 'rgba(102, 126, 234, 0.15)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      width: hoveredSkill === skill.name ? `${skill.level}%` : `${skill.level * 0.7}%`,
                      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '10px',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      boxShadow: hoveredSkill === skill.name ? '0 0 15px rgba(102, 126, 234, 0.6)' : 'none',
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}