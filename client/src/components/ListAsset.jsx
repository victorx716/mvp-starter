import React from 'react';

const ListAsset = (props) => (
  <div style={{border: '1px solid #46df98', margin: '2px', width: '200px', height: '30px', borderRadius: '3px',
        display: 'flex', justifyContent: 'space-around', color: 'white', backgroundColor: '#46df98'}}>
    <div>
      { props.asset.quantity + ' ' + props.asset.token}
    </div>
    <div>
      {'$' + (props.asset.price * props.asset.quantity)}
    </div>
  </div>
)

export default ListAsset;