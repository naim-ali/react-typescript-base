import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import styles from "./Dash.m.scss";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default() => {
    const menu = (
        <Menu theme="dark">
          <Menu.Item key="0">
            <a href="/">Profile</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="/">Sign out</a>
          </Menu.Item>
        </Menu>
      );
    return(
        <div className={styles.dash_wrap}>
            <div className={styles.site_wrap}>
                <nav className={styles.site_nav}>
                    <div className={styles.name}>
                        Orion.Studio
                        <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z"></path>
                        </svg>
                    </div>
                    <ul>
                        <li className={styles.active}><a href="#">Projects</a></li>
                        <li><a href="#0">Collab</a></li>
                        <li><a href="#0">Payment</a></li>
                        <li><a href="#0">Video</a></li>
                        <li><a href="#0">Distribution</a></li>
                        
                        <li><a href="#0">Messages</a></li>
                    </ul>
                    <div className={styles.note}>
                        <h3>Open the D.A.W</h3>
                        <p>Start a recording session with talented artists.</p>
                    </div>
                </nav>
            <main>
        
            <header>
                <div className={"breadcrumbs"}>
                <a href="#0/">Home/</a>
                </div>
                <h1 className={"title"}>All Projects</h1>
                <nav className={styles.nav_tabs} id="nav-tabs">
                <a href="#0" className="active">
                    All Projects
                    <span>0</span>
                </a>
                <a href="#0">
                    Archived Projects
                    <span>0</span>
                </a>
                <a href="#0">
                    Invited Projects
                </a>
                </nav>
                <div className={styles.profile_card}>
                    <div className={styles.stripe_wrapper}>
                        <div className={classnames(styles.stripe_wrapper_stripe, styles.stripe_wrapper_stripe_one)}/>
                        <div className={classnames(styles.stripe_wrapper_stripe, styles.stripe_wrapper_stripe_two)}/>
                        <div className={classnames(styles.stripe_wrapper_stripe, styles.stripe_wrapper_stripe_three)}/>
                        <div className={classnames(styles.stripe_wrapper_stripe, styles.stripe_wrapper_stripe_four)}/>
                    </div>
                    <div className={styles.profile_image}>
                        <img src="https://www.al.com/resizer/4T8A_W8jgJk1h2_7PunP0NDfxQE=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FSH23MTNCFH6LN7CI4X2GYL7SU.jpg"/>
                    </div>
                    <span className={styles.profile_name}>
                    <Dropdown placement="bottomCenter" overlay={menu} trigger={['hover']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        test user <DownOutlined />
                        </a>
                    </Dropdown>
                    </span>
                </div>
            </header>
            <div className={styles.content_columns}>
                <div className={styles.col}>
                <div className={styles.item}><a href="https://ec2-34-239-248-142.compute-1.amazonaws.com/studio">test 1</a></div>
                <div className={styles.item}><a href="https://ec2-34-239-248-142.compute-1.amazonaws.com/studio">test 5</a></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                </div>
                <div className={styles.col}>
                <div className={styles.item}><a href="https://ec2-34-239-248-142.compute-1.amazonaws.com/studio">test 2</a></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                </div>
                <div className={styles.col}>
                <div className={styles.item}><a href="https://ec2-34-239-248-142.compute-1.amazonaws.com/studio">test 3</a></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                </div>
                <div className={styles.col}>
                <div className={styles.item}><a href="https://ec2-34-239-248-142.compute-1.amazonaws.com/studio">test 4</a></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                </div>
            </div>
            </main>
        </div>
      </div>)
};