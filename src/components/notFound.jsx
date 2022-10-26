import {useLocation } from 'react-router-dom'
const NotFound = () => {
const location = useLocation()
console.log(location)

    return (<div>
        <h1>Page not found at {location.pathname}</h1>
    </div>  );
}
 
export default NotFound;