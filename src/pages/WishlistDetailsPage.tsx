import { useParams } from "react-router-dom";

export default function WishlistDetailsPage() {
  const { id } = useParams();
  return <h1>Wishlist Details (id: {id})</h1>;
}
