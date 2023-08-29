import { NextResponse } from 'next/server'
import { getProjectList } from 'lib/project'

export async function GET() {
  const res = getProjectList()
  return NextResponse.json(res)
}
