import Image from 'next/image'
import logoSvg from '../../../public/acce_logo_with_text.svg'

type LogoProps = Omit<
  React.ComponentPropsWithoutRef<'img'>,
  'src' | 'width' | 'height'
>

export function Logo(props: LogoProps) {
  return (
    <Image
      src={logoSvg}
      alt="ACCE Logo"
      width={109}
      height={40}
      {...props}
    />
  )
}