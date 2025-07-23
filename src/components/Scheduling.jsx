import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Scheduling = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"avaliacao-dra-amanda"});
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "language": "pt-BR",
        "timezone": "America/Sao_Paulo"
      });
    })();
  }, []);

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
          {/* Widget do Cal.com */}
          <div style={{ height: '800px' }}>
            <Cal 
              namespace="avaliacao-dra-amanda"
              calLink="graal-adm/avaliacao-dra-amanda"
              style={{width:"100%",height:"100%",overflow:"scroll"}}
              config={{
                "layout": "month_view",
                "language": "pt-BR",
                "timezone": "America/Sao_Paulo"
              }}
            />
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Prefere agendar por telefone? Ligue para <span className="font-medium">(98) 98407-4070</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
