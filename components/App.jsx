import React, { useState } from 'react';
import Posts from './Posts'
import "antd/dist/antd.css";
import Post from './Post'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost'
import { Router, Link } from "@reach/router";
import { Menu, notification } from 'antd';
import { BookOutlined, EditOutlined } from '@ant-design/icons';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { auth } from '../firebase'

function App(props) {

    //Checks the user is logged in, initially its false
    const [user, setUser] = useState(false)

    auth.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log(user)
            setUser(user)
        } else {
            // No user is signed in.
            console.log('no user is signed in')
        }
    });

    const openNotification = (type, feedback) => {
        notification[type]({
            message: feedback,
        });
    };


    const onSignOut = () => {
        auth.signOut()
            .then(() => {
                // Sign-out successful.
                console.log('User Signed Out')
                setUser(false)
                openNotification('success', 'Signed Out')
            }).catch((error) => {
                console.log("Sign Out Fail" + error)
            });
    }


    return (
        <div className="app_container">
            <div className="app_navbar">
                <Menu mode="horizontal">
                    <Menu.Item key="posts" icon={<BookOutlined />}>
                        <Link to="/posts">Posts</Link>
                    </Menu.Item>

                    {user &&

                        <Menu.Item key="create_post" icon={<EditOutlined />}>
                            <Link to="/create_post">Create Post</Link>
                        </Menu.Item>
                    }

                    {!user
                        ?
                        <Link to="/sign_in" style={{ float: 'right' }}>Sign In</Link>
                        :
                        <a onClick={onSignOut} style={{ float: 'right' }}>Sign Out</a>
                    }
                </Menu>
            </div>


            <Router>
                <SignIn path="sign_in" default />
                <SignUp path="sign_up" />
                <Posts path="posts" user={user} />
                <Post path="post/:id" />
                <CreatePost path="create_post" />
                <UpdatePost path="edit_post/:id" />
            </Router>
        </div>
    )

}

export default App;
