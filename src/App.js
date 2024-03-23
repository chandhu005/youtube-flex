import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import appStore from "./Utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import Demo from "./Components/Demo";
import Demo2 from "./Components/Demo2";
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "Watch",
      element: <WatchPage />
    },
    {
      path: "Demo",
      element: <> <Demo /> <Demo2 /></>
    }
  ]
}])
function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />

      </div>
    </Provider>
  );
}

export default App;
