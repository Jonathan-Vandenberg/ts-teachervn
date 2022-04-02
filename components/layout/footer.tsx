import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import classes from './footer.module.scss';

export default function StickyFooter(): React.ReactElement {
  return (
    <Box
    className={classes.container}
      component="footer"
      sx={{
        py: 0,
        px: 0,
        mt: "auto",
        backgroundColor: "rgb(8,90,138)",
      }}
    >
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="body1" className={classes.name}>
          Website created by Jonathan van den Berg
        </Typography>
      </Container>
    </Box>
  );
}
