import React from "react"
import { RoomsTable } from "./table"

// This is important, if not set, this page will be statically generated causing the build to fail
// as the build process would need to have access to the database / api's
export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Rooms ',
}


export default async function Rooms() {
  return <RoomsTable />
}
