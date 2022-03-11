import "../index.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInServer from './UserInServer';

const Server = ({server}) => {
  const [serverData, setServerData] = useState([])

  useEffect(() => {
    fetchStuff()
  }, [])


  const fetchStuff = async () => {
    var res = await axios.get('https://my-discord-bot-data.herokuapp.com/login/servers/'+server.server_id+'/');
     setServerData(res.data.data)
  }

  const name = server.Name
  return (
    <div>
      <div>
        {serverData.length == 0 ? <h1>Loading ... Please Wait</h1> : <UserInServer userArray = {serverData} serverName = {name}/>}
      </div>
    </div>
  );
}

export default Server