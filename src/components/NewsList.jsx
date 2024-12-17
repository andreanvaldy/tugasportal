function NewsList({ articles }) {
    return (
      <div className="news-list">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <div className="news-card" key={index}>
              <img
                src={news.urlToImage || '/assets/placeholder.jpg'}
                alt={news.title}
                className="news-image"
              />
              <div className="news-content">
                <h2 className="news-title">{news.title}</h2>
                <p className="news-description">{news.description}</p>
                <p className="news-source">Sumber: {news.source.name}</p>
                <a href={news.url} target="_blank" rel="noreferrer" className="news-link">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada berita yang ditemukan.</p>
        )}
      </div>
    );
  }
  
  export default NewsList;
  