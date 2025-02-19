function PerformanceReport({ username }) {
  const [selectedSubject, setSelectedSubject] = React.useState(null);
  
  const quizAnswers = React.useSyncExternalStore(
    room.collection('quiz_answer').subscribe,
    room.collection('quiz_answer').getList
  );

  const userAnswers = quizAnswers.filter(a => a.username === username);

  const subjects = [
    'matematica',
    'portugues', 
    'historia',
    'geografia',
    'ciencias',
    'ingles'
  ];

  const stats = subjects.map(subject => {
    const subjectAnswers = userAnswers.filter(a => a.subject === subject);
    const correctAnswers = subjectAnswers.filter(a => a.correct);
    
    return {
      subject,
      total: subjectAnswers.length,
      correct: correctAnswers.length,
      answers: subjectAnswers
    };
  });

  const getUserLevel = (stats) => {
    const totalCorrect = stats.reduce((sum, s) => sum + s.correct, 0);
    const totalQuestions = stats.reduce((sum, s) => sum + s.total, 0);
    
    if (totalQuestions === 0) return 'Iniciante';
    const percentage = (totalCorrect / totalQuestions) * 100;
    
    if (percentage >= 90) return 'Mestre';
    if (percentage >= 75) return 'Avançado';
    if (percentage >= 50) return 'Intermediário';
    return 'Iniciante';
  };

  const downloadReport = () => {
    const level = getUserLevel(stats);
    const date = new Date().toLocaleDateString('pt-BR');
    
    const reportContent = `
      <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 40px; 
              line-height: 1.6;
            }
            .header { 
              text-align: center; 
              margin-bottom: 40px; 
              padding: 20px;
              border-bottom: 2px solid #4f46e5;
            }
            .logo { 
              font-size: 32px; 
              font-weight: bold; 
              color: #4f46e5; 
              margin-bottom: 20px;
            }
            .title { 
              font-size: 28px; 
              margin-bottom: 10px; 
              color: #1f2937;
            }
            .subject { 
              margin: 20px 0; 
              padding: 15px;
              border-radius: 8px;
              background-color: #f9fafb;
            }
            .footer { 
              margin-top: 40px; 
              text-align: center; 
              color: #666;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
            }
            .stats { 
              border-collapse: collapse; 
              width: 100%; 
              margin: 20px 0; 
            }
            .stats td, .stats th { 
              border: 1px solid #e5e7eb; 
              padding: 12px; 
              text-align: left; 
            }
            .stats th { 
              background-color: #f3f4f6; 
              font-weight: bold;
            }
            .level { 
              font-size: 24px; 
              color: #4f46e5; 
              margin: 20px 0;
              padding: 10px;
              border: 2px solid #4f46e5;
              border-radius: 8px;
              display: inline-block;
            }
            .answer-list {
              margin: 20px 0;
            }
            .answer-item {
              padding: 10px;
              margin: 10px 0;
              border-radius: 6px;
            }
            .correct {
              background-color: #d1fae5;
              border: 1px solid #059669;
            }
            .incorrect {
              background-color: #fee2e2;
              border: 1px solid #dc2626;
            }
            .timestamp {
              color: #666;
              font-size: 0.9em;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">🎓 Sistema de Aprendizagem</div>
            <h1 class="title">Relatório de Desempenho</h1>
            <p>Aluno: ${username}</p>
            <p>Data: ${date}</p>
            <div class="level">Nível: ${level}</div>
          </div>

          <div class="performance-summary">
            <h2>Resumo de Desempenho</h2>
            <table class="stats">
              <tr>
                <th>Disciplina</th>
                <th>Total de Questões</th>
                <th>Respostas Corretas</th>
                <th>Aproveitamento</th>
              </tr>
              ${stats.map(s => `
                <tr>
                  <td>${s.subject}</td>
                  <td>${s.total}</td>
                  <td>${s.correct}</td>
                  <td>${s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0}%</td>
                </tr>
              `).join('')}
            </table>
          </div>

          <div class="detailed-answers">
            <h2>Histórico Detalhado por Disciplina</h2>
            ${stats.map(stat => `
              ${stat.answers.length > 0 ? `
                <div class="subject">
                  <h3>${stat.subject}</h3>
                  <div class="answer-list">
                    ${stat.answers
                      .sort((a, b) => new Date(b.answered_at) - new Date(a.answered_at))
                      .map(answer => `
                        <div class="answer-item ${answer.correct ? 'correct' : 'incorrect'}">
                          <p class="timestamp">Respondida em: ${new Date(answer.answered_at).toLocaleString('pt-BR')}</p>
                          <p><strong>Pergunta:</strong> ${answer.question}</p>
                          <p><strong>Sua Resposta:</strong> ${answer.answer}</p>
                          <p><strong>Status:</strong> ${answer.correct ? 'Correta' : 'Incorreta'}</p>
                        </div>
                      `).join('')}
                  </div>
                </div>
              ` : ''}
            `).join('')}
          </div>

          <div class="footer">
            <p>@CWD ${new Date().getFullYear()}</p>
            <p>Documento produzido por Camilo Duvane/Computador</p>
          </div>
        </body>
      </html>
    `;
    
    const blob = new Blob([reportContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio_${username}_${date}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const renderPerformanceHeader = () => (
    <div className="performance-header animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Relatório de Desempenho</h1>
        <p className="text-indigo-100">Aluno: {username}</p>
      </div>
      <button 
        onClick={downloadReport}
        className="download-button"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        <span>Baixar Relatório</span>
      </button>
    </div>
  );

  const renderSubjectCard = (stat, index) => (
    <div 
      key={stat.subject}
      className="subject-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => setSelectedSubject(stat.subject)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold capitalize">
          {stat.subject}
        </h3>
        <span className={`performance-badge ${
          stat.total > 0 && (stat.correct / stat.total) >= 0.7 
            ? 'badge-success' 
            : 'badge-error'
        }`}>
          {stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0}%
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="performance-stat bg-indigo-50">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <span>Total de questões: {stat.total}</span>
        </div>
        
        <div className="performance-stat bg-green-50">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span>Respostas corretas: {stat.correct}</span>
        </div>
      </div>
    </div>
  );

  const renderAnswerHistory = (answer, index) => (
    <div 
      key={index}
      className={`performance-card ${answer.correct ? 'correct' : 'incorrect'} animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">Questão {index + 1}</span>
          <span className={`performance-badge ${
            answer.correct ? 'badge-success' : 'badge-error'
          }`}>
            {answer.correct ? 'Correta' : 'Incorreta'}
          </span>
        </div>
        <span className="text-sm text-gray-500">
          {formatDateTime(answer.answered_at)}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="p-4 bg-white rounded-lg">
          <p className="font-medium mb-2">Pergunta:</p>
          <p>{answer.question}</p>
        </div>
        
        <div className="p-4 bg-white rounded-lg">
          <p className="font-medium mb-2">Sua Resposta:</p>
          <p>{answer.answer}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in">
      {!selectedSubject ? (
        <>
          {renderPerformanceHeader()}
          <div className="subject-grid mt-6">
            {stats.map((stat, index) => renderSubjectCard(stat, index))}
          </div>
        </>
      ) : (
        <div className="animate-fade-in">
          <div className="performance-header">
            <h2 className="text-2xl font-bold capitalize">
              {selectedSubject} - Histórico de Respostas
            </h2>
            <button 
              onClick={() => setSelectedSubject(null)}
              className="btn bg-white text-indigo-600 hover:bg-indigo-50"
            >
              Voltar
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {stats
              .find(s => s.subject === selectedSubject)
              ?.answers
              .sort((a, b) => new Date(b.answered_at) - new Date(a.answered_at))
              .map((answer, index) => renderAnswerHistory(answer, index))}
          </div>
        </div>
      )}
    </div>
  );
}