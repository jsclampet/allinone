import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Loader, Dimmer } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ContactList from "./components/ContactList";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [apiData, setApiData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios(import.meta.env.VITE_URL).then((res) => setApiData(res.data));
  }, []);

  useEffect(() => {
    ///timelines?location= ${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey= ${VITE_WEATHER_API_KEY}
    const lat = "40.75872069597532";
    const long = "-73.98529171943665";

    axios(
      `${
        import.meta.env.VITE_WEATHER_URL
      }/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    ).then((res) => {
      console.log(res.data);
      setWeatherData(res.data);
    });
  }, []);

  return (
    <div>
      {/* <h1 className="ui center aligned header">Apps</h1>
      <hr className="ui .mb-4" />
      {apiData ? (
        <ContactList apiData={apiData} />
      ) : (
        <Dimmer>
          <Loader>Loading</Loader>
        </Dimmer>
      )} */}
      {weatherData && (
        <WeatherCard weatherData={weatherData.data.timelines[0].endTime} />
      )}
    </div>
  );
}

export default App;
