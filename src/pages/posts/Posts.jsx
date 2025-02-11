import "./Posts.scss";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <section className="posts">
      <nav className="nav-posts">
        <ul className="nav-posts__list">
          <li className="nav-posts__item">
            <Link to={"/addPost"}>створити пост</Link>
          </li>
          <li className="nav-posts__item">
            <Link to={"/myPost"}>мої пости</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Posts;
