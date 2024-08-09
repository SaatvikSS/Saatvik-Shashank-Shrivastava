import styles from './ProjectsStyles.module.css';
import sudoku from '../../assets/sudoku1.png';
import nqueen from '../../assets/nqueen1.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import astar from '../../assets/A*.png';
import dijsktra from '../../assets/Dijsktra.png';

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
      </div>
    </section>
  );
}

export default Projects;
