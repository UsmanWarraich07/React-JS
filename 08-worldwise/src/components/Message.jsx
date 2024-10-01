import styles from "./Message.module.css";
import PropType from "prop-types";

Message.propTypes = {
  message: PropType.string,
};

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
