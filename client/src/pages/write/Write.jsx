import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img 
      src="https://images.pexels.com/photos/1103995/pexels-photo-1103995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      alt="" 
      className="writeImg" 
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus="true"/>
        </div>
        <div className="writeFormGroup">
          <textarea type="text" className="writeInput writeText" placeholder="Write article here..."></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
