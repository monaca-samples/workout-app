import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "js/firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRepeatPass = (e) => {
    setRepeatPass(e.target.value);
  };

  const handleSubmit = () => {
    if ((name === "") | (email === "") | (password === "")) {
      alert("Please fill out all information");
      return;
    }
    if (height <= 0 || weight <= 0) {
      alert("Height or weight not correct");
      setHeight();
      setWeight();
      return;
    }
    if (password !== repeatPass) {
      alert("Passwords do not match!");
      setPassword("");
      setRepeatPass("");
      return;
    }
    // create user in firebase authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Create entry in firestore
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
        const formattedToday = dd + "/" + mm + "/" + yyyy;

        const docRef = doc(db, "users", `${email}`);
        setDoc(docRef, {
          email: `${email}`,
          height: height,
          name: `${name}`,
          weights: [{ date: formattedToday, weight: weight }],
          workout: {},
        });

        alert("Now login with your created account");
        navigate("/");
      })
      .catch((error) => {
        alert("Auth failed\n" + error.code + " " + error.message);
        setEmail("");
        setPassword("");
        setRepeatPass("");
      });
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Create an account</Typography>
        <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            autoFocus
            value={name}
            onChange={handleName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Height (in cm)"
            type="number"
            value={height}
            onChange={handleHeight}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Weight (in kg)"
            type="number"
            value={weight}
            onChange={handleWeight}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            autoComplete="email"
            value={email}
            onChange={handleEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePassword}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Repeat password"
            type="password"
            autoComplete="current-password"
            value={repeatPass}
            onChange={handleRepeatPass}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            sx={{ mb: 2 }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
