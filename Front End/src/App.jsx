import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
    <MovieCard movie={{title: "Ian's Film", release_date: "July 3, 2025"}}/>
    <MovieCard movie={{title: "Humprey's Film", release_date: "July 4, 2025"}}/>
    </>
  );
}

export default App;
