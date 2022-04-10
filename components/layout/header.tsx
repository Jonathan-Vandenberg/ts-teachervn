import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import logo from "../../images/1647263286woman-writing-silhouette-person.png";
import classes from "./header.module.css";
import Image from "next/image";

export default function Header() {
  const [dropTeachers, setDropTeachers] = useState(false);
  const [dropAgents, setDropAgents] = useState(false);

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
      <header className={classes.container} id="navbar">
        <ul className={classes.list}>
          <li>
            <Button
              onMouseOver={() => {
                setDropTeachers(true);
                setDropAgents(false);
              }}
              onClick={() => {
                setDropTeachers(true);
              }}
            >
              For Teachers
            </Button>
          </li>

          <li className={classes.logo}>
            <a>
              <Image src={logo} alt="logo" />
            </a>
          </li>

          <li>
            <Button
              onClick={() => {
                setDropAgents(true);
              }}
              onMouseOver={() => {
                setDropAgents(true);
                setDropTeachers(false);
              }}
            >
              For Agents
            </Button>
          </li>
        </ul>
      </header>
      <div
        className={dropTeachers ? classes.dropdown : classes.dropdownhidden}
        onMouseOver={() => setDropTeachers(true)}
        onMouseLeave={() => setDropTeachers(false)}
        onClick={() => setDropTeachers(false)}
        id="dropdownteachers"
      >
        <a href="/schools">
          <h3>Find Schools</h3>
        </a>

        <a href="/accomodation">
          <h3>Find Accomodation</h3>
        </a>

        <a href="/language-exchange">
          <h3>Language Exchange</h3>
        </a>

        <a href="/volunteer">
          <h3>Volunteer</h3>
        </a>

        <a href="/accreditation">
          <h3>Accreditation</h3>
        </a>

        <a href="/lesson-planning">
          <h3>Lesson-planning</h3>
        </a>

        <a href="/best-practices">
          <h3>Best Practices</h3>
        </a>

        <a href="/login">
          <h3>Login</h3>
        </a>
      </div>

      <div
        id="dropdownagents"
        className={dropAgents ? classes.dropdown : classes.dropdownhidden}
        onMouseOver={() => setDropAgents(true)}
        onMouseLeave={() => setDropAgents(false)}
        onClick={() => setDropAgents(false)}
      >
        <a href="/post-job">
          <h3>Post A Job Offer</h3>
        </a>

        <a href="/post-accomodation">
          <h3>Post Accomodation</h3>
        </a>

        <a href="post-language-exchange">
          <h3>Post Language exchange</h3>
        </a>

        <a href="/post-volunteer-position">
          <h3>Post Volunteer Work</h3>
        </a>

        <a href="/login">
          <h3>Login</h3>
        </a>
      </div>
    </>
  );
}
