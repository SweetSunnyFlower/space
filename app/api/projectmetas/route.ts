import { NextResponse } from 'next/server'
import { getProjectMetaList } from 'lib/project'

export async function GET() {
  const res = getProjectMetaList()
  return NextResponse.json(res)
}
