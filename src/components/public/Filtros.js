
import "./Main.css";
const Filtros = ({setStatus, setGender, status, gender, species, setSpecies}) => {
  
  
  
  const handleSpecies = (e) => {
    const valor = e.target.value
    
    setSpecies(valor)
       
  };
    const handleStatus = (e) => {
        const valor = e.target.value
        
        setStatus(valor)
           
      };
      const handleGender = (e) => {
        const valor = e.target.value
    
        setGender(valor); 
       
      };
      const handleReset = () => {
       
       
        setGender(""); 
        setStatus("");
        setSpecies("");
       
      };
  return (

    <div>
      <select onChange={handleStatus} class="form-select"  aria-label="Default select example" value={status}>
      
        <option value=""> status</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
      <select onChange={handleSpecies} class="form-select"  aria-label="Default select example" value ={species}>
      <option value=""> species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="Mythological">Mythological</option>
        <option value="Animal">Animal</option>
        <option value="Disease">Disease</option>
        <option value="Robot">Robot</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Planet">Planet</option>
        <option value="Unknown">Unknown</option>
   
       
      </select>
      <select onChange={handleGender} class="form-select"  aria-label="Default select example"  value={gender}>
        <option value="">gender</option>
        <option value="female">female</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div>
      <button type="button" class="btn btn-success" onClick={ handleReset }>Clear</button>
      </div>
      
    </div>
    
  );
};

export default Filtros;


