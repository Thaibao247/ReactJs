import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addNewHobby, setActiveHobby } from "../../actions/hobby";
import HobbyList from "../../components/Home/HobbyList";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function Home(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    // Random a hobby object: id + title
    const newId = randomNumber();
    const newHobby = {
      // id: casual.uuid,
      // title: casual.title,
      id: newId,
      title: `Hobby ${newId}`,
    };

    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div>
      <h1>Hello TNTB</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        activeId={activeId}
        hobbyList={hobbyList}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default Home;
