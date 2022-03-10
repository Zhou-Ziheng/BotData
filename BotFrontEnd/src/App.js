import "./index.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Servers from './components/Servers';
import Server from './components/Server';


export default function App() {
  const [serverData, setServerData] = useState([])
  const [showAllServers, setShowAllServers] = useState(true)
  const [server, setServer] = useState('')

  const pickServer = (id) => {
    var res = serverData.find(server=>server.server_id==id);
    setServer (res)
    setShowAllServers (false)
  }
  useEffect(() => {
    fetchStuff()
  }, [])

  const fetchStuff = () => {
    axios.get('https://my-discord-bot-data.herokuapp.com/login/servers/')
      .then((res) => {
        setServerData(res.data.data)
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div className="App">
      <div className = "container">
        <div className = "header">
          <h1>My Discord Bot Data</h1>
          {!showAllServers && <button className = "btn-inline" onClick = {() => {setShowAllServers(true)}}>Back</button>}
        </div>
        {showAllServers ? <Servers servers = {serverData} onPickServer = {pickServer}/> : <Server server = {server}/>}
      </div>
    </div>
  );
}
