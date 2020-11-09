
import React, { useState } from "react";
import { useMutation, from } from "@apollo/react-hooks";
import gql from "graphql-tag";
import classNames from "classnames";
import Login from "./Login/Login"
import Register from "./Register/Register"
import { saveTokens } from "./utils";
import styles from "./Auth.m.scss";
import ReactPlayer from 'react-player';

export default () => {
    const videoSource = 'https://grando.io/orian/video/video.mp4'
    return (
        <div>
            <div className={styles.videobg}>
                <ReactPlayer playing loop muted url = {videoSource} />
                <div className={styles.overlay}/>
            </div>
            <div className={styles.form}>
                <div className={styles.form_videobg}>
                    <ReactPlayer playing loop muted url = {videoSource} />
                    <div className={styles.overlay}/>
                </div>
                <div className={styles.form_toggle}></div>
                <Login/>
                <Register/>
            </div>
        </div>
    )
}