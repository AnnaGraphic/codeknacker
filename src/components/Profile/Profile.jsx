import './profile.css';
import { useState } from 'react';
import {userData} from '../../data/userdata';

export function Profile() {
  const newName =  'Dummy Name'
  const [editMode, setEditMode] = useState(false);

  const handleSaveChanges = () => {
    //userData.name = newName;
    alert('wäre gespeichert worden');
    setEditMode(false);
  };
  const handleChange = (e) => {
    //set name / pwd
    console.log(e.target.value);
  }

  return (
    <div className="profile">
      <div className="profilePic"><img src={userData.picUrl} alt="" /></div>
      <div className="profileInfo">
        <p>
        Name: {editMode ? <input type="text" value={newName} onChange={handleChange} /> : userData.name}
        </p>
        <p>Password: {editMode ? <input type="password" value={userData.password} onChange={handleChange} /> : '*****'}</p>
        <p>Your Score: {userData.score}</p>
        {editMode ? (
          <button onClick={handleSaveChanges}>Save Changes</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
      </div>
    </div>
  )
}