import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi, I'm the digital assistant for Prof. Bhavna Ambudkar. Ask me about her research, startups, or design thinking methodologies!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "What is your approach to Design Thinking?",
    "How do you mentor early-stage startups?",
    "Can you tell me about your innovation programs?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1200)); 
      
      let botReply = "Please provide an API key in the source code to enable live responses.";
      
      if (text.toLowerCase().includes("design")) {
        botReply = "Design Thinking is a human-centered approach to innovation that draws from the designer's toolkit to integrate the needs of people, the possibilities of technology, and the requirements for business success.";
      } else if (text.toLowerCase().includes("mentorship") || text.toLowerCase().includes("startup")) {
        botReply = "Dr. Bhavna Ambudkar advises select startups at the intersection of tech and human impact. Please use the contact form to submit an executive summary.";
      } else if (text.toLowerCase().includes("workshop") || text.toLowerCase().includes("program")) {
        botReply = "We offer robust incubator programs, student innovation cells, and extensive corporate co-creation programs.";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-launcher soft-shadow"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <div className="chatbot-window soft-shadow">
        <div className="chatbot-header">
          <div className="chatbot-title">
            <Bot size={20} color="var(--bg-navy)" />
            <div className="chatbot-header-info">
              <span className="chatbot-name">Ask Prof. Bhavna</span>
              <span className="chatbot-status"> Online</span>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-wrapper ${msg.role}`}>
              {msg.role === 'assistant' && (
                <div className="message-avatar">
                  <Bot size={14} />
                </div>
              )}
              <div className="message-content">
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message-wrapper assistant">
              <div className="message-avatar">
                <Bot size={14} />
              </div>
              <div className="message-content loading">
                <Loader2 size={16} className="spinner" /> 
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-suggestions">
          {suggestedQuestions.map((q, idx) => (
            <button 
              key={idx} 
              className="suggestion-chip"
              onClick={() => handleSend(q)}
              disabled={isLoading}
            >
              {q}
            </button>
          ))}
        </div>

        <form 
          className="chatbot-input-area"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
        >
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            className="chat-input"
          />
          <button 
            type="submit" 
            className="chat-submit-btn"
            disabled={!inputValue.trim() || isLoading}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
