import React, { useState } from 'react';
import './Chatbot.css';
import { FaMessage } from 'react-icons/fa6';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    console.log('Chat button clicked! Toggling from', isOpen, 'to', !isOpen); // Debug log
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input.trim(), sender: 'user' };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      let botResponse = "I'm not sure how to respond. How can I assist you with my portfolio?";
      const messageLower = input.toLowerCase();


    if (messageLower.includes('hi') || messageLower.includes('hello') || messageLower.includes('hey')) {
      botResponse = "Hi there! I’m Ravi’s AI assistant, here to guide you through his portfolio. Want to start with an overview or jump into something specific like skills or projects?";
    } else if (messageLower.includes('how are you')) {
      botResponse = "I’m a bot, so I’m always good to go! How can I help you today?";
    } else if (messageLower.includes('who are you?') || messageLower.includes('tell me about yourself')) {
      botResponse = "Welcome to my portfolio! I’m an aspiring Software Engineer passionate about transforming knowledge into practical solutions that tackle real-world challenges. You can ask about my skills, projects, or anything else!";
    } else if (messageLower.includes('what do you do?') || messageLower.includes('overview')) {
      botResponse = "I’m all about turning knowledge into practical solutions for real-world problems. As an aspiring Software Engineer, I thrive in the fast-paced tech world with innovative thinking and adaptability!";
    } else if (messageLower.includes('what are your strengths?')) {
      botResponse = "My strengths? Creative problem-solving, innovative thinking, and adaptability. I bring a positive, proactive mindset and a knack for resourcefulness to every project!";
    } else if (messageLower.includes('why should i hire you?') || messageLower.includes('what makes you special')) {
      botResponse = "I stand out with my strong sense of responsibility, passion for solving real-world challenges, and ability to adapt in the ever-changing tech landscape. I’m ready to deliver practical, creative solutions!";
    } else if (messageLower.includes('home') || messageLower.includes('welcome')) {
      botResponse = "Welcome to Ravi’s portfolio! He’s an Animation Designer and Illustrator who brings stories to life through comics, illustrations, and animations. Want to dive deeper into his work?";
    } else if (messageLower.includes('about') || messageLower.includes('tell me about yourself') || messageLower.includes('who is ravi gupta')) {
      botResponse = "Ravi Gupta is a recent Computer Science Engineering graduate specializing in Artificial Intelligence from ABESIT College, Ghaziabad, India. Skilled in Java, SQL, and Python, he’s passionate about creating innovative software solutions for real-world challenges. Through hands-on projects, he’s honed his technical skills, adaptability, and teamwork abilities. Ravi aims to excel as a software engineer, thriving on new challenges and impactful work.";
    } else if (messageLower.includes('what are your skills') || messageLower.includes('skills') || messageLower.includes('what can you do')) {
      botResponse = "My skills include Python, Java, AI/ML, React, HTML5, CSS3, JavaScript, OOPs, DSA, SQL, and Git. I’m equipped to tackle a wide range of technical challenges with these tools!";
    } else if (messageLower.includes('what are your projects') || messageLower.includes('tell me about your projects') || messageLower.includes('projects')) {
      botResponse = "Here’s an overview of my projects! I’ve built a Weather App using React.js and OpenWeather API for real-time weather updates with a responsive design. My Attendance System uses Python, OpenCV, and face recognition to automate attendance tracking efficiently. The House Price Prediction model, made with Python and Scikit-learn, predicts housing prices using linear regression. Counter Parking Space leverages Python and OpenCV to count parking spots in real-time via image processing. My Online Payment Fraud Detection system, built with Python and Flask, detects fraudulent transactions using machine learning. The Movie Recommendation System uses filtering techniques to suggest personalized movies, and my Calculator, coded with Tkinter in Python, offers a user-friendly interface for basic and advanced math operations.";
    } else if (messageLower.includes('what is your experience') || messageLower.includes('experience') || messageLower.includes('tell me about your education')) {
      botResponse = "Ravi Gupta holds a Bachelor’s in Computer Science (AI) from ABES Institute of Technology (2020-2024), where he excelled in coding competitions, tech workshops, and NGO educational initiatives. He completed his Intermediate at Bloom Public Sr. Sec. School (2018-2020), showcasing strong analytical skills and leadership in community service. Professionally, he worked as a Full-Stack Enginerr at Vaquant Technology (Mar 2025 - Present)and also work as a Programmer at Aptara Corporation (Sep 2024 - Feb 2025), enhancing UI/UX and system efficiency, and as a Data Analytics intern at TechnoHacks EduTech (Aug 2023 - Sept 2023), creating data-driven dashboards with Power BI, Python, and SQL.";
    } else if (messageLower.includes('resume') || messageLower.includes('cv') || messageLower.includes('download resume')) {
      botResponse = "Looking for my resume? Click here Download My Resume : https://ravigupta-portfolio.netlify.app/#resume";
    } else if (messageLower.includes('contact') || messageLower.includes('how to reach you') || messageLower.includes('get in touch')) {
      botResponse = "Feel free to reach out! For opportunities or collaboration, you can contact me at: email: ravigupta7062@gmail.com, phone number: +91 9968495093.";
    } else if (messageLower.includes('social') || messageLower.includes('connect with me') || messageLower.includes('how to reach you')) {
      botResponse = "You can connect with me on LinkedIn(https://www.linkedin.com/in/ravi07gupta/), GitHub (https://github.com/Ravigupta9968), and LeetCode (https://leetcode.com/u/Rgupta77/)! Feel free to check out my profiles there.";
    } else if (messageLower.includes('what help in data') || messageLower.includes('how can you help with data') || messageLower.includes('data assistance')) {
      botResponse = "I’m Ravi Gupta, skilled in Java, SQL, and Python, with a specialization in Artificial Intelligence. I can help with data by developing innovative software solutions, managing databases with SQL, analyzing data using Python, and applying AI to solve real-world challenges. My hands-on project experience makes me adept at processing, organizing, and leveraging data effectively!";
    } else if (messageLower.includes('summary of portfolio') || messageLower.includes('portfolio overview') || messageLower.includes('tell me about your portfolio')) {
      botResponse = "Here’s a snapshot of my portfolio! I’m Ravi Gupta, an aspiring Software Engineer and recent Computer Science Engineering graduate specializing in Artificial Intelligence from ABESIT College, Ghaziabad, India. I’m passionate about turning knowledge into practical, innovative software solutions using skills in Java, SQL, and Python. My portfolio reflects my creative problem-solving, adaptability, and hands-on project experience, all driven by a proactive mindset to tackle real-world challenges. I’m eager to grow as a software engineer and contribute to impactful projects!";
    } else {
      botResponse = "Hmm, I didn’t catch that. Try asking about my portfolio sections like 'skills', 'projects', or  'contact', and I’ll get you the details!";
    } 
  
    
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);

    setInput('');
  };

  const handleKeyDown = (e) => {
    console.log('Key pressed:', e.key); // Debug log
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-button" onClick={toggleChat}>
        <span className="chatbot-icon"><FaMessage/></span>
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chat-header">
            <h3>Portfolio Assistant </h3>
            <span className="close-btn" onClick={toggleChat}>×</span>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;