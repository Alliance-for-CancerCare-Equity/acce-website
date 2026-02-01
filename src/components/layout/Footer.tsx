import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

const navigation = {
  about: [
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'Meet the Board', href: '/meet-the-board' },
    { name: 'ACCE Champions', href: '/acce-champions' },
    { name: 'Annual Reports', href: '/annual-reports' },
  ],
  projects: [
    { name: 'Projects Overview', href: '/projects-overview' },
    { name: 'Fund Cancer Treatment', href: '/fund-cancer-treatment-and-related-costs' },
    { name: 'Support Health Centers', href: '/support-community-healthcare-centers' },
    { name: 'Patient & Family Support', href: '/support-patients-and-their-families' },
  ],
  getInvolved: [
    { name: 'Giving Options', href: '/giving-options' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Fundraise', href: '/fundraise' },
    { name: 'Partner With Us', href: '/partner-with-us' },
  ],
  connect: [
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Events', href: '/events' },
    { name: 'Newsletters', href: '/newsletters' },
  ],
  social: [
    {
      name: 'X',
      href: 'https://x.com/ACCE_CA',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/allianceforcancercareequity/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/people/Alliance-for-CancerCare-Equity/100083299359161/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCwQGIDolmsJdNfdyIZhJiPw',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/allianceforcancercareequity/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

// Wave SVG for top divider
function WaveDivider() {
  return (
    <div className="absolute inset-x-0 -top-16 overflow-hidden">
      <svg
        className="relative block w-full h-16"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          className="fill-white"
          opacity="0.15"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          className="fill-white"
          opacity="0.3"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="fill-white"
        />
      </svg>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-charcoal-800 pt-20 mt-16">
      <WaveDivider />

      {/* Gold accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section with CTA */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in the Fight for{' '}
            <span className="text-gold-400">Cancer Care Equity</span>
          </h2>
          <p className="text-charcoal-300 max-w-2xl mb-6">
            Every contribution helps us provide hope and support to cancer patients and their families.
          </p>
          <Button href="/giving-options" variant="cta" size="lg">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Donate Now
          </Button>
        </div>

        {/* Navigation grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 pb-12 border-b border-charcoal-700">
          <div>
            <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
              About Us
            </h3>
            <ul className="space-y-3">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-charcoal-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
              Our Projects
            </h3>
            <ul className="space-y-3">
              {navigation.projects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-charcoal-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
              Get Involved
            </h3>
            <ul className="space-y-3">
              {navigation.getInvolved.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-charcoal-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {navigation.connect.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-charcoal-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-700 text-charcoal-300 transition-all hover:bg-teal-500 hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-charcoal-700 py-6 text-center">
          <p className="text-sm text-charcoal-400">
            &copy; {new Date().getFullYear()} Alliance for Cancer Care Equity. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-500 mt-2">
            A 501(c)(3) nonprofit organization. EIN: XX-XXXXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}

export function CompactFooter() {
  return (
    <footer className="bg-charcoal-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-charcoal-700 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo />
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/who-we-are' },
                { name: 'Donate', href: '/giving-options' },
                { name: 'Contact', href: '/contact-us' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-charcoal-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex gap-3">
              {navigation.social.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
