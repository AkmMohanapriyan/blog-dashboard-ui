function SideBar () {

    return (

        <>
        
        <div className="sidebar" style={{ width: '250px', background: '#333', color: 'white', padding: '20px' }}>
        <h2>Admin Panel</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Dashboard Overview</a>
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Add Blog</a>
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Manage Blogs</a>
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Users</a>
          </li>
        </ul>
      </div>

        </>

    )

}

export default SideBar