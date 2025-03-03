import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./Components/ProtectedRoute";
import './style/Media.css'
import Dashboard from "./Pages/Dashboard";
import Superiors from "./Pages/Superiors";
import News from "./Pages/News";
import NewsItems from "./Pages/NewsItem";
import Contact from "./Pages/Contact";
import AdminNews from "./Components/AdminPages/AdminNews";
import Media from "./Components/AdminPages/Media";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="admin/dashboard" element={<Dashboard />} />
            <Route path="admin/news" element={<AdminNews />} />
            <Route path="admin/media" element={<Media />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/superiors' element={<Superiors />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsItems />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
