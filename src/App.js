import { Routes, Route } from 'react-router';
import './App.css';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
