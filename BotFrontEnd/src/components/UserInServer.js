import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
const UserInServer = (userArray, serverName) => {
    console.log(typeof(serverName))


    const data = {
        columns: [
          { title: 'Name', field: 'user_name' },
          { title: 'Message Count', field: 'message_count', type: "numeric" },
          { title: 'Interactions', field: 'interactions', type: "numeric" },
          { title: 'Twitch Emotes', field: 'twitch_addiction', type: "numeric" },
          { title: 'Gender', field: 'gender' },
          { title: 'Pronouns', field: 'pronouns' },
        ],
        data: userArray.userArray,}


    
    return (
        <div>
            <MaterialTable
                width = {'100%'}
                rowsPerPageOptions={[100]}
                columns={data.columns}
                data={data.data}  
                options={{
                    titleStyle: {
                        fontSize: 16,
                      },
                    captionStyle: {
                        fontSize: 30,
                      },
                    rowStyle: {
                        fontSize: 16,
                      },
                  paging:true,
                  pageSize: userArray.userArray.length,       // make initial page size
                  emptyRowsWhenPaging: false,   // To avoid of having empty rows
                  pageSizeOptions:[],    // rows selection options
                }}
            />
        </div>
    )
}

export default UserInServer