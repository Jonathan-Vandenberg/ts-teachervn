import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { BSONType } from "mongodb";
import * as React from "react";
import classes from "./school-form.module.scss";

export interface Props {
  onSubmit: (values: Values) => void;
}

export type Values = {
  title: string;
  description: string;
  pay: string;
  address: string;
  duration: string;
  notes: string;
  image: string;
  id: string;
};

const SchoolForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography className={classes.title} variant="h6">
        Create a new teaching post
      </Typography>
      <Formik
        initialValues={{
          title: "",
          description: "",
          image: "",
          pay: "",
          address: "",
          duration: "",
          notes: "",
          id: "",
        }}
        onSubmit={(values: Values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className={classes.form}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "100vh" }}
            >
              <TextField
                fullWidth
                label="Title"
                margin="normal"
                required={true}
                placeholder="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextField
                fullWidth
                margin="normal"
                multiline
                rows="4"
                required={true}
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextField
                fullWidth
                margin="normal"
                required={true}
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextField
                fullWidth
                margin="normal"
                required={true}
                placeholder="Pay"
                name="pay"
                value={values.pay}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextField
                fullWidth
                margin="normal"
                required={true}
                placeholder="Duration"
                name="duration"
                value={values.duration}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextField
                fullWidth
                margin="normal"
                multiline
                rows="2"
                placeholder="Notes"
                name="notes"
                value={values.notes}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextField
                fullWidth
                margin="normal"
                multiline
                rows="2"
                placeholder="Image Url"
                name="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Box style={{ padding: "2rem" }}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon />}
                  color="secondary"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SchoolForm;
