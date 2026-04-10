import Link from "next/link";

const footerColumns = [
  {
    title: "Home",
    links: [
      { label: "Home", href: "/" },
      { label: "Mission", href: "/#mission" },
      { label: "Services", href: "/#services" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Journey", href: "/about" },
      { label: "Facility", href: "/about#facility" },
      { label: "Notable Players", href: "/about#players" },
    ],
  },
  {
    title: "Coaches",
    links: [
      { label: "Coach Gao Jun", href: "/coaches" },
      { label: "Coach Cherry", href: "/coaches" },
      { label: "Coach Candy", href: "/coaches" },
      { label: "Coach Hank", href: "/coaches" },
      { label: "Coach Udaya", href: "/coaches" },
      { label: "Coach Ruth", href: "/coaches" },
    ],
  },
  {
    title: "Classes",
    links: [
      { label: "Youth Group Lessons", href: "/classes" },
      { label: "Private Lessons", href: "/classes" },
    ],
  },
  {
    title: "Membership",
    links: [
      { label: "Benefits", href: "/membership" },
      { label: "Plans", href: "/membership" },
    ],
  },
];

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Social icons row */}
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 pt-10 sm:px-6 lg:px-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
          <FacebookIcon className="h-5 w-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
          <InstagramIcon className="h-5 w-5" />
        </a>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Location & Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white">Location</h4>
            <p className="mt-3 text-sm text-gray-400">
              2727 Stingle Ave.
              <br />
              #10, Rosemead CA
              <br />
              91770
            </p>
            <h4 className="mt-6 font-heading text-sm font-bold text-white">Contact Us</h4>
            <p className="mt-2 text-sm text-gray-400">
              1-626-765-7772
              <br />
              info@californiatabletennis.com
            </p>
          </div>

          {/* League & Resources */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white">League</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/league" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Overview
                </Link>
              </li>
            </ul>
            <h4 className="mt-6 font-heading text-sm font-bold text-white">Resources</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">
            A Table Tennis Club by Former World Champion | 501(c)(3) Nonprofit Organization
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span>&copy; 2010 – Present California Table Tennis All Rights Reserved</span>
            <span className="hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
