import React, { useState } from "react";
import Square from './Square';

const Grid: React.FC = () => {
  const [grid, setGrid] = useState<(boolean )[][]>(
    Array(13).fill(Array(10).fill(true))
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
              value={true}
              //onClick={() => handleClick(i, j)}
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
