import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {

const error = useRouteError ();
return (
<div style={{display: 'flex', flexDirection:
'column', alignItems: 'center', justifyContent:
'center', height: '100vh'}}>

<h1>Error</h1>

<p>{error.message}</p>
<Link to = "/" >Go home</Link>

</div>


)
}
export default ErrorPage