import { useState, useRef, useCallback } from "react";
import Dialog from "../components/dialog";
import Thinking from "~/components/thinking";
import { api } from '~/utils/api';

const Index = () => {

  const scrollIntoView = useCallback(() => setTimeout(() => container.current.scrollIntoView(false), 20), []);
  const container = useRef<HTMLDivElement>({} as HTMLDivElement);


  const [content, setContent] = useState<string>('');

  const [messages, setMessages] = useState<Message[]>([]);

  const { mutate, isLoading } = api.chatgpt.chat.useMutation({
    onSuccess(content) {
      setMessages(messages => [...messages, { role: 'assistant', content: content ?? 'sorry...' }]);
      scrollIntoView();
    }
  });

  function send() {
    const msgs = [...messages, { role: 'user', content } as Message];
    setMessages(msgs);
    mutate(msgs);
    setContent('');
    scrollIntoView();
  }

  return (
    <div className="bg-gray-800">
      <div className="h-screen bg-gray-900 flex flex-col  container mx-auto p-4">
        <h1 className="text-6xl bg-gradient-to-r from-green-700 to-purple-700 font-bold text-transparent bg-clip-text text-center p-3">ChatGPT</h1>

        <div className="flex-grow overflow-auto">
          <div ref={container} className="flex flex-col space-y-2">
            {
              messages.map((message, index) => <Dialog key={index} message={message} />)
            }
            {isLoading && <Thinking />}
          </div>
        </div>

        <div className="flex rounded-lg border-gray-700 bg-gray-800 border mt-2">
          <input className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none" placeholder="请输入文字"
            value={content}
            onChange={e => setContent(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                send();
              }
            }}
          />
          <button className="bg-purple-700 px-4 py-2 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300" onClick={send}>发送</button>
        </div>
      </div>
    </div>
  );
};

export default Index;