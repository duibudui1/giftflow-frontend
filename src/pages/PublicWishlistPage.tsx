import { useParams } from "react-router-dom";

export default function PublicWishlistPage() {
  const { slug } = useParams();
  return <h1>Public Wishlist (share link: {slug})</h1>;
}
