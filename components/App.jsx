import React from 'react';
import Posts from './Posts'
import "antd/dist/antd.css";
import Post from './Post'
import { Router } from "@reach/router";

function App(props) {
    return (
        <div className="app_container">
            <Router>
                <Posts default />
                <Post path="post/:id" />
            </Router>
        </div>
    )

}

export default App;
