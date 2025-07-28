// import axios from 'axios';
// import Config from './config';
// import { Alert } from 'react-native';
//
// export const loginService = async (username: string, password: string) => {
//
//   try {
//     const response = await axios.post(`${Config.SERVER_BASE_URL}/api/auth/login`, {
//       username,
//       email: username,
//       password,
//     }, {
//       headers: { 'Content-Type': 'application/json' },
//     });
//
//     const token = response.data?.token;
//     console.log('로그인 성공:', token);
//     return token;
//
//   } catch (err: any) {
//     console.error('로그인 실패:', err.response?.data || err.message);
//     Alert.alert('로그인 실패', err.response?.data?.message || '서버 오류');
//     return null;
//   }
//
// };
export const loginService = async () => {
  // 임시: 항상 null 반환
  return null;
};
