import React, { useState } from 'react'
import { PageHeader, Input, Button, Row, Col, notification } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { auth } from '../firebase'

const SignUp = (props) => {

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

    const onSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Sign up successfull")
                openNotification('success', 'Successfully signed up', '')
            })
            .catch((error) => {
                console.log("Sign Up Fail" + error)
                openNotification('error', 'Sign Up Failed', 'The email address is already in use')
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
                        title='Sign Up'
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
                        <Button type="primary" size="large" onClick={onSignUp} style={{ marginTop: '20px' }}>Sign Up</Button>
                        <a style={{ marginLeft: "20px" }} href='sign_in'>Already have an account, Sign In</a>
                    </div>

                </div>
            </Col>
        </Row>
    )
}

export default SignUp
