import React, { useState, useEffect } from 'react'
import { PageHeader, Card } from 'antd';
import api from '../mock_api'

var content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae fringilla diam. Maecenas lobortis, est quis rutrum eleifend, dolor lacus dignissim mauris, ut egestas dui eros porta felis. Curabitur feugiat viverra libero id placerat. Donec sed iaculis arcu, sollicitudin malesuada sapien. Duis efficitur venenatis dolor vitae aliquet. Sed egestas auctor leo, quis semper neque cursus id. Sed condimentum leo non leo imperdiet congue. Duis volutpat felis quis nisl consequat condimentum. Etiam vitae egestas elit, non pharetra orci. Suspendisse imperdiet efficitur lacus, at elementum ante sodales eu.\n" +
    "Vestibulum interdum erat eget mauris facilisis consectetur. Integer pharetra posuere arcu. Nullam sed laoreet est, volutpat tincidunt neque. Aliquam nisl tellus, scelerisque sed tincidunt vel, semper at mauris. Vivamus dignissim, neque ut tincidunt pellentesque, mauris diam accumsan metus, in congue sem enim at lacus. Praesent a lectus nec ex sagittis tristique. In volutpat odio odio, eget varius quam pretium et. Fusce eu pretium dolor. Nulla placerat at nibh eu venenatis. Morbi porta dui justo, quis efficitur nisi ultrices et. Sed pulvinar eu justo ut lobortis. Proin pharetra risus nec libero consequat semper. Mauris at euismod mi. Mauris facilisis sagittis ante nec iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
    "Proin vitae cursus odio. Morbi vitae dui nulla. Nullam placerat purus quis purus imperdiet hendrerit. Nullam eget arcu ut purus ullamcorper convallis. Aliquam pretium justo at fermentum varius. Duis tincidunt a dui nec scelerisque. Curabitur sed ullamcorper urna. Nullam porttitor, magna id dignissim placerat, quam elit ultricies neque, vitae condimentum arcu dui in turpis. Sed ut lectus finibus, pellentesque diam id, feugiat lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus commodo et ipsum a posuere. Nulla condimentum neque id mauris molestie elementum.\n" +
    "Aenean scelerisque aliquam enim, non vulputate tortor finibus vitae. Nam commodo odio arcu. Maecenas sagittis est ipsum, sed commodo purus consectetur nec. Nullam accumsan gravida feugiat. Sed molestie accumsan massa sed fringilla. Sed porta hendrerit erat, at tempor dui vulputate in. Morbi vitae massa non nisl lacinia accumsan. Duis dolor nunc, lobortis iaculis euismod non, placerat lacinia tortor. Proin iaculis nibh et tincidunt accumsan. In lorem erat, rutrum ac ultricies eget, feugiat quis lacus. Integer malesuada id sem et gravida. Aliquam vulputate nisl eros, id volutpat turpis tincidunt vel. Aliquam placerat sollicitudin enim, non faucibus sem porttitor sit amet. Mauris tincidunt varius turpis, at suscipit dui porta ac. In dictum mi eget cursus porttitor. Sed turpis lectus, porta et felis cursus, congue tempor diam." +
    "Etiam leo urna, commodo et aliquet vel, placerat eget mauris. Praesent libero magna, facilisis at venenatis quis, placerat vel mauris. Morbi imperdiet sed ligula nec lacinia. Vivamus at odio eu nibh mollis gravida. Ut eget pretium lacus, vel volutpat dui. Mauris vulputate consequat tellus, non convallis nulla dapibus at. Phasellus volutpat id sem vitae finibus. Sed vel nisl non nisi vulputate semper vel a lectus. Proin aliquet neque vel felis rutrum, ut consectetur quam imperdiet."

const Post = (props) => {

    console.log(props)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        let post = api[props.id]
        console.log('post')
        console.log(post)
        setTitle(post.title)
        setContent(post.content)

    })

    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => null}
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
