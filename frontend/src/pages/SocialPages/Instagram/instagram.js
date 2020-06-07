import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { GET_INSTAGRAM_LIST } from '../../../queries';

import './instagram.css';

export default function Instagram()
{
    const [styleLoader, setStyleLoader] = useState({ display: 'block' });
    const [styleBody, setStyleBody] = useState({ display: 'none' });
    const [listInsta, setlistInsta] = useState([]);
    
    useQuery(GET_INSTAGRAM_LIST, {
            onCompleted: data => {
                setlistInsta(data.instagramlist);
            }
        } 
    );

    useEffect(()=>{
        setTimeout(() => 
        {
            setStyleLoader({ display: 'none' });
            setStyleBody({ display: 'block' });
        }, 5000);
    }, [listInsta])

    return (
        <div>
            <div id="loaderGit" style={ styleLoader }>
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            </div> 
            <div id="bodyGit" style={ styleBody } className="insta-list-header">
                {
                    listInsta ? 
                        listInsta.map(line => 
                            <div className="insta-list-body" key={line.id} >
                                {
                                    line.media_url.match('video') ? 
                                    <video width="320" height="240" controls>
                                        <source src={line.media_url} type="video/mp4">
                                        </source>
                                        Your browser does not support the video tag.
                                    </video> 
                                    : 
                                    <img src={line.media_url} alt="media_url"/>
                                }
                            </div>     
                        )
                    : (<span>Please, refresh browser, it's a free backend api, i'm sorry</span>)
                }
            </div>
        </div>
    );
}