import React, { useState, useEffect, useCallback } from "react";

const SnakeGame = () => {
  const [snake, setSnake] = useState([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ]);
  const [food, setFood] = useState({ x: 15, y: 10 });
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const gameSize = 20;

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
      default:
        break;
    }

    newSnake = [head, ...newSnake.slice(0, -1)];

    if (head.x === food.x && head.y === food.y) {
      newSnake.push({ ...newSnake[newSnake.length - 1] });
      setFood({
        x: Math.floor(Math.random() * gameSize),
        y: Math.floor(Math.random() * gameSize),
      });
      setScore(score + 1);
    }

    if (
      head.x < 0 ||
      head.x >= gameSize ||
      head.y < 0 ||
      head.y >= gameSize ||
      newSnake.some(
        (segment, index) =>
          index !== 0 && segment.x === head.x && segment.y === head.y
      )
    ) {
      setGameOver(true);
    }

    setSnake(newSnake);
  }, [snake, food, direction, score, gameOver]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [moveSnake]);

  if (gameOver) {
    return (
      <div>
        <h2>Game Over</h2>
        <p>Your Score: {score}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Snake Game</h2>
      <p>Score: {score}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gameSize}, 20px)`,
          gridTemplateRows: `repeat(${gameSize}, 20px)`,
          gap: "1px",
        }}
      >
        {Array.from({ length: gameSize * gameSize }).map((_, index) => {
          const x = index % gameSize;
          const y = Math.floor(index / gameSize);
          const isSnake = snake.some(
            (segment) => segment.x === x && segment.y === y
          );
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={index}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: isSnake
                  ? "green"
                  : isFood
                  ? "red"
                  : "lightgrey",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SnakeGame;
