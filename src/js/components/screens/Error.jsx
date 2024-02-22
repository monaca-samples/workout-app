import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Error = () => {
  return (
    <Container sx={{ pt: 10 }} maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Error</Typography>
        <Typography>API monthly quota has been reached.</Typography>
        <Typography>
          Refer to the repo{" "}
          <Link href="https://github.com/juan-serrano-soria/workout-app/blob/main/README.md">
            README
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Error;
