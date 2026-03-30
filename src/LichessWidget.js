import { useEffect, useState } from 'react';

const formatTime = (seconds) => {
  const days = seconds / 86400;
  if (days >= 1) return `${days.toFixed(1)}d`;
  return `${Math.round(seconds / 3600)}h`;
};

const LichessWidget = () => {
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://lichess.org/api/user/rohranger')
      .then(res => {
        if (!res.ok) throw new Error('Error fetching profile.');
        return res.json();
      })
      .then(d => {
        const ac = d.perfs?.antichess ?? {};
        const wins = d.count?.win ?? 0;
        const all = d.count?.all ?? 0;
        setData({
          rating: ac.rating ?? '—',
          games: ac.games ?? 0,
          prog: ac.prog ?? 0,
          totalTime: d.playTime?.total ?? 0,
          tvTime: d.playTime?.tv ?? 0,
          winPct: all > 0 ? ((wins / all) * 100).toFixed(1) : '—',
        });
        setStatus('done');
      })
      .catch(e => {
        setError(e.message || 'Something went wrong.');
        setStatus('error');
      });
  }, []);

  if (status === 'loading') return <p className="lichess-msg">Loading…</p>;
  if (status === 'error') return <p className="lichess-msg lichess-error">{error}</p>;

  return (
    <>
      <div className="lichess-stats-row">
        <div className="lichess-stat">
          <span className="lichess-stat-value">
            {data.rating}
            {data.prog !== 0 && (
              <span className={`lichess-prog ${data.prog > 0 ? 'up' : 'down'}`}>
                {data.prog > 0 ? `+${data.prog}` : data.prog}
              </span>
            )}
          </span>
          <span className="lichess-stat-label">Rating</span>
        </div>
        <div className="lichess-stat">
          <span className="lichess-stat-value">{data.games.toLocaleString()}</span>
          <span className="lichess-stat-label">Games</span>
        </div>
        <div className="lichess-stat">
          <span className="lichess-stat-value">{formatTime(data.totalTime)}</span>
          <span className="lichess-stat-label">Time Played</span>
        </div>
        <div className="lichess-stat">
          <span className="lichess-stat-value">{formatTime(data.tvTime)}</span>
          <span className="lichess-stat-label">On Lichess TV</span>
        </div>
        <div className="lichess-stat">
          <span className="lichess-stat-value">{data.winPct}%</span>
          <span className="lichess-stat-label">Win Rate</span>
        </div>
      </div>
      <div className="lichess-profile-link-wrap">
      <a
        className="link-pill"
        href="https://lichess.org/@/rohranger"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 50 50" width="14" height="14" fill="currentColor" stroke="currentColor" strokeLinejoin="round">
          <path d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084S-.506 27.392 4.683 17.567C9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z"/>
        </svg>
        lichess
      </a>
      </div>
    </>
  );
};

export default LichessWidget;
