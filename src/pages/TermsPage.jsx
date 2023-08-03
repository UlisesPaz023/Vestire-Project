import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const TermsPage = () => {
  return (
    <div className="container d-flex my-5 pt-2">
      <Card>
        <Card.Header className="text-center fs-3">
          Términos y Condiciones
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">
            Términos legales y condiciones para el uso de nuestro sitio web
          </Card.Title>
          <Card.Text>
            Bienvenido a <Link to="/">Vestire</Link>. Estos términos y
            condiciones describen las reglas y regulaciones para el uso del
            sitio web. <strong>Vestire</strong> se encuentra en{' '}
            <strong>Calle 25 de Mayo 777, San Miguel de Tucumán</strong>. Al
            acceder a este sitio web, asumimos que aceptas estos términos y
            condiciones en su totalidad. No continúes usando el sitio web si no
            aceptas todos los términos y condiciones establecidos en esta
            página. La siguiente terminología se aplica a estos Términos y
            Condiciones, Declaración de Privacidad y Aviso legal y cualquiera o
            todos los Acuerdos: el Cliente, Usted y Su se refieren a usted, la
            persona que accede a este sitio web y acepta los términos y
            condiciones de la Compañía. La Compañía, Nosotros mismos, Nosotros y
            Nuestro, se refiere a nuestra Compañía. Parte, Partes o Nosotros, se
            refiere en conjunto al Cliente y a nosotros mismos, o al Cliente o a
            nosotros mismos. Todos los términos se refieren a la oferta,
            aceptación y consideración del pago necesario para efectuar el
            proceso de nuestra asistencia al Cliente de la manera más adecuada,
            ya sea mediante reuniones formales de una duración fija, o por
            cualquier otro medio, con el propósito expreso de conocer las
            necesidades del Cliente con respecto a la provisión de los
            servicios/productos declarados de la Compañía, de acuerdo con y
            sujeto a la ley vigente de <strong>Vestire</strong>. Cualquier uso
            de la terminología anterior u otras palabras en singular, plural,
            mayúsculas y/o, él/ella o ellos, se consideran intercambiables y,
            por lo tanto, se refieren a lo mismo. Cookies Empleamos el uso de
            cookies. Al utilizar el sitio web de <strong>Vestire</strong>, usted
            acepta el uso de cookies de acuerdo con la política de privacidad de
            <strong>Vestire</strong>. La mayoría de los modernos sitios web
            interactivos de hoy en día usan cookies para permitirnos recuperar
            los detalles del usuario para cada visita. Las cookies se utilizan
            en algunas áreas de nuestro sitio para habilitar la funcionalidad de
            esta área y la facilidad de uso para las personas que lo visitan.
            Algunos de nuestros socios afiliados/publicitarios también pueden
            usar cookies. Licencia A menos que se indique lo contrario,
            <strong>Vestire</strong> y/o sus licenciatarios les pertenecen los
            derechos de propiedad intelectual de todo el material en
            <strong>Vestire</strong>. Todos los derechos de propiedad
            intelectual están reservados. Puedes ver y/o imprimir páginas desde
            <Link to="/">https://vestire.netlify.app/</Link> para tu uso
            personal sujeto a las restricciones establecidas en estos términos y
            condiciones. No debes: Volver a publicar material desde{' '}
            <Link to="/">https://vestire.netlify.app/</Link>. Vender, alquilar u
            otorgar una sub-licencia de material desde{' '}
            <Link to="/">https://vestire.netlify.app/</Link>. Reproducir,
            duplicar o copiar material desde{' '}
            <Link to="/">https://vestire.netlify.app/</Link>. Redistribuir
            contenido de <strong>Vestire</strong>, a menos de que el contenido
            se haga específicamente para la redistribución. Aviso legal En la
            medida máxima permitida por la ley aplicable, excluimos todas las
            representaciones, garantías y condiciones relacionadas con nuestro
            sitio web y el uso de este sitio web (incluyendo, sin limitación,
            cualquier garantía implícita por la ley con respecto a la calidad
            satisfactoria, idoneidad para el propósito y/o el uso de cuidado y
            habilidad razonables). Nada en este aviso legal: Limita o excluye
            nuestra o su responsabilidad por muerte o lesiones personales
            resultantes de negligencia. Limita o excluye nuestra o su
            responsabilidad por fraude o tergiversación fraudulenta. Limita
            cualquiera de nuestras o sus responsabilidades de cualquier manera
            que no esté permitida por la ley aplicable. Excluye cualquiera de
            nuestras o sus responsabilidades que no pueden ser excluidas bajo la
            ley aplicable. Las limitaciones y exclusiones de responsabilidad
            establecidas en esta Sección y en otras partes de este aviso legal:
            están sujetas al párrafo anterior; y rigen todas las
            responsabilidades que surjan bajo la exención de responsabilidad o
            en relación con el objeto de esta exención de responsabilidad,
            incluidas las responsabilidades que surjan en contrato, agravio
            (incluyendo negligencia) y por incumplimiento del deber legal. En la
            medida en que el sitio web y la información y los servicios en el
            sitio web se proporcionen de forma gratuita, no seremos responsables
            de ninguna pérdida o daño de ningún tipo.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TermsPage
