// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodeError, setGeocodeError] = useState("");
  const [emoji, setEmoji] = useState("");
  const [lat, lng] = useUrlPosition();
  const { createCity } = useCities();
  const navigate = useNavigate();
  console.log(country);
  useEffect(
    function () {
      if (!lat && !lng) return;
      async function getCityData() {
        setIsLoadingGeocoding(true);
        try {
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          setEmoji(convertToEmoji(data.countryCode));
          setCityName(data.cityName || data.locality || "");
          setCountry(data.countryName);
          if (!data.countryCode)
            throw new Error("That dosn't seem to city. Click somewhere else");
        } catch (err) {
          setGeocodeError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      getCityData();
    },
    [lat, lng]
  );
  if (geocodeError) return <Message message={geocodeError} />;
  if (!lat && !lng)
    return <Message message="Start by cliking somewhere on the map." />;
  if (isLoadingGeocoding) <Spinner />;

  async function handleSubmit(e) {
    e.preventDefault();
    const newCity = {
      cityName,
      country,
      date,
      emoji,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setDate(date)}
          selected={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
