import Axios from "axios";
export const url = "http://localhost:4000";
export default Axios.create({
  baseURL: url + "/api",
});
