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
import Partiya from "./Components/AdminPages/Partiya";
import Person from "./Components/AdminPages/Person";
import Rekvizit from "./Pages/Rekvizit";
import UserRec from "./Pages/UserRec";
import OrgStructure from "./Pages/OrgStructure";
import AdminRekvizits from "./Components/AdminPages/AdminRekvizits";
import AdminUserRec from "./Components/AdminPages/AdminUserRec";
import AdminOrgStructure from "./Components/AdminPages/AdminOrgStructure";
import Menu from "./Components/AdminPages/Menu";
import SubMenu from "./Components/AdminPages/SubMenu";
import PageCreate from "./Components/AdminPages/PageCreate";
import SubMenuData from "./Components/AdminPages/SubMenuData";
import PageEdit from "./Components/AdminPages/Pageedit";
import Page from "./Pages/Page";

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
            <Route path="admin/party" element={<Partiya />} />
            <Route path="admin/person" element={<Person />} />
            <Route path="admin/rekvizits" element={<AdminRekvizits />} />
            <Route path="admin/userRec" element={<AdminUserRec />} />
            <Route path="admin/orgStructure" element={<AdminOrgStructure />} />
            <Route path='admin/menu' element={<Menu />} />
            <Route path="admin/menu/:ID/:name" element={<SubMenu />} />

            <Route path="/admin/create/:ID" element={<PageCreate />} />
            <Route path="/admin/edit/:ID" element={<PageEdit />} />
            <Route path="/admin/page/:ID" element={<SubMenuData />} />

          </Route>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/superiors' element={<Superiors />} />
            <Route path="/news" element={<News />} />
            <Route path="/rekvizits" element={<Rekvizit />} />
            <Route path="/fuqarolarni-qabul-qilish-tartibi" element={<UserRec />} />
            <Route path="/tashkili-tuzilmasi" element={<OrgStructure />} />
            <Route path="/news/:id" element={<NewsItems />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sahifa/:ID" element={<Page />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
