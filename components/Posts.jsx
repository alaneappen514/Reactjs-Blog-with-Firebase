import React from 'react'
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet'
import api from '../mock_api'
import _ from 'lodash'

function Posts(props) {
    return (
        <div className="posts_container">
            <div className="page_header_container">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    title="Posts"
                />
            </div>
            <div className="posts_content_container">
                {
                    _.map(api, (article) => {
                        return (
                            <PostSnippet
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                content={article.content} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Posts;
