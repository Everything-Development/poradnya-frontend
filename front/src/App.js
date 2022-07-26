import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import AboutUsPage from "./pages/AboutUs";
import ArticlePage from "./pages/ArticlePage";
import HomePage from './pages/Home'
import Header from './components/Header'
import CentersPage from "./pages/Centers";
import BlogPage from "./pages/Blog"
import NotFound from './pages/NotFound'
import ContactsPage from './pages/Contacts'
import ConsultForm from './pages/ConsultForm'
import AdminPage from './pages/admin/AdminPage' 
import AdminListDataPage from './pages/admin/AdminListDataPage'
// import AdminBlogPage from './pages/admin/AdminBlogPage'
import AdminTagsPage from './pages/admin/AdminTagsPage'


import { useNavigate, useLocation, Link } from 'react-router-dom'
import EditEntityTemplate from "./components/admin/EditEntityTemplate";



function App() {

  return (
    <div className="App">
        <Router>
            <Header/>
          <Routes>  
            <Route path="*" element={<NotFound />} />
            <Route path="/">
              <Route index element={<HomePage/>}/>
              <Route path="aboutus" element={<AboutUsPage/>}/>  
              <Route path="article/:id" element={<ArticlePage/>}/>  
              <Route exact path="centers" element={<CentersPage/>}/>
              <Route path="blog" element={<BlogPage/>}/>
              <Route path="contacts" element={<ContactsPage/>}/>
              <Route path="consult_form" element={<ConsultForm/>}/>
              <Route path="admin">
                <Route index element={<AdminPage/>}/>
                <Route path=":admin_page" element={<AdminListDataPage/>}/>
                <Route path=':admin_page/:id' element={<EditEntityTemplate/>}/>
              </Route>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
