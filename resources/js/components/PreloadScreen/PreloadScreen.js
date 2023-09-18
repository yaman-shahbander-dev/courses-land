import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import './PreloadScreen.css'

const PreloadScreen = props => {
    return (
        <Preloader fadeDuration={props.duration} style={{ backgroundColor: '#ffffff' }}>
            <Placeholder >
                <div className="load">
                    <hr /><hr /><hr /><hr />
                </div>
            </Placeholder>
        </Preloader>
    );
};

export default PreloadScreen;