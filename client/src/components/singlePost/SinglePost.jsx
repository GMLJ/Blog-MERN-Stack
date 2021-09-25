import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
        src="https://images.pexels.com/photos/1416169/pexels-photo-1416169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        alt="travel bike" 
        className="singlePostImg" 
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor.
          <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Matty</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus veritatis quos iste pariatur corrupti laboriosam alias unde, eius nulla ullam corporis deserunt, autem maiores! Non, quidem cumque! Perspiciatis, asperiores incidunt.
        Consectetur laborum odit repellendus cumque maiores ducimus illum ea ratione incidunt excepturi necessitatibus perferendis earum a adipisci natus, explicabo sed fugiat neque nulla? Aperiam porro ea dolor, consequatur vel harum!
        Quia, obcaecati! Rerum ipsa consequatur amet possimus dicta nisi error sequi? Nemo nisi eligendi consequuntur ea porro commodi tempora, placeat, architecto eveniet voluptate delectus, perspiciatis fugit odio dolores soluta doloribus.
        Ex, doloribus! Magnam repellendus harum quidem est ab illum modi a expedita exercitationem veritatis dignissimos natus, blanditiis autem ducimus fugiat, adipisci necessitatibus iure voluptas nesciunt totam assumenda amet, repudiandae similique!
        Eius, dicta? Quisquam consequuntur laborum earum, deserunt asperiores rem voluptatem? Architecto illo, accusamus aliquid dolor dolorem libero maxime voluptatum ab qui quam cupiditate impedit tempore similique eos officiis fuga vitae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus veritatis quos iste pariatur corrupti laboriosam alias unde, eius nulla ullam corporis deserunt, autem maiores! Non, quidem cumque! Perspiciatis, asperiores incidunt.
        Consectetur laborum odit repellendus cumque maiores ducimus illum ea ratione incidunt excepturi necessitatibus perferendis earum a adipisci natus, explicabo sed fugiat neque nulla? Aperiam porro ea dolor, consequatur vel harum!
        Quia, obcaecati! Rerum ipsa consequatur amet possimus dicta nisi error sequi? Nemo nisi eligendi consequuntur ea porro commodi tempora, placeat, architecto eveniet voluptate delectus, perspiciatis fugit odio dolores soluta doloribus.
        Ex, doloribus! Magnam repellendus harum quidem est ab illum modi a expedita exercitationem veritatis dignissimos natus, blanditiis autem ducimus fugiat, adipisci necessitatibus iure voluptas nesciunt totam assumenda amet, repudiandae similique!
        Eius, dicta? Quisquam consequuntur laborum earum, deserunt asperiores rem voluptatem? Architecto illo, accusamus aliquid dolor dolorem libero maxime voluptatum ab qui quam cupiditate impedit tempore similique eos officiis fuga vitae.</p>
      </div>
    </div>
  )
}
