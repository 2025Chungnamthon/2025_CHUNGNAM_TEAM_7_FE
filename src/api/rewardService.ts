import { Api, RewardResponse } from '@/api/api';

const api = new Api();

/**
 * 시장 스탬프로 상품권 교환
 * @param marketId 교환할 시장의 ID
 * @returns 교환 후에 업데이트된 상품권 목록
 */
export async function exchangeReward(
  marketId: number,
): Promise<RewardResponse[]> {
  // POST /api/rewards/{marketId}
  const res = await api.api.changeStamp2Reward(marketId);
  return res.data;
}

/**
 * 사용자 보유 상품권 조회
 * @returns 현재 사용자가 가진 모든 상품권 목록
 */
export async function fetchUserRewards(): Promise<RewardResponse[]> {
  // GET /api/rewards
  const res = await api.api.getAllRewardByUserId();
  return res.data;
}
