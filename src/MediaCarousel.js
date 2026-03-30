import { useState, useEffect, useRef } from 'react';

const MediaCarousel = ({ items, loading = false }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % items.length);
    }, 3500);
  };

  const goTo = (idx) => {
    clearInterval(intervalRef.current);
    setIndex(idx);
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []); // eslint-disable-line

  return (
    <>
      <div className="bookshelf-carousel">
        <button className="carousel-arrow left" onClick={() => goTo((index - 1 + items.length) % items.length)} aria-label="Previous">&#8592;</button>
        <div className="carousel-track">
          {items.map((item, i) => {
            const raw = (i - index + items.length) % items.length;
            const offset = raw > items.length / 2 ? raw - items.length : raw;
            const posClass = offset === 0 ? 'active' : offset === 1 ? 'next' : offset === -1 ? 'prev' : offset > 0 ? 'far-next' : 'far-prev';
            return (
              <div
                key={item.title}
                className={`book-card ${posClass}${loading ? ' loading' : ''}`}
                style={{ '--book-color': item.color }}
                aria-hidden={offset !== 0}
                onClick={offset === -1 ? () => goTo(i) : offset === 1 ? () => goTo(i) : undefined}
              >
                {item.imageUrl ? (
                  <div className="book-cover book-cover--image">
                    <img
                      src={item.imageUrl}
                      alt={`${item.title} cover`}
                      className="book-cover-img"
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="book-cover book-cover--fallback" style={{ display: 'none' }}>
                      <span className="book-title">{item.title}</span>
                      <span className="book-author">{item.subtitle}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`book-cover${item.quote ? ' book-cover--quote' : ''}`}>
                    <span className="book-title">{item.title}</span>
                    {item.subtitle && <span className="book-author">{item.subtitle}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button className="carousel-arrow right" onClick={() => goTo((index + 1) % items.length)} aria-label="Next">&#8594;</button>
      </div>
      <div className="carousel-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`dot${i === index ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to item ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default MediaCarousel;
