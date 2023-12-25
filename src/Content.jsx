import blog from './assets/blog.png';
import task from './assets/task.svg';
import eye from './assets/eye.png';
import a from './assets/a.svg';
import music from './assets/music.png';
import script from './assets/script.png';
import update from './assets/update.png';

export default function Content() {
  return (
    <>
      <div className="content">
        
        <div id="about" className="about">
        </div>
        
        <div id="education" className="education">
           <p className='title'>Education</p>
            <div className="school-item">
              <div className="school-item-intro">
                <h6>August 2023 - June 2027</h6>
              </div>
              <div className="school-item-details">
                <h4>Yale University</h4>
                <h6>Bachelor of Science in Computer Science and Economics</h6>
                <p>I am studying computer science with a specific emphasis on data structures, machine learning, and artificial intelligence. This knowledge is leveraged in tandem with economics fundamentals to perform quantatative market analysis.</p>
              </div>
            </div>
            <div className="school-item">
              <div className="school-item-intro">
                <h6>August 2019 - June 2023</h6>
              </div>
              <div className="school-item-details">
                <h4>Illinois Mathematics and Science Academy</h4>
                <h6>Student Researcher, Class Assistant</h6>
                <p>I am studying computer science with a specific emphasis on data structures, machine learning, and artificial intelligence. This knowledge is leveraged in tandem with economics fundamentals to perform quantatative market analysis.</p>
              </div>
            </div>
          </div>

        <div id="experience" className="journey">
          <div className="learning-path">
           <p className='title'>Experience</p>
            <div className="lesson">
              <div className="lesson-intro">
                <h6>August 2023 - Present</h6>
              </div>
              <div className="lesson-details">
                <h4>Yale Foreign Policy Institute, Department of Defence</h4>
                <h6>Big Data Architect</h6>
                <p>Apply advanced data analytics to analyze foreign intervention in regions of high interest to United States national security through high-level geospatial analysis using machine learning techniques. Work closely with the Department of Defense and the National Geospatial-Intelligence Agency to investigate Russian collusion in Africa.  </p>
                <div className="skills-container">
                  <a className="skill-button">R</a>
                  <a className="skill-button">PYTHON</a>
                  <a className="skill-button">ML</a>
                  <a className="skill-button">BIG DATA</a>
                </div>
              </div>
            </div>

            <div className="lesson">
              <div className="lesson-intro">
                <h6>May 2022 - June 2023</h6>
              </div>
              <div className="lesson-details">
                <h4>University of Chicago, Globus Labs </h4>
                <h6>Software Engineer</h6>
                <p>Developed Moment, a site for connecting artificial intelligence researchers in academia to passionate collaborators to improve academic turnover through crowdsourced collaboration: labs.globus.org/projects/foundry.html. Worked on DLHub and Foundry, python packages leveraged to increase the reproducibility of cutting-edge machine learning models from academic papers immediately upon publication: labs.globus.org/projects/dlhub.html.</p>
                <div className="skills-container">
                  <a className="skill-button">UI/UX</a>
                  <a className="skill-button">GRAPHIC DESIGN</a>
                  <a className="skill-button">HTML</a>
                  <a className="skill-button">CSS</a>
                  <a className="skill-button">JS</a>
                  <a className="skill-button">REACT. JS</a>
                </div>
              </div>
            </div>

            <div className="lesson">
              <div className="lesson-intro">
                <h6>May 2022 - August 2022</h6>
              </div>
              <div className="lesson-details">
                <h4>Argonne National Laboratory</h4>
                <h6>Artificial Intelligence Research Intern</h6>
                <p>Filtered and processed global climate radar data to highlight global vulnerability by region. Developed a fully featured machine learning-based pipeline to address the climate data crisis by improving the usability of climate radar data for statistical analysis.  Utilized ML-based downscaling techniques to produce radar data improved by a 16x scale magnification factor.</p>
                <div className="skills-container">
                  <a className="skill-button">UI/UX</a>
                  <a className="skill-button">HTML</a>
                  <a className="skill-button">CSS</a>
                  <a className="skill-button">JS</a>
                </div>
              </div>
            </div>

            <div className="lesson">
              <div className="lesson-intro">
                <h6>August 2021 - May 2022</h6>
              </div>
              <div className="lesson-details">
                <h4>CVM Lab@IIT</h4>
                <h6>Computational Neuroscience Research Intern</h6>
                <p>Developed computational analysis techniques to probe brain scans for patterns between divergent scans. Created a fully-featured data generation pipeline to convert brain scans into more manageable formats. Presented findings nationally. </p>
                <div className="skills-container">
                  <a className="skill-button">UI/UX</a>
                  <a className="skill-button">HTML</a>
                  <a className="skill-button">CSS</a>
                  <a className="skill-button">JS</a>
                </div>
              </div>
            </div>

          </div>
          <a target="_blank" href="https://drive.google.com/file/d/1h_K45H2_TerPFP898-kRw0T4crp3V0ts/view?usp=share_link" className="resume">View Full Résumé ›</a>
        </div>

        <div id="projects" className="projects">
          <div id="experience" className="journey">
            <div className="learning-path">
           <p className='title2'>Projects</p>
              <div className="lesson">
                <div className="icon-intro">
                  <img className="blog" src={blog}/>
                </div>
                <div className="project-details">
                  <h4>The Reader</h4>
                  <h6>Creating a Blog Website Using GitHub Pages</h6>
                  <p>An accessible solution for developers with basic web skills, this project offers a straightforward method to create customizable blog sites via JSON file edits and index additions.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/thereader/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/Modern-Design-Blog-Builder-Solution'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">Github</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">JSON</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={task}/>
                </div>
                <div className="project-details">
                  <h4>React Tasks</h4>
                  <h6>Vision OS styled Task Manager</h6>
                  <p>React Tasks is a simple task management app with an intuitive design inspired by Apple. Easy to add, organize, and check off your daily tasks. Form meets function in this minimal productivity app.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/react-tasks/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/react-tasks'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">REACT. JS</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={eye}/>
                </div>
                <div className="project-details">
                  <h4>Easy-Eye Theme</h4>
                  <h6>A theme designed for visual comfort</h6>
                  <p>A code editor theme optimizing readability with a high-contrast, dark color scheme and subtle syntax highlighting, designed to reduce eye strain and boost productivity for developers.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/Easy-Eye/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/Easy-Eye'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UX</a>
                    <a className="skill-button">CSS</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={a}/>
                </div>
                <div className="project-details">
                  <h4>Vision OS Portfolio</h4>
                  <h6>vision os inspired portfolio</h6>
                  <p>A digital portfolio project showcasing my skills and works, uniquely designed with the sleek, modern aesthetics of Vision OS windows.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/VisionOS-Portfolio-Design/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/VisionOS-Portfolio-Design'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">REACT. JS</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={music}/>
                </div>
                <div className="project-details">
                  <h4>Music Product Site</h4>
                  <h6>A streamlined product showcase site</h6>
                  <p>A dynamic product site showcasing our music company's diverse offerings, from cutting-edge tracks to innovative sound solutions, all wrapped in a user-friendly design.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/music-product-site/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/music-product-site'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                  </div>
                </div>
              </div>
              
              <div className="lesson">
                <div className="icon-intro">
                  <img src={script}/>
                </div>
                <div className="project-details">
                  <h4>Run AsDate - Mac OS</h4>
                  <h6>Script for Backdated App Execution</h6>
                  <p>A user-friendly shell script complemented by Apple Shortcuts, designed to effortlessly run apps on a specified previous date.</p>
                  <div className='link'>
                    <a href='https://github.com/arunyagoojar/RunAsDate-for-MacOS'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">SHELL SCRIPT</a>
                    <a className="skill-button">APPLE SHORTCUTS</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={update}/>
                </div>
                <div className="project-details">
                  <h4>Moc Update</h4>
                  <h6>Emulations of Various OS Update Screens</h6>
                  <p>A unique project replicating the update screens of various operating systems including Chrome OS, Windows 10, 11, and Apple Mac, offering a nostalgic and educational experience.</p>
                  <div className='link'>
                    <a href='https://mocupdate.tech/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/MocUpdate'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
