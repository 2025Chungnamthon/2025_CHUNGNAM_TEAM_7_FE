// src/api/bookmarkService.ts

import { Api, FavRequestDto, FavResponseDto } from '@/api/api';

const api = new Api();

/**
 * 즐겨찾기 추가
 * POST /api/bookmarks
 * @param marketId 즐겨찾기에 추가할 시장 ID
 */
export async function addBookmark(marketId: number): Promise<FavResponseDto> {
  const payload: FavRequestDto = { marketId };
  const res = await api.api.addBookmark(payload);
  return res.data;
}

/**
 * 즐겨찾기 삭제
 * DELETE /api/bookmarks/{marketId}
 * @param marketId 즐겨찾기에서 제거할 시장 ID
 */
export async function removeBookmark(marketId: number): Promise<void> {
  await api.api.removeBookmark(marketId);
}
