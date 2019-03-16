import React from 'react';

const ListAsset = (props) => (
  <div>
    { props.asset.token + ': ' + props.asset.quantity}
  </div>
)

export default ListAsset;