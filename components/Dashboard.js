function Dashboard({ onNavigate }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card hover:shadow-xl cursor-pointer" onClick={() => onNavigate('subjects')}>
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <h2 className="mt-4 text-xl font-bold">Estudar Matérias</h2>
          <p className="mt-2 text-gray-600">Acesse o conteúdo organizado por disciplinas</p>
        </div>
      </div>

      <div className="card hover:shadow-xl cursor-pointer" onClick={() => onNavigate('chat')}>
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 className="mt-4 text-xl font-bold">Perguntas e Respostas</h2>
          <p className="mt-2 text-gray-600">Chat para tirar dúvidas e ajudar outros alunos</p>
        </div>
      </div>

      <div className="card hover:shadow-xl cursor-pointer" onClick={() => onNavigate('performance')}>
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          <h2 className="mt-4 text-xl font-bold">Ver Desempenho</h2>
          <p className="mt-2 text-gray-600">Acompanhe seu progresso por disciplina</p>
        </div>
      </div>
    </div>
  );
}