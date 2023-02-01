import React, { useState } from "react";
import Square from './Square';

const Grid: React.FC = () => {
  const [grid, setGrid] = useState<(string | null )[][]>(
    Array(13).fill(Array(10).fill('box'))
  );

  // const handleClick = (row: number, col: number) => {
  //   const newGrid = [...grid];
   
  //   newGrid[row][col] = "Michelle";
    
  //   setGrid(newGrid);
  // }; 

  return (
    <div className="grid">
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((col, j) => (
            <Square
              value={grid[i] && grid[i][j] ? grid[i][j] : 'box'}
              //onClick={() => handleClick(i, j)}
              key={j}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;