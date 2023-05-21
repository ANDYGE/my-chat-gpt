import Image from 'next/image';
import React from 'react';

const Dialog = ({ message: { role, content } }: { message: Message; }) => {
    const isMe = role === 'user';
    return (
        <div className={`chat ${isMe ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <Image alt='avatar' src={`/${isMe ? 'me' : 'gpt'}.png`} />
                </div>
            </div>
            <div className="chat-bubble">{content}</div>
        </div>
    );
};

export default Dialog;