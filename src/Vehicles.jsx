import Button from "./Button";

export default function Vehicles({ vehicle, onDelete, onEdit }) {
  const forSale = vehicle.forSale ? (
    "Yes"
  ) : (
    <span style={{ color: "red" }}>{"No"}</span>
  );

  // const handleDelete = () => {
  //   const vehicles = JSON.parse(localStorage.getItem("vehicles"));
  //   const filteredVehicles = vehicles.filter(v => v.model !== vehicle.model);
  //   localStorage.setItem("vehicles", JSON.stringify(filteredVehicles));
  // }
  return (
    <tr>
      <td>{vehicle.manufacturer}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.color}</td>
      <td>{vehicle.year}</td>
      <td>{forSale}</td>
      <td>
        <Button onClick={() => onDelete(vehicle.model)}>Delete</Button>
        <Button onClick={() => onEdit(vehicle.model)}>Edit</Button>
      </td>
    </tr>
  );
}
