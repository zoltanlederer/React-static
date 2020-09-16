import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

function Tweet({ tweet }) {
    console.log(tweet);
    return (
        <div className='tweet'>
            <Avatar hash={tweet.gravatar}/>
                <div className='content'>
                    <Author author={tweet.author}/><Time time={tweet.time}/>
                    <Message text={tweet.message}/>
                
                <div className='buttons'>
                    <ReplyButton/>
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img
            src={url}
            className='avatar'
            alt='avatar'
        />
    );
}

function Message({ text }) {
    console.log(text)
    return (
        <div className='message'>
            {text}
        </div>
    );
}

function Author({ author }) {
    const { name, handle } = author;
    return (
        <span className='author'>
            <span className='name'>{name}</span>
            <span className='handle'>@{handle}</span>
        </span>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className='time'>{timeString}</span>
    );
};
    

const ReplyButton = () => (
    <i className='fa fa-reply reply-button'/>
);

function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className='retweet-count'>{count}</span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count} ) => (
    <span className='retweet-button'>
        <i className='fa fa-retweet'/>
        {getRetweetCount(count)}
    </span>    
);

const LikeButton = ({ count }) => (
    <span className='like-button'>
        <i className="fa fa-heart"/>
        {count > 0 && <span className='like-count'>{count}</span>}
    </span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

const testTweet = {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "I'm a Cat Person"
    },
    likes: 5,
    retweets: 3,
    timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));