import { Avatar, Box, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <Avatar src="/imgs/me.png" sx={{ width: 100, height: 100 }} />
      <Typography variant="h4" color="primary" sx={{ mt: 2 }}>
        <Link href="/" underline="none" color="inherit">
          Rhea Mewadhari
        </Link>
      </Typography>
      <Box sx={{ mt: 2 }}>
        <IconButton href="https://www.linkedin.com/in/rhea-mewadhari-8926b5229" color="primary">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com/Rhea-Mewadhari" color="primary">
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
}