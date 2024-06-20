import { useEffect } from "react";
import Vehicles from "./Vehicles";
import { seedData } from "./VehiclesSeed";

export default function VehiclesGrid() {
  useEffect(() => {
    const vehicleData = JSON.parse(localStorage.getItem("vehicles"));
    if (vehicleData == null) {
      localStorage.setItem("vehicles", JSON.stringify(seedData));
    }
  }, []);

  const vehicles = JSON.parse(localStorage.getItem("vehicles"));

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
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <Vehicles key={index} vehicle={vehicle} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
