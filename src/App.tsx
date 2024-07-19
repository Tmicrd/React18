import { useState } from "react";

function App() {
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });
  const [courses, setCourses] = useState({
    category: "Sports",
    name: ["Table teenis"],
  });

  const handlePlayer = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  const handleCourses = () => {
    setCourses({ ...courses, name: [...courses.name, "Badminton"] });
  };

  return (
    <>
      <p>Player: {game.player.name}</p>
      <button onClick={handlePlayer}>Change player</button>
      <p>Courses: </p>
      {courses.name.map((name) => (
        <p key={name}> {name}</p>
      ))}

      <button onClick={handleCourses}>Change courses</button>
    </>
  );
}

export default App;
