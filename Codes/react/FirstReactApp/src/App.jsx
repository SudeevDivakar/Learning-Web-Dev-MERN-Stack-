import './App.css'
import Greet from './Greet';
import Die from './Die'
import ColorList from './ColorList'
import DoubleDice from './DoubleDice';
import SlotMachine from './SlotMachine';

function App() {
    return( 
    <div>
      {/* <Greet color="Magenta" />
      <DoubleDice />
      <ColorList colors={['red','green','magenta']} /> */}

      <SlotMachine values={['🍒','🍒','🍒']}></SlotMachine>
      <SlotMachine values={['🍒','🍌','🍒']}></SlotMachine>
    </div> 
    );
}

export default App;
