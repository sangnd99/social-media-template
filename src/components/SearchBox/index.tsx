import styles from "./SearchBox.module.scss";

interface ISearchBoxProps {}

const SearchBox: React.FC<ISearchBoxProps> = (props) => {
  return (
    <div className={styles.container}>
      <img
        src="svg/common/search.svg"
        width={14}
        height={15}
        alt="Search icon"
      />
      <input className={styles.input} placeholder="Search Tobesonet" />
    </div>
  );
};

export default SearchBox;
