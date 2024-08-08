import React from 'react'

type props = {
    children:React.ReactNode,
    notifictions:React.ReactNode,
    revenue:React.ReactNode,
    users:React.ReactNode
}
const DashboardLayout = ({children,notifictions,revenue,users}:props) => {
  return (
    <>
    <div>
        <div>{children}</div>
        <div style={{display:"flex"}}>
        <div>
            <h1>{notifictions}</h1>
            <h1>{revenue}</h1>
        </div>
        <div style={{marginLeft:'20px'}}><h1>{users}</h1></div>
        </div>
    </div>
    </>
  )
}

export default DashboardLayout