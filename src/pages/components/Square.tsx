interface SquareProps {
    value?: boolean;
    onClick?: () => void;
  }
  
  const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    return ( 
      <div className ="w-40 h-40 border-1 border-l-slate-800 bg-lime-700 flex-1 justify-center items-center" onClick={onClick}>
        {value}
      </div>
    );
  };

  export default Square;
