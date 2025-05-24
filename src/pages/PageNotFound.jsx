import { Fragment } from 'react'
import styled from 'styled-components'

const PageNotFound = () => {
    return (
        <Fragment>
            <ImageStyle src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt="" />
        </Fragment>
    )
}

export default PageNotFound

const ImageStyle = styled.img`
    position: fixed;
    top: 0;
    left: 7%;
    width: 80%;
    height: 80vh;
`