
import CourseCard from './components/CourseCard'
import { display } from '@mui/system';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageBar from './components/PageBar'
import CoursePage from './templates/CoursePage';
import CourseCardBox from './components/CourseCardBox';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Review from './components/Review';


function App() {



return (
  <Container>
  <Router>
  <Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="stretch"
>
    <div className='App'>
      <PageBar/>
      <Container sx={{ m: 3 }}>
      <div className='content'>
        <Route exact path='/'>
        <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
    <Review/>
    </Grid>
        <Grid item  xs={6} md={4}>
       <CourseCard/>

   </Grid>
    <Grid item xs={6} md={4}>
    <CourseCardBox/>
    </Grid>

    </Grid>
         
         
        </Route>

        <Route path='/curso/:id'>
          <CoursePage/>
        </Route>
      </div>    
      </Container>
      </div>
    </Grid>  
  </Router>
  </Container>
);
}

export default App;
