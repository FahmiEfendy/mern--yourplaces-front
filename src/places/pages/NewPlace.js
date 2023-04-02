import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input type="text" label="Title" errorText="Please enter a valid title" />
    </form>
  );
};

export default NewPlace;
