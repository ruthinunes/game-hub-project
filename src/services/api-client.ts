import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '116a31fe03c44cdaaf6b29fc4b493247',
  },
});