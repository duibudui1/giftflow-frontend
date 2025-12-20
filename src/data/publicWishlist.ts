import {type Item } from "../types/item";

export const publicWishlist = {
  title: "Kate’s Birthday Wishlist",
  description: "Things I truly want this year 🤍",
  items: [
    {
      id: "ghibli-2025",
      title: "Studio Ghibli Advent Calendar 2025",
      description:
        "24 all-new surprises inspired by the world of Studio Ghibli.",
      url: "https://kindakawaii.com",
      type: "Thing",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      price: "269 $",
    },
    {
      id: "spa-day",
      title: "Spa day at Nordic Spa",
      description:
        "Full day access with massage and thermal pools.",
      url: "https://spa.com",
      type: "Experience",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    },
  ] as Item[],
};
