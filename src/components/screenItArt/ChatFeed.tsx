import { FC } from 'react';
import './ChatFeed.css';
import './NoticeBoard.css';

// Decorative illustration of a busy chat feed. The highlighted message is the event that gets buried.
const messages = [
    'lost: blue jacket, 3rd floor',
    'anyone selling the course book?',
    'reminder: fill in the course survey',
    'who has the key to the lounge?',
    'Pub night Friday 18:00',
    'new thread: lunch today?',
    'can someone share last year’s notes',
];
const buried = 4;

const ChatFeed: FC = () => {
    return (
        <figure className="art-figure art-tilt-right">
            <div className="chat-feed" aria-hidden="true">
                {messages.map((message, index) => (
                    <div className={index === buried ? 'chat-row chat-row-buried' : 'chat-row'} key={message}>
                        <span className="chat-avatar" />
                        <span>{message}</span>
                    </div>
                ))}
            </div>
            <figcaption className="hand">the chat feed</figcaption>
        </figure>
    );
};

export default ChatFeed;
