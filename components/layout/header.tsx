import { Button, Container } from "@material-ui/core";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../../images/1647263286woman-writing-silhouette-person.png";
import classes from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

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
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);

  return (
    <>
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
                setDropTeachers(true);
                setDropAgents(false);
              }}
            >
              Teachers
            </Button>
          </li>

          <li>
            <Button
              onClick={() => {
                setDropAgents(true);
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
              setDropMenu(curr => !curr), setDropTeachers(false), setDropAgents(false);
            }}
            className={classes.menuIcon}
          />
        </ul>
      </Container>
      <div
        className={dropTeachers ? classes.dropdown : classes.dropdownhidden}
        onMouseOver={() => setDropTeachers(true)}
        onMouseLeave={() => setDropTeachers(false)}
        onClick={() => setDropTeachers(false)}
        id="dropdownteachers"
      >
        <Link href="/schools">
          <h3>Find Schools</h3>
        </Link>

        <Link href="/accomodation">
          <h3>Find Accomodation</h3>
        </Link>

        <Link href="/language-exchange">
          <h3>Language Exchange</h3>
        </Link>

        <Link href="/volunteer">
          <h3>Volunteer</h3>
        </Link>

        <Link href="/accreditation">
          <h3>Accreditation</h3>
        </Link>

        <Link href="/lesson-planning">
          <h3>Lesson-planning</h3>
        </Link>

        <Link href="/best-practices">
          <h3>Best Practices</h3>
        </Link>
      </div>

      <div
        id="dropdownagents"
        className={dropAgents ? classes.dropdown : classes.dropdownhidden}
        onMouseOver={() => setDropAgents(true)}
        onMouseLeave={() => setDropAgents(false)}
        onClick={() => setDropAgents(false)}
      >
        <Link href="/post-teaching-job">
          <h3>Post A Job Offer</h3>
        </Link>

        <Link href="/post-accomodation">
          <h3>Post Accomodation</h3>
        </Link>

        <Link href="post-language-exchange">
          <h3>Post Language exchange</h3>
        </Link>

        <Link href="/post-volunteer-position">
          <h3>Post Volunteer Work</h3>
        </Link>
      </div>

      {dropMenu && !dropTeachers && !dropAgents && (
        <div className={classes.menuIconDropdown}>
          <h3
            className={classes.menuTeachers}
            onClick={() => {
              setDropMenu(false), setDropTeachers(true), setDropAgents(false);
            }}
          >
            Teachers
          </h3>
          <h3
            className={classes.menuTeachers}
            onClick={() => {
              setDropMenu(false), setDropAgents(true), setDropTeachers(false);
            }}
          >
            Agents
          </h3>
          <h3
            className={classes.menuTeachers}
            onClick={() => {
              setDropMenu(false), router.push("/about");
            }}
          >
            About
          </h3>
          <h3
            className={classes.menuTeachers}
            onClick={() => {
              setDropMenu(false), router.push("/contact");
            }}
          >
            Contact
          </h3>
          {session && (
            <h3
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </h3>
          )}
          {!session && (
            <h3
              onClick={() => {
                signIn();
              }}
            >
              Sign In
            </h3>
          )}
        </div>
      )}
    </>
  );
}
