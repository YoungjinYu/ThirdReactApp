import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Word from "../component/Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const {day} = useParams();
  const words = useFetch(`http://localhost:3001/words/?day=${day}`);
  const leftValue = Number(day) - 1;
  const rightValue = Number(day) + 1;

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>

    <div style={{padding:'10px'}}></div>

    <Link className="footer_link" to={`/day/${leftValue}`} > {'<-'} </Link>
    <Link className="footer_link" to={`/day/${rightValue}`} > {'->'} </Link>
 
    </>
  );
}