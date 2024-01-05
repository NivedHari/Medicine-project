import MedicineItem from "./MedicineItem/MedicineItem";
import Card from "./../UI/Card";

const MedicineList = (props) => {
  return (
    <Card>
      <h2>Medicine List</h2>
      <ul>
        {props.medicines.map((medicine) => (
          <MedicineItem
            key={medicine.id}
            id={medicine.id}
            name={medicine.name}
            description={medicine.description}
            price={medicine.price}
            quantity={medicine.quantity}
          />
        ))}
      </ul>
    </Card>
  );
};

export default MedicineList;
