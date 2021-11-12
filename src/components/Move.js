import "./Move.css";
const MoveSet = (props) => {
  let moveSet = props.MoveSet.map((move) => {
    function getImageSource(category) {
      return (
        <img
          className={`category-img`}
          src={`${process.env.PUBLIC_URL}/${category}.png`}
          alt={`${category}`}
        ></img>
      );
    }
    let img = getImageSource(move[3]);
    return (
      <div className={`move`}>
        <p className={`${move[2].toLowerCase()}`}>
          {`Lvl.${move[0]} ${move[1]} `}
          {`${move[4]} ${move[5]} `}
          {img}
        </p>
      </div>
    );
  });

  return moveSet;
};

export default MoveSet;
