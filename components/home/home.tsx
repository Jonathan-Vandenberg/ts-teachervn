import { Container, Typography } from "@material-ui/core";
import Image from "next/image";
import * as React from "react";
import image from "../../images/pexels-max-fischer-5212342.jpg";

const HomePage: React.FC = () => {
  return (
    <Container
      container
      style={{ backgroundColor: "rgb(239, 252, 255)", marginTop: "7rem" }}
      maxWidth
    >
      <Typography variant="h1" style={{ padding: "2rem" }}>
        TeacherVN
      </Typography>

      <Typography variant="h4" style={{ padding: "2rem" }}>
        Connecting teachers to classrooms
      </Typography>

      <Image src={image} alt="main-hero" style={{ width: "100%" }} />
    </Container>
  );
};

export default HomePage;
