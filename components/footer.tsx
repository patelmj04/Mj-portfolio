export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Mit Patel. All rights reserved.</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Designed and built with ❤️ by Mit Patel</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

