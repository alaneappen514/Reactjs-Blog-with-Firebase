import React, { useState, useEffect } from 'react';
import { PageHeader, Input, Button, notification } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { navigate } from "@reach/router"
const { TextArea } = Input;
import db from '../firebase'


const UpdatePost = (props) => {

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

    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)


    const openNotification = () => {
        notification.open({
            message: title,
            description:
                'Post successfully updated',
            icon: <CheckCircleTwoTone style={{ color: '#108ee9' }} />,
        });
    };

    const editPost = () => {
        let postRef = db.collection('posts').doc(props.id)
        let payload = { title, content }

        postRef.update(payload)
            .then(function (doc) {
                console.log("Document successfully updated!", doc.id);
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

        openNotification()
        navigate(`/posts`)
    }



    return (
        <div className="create_post_container">
            <div className="page_header_container">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',

                    }}
                    title="Edit Post"
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
                    <Button type="primary" size="large" onClick={editPost}>Edit Post</Button>
                </div>
            </div>
        </div>
    )
}

export default UpdatePost;
