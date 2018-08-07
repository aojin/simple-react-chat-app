import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Mark Zuckerberg",
                content: <p>Love it! :heart:</p>,
                img: "https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/416x416.jpg",
            }, {
                username: "User",
                content: <p>Very cool!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            },{
                username: "Elon Musk",
                content: <p>What is it built on?</p>,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBHU6ls6zJeNzjZca8YifgB58me98Ub_7aTZBjwilB-O0Rlw1bA",
            },{
                username: "Alex Jin",
                content: <p>Glad you guys are enjoying this group chat app, it is built with ReactJS!</p>,
                img: "https://avatars2.githubusercontent.com/u/6971053?v=4",
            }, {
                username: "Alex Jin",
                content: <p>For more cool projects, check out my Github at https://github.com/aojin</p>,
                img: "https://avatars2.githubusercontent.com/u/6971053?v=4",
            }, {
                username: "User",
                content: <p>Awesome! Will do!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Emily Chang",
                content: <p>Definitely! This looks great!</p>,
                img: "https://www.alternet.org/sites/default/files/styles/story_image/public/story_images/screen_shot_2018-03-25_at_11.40.11_am.png?itok=Co-rSs5v"
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "User",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "User";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>ReactJS Chat</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) =>
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;
