import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'
import { Menu, Phone, Clock, MapPin } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll event listener with cleanup
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Função para rolagem suave até a seção
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(98) 984074070</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Seg-Sex: 8h-19h | Sáb: 8h-14h</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Rua Inácio Xavier de Carvalho, 988 - São Francisco, São Luís-Maranhão</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'bg-blue-50 shadow-md py-3' : 'bg-blue-50 py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/1rjl3quaypi_1746058622834.png" alt="Graal Clínica Logo" className="h-12" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-primary font-medium hover:text-primary/80 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('specialties')} className="text-gray-700 hover:text-primary transition-colors">
              Especialidades
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">
              Sobre nós
            </button>
            <button onClick={() => scrollToSection('transformacoes')} className="text-gray-700 hover:text-primary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('agendamento')} className="text-gray-700 hover:text-primary transition-colors">
              Agendar
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('agendamento')}>Agendar Consulta</Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-1 mt-8">
                <button onClick={() => {scrollToSection('inicio'); onClose();}} className="text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-100 text-left">
                  Início
                </button>
                <button onClick={() => {scrollToSection('specialties'); onClose();}} className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 text-left">
                  Especialidades
                </button>
                <button onClick={() => {scrollToSection('about'); onClose();}} className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 text-left">
                  Sobre nós
                </button>
                <button onClick={() => {scrollToSection('transformacoes'); onClose();}} className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 text-left">
                  Depoimentos
                </button>
                <button onClick={() => {scrollToSection('agendamento'); onClose();}} className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 text-left">
                  Agendar
                </button>
                <button onClick={() => {scrollToSection('contact'); onClose();}} className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 text-left">
                  Contato
                </button>
              </div>

              <div className="mt-6">
                <Button className="w-full" onClick={() => { document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' }); }}>Agendar Consulta</Button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Telefone</p>
                      <p className="text-sm text-gray-500">(98) 984074070</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Horário de Atendimento</p>
                      <p className="text-sm text-gray-500">Seg-Sex: 8h-19h | Sáb: 8h-14h</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Endereço</p>
                      <p className="text-sm text-gray-500">Rua Inácio Xavier de Carvalho, 988 - São Francisco, São Luís-Maranhão</p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <img src="https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/1rjl3quaypi_1746058622834.png" alt="Graal Clínica Logo" className="h-12" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}

export default Header
