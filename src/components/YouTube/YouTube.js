import React, {useState, useEffect} from 'react'

 function YouTube() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBTuvoYG_xYKXoVW6sE2v0zLx3TgPn5Ys0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=5")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return setUser(data.results)
    });
  }, []);
   
  console.log(user)


    return (
      <div>
        {/* {user.map((m, i) => (
          <div key={i}>
           
          </div>
        ))} */}
        <p>Here is the place to hold the vedio</p>
      </div>
    )
}


export default YouTube;




















// {users.map((user, index) => (
//   <div key={index}>
//     <h1>
//       {user.name.title}
//       {user.name.frist}
//       {user.name.last}
//     </h1>
//     <img src={user.picture.large} alt="user" />

//     <p>{user.email}</p>
//     <p>{user.phone}</p>
//   </div>
// ))}







// const [users, setUsers] = useState([]);
//     useEffect(() => {
//         fetch("https://randomuser.me/api/?results=5")
//         .then((res) => {
//           return res.json()
//         })
//         .then((data) => {
//           return setUsers(data.results)
//         });
//     }, []);

//     console.log(users)