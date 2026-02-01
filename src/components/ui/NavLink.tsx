import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center whitespace-nowrap rounded-lg px-2 py-1.5 text-base/6 font-semibold text-charcoal-700 hover:bg-charcoal-100 hover:text-charcoal-900"
    >
      {children}
    </Link>
  )
}
