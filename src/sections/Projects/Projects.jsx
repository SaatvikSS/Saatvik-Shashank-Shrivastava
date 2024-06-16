import styles from './ProjectsStyles.module.css';
import sudoku from '../../assets/sudoku1.png';
import nqueen from '../../assets/nqueen1.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

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
      </div>
    </section>
  );
}

export default Projects;
