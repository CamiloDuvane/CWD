function SubjectList({ onNavigate }) {
  const [answeredQuizzes, setAnsweredQuizzes] = React.useState([]);
  const [subjects] = React.useState([
    { 
      id: 1, 
      name: 'Matemática', 
      icon: '📐',
      topics: [
        {
          title: 'Álgebra',
          subtitle: 'Estudo de equações e funções matemáticas',
          content: 'A álgebra é um ramo fundamental da matemática que lida com símbolos e as regras para manipulá-los. Inclui o estudo de equações, funções, expressões matemáticas e suas propriedades. Conceitos principais: equações lineares e quadráticas, sistemas de equações, funções e gráficos.'
        },
        {
          title: 'Geometria',
          subtitle: 'Formas, áreas e volumes',
          content: 'A geometria estuda as propriedades das formas no espaço. Inclui o cálculo de áreas, volumes, ângulos e a compreensão das relações entre diferentes formas geométricas. Tópicos principais: geometria plana, espacial, analítica e trigonometria.'
        },
        {
          title: 'Trigonometria',
          subtitle: 'Relações entre ângulos e lados',
          content: 'A trigonometria é o estudo das relações entre os lados e ângulos de triângulos. Fundamental para engenharia, física e outras ciências aplicadas. Inclui seno, cosseno, tangente e suas aplicações.'
        },
        {
          title: 'Estatística',
          subtitle: 'Análise e interpretação de dados',
          content: 'A estatística é a ciência da coleta, análise e interpretação de dados. Inclui conceitos como média, mediana, moda, desvio padrão e probabilidade. Essencial para pesquisa e tomada de decisões baseada em dados.'
        },
        {
          title: 'Probabilidade',
          subtitle: 'Cálculo de chances e eventos',
          content: 'A probabilidade estuda a chance de eventos ocorrerem. Fundamental para estatística, teoria dos jogos e análise de risco. Inclui conceitos como eventos independentes, probabilidade condicional e distribuições.'
        }
      ],
      quizzes: [
        {
          question: "Qual é a solução da equação 2x + 5 = 13?",
          options: ["x = 4", "x = 6", "x = 8", "x = 3"],
          correct_answer: 0
        },
        {
          question: "Qual é a área de um quadrado com lado 5?",
          options: ["20", "25", "15", "30"],
          correct_answer: 1
        },
        {
          question: "Qual é o valor de π (pi) arredondado para duas casas decimais?",
          options: ["3.14", "3.16", "3.12", "3.18"],
          correct_answer: 0
        }
      ]
    },
    { 
      id: 2, 
      name: 'Português', 
      icon: '📚',
      topics: [
        {
          title: 'Gramática',
          subtitle: 'Regras e estrutura da língua',
          content: 'A gramática é o estudo das regras e estruturas da língua portuguesa. Inclui conceitos como conjugação de verbos, concordância de substantivos e adjetivos, e estrutura de frases.'
        },
        {
          title: 'Literatura',
          subtitle: 'Estudo de obras literárias',
          content: 'A literatura é o estudo de obras literárias, incluindo poesia, prosa, teatro e outros gêneros. Inclui análise de temas, personagens, estilo e estrutura.'
        },
        {
          title: 'Redação',
          subtitle: 'Técnicas de escrita e composição',
          content: 'A redação é a técnica de escrita e composição de textos. Inclui conceitos como estrutura de parágrafos, uso de conectivos, e coerência textual.'
        },
        {
          title: 'Interpretação de Texto',
          subtitle: 'Análise e compreensão',
          content: 'A interpretação de texto é a análise e compreensão de textos, incluindo a identificação de temas, personagens, e estrutura.'
        },
        {
          title: 'Linguística',
          subtitle: 'Estudo científico da linguagem',
          content: 'A linguística é o estudo científico da linguagem, incluindo conceitos como fonologia, morfologia, sintaxe e semântica.'
        }
      ],
      quizzes: [
        {
          question: "O que é uma oração subordinada?",
          options: [
            "Uma oração que depende sintaticamente de outra",
            "Uma oração independente",
            "Um conjunto de palavras sem sentido",
            "Uma frase sem verbo"
          ],
          correct_answer: 0
        },
        {
          question: "Qual é a função do sujeito em uma frase?",
          options: [
            "Realizar a ação",
            "Sofrer a ação",
            "Modificar o verbo",
            "Complementar o objeto"
          ],
          correct_answer: 0
        }
      ]
    },
    {
      id: 3,
      name: 'Biologia',
      icon: '🧬',
      topics: [
        {
          title: 'Genética',
          subtitle: 'Estudo da hereditariedade',
          content: 'A genética é o ramo da biologia que estuda como as características são transmitidas de uma geração para outra. Inclui o estudo do DNA, genes, cromossomos e padrões de herança.'
        },
        {
          title: 'Evolução',
          subtitle: 'Teoria da evolução das espécies',
          content: 'A teoria da evolução explica como as espécies mudam ao longo do tempo através da seleção natural e outros mecanismos.'
        }
      ],
      quizzes: [
        {
          question: "Qual é a molécula responsável pelo armazenamento da informação genética?",
          options: ["DNA", "RNA", "Proteína", "Carboidrato"],
          correct_answer: 0
        },
        {
          question: "Quem propôs a teoria da evolução por seleção natural?",
          options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"],
          correct_answer: 0
        }
      ]
    },
    {
      id: 4,
      name: 'Química',
      icon: '⚗️',
      topics: [
        {
          title: 'Química Orgânica',
          subtitle: 'Estudo dos compostos de carbono',
          content: 'A química orgânica é o estudo dos compostos que contêm carbono, incluindo hidrocarbonetos, álcoois, ácidos e outros grupos funcionais.'
        },
        {
          title: 'Química Inorgânica',
          subtitle: 'Compostos sem carbono',
          content: 'Estuda compostos que geralmente não contêm carbono, incluindo metais, ácidos, bases e sais.'
        }
      ],
      quizzes: [
        {
          question: "Qual é o número atômico do carbono?",
          options: ["4", "6", "8", "12"],
          correct_answer: 1
        },
        {
          question: "O que é um mol?",
          options: [
            "6,022 x 10²³ unidades",
            "1 grama de hidrogênio",
            "1 litro de água",
            "1 kg de carbono"
          ],
          correct_answer: 0
        }
      ]
    },
    {
      id: 5,
      name: 'Física',
      icon: '⚡',
      topics: [
        {
          title: 'Mecânica',
          subtitle: 'Estudo do movimento',
          content: 'A mecânica estuda o movimento dos corpos e as forças que atuam sobre eles, incluindo cinemática, dinâmica e estática.'
        },
        {
          title: 'Termodinâmica',
          subtitle: 'Calor e energia',
          content: 'Estuda as relações entre calor, energia e trabalho em sistemas físicos.'
        }
      ],
      quizzes: [
        {
          question: "Qual é a unidade de força no SI?",
          options: ["Newton", "Joule", "Watt", "Pascal"],
          correct_answer: 0
        },
        {
          question: "O que é velocidade?",
          options: [
            "Distância/Tempo",
            "Força/Massa",
            "Massa/Volume",
            "Energia/Tempo"
          ],
          correct_answer: 0
        }
      ]
    },
    {
      id: 6,
      name: 'Arte',
      icon: '🎨',
      topics: [
        {
          title: 'História da Arte',
          subtitle: 'Evolução artística',
          content: 'Estudo da evolução das expressões artísticas ao longo do tempo, incluindo diferentes períodos e movimentos artísticos.'
        },
        {
          title: 'Técnicas Artísticas',
          subtitle: 'Métodos de criação',
          content: 'Exploração de diferentes técnicas de criação artística, incluindo pintura, escultura, desenho e arte digital.'
        }
      ],
      quizzes: [
        {
          question: "Quem pintou a Mona Lisa?",
          options: [
            "Leonardo da Vinci",
            "Michelangelo",
            "Rafael",
            "Van Gogh"
          ],
          correct_answer: 0
        },
        {
          question: "Qual movimento artístico é conhecido por formas geométricas e abstratas?",
          options: ["Cubismo", "Impressionismo", "Realismo", "Barroco"],
          correct_answer: 0
        }
      ]
    },
    { 
      id: 7, 
      name: 'História', 
      icon: '🏛️',
      topics: [
        {
          title: 'História Antiga',
          subtitle: 'Primeiras civilizações',
          content: 'A história antiga é o estudo das primeiras civilizações, incluindo a Mesopotâmia, o Egito, a Grécia e Roma.'
        },
        {
          title: 'História Medieval',
          subtitle: 'Idade Média',
          content: 'A história medieval é o estudo da Idade Média, incluindo a formação de reinos e impérios, a Igreja Católica e a sociedade feudal.'
        },
        {
          title: 'História Moderna',
          subtitle: 'Renascimento à Revolução Industrial',
          content: 'A história moderna é o estudo do período que vai do Renascimento à Revolução Industrial, incluindo a formação de Estados nacionais, a expansão colonial e a Revolução Francesa.'
        },
        {
          title: 'História Contemporânea',
          subtitle: 'Século XIX até hoje',
          content: 'A história contemporânea é o estudo do período que vai do século XIX até hoje, incluindo a formação de blocos políticos, a Guerra Fria e a globalização.'
        },
        {
          title: 'História do Brasil',
          subtitle: 'Da colonização à atualidade',
          content: 'A história do Brasil é o estudo da formação e evolução do país, desde a colonização até a atualidade.'
        }
      ],
      quizzes: [
        {
          question: "Qual é o nome do imperador romano que construiu o Coliseu?",
          options: ["Nero", "Vespasiano", "Tito", "Domiciano"],
          correct_answer: 1
        },
        {
          question: "Quem é o autor da obra 'O Principe'?",
          options: ["Maquiavel", "Montesquieu", "Rousseau", "Voltaire"],
          correct_answer: 0
        }
      ]
    },
    { 
      id: 8, 
      name: 'Geografia', 
      icon: '🌎',
      topics: [
        {
          title: 'Geografia Física',
          subtitle: 'Relevo, clima e vegetação',
          content: 'A geografia física é o estudo do relevo, clima e vegetação de uma região.'
        },
        {
          title: 'Geografia Humana',
          subtitle: 'População e sociedade',
          content: 'A geografia humana é o estudo da população e sociedade de uma região, incluindo a distribuição de pessoas, a estrutura econômica e a cultura.'
        },
        {
          title: 'Cartografia',
          subtitle: 'Mapas e localização',
          content: 'A cartografia é o estudo de mapas e localização, incluindo a representação de lugares e a navegação.'
        },
        {
          title: 'Geopolítica',
          subtitle: 'Relações entre países',
          content: 'A geopolítica é o estudo das relações entre países, incluindo a política, a economia e a cultura.'
        },
        {
          title: 'Meio Ambiente',
          subtitle: 'Questões ambientais',
          content: 'O meio ambiente é o estudo das questões ambientais, incluindo a poluição, o aquecimento global e a conservação de recursos naturais.'
        }
      ],
      quizzes: [
        {
          question: "Qual é o maior rio do mundo?",
          options: ["Amazonas", "Nilo", "Mississippi", "Yangtzé"],
          correct_answer: 1
        },
        {
          question: "Qual é o nome do maior deserto do mundo?",
          options: ["Sahara", "Gobi", "Mojave", "Atacama"],
          correct_answer: 0
        }
      ]
    },
    { 
      id: 9, 
      name: 'Ciências', 
      icon: '🔬',
      topics: [
        {
          title: 'Biologia',
          subtitle: 'Estudo dos seres vivos',
          content: 'A biologia é o estudo dos seres vivos, incluindo a estrutura, a função e a evolução de organismos.'
        },
        {
          title: 'Química',
          subtitle: 'Composição da matéria',
          content: 'A química é o estudo da composição da matéria, incluindo a estrutura de átomos e moléculas, e as reações químicas.'
        },
        {
          title: 'Física',
          subtitle: 'Leis naturais e energia',
          content: 'A física é o estudo das leis naturais e da energia, incluindo a mecânica, a termodinâmica e a eletromagnetismo.'
        },
        {
          title: 'Astronomia',
          subtitle: 'Estudo do universo',
          content: 'A astronomia é o estudo do universo, incluindo a formação e evolução de estrelas, galáxias e outros objetos celestes.'
        },
        {
          title: 'Ecologia',
          subtitle: 'Relações entre seres vivos',
          content: 'A ecologia é o estudo das relações entre seres vivos e seu ambiente, incluindo a cadeia alimentar, a competição e a cooperação.'
        }
      ],
      quizzes: [
        {
          question: "Qual é o processo pelo qual as plantas produzem alimentos?",
          options: ["Respiração", "Fotossíntese", "Decomposição", "Fermentação"],
          correct_answer: 1
        },
        {
          question: "Qual é o nome do maior planeta do nosso sistema solar?",
          options: ["Júpiter", "Saturno", "Urano", "Netuno"],
          correct_answer: 0
        }
      ]
    },
    { 
      id: 10, 
      name: 'Inglês', 
      icon: '🗣️',
      topics: [
        {
          title: 'Gramática',
          subtitle: 'Estrutura da língua inglesa',
          content: 'A gramática é o estudo da estrutura da língua inglesa, incluindo a conjugação de verbos, a concordância de substantivos e adjetivos, e a estrutura de frases.'
        },
        {
          title: 'Vocabulário',
          subtitle: 'Palavras e expressões',
          content: 'O vocabulário é o estudo de palavras e expressões em inglês, incluindo a pronúncia, a definição e o uso correto.'
        },
        {
          title: 'Conversação',
          subtitle: 'Prática oral',
          content: 'A conversação é a prática oral da língua inglesa, incluindo a comunicação eficaz e a resolução de problemas.'
        },
        {
          title: 'Compreensão',
          subtitle: 'Listening e Reading',
          content: 'A compreensão é o estudo da listening e reading em inglês, incluindo a identificação de temas, a compreensão de textos e a resolução de exercícios.'
        },
        {
          title: 'Escrita',
          subtitle: 'Writing skills',
          content: 'A escrita é o estudo da escrita em inglês, incluindo a estrutura de parágrafos, o uso de conectivos e a coerência textual.'
        }
      ],
      quizzes: [
        {
          question: "Qual é o significado da palavra 'hello'?",
          options: ["Olá", "Tchau", "Obrigado", "Desculpe"],
          correct_answer: 0
        },
        {
          question: "Quem é o autor da obra 'Romeu e Julieta'?",
          options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "J.K. Rowling"],
          correct_answer: 0
        }
      ]
    },
  ]);

  const [selectedSubject, setSelectedSubject] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [viewMode, setViewMode] = React.useState(null); 
  const [currentQuiz, setCurrentQuiz] = React.useState(null);
  const [userAnswer, setUserAnswer] = React.useState(null);

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStudyView = () => (
    <div className="space-y-6">
      {selectedSubject?.topics.map((topic, index) => (
        <div key={index} className="card">
          <h3 className="text-xl font-bold">{topic.title}</h3>
          <h4 className="text-lg text-gray-600 mt-2">{topic.subtitle}</h4>
          <p className="mt-4 text-gray-800 text-justify">{topic.content}</p>
        </div>
      ))}
    </div>
  );

  const renderQuizView = () => {
    const handleAnswer = async () => {
      if (!userAnswer) return;

      const isCorrect = userAnswer === currentQuiz.correct_answer;
      
      const answeredQuiz = {
        ...currentQuiz,
        userAnswer,
        answered_at: new Date().toISOString(),
        isCorrect
      };
      
      setAnsweredQuizzes(prev => [...prev, answeredQuiz]);

      await room.collection('quiz_answer').create({
        subject: selectedSubject.name.toLowerCase(),
        question: currentQuiz.question,
        answer: currentQuiz.options[userAnswer],
        correct: isCorrect,
        answered_at: new Date().toISOString()
      });

      const currentIndex = selectedSubject.quizzes.indexOf(currentQuiz);
      if (currentIndex < selectedSubject.quizzes.length - 1) {
        setCurrentQuiz(selectedSubject.quizzes[currentIndex + 1]);
      } else {
        setCurrentQuiz(null);
      }
      setUserAnswer(null);
    };

    return (
      <div className="space-y-6">
        {currentQuiz ? (
          <div className="card">
            <h3 className="text-xl font-bold mb-4">{currentQuiz.question}</h3>
            <div className="space-y-3">
              {currentQuiz.options.map((option, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg cursor-pointer border-2 transition-colors duration-200
                    ${userAnswer === index 
                      ? 'border-indigo-600 bg-indigo-50' 
                      : 'border-gray-200 hover:border-indigo-300'}`}
                  onClick={() => setUserAnswer(index)}
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                className="btn btn-primary"
                onClick={handleAnswer}
                disabled={userAnswer === null}
              >
                Enviar Resposta
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4">
              {selectedSubject?.quizzes.map((quiz, index) => (
                <div 
                  key={index}
                  className="card hover:shadow-xl cursor-pointer"
                  onClick={() => setCurrentQuiz(quiz)}
                >
                  <h3 className="text-lg font-bold">{quiz.question}</h3>
                </div>
              ))}
            </div>
            
            {answeredQuizzes.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Perguntas Respondidas</h3>
                <div className="border-t border-gray-200 pt-4">
                  {answeredQuizzes.map((quiz, index) => (
                    <div key={index} className="card mb-4">
                      <h4 className="font-bold">{quiz.question}</h4>
                      <p className="mt-2">Sua resposta: {quiz.options[quiz.userAnswer]}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Respondida em: {new Date(quiz.answered_at).toLocaleTimeString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      {!selectedSubject && (
        <>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Pesquisar matérias..."
              className="input w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredSubjects.map(subject => (
              <div
                key={subject.id}
                className="card hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedSubject(subject)}
              >
                <div className="text-center">
                  <span className="text-4xl">{subject.icon}</span>
                  <h3 className="mt-4 text-xl font-bold">{subject.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedSubject && !viewMode && (
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              {selectedSubject.icon} {selectedSubject.name}
            </h2>
            <button
              onClick={() => setSelectedSubject(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="flex space-x-4">
            <button 
              className="btn btn-primary flex-1"
              onClick={() => setViewMode('study')}
            >
              Acessar Material de Estudo
            </button>
            <button 
              className="btn btn-secondary flex-1"
              onClick={() => setViewMode('quiz')}
            >
              Ver Perguntas e Respostas
            </button>
          </div>
        </div>
      )}

      {selectedSubject && viewMode && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {selectedSubject.icon} {selectedSubject.name} - 
              {viewMode === 'study' ? ' Material de Estudo' : ' Perguntas e Respostas'}
            </h2>
            <button
              onClick={() => setViewMode(null)}
              className="btn btn-secondary"
            >
              Voltar
            </button>
          </div>
          {viewMode === 'study' ? renderStudyView() : renderQuizView()}
        </div>
      )}
    </div>
  );
}