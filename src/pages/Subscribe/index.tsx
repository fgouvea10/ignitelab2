import { FormEvent, useState } from "react";

import { Logo } from "../../components/Logo";

import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../../graphql/generated";

import "./styles.css";

export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  const navigate = useNavigate();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

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

          <form onSubmit={handleSubscribe}>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" disabled={loading}>
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  );
}
