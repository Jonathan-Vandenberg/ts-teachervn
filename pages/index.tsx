import { useEffect } from "react";
import HomePage from "../components/home/home";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Main() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

  return (
    <>
      <HomePage />
    </>
  );
}
