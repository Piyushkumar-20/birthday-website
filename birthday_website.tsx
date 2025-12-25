import React, { useState, useEffect, useRef } from 'react';

type Message = { type: 'bot' | 'user'; text: string };

const BirthdayWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [chatMessages, setChatMessages] = useState<Message[]>([
    { type: 'bot', text: 'Hey! I\'m so happy you\'re here! Chalo Chalo Jald se hi type kar ke bhejo ' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (currentPage === 'letter') {
      setTimeout(() => setIsLetterVisible(true), 300);
    }
  }, [currentPage]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newMessages: Message[] = [...chatMessages, { type: 'user' as const, text: userInput }];
    
    const lowerInput = userInput.toLowerCase();
    let botReply = '';

    // Rule-based responses (PLACEHOLDER - customize these!)
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      botReply = 'Surpriseee, Happy Birthday Anu Bache! Yup Yup Apurv this side apka pati aur best friend dono. 🎉🎂 Shi bolta hai piyush maan lo uski baat koi gf nhi hai meri na mai kisi ke sath talking stage pe hu, Wo to mai apko isliye bol raha tha ki ap gussaa ho jao aur ap apne pe dhyaan dene lag jao. And yes I am very Proud of my bacha jaise ap sambhal rhe ho acha kar rhe ho itna jayda improve kar liya hai its so impressive aur ap bilkul bhi guilt mat liya karo, ha i know cheezen thik nhi hai ap thik nhi ho mai thik nhi ho par ap thik to mai bhi thik. And one more thing Congratulations for your internship your reappear clear. Keep Going Ha mai bhi apko miss karta hu aur block ke liye bhi sorry mai emotional ho jata hu apko dekh ke bas isliye. I am and I Will always be proud of you remember this, You are and You will alway special to me. At last Love you 😚😚😟😟😟Ye lo emoji miss kar rhe the na app. Dont Cry Always Be Happpyyyy because you are strong and confident. Good Boi';

    } else if (lowerInput.includes('thankyou so much ji')) {
      botReply = '🥰 You\'re so welcome! You deserve all the happiness in the world!';
    } else if (lowerInput.includes('love')) {
      botReply = '💕 Aww, that means everything! You\'re truly special and loved!';
    } else {
      botReply = '✨ That\'s wonderful! Today is all about YOU and celebrating the amazing person you are.';
    }

    setTimeout(() => {
      setChatMessages([...newMessages, { type: 'bot' as const, text: botReply }]);
    }, 800);

    setChatMessages(newMessages);
    setUserInput('');
  };

  const renderHome = () => (
    <div className="page-container home-page">
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}>💙😎😎🥰</div>
        ))}
      </div>
      
      <div className="hero-content">
        <h1 className="main-heading">Happy Birthday Laddooo Master </h1>
        <p className="hero-subtext">
          {/* PLACEHOLDER: Add your emotional message here */}
          Today is a celebration of YOU — the most amazing friend anyone could ask for. 
          Get ready for a special surprise made just for you...
        </p>
        <button className="cta-button" onClick={() => setCurrentPage('letter')}>
          Open Your Surprise →
        </button>
      </div>
    </div>
  );

  const renderLetter = () => (
    <div className="page-container letter-page">
      <div className={`letter-card ${isLetterVisible ? 'visible' : ''}`}>
        <div className="letter-header">
          <h2>A Letter For You Hnji Hnji Laddooo Bacha ke Liye Hi Hai </h2>
        </div>
        <div className="letter-content">
          {/* PLACEHOLDER: Replace with your birthday letter */}
          <p>Dear Laddoooo Master,</p>
          <p>
            Happy Birthday to Princess yes yess ye ke chota sa try meri taraf se i know it's not much tere se jayda pyara nhi hai.
            ha pata hai abhi sab thik nhi hai apurv ka lag raga hoga tujhe laddoooo par he is also wishing you Happy Birthday ha pati hai wo apka aur hamesha rahega Apko hamesha miss karta hai wo mai bata raha hu na.
          </p>
          <p>
            So Hey guys apko pata hai life ki unending wierd si race mai suddenly ek achi si dost mil gyi ha maine kabhi nhi socha tha ki ek din apki jaisi dost meri life mai ayegi jo meri har baat ko samjhegi, par bus ke last seat ke north south pole se sath baithne lagi aur fir kya tha humari dosti ki shuruwat ho gyi.Hmm logo ne bahut chidaya bahut bola par aisi waisi dosti thodi na thi jo iti assani se tut jaye. 
            wo baat alag hai hamare beech mai kai baar disaggreement hua par fir bhi humne apni dosti ko kabhi kamzor nhi hone diya. starting mai laga are  bahut time hai abhi toh par dekhte dekhte time kab chala gaya pata hi nhi chala ab to laddooo college se jane wali hai ha uski problems thi par akele uski nhi thi sath sath meri bhi thi, ha bahut natak karti hai par cute bhi hai, ha ashleelta karti hai par kabhi galat matlab nhi bola, ha dantti bhi hai par pyaar se bhi bolti hai, ha thoda time leti hai samjhne par samjh Jati hai. par achanak se ab realise hota hai ki kitni jaldi time nikal gaya aur uske jane ka samaya aa gaya hh sochta hu to mai bhi emotional ho jata hu uske jane ke baad ye college sirf ek haunted place ban jayega aur wresting wring jaha mujhe roj hustle karna padega wo bhi akele kyuki time hi itni jaldi nikal gaya pata bhi nhi chala. Mera bus ka safar to bas ab uske comfy support ko miss karte hue hu nikal jayega bahut galat aadat hai ye support leke ninnii wali. roj miss karta hu apni uncomfortable ninnu travelling ke sath. kuch din pehel hi realise hua ki last dandia night hai uska is college mai ab uske jane ka time ho gaya bahut jaldi Diwali fest sab chala jayega aur wo bhi chali jayegi ha aha aur koi nhi teri hi baat kar raha hu kyu pareshan ho rhi hai mai bhi sochta hu kaise mil gyi itni achi dost. 
            Sachi mai laddoo bahut acha laga agara tere Jaisi dost nhi hoti toh shayad ye college itna acha nhi hota tune har birthday special banaya ha bahut si achi aadat bhi sikha di aur rona bhi sikha diya ab kya ab toh chali jayegi na ab kiske aage rounga mai. ya kiske aage hasunga ya hasaunga kab jane ka time aa gaya pata hi nihi chala
          </p>
          <p>
            At Last Laddooo thankyou mujhe surprise dene ke liye aur meri life ka ek bahut hi special part banne ke liye, itne pyaare pyaare gifts dene ke liye 
            Wishing you a day filled with love, laughter, and all the things that make you happiest. 
            Here's to another year of amazing adventures and unforgettable memories together!
          </p>
          <p className="letter-signature">
            With all my love in a Possitive Way,<br />
            Your Best Friend Gudduuu 
          </p>
        </div>
      </div>

      <div className={`memories-section ${isLetterVisible ? 'visible' : ''}`}>
        <h3>Our Beautiful Memories 🎬</h3>
        <div className="video-container">
          <video controls playsInline>
            <source src="/birthday-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <button className="cta-button" onClick={() => setCurrentPage('chat')}>
        One More Surprise
      </button>
    </div>
  );

  const renderChat = () => (
    <div className="page-container chat-page">
      <div className="chat-header">
        <h2> Hellooo! Apurv Here </h2>
        <p>I'm here to make your day even more special</p>
      </div>

      <div className="chat-messages">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            <div className="message-bubble">
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );

  return (
    <div className="birthday-website">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .birthday-website {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #e1f5fe 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .page-container {
          min-height: 100vh;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.6s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* HOME PAGE */
        .home-page {
          position: relative;
          text-align: center;
        }

        .floating-hearts {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .heart {
          position: absolute;
          font-size: 24px;
          animation: float linear infinite;
          opacity: 0;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .hero-content {
          z-index: 10;
          max-width: 600px;
          background: rgba(255, 255, 255, 0.95);
          padding: 40px 30px;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(100, 181, 246, 0.3);
        }

        .main-heading {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2.5rem, 8vw, 4rem);
          color: #1976d2;
          margin-bottom: 20px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .hero-subtext {
          font-size: clamp(1rem, 3vw, 1.2rem);
          color: #424242;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .cta-button {
          background: linear-gradient(135deg, #42a5f5 0%, #1976d2 100%);
          color: white;
          border: none;
          padding: 16px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(25, 118, 210, 0.4);
          margin-top: 20px;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(25, 118, 210, 0.5);
        }

        .cta-button:active {
          transform: translateY(-1px);
        }

        /* LETTER PAGE */
        .letter-page {
          padding: 40px 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .letter-card {
          background: white;
          border-radius: 25px;
          padding: 40px 30px;
          box-shadow: 0 15px 50px rgba(100, 181, 246, 0.25);
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .letter-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .letter-header h2 {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          color: #1976d2;
          text-align: center;
          margin-bottom: 30px;
        }

        .letter-content {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          color: #424242;
          line-height: 2;
        }

        .letter-content p {
          margin-bottom: 20px;
        }

        .letter-signature {
          margin-top: 40px;
          font-style: italic;
          color: #1976d2;
        }

        .memories-section {
          background: white;
          border-radius: 25px;
          padding: 40px 30px;
          box-shadow: 0 15px 50px rgba(100, 181, 246, 0.25);
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.3s;
        }

        .memories-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .memories-section h3 {
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: #1976d2;
          text-align: center;
          margin-bottom: 25px;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .video-placeholder {
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #1976d2;
        }

        .play-icon {
          font-size: 4rem;
          margin-bottom: 15px;
        }

        .video-container video {
          width: 100%;
          display: block;
        }

        /* CHAT PAGE */
        .chat-page {
          max-width: 700px;
          width: 100%;
          padding: 20px;
          justify-content: flex-start;
        }

        .chat-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(100, 181, 246, 0.2);
        }

        .chat-header h2 {
          font-size: clamp(1.8rem, 5vw, 2.3rem);
          color: #1976d2;
          margin-bottom: 10px;
        }

        .chat-header p {
          color: #616161;
        }

        .chat-messages {
          flex: 1;
          width: 100%;
          max-height: 50vh;
          overflow-y: auto;
          padding: 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(100, 181, 246, 0.2);
          margin-bottom: 20px;
        }

        .message {
          display: flex;
          margin-bottom: 15px;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          justify-content: flex-end;
        }

        .message.bot {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 75%;
          padding: 12px 18px;
          border-radius: 20px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .message.user .message-bubble {
          background: linear-gradient(135deg, #42a5f5 0%, #1976d2 100%);
          color: white;
          border-bottom-right-radius: 5px;
        }

        .message.bot .message-bubble {
          background: #e3f2fd;
          color: #424242;
          border-bottom-left-radius: 5px;
        }

        .chat-input-container {
          display: flex;
          gap: 10px;
          width: 100%;
        }

        .chat-input {
          flex: 1;
          padding: 15px 20px;
          border: 2px solid #bbdefb;
          border-radius: 50px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .chat-input:focus {
          border-color: #42a5f5;
          box-shadow: 0 0 0 3px rgba(66, 165, 245, 0.1);
        }

        .send-button {
          padding: 15px 30px;
          background: linear-gradient(135deg, #42a5f5 0%, #1976d2 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(25, 118, 210, 0.3);
        }

        .send-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(25, 118, 210, 0.4);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .page-container {
            padding: 15px;
          }

          .hero-content {
            padding: 30px 20px;
          }

          .letter-card, .memories-section {
            padding: 25px 20px;
          }

          .chat-input-container {
            flex-direction: column;
          }

          .send-button {
            width: 100%;
          }

          .heart {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .cta-button {
            padding: 14px 30px;
            font-size: 1rem;
          }

          .message-bubble {
            max-width: 85%;
          }
        }
      `}</style>

      {currentPage === 'home' && renderHome()}
      {currentPage === 'letter' && renderLetter()}
      {currentPage === 'chat' && renderChat()}
    </div>
  );
};

export default BirthdayWebsite;