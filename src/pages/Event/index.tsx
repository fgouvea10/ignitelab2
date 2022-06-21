import { Header } from "../../components/Header";
import { Lesson } from "../../components/Lesson";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

import './styles.css';

export default function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main">
        <Video />
        <Sidebar />
      </main>
      {/* <Lesson /> */}
    </div>
  );
}
