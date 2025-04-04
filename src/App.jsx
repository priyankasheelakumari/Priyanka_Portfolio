import BaseLayout from "./Components/BaseLayout";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
