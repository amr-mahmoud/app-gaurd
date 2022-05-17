import axios from "axios";
import { Tab } from "../types";

const baseurl = "https://jade-sundae-029fa8.netlify.app/.netlify/functions/api";

const getPlugins = async () => {
  const res = await axios.get(`${baseurl}/plugins`);
  return res.data;
};

const getTabs = async () => {
  const res = await axios.get(`${baseurl}/tabs`);
  return res.data;
};

const putPluginTab = async (path: string, tab: Tab) => {
  const res = await axios.put(`${baseurl}/tabs`, { path, tab });
  return res.data;
};

export { getPlugins, getTabs, putPluginTab };
