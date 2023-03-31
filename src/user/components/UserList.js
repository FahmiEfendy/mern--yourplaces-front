import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return <div className="center">No User Found!</div>;
  }

  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
