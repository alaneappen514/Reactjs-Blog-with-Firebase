import React, { useState, useEffect } from 'react'
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet'
import _ from 'lodash'
import db from '../firebase'

function Posts(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        //Gets all post from Posts Collection
        let postsRef = db.collection('posts')

        postsRef
            .get()
            .then(posts => {
                posts.forEach(post => {
                    let data = post.data()
                    //Instead of let id = post.id you can destructor using {id} = post
                    let { id } = post

                    let payload = {
                        id,
                        ...data
                    }
                    setPosts((posts) => [...posts, payload])

                })
            })
    }, [])


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
                {console.log(posts)}
                {
                    _.map(posts, (article) => {
                        return (
                            <PostSnippet
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                content={article.content.substring(0, 1000).concat("....")} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Posts;
