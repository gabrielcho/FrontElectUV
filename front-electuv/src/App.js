
import CourseCard from './components/CourseCard'
import { display } from '@mui/system';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageBar from './components/PageBar'
import CoursePage from './templates/CoursePage';


function App() {



return (
  <Router>
    <div className='App'>
      <PageBar/>
      <div className='content'>

        <Route exact path='/'>
          <CourseCard courseName={"Robots entre la historia y la ficcion"} 
          courseFaculty={"FAI"} 
          courseCode={"123145M"} 
          courseId={1} 
          courseRating={"2.5"}
          reviewCount={5}
          courseDescription={
            "Este curso abarca el desarrollo historico y cientifico que se ha desarrollado respecto al concepto de robot y lo contrapone con las ideas generadas por la cultura del cine acerca de este revolucionario fenomeno. "
          } />
        </Route>

        <Route path='/curso/:id'>
          <CoursePage/>
        </Route>
      </div>
      

    </div>
  </Router>
);
}

export default App;
