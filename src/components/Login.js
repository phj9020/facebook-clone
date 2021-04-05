import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import {Auth, provider} from '../firebase';

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;

    .login__logo {
        display: flex;
        flex-direction: column;
        img {
            height: 150px;
            object-fit: contain;
        }
    }

    button {
        width:300px;
        background-color: #5197e4;
        color: #eff2f5;
        font-weight: 800;
        transition: background-color 0.3s ease-in-out;

        :hover {
            background-color: #3b8ad9;
        }
    }
`

function Login() {
    const signIn = async (e) => {
        e.preventDefault();
        try {
            await Auth.signInWithPopup(provider);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <LoginContainer>
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png" alt="facebook-logo" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="facebook-logo2" />
            </div>
            <Button type="submit" onClick={signIn}>Sign in</Button>
        </LoginContainer>
    )
}

export default Login
