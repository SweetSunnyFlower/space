import { getDirPath, getMDXs, getListWithMeta } from './file'

const projectDirPath = getDirPath('mdxs/projects')

// 项目名称列表
export function getProjectList() {
  const porjectMdxs = getMDXs(projectDirPath)
  return porjectMdxs
}

// 项目元数据列表
export function getProjectMetaList() {
  const projects = getProjectList()
  return getListWithMeta(projects, projectDirPath)
}

// 根据项目名称获取title， date
export function getTitleAndDateBySlug(slug: string) {
  const projects = getProjectMetaList()

  const meta = projects.find((project) => project.slug === slug)
  if (!meta) {
    return {}
  }
  const { title, date } = meta
  return { title, date }
}
