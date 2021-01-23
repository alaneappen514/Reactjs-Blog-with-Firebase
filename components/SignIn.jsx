import React, { useState } from 'react'
import { PageHeader, Input, Button, Row, Col, notification } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { auth } from '../firebase'
import { navigate } from "@reach/router"

const SignIn = (props) => {

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')


    const onEmailChange = (event) => SetEmail(event.target.value)
    const onPasswordChange = (event) => SetPassword(event.target.value)

    const openNotification = (type, feedback, content) => {
        notification[type]({
            message: feedback,
            description: content
        });
    };

    const onSignIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Sign in successfull")
                openNotification('success', 'Successfully signed in', '')
                navigate(`/posts`)
            })
            .catch((error) => {
                console.log("Sign Up Fail" + error)
                openNotification('error', 'Sign in Failed', 'The email or password is incorrect. Please try again')
            });

        SetEmail('')
        SetPassword('')

    }


    return (
        <Row justify="center">
            <Col className="signup_container" xs={4} sm={6} md={8} lg={10} xl={12} >
                <div className="signup_header_container">
                    <PageHeader
                        className="site-page-header"
                        title='Sign In'
                    />
                </div>
                <div className="signup_body" style={{ marginTop: '30px', padding: '25px' }}>
                    <div>
                        <h2>Email</h2>
                        <Input placeholder="email" onChange={onEmailChange} />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <h2>Password</h2>
                        <Input.Password
                            placeholder="password"
                            onChange={onPasswordChange}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                    <div>
                        <Button type="primary" size="large" onClick={onSignIn} style={{ marginTop: '20px' }}>Sign In</Button>
                        <a style={{ marginLeft: "20px" }} href="sign_up">Don't have an account, Sign Up</a>
                    </div>

                </div>
            </Col>
        </Row>
    )
}

export default SignIn
