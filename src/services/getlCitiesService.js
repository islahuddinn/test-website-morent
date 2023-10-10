import http from "./httpService";

const getCitiesService = (req) => {
  return http.get("/city");
};

export default getCitiesService;
