import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src={"https://images.pexels.com/photos/919606/pexels-photo-919606.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} alt="" className="headerImg" />
    </div>
  )
}
