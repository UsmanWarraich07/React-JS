import styles from "./CountryItem.module.css";
import PropType from "prop-types";

CountryItem.propTypes = {
  country: PropType.string,
  emoji: PropType.string,
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
