import { Box, Container, Typography, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const interests = [
  { icon: <CodeIcon />, label: 'Web Development' },
  { icon: <PaletteIcon />, label: 'UI/UX Design' },
  { icon: <MenuBookIcon />, label: 'Data Analysis' },
  { icon: <SelfImprovementIcon />, label: 'Problem Solving' },
  { icon: <FavoriteIcon />, label: 'Learning' },
];

export default function About() {
  return (
    <Box
      id="about"
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
            mb: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
          }}
        >
          About Me
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          {/* Left - Text Content */}
          <Box sx={{ flex: 1, pr: { md: 4 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: '600',
                mb: 3,
                color: '#333',
              }}
            >
              Hey, I'm <span style={{ color: '#667eea' }}>Rhea Mewadhari</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              I'm a passionate developer, designer, and data analyst who loves turning ideas into reality through code and creativity. When I'm not building cool stuff, you'll find me exploring new technologies, creating beautiful designs, or diving deep into data insights.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: '1rem',
                color: '#888',
                fontStyle: 'italic',
                mb: 4,
                p: 2,
                bgcolor: 'rgba(102, 126, 234, 0.1)',
                borderLeft: '4px solid #667eea',
                borderRadius: '4px',
              }}
            >
              "I'm not lazy, I'm just on energy-saving mode." ✨
            </Typography>
          </Box>

          {/* Right - Interests Grid */}
          <Box sx={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {interests.map((interest, index) => (
              <Paper
                key={index}
                sx={{
                  width: 'calc(50% - 8px)',
                  p: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)',
                  },
                }}
                elevation={4}
              >
                <Box sx={{ fontSize: '2.5rem', mb: 1 }}>
                  {interest.icon}
                </Box>
                <Typography variant="body2" sx={{ fontWeight: '600' }}>
                  {interest.label}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}