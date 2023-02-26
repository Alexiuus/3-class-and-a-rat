function ListInfoUser({username, link}){
    return (
      <div>
        <ul>
          <li>Username: <span className='itemInfo'>{username}</span></li>
          <li>link (Share this link to your friends): <span className='itemInfo'>{link}</span></li>
        </ul>
      </div>
    )
  }
  
  function ItemUser(item){
    return <li>username: <span className='itemInfo'>{item.username}</span></li>;
  }
  
  function ListUsersGame({listUsers}){
    const itemsList = <ul>{listUsers.map((item, i) => <ItemUser item={item}/>)}</ul>;
    return (
      <div>
        { 
          (listUsers.length > 0)? {itemsList} : <p>Loading...</p> 
        }
      </div>
    )
  }

export { ListInfoUser, ListUsersGame };