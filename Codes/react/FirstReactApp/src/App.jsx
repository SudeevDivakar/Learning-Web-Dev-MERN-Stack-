import './App.css'
import Greet from './Greet';
import Die from './Die'
import ColorList from './ColorList'
import DoubleDice from './DoubleDice';
import SlotMachine from './SlotMachine';
import ShoppingList from './ShoppingList';
import RentalProperties from './RentalProperties';
import Clicker from './Clicker';

// const list = [
//   {id: 1, item: 'eggs', quantity: 12, completed: false},
//   {id: 2, item: 'milk', quantity: 1, completed:true},
//   {id: 3, item: 'chicken', quantity: 4, completed: false},
//   {id: 4, item: 'carrots', quantity: 6, completed:true}
// ];


// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 }
// ];


function App() {
    return( 
    <div>
      {/* <Greet color="Magenta" />
      <DoubleDice />
      <ColorList colors={['red','green','magenta']} /> */}

      {/* <SlotMachine values={['🍒','🍒','🍒']}></SlotMachine>
      <SlotMachine values={['🍒','🍌','🍒']}></SlotMachine> */}

      {/* <ShoppingList list={list}></ShoppingList> */}

      {/* <RentalProperties properties={properties} /> */}

      <Clicker message="I SAID DONT CLICK ME!!!!" buttonText="Don't Click Me" />
      {/* <Clicker message="HI!!!!" buttonText="Click Me" /> */}
    </div> 
    );
}

export default App;
