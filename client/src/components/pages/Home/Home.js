import Spinner from "../../common/Spinner/Spinner";
import { Button } from "react-bootstrap";
import Search from "../../features/Search/Search";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../config";
import { getAllUsers } from "../../../redux/usersRedux";
import { updateAd } from "../../../redux/adsRedux";

const Home = props => {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getAllUsers);

  useEffect(() => {
    
        if (user) {
        fetch(`${API_URL}/auth/user/${user.login}`)
        .then((res) => {
            if (res.status === 200) {
            return res.json().then((data) => {
                dispatch(updateAd(data._id));
            });
            }
        });
        }
    }, [dispatch, user]);

  return (
    <div>
      {pending && <Spinner />}

      {!pending && (
      <div className="d-flex justify-content-between">
        <Search />
        <Link key={props.id} to={"/ad/add"}>
          <Button variant="success">Add advert</Button>
        </Link> 
        
      </div>
      )}
          
      {!pending && (
        <div>
          <h1>All posts</h1>
        </div>
      )}
    </div>
  );
};

export default Home;