import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img src="https://images.pexels.com/photos/6212576/pexels-photo-6212576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="travel on bike" className="postImg" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">MUSIC</span>
          <span className="postCategory">LIFE</span>
        </div>
        <div className="postTitle">Lorem ipsum dolor</div>
        <hr/>
        <div className="postDate">1 hour ago</div>
        <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati ipsam earum. Est itaque quis tempore, temporibus inventore totam enim sequi aut? Impedit labore accusantium a suscipit cupiditate, repellat molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati ipsam earum. Est itaque quis tempore, temporibus inventore totam enim sequi aut? Impedit labore accusantium a suscipit cupiditate, repellat molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati ipsam earum. Est itaque quis tempore, temporibus inventore totam enim sequi aut? Impedit labore accusantium a suscipit cupiditate, repellat molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati ipsam earum. Est itaque quis tempore, temporibus inventore totam enim sequi aut? Impedit labore accusantium a suscipit cupiditate, repellat molestias.</p>
      </div>
    </div>
  )
}
