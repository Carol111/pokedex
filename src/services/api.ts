import axios from 'axios';

import {BASE_URL} from '@env';

export const api = axios.create();

api.defaults.baseURL = BASE_URL;

api.defaults.timeout = 2000;

api.interceptors.response.use(
  function (response) {
    return {
      ok: true,
      status: response.status,
      data: response.data,
    };
  },
  function (error) {
    return Promise.reject({
      ok: false,
      status: error.status,
      data: error.data || {},
    });
  },
);
