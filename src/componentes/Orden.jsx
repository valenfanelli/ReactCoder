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
                    {copied ? '¡Copiado!' : 'Copiar '}
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
                </button>
          </div>
        }
    </>
}