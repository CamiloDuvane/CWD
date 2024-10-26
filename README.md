<html><head><base href="https://camiloduvane.github.io/CWD/">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Saber e Arte</title>
<style>
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(45deg, #009933, #ffcc00, #cc0000);
    color: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .game-container {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    max-width: 800px;
    width: 90%;
    display: none; /* Hide the game container initially */
    position: relative; /* Added for positioning the exit button */
  }
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .question {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  .options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .option {
    background-color: #009933;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    padding: 10px;
    transition: background-color 0.3s;
  }
  .option:hover {
    background-color: #00cc44;
  }
  .prize {
    font-size: 1.5em;
    margin-top: 20px;
  }
  .progress {
    margin-top: 20px;
    font-size: 1.2em;
  }
  .cwd {
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: #ffcc00;
  }
  .maputo-skyline {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    z-index: -1;
  }
  .timer {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2em;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
  }
  .correct {
    background-color: #e6f3ff !important;
  }
  .incorrect {
    background-color: #cc0000 !important;
  }
  .modal {
    display: flex; /* Change to flex */
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: #fefefe;
    padding: 30px;
    border: 2px solid #009933;
    width: 90%;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .modal-content h2 {
    color: #009933;
    margin-bottom: 20px;
  }
  .modal-content input,
  .modal-content select {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #009933;
    border-radius: 5px;
  }
  .modal-content button {
    background-color: #009933;
    color: #fff;
    border: none;
    padding: 12px;
    margin-top: 20px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  .modal-content button:hover {
    background-color: #00cc44;
  }
</style>
</head>
<body>
  <div id="profileModal" class="modal">
    <div class="modal-content">
      <h2>Perfil</h2>
      <input type="text" id="playerName" placeholder="Nome" required>
      <input type="number" id="playerAge" placeholder="Idade" required>
      <select id="playerGender" required>
        <option value="">Selecione o sexo</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Outro">Outro</option>
      </select>
      <input type="tel" id="playerContact" placeholder="Contacto" required>
      <button onclick="saveProfileAndStartGame()">Iniciar</button>
    </div>
  </div>

  <div class="game-container">
    <div class="timer" id="timer">30</div>
    <h1>Saber e Arte</h1>
    <div class="question" id="question">Carregando pergunta...</div>
    <div class="options" id="options"></div>
    <div class="prize" id="prize">Pontos: 0</div>
    <div class="cwd" id="cwd">@CWD2024</div>
  </div>

  <svg class="maputo-skyline" viewBox="0 0 1000 200" preserveAspectRatio="none">
    <path d="M0,200 L0,100 Q250,50 500,100 T1000,100 L1000,200 Z" fill="#000" />
    <rect x="100" y="70" width="40" height="130" fill="#333" />
    <rect x="300" y="50" width="60" height="150" fill="#444" />
    <rect x="500" y="30" width="80" height="170" fill="#555" />
    <rect x="700" y="60" width="50" height="140" fill="#666" />
    <rect x="900" y="80" width="30" height="120" fill="#777" />
  </svg>

  <script>
    const questions = [
      {
        question: "Qual é a congregação conhecida pela sigla MEA??",
        options: ["Ministério Em Acção", "Missão de Ensino e Aprendizado", "Ministério Evangelho em Acção", "Movimento Esperança e Amor"],
        correct: 2
      },
      {
        question: "EM que ano foi fundada o Ministério Evangelho em Acção?",
        options: ["1999", "2000", "2001", "2002"],
        correct: 1
      },
      {
        question: "Onde fica a sede do Ministério Evangelho em Ação (MEA)?",
        options: ["Katembe", "Mathemele", "Mahotas", "Laulane"],
        correct: 3
      },
      {
        question: "Qual é o nome completo do pai que Deus escolheu para fundar o Ministério Evangelho em Ação (MEA)?",
        options: ["Luís Betuel Maposse", "Luís Maposse", "Luís José Maposse", "Luís Mahotas"],
        correct: 0
      },
      {
        question: "Quem foi o primeiro presidente de Moçambique independente?",
        options: ["Eduardo Mondlane", "Samora Machel", "Joaquim Chissano", "Armando Guebuza"],
        correct: 1
      },
      {
        question: "Em que ano Moçambique conquistou sua independência de Portugal?",
        options: ["1974", "1975", "1976", "1977"],
        correct: 1
      },
      {
        question: "Qual é o rio mais longo de Moçambique?",
        options: ["Rio Zambeze", "Rio Limpopo", "Rio Save", "Rio Rovuma"],
        correct: 0
      },
      {
        question: "Qual é a língua oficial de Moçambique?",
        options: ["Português", "Suaíli", "Inglês", "Changana"],
        correct: 0
      },
      {
        question: "Qual é o maior lago de Moçambique?",
        options: ["Lago Niassa", "Lago Cahora Bassa", "Lago Chilwa", "Lago Chiuta"],
        correct: 0
      },
      {
        question: "Qual é o principal porto de Moçambique?",
        options: ["Porto de Maputo", "Porto da Beira", "Porto de Nacala", "Porto de Pemba"],
        correct: 0
      },
      {
        question: "Qual é o ponto mais alto de Moçambique?",
        options: ["Monte Binga", "Monte Namuli", "Monte Chiperone", "Monte Mabu"],
        correct: 0
      },
      {
        question: "Qual é o principal produto de exportação de Moçambique?",
        options: ["Carvão", "Algodão", "Castanha de caju", "Camarão"],
        correct: 0
      },
      {
        question: "Que famoso explorador português deu o nome à Baía de Maputo?",
        options: ["Vasco da Gama", "Lourenço Marques", "Bartolomeu Dias", "Pedro Álvares Cabral"],
        correct: 1
      },
      {
        question: "Qual é o instrumento musical tradicional de Moçambique feito com uma cabaça?",
        options: ["Mbira", "Timbila", "Xitende", "Xigubo"],
        correct: 0
      },
      {
        question: "Qual é o animal nacional de Moçambique?",
        options: ["Elefante", "Leão", "Zebra", "Gnu"],
        correct: 1
      },
      {
        question: "Qual é o nome da dança tradicional moçambicana que utiliza pernas de pau?",
        options: ["Makwaela", "Xigubo", "Mapiko", "Tufo"],
        correct: 2
      },
      {
        question: "Qual é o nome do arquipélago famoso por suas praias paradisíacas no norte de Moçambique?",
        options: ["Arquipélago de Bazaruto", "Arquipélago das Quirimbas", "Ilhas Primeiras e Segundas", "Ilha de Moçambique"],
        correct: 1
      },
      {
        question: "Qual é o nome da batalha decisiva que marcou o fim da presença portuguesa em Moçambique?",
        options: ["Batalha de Mueda", "Batalha de Nametil", "Batalha de Chai", "Batalha de Gungunhana"],
        correct: 2
      },
      {
        question: "Qual é o esporte mais popular em Moçambique?",
        options: ["Futebol", "Basquete", "Críquete", "Atletismo"],
        correct: 0
      },
      {
        question: "Qual é o nome da ilha que foi a primeira capital de Moçambique?",
        options: ["Ilha de Inhaca", "Ilha de Moçambique", "Ilha do Ibo", "Ilha de Bazaruto"],
        correct: 1
      },
      {
        question: "Qual é o nome do famoso escritor moçambicano, autor de 'Terra Sonâmbula'?",
        options: ["Mia Couto", "Paulina Chiziane", "Ungulani Ba Ka Khosa", "José Craveirinha"],
        correct: 0
      },
      {
        question: "Qual é o nome da famosa pintora moçambicana conhecida por seus quadros coloridos?",
        options: ["Bertina Lopes", "Malangatana", "Reinata Sadimba", "Gemuce"],
        correct: 1
      },
      {
        question: "Qual é o nome do tratado que pôs fim à guerra civil em Moçambique em 1992?",
        options: ["Tratado de Lusaka", "Acordo de Nkomati", "Acordo Geral de Paz", "Tratado de Maputo"],
        correct: 2
      },
      {
        question: "Qual é o nome da antiga moeda de Moçambique, usada antes do Metical?",
        options: ["Escudo", "Real", "Cruzado", "Pataca"],
        correct: 0
      },
      {
        question: "Qual é o nome do famoso fotógrafo moçambicano conhecido por suas fotos em preto e branco?",
        options: ["Ricardo Rangel", "Kok Nam", "Naíta Ussene", "Sérgio Santimano"],
        correct: 0
      },
      {
        question: "Qual é o nome da árvore nacional de Moçambique?",
        options: ["Embondeiro", "Mafurreira", "Canhoeiro", "Umbila"],
        correct: 0
      },
      {
        question: "Qual é o nome do grupo étnico mais numeroso em Moçambique?",
        options: ["Makonde", "Changana", "Makua", "Sena"],
        correct: 2
      },
      {
        question: "Qual é o nome da praia mais famosa de Maputo?",
        options: ["Praia do Tofo", "Praia da Costa do Sol", "Praia do Bilene", "Praia de Ponta do Ouro"],
        correct: 1
      },
      {
        question: "Qual é o nome do famoso jogador de futebol moçambicano que jogou pelo Benfica?",
        options: ["Eusébio", "Mário Coluna", "Hilário", "Abel Xavier"],
        correct: 0
      },
      {
        question: "Qual é o nome da maior ilha de Moçambique?",
        options: ["Ilha de Moçambique", "Ilha do Ibo", "Ilha de Inhaca", "Ilha de Bazaruto"],
        correct: 2
      },
      {
        question: "Qual é o nome do famoso mercado de artesanato em Maputo?",
        options: ["Mercado Central", "Feira de Artesanato", "Mercado do Peixe", "Feima"],
        correct: 3
      },
      {
        question: "Qual é o nome da famosa escultura em Maputo que simboliza a luta pela independência?",
        options: ["Monumento da Independência", "Estátua de Samora Machel", "Monumento aos Heróis Moçambicanos", "Escultura da Liberdade"],
        correct: 2
      },
      {
        question: "Qual é o nome do estilo musical moçambicano que mistura ritmos tradicionais com influências modernas?",
        options: ["Marrabenta", "Pandza", "Xigubo", "Tufo"],
        correct: 0
      },
      {
        question: "Qual é o nome da primeira mulher primeira-ministra de Moçambique?",
        options: ["Graça Machel", "Luísa Diogo", "Verónica Macamo", "Alcinda Abreu"],
        correct: 1
      },
      {
        question: "Qual é o nome do famoso parque marinho de Moçambique, conhecido por suas baleias?",
        options: ["Parque Nacional das Quirimbas", "Reserva Marinha Parcial da Ponta do Ouro", "Parque Nacional do Arquipélago de Bazaruto", "Reserva Especial de Maputo"],
        correct: 1
      },
      {
        question: "Qual é o nome da antiga companhia que administrou grande parte de Moçambique durante o período colonial?",
        options: ["Companhia de Moçambique", "Companhia do Niassa", "Companhia da Zambézia", "Companhia do Índico"],
        correct: 0
      },
      {
        question: "Qual é o nome do famoso poeta moçambicano, considerado o 'pai da poesia moçambicana'?",
        options: ["José Craveirinha", "Noémia de Sousa", "Rui Knopfli", "Luís Bernardo Honwana"],
        correct: 0
      },
      {
        question: "Qual é o nome da famosa praia no sul de Moçambique, conhecida pelo mergulho com tubarões?",
        options: ["Praia do Tofo", "Praia da Barra", "Praia de Vilanculos", "Praia de Ponta do Ouro"],
        correct: 0
      },
      {
        question: "Qual é o nome do famoso resort em uma ilha privada no Arquipélago de Bazaruto?",
        options: ["Anantara Bazaruto", "Azura Benguerra", "&Beyond Benguerra Island", "Pestana Bazaruto Lodge"],
        correct: 2
      },
      {
        question: "Qual é o nome do famoso líder tradicional que resistiu à ocupação portuguesa no sul de Moçambique?",
        options: ["Gungunhana", "Maguiguana", "Ngungunyane", "Mawewe"],
        correct: 0
      },
      {
        question: "Qual é o nome da famosa fortaleza portuguesa em Maputo?",
        options: ["Fortaleza de Maputo", "Fortaleza de São Sebastião", "Fortaleza de Nossa Senhora da Conceição", "Fortaleza de Santo António"],
        correct: 2
      },
      {
        question: "Qual é o nome do famoso festival de cinema que ocorre anualmente em Maputo?",
        options: ["DocKanema", "Maputo International Film Festival", "KUGOMA", "Mozambique Film Festival"],
        correct: 0
      },
      {
        question: "Qual é o nome da famosa reserva de caça no sul de Moçambique?",
        options: ["Reserva Especial de Maputo", "Reserva do Niassa", "Reserva do Gilé", "Reserva de Marromeu"],
        correct: 0
      },
      {
        question: "Qual é o nome do famoso pintor moçambicano conhecido por suas obras surrealistas?",
        options: ["Malangatana", "Chichorro", "Naguib", "Victor Sousa"],
        correct: 0
      },
      {
        question: "Qual é o nome da famosa praia no norte de Moçambique, conhecida pelo kitesurf?",
        options: ["Praia do Wimbe", "Praia de Vilanculos", "Praia de Pemba", "Praia de Nacala"],
        correct: 0
      },
      {
        question: "Qual é o nome do famoso farol na Ilha de Moçambique?",
        options: ["Farol de São Sebastião", "Farol do Cabo Delgado", "Farol de Inhaca", "Farol de Macuti"],
        correct: 0
      },
      {
        question: "Qual é o nome da famosa estátua em Maputo que representa a luta contra o colonialismo?",
        options: ["Estátua da Independência", "Estátua de Samora Machel", "Monumento aos Heróis Moçambicanos", "Estátua da Liberdade"],
        correct: 1
      },
      {
        question: "Qual é o nome do famoso festival de música que ocorre anualmente em Maputo?",
        options: ["Azgo Festival", "Bushfire Festival", "Lake of Stars", "Strab Festival"],
        correct: 0
      },
      {
        question: "Qual é o nome da famosa ponte que liga Maputo à Catembe?",
        options: ["Ponte Maputo-Catembe", "Ponte da Unidade", "Ponte 25 de Setembro", "Ponte da Baía"],
        correct: 0
      },
      {
        question: "Qual é o nome do famoso arquiteto moçambicano conhecido por seus projetos sustentáveis?",
        options: ["José Forjaz", "Pancho Guedes", "João José Tinoco", "Miguel Guedes"],
        correct: 0
      }
    ];

    let currentQuestion = 0;
    let points = 0;
    let timer;
    let selectedAnswer = null;
    let playerProfile = {
      name: '',
      age: '',
      gender: '',
      contact: ''
    };

    function loadQuestion() {
      const q = questions[currentQuestion];
      document.getElementById('question').textContent = q.question;
      const optionsContainer = document.getElementById('options');
      optionsContainer.innerHTML = '';
      q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
      });
      startTimer();
    }

    function startTimer() {
      let timeLeft = 30;
      document.getElementById('timer').textContent = timeLeft;
      timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timer);
          checkAnswer();
        }
      }, 1000);
    }

    function selectAnswer(index) {
      if (selectedAnswer === null) {
        selectedAnswer = index;
        checkAnswer();
      }
    }

    function checkAnswer() {
      clearInterval(timer);
      const q = questions[currentQuestion];
      const options = document.querySelectorAll('.option');
      
      options[q.correct].classList.add('correct');
      options.forEach(option => option.disabled = true);
      
      if (selectedAnswer === null) {
        points = Math.max(0, points - 5);
      } else if (selectedAnswer !== q.correct) {
        options[selectedAnswer].classList.add('incorrect');
        points = Math.max(0, points - 5);
      } else if (selectedAnswer === q.correct) {
        points += 5;
      }
      
      document.getElementById('prize').textContent = `Pontos: ${points}`;
      
      setTimeout(() => {
        currentQuestion++;
        selectedAnswer = null;
        if (points > 0 && currentQuestion < questions.length) {
          loadQuestion();
        } else {
          endGame(points > 0);
        }
      }, 3000);
    }

    function endGame(hasPoints) {
      clearInterval(timer);
      const message = hasPoints ? 
        `Muito obrigado por jogar, ${playerProfile.name}! Você terminou o jogo com um saldo de ${points} pontos. Sua participação foi incrível!` :
        `Agradecemos sua participação, ${playerProfile.name}! Infelizmente, você ficou sem saldo de pontos. Tente novamente e mostre seu conhecimento sobre Moçambique!`;
      
      document.querySelector('.game-container').innerHTML = `
        <h1>Saber e Arte</h1>
        <div class="question">${message}</div>
        <button class="option" onclick="generateAndShareResult()" style="margin-bottom: 10px;">Baixar e Compartilhar Resultado</button>
        <button class="option" onclick="location.reload()">Jogar Novamente</button>
      `;
    }

    function generateAndShareResult() {
      const canvas = document.createElement('canvas');
      canvas.width = 600;
      canvas.height = 400;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#009933';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(Saber e Arte', canvas.width / 2, 50);
      ctx.font = '18px Arial';
      ctx.fillText(`Nome: ${playerProfile.name}`, canvas.width / 2, 100);
      ctx.fillText(`Idade: ${playerProfile.age}`, canvas.width / 2, 130);
      ctx.fillText(`Sexo: ${playerProfile.gender}`, canvas.width / 2, 160);
      ctx.fillText(`Contacto: ${playerProfile.contact}`, canvas.width / 2, 190);
      ctx.fillText(`Pontuação: ${points}`, canvas.width / 2, 220);

      const date = new Date();
      ctx.fillText(`Data: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`, canvas.width / 2, 250);
      ctx.fillText('@CWD2024', canvas.width / 2, 350);

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'CWD_Mocambique_Quiz_Result.png';
      link.click();

      const whatsappMessage = encodeURIComponent(`Confira meu resultado no Saber e Arte!\nPontuação: ${points}\n@CWD2024`);
      const whatsappUrl = `https://wa.me/258842479404?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');
    }

    function saveProfileAndStartGame() {
      const name = document.getElementById('playerName').value;
      const age = document.getElementById('playerAge').value;
      const gender = document.getElementById('playerGender').value;
      const contact = document.getElementById('playerContact').value;

      if (name && age && gender && contact) {
        playerProfile.name = name;
        playerProfile.age = age;
        playerProfile.gender = gender;
        playerProfile.contact = contact;

        localStorage.setItem('playerProfile', JSON.stringify(playerProfile));
        document.getElementById('profileModal').style.display = 'none';
        document.querySelector('.game-container').style.display = 'block';
        
        // Request full screen mode
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
          document.documentElement.msRequestFullscreen();
        }
        
        startGame();
      } else {
        alert('Por favor, preencha todos os campos do perfil.');
      }
    }

    function startGame() {
      currentQuestion = 0;
      points = 0;
      loadQuestion();
    }

    function checkProfile() {
      const savedProfile = localStorage.getItem('playerProfile');
      if (savedProfile) {
        playerProfile = JSON.parse(savedProfile);
        document.getElementById('playerName').value = playerProfile.name;
        document.getElementById('playerAge').value = playerProfile.age;
        document.getElementById('playerGender').value = playerProfile.gender;
        document.getElementById('playerContact').value = playerProfile.contact;
      }
      document.getElementById('profileModal').style.display = 'flex'; // Always show the profile modal when the page loads
    }

    window.onload = checkProfile;
  </script>
</body></html>
