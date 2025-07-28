import { Api, StampRequestDto, StampResponseDto } from '@/api/api';

const api = new Api();

/**
 * QR 코드 스캔 후 스탬프 적립
 * POST /api/stamps/scan
 * @param qrId 스캔한 QR 코드 ID
 * @returns 적립된 스탬프 정보
 */
export async function scanStamp(qrId: number): Promise<StampResponseDto> {
  const payload: StampRequestDto = { qrId };
  const res = await api.api.scanStamp(payload);
  return res.data;
}
