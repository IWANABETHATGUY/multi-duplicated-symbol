
  import React, { useContext, useEffect } from 'react'
  import I from '@iconify-icons/material-symbols/video-camera-front-off-rounded.js'
  import { Icon } from '@iconify/react/dist/offline';
  
  function Component({ show }) {
  
    return (
      <div className={styles.navbar}>
        
        
				<Icon
					icon={I}
				/>
      </div>
    )
  }
  
  export default Component 
  