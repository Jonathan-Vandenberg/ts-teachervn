import Typography, { Button, Container } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../../images/1647263286woman-writing-silhouette-person.png";
import classes from "./header.module.css";

export default function Header() {
  const [dropTeachers, setDropTeachers] = useState(false);
  const [dropAgents, setDropAgents] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);

  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos || currentScrollPos === 0.0) {
        let nav = document.getElementById("navbar") as HTMLElement;
        nav.style.top = "0";

        let dropdownTeachers = document.getElementById(
          "dropdownteachers"
        ) as HTMLElement;
        dropdownTeachers.style.top = "9vh";

        let dropdownAgents = document.getElementById(
          "dropdownagents"
        ) as HTMLElement;
        dropdownAgents.style.top = "9vh";
      } else {
        let nav = document.getElementById("navbar") as HTMLElement;
        nav.style.top = "-15vh";

        setDropTeachers(false);
        setDropAgents(false);
        setDropMenu(false);
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);

  const mainNav = (
    <Container className={classes.container} id="navbar">
      <ul className={classes.list}>
        <li className={classes.logo}>
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </li>

        <li>
          <Button
            onClick={() => {
              setDropTeachers((curr) => !curr);
              setDropAgents(false);
            }}
          >
            Teachers
          </Button>
        </li>

        <li>
          <Button
            onClick={() => {
              setDropAgents((curr) => !curr);
              setDropTeachers(false);
            }}
          >
            Agents
          </Button>
        </li>

        {status === "unauthenticated" && (
          <li>
            <Button
              onClick={() => {
                router.push("/login");
              }}
            >
              Sign In
            </Button>
          </li>
        )}

        {status === "authenticated" && (
          <li>
            <Button
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </Button>
          </li>
        )}
        <MenuIcon
          onClick={() => {
            setDropMenu((curr) => !curr),
              setDropTeachers(false),
              setDropAgents(false);
          }}
          className={classes.menuIcon}
        />
      </ul>
    </Container>
  );

  const teachersDropdown = (
    <div
      className={dropTeachers ? classes.dropdown : classes.dropdownhidden}
      onMouseOver={() => setDropTeachers(true)}
      onMouseLeave={() => setDropTeachers(false)}
      onClick={() => setDropTeachers(false)}
      id="dropdownteachers"
    >
      <Link href="/schools">
        <a>
          <h3 className={classes.h3}>Find Schools</h3>
        </a>
      </Link>

      <Link href="/accomodation">
        <a>
          <h3 className={classes.h3}>Find Accomodation</h3>
        </a>
      </Link>

      <Link href="/language-exchange">
        <a>
          <h3 className={classes.h3}>Language Exchange</h3>
        </a>
      </Link>

      <Link href="/volunteer">
        <a>
          <h3 className={classes.h3}>Volunteer</h3>
        </a>
      </Link>

      <Link href="/accreditation">
        <a>
          <h3 className={classes.h3}>Accreditation</h3>
        </a>
      </Link>

      <Link href="/lesson-planning">
        <a>
          <h3 className={classes.h3}>Lesson-planning</h3>
        </a>
      </Link>

      <Link href="/best-practices">
        <a>
          <h3 className={classes.h3}>Best Practices</h3>
        </a>
      </Link>
    </div>
  );

  const agentsDropdown = (
    <div
      id="dropdownagents"
      className={dropAgents ? classes.dropdown : classes.dropdownhidden}
      onMouseOver={() => setDropAgents(true)}
      onMouseLeave={() => setDropAgents(false)}
      onClick={() => setDropAgents(false)}
    >
      <Link href="/post-teaching-job">
        <a>
          <h3 className={classes.h3}>Post A Job Offer</h3>
        </a>
      </Link>

      <Link href="/post-accomodation">
        <a>
          <h3 className={classes.h3}>Post Accomodation</h3>
        </a>
      </Link>

      <Link href="post-language-exchange">
        <a>
          <h3 className={classes.h3}>Post Language Exchange</h3>
        </a>
      </Link>

      <Link href="/post-volunteer-position">
        <a>
          <h3 className={classes.h3}>Post Volunteer Work</h3>
        </a>
      </Link>
    </div>
  );

  const hamburgerMenu = (
    <div
      className={classes.menuIconDropdown}
      onMouseLeave={() => setDropMenu(false)}
    >
      <h3
        className={classes.h3}
        onClick={() => {
          setDropMenu(false), setDropTeachers(true), setDropAgents(false);
        }}
      >
        Teachers
      </h3>
      <h3
        className={classes.h3}
        onClick={() => {
          setDropMenu(false), setDropAgents(true), setDropTeachers(false);
        }}
      >
        Agents
      </h3>
      <h3
        className={classes.h3}
        onClick={() => {
          setDropMenu(false), router.push("/about");
        }}
      >
        About
      </h3>
      <h3
        className={classes.h3}
        onClick={() => {
          setDropMenu(false), router.push("/contact");
        }}
      >
        Contact
      </h3>
      {session && (
        <h3
          className={classes.h3}
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </h3>
      )}
      {!session && (
        <h3
          className={classes.h3}
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </h3>
      )}
    </div>
  );

  return (
    <>
      {mainNav}
      {teachersDropdown}
      {agentsDropdown}
      {dropMenu && !dropTeachers && !dropAgents && hamburgerMenu}
    </>
  );
}
