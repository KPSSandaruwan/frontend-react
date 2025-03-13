import { useMemo, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "NAME":
      return { ...state, name: changeName() };
    default:
      return state;
  }
}

const changeName = () => {
  const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Sarah", "Michael", "Emma"];
  const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Davis", "Miller"];

  const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirst} ${randomLast}`;
}

export default function CountDashboard() {
  const [state, dispatch] = useReducer(reducer, { count: 0, name: "John Doe" });

  const factorial = useMemo(() => {
    console.log('GGGGGGG')
    const calculateFactorial = (n) => {
      if (n === 0) {
        return 1;
      }
      return n * calculateFactorial(n - 1);
    };

    return calculateFactorial(state.count);
  }, [state.count]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Count Calender</h3>
            </div>
            <div className="card-body">
              <h1>Count: {state.count}</h1>
              <h1>Count Factorial: {factorial}</h1>
              <h1>Name: {state.name}</h1>
            </div>
          </div>
          <div className="btn-group mt-3 align-items-center cursor-pointer">
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "INCREMENT" })}
            >
              Increment
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch({ type: "DECREMENT" })}
            >
              Decrement
            </button>
            <button
              className="btn btn-warning"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Reset
            </button>
            <button
              className="btn btn-success"
              onClick={() => dispatch({ type: "NAME" })}
            >
              Update Name
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}