import React, { useState, useEffect } from 'react'
import { PageHeader, Card } from 'antd';
import api from '../mock_api'
import { navigate } from "@reach/router"

const Post = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        let post = api[props.id]
        setTitle(post.title)
        setContent(post.content)
    }, [])

    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => navigate(-1)}
                    title={title}
                />
            </div>
            <div>
                <Card style={{ marginTop: '20px' }}>
                    {
                        content.split('\n').map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>

                        })
                    }

                </Card>
            </div>

        </div>
    )
}

export default Post;
