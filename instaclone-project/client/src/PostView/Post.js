import React from "react";

function Post({post,i}) {
  return (
    <div className="post_container" >
      <header className="post_header" >
        <div className="post_header_name">
          <p className="post_name">{post.name}</p>
          <p className="post_location">{post.location}</p>
        </div>
        <img src="./images/more_icon.svg" alt="more" />
      </header>
      <div className="post_img_container" >
        <img
          src={post.postImage}
          alt="post"
        />
      </div>
      <footer className="post_footer" >
        <div className="post_base">
          <div className="post_icons">
            <img src="./images/heart.png" alt="heart" />
            <img src="./images/share.png" alt="share" />
          </div>
          <p>{post.date.split('T')[0]}</p>
        </div>
        <p><span>{post.likes}</span> likes</p>
        <h3>{post.description}</h3>
      </footer>
    </div>
  );
}

export default Post;
