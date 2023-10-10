import queryString from "query-string";
import http from "./httpService";

const getOneCarService = (req,query) => {
  return http.get(`/cars/${query.carSlug}`, {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });
};

export default getOneCarService;
