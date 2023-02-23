import axios from "axios";
import { ApiUrl } from "./apiUrl";

export const examInstances = axios.create ({
    baseURL: ApiUrl
})