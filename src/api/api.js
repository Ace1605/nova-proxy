import axios from "axios";
import { toast } from "react-toast";

const environ = () => {
  return "https://nova-test-bank.prismic.io/api/v2/";
};

export const PLAYURL = environ();

const getAll = (url, name) => {
  return axios
    .get(PLAYURL + url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err?.response?.data?.message);
        return err.response;
      } else if (err.request) {
        return err.request;
      } else {
        console.warn(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

export default {
  getAll,
};
