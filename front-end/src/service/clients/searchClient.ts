import axios from "axios";

export interface FeederRequest {
  title: string;
  url: string;
}

export interface FeederResponse {
  code: number;
  msg: string;
}

export interface QueryResult {
  title: string;
  url: string;
}

class SearchClient {
  endpoint: string;
  axiosInstance;

  constructor() {
    this.endpoint = "";
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:9090/api",
    });
  }

  feeder = async (query: FeederRequest) => {
    return this.axiosInstance
      .post<FeederResponse>("/feeder", {
        title: query.title,
        url: query.url,
      })
      .then((res) => res.data);
  };

  query = async (query: string[]) => {
    return this.axiosInstance
      .post<QueryResult[]>("/query", query, {})
      .then((res) => res.data);
  };
}

export default new SearchClient();