import { useState } from "react";
import { items } from "../../data/items";
import { type Item } from "../../types/item";
import ItemModal from "./ItemModal";

export default function ProductGrid() {
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  return (
    <>
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
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">

            {/* IMAGE */}
            <div
              className="
                rounded-2xl
                overflow-hidden
                bg-white
                dark:bg-[#1a1a1a]
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

            {/* TITLE */}
            <div className="text-sm text-[var(--text)]">
              {item.title}
            </div>

            {/* PRICE */}
            {item.price && (
              <div className="text-sm text-[var(--muted)]">
                {item.price}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* MODAL */}
      <ItemModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </>
  );
}
