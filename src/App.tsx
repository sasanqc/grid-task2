import { useEffect, useState } from "react";
function App() {
  const [isOn, setIsOn] = useState<number[]>([]);
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  const handleInterval = () => {
    setIsOn((prev) => {
      const tempState = [...prev];
      tempState.pop();
      if (tempState.length === 0) setTimerIsRunning(false);
      return tempState;
    });
  };

  const handleClick = (item: number) => {
    if (timerIsRunning) return;
    const updatedCells = [...isOn];
    if (!updatedCells.includes(item)) {
      updatedCells.push(item);
      setIsOn(updatedCells);
      if (updatedCells.length === 8) {
        setTimerIsRunning(true);
      }
    }
  };

  useEffect(() => {
    let intervalId: number | undefined = undefined;
    const startInterval = () => {
      intervalId = setInterval(handleInterval, 300);
    };
    const stopInterval = () => {
      clearInterval(intervalId);
      intervalId = undefined;
    };

    if (timerIsRunning) {
      startInterval();
    } else {
      stopInterval();
    }

    return () => {
      stopInterval();
    };
  }, [timerIsRunning]);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="border-2 border-black p-4">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {[...Array(8).keys()].map((index: number) => (
            <div
              className={`cursor-pointer border-2 border-black ${
                isOn.includes(index) ? "bg-green-500" : ""
              } ${index === 3 ? "col-span-2" : ""} h-20 w-20`}
              onClick={() => handleClick(index)}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
