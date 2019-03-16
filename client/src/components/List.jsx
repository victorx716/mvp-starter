import React from 'react';
import ListAsset from './ListAsset.jsx';

const List = (props) => (
  <div>
    <h4> Digital Portfolio </h4>
    There are { props.assets.length } assets.
    { props.assets.map(asset => <ListAsset key={asset._id} asset={asset}/>)}
  </div>
)

export default List;