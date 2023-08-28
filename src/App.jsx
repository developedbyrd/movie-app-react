import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import MoviesJson from "./Movies.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {MoviesJson.map((element) => {
          return (
            <Movie
              poster={element.Poster}
              title={element.Title}
              year={element.Year}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
