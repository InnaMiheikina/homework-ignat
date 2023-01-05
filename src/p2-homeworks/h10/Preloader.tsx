import React from 'react';
import preloader from './bll/preloader.gif'


const Preloader = () => {
    return (
        <div>
            <img style={{width:200, height:200}} src = {preloader}/>
        </div>
    );
}

export default Preloader;