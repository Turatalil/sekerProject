import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button
        onClick={handleLike}
        style={{
          padding: '8px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          color: liked ? '#ef4444' : '#9ca3af',
          cursor: 'pointer',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = liked ? '#ef4444' : '#f87171')}
        onMouseLeave={(e) => (e.currentTarget.style.color = liked ? '#ef4444' : '#9ca3af')}
      >
        <svg
          style={{ width: '24px', height: '24px' }}
          fill={liked ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      <span style={{ color: '#4b5563' }}>{likesCount}</span>
    </div>
  );
};

export default LikeButton;
