import React, { useRef, useState } from 'react';
import { Heart, Star,  MessageCircle, Sparkles, Gift, Music } from 'lucide-react';

interface LoveMessage {
  title: string;
  message: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TimelineItem {
  date: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Momento {
  title: string;
  image: string;
}

const momentos: Momento[] = [
  { title: "", image: "mirante.jpg" },
  { title: "", image: "Shopping.jpg" },
  { title: "", image: "gracinha.jpg" },
];


function App() {
  const [activeMessage, setActiveMessage] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const loveMessages: LoveMessage[] = [
    {
      title: "Meu Amor Eterno",
      message: "Os dias ao seu lado é um presente. Você é a razão do meu sorriso e a luz que ilumina meus dias.",
      icon: Heart
    },
    {
      title: "Minha Inspiração",
      message: "Você me inspira a ser uma pessoa melhor a cada dia. Sua força e beleza me encantam profundamente.",
      icon: Star
    },
    {
      title: "Nosso Futuro",
      message: "Sonho com a nossa casinha no campo.",
      icon: Sparkles
    }
  ];

  const timeline: TimelineItem[] = [
    { date: "Nosso Primeiro Encontro", description: "O dia em que tudo começou", icon: Heart },
    { date: "Primeiro Beijo", description: "Quando soube que você era especial", icon: Star },
    { date: "Primeiro 'Eu te Amo'", description: "As palavras que mudaram tudo", icon: MessageCircle },
    { date: "Hoje e Sempre", description: "Celebrando nosso amor único", icon: Gift }
  ];

 const tocarMusica = () => {
  if (audioRef.current) {
    audioRef.current.volume = 0.4; // volume entre 0.0 (mudo) e 1.0 (máximo)
    audioRef.current.play();
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 via-rose-200/20 to-red-200/20"></div>
        
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Heart className="w-4 h-4 text-pink-300/40 fill-current" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block p-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Heart className="w-8 h-8 text-rose-500 fill-current animate-pulse" />
          </div>
          
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6 leading-tight pb-[12px]">
            Para Minha Complicadinha
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Neste Dia dos Namorados, quero que você saiba que você é a pessoa mais especial da minha vida. 
            Este site é uma pequena homenagem ao nosso amor único e especial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={tocarMusica}
              className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Music className="w-5 h-5 group-hover:animate-pulse" />
                Toque Especial para Você
              </span>
            </button>
          </div>
        </div>
      </section>
      <audio ref={audioRef} src="felina.mp3" />

      {/* Nossa História Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossa História</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada momento ao seu lado é especial. Aqui estão alguns dos nossos momentos mais preciosos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-pink-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.date}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Momentos */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Momentos Especiais</h2>
            <p className="text-lg text-gray-600">Memórias que guardaremos para sempre</p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {momentos.map((momento, index) => (
    <div
      key={index}
      className="group relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
      style={{
        backgroundImage: `url(/imagens/${momento.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-medium">{momento.title}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Mensagens de Amor */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mensagens do Coração</h2>
            <p className="text-lg text-gray-600">Palavras que vêm diretamente do meu coração para o seu</p>
          </div>

          <div className="space-y-6">
            {loveMessages.map((msg, index) => (
              <div
                key={index}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 cursor-pointer border-2 ${
                  activeMessage === index 
                    ? 'border-rose-300 bg-white/90 shadow-xl scale-105' 
                    : 'border-transparent hover:border-pink-200 hover:bg-white/80'
                }`}
                onClick={() => setActiveMessage(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <msg.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{msg.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Romântico */}
      <footer className="py-12 px-4 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full">
              <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
              <span className="text-gray-700 font-medium">Feito pro amor da minha vida</span>
              <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Você é o Amor da Minha Vida
          </h3>
          
          <p className="text12-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Que este Dia dos Namorados seja apenas o início de muitos outros dias especiais que 
            vamos compartilhar juntos. Te amo hoje, amanhã e para sempre.
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            {[Heart, Star, Sparkles].map((Icon, index) => (
              <Icon
                key={index}
                className="w-6 h-6 text-rose-400 hover:text-rose-600 cursor-pointer transition-colors duration-300 hover:scale-110 transform"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;