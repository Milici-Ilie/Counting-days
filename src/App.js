// import { useState } from "react";
// import "./index.css";

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   let stepCounter = 0;
//   let counter = 0;
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);
//   const [stepIncrement, setStepIncrement] = useState(1);

//   function plusStep() {
//     const newStep = step + 1;
//     setStep(newStep);
//     stepCounter = newStep;
//     setStepIncrement(newStep);
//   }

//   function minusStep() {
//     const newStep = step - 1;
//     setStep(newStep);
//     stepCounter = newStep;
//     setStepIncrement(newStep);
//   }

//   function plusCount() {
//     setCount(count + stepIncrement);
//     // setCount({ stepCounter } + 1);
//   }

//   function minusCount() {
//     setCount(count - stepIncrement);
//   }

//   const currentDate = new Date();

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const day = currentDate.getDate();
//   const dayOfWeek = currentDate.getDay();
//   console.log(year, month, day, dayOfWeek);

//   console.log(`Data curentă: ${day}/${month + 1}/${year}`);
//   console.log(`Ziua săptămânii: ${getDayName(dayOfWeek)}`);

//   function getDayName(dayIndex) {
//     const daysOfWeek = [
//       "Duminică",
//       "Luni",
//       "Marți",
//       "Miercuri",
//       "Joi",
//       "Vineri",
//       "Sâmbătă",
//     ];
//     return daysOfWeek[dayIndex];
//   }

//   function getMonthName(monthIndex) {
//     const monthsOfYear = [
//       "Ianuarie",
//       "Februarie",
//       "Martie",
//       "Aprilie",
//       "Mai",
//       "Iunie",
//       "Iulie",
//       "August",
//       "Septembrie",
//       "Octombrie",
//       "Noiembrie",
//       "Decembrie",
//     ];
//     return monthsOfYear[monthIndex];
//   }

//   return (
//     <>
//       <div>
//         <div className="display_fles">
//           <button className="buttons" onClick={minusStep}>
//             -
//           </button>
//           <p>
//             <strong>Step: {step}</strong>
//           </p>
//           <button className="buttons" onClick={plusStep}>
//             +
//           </button>
//         </div>

//         <div className="display_fles">
//           <button className="buttons" onClick={minusCount}>
//             -
//           </button>
//           <p>
//             <strong>Count: {count}</strong>
//           </p>
//           <button className="buttons" onClick={plusCount}>
//             +
//           </button>
//         </div>
//       </div>

//       <div>
//         <p>
//           <strong>
//             {count} days from today is{" "}
//             {`${getDayName(dayOfWeek)} ${getMonthName(month)} ${day} ${year}`}
//           </strong>
//         </p>
//       </div>
//     </>
//   );
// }

///////////////////////////////////////////

import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        {/* <button onClick={() => setStep((c) => c - 1)}>-</button> */}
        <span>{step}</span>
        {/* <button onClick={() => setStep((c) => c + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          placeholder={count}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
