import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail.js';


const App = () => {
  const commentExample = [{
    author: 'Marco K',
    time: 'Today at 7pm',
    text: 'Awesome!!'
  },
  {
    author: 'Mary Z',
    time: 'Today at 4pm',
    text: 'Nice Pics!!'
  },
  {
    author: 'Jane O',
    time: 'Today at 2pm',
    text: 'This is legendary!!'
  },
  {
    author: 'Erika Q',
    time: 'Today at 12pm',
    text: 'I like it a lot!'
  }
]
    //   comment layout has 2 major components: 
    // 1. avatar
    // 2. content section
    //    a. author name -> meta data
    //    b. comment date
    //    c. comment text
  return (
  <div className='ui container comments'>  
    {
      commentExample.map(comment => {
        return <CommentDetail author={comment.author} timeAgo={comment.time} text={comment.text}/>
      })
    }
  </div>);
  
}

ReactDOM.render(<App />, document.querySelector('#root'));
