<html><head><base href="https://morningmotivation.app/" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bom Dia com Frases Bonitas Infinitas</title>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<style>
    body {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
        height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .container {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 80%;
    }
    #userName {
        font-family: 'Dancing Script', cursive;
        font-size: 2.5rem;
        color: #3498db;
        margin-bottom: 1rem;
    }
    #message {
        font-size: 1.5rem;
        color: #2c3e50;
        margin-bottom: 1rem;
        min-height: 3em;
    }
    #time {
        font-size: 1.2rem;
        color: #7f8c8d;
        margin-bottom: 1rem;
    }
    .button-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }
    button, input[type="submit"] {
        background-color: #3498db;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
    }
    button:hover, input[type="submit"]:hover {
        background-color: #2980b9;
    }
    input[type="text"] {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #bdc3c7;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
    #nameForm {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
</head>
<body>
    <div class="container" id="nameContainer">
        <form id="nameForm">
            <input type="text" id="nameInput" placeholder="Digite seu nome" required>
            <input type="submit" value="Começar">
        </form>
    </div>

    <div class="container" id="messageContainer" style="display: none;">
        <p id="userName"></p>
        <p id="message"></p>
        <p id="time"></p>
        <div class="button-container">
            <button id="prevButton" onclick="showPreviousMessage()">Anterior</button>
            <button id="nextButton" onclick="showNextMessage()">Próximo</button>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    <script>
    let userName = "";
    let messageHistory = [];
    let currentMessageIndex = -1;

    const messages = [
        "Cada novo dia é uma página em branco. Escreva uma boa história hoje!",
        "A vida é bela, aproveite cada momento como se fosse único.",
        "Sorria! Seu sorriso pode iluminar o dia de alguém.",
        "Acredite em si mesmo e tudo será possível.",
        "A gratidão transforma o que temos em suficiente.",
        "Seja a mudança que você deseja ver no mundo.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
        "O otimismo é a fé que leva à realização. Nada pode ser feito sem esperança e confiança.",
        "Cada dia é uma nova oportunidade para ser melhor que ontem."
    ];

    document.getElementById('nameForm').addEventListener('submit', function(e) {
        e.preventDefault();
        userName = document.getElementById('nameInput').value;
        document.getElementById('nameContainer').style.display = 'none';
        document.getElementById('messageContainer').style.display = 'block';
        document.getElementById('userName').textContent = `Olá, ${userName}!`;
        showNextMessage();
        updateTime();
        setInterval(updateTime, 1000);
    });

    function updateTime() {
        const now = moment();
        document.getElementById('time').textContent = now.format('HH:mm:ss');
        
        if (now.hour() === 9 && now.minute() === 0 && now.second() === 0) {
            showNextMessage();
        }
    }

    function generateMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    function showMessage(index) {
        const messageElement = document.getElementById('message');
        if (index >= messageHistory.length) {
            const newMessage = generateMessage();
            messageHistory.push(newMessage);
        }
        messageElement.textContent = messageHistory[index];
    }

    function showNextMessage() {
        currentMessageIndex++;
        showMessage(currentMessageIndex);
    }

    function showPreviousMessage() {
        if (currentMessageIndex > 0) {
            currentMessageIndex--;
            showMessage(currentMessageIndex);
        }
    }
    </script>
</body></html>
