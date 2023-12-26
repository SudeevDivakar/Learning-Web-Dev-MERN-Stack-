import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";

export default function App() {
  return (
    <>
      <Link to='/Home'>Home</Link>
      {/* <Link to='/books'>Books</Link> */}
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/books/:id' element={<Books />} />
      </Routes>
    </>
  )
}

