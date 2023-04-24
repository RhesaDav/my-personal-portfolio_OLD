import { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Projects', href: '/projects', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
    const router = useRouter();
  
    return (
      <Disclosure as="aside" className="bg-gray-900 text-white w-64 flex-shrink-0">
        {({ open }) => (
          <>
            <div className="p-6 font-bold text-xl">Dashboard</div>
            <nav className="flex flex-col flex-1">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <button
                    className={classNames(
                      'p-4 hover:bg-gray-800',
                      item.current ? 'bg-gray-800' : '',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
            </nav>
            <div className="flex justify-end">
              <Disclosure.Button className="p-4">
                <span className="sr-only">Toggle sidebar</span>
                {open ? (
                  // <XIcon className="h-6 w-6" aria-hidden="true" />
                  <h1>X</h1>
                ) : (
                  // <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  <h1>Menu</h1>
                )}
              </Disclosure.Button>
            </div>
          </>
        )}
      </Disclosure>
    );
  };

const DashboardLayout:FC<any> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
