import Vehicles from "./Vehicles";

export default function VehiclesGrid({ vehicles, onDelete, onEdit }) {
  return (
    <div>
      <h1>VEHICLES</h1>
      <table>
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Color</th>
            <th>Year</th>
            <th>For Sale</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles == null ? (
            <h1>Loading...</h1>
          ) : (
            vehicles.map((vehicle) => (
              <Vehicles
                onDelete={onDelete}
                onEdit={onEdit}
                key={vehicle.model}
                vehicle={vehicle}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
