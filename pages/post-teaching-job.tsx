import SchoolForm, {
  Values,
} from "../components/school/school-form";

const NewAcc = () => {
  const addAccHandler = async (schoolData: Values) => {
    const response = await fetch("/api/schools-handler", {
      method: "POST",
      body: JSON.stringify(schoolData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  return <SchoolForm onSubmit={addAccHandler} />;
};

export default NewAcc;
