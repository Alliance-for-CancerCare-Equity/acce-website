import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'img'>) {
  return (
    <Image
      src="/acce_logo_with_text.svg"
      alt="ACCE Logo"
      width={109}
      height={40}
      {...props}
    />
  )
}
