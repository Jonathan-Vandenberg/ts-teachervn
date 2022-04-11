import { Box, Button, Container, Typography } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {
  getProviders,
  getSession,
  GetSessionParams,
  signOut,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BtnLogin from "../components/loginBtn/btn-login";

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

export default function Login({ providers }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);

  console.log(status);

  return (
    <Container
      style={{
        height: "80vh",
        width: "100%",
        paddingTop: "12rem",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography style={{ padding: "2rem" }}>Sign in</Typography>
      <Box style={{ padding: "1rem" }}>
        <Box style={{ padding: "1rem", width: "100%" }}>
          <BtnLogin
            bgColor={"#FABC05"}
            txtColor={"white"}
            provider={providers.google}
            variant="outlined"
            startIcon={<GoogleIcon />}
            width={"100%"}
          >
            Sign in with {providers.google.name}
          </BtnLogin>
        </Box>
        <Box style={{ padding: "1rem", width: "100%" }}>
          <BtnLogin
            bgColor={"#4267B2"}
            txtColor={"white"}
            provider={providers.facebook}
            variant="outlined"
            startIcon={<FacebookIcon />}
            width={"100%"}
          >
            Sign in with {providers.facebook.name}
          </BtnLogin>
        </Box>
      </Box>
      {session && <Button onClick={() => signOut()}>Sign out</Button>}
    </Container>
  );
}

Login.getInitialProps = async (context: GetSessionParams | undefined) => {
  return {
    providers: await getProviders(context),
    session: await getSession(context),
  };
};
