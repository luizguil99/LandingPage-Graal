import { useState, useEffect } from 'react'
import { 
  Stethoscope, 
  Scissors, 
  Sparkles, 
  Smile, 
  Syringe, 
  Microscope, 
  ArrowRight, 
  Heart,
  Zap,
  CircleHelp,
  Hammer,
  Lightbulb,
  Gem,
  Wrench
} from 'lucide-react'
import ImplantIcon from './ImplantIcon'
import EndoIcon from './EndoIcon'
import ProstheticImplantIcon from './ProstheticImplantIcon'
import SurgeryIcon from './SurgeryIcon'

// Componente personalizado de ícone de dente
const ToothIcon = ({ className }) => {
  return (
    <svg 
      viewBox="-0.74 0 20 20" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <g transform="translate(-2.738 -2)">
        <path d="M16,3a3.84,3.84,0,0,0-2.32.74,2.88,2.88,0,0,1-3.36,0A3.84,3.84,0,0,0,8,3C5,3,3,5,4,10S5,21,8,21s2-6.76,4-6.76S13,21,16,21s3-6,4-11S19,3,16,3Z" />
      </g>
    </svg>
  );
};
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../components/ui/sheet'

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
    icon: <ToothIcon className="h-6 w-6" />, // Ícone de dente para ortodontia
    color: "text-blue-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/izhhzo82rdj_1746210401635.jpeg"
  },
  {
    title: "Implantodontia",
    description: "Reposição de dentes perdidos com implantes dentários de alta qualidade e durabilidade.",
    icon: <ImplantIcon className="h-6 w-6 stroke-[1.5]" />,
    color: "text-purple-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/3vc4lrf96g7_1746210877572.jpeg"
  },
  {
    title: "Prótese",
    description: "Restauração da função e estética com próteses fixas, removíveis e sobre implantes.",
    icon: <Smile className="h-6 w-6" />, // Sorriso para prótese
    color: "text-emerald-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/2nxuy9yoqa_1746211078697.jpeg"
  },
  {
    title: "Clareamento",
    description: "Tratamentos de clareamento dental profissional para um sorriso mais branco e radiante.",
    icon: <Sparkles className="h-6 w-6" />, // Brilho para clareamento
    color: "text-amber-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/8tbq2gh2fcs_1746211335968.jpeg"
  },
  {
    title: "Lentes de Contato Dental",
    description: "Transformação do sorriso com lentes de contato dental (facetas) ultrafinas e naturais.",
    icon: <Gem className="h-6 w-6" />, // Gema para lentes de contato
    color: "text-pink-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/zbcpqjtn1ab_1746211445052.jpeg"
  },
  {
    title: "Dentística",
    description: "Restaurações estéticas com materiais de última geração para dentes danificados.",
    icon: <Hammer className="h-6 w-6" />, // Martelo para restauração
    color: "text-sky-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/jbw6ckes6b_1746211667508.jpeg"
  },
  {
    title: "Cirurgia",
    description: "Procedimentos cirúrgicos odontológicos realizados com segurança e precisão.",
    icon: <SurgeryIcon className="h-6 w-6 stroke-[1.5]" />,
    color: "text-red-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/fbrtttjcrwr_1746212130515.jpeg"
  },
  {
    title: "Prótese sobre Implante",
    description: "Reabilitação oral completa com próteses fixadas sobre implantes, devolvendo função e estética.",
    icon: <ProstheticImplantIcon className="h-6 w-6 stroke-[1.5]" />,
    color: "text-indigo-500",
    image: "https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/ls3ry01guch_1746212361657.jpeg"
  },
  {
    title: "Endodontia",
    description: "Tratamento de canal com tecnologia avançada, eliminando dor e preservando o dente natural.",
    icon: <EndoIcon className="h-6 w-6 stroke-[1.5]" />,
    color: "text-orange-500",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop"
  }
]

const SpecialtyModal = ({ specialty, isOpen, onClose }) => {
  const details = specialtiesDetails[specialty.title];
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  if (!details) return null;
  
  // Botão de WhatsApp compartilhado entre os modais
  const WhatsAppButton = () => (
    <Button 
      onClick={() => {
        const message = `Olá, desejo mais informações do procedimento ${specialty.title}`;
        window.open(`https://contate.me/graalclinicav1?text=${encodeURIComponent(message)}`, '_blank');
      }}
      className={`w-full ${specialty.color} hover:opacity-90 flex items-center justify-center gap-2 text-white rounded-full py-2.5`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="18" 
        height="18" 
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Solicitar informações
    </Button>
  );
  
  // Conteúdo compartilhado entre os modais
  const ModalContent = () => (
    <>
      <img 
        src={specialty.image} 
        alt={specialty.title} 
        className="w-full h-auto rounded-lg object-cover aspect-[16/9] mb-4"
      />
      
      <div className="text-sm text-gray-700 mb-4">
        {details.fullDescription}
      </div>
      
      <div className="mb-4">
        <h3 className="text-base font-semibold mb-2">Benefícios</h3>
        <ul className="list-disc pl-5 space-y-1">
          {details.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-700">{benefit}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h3 className="text-base font-semibold mb-2">Procedimentos</h3>
        <ul className="list-disc pl-5 space-y-1">
          {details.procedures.map((procedure, index) => (
            <li key={index} className="text-gray-700">{procedure}</li>
          ))}
        </ul>
      </div>
    </>
  );
  
  // Renderiza o modal apropriado com base no tamanho da tela
  return isMobile ? (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="px-0 pt-0 pb-0 overflow-y-auto">
        <div className="sticky top-0 z-10 bg-white px-4 pt-4 pb-2 border-b border-gray-100">
          <SheetHeader className="flex flex-row items-center gap-3 text-left">
            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${specialty.color} bg-gray-100`}>
              {specialty.icon}
            </div>
            <SheetTitle className="text-xl font-bold">{specialty.title}</SheetTitle>
          </SheetHeader>
        </div>
        
        <div className="px-4 py-4 overflow-y-auto">
          <ModalContent />
        </div>
        
        <div className="sticky bottom-0 px-4 py-3 border-t border-gray-200 bg-white">
          <WhatsAppButton />
        </div>
      </SheetContent>
    </Sheet>
  ) : (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center gap-3 pb-2 border-b border-gray-100">
          <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${specialty.color} bg-gray-100`}>
            {specialty.icon}
          </div>
          <DialogTitle className="text-2xl font-bold">{specialty.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <img 
              src={specialty.image} 
              alt={specialty.title} 
              className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
            />
            
            <DialogDescription className="text-base text-gray-700 mt-4">
              {details.fullDescription}
            </DialogDescription>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Benefícios</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                {details.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Procedimentos</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                {details.procedures.map((procedure, index) => (
                  <li key={index} className="text-gray-700">{procedure}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const SpecialtyCard = ({ specialty }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSaibaMaisClick = () => {
    // Evento de conversão do Google Ads
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17413364544/CkmOCNWuz8UaEPeG7r8_',
        'value': 1.0,
        'currency': 'BRL'
      });
    }

    if (isMobile) {
      // Redirecionar para o WhatsApp diretamente em dispositivos móveis
      const message = `Olá, desejo mais informações do procedimento ${specialty.title}`;
      window.open(`https://contate.me/graalclinicav1?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      // Abrir o modal apenas em desktop
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Card 
        className={`
          transition-all duration-300 ease-out border-0 shadow-md overflow-hidden rounded-xl
          ${isHovered ? 'shadow-lg translate-y-[-5px]' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-36 sm:h-40 md:h-48 overflow-hidden">
          <img 
            src={specialty.image} 
            alt={specialty.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-xl"
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
              transition-opacity duration-300 rounded-full
            `}
            onClick={handleSaibaMaisClick}
          >
            Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      {!isMobile && (
        <SpecialtyModal 
          specialty={specialty} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
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
