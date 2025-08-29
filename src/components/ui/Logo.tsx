import Image from 'next/image'

type LogoProps = Omit<React.ComponentPropsWithoutRef<'img'>, 'src'>

export function Logo(props: LogoProps) {
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
