import { Box, Paper, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

// Example isotope-like items
const items = [
  { id: 1, category: 'dev', label: 'React' },
  { id: 2, category: 'data', label: 'Python' },
  { id: 3, category: 'design', label: 'Figma' },
  { id: 4, category: 'dev', label: 'TypeScript' },
  { id: 5, category: 'data', label: 'SQL' },
  { id: 6, category: 'design', label: 'Adobe XD' },
];

const categories = ['all', 'dev', 'data', 'design'];

export default function Hero() {
  const [filter, setFilter] = useState('all');

  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.category === filter);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'url(/Rhea-Mewadhari-Website/imgs/bg-img4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Typography variant="h2" color="white" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Rhea Mewadhari
        </Typography>
        <Typography variant="h5" color="white" sx={{ mb: 6 }}>
          I am a{' '}
          <span>
            <Typewriter
              options={{
                strings: ['Developer', 'Data Analyst', 'Designer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />
          </span>
        </Typography>

        {/* Filter Buttons */}
        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {categories.map((cat) => (
            <Paper
              key={cat}
              onClick={() => setFilter(cat)}
              sx={{
                display: 'inline-block',
                px: 2,
                py: 1,
                cursor: 'pointer',
                bgcolor: filter === cat ? 'primary.main' : 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                transition: 'all 0.3s',
                border: filter === cat ? '2px solid white' : '2px solid transparent',
                '&:hover': {
                  bgcolor: filter === cat ? 'primary.main' : 'rgba(255, 255, 255, 0.3)',
                  transform: 'scale(1.05)',
                },
              }}
              elevation={filter === cat ? 8 : 2}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Paper>
          ))}
        </Box>

        {/* Isotope Grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          {filteredItems.map((item) => (
            <Paper
              key={item.id}
              sx={{
                px: 4,
                py: 2.5,
                textAlign: 'center',
                bgcolor: 'rgba(102, 126, 234, 0.9)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animation: 'fadeIn 0.5s ease-in',
                '@keyframes fadeIn': {
                  from: { opacity: 0, transform: 'scale(0.8)' },
                  to: { opacity: 1, transform: 'scale(1)' },
                },
                '&:hover': {
                  transform: 'scale(1.1) translateY(-5px)',
                  bgcolor: 'rgba(102, 126, 234, 1)',
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.5)',
                },
              }}
              elevation={4}
            >
              {item.label}
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}