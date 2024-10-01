import styles from "./Button.module.css";
import PropType from "prop-types";

Button.propTypes = {
  children: PropType.any,
  onClick: PropType.func,
  type: PropType.string,
};
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
