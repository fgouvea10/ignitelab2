import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Lesson } from "../../components/Lesson";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

import "./styles.css";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
      {/* <Lesson /> */}
    </div>
  );
}
