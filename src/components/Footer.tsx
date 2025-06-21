export default function Footer() {
    return (
      <footer className="bg-gray-900 py-12 text-sm text-gray-400">
        <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
          <nav className="flex gap-6">
            <a href="/privacy"  className="hover:text-white">Privacy</a>
            <a href="/terms"    className="hover:text-white">Terms</a>
            <a href="/contact"  className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    );
  }
  