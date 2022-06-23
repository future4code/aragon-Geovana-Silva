import GlobalState from "./global/globalState";
import Router from "./routes/Router";

export default function App() {
  return (
    <>
    <GlobalState>
      <Router/>
    </GlobalState>
    </>
  );
}
