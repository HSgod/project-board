import { useDispatch } from "react-redux";
import { updateAd } from "../../../redux/adsRedux";
import { useNavigate } from "react-router-dom";
import AdForm from "../AdForm/AdForm";

const AddAdForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = ad => {
    navigate("/");
    dispatch(updateAd(ad));
  }; 

  return (
    <div>
      <AdForm actionText="Add ad" action={handleAdd}/>
    </div>

  );
};

export default AddAdForm;