// src/api/authService.ts

import { Api, SignupRequest, LoginRequest, JwtResponse } from '@/api/api';

const api = new Api();

/**
 * 회원가입 + 로그인
 * @param payload.username
 * @param payload.email
 * @param payload.password
 * @returns accessToken, refreshToken, tokenType
 */
export async function signupAndLogin(
  payload: SignupRequest,
): Promise<JwtResponse> {
  // swagger-typescript-api 기본명명 규칙에 따라
  // POST /api/auth/signup → api.postApiAuthSignup
  const resp = await api.api.signupUser(payload);
  return resp.data;
}

/**
 * 로그인
 * @param payload.username
 * @param payload.email
 * @param payload.password
 * @returns accessToken, refreshToken, tokenType
 */
export async function login(payload: LoginRequest): Promise<JwtResponse> {
  // POST /api/auth/login → api.postApiAuthLogin
  const resp = await api.api.loginUser(payload);
  return resp.data;
}
