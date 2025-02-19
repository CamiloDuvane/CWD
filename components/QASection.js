function QASection() {
  const messages = React.useSyncExternalStore(
    room.collection('chat_message').subscribe,
    room.collection('chat_message').getList
  );

  const [selectedSubject, setSelectedSubject] = React.useState(null);
  const [newMessage, setNewMessage] = React.useState('');
  const chatEndRef = React.useRef(null);

  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatMessageDate = (created_at) => {
    const messageDate = new Date(created_at);
    const now = new Date();
    const diffDays = Math.floor((now - messageDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return messageDate.toLocaleTimeString();
    } else if (diffDays === 1) {
      return 'Ontem ' + messageDate.toLocaleTimeString();
    } else {
      return messageDate.toLocaleDateString() + ' ' + messageDate.toLocaleTimeString();
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedSubject) return;

    // Get current user from auth
    const user = auth.currentUser;
    if (!user) return;

    await room.collection('chat_message').create({
      subject: selectedSubject,
      text: newMessage,
      email: user.email // Add email to message
    });

    setNewMessage('');
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <div className="flex space-x-4 mb-4">
        <select 
          className="input flex-grow"
          value={selectedSubject || ''}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">Selecione uma matéria</option>
          <option value="matematica">Matemática</option>
          <option value="portugues">Português</option>
          <option value="historia">História</option>
          <option value="geografia">Geografia</option>
          <option value="ciencias">Ciências</option>
          <option value="ingles">Inglês</option>
          <option value="biologia">Biologia</option>
          <option value="quimica">Química</option>
          <option value="fisica">Física</option>
          <option value="arte">Arte</option>
        </select>
      </div>

      <div className="card h-full flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages
            .filter(m => !selectedSubject || m.subject === selectedSubject)
            .map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.username === room.party.client.username ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[70%] rounded-lg p-3 
                  ${message.username === room.party.client.username 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-800'}
                `}>
                  <div className="flex items-center space-x-2 mb-1">
                    <img 
                      src={`https://images.websim.ai/avatar/${message.username}`}
                      alt={message.username}
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <span className="text-sm font-medium">{message.username}</span>
                      <span className="text-xs opacity-75 block">{message.email}</span>
                    </div>
                  </div>
                  <p>{message.text}</p>
                  <span className="text-xs opacity-75">
                    {formatMessageDate(message.created_at)}
                  </span>
                </div>
              </div>
            ))}
          <div ref={chatEndRef} />
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            className="input flex-1"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            className="btn btn-primary"
            onClick={handleSendMessage}
            disabled={!selectedSubject}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}