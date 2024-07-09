import React from 'react'
import CommentBox from './CommentBox'

const Comments = () => {
const data = [
    {
        username: "user1",
        comment: "lorem ipsum",
        replies: [
            {
                username: "R1",
                comment: "replies 1",
                replies: [
                    {
                        username: "user1",
                        comment: "replies 2",
                        replies: [
                            {
                                username: "R1",
                                comment: "replies 3"
                            }    
                        ]
                    }    
                ]
            }    
        ]
    },
    {
        username: "user2",
        comment: "lorem ipsum",
        replies: [
            {
                username: "R1",
                comment: "replies 1",
                replies: [
                    {
                    username: "user2",
                    comment: "replies 3",
                }
            ]
            } ,
            {
                username: "R2",
                comment: "replies 2",
                replies: [
                    {
                        username: "user2",
                        comment: "replies 1",
                        replies: [
                            {
                                username: "R2",
                                comment: "replies 1",
                                replies: [
                                    {
                                        username: "user2",
                                        comment: "replies 1"
                                    }    
                                ]
                            },
                            {
                                username: "Ankita",
                                comment: "replies 1",
                                replies: [
                                    {
                                        username: "user2",
                                        comment: "replies 1"
                                    }    
                                ]
                            },
                            {
                                username: "Shubham",
                                comment: "replies 1",
                                replies: [
                                    {
                                        username: "user2",
                                        comment: "replies 1",
                                            replies: [
                                                {
                                                    username: "Shubham",
                                                    comment: "replies 2"
                                                },
                                                {
                                                    username: "Ankita",
                                                    comment: "replies 2"
                                                }    
                                            ]
                                    }    
                                ]
                            }     
                        ]
                    }    
                ]
            }    
        ]
    },
    {
        username: "user3",
        comment: "lorem ipsum",
        replies: [
            {
                username: "test1",
                comment: "replies 1",
                replies: [
                    {
                        username: "test1",
                        comment: "replies 1",
                        replies: [
                            {
                                username: "test1",
                                comment: "replies 1",
                                replies: [
                                    {
                                        username: "test1",
                                        comment: "replies 1"
                                    }    
                                ]
                            }    
                        ]
                    }    
                ]
            }    
        ]
    },
    {
        username: "user1",
        comment: "lorem ipsum"
    },
    {
        username: "user1",
        comment: "lorem ipsum",
    }
];;  
  
return (
    <div>
        {data.map((item, index) =>  <CommentBox key={index} data={item}/>)}
       
    </div>
  )
}

export default Comments