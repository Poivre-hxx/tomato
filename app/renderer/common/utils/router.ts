/**
 * @description 判断是否属于外部链接
 * @param {string} url
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\s*/;
  return regRule.test(url.toLowerCase());
}
