function ListInfoUser({username, link}){
    return (
      <div className="ListInfoUser">
        <ul>
          <li>Username: <span className='itemInfo'>{username}</span></li>
          <li>link (Share this link to your friends): <span className='itemInfo'>{link}</span></li>
        </ul>
      </div>
    )
  }
  
  function ListUsersGame({listUsers}){
    return (
      <div className="ListUserGame">
        <ul>{
          (listUsers.length > 0)? 
            listUsers.map((item, i) => <li key={i}>username: <span className='itemInfo' key={i}>{item}</span></li>)
          : 
            <p>Loading...</p>
        }</ul>
      </div>
    )
  }

export { ListInfoUser, ListUsersGame };