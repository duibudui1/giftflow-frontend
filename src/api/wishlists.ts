
import { type Wishlist } from "../types/wishlists";

const API_URL = import.meta.env.VITE_API_URL;

function authHeader() {
    const token = localStorage.getItem("accessToken");
    if (!token) throw new Error("No token");
    return {
        Authorization: `Bearer ${token}`,
    };
}

export async function getMyWishlists(): Promise<Wishlist[]> {
    const res = await fetch(`${API_URL}/wishlists`, {
        headers: {
            ...authHeader(),
        },
    });

    if (!res.ok) {
        throw new Error("Failed to load wishlists");
    }

    return res.json();
}

export async function createWishlist(title:string) : Promise<Wishlist> {
    const res = await fetch(`${API_URL}/wishlists`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            ...authHeader(),
        },
        body:JSON.stringify({title}),
    });

    if (!res.ok) {
        throw new Error("Failed to create wishlist");
    }

    return res.json();
}