import React, { useState } from 'react';
import Navbar from '../components/Navber';
import SideBar from '../components/SideBar';
import Footer from "../components/Footer"


const AdminDashboard = () => {
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePublish = () => {
    if (newBlog.title && newBlog.content) {
      setBlogs(prev => [...prev, { ...newBlog, id: Date.now() }]);
      setNewBlog({ title: '', content: '' });
      setShowBlogForm(false);
    }
  };


  return (
    <>

    <Navbar />
    
    <div className="admin-dashboard row" style={{ display: 'flex', minHeight: '90vh' }}>

        <SideBar />

      {/* Main Content */}
      <div className="main-content" style={{ width: '700px' , flex: 1, padding: '20px' }}>
        <h1>Admin Blog Dashboard</h1>
        
        {!showBlogForm && blogs.length === 0 && (
          <div>
            <p>Not yet blogs</p>
            <button 
              onClick={() => setShowBlogForm(true)}
              style={{
                padding: '10px 20px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Create blog
            </button>
          </div>
        )}

        {showBlogForm && (
          <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
                          <button
                onClick={() => {
                  setShowBlogForm(false);
                  setNewBlog({ title: '', content: '' });
                }}
                style={{
                  padding: '10px 20px',
                  background: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            <h2>Add new blog</h2>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Content</label>
              <textarea
                name="content"
                value={newBlog.content}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', minHeight: '150px' }}
              />
            </div>
            <div>
              <button
                onClick={handlePublish}
                style={{
                  padding: '10px 20px',
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Publish Blog
              </button>
            </div>
          </div>
        )}

        {blogs.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <h2>Published Blogs</h2>
            {blogs.map(blog => (
              <div key={blog.id} style={{ 
                marginBottom: '20px', 
                padding: '15px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                position: 'relative'
              }}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <div style={{ marginTop: '10px' }}>
                  <button
                    style={{
                      padding: '5px 10px',
                      background: '#2196F3',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginRight: '5px'
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      padding: '5px 10px',
                      background: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    <Footer/>      


    </>
  );
};

export default AdminDashboard;