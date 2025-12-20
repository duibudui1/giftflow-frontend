import { useState, useEffect } from "react";
import { type Wishlist } from "../types/wishlists";
import { getMyWishlists } from "../api/wishlists";
import { createWishlist } from "../api/wishlists";
import { CreateWishlistForm } from "../components/wishlists/CreateWishlistForm";
import { Link } from "react-router-dom";
import "../styles/wishlists.css";


export default function WishlistsPage() {

  const [wishlists, setWishlists] = useState<Wishlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false); 

  useEffect(() => {
    async function loadWishlists() {

      try {
        const data = await getMyWishlists();
        setWishlists(data);
      } catch (err) {
        setError("Could not load wishlists");
      } finally {
        setLoading(false);
      }
    }

    loadWishlists();
  }, []);

  async function handleCreate(title:string) {
    try {
      const newWishlist = await createWishlist(title);
      setWishlists((prev) => [...prev, newWishlist]);
      setShowCreateForm(false);
    } catch (err) {
      alert("Failed to create wishlist");
    }
  }

  if (loading) {
    return <div className="wishlists-page">Loading…</div>;
  }

  if (error) {
    return <div className="wishlists-page">{error}</div>;
  }

  return (
    <div className="wishlists-page">
      <h1 className="wishlists-title">My Wishlists</h1>

      {/* EMPTY STATE */}
      {wishlists.length === 0 && !showCreateForm && (
        <button onClick={() => setShowCreateForm(true)}>
          Create your first wishlist
        </button>
      )}

      {/* CREATE FORM */}
      {showCreateForm && (
        <CreateWishlistForm onCreate={handleCreate} />
      )}

      {/* LIST */}
      {wishlists.length > 0 && (
        <>
          <button onClick={() => setShowCreateForm(true)}>
            Create wishlist
          </button>

          <div className="wishlists-list">
            {wishlists.map((wishlist) => (
              <div key={wishlist.id} className="wishlist-row">
                <div>
                  <div className="wishlist-name">{wishlist.title}</div>
                  <div className="wishlist-meta">
                    Public link: /wishlist/{wishlist.shareSlug}
                  </div>
                </div>

                <Link to={`/wishlistdetails/${wishlist.id}`}>
                  Open
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}