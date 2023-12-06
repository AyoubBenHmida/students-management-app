import React from 'react' ;

const Boutton = ({onClick , children}) => {
  return (
    <button className='btn btn-success my-3' onClick={onClick}>
        {children}
    </button>
  )
}

export default Boutton ;
