import styles from './ProjectsStyles.module.css';
import sudoku from '../../assets/sudoku1.png';
import nqueen from '../../assets/nqueen1.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import astar from '../../assets/A*.png';
import dijsktra from '../../assets/Dijsktra.png';
import chatbot from '../../assets/chatbot.png';
import drug from '../../assets/drug.png';
import solar from '../../assets/solarsync.png';
import nutriscan from '../../assets/7da138d4-58b2-46af-9b27-b0b242da735c.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sudoku}
          link="https://github.com/SaatvikSS/Sudoku-Solver"
          h3="Sudoku"
          p="Sudoku Solver"
        />
        <ProjectCard
          src={nqueen}
          link="https://github.com/SaatvikSS/N-Queen-Visualizer"
          h3="N Queen"
          p="N Queen Visualizer"
        />
        <ProjectCard
          src={astar}
          link="https://github.com/SaatvikSS/A-Algorithm"
          h3="A* Algorithm"
          p="A* Search Algorithm"
        />
        <ProjectCard
          src={dijsktra}
          link="https://github.com/SaatvikSS/Dijkstra-algorithm"
          h3="Dijsktra Algorithm"
          p="Dijsktra Search Algorithm"
        />
        <ProjectCard
          src={chatbot}
          link="https://github.com/SaatvikSS/ChatBot-using-Gemini-API"
          h3="ChatBot"
          p="ChatBot using Gemini API"
        />
        <ProjectCard
          src={drug}
          link="https://github.com/SaatvikSS/Drug_Repurposing_Using_KGE"
          h3="Drug Repurposing"
          p="Drug Repurposing Using KGE Graphs"
        />
        <ProjectCard
          src={solar}
          h3="Solar Sync"
          p="Solar Sync App"
        />
        <ProjectCard
          src={nutriscan}
          link="https://github.com/SaatvikSS/NutriScan"
          h3="NutriScan"
          p="NutriScan helps users make healthier food choices by scanning barcodes to provide a health rating and detailed ingredient analysis."
        />
      </div>
    </section>
  );
}

export default Projects;
