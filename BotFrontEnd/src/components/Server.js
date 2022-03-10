import "../index.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInServer from './UserInServer';

const Server = ({server}) => {
  const [serverData, setServerData] = useState([])

  useEffect(() => {
    fetchStuff()
  }, [])


<<<<<<< HEAD
  const fetchStuff = async () => {
    var res = await axios.get('https://my-discord-bot-data.herokuapp.com/login/servers/'+server.server_id+'/');
     setServerData(res.data.data)
=======
  const fetchStuff = () => {
    axios.get('https://my-discord-bot-data.herokuapp.com/login/servers/'+server.server_id+'/')
      .then((res) => {
        setServerData(res.data.data)
      })
      .then(function () {
        // always executed
      });
>>>>>>> 67283c443deeb733ed6029479012aa67a53cfed4
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