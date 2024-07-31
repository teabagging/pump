import { PumpCoin, PumpDetail } from "common/types"

export async function getSolanaTokenList(): Promise<SolscanToken[]> {
  const requestOptions = {
    method: "GET",
    headers: {
      "token": "HY012210yxj@" // 确保这是有效的Solscan API密钥
    }
  };
export async function getPumpList(): Promise<PumpCoin[]>{
  const res = await fetch("https://pro-api.solscan.io/v1.0/token/list?sortBy=market_cap&direction=desc&limit=50", requestOptions)
  const data = await res.json()
  if(data.code === 0){
    return data.data.rank
  }
  return []
}
