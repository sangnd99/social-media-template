import styles from "./Home.module.scss";
import CreatePost from "@components/CreatePost";
import Post from "@components/Post";

const Home = () => {
  return (
    <div className={styles.section}>
      <CreatePost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Home;
