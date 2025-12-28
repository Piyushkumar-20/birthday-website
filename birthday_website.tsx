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
      
      {/* Gift Ribbon Overlay */}
      <div className="gift-ribbon-container">
        <div className="gift-ribbon">
          <div className="ribbon-left"></div>
          <div className="ribbon-right"></div>
          <div className="ribbon-knot"></div>
        </div>
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

      {/* Photos Section on Chat Page */}
      <div className="chat-photos-section">
        <h3 className="photos-heading">More Precious Moments 💫</h3>
        <p className="photos-subtext">Reliving our best times together</p>
        
        <div className="photos-grid">
          <div className="photo-card">
            <div className="photo-placeholder">
              <img src="/chat-photo1.jpg" alt="Chat Memory 1" />
            </div>
            <p className="photo-caption">Laughing together</p>
          </div>
          
          <div className="photo-card">
            <div className="photo-placeholder">
              <img src="/chat-photo2.jpg" alt="Chat Memory 2" />
            </div>
            <p className="photo-caption">Best moments</p>
          </div>
          
          <div className="photo-card">
            <div className="photo-placeholder">
              <img src="/chat-photo3.jpg" alt="Chat Memory 3" />
            </div>
            <p className="photo-caption">Fun times</p>
          </div>
          
          <div className="photo-card">
            <div className="photo-placeholder">
              <img src="/chat-photo4.jpg" alt="Chat Memory 4" />
            </div>
            <p className="photo-caption">Great adventures</p>
          </div>
          
          <div className="photo-card">
            <div className="photo-placeholder">
              <img src="/chat-photo5.jpg" alt="Chat Memory 5" />
            </div>
            <p className="photo-caption">Sweet memories</p>
          </div>
          
          <div className="photo-card">
            <div className="photo-placeholder">
              <img src="/chat-photo6.jpg" alt="Chat Memory 6" />
            </div>
            <p className="photo-caption">Forever friends</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="birthday-website">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .birthday-website {
          font-family: 'Inter', 'Poppins', sans-serif;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f8fafc 70%, #eff6ff 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .page-container {
          min-height: 100vh;
          padding: 32px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* HOME PAGE */
        .home-page {
          position: relative;
          text-align: center;
          background: 
            radial-gradient(circle at 20% 30%, rgba(224, 242, 254, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(186, 230, 253, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(240, 249, 255, 0.3) 0%, transparent 70%);
          overflow: hidden;
        }

        .home-page::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: subtleMove 60s linear infinite;
          pointer-events: none;
          opacity: 1;
        }

        @keyframes subtleMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .floating-hearts {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .heart {
          position: absolute;
          font-size: 32px;
          animation: float linear infinite;
          opacity: 0;
          filter: drop-shadow(0 3px 10px rgba(59, 130, 246, 0.25));
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.7);
            opacity: 0;
          }
          8% {
            opacity: 0.65;
          }
          50% {
            opacity: 0.75;
            transform: translateY(50vh) rotate(180deg) scale(1.05);
          }
          92% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(-10vh) rotate(360deg) scale(0.7);
            opacity: 0;
          }
        }

        .hero-content {
          z-index: 10;
          position: relative;
          max-width: 680px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          padding: 64px 56px;
          border-radius: 36px;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.9) inset,
            0 2px 4px rgba(59, 130, 246, 0.05),
            0 8px 16px rgba(59, 130, 246, 0.08),
            0 20px 48px rgba(96, 165, 250, 0.12),
            0 32px 80px rgba(147, 197, 253, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.9);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          
          /* Initial hidden state */
          opacity: 0;
          transform: translateY(30px) scale(0.96);
          
          /* Reveal animation - delayed to allow ribbon to open first */
          animation: revealHero 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.9s forwards;
        }

        @keyframes revealHero {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
            filter: blur(8px);
          }
          50% {
            opacity: 0.6;
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* Glow halo that appears during reveal */
        .hero-content::after {
          content: '';
          position: absolute;
          top: -40px;
          left: -40px;
          right: -40px;
          bottom: -40px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
          border-radius: 50px;
          z-index: -1;
          opacity: 0;
          animation: glowReveal 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
        }

        @keyframes glowReveal {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }

        /* === GIFT RIBBON ANIMATION === */
        
        /* Ribbon container - wrapper around hero card */
        .gift-ribbon-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 680px;
          max-width: 90%;
          height: 100%;
          pointer-events: none;
          z-index: 15;
        }

        /* Horizontal ribbon across center */
        .gift-ribbon {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 80px;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Left ribbon part */
        .ribbon-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #0284c7 100%);
          border-radius: 12px 0 0 12px;
          box-shadow: 
            0 4px 12px rgba(14, 165, 233, 0.3),
            0 8px 24px rgba(14, 165, 233, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          
          /* Animation: slide left, rotate, fade out */
          animation: ribbonSlideLeft 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Right ribbon part */
        .ribbon-right {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%);
          border-radius: 0 12px 12px 0;
          box-shadow: 
            0 4px 12px rgba(14, 165, 233, 0.3),
            0 8px 24px rgba(14, 165, 233, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          
          /* Animation: slide right, rotate, fade out */
          animation: ribbonSlideRight 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Center knot/bow decoration */
        .ribbon-knot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7dd3fc 0%, #38bdf8 50%, #0ea5e9 100%);
          border-radius: 50%;
          box-shadow: 
            0 0 0 4px rgba(255, 255, 255, 0.3),
            0 4px 16px rgba(14, 165, 233, 0.4),
            0 8px 32px rgba(14, 165, 233, 0.3),
            inset 0 2px 6px rgba(255, 255, 255, 0.4),
            inset 0 -2px 6px rgba(0, 0, 0, 0.15);
          z-index: 20;
          
          /* Animation: scale up then fade out */
          animation: knotReveal 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Ribbon shine effect */
        .ribbon-left::before,
        .ribbon-right::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%);
          border-radius: inherit;
        }

        /* Ribbon animations */
        @keyframes ribbonSlideLeft {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-120%) rotate(-15deg);
            opacity: 0;
          }
        }

        @keyframes ribbonSlideRight {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(120%) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes knotReveal {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          30% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
          }
          70% {
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }

        /* Hide ribbon after animation completes */
        @keyframes hideRibbon {
          to {
            display: none;
            pointer-events: none;
            visibility: hidden;
          }
        }

        .gift-ribbon-container {
          animation: hideRibbon 0.1s linear 2.1s forwards;
        }

        .hero-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(186, 230, 253, 0.8) 20%, 
            rgba(224, 242, 254, 0.9) 50%, 
            rgba(186, 230, 253, 0.8) 80%, 
            transparent 100%);
          border-radius: 36px 36px 0 0;
        }

        .hero-content:hover {
          transform: translateY(-6px) scale(1);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.95) inset,
            0 4px 8px rgba(59, 130, 246, 0.08),
            0 12px 24px rgba(59, 130, 246, 0.1),
            0 24px 56px rgba(96, 165, 250, 0.14),
            0 40px 96px rgba(147, 197, 253, 0.12);
        }

        .main-heading {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2.75rem, 8vw, 4.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0369a1 0%, #0284c7 25%, #0ea5e9 50%, #38bdf8 75%, #7dd3fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 28px;
          line-height: 1.2;
          letter-spacing: 1px;
          filter: drop-shadow(0 2px 12px rgba(14, 165, 233, 0.15));
          position: relative;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px);
          
          /* Staggered reveal - appears after ribbon opens */
          animation: textReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 2.5s forwards;
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .hero-subtext {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.08rem, 3vw, 1.2rem);
          font-weight: 400;
          color: #475569;
          line-height: 1.85;
          margin-bottom: 40px;
          letter-spacing: 0.3px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px);
          
          /* Appears after ribbon opens */
          animation: textReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 2.9s forwards;
        }

        .cta-button {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border: none;
          padding: 20px 52px;
          font-size: 1.08rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.15),
            0 16px 32px rgba(14, 165, 233, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          margin-top: 8px;
          position: relative;
          overflow: hidden;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          
          /* Appears after ribbon opens */
          animation: 
            buttonReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 3.3s forwards,
            buttonPulse 1.5s ease-out 4.5s 1;
        }

        @keyframes buttonReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* One-time gentle pulse after button appears */
        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 
              0 2px 4px rgba(14, 165, 233, 0.2),
              0 8px 16px rgba(14, 165, 233, 0.15),
              0 16px 32px rgba(14, 165, 233, 0.1),
              inset 0 -2px 0 rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 
              0 4px 8px rgba(14, 165, 233, 0.3),
              0 12px 24px rgba(14, 165, 233, 0.25),
              0 20px 40px rgba(14, 165, 233, 0.2),
              0 0 0 6px rgba(56, 189, 248, 0.15),
              inset 0 -2px 0 rgba(0, 0, 0, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
          transition: left 0.7s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
          border-radius: 50px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .cta-button:hover::after {
          opacity: 1;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.25),
            0 12px 24px rgba(14, 165, 233, 0.2),
            0 20px 40px rgba(14, 165, 233, 0.15),
            0 0 0 4px rgba(56, 189, 248, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .cta-button:active {
          transform: translateY(-2px) scale(0.98);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 6px 12px rgba(14, 165, 233, 0.15),
            0 0 0 4px rgba(56, 189, 248, 0.08);
        }

        /* LETTER PAGE */
        .letter-page {
          padding: 56px 20px;
          max-width: 900px;
          margin: 0 auto;
          background: radial-gradient(circle at center, rgba(240, 249, 255, 0.5) 0%, transparent 70%);
        }

        .letter-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 56px 48px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .letter-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .letter-header h2 {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.95rem, 5vw, 2.65rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 0.5px;
        }

        .letter-content {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.15rem, 3vw, 1.45rem);
          color: #334155;
          line-height: 2.1;
          font-weight: 500;
        }

        .letter-content p {
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .letter-card.visible .letter-content p:nth-child(1) { animation-delay: 0.2s; }
        .letter-card.visible .letter-content p:nth-child(2) { animation-delay: 0.4s; }
        .letter-card.visible .letter-content p:nth-child(3) { animation-delay: 0.6s; }
        .letter-card.visible .letter-content p:nth-child(4) { animation-delay: 0.8s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .letter-signature {
          margin-top: 48px;
          font-style: italic;
          color: #0284c7;
          font-size: clamp(1.15rem, 3vw, 1.35rem);
        }

        /* PHOTOS GRID SECTION */
        .photos-grid-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 48px 40px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
        }

        .photos-grid-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .photos-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.65rem, 4vw, 2.15rem);
          font-weight: 600;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .photos-subtext {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          font-weight: 400;
          color: #64748b;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 0.2px;
        }

        .photos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 900px;
          margin: 0 auto;
        }

        .photo-card {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          padding: 16px;
          box-shadow: 
            0 2px 4px rgba(59, 130, 246, 0.06),
            0 4px 12px rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(224, 242, 254, 0.6);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px);
          animation: photoFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Staggered fade-in for each photo card */
        .photos-grid-section.visible .photo-card:nth-child(1) { animation-delay: 0.8s; }
        .photos-grid-section.visible .photo-card:nth-child(2) { animation-delay: 1s; }
        .photos-grid-section.visible .photo-card:nth-child(3) { animation-delay: 1.2s; }
        .photos-grid-section.visible .photo-card:nth-child(4) { animation-delay: 1.4s; }
        .photos-grid-section.visible .photo-card:nth-child(5) { animation-delay: 1.6s; }
        .photos-grid-section.visible .photo-card:nth-child(6) { animation-delay: 1.8s; }

        @keyframes photoFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .photo-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 
            0 4px 8px rgba(59, 130, 246, 0.12),
            0 8px 20px rgba(59, 130, 246, 0.15),
            0 16px 40px rgba(96, 165, 250, 0.12);
          border-color: rgba(186, 230, 253, 0.8);
        }

        .photo-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 14px;
          overflow: hidden;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          position: relative;
          margin-bottom: 12px;
        }

        .photo-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .photo-card:hover .photo-placeholder img {
          transform: scale(1.08);
        }

        /* Placeholder styling when image is not loaded */
        .photo-placeholder:empty::before,
        .photo-placeholder img[src=""]::before,
        .photo-placeholder img:not([src])::before {
          content: '📷';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
          opacity: 0.3;
        }

        .photo-caption {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: #64748b;
          text-align: center;
          letter-spacing: 0.1px;
          margin: 0;
          line-height: 1.4;
        }

        .memories-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 48px 40px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }

        .memories-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .memories-section h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.65rem, 4vw, 2.15rem);
          font-weight: 600;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 32px;
          letter-spacing: -0.5px;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.06),
            0 8px 20px rgba(59, 130, 246, 0.12),
            0 16px 40px rgba(96, 165, 250, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .video-container:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 6px 12px rgba(0, 0, 0, 0.08),
            0 12px 28px rgba(59, 130, 246, 0.14),
            0 20px 48px rgba(96, 165, 250, 0.12);
        }

        .video-placeholder {
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #0284c7;
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
          max-width: 720px;
          width: 100%;
          padding: 32px 20px;
          justify-content: flex-start;
          background: radial-gradient(circle at top, rgba(240, 249, 255, 0.4) 0%, transparent 60%);
        }

        .chat-header {
          text-align: center;
          margin-bottom: 28px;
          padding: 32px 28px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 12px 32px rgba(96, 165, 250, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }

        .chat-header h2 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.85rem, 5vw, 2.35rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .chat-header p {
          font-family: 'Inter', sans-serif;
          font-size: 1.02rem;
          color: #64748b;
          font-weight: 400;
          letter-spacing: 0.1px;
        }

        .chat-messages {
          flex: 1;
          width: 100%;
          max-height: 52vh;
          overflow-y: auto;
          padding: 24px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 24px;
          box-shadow: 
            inset 0 2px 8px rgba(59, 130, 246, 0.04),
            0 1px 3px rgba(59, 130, 246, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
          scroll-behavior: smooth;
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(226, 232, 240, 0.3);
          border-radius: 10px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.4);
          border-radius: 10px;
          transition: background 0.2s ease;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.6);
        }

        .message {
          display: flex;
          margin-bottom: 18px;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
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
          max-width: 78%;
          padding: 14px 20px;
          border-radius: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 0.98rem;
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: 0.1px;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .message.user .message-bubble {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border-bottom-right-radius: 6px;
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.15),
            0 4px 12px rgba(14, 165, 233, 0.1);
        }

        .message.user .message-bubble:hover {
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.12);
          transform: translateY(-1px);
        }

        .message.bot .message-bubble {
          background: rgba(240, 249, 255, 0.9);
          color: #334155;
          border-bottom-left-radius: 6px;
          box-shadow: 
            0 1px 3px rgba(148, 163, 184, 0.1),
            0 2px 8px rgba(148, 163, 184, 0.08);
          border: 1px solid rgba(226, 232, 240, 0.6);
        }

        .message.bot .message-bubble:hover {
          background: rgba(240, 249, 255, 1);
          border-color: rgba(186, 230, 253, 0.8);
          transform: translateY(-1px);
        }

        .chat-input-container {
          display: flex;
          gap: 12px;
          width: 100%;
          align-items: center;
        }

        .chat-input {
          flex: 1;
          padding: 16px 24px;
          border: 2px solid rgba(186, 230, 253, 0.5);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #334155;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(148, 163, 184, 0.08);
        }

        .chat-input::placeholder {
          color: #94a3b8;
        }

        .chat-input:focus {
          border-color: #38bdf8;
          background: white;
          box-shadow: 
            0 0 0 3px rgba(56, 189, 248, 0.1),
            0 4px 12px rgba(59, 130, 246, 0.12);
          transform: translateY(-1px);
        }

        .send-button {
          padding: 16px 36px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 6px 16px rgba(14, 165, 233, 0.15);
        }

        .send-button:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.25),
            0 10px 20px rgba(14, 165, 233, 0.2);
        }

        .send-button:active {
          transform: translateY(0);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 4px 12px rgba(14, 165, 233, 0.15);
        }

        /* CHAT PAGE PHOTOS SECTION */
        .chat-photos-section {
          width: 100%;
          max-width: 720px;
          margin-top: 48px;
          padding: 40px 36px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .chat-photos-section .photos-grid {
          max-width: 100%;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .page-container {
            padding: 24px 16px;
          }

          .hero-content {
            padding: 48px 32px;
            border-radius: 32px;
            max-width: 92%;
          }

          /* Ribbon responsive sizing */
          .gift-ribbon-container {
            width: 92%;
          }

          .gift-ribbon {
            height: 60px;
          }

          .ribbon-knot {
            width: 48px;
            height: 48px;
          }

          .main-heading {
            margin-bottom: 24px;
            letter-spacing: 0.5px;
          }

          .hero-subtext {
            margin-bottom: 36px;
            line-height: 1.8;
          }

          .cta-button {
            padding: 18px 44px;
          }

          .letter-card {
            padding: 40px 28px;
            border-radius: 24px;
          }

          /* Photos grid - 2 columns on tablet */
          .photos-grid-section {
            padding: 36px 28px;
            border-radius: 24px;
          }

          .photos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .memories-section {
            padding: 36px 28px;
            border-radius: 24px;
          }

          .chat-header {
            padding: 28px 24px;
            border-radius: 20px;
          }

          .chat-messages {
            padding: 20px;
            border-radius: 20px;
          }

          .chat-input-container {
            flex-direction: row;
            gap: 10px;
          }

          .send-button {
            padding: 16px 28px;
            white-space: nowrap;
          }

          /* Chat photos section - tablet */
          .chat-photos-section {
            padding: 36px 28px;
            border-radius: 24px;
            margin-top: 40px;
          }

          .heart {
            font-size: 22px;
          }

          .message-bubble {
            max-width: 82%;
            padding: 12px 18px;
          }
        }

        @media (max-width: 480px) {
          .page-container {
            padding: 20px 12px;
          }

          .hero-content {
            padding: 40px 28px;
            border-radius: 28px;
            max-width: 94%;
          }

          /* Ribbon responsive sizing for small screens */
          .gift-ribbon-container {
            width: 94%;
          }

          .gift-ribbon {
            height: 50px;
          }

          .ribbon-knot {
            width: 40px;
            height: 40px;
          }

          .main-heading {
            letter-spacing: 0.3px;
          }

          .cta-button {
            padding: 17px 40px;
            font-size: 1.04rem;
          }

          .letter-card, .memories-section {
            padding: 32px 24px;
            border-radius: 20px;
          }

          /* Photos grid - 1 column on mobile */
          .photos-grid-section {
            padding: 32px 24px;
            border-radius: 20px;
          }

          .photos-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .photo-card {
            padding: 14px;
          }

          .photo-caption {
            font-size: 0.85rem;
          }

          .letter-content {
            font-size: clamp(1.1rem, 3vw, 1.3rem);
            line-height: 2;
          }

          .chat-header {
            padding: 24px 20px;
          }

          .chat-input-container {
            flex-direction: column;
            gap: 12px;
          }

          .send-button {
            width: 100%;
            padding: 16px 32px;
          }

          .message-bubble {
            max-width: 88%;
            font-size: 0.96rem;
          }

          /* Chat photos section - mobile */
          .chat-photos-section {
            padding: 32px 24px;
            border-radius: 20px;
            margin-top: 32px;
          }

          .heart {
            font-size: 20px;
          }
        }

        @media (min-width: 1200px) {
          .hero-content {
            padding: 72px 64px;
            max-width: 720px;
          }

          .main-heading {
            margin-bottom: 32px;
          }

          .hero-subtext {
            margin-bottom: 44px;
          }

          .letter-card {
            padding: 64px 56px;
          }

          .memories-section {
            padding: 56px 48px;
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