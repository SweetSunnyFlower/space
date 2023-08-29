'use client'

import React, { createContext, useState, useEffect } from 'react'
import { fetchPostList, fetchProjectList } from 'lib/fetch'
import { type ListType } from 'lib/file'

type ProviderValueType = {
  posts: ListType[],
  projects:  ListType[],
  [key: string]: any
}

export const CommandContext = createContext<ProviderValueType>({
  posts: [],
  projects: [],
})

export default function PostProvider({
  versions,
  children
}: {
  versions?: Record<string, string>
  children: React.ReactNode
}) {
  const [providerValue, setProviderValue] = useState<ProviderValueType>({
    posts: [],
    projects: [],
  })

  const fetch = async () => {
    const posts = await fetchPostList()
    const projects = await fetchProjectList()
    setProviderValue({ posts, projects })
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <CommandContext.Provider value={{ ...providerValue, versions }}>
      {children}
    </CommandContext.Provider>
  )
}
