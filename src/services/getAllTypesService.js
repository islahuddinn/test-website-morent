import http from "./httpService";

const getAllTypesService = (req) => {
  return http.get("/car-type");
};

export default getAllTypesService;
