import { useEffect } from 'react'

const Scheduling = () => {
  useEffect(() => {
    // Carrega o script do Calendly dinamicamente
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Remove o script quando o componente for desmontado
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="agendamento" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agende sua Consulta</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o melhor dia e horário para sua consulta. É rápido e fácil!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Widget do Calendly */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/graal/agendamento-de-consulta" 
            style={{ minWidth: '100%', height: '800px' }}
          ></div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Prefere agendar por telefone? Ligue para <span className="font-medium">(98) 98407-4070</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Scheduling
