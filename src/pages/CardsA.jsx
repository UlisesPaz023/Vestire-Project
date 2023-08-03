import './styles/cards.css'

const CardsA = (props) => {
  const { member } = props
  const { img, name, description } = member

  return (
    <div className="cards">
      <div className="head">
        <div className="circle"> </div>
        <div className="img">
          <img src={img} alt="/" />
        </div>
      </div>
      <div className="description">
        <h3>{name}</h3>
        <h4>Full-Stack</h4>
        <p>{description}</p>
      </div>

      <div className="contact">
        <a href="https://accounts.google.com/v3/signin/identifier?dsh=S788589011%3A1683681171874496&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=Af_xneFMTR6i1_nGzE8WXUsPJ8t8HevH_4rSZwAbu4dIdEYEsbjcpe_uJI60wi6x20oS9o5OlzUz_w&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
          contact
        </a>
      </div>
    </div>
  )
}

export default CardsA
