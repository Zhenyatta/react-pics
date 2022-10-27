import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID qFS1HTRuIe6-k15I8HIzp-yW7KWjEy1u1W7olC3UXjs",
  },
});
