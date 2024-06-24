import Button from "./Button";

export default function Vehicles({ vehicle, onDelete, onEdit }) {
  const forSale = vehicle.forSale ? (
    "Yes"
  ) : (
    <span style={{ color: "red" }}>{"No"}</span>
  );

  const year =
    typeof vehicle.year === "string" ? (
      new Date(Date.parse(vehicle.year)).getFullYear()
    ) : (
      <span style={{ color: "red" }}>{"No Year"}</span>
    );

  const model =
    typeof vehicle.model === "string" ? (
      vehicle.model
    ) : (
      <span style={{ color: "red" }}>{"No Model"}</span>
    );
  // const handleDelete = () => {
  //   const vehicles = JSON.parse(localStorage.getItem("vehicles"));
  //   const filteredVehicles = vehicles.filter(v => v.model !== vehicle.model);
  //   localStorage.setItem("vehicles", JSON.stringify(filteredVehicles));
  // }
  return (
    <tr>
      <td>{vehicle.make.name}</td>
      <td>{model}</td>
      <td>{vehicle.color}</td>
      <td>{year}</td>
      <td>{forSale}</td>
      <td>
        <Button onClick={() => onDelete(vehicle.model)}>Delete</Button>
        <Button onClick={() => onEdit(vehicle.model)}>Edit</Button>
      </td>
    </tr>
  );
}
