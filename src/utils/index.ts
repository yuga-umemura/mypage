import { error } from "console";

export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit
): Promise<any> => {
  const res = await fetch(resource, init);

  if (!res.ok) {
    // レスポンスが失敗したときの例外処理
    const errRes = await res.json();
    const newErr = new Error(
      errRes.message ?? "APIリクエスト中にエラーが発生しました。"
    );

    throw error;
  }
  return res.json();
};
