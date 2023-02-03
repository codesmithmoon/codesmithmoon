interface SquareProps {
    value?: boolean;
   
  }
  
  const Square: React.FC<SquareProps> = ({ value }) => {
    return (
      <div className="square" >
        {value}
      </div>
    );
  };

  // onClick={props.onClick}
  // onClick: () => void; in interface
  export default Square;