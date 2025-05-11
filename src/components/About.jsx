import { Button } from '../components/ui/button'

const About = () => {
  // Array com URLs de fotos profissionais do Unsplash
  const teamAvatars = [
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Graal Clínica</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fundada com o compromisso de oferecer tratamentos odontológicos de excelência, a Graal Clínica 
              se destaca pela combinação de tecnologia avançada, profissionais altamente qualificados e 
              atendimento humanizado.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa equipe multidisciplinar trabalha de forma integrada para proporcionar os melhores 
              resultados, sempre priorizando o conforto e bem-estar dos nossos pacientes.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-xl text-primary mb-2">+5000</h3>
                <p>Pacientes atendidos</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-xl text-primary mb-2">+15</h3>
                <p>Especialistas</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-xl text-primary mb-2">+10</h3>
                <p>Anos de experiência</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-xl text-primary mb-2">100%</h3>
                <p>Satisfação</p>
              </div>
            </div>
            <Button size="lg">Conheça Nossa Equipe</Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770" 
                alt="Equipe Graal Clínica" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {teamAvatars.map((avatar, i) => (
                      <img 
                        key={i} 
                        src={avatar} 
                        alt={`Profissional ${i+1}`} 
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-medium">Equipe especializada</p>
                    <p className="text-sm text-muted-foreground">Profissionais certificados</p>
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

export default About
