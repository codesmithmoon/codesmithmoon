import React, { useState } from "react";
import Square from './Square';

const Grid: React.FC = () => {
  const [grid, setGrid] = useState<(boolean )[][]>(
    Array(13).fill(Array(10).fill(true))
  );
  console.log('grid--->', grid);
  // const [plow, setPlow] = useState<(boolean) [][]> ()

  const handleClick = (row: number, col: number) => {
  const newGrid: boolean[][] = [...grid];
  newGrid[row][col] = false;
  console.log('clicked');
  setGrid(newGrid);
  }; 

  return (
    <div className="grid">
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((col, j) => (
            <Square
              value={grid[i][j]}
              onClick={() => handleClick(i, j)}
              key={j}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
//grid[i]?[j] ? grid[i]?[j] : 'box'
export default Grid;
