import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { useState } from 'react';

import { userData } from '../../state/state';
import { useSetAtom } from 'jotai/react';

const Login = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const setUserData = useSetAtom(userData);

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; // later see what to do with this

      const docRef = doc(db, 'users', `${email}`);
      getDoc(docRef)
      .then((docSnap) => {
        setUserData({
          email: docSnap.data().email,
          name: docSnap.data().name,
          weights: docSnap.data().weights,
          height: docSnap.data().height,
        })
        navigate('/dashboard');
      })
      .catch((error) => {
        alert("Error reading user");
      })
    })
    .catch((error) => {
      alert("Auth failed\n", error.code + " " + error.message);
    })
  }

  const handleSignUp = () => {
    navigate('/signup');
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
              value={email}
              onChange={handleEmail}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              label='Password'
              type='password'
              autoComplete='current-password'
              value={password}
              onChange={handlePassword}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
              onClick={handleSignUp}
            >
              create account
            </Button>
          </Box>
        </Box>
    </Container>
  );
}

export default Login;
