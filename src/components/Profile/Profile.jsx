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

  const handleChangeAvatar = (e) => {
    const avatar = e.target.files[0];
    setInputAvatar(avatar);
  };

  const handleSaveAvatar = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("avatar", inputAvatar);
      const res = await fetch('http://localhost:3000/api/userupdate', {
        method: "PUT",
        body: formData,
        /* multer requires: */
        enctype: "multipart/form-data",
        credentials: "include",
      });
      if (res.ok) {
        try {
        const data = await res.json();
          if (data && data.secure_url) {
            const avatar = data.secure_url;
            dispatch({
              type: "setAvatar",
              value: avatar,
            });
          }
        } catch (error) {
          console.log('error parsing response', error);
        }
      } else {
          console.log("error uploading avatar", res.statusText);
      }
    } catch (error) {
      console.log(error);
    }
    // return?
  };

  return (
    <div className="profile">
      <div className="profilePic"><img src={userState.avatar} alt="" /></div>
      <button onClick={handleSaveAvatar}>change pic</button>
            <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="avatar"
          onChange={handleChangeAvatar}
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