import styles from "./User.module.scss";

import Information from "./components/Information";
import CreatePost from "@components/CreatePost";
import Post from "@components/Post";

interface IUserProps {}

const User: React.FC<IUserProps> = (props) => {
  return (
    <div className={styles.container}>
      <Information />
      <CreatePost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default User;
