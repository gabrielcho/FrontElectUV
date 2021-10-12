import logo from './logo.svg';
import CourseCard from './components/CourseCard'
import './App.css';
import { display } from '@mui/system';

function App() {
return (
  <div className="App">
      <CourseCard courseName={"Robots entre la historia y la ficcion"} 
      courseFaculty={"FAI"} 
      courseCode={"123145M"} 
      courseId={1} 
      courseRating={"2.5"}
      reviewCount={5}
      courseDescription={
        "Este curso abarca el desarrollo historico y cientifico que se ha desarrollado respecto al concepto de robot y lo contrapone con las ideas generadas por la cultura del cine acerca de este revolucionario fenomeno. "
      } />

      <CourseCard courseName={"Robots entre la historia y la ficcion"} 
      courseCode={"123145M"} 
      courseId={1} 
      courseRating={"2.5"}
      reviewCount={5}
      courseFaculty={"FAI"}
      courseDescription={
        "Este curso abarca el desarrollo historico y cientifico que se ha desarrollado respecto al concepto de robot y lo contrapone con las ideas generadas por la cultura del cine acerca de este revolucionario fenomeno. "
      } />

  </div>
);
}

export default App;
