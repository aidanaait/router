import {Outlet} from 'react-router-dom'
const About = () => {
    return ( <div>
        <h1>About the Company</h1>
        {/* renders the next match with in a set of matches */}
        <Outlet/>
    </div> );
}
 
export default About;