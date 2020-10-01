import React, { useContext, useEffect } from 'react'
import { MyContext } from '../contexts/blogContext'
import PostCard from './PostCard'

function PostList(props) {

     const {getPosts,loading,blogPosts} = useContext(MyContext)

     useEffect(()=>{
        getPosts()
     },[])
     console.log(blogPosts)
    return (
        <>
               <div className='posts'>
                      <div className="container">
                      <h2>Posts</h2>
                                     {
                                         !loading?(
                                                 <div className="posts-grid-container">
                                                          {
                                                              blogPosts.map((value,index)=>{
                                                                  return(
                                                                              <PostCard 

                                                                              key={index}
                                                                              
                                                                              title={value.title}

                                                                              image={value.image}

                                                                              id={value.id}

                                                                              date={value.date}

                                                                              author={value.author}


                                                                              />
                                                                  )
                                                              })
                                                          }
                                                 </div>
                                         ):(
                                            <div>Loading...</div>
                                         )
                                 }
                      </div>
              </div>  
        </>
    )
}

export default PostList


