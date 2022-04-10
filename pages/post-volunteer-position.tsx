import VolunteerForm, { Values } from "../components/volunteer/volunteer-form";

const NewVol = () => {
  const addVolHandler = async (volData: Values) => {
    const response = await fetch("/api/volunteers-handler", {
      method: "POST",
      body: JSON.stringify(volData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  return <VolunteerForm onSubmit={addVolHandler} />;
};

export default NewVol;
