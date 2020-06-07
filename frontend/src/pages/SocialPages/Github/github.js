import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { GET_GIT_LIST } from '../../../queries';

import './github.css';
import '../../Css/ionicons.min.css';

export default function Github()
{
  const [styleLoader, setStyleLoader] = useState({ display: 'block' });
  const [styleBody, setStyleBody] = useState({ display: 'none' });
  const [listGit, setlistGit] = useState([]);
  
  useQuery(GET_GIT_LIST, {
            onCompleted: data => {
                setlistGit(data.githublist);
            }
      } 
  );
  useEffect(()=>{
    setTimeout(() => 
    {
      setStyleLoader({ display: 'none' });
      setStyleBody({ display: 'block' });
    }, 5000);
  }, [listGit]);

  return (
    <>
      <div id="loaderGit" style={ styleLoader }>
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div> 
      <div id="bodyGit" style={ styleBody } className="context-header">
        {
          listGit ? 
                  listGit.map(line => 
                    <div className="context-body" key={line.html_url} >
                      <p><b>{line.name}</b></p>
                      <p>{line.description}</p>
                      <a href={line.html_url}>Link <i className="ion-link"></i></a>
                    </div> 
                  )
          : (<span>Please, refresh browser, it's a free backend api, i'm sorry</span>)
        }

      </div> 
    </>
  );
}