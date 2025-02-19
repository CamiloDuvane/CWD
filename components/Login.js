function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSignup, setIsSignup] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isSignup) {
        await auth.createUserWithEmailAndPassword(email, password);
      } else {
        await auth.signInWithEmailAndPassword(email, password);
      }
      onLogin();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-800">
      <div className="animate-fade-in bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">
            Sistema de Aprendizagem
          </h1>
          <p className="text-gray-600 mb-4">
            {isSignup ? 'Crie sua conta para começar' : 'Bem-vindo de volta!'}
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg text-sm text-indigo-800 mb-6">
            <p className="font-medium mb-2">Como funciona:</p>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>Acesse material de estudo organizado por disciplinas</li>
              <li>Pratique com questionários interativos</li>
              <li>Tire dúvidas no chat com outros estudantes</li>
              <li>Acompanhe seu progresso em tempo real</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <input
              type="password"
              required
              className="input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm animate-fade-in">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`btn btn-primary w-full animate-scale-in ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            {isLoading ? (
              <span className="loading-pulse">Processando...</span>
            ) : (
              isSignup ? 'Criar Conta' : 'Entrar'
            )}
          </button>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-800 text-sm"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup
                ? 'Já tem uma conta? Faça login'
                : 'Não tem uma conta? Cadastre-se'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}