import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
 

const ChatApp = () => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    const clientId = Date.now();
    setClientId(clientId);
    const socket = new WebSocket(`ws://127.0.0.1:8001/ws/${clientId}`);
    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);
  // useEffect(() => {/;;pxl,,ll,i
  //   if (clientId) return;
  
  //   const socket = new WebSocket(`ws://localhost:8000/ws/${clientId}`);
  //   setWs(socket);
  
  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  
  useEffect(() => {
    if (!ws) return;

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    return () => {
      ws.onmessage = null;
    };
  }, [ws]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (!ws || !inputValue.trim()) return;

    ws.send(inputValue);
    setInputValue('');
  };

  return (
    <div className= ' bg-sky-100 h-screen '>
      <Navbar/>
    <div className="container mx-auto my-8 px-4">
      
    <h1 className="text-3xl font-bold mb-4 align-middle content-end">Litrary Chat</h1>
    <h2 className="text-lg font-semibold mb-2">Your ID: {clientId}</h2>
    <form onSubmit={sendMessage} className="mb-4">
      <input
        type="text"
        className="form-control py-2 px-3 border rounded-md w-3/4 mr-2"
        placeholder="Type your message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete="off"
      />
      <button className="btn btn-primary py-2 px-4 mt-3">Send</button>
    </form>
    <ul className="mt-4">
      {messages.map((message, index) => (
        <li key={index} className="py-2 px-4 border rounded-md bg-green-100 mb-2">{message}</li>
      ))}
    </ul>
  </div>
  </div>
);
};

export default ChatApp;

