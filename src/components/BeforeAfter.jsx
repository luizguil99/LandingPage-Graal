import { useState } from 'react'
import { Button } from '../components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BeforeAfter = () => {
  const [activeCase, setActiveCase] = useState(0)
  
  const cases = [
    {
      id: 1,
      title: "Facetas para fechamento de diastema",
      description: "Correção de mordida cruzada e alinhamento completo em 18 meses.",
      before: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/d4iuf77mbm9_1746060605173.jpg",
      after: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/4x2og5vabiv_1746060459089.jpg",
      patient: "Mariana, 28 anos"
    },
    {
      id: 2,
      title: "Prótese",
      description: "Transformação estética com lentes de contato dental em apenas 2 sessões.",
      before: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/rjdh8x9188i_1746061601630.jpeg",
      after: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/b7iwxzajovj_1746061088917.jpg",
      patient: "Maria de Jesus, 35 anos"
    },
    {
      id: 3,
      title: "Implantes Dentários",
      description: "Reabilitação completa com implantes após perda de dentes anteriores.",
      before: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/gms1uzp61d_1746062226758.jpeg",
      after: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/2wcbzx8efva_1746062307063.jpeg",
      patient: "Carla, 42 anos"
    },
    {
      id: 4,
      title: "Prótese",
      description: "Clareamento profissional com resultados visíveis em apenas 3 sessões.",
      before: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/79hpm6rkhx6_1746062917465.jpeg",
      after: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/bbs7ovhwrx_1746062973943.jpeg",
      patient: "João Paulo, 32 anos"
    }
  ]

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length)
  }

  return (
    <section id="antes-depois" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformações Reais</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja os resultados impressionantes que nossos tratamentos proporcionam aos nossos pacientes.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              {cases.map((caseItem, index) => (
                <div 
                  key={caseItem.id}
                  className={`transition-opacity duration-300 ${
                    index === activeCase ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="p-6 md:p-8 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{caseItem.title}</h3>
                        <p className="text-sm text-gray-500">{caseItem.patient}</p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={prevCase}
                          className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={nextCase}
                          className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 p-6 md:p-8">
                    <div>
                      <div className="relative">
                        <img 
                          src={caseItem.before} 
                          alt={`Antes - ${caseItem.title}`}
                          className="w-full h-48 md:h-64 object-cover rounded-lg"
                        />
                        <div className="absolute top-3 left-3 bg-gray-900/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Antes
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <img 
                          src={caseItem.after} 
                          alt={`Depois - ${caseItem.title}`}
                          className="w-full h-48 md:h-64 object-cover rounded-lg"
                        />
                        <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Depois
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 pt-2 md:pt-4">
                    <p className="text-gray-700 mb-6">{caseItem.description}</p>
                    <Button>Agende sua Transformação</Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 border-t">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {cases.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveCase(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeCase 
                          ? 'w-8 bg-primary' 
                          : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ver caso ${index + 1}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {activeCase + 1} de {cases.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
