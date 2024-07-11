import React from 'react'
import RequestForm from './RequestForm'
import ViewRequests from './RequestCards'

const PostRequest = () => {
    return (
        <div className='requests-main row'>
            <div className="requests-sideBar col-sm-3">
                Book Requests
                <ViewRequests />
            </div>
            <div className="requests-form col-sm-9 sticky-content" >
                
                <RequestForm />
            </div>
        </div>
      )
}

export default PostRequest