import 'bootstrap/dist/css/bootstrap.min.css';

//Style for header element
const headerStyle = {
    height: '7vh'
}

//Create a bar at the top of the application to display the name.
const Header = () => {
    return ( 
        <div className='container-full bg-dark headerStyle' style={headerStyle}>
        <span className="fw-bold text-light display-5 ">
            NoteTaker++
        </span>
    </div>
     );
}
 
export default Header;