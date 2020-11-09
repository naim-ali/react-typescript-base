import React, { useState, useEffect } from "react";
import { useMutation, from } from "@apollo/react-hooks";
import gql from "graphql-tag";
import classNames from "classnames";
import { saveTokens, getTokens } from "../utils";
import styles from "../Auth.m.scss";
import { Redirect, useHistory } from "react-router-dom";

export default () => {

    const history = useHistory();

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });

    const [login, { data }] = useMutation(gql`
        mutation Login($email: String!) {
          login(email: $email)
        }
    `);
    
    async function submitLogin(e: React.FormEvent) {
          
        e.preventDefault();
        const { data } = await login({ variables: loginDetails });
        
        if (data && data.login) {
          saveTokens(data.login);
          history.push("/client")
        }
    }
      return getTokens() ? <Redirect to='/client' /> :
        (
            <div className={classNames(styles.form_panel, styles.one)}>
                <div className={styles.form_header}>
                    <h1>Account Login</h1>
                </div>
                <div>
                    <form onSubmit={submitLogin}>
                        <div className={styles.form_group}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required={true}/>
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required={true}/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={styles.form_remember}>
                                <input type="checkbox"/>Remember Me
                            </label>
                            <a className={styles.form_recovery} href="#">Forgot Password?</a>
                        </div>
                        <div className={styles.form_group}>
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
}