import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WishlistsPage from "./pages/WishlistsPage";
import WishlistDetailsPage from "./pages/WishlistDetailsPage";
import PublicWishlistPage from "./pages/PublicWishlistPage";
import SecretSantaPage from "./pages/SecretSantaPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/wishlists"
        element={
          <ProtectedRoute>
            <WishlistsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wishlist/:id"
        element={
          <ProtectedRoute>
            <WishlistDetailsPage />
          </ProtectedRoute>
        }
      />

      <Route path="/w/:slug" element={<PublicWishlistPage />} />

      <Route
        path="/secret-santa"
        element={
          <ProtectedRoute>
            <SecretSantaPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
