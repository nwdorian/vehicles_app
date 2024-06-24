import http from "../http-common";

const getAll = () => {
  return http.get("/Vehicles");
};

const get = (id) => {
  return http.get(`/Vehicles/${id}`);
};

const create = (data) => {
  return http.post("/Vehicles", data);
};

const update = (id, data) => {
  return http.put(`/Vehicles/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/Vehicles/${id}`);
};

const findByMake = (make) => {
  return http.get(`/Vehicles?make=${make}`);
};

const VehicleService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByMake,
};

export default VehicleService;
