import { Container, Typography } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import { getProviders, getSession, GetSessionParams } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import BtnLogin from "../components/loginBtn/btn-login";
import GoogleIcon from "@mui/icons-material/Google";
import { Box } from "@material-ui/core";

type Providers = {
  google: {
    name: string;
    id: string;
  };
  facebook: {
    name: string;
    id: string;
  };
};

interface Props {
  session: string;
  providers: Providers;
}

const Login = ({ providers, session }: Props) => {
  useEffect(() => {
    if (session) Router.push("/");
  }, [session]);

  if (session) {
    return null;
  }

  return (
    <Container
      style={{
        paddingTop: "12rem",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography style={{ padding: "2rem" }}>Sign in</Typography>
      <Box>
        <BtnLogin
          bgColor={"#FABC05"}
          txtColor={"white"}
          provider={providers.google}
          variant="outlined"
          startIcon={<GoogleIcon />}
        >
          Sign in with {providers.google.name}
        </BtnLogin>
      </Box>
      <Box>
        <BtnLogin
          bgColor={"#4267B2"}
          txtColor={"white"}
          provider={providers.facebook}
          variant="outlined"
          startIcon={<FacebookIcon />}
        >
          Sign in with {providers.facebook.name}
        </BtnLogin>
      </Box>
    </Container>
  );
};

Login.getInitialProps = async (context: GetSessionParams | undefined) => {
  return {
    providers: await getProviders(context),
    session: await getSession(context),
  };
};

export default Login;
