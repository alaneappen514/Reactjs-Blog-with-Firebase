import React from 'react';
import { Card } from 'antd';
import { Link } from '@reach/router'

const PostSnippet = (props) => {
    return (
        <div className="post_snippet_container">

            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_links">
                        <Link to={`/post/${props.id}`} style={{ marginRight: '15px' }}>Read Full Article</Link>
                        <Link to={`/edit_post/${props.id}`}>Edit</Link>
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

        </div>
    )

}

export default PostSnippet;
