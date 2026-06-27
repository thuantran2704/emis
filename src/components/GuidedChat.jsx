import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { MessageSquareText, X, RotateCcw, Phone, Clock3, ChevronRight, LifeBuoy } from 'lucide-react';
import { chatContent } from '../Translations/chatContent';
import { faqContent } from '../Translations/faqContent';

const eyebrowFont = {};

export default function GuidedChat() {
  const language = useSelector((state) => state.language.language);
  const content = chatContent[language] || chatContent.english;
  const faq = faqContent[language] || faqContent.english;
  const categories = faq.categories || [];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [stage, setStage] = useState('topics'); // topics | questions | answered | contact | pending
  const [categoryIndex, setCategoryIndex] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  const typingTimer = useRef(null);

  const clearTyping = () => {
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
      typingTimer.current = null;
    }
  };

  const start = () => {
    clearTyping();
    setIsTyping(false);
    setMessages([{ role: 'bot', text: content.greeting }]);
    setStage('topics');
    setCategoryIndex(null);
  };

  const openChat = () => {
    setIsOpen(true);
    start();
  };

  const push = (...items) => setMessages((prev) => [...prev, ...items]);

  // Show a short "typing" pause, then deliver the bot reply and reveal choices.
  const replyAfterHold = (botMessages, nextStage) => {
    clearTyping();
    setStage('pending');
    setIsTyping(true);
    typingTimer.current = setTimeout(() => {
      setIsTyping(false);
      push(...botMessages);
      setStage(nextStage);
      typingTimer.current = null;
    }, 750);
  };

  useEffect(() => () => clearTyping(), []);

  useEffect(() => {
    if (isOpen) bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen, isTyping]);

  const selectTopic = (index) => {
    push({ role: 'user', text: categories[index].title });
    setCategoryIndex(index);
    replyAfterHold([{ role: 'bot', text: content.questionsIntro }], 'questions');
  };

  const selectQuestion = (item) => {
    push({ role: 'user', text: item.question });
    replyAfterHold([{ role: 'bot', text: item.answer }], 'answered');
  };

  const askAnother = () => {
    replyAfterHold([{ role: 'bot', text: content.questionsIntro }], 'questions');
  };

  const chooseTopic = () => {
    setCategoryIndex(null);
    replyAfterHold([{ role: 'bot', text: content.topicsPrompt }], 'topics');
  };

  const contactUs = () => {
    push({ role: 'user', text: content.stillNeedHelp });
    replyAfterHold(
      [{ role: 'bot', text: content.contactIntro }, { role: 'bot', type: 'contact' }],
      'contact',
    );
  };

  const activeCategory = categoryIndex != null ? categories[categoryIndex] : null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen && (
        <div
          className="absolute bottom-full right-0 mb-3 flex h-[min(72vh,34rem)] w-[min(92vw,23rem)] flex-col overflow-hidden rounded-2xl border border-[#eadfc4] bg-white shadow-[0_18px_40px_rgba(31,41,55,0.22)] animate-chat-in"
          role="dialog"
          aria-label={content.title}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 bg-[#2a3439] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4af37]">
                <MessageSquareText className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight" style={eyebrowFont}>{content.title}</p>
                <p className="text-[11px] text-white/70 leading-tight" style={eyebrowFont}>{content.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={start}
                className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label={content.restart}
                title={content.restart}
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label={content.closeLabel}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Thread + choices (scroll together for a chat feel) */}
          <div className="flex-1 overflow-y-auto bg-[#fbfcfd] px-3 py-4">
            <div className="space-y-2.5">
              {messages.map((msg, i) => {
                if (msg.type === 'contact') {
                  return (
                    <div key={i} className="space-y-2 pl-1">
                      <a
                        href={content.phoneHref}
                        className="flex items-center justify-between gap-3 rounded-xl bg-[#d4af37] px-4 py-3 text-white transition hover:bg-[#c19d30]"
                        style={eyebrowFont}
                      >
                        <span className="flex items-center gap-2.5 text-sm font-semibold">
                          <Phone className="h-4 w-4" />
                          {content.callLabel}
                        </span>
                        <span className="text-sm">{content.phoneDisplay}</span>
                      </a>
                      <a
                        href={content.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 rounded-xl border border-[#d4af37] bg-white px-4 py-3 text-sm font-semibold text-[#2a3439] transition hover:bg-[#fff6da]"
                        style={eyebrowFont}
                      >
                        <MessageSquareText className="h-4 w-4 text-[#d4af37]" />
                        {content.whatsappLabel}
                      </a>
                      <div className="flex items-start gap-2.5 rounded-xl border border-[#e4ebf2] bg-white px-4 py-3">
                        <Clock3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                        <div style={eyebrowFont}>
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{content.hoursLabel}</p>
                          <p className="text-[13px] text-[#2a3439]">{content.hours}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                const isUser = msg.role === 'user';
                return (
                  <div key={i} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] px-4 py-2.5 text-[14px] leading-relaxed ${
                        isUser
                          ? 'rounded-2xl rounded-br-sm bg-[#d4af37] text-white'
                          : 'rounded-2xl rounded-bl-sm bg-[#f7f2e7] text-[#2a3439]'
                      }`}
                      style={eyebrowFont}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-[#f7f2e7] px-4 py-3.5" aria-label="typing">
                    <span className="chat-dot" />
                    <span className="chat-dot" />
                    <span className="chat-dot" />
                  </div>
                </div>
              )}

              {/* Choices */}
              <div className="space-y-2 pt-1">
                {stage === 'topics' && categories.map((category, index) => (
                  <button
                    key={category.title}
                    onClick={() => selectTopic(index)}
                    className="group flex w-full items-center justify-between gap-3 rounded-xl border border-[#e4ebf2] bg-white px-4 py-2.5 text-left text-[14px] text-[#2a3439] transition hover:border-[#d4af37] hover:bg-[#fffaf0]"
                    style={eyebrowFont}
                  >
                    <span>{category.title}</span>
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#C5AF73] transition group-hover:translate-x-0.5" />
                  </button>
                ))}

                {stage === 'questions' && activeCategory && activeCategory.items.map((item) => (
                  <button
                    key={item.question}
                    onClick={() => selectQuestion(item)}
                    className="group flex w-full items-center justify-between gap-3 rounded-xl border border-[#e4ebf2] bg-white px-4 py-2.5 text-left text-[14px] text-[#2a3439] transition hover:border-[#d4af37] hover:bg-[#fffaf0]"
                    style={eyebrowFont}
                  >
                    <span>{item.question}</span>
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#C5AF73] transition group-hover:translate-x-0.5" />
                  </button>
                ))}

                {(stage === 'questions' || stage === 'answered') && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {stage === 'answered' && (
                      <button onClick={askAnother} className="rounded-full border border-[#e4ebf2] bg-white px-3.5 py-1.5 text-[13px] text-[#2a3439] transition hover:border-[#d4af37]" style={eyebrowFont}>
                        {content.askAnother}
                      </button>
                    )}
                    <button onClick={chooseTopic} className="rounded-full border border-[#e4ebf2] bg-white px-3.5 py-1.5 text-[13px] text-[#2a3439] transition hover:border-[#d4af37]" style={eyebrowFont}>
                      {content.chooseTopic}
                    </button>
                    <button onClick={contactUs} className="inline-flex items-center gap-1.5 rounded-full bg-[#2a3439] px-3.5 py-1.5 text-[13px] font-medium text-white transition hover:bg-[#1f262a]" style={eyebrowFont}>
                      <LifeBuoy className="h-3.5 w-3.5" />
                      {content.stillNeedHelp}
                    </button>
                  </div>
                )}

                {stage === 'contact' && (
                  <button onClick={chooseTopic} className="rounded-full border border-[#e4ebf2] bg-white px-3.5 py-1.5 text-[13px] text-[#2a3439] transition hover:border-[#d4af37]" style={eyebrowFont}>
                    {content.backToTopics}
                  </button>
                )}
              </div>

              <div ref={bottomRef} />
            </div>
          </div>
        </div>
      )}

      {/* Launcher */}
      <button
        onClick={() => (isOpen ? setIsOpen(false) : openChat())}
        className="flex h-14 items-center gap-2.5 rounded-full bg-[#d4af37] px-4 text-white shadow-lg transition hover:bg-[#c19d30]"
        aria-label={content.launcherLabel}
        aria-expanded={isOpen}
        style={eyebrowFont}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquareText className="h-6 w-6" />}
        {!isOpen && <span className="hidden text-sm font-semibold sm:inline">{content.launcherLabel}</span>}
      </button>

      <style>{`
        @keyframes chat-in {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-chat-in { animation: chat-in 0.2s ease-out; }
        .chat-dot {
          width: 7px;
          height: 7px;
          border-radius: 9999px;
          background: #C5AF73;
          display: inline-block;
          animation: chat-bounce 1s infinite ease-in-out;
        }
        .chat-dot:nth-child(2) { animation-delay: 0.15s; }
        .chat-dot:nth-child(3) { animation-delay: 0.3s; }
        @keyframes chat-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.45; }
          40% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
