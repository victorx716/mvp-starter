import React from 'react';
import ListAsset from './ListAsset.jsx';

const List = (props) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    { props.assets.map(asset => <ListAsset key={asset._id} asset={asset}/>)}
  </div>
)

export default List;