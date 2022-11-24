import GameCharacter from "./GameCharacter";

function Team(props) {
  return (
    <div>
        <h3>Equipo</h3>
        <div className="characters-container">
          <GameCharacter 
            name={Object.keys(props.playerCharacters)[0]}
            level={Object.values(props.playerCharacters)[0].level}
            id={1}
          />
          <GameCharacter
            name={Object.keys(props.playerCharacters)[1]}
            level={Object.values(props.playerCharacters)[1].level}
            id={2}
          />
          <GameCharacter
            name={Object.keys(props.playerCharacters)[2]}
            level={Object.values(props.playerCharacters)[2].level}
            id={3}
          />
        </div>
    </div>
    
  );
}

export default Team;