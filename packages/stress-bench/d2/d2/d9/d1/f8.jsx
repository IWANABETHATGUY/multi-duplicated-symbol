
  import React, { useContext, useEffect } from 'react'
  import I from '@iconify-icons/material-symbols/person-raised-hand.js'
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
  