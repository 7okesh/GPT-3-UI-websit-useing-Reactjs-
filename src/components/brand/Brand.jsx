import React from 'react';
import { google,slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} atl="google"/>
      </div>
      <div>
        <img src={slack} atl="slack"/>
      </div>
      <div>
        <img src={atlassian} atl="atlassian"/>
      </div>
      <div>
        <img src={dropbox} atl="dropbox"/>
      </div>
      <div>
        <img src={shopify} atl="shopify"/>
      </div>
    </div>
  )
}

export default Brand