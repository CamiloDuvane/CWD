function Navbar({ currentUser, currentPage, onNavigate, onLogout }) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">
              Sistema de Aprendizagem
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('dashboard')}
              className={`btn ${currentPage === 'dashboard' ? 'btn-primary' : 'hover:text-indigo-600'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => onNavigate('subjects')}
              className={`btn ${currentPage === 'subjects' ? 'btn-primary' : 'hover:text-indigo-600'}`}
            >
              Matérias
            </button>
            <button 
              onClick={() => onNavigate('chat')}
              className={`btn ${currentPage === 'chat' ? 'btn-primary' : 'hover:text-indigo-600'}`}
            >
              Chat
            </button>
            <button 
              onClick={() => onNavigate('performance')}
              className={`btn ${currentPage === 'performance' ? 'btn-primary' : 'hover:text-indigo-600'}`}
            >
              Desempenho
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {currentUser && (
              <>
                <div className="flex items-center space-x-2">
                  <img 
                    src={`https://images.websim.ai/avatar/${currentUser.username}`}
                    alt={currentUser.username}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{currentUser.username}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="btn hover:text-red-600"
                >
                  Sair
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}