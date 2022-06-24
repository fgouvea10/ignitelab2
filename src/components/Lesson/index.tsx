import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import { Link, useParams } from "react-router-dom";
import ptBR from "date-fns/locale/pt-BR";

import "./styles.css";

interface ActiveLessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: string;
  availableDateFormatted: string;
  isLessonAvailable: boolean;
}

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: string;
}

const ActiveLessonComponent = ({
  title,
  slug,
  availableAt,
  type,
  availableDateFormatted,
  isLessonAvailable,
}: ActiveLessonProps) => (
  <Link to={`/event/lesson/${slug}`} className="lesson-container group">
    <span>{availableDateFormatted}</span>

    <div className="lesson-content-active group-hover:border-green-500">
      <header className="lesson-header">
        {isLessonAvailable ? (
          <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
        ) : (
          <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
            <Lock size={20} />
            Em breve
          </span>
        )}
        <span className="lesson-live-card">
          {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
        </span>
      </header>

      <strong className="text-gray-200 mt-5 block">{title}</strong>
    </div>
  </Link>
);

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: lessonSlug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = lessonSlug === slug;

  if (isActiveLesson) {
    return (
      <ActiveLessonComponent
        availableAt={availableAt}
        availableDateFormatted={availableDateFormatted}
        isLessonAvailable={isLessonAvailable}
        slug={slug}
        title={title}
        type={type}
      />
    );
  }

  return (
    <Link to={`/event/lesson/${slug}`} className="lesson-container group">
      <span>{availableDateFormatted}</span>

      <div className="lesson-content group-hover:border-green-500">
        <header className="lesson-header">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="lesson-live-card">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  );
}
