import http from "./httpService";

const likeCarService = (id) => {
  return http.put(`/cars/like/${id}`);
};

export default likeCarService;
