import { useContext, useState } from "react"

export const Orden = ({id}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(id).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Mostrar el mensaje por 2 segundos
        }, () => {
          console.error('Error al copiar el texto.');
        });
      };
    return <>
        {
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-6 fw-bold">¡Tu orden fue Generada!</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Puedes verificarla con el siguiente id</p>
                <p className="bg-info text-wrap badge fs-5" style={{color: 'black'}}>{id}</p>
                </div>
                <button className="btn btn-light mt-2" onClick={handleCopy}>
                    {copied ? '¡Copiado!' : 'Copiar'}
                </button>
          </div>
        }
    </>
}