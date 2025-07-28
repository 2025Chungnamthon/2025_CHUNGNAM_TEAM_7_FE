import {
  Api,
  SearchMarketRequest,
  SearchMarketDetailRequest,
  MarketResponse,
  MarketDetailResponse,
} from '@/api/api';
import { http } from './http';

const BASE_URL = 'http://43.200.191.61:8080';
const api = new Api(); // http 인스턴스는 default로 주입

/**
 * 시장 목록 조회
 * @param keyword 검색어 (없으면 전체 목록)
 * @returns MarketSummary[]
 */
export async function fetchMarketList(
  keyword?: string,
): Promise<MarketResponse[]> {
  // GET /api/markets/search
  // Swagger 스펙 상 body로 { keyword } 를 받도록 되어 있습니다.
  const req: SearchMarketRequest = { keyword };
  const res = await api.api.searchMarkets(req);
  return res.data;
}

/**
 * 시장 상세 정보 조회
 * @param marketId 조회할 시장 ID
 * @returns MarketDetailResponse
 */
export async function fetchMarketDetail(
  marketId: number,
): Promise<MarketDetailResponse> {
  // GET /api/markets/detail
  // Swagger 스펙 상 body로 { marketId } 와 Authorization 헤더를 받습니다.
  const req: SearchMarketDetailRequest = { marketId };
  const res = await api.api.getMarketDetail(req);
  return res.data;
}
