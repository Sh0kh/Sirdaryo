import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./Components/ProtectedRoute"; // Импорт компонента защиты маршрутов
import './style/Media.css'
import Dashboard from "./Pages/Dashboard";
import Superiors from "./Pages/Superiors";
import News from "./Pages/News";
import NewsItems from "./Pages/NewsItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route
            element={
              // <ProtectedRoute>
              <AdminLayout />
              // </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/superiors' element={<Superiors />} />
            <Route path="/news" element={<News/>}/>
            <Route path="/news/:ID" element={<NewsItems/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
