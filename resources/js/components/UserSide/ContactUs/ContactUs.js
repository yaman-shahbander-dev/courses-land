import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import PreloadScreen from '../../PreloadScreen/PreloadScreen';
import { Link } from 'react-router-dom';
// import Navbar from '../ReusableComponents/Navbar';
import axios from 'axios';

const sendReport = (problemTitle, problemDescription) => {
    if (problemTitle.length === 0) swal("Oh Sorry!", "Problem title is required!", "error");
    else if (problemDescription.length === 0) swal("Oh Sorry!", "Problem description is required!", "error");
    else {
        axios.post('http://127.0.0.1:8000/api/storeUserReport',  {
            problemTitle: problemTitle,
            problemDescription: problemDescription,
            userID: JSON.parse(localStorage.getItem('user-info')).id
        }).then((res) => swal("Well done!", "Repoort has been sent succccessfully!", "success"))
    }
}

const ContactUs = () => {
    const [problemTitle, setProblemTitle] = useState('');
    const [problemDescription, setProblemDescription] = useState('');

    return (
        <div>
            <PreloadScreen duration="300" />
            {/* <Navbar /> */}
            <div className={styles['background']}>
                <div className={styles['containerContact']}>
                    <div className={styles['screen']}>
                        <div className={styles['screen-header']}>
                            <div className={styles['screen-header-left']}>
                                <div className={styles['screen-header-button', 'close']}></div>
                                <div className={styles['screen-header-button', 'maximize']}></div>
                                <div className={styles['screen-header-button', 'minimize']}></div>
                            </div>
                            <div className={styles['screen-header-right']}>
                                <div className={styles['screen-header-ellipsis']}></div>
                                <div className={styles['screen-header-ellipsis']}></div>
                                <div className={styles['screen-header-ellipsis']}></div>
                            </div>
                        </div>
                        <div className={styles['screen-body']}>
                            <div className={styles['screen-body-item']}>
                                <div className={styles['app-form']}>
                                    <div className={styles['app-form-group']}>
                                        <input onChange={(e) => setProblemTitle(e.target.value)} className={styles['app-form-control']} placeholder="Problem" />
                                    </div>
                                    <div className={styles['app-form-group', 'message']}>
                                        <textarea onChange={(e) => setProblemDescription(e.target.value)} className={styles['app-form-control']} placeholder="Details" rows="7" style={{ resize: 'none' }}></textarea>
                                    </div>
                                    <div className={styles['app-form-group', 'buttons']}>
                                        <Link to="/" className={styles['app-form-button']} style={{ marginRight: '10px' }}>CANCEL</Link>
                                        <button onClick={() => sendReport(problemTitle, problemDescription)} type="button" className={styles['app-form-button']} style={{ width: '100px', marginLeft: '20px', marginBottom: '20px' }}>SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactUs;
