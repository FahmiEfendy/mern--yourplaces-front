import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Users />}></Route>
        <Route path="/places/new" exact element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
