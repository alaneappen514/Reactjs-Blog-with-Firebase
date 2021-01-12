import React from 'react'
import { PageHeader } from 'antd';
import Post from './Post'

function Posts(props) {
    return (
        <div className="posts_container">
            <div className="page_header_container">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => null}
                    title="Posts"
                />
            </div>
            <div className="articles_container">
                <Post />
            </div>
        </div>
    )
}

export default Posts;
