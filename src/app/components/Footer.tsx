export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-8 px-6 text-center">
      <p className="text-sm">
        <strong className="text-gray-200">Blossoms Inspirella</strong> — Treasure Your Memories
      </p>
      <p className="text-xs mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
