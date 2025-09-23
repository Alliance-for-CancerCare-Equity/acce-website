import Image from 'next/image'
import logoSvg from '../../../public/acce_logo_with_text.svg'

type LogoProps = Omit<
  React.ComponentPropsWithoutRef<'img'>,
  'src' | 'width' | 'height'
> & {
  width?: number
  height?: number
}

export function Logo({ width = 180, height = 66, ...props }: LogoProps) {
  return (
    <Image src={logoSvg} alt="ACCE Logo" width={width} height={height} {...props} />
  )
}
