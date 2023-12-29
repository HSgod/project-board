import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div>
            <div className="d-flex justify-content-between">
            <h1>All ads</h1>
            <Link key={props.id} to={"/ads/add"}>
                <Button variant="outline-info">Add advert</Button>
            </Link>
            </div>
        </div>
    )
}

export default Home;