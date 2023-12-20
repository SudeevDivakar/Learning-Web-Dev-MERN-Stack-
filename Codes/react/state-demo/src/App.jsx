import Counter from "./Counter"
import './App.css';
import ScoreKeeper from "./ScoreKeeper";
import EmoticonClicker from "./EmoticonClicker";

export default function App() {
  return(
    // <Counter />
    <ScoreKeeper numPlayers={4} target={5}/>
    // <EmoticonClicker />
  );
}
