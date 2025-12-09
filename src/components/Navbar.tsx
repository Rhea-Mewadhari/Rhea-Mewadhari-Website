import { useState } from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Drawer,
  Avatar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmailIcon from '@mui/icons-material/Email';

const navItems = [
  { label: 'Home', icon: <HomeIcon />, href: '#hero' },
  { label: 'About Me', icon: <PersonIcon />, href: '#about' },
  { label: 'Projects', icon: <BuildIcon />, href: '#projects' },
  { label: 'Skills', icon: <SchoolIcon />, href: '#skills' },
  { label: 'Responsibilities', icon: <WorkIcon />, href: '#responsibilities' },
  { label: 'Achievements', icon: <EmojiEventsIcon />, href: '#achievements' },
  { label: 'Contact', icon: <EmailIcon />, href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const navContent = (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            onClick={() => handleNavClick(item.href)}
            sx={{
              color: 'white',
              borderRadius: '12px',
              py: 1.5,
              px: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)',
                transform: 'translateX(8px)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 24 }}>
              {item.icon}
            </Box>
            <span>{item.label}</span>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const headerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
      <Avatar src="/Rhea-Mewadhari-Website/imgs/me.png" sx={{ width: 80, height: 80, mb: 1.5 }} />
      <Typography variant="h6" color="white" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Rhea Mewadhari
      </Typography>
      <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
        <IconButton
          href="https://www.linkedin.com/in/rhea-mewadhari-8926b5229"
          target="_blank"
          sx={{ color: 'white', '&:hover': { transform: 'scale(1.2)' } }}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton
          href="https://github.com/Rhea-Mewadhari"
          target="_blank"
          sx={{ color: 'white', '&:hover': { transform: 'scale(1.2)' } }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Desktop Vertical Sidebar */}
      {!isMobile && (
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            top: 0,
            height: '100vh',
            width: '280px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
            overflowY: 'auto',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            pt: 3,
          }}
        >
          {headerContent}
          {navContent}
        </Box>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 1001 }}>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{
              bgcolor: 'rgba(102, 126, 234, 0.8)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(102, 126, 234, 1)' },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: '250px',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: 'white', mb: 2 }}
          >
            <CloseIcon />
          </IconButton>
          {headerContent}
          {navContent}
        </Box>
      </Drawer>
    </>
  );
}