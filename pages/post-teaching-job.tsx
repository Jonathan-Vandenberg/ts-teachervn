import SchoolForm from '../components/school/school-form';
import { Values } from '../components/school/school-form';

const NewSchool = () => {
  const addSchoolHandler = async (schoolData: Values) => {
    const response = await fetch("/api/schools-handler", {
      method: "POST",
      body: JSON.stringify(schoolData),
      headers: { "Content-Type": "application/json" }
  })
};
    return <SchoolForm onSubmit={addSchoolHandler}/>
  }
  
  export default NewSchool