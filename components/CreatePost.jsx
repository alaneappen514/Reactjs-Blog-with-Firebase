import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
const { TextArea } = Input;
import db from '../firebase'


const CreatePost = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)

    const createPost = () => {
        console.log(title + content)
    }



    return (
        <div className="create_post_container">
            <div className="page_header_container">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',

                    }}
                    title="Create Post"
                />
            </div>

            <div className="post_inputs_container" style={{
                marginTop: "20px",
                padding: "10px"
            }}>
                <div className="title-section">
                    <h1>Title</h1>
                    <Input placeholder="Post Title" value={title} onChange={onTitleChange} />
                </div>

                <div className="comment-section" style={{
                    marginTop: "20px"
                }}>
                    <h1>Comment</h1>
                    <TextArea rows={10} value={content} onChange={onContentChange} />
                </div>

                <div className="SumbitBtn" style={{
                    marginTop: "20px"
                }}>
                    <Button type="primary" size="large" onClick={createPost}>Create Post</Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;
