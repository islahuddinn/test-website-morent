import queryString from "query-string";
import http from "./httpService";

const getAllCarsService = (req,query) => {
  return http.get(`/cars?${queryString.stringify(query)}`, {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });
};

export default getAllCarsService;
