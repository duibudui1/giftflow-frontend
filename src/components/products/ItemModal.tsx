import { type Item } from "../../types/item";

type Props = {
  item: Item | null;
  onClose: () => void;
  showSave?: boolean;
};

export default function ItemModal({ item, onClose, showSave }: Props) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="relative bg-[#1f1f1f] rounded-3xl w-[90%] max-w-5xl p-8 flex gap-10">

        {/* IMAGE */}
        <img
          src={item.image}
          className="w-[45%] rounded-2xl object-cover"
        />

        {/* CONTENT */}
        <div className="flex-1 text-white flex flex-col gap-6">
          <h2 className="text-3xl font-medium">
            {item.title}
          </h2>

          <p className="text-white/70 leading-relaxed">
            {item.description}
          </p>

          {item.price && (
            <div className="text-2xl">
              {item.price}
            </div>
          )}

          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full w-fit"
          >
            Link ↗
          </a>

          {showSave && (<button className="mt-auto bg-white text-black py-3 rounded-full">
            Save
          </button>)}
        </div>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}
