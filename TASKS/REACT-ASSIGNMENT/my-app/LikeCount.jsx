import React, { useState } from 'react';

const LikeButton = ({ likeCount = 0 }) => {
  const [likes, setLikes] = useState(likeCount);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLike} className="bg-blue-500 text-white p-2 rounded">
        Like {likes}
      </button>
    </div>
  );
};

export default LikeButton;
