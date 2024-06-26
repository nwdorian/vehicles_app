import './App.css';
import { useEffect, useState } from "react";
import { seedData } from "./VehiclesSeed";
import VehiclesForm from './VehiclesForm';
import VehiclesGrid from './VehiclesGrid';

function App() {
  const [vehicles, setVehicles] = useState(
    JSON.parse(localStorage.getItem("vehicles"))
  );

  const [edit, setEdit] = useState();

  useEffect(() => {
    if (vehicles === null || vehicles?.length === 0) {
      localStorage.setItem("vehicles", JSON.stringify(seedData));
      setVehicles(seedData);
    }
  }, []);

  const onDelete = (model) => {
    const vehicles = JSON.parse(localStorage.getItem("vehicles"));
    const filteredVehicles = vehicles.filter(v => v.model !== model);
    localStorage.setItem("vehicles", JSON.stringify(filteredVehicles));
    setVehicles(filteredVehicles);
  }

  function onSubmit(vehicle){
    const newVehicleList = [...vehicles, vehicle];
    setVehicles(newVehicleList);
    localStorage.setItem("vehicles", JSON.stringify(newVehicleList));
  }

  function handleOnEdit(model){
    setEdit(vehicles.find(v => v.model === model))
  }

  function handleSaveEdit(editedVehicle){
    const index = vehicles.findIndex(v => v.model === editedVehicle.model);
    let copiedList = [...vehicles];
    copiedList[index] = editedVehicle;
    localStorage.setItem("vehicles", JSON.stringify(copiedList));
    setVehicles(copiedList);
    setEdit(undefined);
  }

  return (
    <>
    <VehiclesGrid vehicles={vehicles} onDelete={onDelete} onEdit={handleOnEdit}/>
    <VehiclesForm onSubmit={onSubmit} editing={edit} saveEdit={handleSaveEdit}/>
    </>
  );
}

export default App;
