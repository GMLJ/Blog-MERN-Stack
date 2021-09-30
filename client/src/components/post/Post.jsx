import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PublicFolder = "localhost:5000/images";
  return (
    <div className="post">
      {post.photo && <img src={PublicFolder + post.photo} alt="" className="postImg" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c) => (
            <span className="postCategory">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
        <p className="postDescription">{post.description}</p>
      </div>
    </div>
  );
}
