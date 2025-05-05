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

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Seg-Sex: 8h-19h | Sáb: 8h-14h</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Av. Paulista, 1000 - São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="https://cccwgolxpfznzgdlpnao.supabase.co/storage/v1/object/public/components-previews/project-images/1rjl3quaypi_1746058622834.png" alt="Graal Clínica Logo" className="h-12" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Início
            </a>
            <a href="#especialidades" className="text-gray-700 hover:text-primary transition-colors">
              Especialidades
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors">
              Sobre nós
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#agendamento" className="text-gray-700 hover:text-primary transition-colors">
              Agendar
            </a>
            <a href="#contato" className="text-gray-700 hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' })}>Agendar Consulta</Button>
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
                <a href="#" className="text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-100">
                  Início
                </a>
                <a href="#especialidades" className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100">
                  Especialidades
                </a>
                <a href="#sobre" className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100">
                  Sobre nós
                </a>
                <a href="#depoimentos" className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100">
                  Depoimentos
                </a>
                <a href="#agendamento" className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100">
                  Agendar
                </a>
                <a href="#contato" className="text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100">
                  Contato
                </a>
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
                      <p className="text-sm text-gray-500">(11) 3456-7890</p>
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
                      <p className="text-sm text-gray-500">Av. Paulista, 1000 - São Paulo, SP</p>
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
