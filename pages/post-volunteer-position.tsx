import { NextPage } from "next/types";
import VolunteerForm, { Values } from "../components/volunteer/volunteer-form";

const NewVol: NextPage = () => {
  const addVolHandler = async (volData: Values) => {
    const response = await fetch("/api/volunteers-handler", {
      method: "POST",
      body: JSON.stringify(volData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  return <VolunteerForm onSubmit={addVolHandler} volunteers={{
    title: "",
    description: "",
    address: "",
    duration: "",
    notes: "",
    image: "",
    id: ""
  }} />;
};

export default NewVol;
