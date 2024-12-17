import { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import './index.css';
import './app.css';


const dummyData = {
  status: "ok",
  totalResults: 4,
  articles: [
    {
      source: { name: "IPWatchdog.com" },
      author: "Curtis Dodd",
      title: "Key U.S. FRAND / RAND Licensing Developments of 2024",
      description: "Patents subject to licensing developments.",
      url: "https://ipwatchdog.com",
      urlToImage: "https://ipwatchdog.com/wp-content/uploads/2020/04/Depositphotos_16506689_xl-2015-scaled.jpg",
      publishedAt: "2024-12-17T12:15:43Z",
    },
    {
      source: { name: "Biztoc.com" },
      author: "benzinga.com",
      title: "Stellantis' Dodge Critiques Robotaxis in Latest EV Ad",
      description: "Stellantis NV brand Dodge slammed autonomous vehicles.",
      url: "https://biztoc.com",
      urlToImage: "https://biztoc.com/cdn/adbca73e40af9206_s.webp",
      publishedAt: "2024-12-17T12:13:55Z",
    },
    {
      source: { name: "Electrek" },
      author: "Jennifer Mossalgue",
      title: "Waymo to launch robotaxis in Tokyo in early 2025",
      description: "Waymo expands overseas, testing in Japan.",
      url: "http://electrek.co",
      urlToImage: "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/12/Waymo_GO_NihonKotsu_Hero.jpeg",
      publishedAt: "2024-12-17T11:59:22Z",
    },
  ],
};

function App() {
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulasi fetch data
    setNewsData(dummyData.articles);
  }, []);

  const filteredNews = newsData.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Portal Berita</h1>
      <input
        type="text"
        placeholder="Cari berita..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <NewsList articles={filteredNews} />
    </div>
  );
}

export default App;
