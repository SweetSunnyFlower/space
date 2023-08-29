import LoadMDX, { type LoadMDXPropsType } from '@/components/LoadMDX'
import { fetchProjectList } from 'lib/fetch'
import { getTitleAndDateBySlug } from 'lib/project'

export function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { title } = getTitleAndDateBySlug(slug)
  return {
    title
  }
}

export async function generateStaticParams() {
  const projects = await fetchProjectList(false)
  return projects.map((project) => ({
    slug: project
  }))
}

export default function ProjectDetail({
  params: { slug }
}: {
  params: { slug: string }
  }) {

  const { title = '', date = '' } = getTitleAndDateBySlug(slug)

  const source = 'projects'

  const props: LoadMDXPropsType = {
    slug,
    title,
    date,
    source
  }

  return (
    <article className="prose dark:prose-invert max-w-none pb-16">
      <LoadMDX {...props} />
    </article>
  )
}
