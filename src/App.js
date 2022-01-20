import { Routes, Route } from 'react-router';
import './App.css';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles-list" element={<ArticlesListPage />} />
          <Route path="/article/:name" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
