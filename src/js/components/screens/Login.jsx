import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {

  const handleSubmit = () => {
    console.log("TODO")
  }


  return(
    <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">
            Welcome to Workout App
          </Typography>
          <Box>
            <TextField
              margin='normal'
              required
              fullWidth
              label='Email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              label='Password'
              type='password'
              autoComplete='current-password'
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            >
              create account
            </Button>
          </Box>
        </Box>
    </Container>
  );
}

export default Login;
