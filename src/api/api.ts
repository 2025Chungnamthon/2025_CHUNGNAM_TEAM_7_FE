/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface QrCreateRequest {
  /** @format int64 */
  marketId?: number;
  placeName?: string;
}

export interface QrCreateResponse {
  base64QrImage?: string;
  /** @format date-time */
  expiredAt?: string;
}

/** API 요청 성공시 리턴하는 response */
export interface ResponseCustomObject {
  data?: object;
  /** @format date-time */
  transaction_time?: string;
  description?: string;
  status?:
    | "100 CONTINUE"
    | "101 SWITCHING_PROTOCOLS"
    | "102 PROCESSING"
    | "103 EARLY_HINTS"
    | "103 CHECKPOINT"
    | "200 OK"
    | "201 CREATED"
    | "202 ACCEPTED"
    | "203 NON_AUTHORITATIVE_INFORMATION"
    | "204 NO_CONTENT"
    | "205 RESET_CONTENT"
    | "206 PARTIAL_CONTENT"
    | "207 MULTI_STATUS"
    | "208 ALREADY_REPORTED"
    | "226 IM_USED"
    | "300 MULTIPLE_CHOICES"
    | "301 MOVED_PERMANENTLY"
    | "302 FOUND"
    | "302 MOVED_TEMPORARILY"
    | "303 SEE_OTHER"
    | "304 NOT_MODIFIED"
    | "305 USE_PROXY"
    | "307 TEMPORARY_REDIRECT"
    | "308 PERMANENT_REDIRECT"
    | "400 BAD_REQUEST"
    | "401 UNAUTHORIZED"
    | "402 PAYMENT_REQUIRED"
    | "403 FORBIDDEN"
    | "404 NOT_FOUND"
    | "405 METHOD_NOT_ALLOWED"
    | "406 NOT_ACCEPTABLE"
    | "407 PROXY_AUTHENTICATION_REQUIRED"
    | "408 REQUEST_TIMEOUT"
    | "409 CONFLICT"
    | "410 GONE"
    | "411 LENGTH_REQUIRED"
    | "412 PRECONDITION_FAILED"
    | "413 PAYLOAD_TOO_LARGE"
    | "413 REQUEST_ENTITY_TOO_LARGE"
    | "414 URI_TOO_LONG"
    | "414 REQUEST_URI_TOO_LONG"
    | "415 UNSUPPORTED_MEDIA_TYPE"
    | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
    | "417 EXPECTATION_FAILED"
    | "418 I_AM_A_TEAPOT"
    | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
    | "420 METHOD_FAILURE"
    | "421 DESTINATION_LOCKED"
    | "422 UNPROCESSABLE_ENTITY"
    | "423 LOCKED"
    | "424 FAILED_DEPENDENCY"
    | "425 TOO_EARLY"
    | "426 UPGRADE_REQUIRED"
    | "428 PRECONDITION_REQUIRED"
    | "429 TOO_MANY_REQUESTS"
    | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
    | "500 INTERNAL_SERVER_ERROR"
    | "501 NOT_IMPLEMENTED"
    | "502 BAD_GATEWAY"
    | "503 SERVICE_UNAVAILABLE"
    | "504 GATEWAY_TIMEOUT"
    | "505 HTTP_VERSION_NOT_SUPPORTED"
    | "506 VARIANT_ALSO_NEGOTIATES"
    | "507 INSUFFICIENT_STORAGE"
    | "508 LOOP_DETECTED"
    | "509 BANDWIDTH_LIMIT_EXCEEDED"
    | "510 NOT_EXTENDED"
    | "511 NETWORK_AUTHENTICATION_REQUIRED";
  /** @format int32 */
  statusCode?: number;
}

/** 스탬프 스캔 요청 DTO 입니다 */
export interface StampRequestDto {
  /**
   * QR 코드 식별자
   * @format int64
   * @example 123456
   */
  qrId: number;
}

/** 스탬프 스캔 응답 DTO 입니다 */
export interface StampResponseDto {
  /**
   * 스캔한 QR 코드 ID
   * @format int64
   * @example 1
   */
  qrId?: number;
  /**
   * 응답 메시지
   * @example "스탬프가 성공적으로 저장되었습니다."
   */
  message?: string;
  /**
   * 스캔 시간(서버에서자동)
   * @format date-time
   * @example "2023-10-01T12:00:00"
   */
  scanTime?: string;
  /**
   * 시장 ID
   * @format int64
   * @example 7
   */
  marketId?: number;
  /**
   * 시장 이름
   * @example "중앙시장"
   */
  marketName?: string;
  /**
   * 장소 이름
   * @example "입구"
   */
  placeName?: string;
  /**
   * 총 스탬프 개수
   * @format int32
   * @example 5
   */
  totalStampCount?: number;
}

/** API 요청 성공시 리턴하는 response */
export interface ResponseCustomStampResponseDto {
  /** 스탬프 스캔 응답 DTO 입니다 */
  data?: StampResponseDto;
  /** @format date-time */
  transaction_time?: string;
  description?: string;
  status?:
    | "100 CONTINUE"
    | "101 SWITCHING_PROTOCOLS"
    | "102 PROCESSING"
    | "103 EARLY_HINTS"
    | "103 CHECKPOINT"
    | "200 OK"
    | "201 CREATED"
    | "202 ACCEPTED"
    | "203 NON_AUTHORITATIVE_INFORMATION"
    | "204 NO_CONTENT"
    | "205 RESET_CONTENT"
    | "206 PARTIAL_CONTENT"
    | "207 MULTI_STATUS"
    | "208 ALREADY_REPORTED"
    | "226 IM_USED"
    | "300 MULTIPLE_CHOICES"
    | "301 MOVED_PERMANENTLY"
    | "302 FOUND"
    | "302 MOVED_TEMPORARILY"
    | "303 SEE_OTHER"
    | "304 NOT_MODIFIED"
    | "305 USE_PROXY"
    | "307 TEMPORARY_REDIRECT"
    | "308 PERMANENT_REDIRECT"
    | "400 BAD_REQUEST"
    | "401 UNAUTHORIZED"
    | "402 PAYMENT_REQUIRED"
    | "403 FORBIDDEN"
    | "404 NOT_FOUND"
    | "405 METHOD_NOT_ALLOWED"
    | "406 NOT_ACCEPTABLE"
    | "407 PROXY_AUTHENTICATION_REQUIRED"
    | "408 REQUEST_TIMEOUT"
    | "409 CONFLICT"
    | "410 GONE"
    | "411 LENGTH_REQUIRED"
    | "412 PRECONDITION_FAILED"
    | "413 PAYLOAD_TOO_LARGE"
    | "413 REQUEST_ENTITY_TOO_LARGE"
    | "414 URI_TOO_LONG"
    | "414 REQUEST_URI_TOO_LONG"
    | "415 UNSUPPORTED_MEDIA_TYPE"
    | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
    | "417 EXPECTATION_FAILED"
    | "418 I_AM_A_TEAPOT"
    | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
    | "420 METHOD_FAILURE"
    | "421 DESTINATION_LOCKED"
    | "422 UNPROCESSABLE_ENTITY"
    | "423 LOCKED"
    | "424 FAILED_DEPENDENCY"
    | "425 TOO_EARLY"
    | "426 UPGRADE_REQUIRED"
    | "428 PRECONDITION_REQUIRED"
    | "429 TOO_MANY_REQUESTS"
    | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
    | "500 INTERNAL_SERVER_ERROR"
    | "501 NOT_IMPLEMENTED"
    | "502 BAD_GATEWAY"
    | "503 SERVICE_UNAVAILABLE"
    | "504 GATEWAY_TIMEOUT"
    | "505 HTTP_VERSION_NOT_SUPPORTED"
    | "506 VARIANT_ALSO_NEGOTIATES"
    | "507 INSUFFICIENT_STORAGE"
    | "508 LOOP_DETECTED"
    | "509 BANDWIDTH_LIMIT_EXCEEDED"
    | "510 NOT_EXTENDED"
    | "511 NETWORK_AUTHENTICATION_REQUIRED";
  /** @format int32 */
  statusCode?: number;
}

export interface RewardResponse {
  giftCardName?: string;
  /** @format int32 */
  cost?: number;
  /** @format int32 */
  amount?: number;
  ImageName?: string;
  imageUrl?: string;
}

/** 즐겨찾기 추가용 request DTO입니다. */
export interface FavRequestDto {
  /** @format int64 */
  marketId?: number;
}

/** 즐겨찾기 API respons DTO입니다. */
export interface FavResponseDto {
  /** @format int64 */
  favId?: number;
  /** @format int64 */
  marketId?: number;
  marketName?: string;
}

/** API 요청 성공시 리턴하는 response */
export interface ResponseCustomFavResponseDto {
  /** 즐겨찾기 API respons DTO입니다. */
  data?: FavResponseDto;
  /** @format date-time */
  transaction_time?: string;
  description?: string;
  status?:
    | "100 CONTINUE"
    | "101 SWITCHING_PROTOCOLS"
    | "102 PROCESSING"
    | "103 EARLY_HINTS"
    | "103 CHECKPOINT"
    | "200 OK"
    | "201 CREATED"
    | "202 ACCEPTED"
    | "203 NON_AUTHORITATIVE_INFORMATION"
    | "204 NO_CONTENT"
    | "205 RESET_CONTENT"
    | "206 PARTIAL_CONTENT"
    | "207 MULTI_STATUS"
    | "208 ALREADY_REPORTED"
    | "226 IM_USED"
    | "300 MULTIPLE_CHOICES"
    | "301 MOVED_PERMANENTLY"
    | "302 FOUND"
    | "302 MOVED_TEMPORARILY"
    | "303 SEE_OTHER"
    | "304 NOT_MODIFIED"
    | "305 USE_PROXY"
    | "307 TEMPORARY_REDIRECT"
    | "308 PERMANENT_REDIRECT"
    | "400 BAD_REQUEST"
    | "401 UNAUTHORIZED"
    | "402 PAYMENT_REQUIRED"
    | "403 FORBIDDEN"
    | "404 NOT_FOUND"
    | "405 METHOD_NOT_ALLOWED"
    | "406 NOT_ACCEPTABLE"
    | "407 PROXY_AUTHENTICATION_REQUIRED"
    | "408 REQUEST_TIMEOUT"
    | "409 CONFLICT"
    | "410 GONE"
    | "411 LENGTH_REQUIRED"
    | "412 PRECONDITION_FAILED"
    | "413 PAYLOAD_TOO_LARGE"
    | "413 REQUEST_ENTITY_TOO_LARGE"
    | "414 URI_TOO_LONG"
    | "414 REQUEST_URI_TOO_LONG"
    | "415 UNSUPPORTED_MEDIA_TYPE"
    | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
    | "417 EXPECTATION_FAILED"
    | "418 I_AM_A_TEAPOT"
    | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
    | "420 METHOD_FAILURE"
    | "421 DESTINATION_LOCKED"
    | "422 UNPROCESSABLE_ENTITY"
    | "423 LOCKED"
    | "424 FAILED_DEPENDENCY"
    | "425 TOO_EARLY"
    | "426 UPGRADE_REQUIRED"
    | "428 PRECONDITION_REQUIRED"
    | "429 TOO_MANY_REQUESTS"
    | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
    | "500 INTERNAL_SERVER_ERROR"
    | "501 NOT_IMPLEMENTED"
    | "502 BAD_GATEWAY"
    | "503 SERVICE_UNAVAILABLE"
    | "504 GATEWAY_TIMEOUT"
    | "505 HTTP_VERSION_NOT_SUPPORTED"
    | "506 VARIANT_ALSO_NEGOTIATES"
    | "507 INSUFFICIENT_STORAGE"
    | "508 LOOP_DETECTED"
    | "509 BANDWIDTH_LIMIT_EXCEEDED"
    | "510 NOT_EXTENDED"
    | "511 NETWORK_AUTHENTICATION_REQUIRED";
  /** @format int32 */
  statusCode?: number;
}

/** 유저 회원가입용 requestDTO입니다. */
export interface SignupRequest {
  /**
   * @minLength 3
   * @maxLength 10
   */
  username: string;
  email?: string;
  /**
   * @minLength 8
   * @maxLength 15
   */
  password: string;
}

/** jwt 토큰이 반환되는 responseDTO입니다. */
export interface JwtResponse {
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
}

/** 유저 로그인용 request DTO입니다. */
export interface LoginRequest {
  /**
   * @minLength 3
   * @maxLength 10
   */
  username: string;
  email?: string;
  /**
   * @minLength 8
   * @maxLength 15
   */
  password: string;
}

/** 시장의 조회용 response DTO입니다. */
export interface MarketResponse {
  /** @format int64 */
  marketId?: number;
  marketName?: string;
  region?: string;
  address?: string;
  bookmarked?: boolean;
  isAllCollected?: boolean;
}

/** 시장의 상제정보 조회용 response DTO입니다. */
export interface SearchMarketRequest {
  keyword?: string;
}

export interface SearchMarketDetailRequest {
  /** @format int64 */
  marketId?: number;
}

/** 시장의 상제정보 조회용 response DTO입니다. */
export interface MarketDetailResponse {
  marketName?: string;
  region?: string;
  address?: string;
  imgUrl?: string;
  /** @format int32 */
  actual?: number;
  /** @format int32 */
  required?: number;
  /** @format int32 */
  facilityCount?: number;
  facilities?: string[];
}

/** API 요청 성공시 리턴하는 response */
export interface ResponseCustomListFavResponseDto {
  data?: FavResponseDto[];
  /** @format date-time */
  transaction_time?: string;
  description?: string;
  status?:
    | "100 CONTINUE"
    | "101 SWITCHING_PROTOCOLS"
    | "102 PROCESSING"
    | "103 EARLY_HINTS"
    | "103 CHECKPOINT"
    | "200 OK"
    | "201 CREATED"
    | "202 ACCEPTED"
    | "203 NON_AUTHORITATIVE_INFORMATION"
    | "204 NO_CONTENT"
    | "205 RESET_CONTENT"
    | "206 PARTIAL_CONTENT"
    | "207 MULTI_STATUS"
    | "208 ALREADY_REPORTED"
    | "226 IM_USED"
    | "300 MULTIPLE_CHOICES"
    | "301 MOVED_PERMANENTLY"
    | "302 FOUND"
    | "302 MOVED_TEMPORARILY"
    | "303 SEE_OTHER"
    | "304 NOT_MODIFIED"
    | "305 USE_PROXY"
    | "307 TEMPORARY_REDIRECT"
    | "308 PERMANENT_REDIRECT"
    | "400 BAD_REQUEST"
    | "401 UNAUTHORIZED"
    | "402 PAYMENT_REQUIRED"
    | "403 FORBIDDEN"
    | "404 NOT_FOUND"
    | "405 METHOD_NOT_ALLOWED"
    | "406 NOT_ACCEPTABLE"
    | "407 PROXY_AUTHENTICATION_REQUIRED"
    | "408 REQUEST_TIMEOUT"
    | "409 CONFLICT"
    | "410 GONE"
    | "411 LENGTH_REQUIRED"
    | "412 PRECONDITION_FAILED"
    | "413 PAYLOAD_TOO_LARGE"
    | "413 REQUEST_ENTITY_TOO_LARGE"
    | "414 URI_TOO_LONG"
    | "414 REQUEST_URI_TOO_LONG"
    | "415 UNSUPPORTED_MEDIA_TYPE"
    | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
    | "417 EXPECTATION_FAILED"
    | "418 I_AM_A_TEAPOT"
    | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
    | "420 METHOD_FAILURE"
    | "421 DESTINATION_LOCKED"
    | "422 UNPROCESSABLE_ENTITY"
    | "423 LOCKED"
    | "424 FAILED_DEPENDENCY"
    | "425 TOO_EARLY"
    | "426 UPGRADE_REQUIRED"
    | "428 PRECONDITION_REQUIRED"
    | "429 TOO_MANY_REQUESTS"
    | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
    | "500 INTERNAL_SERVER_ERROR"
    | "501 NOT_IMPLEMENTED"
    | "502 BAD_GATEWAY"
    | "503 SERVICE_UNAVAILABLE"
    | "504 GATEWAY_TIMEOUT"
    | "505 HTTP_VERSION_NOT_SUPPORTED"
    | "506 VARIANT_ALSO_NEGOTIATES"
    | "507 INSUFFICIENT_STORAGE"
    | "508 LOOP_DETECTED"
    | "509 BANDWIDTH_LIMIT_EXCEEDED"
    | "510 NOT_EXTENDED"
    | "511 NETWORK_AUTHENTICATION_REQUIRED";
  /** @format int32 */
  statusCode?: number;
}

/** API 요청 성공시 리턴하는 response */
export interface ResponseCustomVoid {
  data?: object;
  /** @format date-time */
  transaction_time?: string;
  description?: string;
  status?:
    | "100 CONTINUE"
    | "101 SWITCHING_PROTOCOLS"
    | "102 PROCESSING"
    | "103 EARLY_HINTS"
    | "103 CHECKPOINT"
    | "200 OK"
    | "201 CREATED"
    | "202 ACCEPTED"
    | "203 NON_AUTHORITATIVE_INFORMATION"
    | "204 NO_CONTENT"
    | "205 RESET_CONTENT"
    | "206 PARTIAL_CONTENT"
    | "207 MULTI_STATUS"
    | "208 ALREADY_REPORTED"
    | "226 IM_USED"
    | "300 MULTIPLE_CHOICES"
    | "301 MOVED_PERMANENTLY"
    | "302 FOUND"
    | "302 MOVED_TEMPORARILY"
    | "303 SEE_OTHER"
    | "304 NOT_MODIFIED"
    | "305 USE_PROXY"
    | "307 TEMPORARY_REDIRECT"
    | "308 PERMANENT_REDIRECT"
    | "400 BAD_REQUEST"
    | "401 UNAUTHORIZED"
    | "402 PAYMENT_REQUIRED"
    | "403 FORBIDDEN"
    | "404 NOT_FOUND"
    | "405 METHOD_NOT_ALLOWED"
    | "406 NOT_ACCEPTABLE"
    | "407 PROXY_AUTHENTICATION_REQUIRED"
    | "408 REQUEST_TIMEOUT"
    | "409 CONFLICT"
    | "410 GONE"
    | "411 LENGTH_REQUIRED"
    | "412 PRECONDITION_FAILED"
    | "413 PAYLOAD_TOO_LARGE"
    | "413 REQUEST_ENTITY_TOO_LARGE"
    | "414 URI_TOO_LONG"
    | "414 REQUEST_URI_TOO_LONG"
    | "415 UNSUPPORTED_MEDIA_TYPE"
    | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
    | "417 EXPECTATION_FAILED"
    | "418 I_AM_A_TEAPOT"
    | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
    | "420 METHOD_FAILURE"
    | "421 DESTINATION_LOCKED"
    | "422 UNPROCESSABLE_ENTITY"
    | "423 LOCKED"
    | "424 FAILED_DEPENDENCY"
    | "425 TOO_EARLY"
    | "426 UPGRADE_REQUIRED"
    | "428 PRECONDITION_REQUIRED"
    | "429 TOO_MANY_REQUESTS"
    | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
    | "500 INTERNAL_SERVER_ERROR"
    | "501 NOT_IMPLEMENTED"
    | "502 BAD_GATEWAY"
    | "503 SERVICE_UNAVAILABLE"
    | "504 GATEWAY_TIMEOUT"
    | "505 HTTP_VERSION_NOT_SUPPORTED"
    | "506 VARIANT_ALSO_NEGOTIATES"
    | "507 INSUFFICIENT_STORAGE"
    | "508 LOOP_DETECTED"
    | "509 BANDWIDTH_LIMIT_EXCEEDED"
    | "510 NOT_EXTENDED"
    | "511 NETWORK_AUTHENTICATION_REQUIRED";
  /** @format int32 */
  statusCode?: number;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://43.200.191.61:8080",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title 충남톤 도장찍어가유 프로젝트 API
 * @version 1.0
 * @baseUrl http://43.200.191.61:8080
 *
 * 충남톤 칠면조팀의 스탬프 투어 기반 전통시장 활성화 앱 프로젝트 API 문서
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  qr = {
    /**
     * No description
     *
     * @tags qr-create-controller
     * @name GenerateQrCode
     * @request POST:/qr/generate
     * @secure
     */
    generateQrCode: (data: QrCreateRequest, params: RequestParams = {}) =>
      this.request<QrCreateResponse, any>({
        path: `/qr/generate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @tags refreshToken 발급 컨트롤러
     * @name Refresh
     * @summary 리프레시 토큰을 사용해 새 액세스 토큰 발급
     * @request POST:/api/token/refresh
     * @secure
     */
    refresh: (params: RequestParams = {}) =>
      this.request<ResponseCustomObject, any>({
        path: `/api/token/refresh`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description JWT로 인증된 사용자가 QR 코드를 스캔해 스탬프를 저장합니다.
     *
     * @tags 스탬프 API
     * @name ScanStamp
     * @summary 스탬프 저장 (Scan)
     * @request POST:/api/stamps/scan
     * @secure
     */
    scanStamp: (data: StampRequestDto, params: RequestParams = {}) =>
      this.request<StampResponseDto, ResponseCustomStampResponseDto>({
        path: `/api/stamps/scan`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 시장의 스탬프를 상품권을 교환합니다.
     *
     * @tags 사용자 보유 상품권 API
     * @name ChangeStamp2Reward
     * @summary 상품권 교환
     * @request POST:/api/rewards/{marketId}
     * @secure
     */
    changeStamp2Reward: (marketId: number, params: RequestParams = {}) =>
      this.request<RewardResponse[], any>({
        path: `/api/rewards/${marketId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description JWT 토큰을 통해 유저 정보를 받아 유저의 즐겨찾기 목록을 조회합니다.
     *
     * @tags 시장 즐겨찾기 API
     * @name ListBookmarks
     * @summary 시장 즐겨찾기 목록 조회
     * @request GET:/api/bookmarks
     * @secure
     */
    listBookmarks: (params: RequestParams = {}) =>
      this.request<FavResponseDto[], ResponseCustomListFavResponseDto>({
        path: `/api/bookmarks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description JWT 토큰을 통해 유저 정보를 받아 시장을 유저의 즐겨찾기 목록에 추가합니다.
     *
     * @tags 시장 즐겨찾기 API
     * @name AddBookmark
     * @summary 시장을 즐겨찾기에 추가
     * @request POST:/api/bookmarks
     * @secure
     */
    addBookmark: (data: FavRequestDto, params: RequestParams = {}) =>
      this.request<FavResponseDto, ResponseCustomFavResponseDto>({
        path: `/api/bookmarks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 회원가입과 로그인을 수행합니다.
     *
     * @tags 권한 인증 API
     * @name SignupUser
     * @summary 회원가입 후 로그인
     * @request POST:/api/auth/signup
     * @secure
     */
    signupUser: (data: SignupRequest, params: RequestParams = {}) =>
      this.request<JwtResponse, ResponseCustomObject>({
        path: `/api/auth/signup`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 로그인을 수행합니다.
     *
     * @tags 권한 인증 API
     * @name LoginUser
     * @summary 유저 로그인
     * @request POST:/api/auth/login
     * @secure
     */
    loginUser: (data: LoginRequest, params: RequestParams = {}) =>
      this.request<JwtResponse, ResponseCustomObject>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description JWT로 인증된 사용자가 보유한 상품권을 조회합니다.
     *
     * @tags 사용자 보유 상품권 API
     * @name GetAllRewardByUserId
     * @summary 상품권 조회
     * @request GET:/api/rewards
     * @secure
     */
    getAllRewardByUserId: (params: RequestParams = {}) =>
      this.request<RewardResponse[], any>({
        path: `/api/rewards`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 스탬프를 하나 이상 보유한 시장을 조회합니다.
     *
     * @tags 유저 정보 관련 API
     * @name GetMarketListByUser
     * @summary 스탬프 현황이 포함된 시장 조회
     * @request GET:/api/my/markets
     * @secure
     */
    getMarketListByUser: (
      query?: {
        /** @default "completed" */
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MarketResponse[], any>({
        path: `/api/my/markets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DB 내에 저장된 전통시장 목록을 조회합니다.
     *
     * @tags 시장 관련 API
     * @name SearchMarkets
     * @summary 시장 목록 조회
     * @request GET:/api/markets/search
     * @secure
     */
    searchMarkets: (data: SearchMarketRequest, params: RequestParams = {}) =>
      this.request<MarketResponse[], ResponseCustomObject>({
        path: `/api/markets/search`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 시장의 주소, 편의시설 등 상세 정보를 조회합니다.
     *
     * @tags 시장 관련 API
     * @name GetMarketDetail
     * @summary 시장의 상세 정보 조회
     * @request GET:/api/markets/detail
     * @secure
     */
    getMarketDetail: (
      data: SearchMarketDetailRequest,
      params: RequestParams = {},
    ) =>
      this.request<MarketDetailResponse, ResponseCustomObject>({
        path: `/api/markets/detail`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description JWT 토큰을 통해 유저 정보를 받아 시장을 유저의 즐겨찾기 목록에서 삭제합니다.
     *
     * @tags 시장 즐겨찾기 API
     * @name RemoveBookmark
     * @summary 시장을 즐겨찾기에서 삭제
     * @request DELETE:/api/bookmarks/{marketId}
     * @secure
     */
    removeBookmark: (marketId: number, params: RequestParams = {}) =>
      this.request<ResponseCustomVoid, ResponseCustomVoid>({
        path: `/api/bookmarks/${marketId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
