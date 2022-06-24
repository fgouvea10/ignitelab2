import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../../graphql/generated";

import { Lesson } from "../Lesson";
import "./styles.css";

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  return (
    <aside className="sidebar">
      <span className="class-schedule">Cronograma de aulas</span>

      <div className="lessons">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
