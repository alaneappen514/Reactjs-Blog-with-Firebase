import React from 'react';
import { Card } from 'antd';

const Post = (props) => {
    return (
        <div className="article-container">

            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Article Title"
                extra={<a href="#">More</a>}
            >
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in</p>
            </Card>

        </div>
    )

}

export default Post;
