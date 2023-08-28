import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Loader, Dimmer } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ContactList from "./components/ContactList";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios(import.meta.env.VITE_URL).then((res) => setApiData(res.data));
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
      <WeatherCard />
    </div>
  );
}

export default App;
