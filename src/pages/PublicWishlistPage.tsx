import { useParams } from "react-router-dom";
import { useState } from "react";
import { publicWishlist } from "../data/publicWishlist";
import { type Item } from "../types/item";
import ItemModal from "../components/products/ItemModal";

export default function PublicWishlistPage() {
  const { slug } = useParams();
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* HEADER-LIKE INTRO */}
      <div className="px-8 md:px-16 py-12 border-b border-[var(--border)]">
        <h1 className="text-3xl font-medium mb-2">
          {publicWishlist.title}
        </h1>

        {publicWishlist.description && (
          <p className="text-[var(--muted)] max-w-xl">
            {publicWishlist.description}
          </p>
        )}

        <div className="mt-4 text-sm text-[var(--muted)]">
          Public wishlist • Share link: {slug}
        </div>
      </div>

      {/* GRID */}
      <main className="px-8 md:px-16 py-12">
        <section
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-x-8
            gap-y-14
          "
        >
          {publicWishlist.items.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <div
                className="
                  rounded-2xl
                  overflow-hidden
                  bg-white dark:bg-[#1a1a1a]
                  transition-transform
                  duration-200
                  hover:scale-[1.02]
                  cursor-pointer
                "
                onClick={() => setActiveItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>

              <div className="text-sm text-[var(--text)]">
                {item.title}
              </div>

              {item.price && (
                <div className="text-sm text-[var(--muted)]">
                  {item.price}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>

      {/* MODAL */}
      <ItemModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
        showSave={false}
      />
    </div>
  );
}
