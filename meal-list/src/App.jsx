import './App.css';
import CardProvider from './providers/CardProvider';
import MealCard from './components/MealCard';

function App() {
  return (
    <div className="App">
      <CardProvider>
      <MealCard />
      </CardProvider>
    </div>
  );
}

export default App;
