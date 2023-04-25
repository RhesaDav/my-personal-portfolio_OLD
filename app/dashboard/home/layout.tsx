import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function layout({children}:{children: ReactNode}) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-1/5 h-screen">
        <nav className="mt-6">
          <Link href="/dashboard/home" className="block py-2 px-4 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/dashboard/home/about" className="block py-2 px-4 hover:bg-gray-700">
            About
          </Link>
          <Link href="/dashboard/home/project" className="block py-2 px-4 hover:bg-gray-700">
            Projects
          </Link>
          <Link href="/dashboard/home" className="block py-2 px-4 hover:bg-gray-700">
            Contact
          </Link>
        </nav>
        <div className="absolute bottom-0 mb-4">
          <Link href="/personal" className="block py-2 px-4 text-gray-500 hover:text-white">
              View Personal Website
          </Link>
          <button className="block py-2 px-4 text-gray-500 hover:text-white">
            Logout
          </button>
        </div>
      </aside>
      {children}
    </div>
  )
}
