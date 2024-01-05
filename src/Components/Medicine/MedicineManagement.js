import { useState } from "react";
import MedicineList from "./MedicineList"; 
import MedicineDetails from "./InputForm/MedicineDetails";



const MedicineManagement = () => {
  const [medicines, setMedicines] = useState([]); 

  const addMedicineHandler = (medicine) => {
    setMedicines((prevMedicines) => [...prevMedicines, medicine]);
   
  };

  return (
    <div>
      <MedicineDetails onAddMedicine={addMedicineHandler} />
      <MedicineList medicines={medicines} />
    </div>
  );
};

export default MedicineManagement;
