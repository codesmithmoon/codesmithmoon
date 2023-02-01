interface SquareProps {
    value?: string | null;
   
  }
  
  const Square: React.FC<SquareProps> = (props) => {
    return (
      <div className="square" >
        {props.value}
      </div>
    );
  };

  // onClick={props.onClick}
  // onClick: () => void; in interface
  export default Square;