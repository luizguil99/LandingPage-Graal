import { useState } from 'react'
import { Stethoscope, Scissors, Sparkles, Smile, Syringe, Microscope, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'

// Informações detalhadas para o modal
const specialtiesDetails = {
  "Ortodontia": {
    fullDescription: "A ortodontia é a especialidade odontológica que corrige a posição dos dentes e dos ossos maxilares posicionados de forma inadequada. Dentes tortos ou dentes que não se encaixam corretamente são difíceis de serem mantidos limpos, podendo ser perdidos precocemente, devido à deterioração e à doença periodontal. Além disso, causam um estresse adicional aos músculos de mastigação, podendo acarretar dores de cabeça, síndrome da ATM e dores na região do pescoço, dos ombros e das costas.",
    benefits: [
      "Melhora na estética do sorriso",
      "Correção de problemas de mordida",
      "Facilitação da higiene bucal",
      "Prevenção de desgaste dental anormal",
      "Melhora na função mastigatória"
    ],
    procedures: [
      "Aparelhos fixos tradicionais",
      "Aparelhos estéticos (cerâmicos ou safira)",
      "Alinhadores transparentes",
      "Aparelhos autoligados"
    ]
  },
  "Implantodontia": {
    fullDescription: "A implantodontia é a especialidade odontológica que trata da reposição de dentes perdidos através da colocação cirúrgica de implantes dentários. Os implantes são estruturas de titânio que substituem as raízes dos dentes e servem como base para a fixação de coroas, pontes ou próteses, devolvendo a função e a estética ao paciente.",
    benefits: [
      "Reposição permanente de dentes perdidos",
      "Preservação do osso maxilar",
      "Melhora na função mastigatória",
      "Resultado estético natural",
      "Maior conforto comparado a próteses removíveis"
    ],
    procedures: [
      "Implantes unitários",
      "Implantes múltiplos",
      "Carga imediata (implante e coroa no mesmo dia)",
      "Enxertos ósseos quando necessário",
      "Elevação de seio maxilar"
    ]
  },
  "Prótese": {
    fullDescription: "A prótese dentária é a especialidade que se dedica à reabilitação oral em pacientes que perderam ou tiveram seus dentes comprometidos. Através de diferentes tipos de próteses, é possível restaurar a função mastigatória, a fala e a estética, melhorando significativamente a qualidade de vida do paciente.",
    benefits: [
      "Restauração da função mastigatória",
      "Melhora na fala e pronúncia",
      "Suporte para os músculos faciais",
      "Prevenção da movimentação dos dentes remanescentes",
      "Melhora na autoestima e confiança"
    ],
    procedures: [
      "Próteses fixas (coroas e pontes)",
      "Próteses removíveis parciais ou totais",
      "Próteses sobre implantes",
      "Próteses protocolo (fixas sobre implantes)",
      "Facetas e lentes de contato dental"
    ]
  },
  "Clareamento": {
    fullDescription: "O clareamento dental é um procedimento estético que visa tornar os dentes mais claros através da aplicação de agentes clareadores. É um tratamento seguro e eficaz quando realizado por profissionais qualificados, proporcionando resultados visíveis e duradouros.",
    benefits: [
      "Remoção de manchas e amarelamento",
      "Rejuvenescimento do sorriso",
      "Procedimento não invasivo",
      "Resultados rápidos e visíveis",
      "Aumento da autoestima"
    ],
    procedures: [
      "Clareamento em consultório (sessão única)",
      "Clareamento caseiro supervisionado",
      "Clareamento combinado (consultório + caseiro)",
      "Manutenção periódica"
    ]
  },
  "Lentes de Contato Dental": {
    fullDescription: "As lentes de contato dental, também conhecidas como facetas de porcelana ultrafinas, são lâminas extremamente delgadas que são fixadas na parte frontal dos dentes. Elas são utilizadas para corrigir problemas estéticos como dentes manchados, desalinhados, com pequenas fraturas ou espaçados.",
    benefits: [
      "Transformação estética imediata",
      "Mínimo desgaste da estrutura dental",
      "Alta resistência e durabilidade",
      "Aparência natural",
      "Resistência a manchas"
    ],
    procedures: [
      "Avaliação e planejamento digital do sorriso",
      "Preparo minimamente invasivo dos dentes",
      "Confecção das lentes em laboratório especializado",
      "Prova e ajustes",
      "Cimentação definitiva"
    ]
  },
  "Dentística": {
    fullDescription: "A dentística é a especialidade odontológica responsável pela estética e restauração dos dentes. Ela trata de procedimentos como restaurações, reconstruções dentais, tratamentos para sensibilidade e outras intervenções que visam recuperar a forma, função e aparência natural dos dentes.",
    benefits: [
      "Restauração da função dos dentes danificados",
      "Melhora na estética dental",
      "Prevenção de problemas futuros",
      "Preservação da estrutura dental saudável",
      "Tratamentos minimamente invasivos"
    ],
    procedures: [
      "Restaurações em resina composta",
      "Restaurações em cerâmica",
      "Reconstrução de dentes fraturados",
      "Tratamento de sensibilidade dentinária",
      "Remodelação estética do sorriso"
    ]
  },
  "Cirurgia": {
    fullDescription: "A cirurgia bucomaxilofacial é a especialidade odontológica que trata cirurgicamente as doenças, traumatismos, lesões e anomalias congênitas da boca, face e região do pescoço. Inclui procedimentos como extrações dentárias, remoção de cistos e tumores, cirurgias ortognáticas e reconstruções faciais.",
    benefits: [
      "Resolução de problemas bucais complexos",
      "Correção de deformidades faciais",
      "Tratamento de traumas e fraturas",
      "Melhora na função mastigatória e respiratória",
      "Prevenção de complicações futuras"
    ],
    procedures: [
      "Extrações simples e complexas",
      "Remoção de dentes inclusos (sisos)",
      "Cirurgias pré-protéticas",
      "Tratamento de lesões bucais",
      "Enxertos ósseos e gengivais"
    ]
  },
  "Prótese sobre Implante": {
    fullDescription: "A prótese sobre implante é uma solução avançada para substituição de dentes perdidos, combinando a estabilidade dos implantes dentários com próteses fixas. Este tratamento oferece resultados extremamente naturais e funcionais, sendo uma alternativa superior às próteses convencionais.",
    benefits: [
      "Fixação permanente sem necessidade de adesivos",
      "Preservação do osso maxilar",
      "Conforto e sensação de dentes naturais",
      "Melhora significativa na capacidade mastigatória",
      "Longevidade do tratamento"
    ],
    procedures: [
      "Coroas unitárias sobre implantes",
      "Pontes fixas sobre implantes",
      "Próteses totais fixas (protocolo)",
      "Overdentures (próteses removíveis sobre implantes)",
      "Reabilitações completas"
    ]
  },
  "Endodontia": {
    fullDescription: "A endodontia é a especialidade odontológica responsável pelo tratamento da polpa dentária e dos tecidos que circundam as raízes dos dentes. O procedimento mais comum é o tratamento de canal, que consiste na remoção da polpa infectada ou inflamada, seguida da limpeza, modelagem e obturação dos canais radiculares.",
    benefits: [
      "Alívio da dor de dente",
      "Preservação do dente natural",
      "Prevenção da extração dentária",
      "Eliminação de infecções",
      "Restauração da função mastigatória"
    ],
    procedures: [
      "Tratamento de canal convencional",
      "Retratamento endodôntico",
      "Tratamento de urgência para dor aguda",
      "Cirurgia apical",
      "Tratamento de traumatismos dentários"
    ]
  }
};

const specialties = [
  {
    title: "Ortodontia",
    description: "Correção do alinhamento dos dentes e problemas de mordida com aparelhos ortodônticos modernos.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5.5c-1.5-1-2.5-2-2.5-3.5.5 0 2.5-.5 2.5-2 0 1.5 2 2 2.5 2 0 1.5-1 2.5-2.5 3.5z"/><path d="M12 7v1"/><path d="M12 18v3"/><path d="M10 10.5V15c0 .66-.1 1-1 1-2 0-3 1.34-3 3h12c0-1.66-1-3-3-3-.9 0-1-.34-1-1v-4.5"/><path d="M7 15.88C6.417 15.375 5.167 14 5.167 14c-.667-1-1.5-2-1.5-3.5.5 0 2.5-.5 2.5-2 0 1.5 2 2 2.5 2 0 1.5-1 2.5-2.5 3.5 0 0-1.5 1.5-2 2.5"/><path d="M16.5 14s-1.25 1.38-1.83 1.88c-.5-1-2-2.5-2-2.5-1.5-1-2.5-2-2.5-3.5.5 0 2.5-.5 2.5-2 0 1.5 2 2 2.5 2 0 1.5-1 2.5-2.5 3.5 0 0-1.5 1.5-2 2.5"/></svg>,
    color: "text-blue-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/izhhzo82rdj_1746210401635.jpeg"
  },
  {
    title: "Implantodontia",
    description: "Reposição de dentes perdidos com implantes dentários de alta qualidade e durabilidade.",
    icon: <Syringe className="h-6 w-6" />,
    color: "text-purple-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/3vc4lrf96g7_1746210877572.jpeg"
  },
  {
    title: "Prótese",
    description: "Restauração da função e estética com próteses fixas, removíveis e sobre implantes.",
    icon: <Smile className="h-6 w-6" />,
    color: "text-emerald-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/2nxuy9yoqa_1746211078697.jpeg"
  },
  {
    title: "Clareamento",
    description: "Tratamentos de clareamento dental profissional para um sorriso mais branco e radiante.",
    icon: <Sparkles className="h-6 w-6" />,
    color: "text-amber-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/8tbq2gh2fcs_1746211335968.jpeg"
  },
  {
    title: "Lentes de Contato Dental",
    description: "Transformação do sorriso com lentes de contato dental (facetas) ultrafinas e naturais.",
    icon: <Stethoscope className="h-6 w-6" />,
    color: "text-pink-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/zbcpqjtn1ab_1746211445052.jpeg"
  },
  {
    title: "Dentística",
    description: "Restaurações estéticas com materiais de última geração para dentes danificados.",
    icon: <Microscope className="h-6 w-6" />,
    color: "text-sky-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/jbw6ckes6b_1746211667508.jpeg"
  },
  {
    title: "Cirurgia",
    description: "Procedimentos cirúrgicos odontológicos realizados com segurança e precisão.",
    icon: <Scissors className="h-6 w-6" />,
    color: "text-red-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/fbrtttjcrwr_1746212130515.jpeg"
  },
  {
    title: "Prótese sobre Implante",
    description: "Reabilitação oral completa com próteses fixadas sobre implantes, devolvendo função e estética.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v12"/><path d="M6 12h12"/><path d="M12 3a9 9 0 0 0-9 9v9h18v-9a9 9 0 0 0-9-9z"/></svg>,
    color: "text-indigo-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/ls3ry01guch_1746212361657.jpeg"
  },
  {
    title: "Endodontia",
    description: "Tratamento de canal com tecnologia avançada, eliminando dor e preservando o dente natural.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v10"/><path d="m8 9 4 4 4-4"/><path d="M8 21h8"/><path d="M12 18v3"/></svg>,
    color: "text-orange-500",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop"
  }
]

const SpecialtyModal = ({ specialty, isOpen, onClose }) => {
  const details = specialtiesDetails[specialty.title];
  
  if (!details) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${specialty.color} bg-gray-100`}>
            {specialty.icon}
          </div>
          <DialogTitle className="text-2xl font-bold">{specialty.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <img 
              src={specialty.image} 
              alt={specialty.title} 
              className="w-full h-auto rounded-lg object-cover aspect-video"
            />
          </div>
          <div>
            <DialogDescription className="text-base text-gray-700 mb-4">
              {details.fullDescription}
            </DialogDescription>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Benefícios</h3>
            <ul className="list-disc pl-5 space-y-1">
              {details.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">{benefit}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Procedimentos</h3>
            <ul className="list-disc pl-5 space-y-1">
              {details.procedures.map((procedure, index) => (
                <li key={index} className="text-gray-700">{procedure}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <Button 
            onClick={onClose}
            className={`${specialty.color} hover:opacity-90`}
          >
            Agendar Consulta
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const SpecialtyCard = ({ specialty }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        className={`
          transition-all duration-300 ease-out border-0 shadow-md overflow-hidden
          ${isHovered ? 'shadow-lg translate-y-[-5px]' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={specialty.image} 
            alt={specialty.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="pt-4">
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center mb-2
            bg-gray-100 ${specialty.color}
            transition-transform duration-300
            ${isHovered ? 'scale-110' : ''}
          `}>
            {specialty.icon}
          </div>
          <CardTitle className="text-xl">{specialty.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {specialty.description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button 
            variant="ghost" 
            className={`
              p-0 ${specialty.color} hover:bg-transparent hover:opacity-80
              transition-opacity duration-300
            `}
            onClick={() => setIsModalOpen(true)}
          >
            Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      <SpecialtyModal 
        specialty={specialty} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

const Specialties = () => {
  return (
    <section id="specialties" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos tratamentos completos e personalizados para cuidar da sua saúde bucal com excelência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={index} specialty={specialty} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialties
