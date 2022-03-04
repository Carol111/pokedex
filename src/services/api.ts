import axios from 'axios';

import {BASE_URL} from '@env';

export const api = axios.create();

api.defaults.baseURL = BASE_URL;

api.defaults.timeout = 2000;
