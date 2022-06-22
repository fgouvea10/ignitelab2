import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Image,
} from "phosphor-react";

import "./styles.css";

export function Video() {
  return (
    <div className="video-container">
      <div className="video-player-content">
        <div className="video">
          <Player>
            <Youtube videoId="Ox_zb2cs9zM" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="class-info-container">
        <div className="class-info-content">
          <div className="wrapper">
            <h1 className="class-title">Aula 01 - Abertura do Ignite Lab</h1>
            <p className="class-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              iusto odit optio, voluptatem ex in ab accusamus facilis vitae,
              necessitatibus sed laborum natus officiis praesentium facere
              explicabo illo distinctio ullam.
            </p>

            <div className="author-container-img">
              <img src="https://github.com/fgouvea10.png" />

              <div className="author-info">
                <strong>Felipe Gouvea</strong>
                <span>Co-founder and CTO at versee</span>
              </div>
            </div>
          </div>

          <div className="buttons-container">
            <a href="#" className="primary">
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a href="#" className="secondary">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="extras-container">
          <a href="#">
            <div>
              <FileArrowDown size={40} />
            </div>
            <div>
              <strong>Material complementar</strong>
              <p>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div>
              <CaretRight size={24} />
            </div>
          </a>
          <a href="#">
            <div>
              <Image size={40} />
            </div>
            <div>
              <strong>Wallpapers exclusivos</strong>
              <p>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
