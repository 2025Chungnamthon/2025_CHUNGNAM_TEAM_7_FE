import { Api, MarketResponse } from '@/api/api';

const api = new Api();

/**
 * 내 스탬프 현황이 포함된 시장 목록 조회
 * GET /api/my/markets?status=completed
 * @param status 조회할 스탬프 상태 (기본값 'completed')
 */
export async function fetchMyMarkets(
  status: 'completed' | string = 'completed',
): Promise<MarketResponse[]> {
  // Swagger 스펙 상 query parameter로 status 전달
  const res = await api.api.getMarketListByUser({ status });
  return res.data;
}
