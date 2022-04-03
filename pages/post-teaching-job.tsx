import SchoolForm, { Values } from "../components/school/school-form";

const NewAcc = () => {
  const addAccHandler = async (schoolData: Values) => {
    const data = new FormData();
    data.append("title", schoolData.title);
    data.append("description", schoolData.description);
    data.append("image", schoolData.image);
    data.append("pay", schoolData.pay);
    data.append("address", schoolData.address);
    data.append("duration", schoolData.duration);
    data.append("notes", schoolData.notes);
    data.append("id", schoolData.id);

    const response = await fetch("/api/schools-handler", {
      method: "POST",
      body: JSON.stringify(schoolData),
      headers: new Headers({ accept: "application/json" }),
    });
  };

  return <SchoolForm onSubmit={addAccHandler} />;
};

export default NewAcc;
