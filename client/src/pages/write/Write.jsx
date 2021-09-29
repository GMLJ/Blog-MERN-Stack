import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
    }

    axios.post("/posts");
  };

  return (
    <div className="write">
      <img src="https://images.pexels.com/photos/1103995/pexels-photo-1103995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="writeImg" />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus="true" />
        </div>
        <div className="writeFormGroup">
          <textarea type="text" className="writeInput writeText" placeholder="Write article here..."></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
