import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUp = () => {

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
            Create an account
          </Typography>
          <Box>
          <TextField
              margin='normal'
              required
              fullWidth
              label='Name'
              autoFocus
            />
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
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              label='Repeat password'
              type='password'
              autoComplete='current-password'
              autoFocus
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              sx={{ mb: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
    </Container>
  );
}

export default SignUp;
