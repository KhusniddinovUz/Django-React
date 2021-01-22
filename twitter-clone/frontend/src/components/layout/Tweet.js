import React, {useState} from 'react';

const Tweet = (props) => {
    const [liked, setLiked] = useState(false)

    let likeClass = ''

    if (liked) {
        likeClass = 'likeBtn'
    } else {
        likeClass = ''
    }

    const likeHandler = () => {
        setLiked(like => !like)
    }


    return (
        <div className='Tweet container p-2 '>
            <div className='d-flex'>
                <div>
                    <img
                        src={`https://ui-avatars.com/api/?name=${props.tweet.username}&background=random`}
                        className='profile-image'
                        alt='profile'
                    />
                </div>
                <div className='container'>
                    <span className='username'>{props.tweet.username}</span>
                    <div>{props.tweet.text}</div>
                </div>
            </div>
            <div className='footer d-flex justify-content-evenly mt-3'>
                <i className='far fa-comment tweet-icon'/>
                <div>
                    <i onClick={likeHandler} className={`far fa-heart tweet-icon ${likeClass}`}/>
                    <span>0</span>
                </div>
                <i className='far fa-share-square tweet-icon'/>
            </div>
        </div>
    );
};

export default Tweet;
