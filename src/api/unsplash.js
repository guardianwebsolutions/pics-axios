import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dk6xAPCrX_ushakn8KCp7ZoiHpfWEjjEUntOPHj_z9Q",
  },
});
