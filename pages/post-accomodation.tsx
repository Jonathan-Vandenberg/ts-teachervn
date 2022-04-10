import AccomodationForm, {
  Values,
} from "../components/accomodation/accomodation-form";

const NewAcc = () => {
  const addAccHandler = async (accData: Values) => {
    const response = await fetch("/api/accomodation-handler", {
      method: "POST",
      body: JSON.stringify(accData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  return <AccomodationForm onSubmit={addAccHandler} />;
};

export default NewAcc;
