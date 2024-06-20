export default function Vehicles({ vehicle }) {
    const forSale = vehicle.forSale ? (
      "Yes"
    ) : (
      <span style={{ color: 'red' }}>{"No"}</span>
    );

  return (
    <tr>
      <td>{vehicle.manufacturer}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.color}</td>
      <td>{vehicle.year}</td>
      <td>{forSale}</td>
    </tr>
  );
}
