import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Card, CardContent } from '../components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Evento de conversão do Google Ads
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17413364544/CkmOCNWuz8UaEPeG7r8_',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
    
    // Aqui você implementaria a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e sua família com o melhor da odontologia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome completo</label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                <Input id="phone" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">Serviço de interesse</label>
                <select id="service" className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Selecione um serviço</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="implantodontia">Implantodontia</option>
                  <option value="protese">Prótese</option>
                  <option value="clareamento">Clareamento</option>
                  <option value="lentes">Lentes de Contato</option>
                  <option value="dentistica">Dentística</option>
                  <option value="cirurgia">Cirurgia</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea id="message" placeholder="Como podemos ajudar?" rows={4} />
              </div>
              <Button type="submit" className="w-full">Enviar Mensagem</Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Inácio Xavier de Carvalho, 988<br />
                    São Francisco, São Luís-Maranhão
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Phone className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Telefone</h3>
                  <p className="text-muted-foreground">
                  (98) 98211-8879
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Mail className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    contato@graalclinica.com.br<br />
                    agendamento@graalclinica.com.br
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Horário</h3>
                  <p className="text-muted-foreground">
                    Seg-Sex: 8h-19h<br />
                    Sáb: 8h-14h
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1097889947204!2d-44.301029239943894!3d-2.530520138158983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68ed9eee261d9%3A0xb01bfe6fd41eeebc!2sR.%20In%C3%A1cio%20Xavier%20de%20Carvalho%2C%20988%20-%20S%C3%A3o%20Francisco%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA!5e0!3m2!1spt-BR!2sbr!4v1650298765625!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
