import { type ListType } from './file'

const isNodeEnv = typeof window === 'undefined'
const base = isNodeEnv
  ? process.env.FETCH_URL
  : process.env.NEXT_PUBLIC_FETCH_URL

// export function fetchPostList<T = ListType[]>(withMeta?: true): Promise<T>
// export function fetchPostList<T = string[]>(withMeta?: false): Promise<T>

type FetchPostReturnType<T> = T extends true ? ListType[] : string[]
type FetchProjectReturnType<T> = T extends true ? ListType[] : string[]

/**
 * 请求文章(元数据)列表
 * @param withMeta default true boolean
 * @returns 文章列表 FetchPostReturnType<T>
 */
export async function fetchPostList<T extends boolean = true>(
  withMeta: T = true as T
): Promise<FetchPostReturnType<T>> {
  // 申明一个随机字符串
  const random = Math.random().toString(36).substr(2)
  const res = await fetch(`${base}/${withMeta ? 'postmetas' : 'posts'}?random=${random}`)
  return res.json()
}

/**
 * 请求weekly周刊列表
 * @param withMeta default true boolean
 * @returns 周刊列表
 */
export async function fetchWeeklyList(): Promise<ListType[]> {
  const res = await fetch(`${base}/weekly`)
  return res.json()
}

/**
 * 请求项目(元数据)列表
 * @param withMeta default true boolean
 * @returns 项目列表 FetchProjectReturnType<T>
 */
export async function fetchProjectList<T extends boolean = true>(
  withMeta: T = true as T
): Promise<FetchProjectReturnType<T>> {
  // 申明一个随机字符串
  const random = Math.random().toString(36).substr(2)
  const res = await fetch(`${base}/${withMeta ? 'projectmetas' : 'projects'}?random=${random}`)
  return res.json()
}