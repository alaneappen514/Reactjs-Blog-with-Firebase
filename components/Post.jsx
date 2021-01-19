import React, { useState, useEffect } from 'react'
import { PageHeader, Card } from 'antd';
import { navigate } from "@reach/router"
import db from '../firebase'

const Post = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        //Gets a specific post from Posts Collection
        let postRef = db
            .collection('posts')
            .doc(props.id)

        postRef.get().then(doc => {
            let { content, title } = doc.data()
            setTitle(title)
            setContent(content)
        })

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
