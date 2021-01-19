import React from 'react';
import Posts from './Posts'
import "antd/dist/antd.css";
import Post from './Post'
import CreatePost from './CreatePost'
import { Router, Link } from "@reach/router";
import { Menu } from 'antd';
import { BookOutlined, EditOutlined } from '@ant-design/icons';

function App(props) {
    return (
        <div className="app_container">

            <div className="app_navbar">
                <Menu mode="horizontal">
                    <Menu.Item key="posts" icon={<BookOutlined />}>
                        <Link to="/posts">Posts</Link>
                    </Menu.Item>
                    <Menu.Item key="create_post" icon={<EditOutlined />}>
                        <Link to="/create_post">Create Post</Link>
                    </Menu.Item>
                </Menu>
            </div>
            <Router>
                <Posts path="posts" default />
                <Post path="post/:id" />
                <CreatePost path="create_post" />
            </Router>
        </div>
    )

}

export default App;
