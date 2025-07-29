import { useState } from 'react'
import { Button } from '../components/ui/button'
import { CalendarDays, ChevronRight, Star, ChevronLeft, Smile } from 'lucide-react'

const Hero = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Paciente há 2 anos",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      quote: "Desde que comecei meu tratamento na Graal Clínica, minha autoconfiança aumentou significativamente. Equipe incrível e atendimento de primeira!"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Paciente há 1 ano",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Meu medo de dentista desapareceu completamente. Os profissionais são atenciosos e o ambiente é muito acolhedor. Recomendo a todos!"
    },
    {
      id: 3,
      name: "Mariana Costa",
      role: "Paciente há 3 anos",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "Tratamento ortodôntico perfeito! Resultados muito melhores do que eu esperava e com um preço justo. Estou muito satisfeita!"
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleAgendarConsulta = () => {
    // Evento de conversão do Google Ads
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17413364544/CkmOCNWuz8UaEPeG7r8_',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
    
    window.open('https://contate.me/graalclinicav1', '_blank');
  }

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="max-w-xl">
            {/* Schema.org markup for main content */}
            <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Graal Odontologia",
              "description": "Clínica odontológica especializada em implantes, ortodontia e estética dental em São Luís - Maranhão",
              "url": "https://www.graalodonto.com",
              "telephone": "+5598984074070",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Luís",
                "addressRegion": "Maranhão",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -2.5391,
                "longitude": -44.2829
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-12:00",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5000"
              }
            })}
            </script>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span className="font-medium text-sm">Odontologia de excelência</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Transforme seu <span className="text-primary">sorriso</span> na Graal Clínica
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Combinamos tecnologia avançada e profissionais especializados para oferecer
              tratamentos personalizados que transformam vidas através de sorrisos saudáveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-medium flex items-center gap-2" onClick={handleAgendarConsulta}>
                <CalendarDays className="h-5 w-5" />
                Agendar Consulta
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-medium flex items-center gap-2"
                onClick={() => {
                  document.getElementById('specialties').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Conheça Nossos Serviços
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6" itemScope itemType="https://schema.org/MedicalBusiness">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary" itemProp="numberOfEmployees">+5000</p>
                <p className="text-sm text-gray-500">Pacientes Atendidos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-500">Especialistas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary" itemProp="aggregateRating">98%</p>
                <p className="text-sm text-gray-500">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full"></div>

            <div className="bg-white p-8 rounded-2xl shadow-xl relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">O que nossos pacientes dizem</h3>
                {/* Schema.org markup for reviews */}
                <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "AggregateRating",
                  "itemReviewed": {
                    "@type": "MedicalBusiness",
                    "name": "Graal Odontologia"
                  },
                  "ratingValue": "4.9",
                  "reviewCount": "5000",
                  "bestRating": "5",
                  "worstRating": "1"
                })}
                </script>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative h-[220px] md:h-[280px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
                      index === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-gray-600 italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>

                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Smile className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Seu sorriso perfeito começa aqui</h3>
                    <p className="text-sm text-gray-500">Agende agora e receba uma avaliação completa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
