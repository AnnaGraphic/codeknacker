import './profile.css';
import { useState } from 'react';
import { useUserContext } from "../../contexts/UserContext";

export function Profile() {
  const { userState, dispatch } = useUserContext();
  const { username, password, score, avatar } = userState;
  const [newProfileValues, setProfileValues] = useState({username, password, avatar});
  const [editMode, setEditMode] = useState(false);
  const [inputAvatar, setInputAvatar] = useState('');

  const handleSaveChanges = () => {
    dispatch({
      type: "setUserProfile",
      value: newProfileValues,
    });
    //todo: save changes to db
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileValues({
      ...newProfileValues,
      [name]: value,
    });
  };

  const handleAvatarChange = (e) => {
    const avatar = e.target.files[0];
    setInputAvatar(avatar);
  };

  const handleChangePic = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      //console.log(formData)
      formData.append("avatar", inputAvatar);
      const res = await fetch('http://localhost:3000/api/userupdate', {
        method: "PUT",
        body: formData,
        credentials: "include",
      });
      if (res.ok) {
        console.log("success");
      //  dispatch avatar to usercontext
      console.log(userState.avatar);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <div className="profilePic"><img src={userState.avatar} alt="" /></div>
      <button onClick={handleChangePic}>change pic</button>
            <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="avatar"
          onChange={handleAvatarChange}
        />
      </div>
      <div className="profileInfo">
        <label>
        Name: {editMode ? <input type="text" name="username" value={newProfileValues.username} onChange={handleChange} /> : username}
        </label>
        <label>Password: {editMode ? <input type="password" name="password" value={newProfileValues.password} onChange={handleChange} /> : '*****'}</label>
        <label>Your Score: {score}</label>
        {editMode ? (
          <button onClick={handleSaveChanges}>Save Changes</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
      </div>
    </div>
  )
}