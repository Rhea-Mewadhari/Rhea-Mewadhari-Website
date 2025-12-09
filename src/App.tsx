import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar />
      <Box
        sx={{
          marginLeft: { xs: 0, md: '280px' },
          flex: 1,
          width: { xs: '100%', md: 'calc(100% - 280px)' },
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </Box>
    </Box>
  );
}

export default App;
