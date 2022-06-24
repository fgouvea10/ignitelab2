import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import "./styles.css";
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: string;
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

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
