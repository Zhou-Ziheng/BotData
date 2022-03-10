const Servers = ({servers, onPickServer}) => {
    return (
        <div>
            {
                servers.map((server) => (
                <button className = "btn" key = {server.server_id} onClick = {() => onPickServer(server.server_id)}>
                    <h1>{server.Name}</h1>
                </button>
                ))
            }
        </div>
    )
}

export default Servers