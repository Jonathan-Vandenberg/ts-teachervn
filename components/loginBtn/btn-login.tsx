import { Button } from "@material-ui/core";
import { signIn } from "next-auth/react";
import React from "react";

interface BtnLogin {
  children: React.ReactNode;
  provider: {
    name: string;
    id: string;
  };
  bgColor: string;
  txtColor: string;
  startIcon: any;
  variant: string;
  width: string;
}

export default function BtnLogin({
  provider,
  bgColor,
  txtColor,
  startIcon,
  width,
}: BtnLogin): JSX.Element {
  return (
    <div>
      <Button
        style={{
          backgroundColor: `${bgColor}`,
          color: `${txtColor}`,
          width: `${width}`,
        }}
        onClick={() => signIn(provider.id)}
        startIcon={startIcon}
      >
        Sign in with {provider.name}
      </Button>
    </div>
  );
}
