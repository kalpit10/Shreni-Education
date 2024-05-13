import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "../stylesheet/Home.css";

function AlertBox() {
  return (
    <>
      <Stack spacing={2}>
        <Alert variant="filled" severity="success">
          Thank you! Your message has been sent.!!!
        </Alert>
      </Stack>
    </>
  );
}

export default AlertBox;
