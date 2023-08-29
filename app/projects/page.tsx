import Link from 'next/link'
import { fetchProjectList } from 'lib/fetch'

export default async function Project() {
  const projects = await fetchProjectList().catch(() => [])

  const dateList = [
    ...new Set(
      projects.map((project) => project.date.split('-').shift() as string)
    )
  ].sort((a, b) => Number(b) - Number(a))

  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      {dateList.map((date) => (
        <div key={date} className="mb-16">
          <h1 className="text-3xl mb-8">{date}</h1>
          <ul>
            {sortedProjects.map(
              ({ slug, title, description, date: projectDate }) => {
                if (projectDate.includes(date)) {
                  return (
                    <li
                      key={slug}
                      className="prose prose-custom dark:prose-invert max-w-none mb-5"
                    >
                      <Link
                        href={`/projects/${slug}`}
                        className="text-lg hover:text-sky-500 hover:underline dark:text-slate-300 dark:hover:text-sky-500"
                      >
                        {title}
                      </Link>
                      <blockquote className="mt-2 text-neutral-500 dark:text-neutral-400">
                        {description}
                      </blockquote>
                    </li>
                  )
                }
              }
            )}
          </ul>
        </div>
      ))}
    </>
  )
}
