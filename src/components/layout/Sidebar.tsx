import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

export default function Sidebar() {
  return (
    <aside className="w-72 px-8 py-10 border-r border-black/5 hidden md:flex">
      <nav className="flex flex-col gap-6 text-[20px] font-light">
        {categories.map((c) => (
          <Link
            key={c.id}
            to={c.path}
            className="text-[var(--muted)]
                hover:text-[var(--text)]
                transition-colors"
          >
            {c.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
