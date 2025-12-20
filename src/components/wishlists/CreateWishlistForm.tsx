import { useState } from "react";
import "../../styles/create-wishlist.css";

type Props = {
  onCreate: (title: string) => void;
};

export function CreateWishlistForm({ onCreate }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    onCreate(title);
    setTitle("");
  }

  return (
    <div className="create-wishlist">
      <h2 className="create-wishlist-title">Create wishlist</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Birthday, Travel, Christmas…"
          />
        </label>

        <button type="submit" disabled={!title.trim()}>
          Create
        </button>
      </form>
    </div>
  );
}
