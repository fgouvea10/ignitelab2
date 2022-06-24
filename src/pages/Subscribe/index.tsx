import { Logo } from "../../components/Logo";
import "./styles.css";

export function Subscribe() {
  return (
    <div className="subscription">
      <div className="flex-container">
        <div className="about-event">
          <Logo />

          <h1>
            Construa uma <span>aplicação completa</span>, do zero, com{" "}
            <span>React</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            dolorum ducimus aliquam nisi autem, eius omnis illum ullam
            accusantium aperiam rerum delectus explicabo consequuntur numquam ab
            beatae pariatur repellendus. Aut!
          </p>
        </div>

        <div className="subscription-container">
          <strong>Inscreva-se gratuitamente</strong>

          <form action="">
            <input type="text" placeholder="Seu nome completo" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Garantir minha vaga</button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  );
}
