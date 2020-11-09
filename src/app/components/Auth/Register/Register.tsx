import React, { useState, useEffect } from "react";
import { useMutation, from } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag";
import classNames from "classnames";
import { saveTokens, getTokens } from "../utils";
import styles from "../Auth.m.scss";

export default () => {
    return getTokens() ? <Redirect to='/client' /> :
     (
        <div className={classNames(styles.form_panel, styles.two)}>
            <div className={styles.form_header}>
                <h1>Register Account</h1>
            </div>
            <div>
                <form>
                    <div className={styles.form_group}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required={true}/>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required={true}/>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" required={true}/>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required={true}/>
                    </div>
                    <div className={styles.form_group}>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}