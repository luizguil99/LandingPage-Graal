import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Graal Clínica</h3>
            <p className="mb-4 text-white/80">
              Cuidando do seu sorriso com excelência e tecnologia de ponta.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#specialties" className="text-white/80 hover:text-white transition-colors">Especialidades</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre nós</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Especialidades</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Ortodontia</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Implantodontia</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Prótese</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Clareamento</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Lentes de Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-white/80">
              Inscreva-se para receber dicas de saúde bucal e novidades.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Seu email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="secondary">Enviar</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60">
          <p>© {new Date().getFullYear()} Graal Clínica Odontológica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
