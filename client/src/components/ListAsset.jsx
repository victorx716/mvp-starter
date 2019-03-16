import React from 'react';

const ListAsset = (props) => (
  <div>
    { props.asset.description + ': ' + props.asset.quantity}
  </div>
)

export default ListAsset;