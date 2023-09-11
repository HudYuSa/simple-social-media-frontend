import http from "../../app/http";

const signup = (user) => {
  return http.post("/auth/signup", user);
};

const signin = ({ email, password }) => {
  return http.post("/auth/login", { email, password });
};

const refreshToken = (token) => {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return http.get("auth/refresh");
};

const logout = () => {
  return http.get("/auth/logout");
};

const deleteUser = () => {
  return http.delete("/auth");
};

const userService = {
  signup,
  signin,
  refreshToken,
  logout,
  deleteUser,
};
export default userService;
