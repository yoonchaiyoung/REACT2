import Average from "./Average";
import AverageUseCallback from "./AverageUseCallback";
import AverageUseMemo from "./AverageUseMemo";
import InfoCustomHooks from "./InfoCustomHooks";
import useInputs from "./useInputs";

const { default: UseReducerComponent } = require("./UseReducerComponent");
const { default: UseReducerObjComponent } = require("./UseReducerObjComponent");
const { default: UseStateComponent } = require("./UseStateComponent");

function App() {
  return (
    <>
      {/* <UseStateComponent /> */}
      {/* <UseReducerComponent /> */}
      {/* <UseReducerObjComponent /> */}
      {/* <Average /> */}
      {/* <AverageUseMemo /> */}
      {/* <AverageUseCallback /> */}
      <InfoCustomHooks />
    </>
  );
}

export default App;
