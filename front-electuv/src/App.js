
import CourseCard from './components/CourseCard'
import { display } from '@mui/system';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageBar from './components/PageBar'
import CoursePage from './templates/CoursePage';
import CourseCardBox from './components/CourseCardBox';
import Container from '@mui/material/Container';


function App() {



return (
  <Container>
  <Router>

    <div className='App'>
      <PageBar/>
      <div className='content'>
        <Route exact path='/'>
          <CourseCardBox/>
        </Route>

        <Route path='/curso/:id'>
          <CoursePage/>
        </Route>
      </div>    
  
      </div>
  </Router>
  </Container>
);
}

export default App;
