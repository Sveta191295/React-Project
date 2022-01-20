import FooterPage from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";



function App() {
  return (
    <div className="App">

      <Header />
      <Routes >
        {routes.map((route, index) => {
          return <Route
            element={route.element}
            path={route.path}
            key={index}
          />
        })}
      </Routes>  
   
      <FooterPage />
  
   
    </div>
  );
}

export default App;

