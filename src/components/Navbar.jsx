export default function Navbar({ dark, toggleDark }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold dark:text-white">🎥 Video AI Chat</h1>
      <button onClick={toggleDark} className="text-2xl">
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  )
}
