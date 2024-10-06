import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation.component";
import Homepage from "./routes/homepage/homepage.component";



const Shop = () => {
  return (
    <div>
      <h1>this is the shop</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>)
}

export default App;
