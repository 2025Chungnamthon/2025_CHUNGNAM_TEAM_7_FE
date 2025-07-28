// src/api/http.ts

import axios, { AxiosInstance } from 'axios';

// .env 등에서 BASE_URL 관리하실 경우, react-native-dotenv 등을 사용하세요.
const BASE_URL = 'http://43.200.191.61:8080';

export const http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// 요청 인터셉터: JWT 토큰 등이 있다면 여기서 자동으로 넣어줄 수 있어요.
http.interceptors.request.use(async config => {
  // 예) AsyncStorage 에 저장된 accessToken 불러와서 헤더에 삽입
  // const token = await AsyncStorage.getItem('accessToken');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 응답 인터셉터: 공통 에러 처리, 401 리프레시 처리 등
http.interceptors.response.use(
  response => response,
  async error => {
    // if (error.response?.status === 401) { /* 리프레시 로직 */ }
    return Promise.reject(error);
  },
);
