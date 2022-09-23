import React from 'react'
import {Main} from './styled'

const Background = ({fill}) => {
    return(
    <Main>
        <svg min-width="100%" height="100vh" viewBox="0 0 613 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M613 0C613 0 361.26 475.032 613 1024H0V0H613Z" fill={fill}/>
        </svg>
    </Main>
    )
}

export default Background