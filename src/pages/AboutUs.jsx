import CardsA from "./CardsA";
import img1 from "../components/img/adrian.jpg";
import img2 from "../components/img/jorge.png";
import img3 from "../components/img/uli.png";
import img4 from "../components/img/aleVRR.png";
import img5 from "../components/img/tomas.png";

const members = [
  {
    id: 1,
    img: img1,
    name: "Adrian Figueroa",
    tittle: "Full-Stack",
    description:
      " 35 años, ingeniero electrónico. Trabajo en PROIMI-CONICET como profesional de apoyo. Odio CSS",
  },
  {
    id: 2,
    img: img2,
    name: "Jorge Lazarte",
    tittle: "Full-Stack",
    description:
      " 37 años, trabajo en el ministerio del interior como administrativo.",
  },
  {
    id: 3,
    img: img3,
    name: "Ulises Paz",
    tittle: "Full-Stack",
    description:
      "24 años, estudiante de ingeniería en sistemas de información.",
  },
  {
    id: 4,
    img: img4,
    name: "Alejandro Villarreal",
    tittle: "Full-Stack",
    description:
      "Analista de Sistemas.  Trabajo en RRHH en Ingenio  Leales. 47 años.",
  },
  {
    id: 5,
    img: img5,
    name: "Tomas Yala ",
    tittle: "Full-Stack",
    description:
      "24 años, estudio ciencias economicas, me gusta el futbol y los autos",
  },
];
function AboutUs() {
  return (
    <div className="container-fluid p-0 m-0 d-flex flex-wrap align-items-center justify-content-center">
      {members.map((member, i) => (
        <CardsA member={member} key={i}></CardsA>
      ))}
    </div>
  );
}

export default AboutUs;
