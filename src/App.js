import { Routes, Route,Outlet } from "react-router-dom";
import Homepage from "./routes/homepage/homepage.component";

const NavigationBar = () => {
  return (
    <div>
      <div>
        <h1>This is the nav bar</h1>
      </div>
      <Outlet />
    </div>
  );
}

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
