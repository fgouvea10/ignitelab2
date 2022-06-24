import { gql, useQuery } from "@apollo/client";
import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Image,
} from "phosphor-react";

import "./styles.css";

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data) {
    return (
      <div className="video-container">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className="video-container">
      <div className="video-player-content">
        <div className="video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="class-info-container">
        <div className="class-info-content">
          <div className="wrapper">
            <h1 className="class-title">{data.lesson.title}</h1>
            <p className="class-description">{data.lesson.description}</p>

            <div className="author-container-img">
              <img src={data.lesson.teacher.avatarURL} />

              <div className="author-info">
                <strong>{data.lesson.teacher.name}</strong>
                <span>{data.lesson.teacher.bio}</span>
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
