import { Button } from "@material-ui/core";
import { signIn } from "next-auth/react";
import React from "react";

interface BtnLogin {
  provider: {
    name: string;
    id: string;
  };
  bgColor: string;
  txtColor: string;
  startIcon: Element;
}

export default function BtnLogin({
  provider,
  bgColor,
  txtColor,
  startIcon,
}: BtnLogin) {
  return (
    <div>
      <Button
        style={{ backgroundColor: `${bgColor}`, color: `${txtColor}` }}
        onClick={() => signIn(provider.id)}
        startIcon={startIcon}
      >
        Sign in with {provider.name}
      </Button>
    </div>
  );
}
