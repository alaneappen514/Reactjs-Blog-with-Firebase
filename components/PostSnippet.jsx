import React, { useState } from 'react';
import { Card, Button, Tooltip, Modal } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Link } from '@reach/router'
import db from '../firebase'

const PostSnippet = (props) => {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Are you sure you want to delete this post');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('Deleting post');
        setConfirmLoading(true);
        setTimeout(() => {
            onDeletePost();
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const onDeletePost = () => {
        console.log('Delete Post')
        let postRef = db.collection('posts').doc(props.id)

        postRef.delete()
            .then(function () {
                console.log("deleted post successfully")
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });

    }

    return (
        <div className="post_snippet_container">

            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_links">
                        <Link to={`/post/${props.id}`} style={{ marginRight: '15px' }}>Read Full Article</Link>

                        {props.user &&
                            <>
                                <Tooltip title="Edit">
                                    <Button href={`/edit_post/${props.id}`} type="primary" shape="circle" icon={<FormOutlined />} style={{ marginRight: '15px' }}></Button>
                                </Tooltip>

                                <Tooltip title="Delete">
                                    <Button onClick={showModal} type="primary" shape="circle" icon={<DeleteOutlined />}></Button>
                                </Tooltip>
                            </>
                        }

                    </div>
                }
            >
                <p className="article_content">
                    {props.content.split('\n').map((paragraph, index) => {
                        return <p key={index}>{paragraph}</p>

                    })
                    }
                </p>
            </Card>

            <Modal
                title="Warning"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>

        </div>
    )

}

export default PostSnippet;
