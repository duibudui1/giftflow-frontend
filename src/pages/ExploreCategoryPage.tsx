import { useParams } from "react-router-dom";

const mockGifts: Record<string, { title: string; img?: string }[]> = {
  travel: [
    { title: "Weekend Trip to Niagara Falls" },
    { title: "Plane Ticket Gift Card" },
  ],
  restaurants: [
    { title: "Romantic Dinner for Two" },
    { title: "Sushi Restaurant Gift Card" },
  ],
  experiences: [
    { title: "Escape Room Adventure" },
    { title: "Hot Air Balloon Ride" },
  ],
  romantic: [
    { title: "Spa Day for Couples" },
    { title: "Private Movie Screening" },
  ],
  birthday: [
    { title: "Birthday Surprise Gift Box" },
    { title: "Custom Cake Experience" },
  ],
};

export default function ExploreCategoryPage() {
  const { category } = useParams();
  const items = mockGifts[category ?? ""] ?? [];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 capitalize">{category}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="border rounded-xl p-4 bg-white shadow-sm"
          >
            <h3 className="font-medium">{item.title}</h3>
            {/* Потом добавим картинки */}
          </div>
        ))}
      </div>
    </div>
  );
}
