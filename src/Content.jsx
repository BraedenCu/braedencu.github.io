import blog from './assets/blog.png';
import eye from './assets/eye.png';
import a from './assets/a.svg';
import music from './assets/music.png';

export default function Content() {
  return (
    <>
      <div className="content">

        {/* Education Section */}
        <div id="education" className="education">
           <p className='title'>Education</p>
            <div className="school-item">
              <div className="school-item-intro">
                <h6>2023 — June 2027</h6>
              </div>
              <div className="school-item-details">
                <h4>Yale University</h4>
                <h6>B.S. Computer Science and Economics, B.A. Statistics and Data Science</h6>
                <p>Activities: Yale Entrepreneurial Society, Yale Venture Capital Fellows Venture Partner, Yale Undergraduate Diversified Investments, Yale Foreign Policy Initiative, Y/CS.</p>
              </div>
            </div>
          </div>

        {/* Education Section */}
        <div id="experience" className="experience">
          <div className="experience-path">
           <p className='title'>Experience</p>
            <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2023 — Present</h6>
              </div>
              <div className="experience-item-details">
                <h4>Yale Foreign Policy Institute, Department of Defence</h4>
                <h6>Big Data Architect</h6>
                <p>Apply advanced data analysis to identify foreign intervention in regions of high interest to United States national security. Leveraged geospatial analysis techniques with a heavy emphasis on ML-based solutions. Working closely with the Department of Defense and the National Geospatial-Intelligence Agency to investigate Russian activity in Africa.</p>
                <div className="skills-container">
                  <a className="skill-button">R</a>
                  <a className="skill-button">PYTHON</a>
                  <a className="skill-button">AI/ML</a>
                  <a className="skill-button">BIG DATA</a>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2022 — 2023</h6>
              </div>
              <div className="experience-item-details">
                <h4>University of Chicago, Globus Labs </h4>
                <h6>Software Engineer</h6>
                <p>Developed Moment, a site for connecting artificial intelligence researchers in academia to passionate collaborators to improve academic turnover through crowdsourced collaboration. Worked on DLHub and Foundry, python packages leveraged to increase the reusability of cutting-edge machine learning models from academic papers immediately upon publication.  These projects contribute to the democratization of ML research, guided by an overarching desire to keep the powers of ML out of the tight grasp of a select few powerful entities.</p>
                <div className="skills-container">
                  <a className="skill-button">UI/UX</a>
                  <a className="skill-button">HTML/CSS</a>
                  <a className="skill-button">JS</a>
                  <a className="skill-button">REACT</a>
                  <a className="skill-button">PYTHON</a>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2022 — 2022</h6>
              </div>
              <div className="experience-item-details">
                <h4>Argonne National Laboratory</h4>
                <h6>Artificial Intelligence Research Intern</h6>
                <p>Filtered and processed global climate radar data to highlight global vulnerability by region. Developed a fully featured machine learning-based pipeline to address the climate data crisis by improving the usability of climate radar data for statistical analysis.  Utilized ML-based downscaling techniques to produce radar data improved by a 16x scale magnification factor.</p>
                <div className="skills-container">
                  <a className="skill-button">AI/ML</a>
                  <a className="skill-button">PYTHON</a>
                  <a className="skill-button">BIG DATA</a>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2021 — 2022</h6>
              </div>
              <div className="experience-item-details">
                <h4>CVM Lab@IIT</h4>
                <h6>Computational Neuroscience Research Intern</h6>
                <p>Developed computational analysis techniques to probe brain scans for patterns between divergent scans. Created a fully-featured data generation pipeline to convert brain scans into more manageable formats. Presented findings nationally. </p>
                <div className="skills-container">
                  <a className="skill-button">PYTHON</a>
                  <a className="skill-button">C++</a>
                  <a className="skill-button">BIG DATA</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="projects">
          <div id="experience" className="journey">
            <div className="learning-path">
           <p className='title2'>Projects</p>

              <div className="experience-item">
                <div className="icon-intro">
                  <img src={music}/>
                </div>
                <div className="project-details">
                  <h4>EpochML</h4>
                  <h6>Chief Technology Officer</h6>
                  <p> 
                      I oversaw our technological vision and overall reliability of the HPC cluster at both the hardware and software levels.
                      Managed a team of 20 students to develop a CUDA-enabled HPC cluster using the SLURM job scheduler.
                      Championed the implementation of zero-trust security solutions, ensuring robust protection for the Epoch cluster and its users while facilitating secure access to computational resources.
                  </p>
                  <div className='link'>
                    <a href='https://epochml.org/'>Live↗</a>
                    <a href='https://github.com/IMSAai'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">HTML/CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">ANSIBLE</a>
                    <a className="skill-button">CUDA</a>
                    <a className="skill-button">SLURM</a>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="icon-intro">
                  <img src={eye}/>
                </div>
                <div className="project-details">
                  <h4>Geospatial Intelligence</h4>
                  <h6>Data Science</h6>
                  <p>
                    As a member of a team of post-graduate researchers at Yale University, I analyzed the impact of Russian intervention in Ukrainian territories using Python and R. We utilized Python libraries (Pandas, NumPy, Matplotlib, Seaborn) and R packages (ggplot2, dplyr, tidyr) for data manipulation, visualization, and statistical analysis. Our methods included regression, time series analysis, and machine learning for pattern identification, complemented by geospatial analysis with tools like GeoPandas. We emphasized data validation, cleaning, and used Jupyter Notebooks and R Markdown for an integrated, reproducible research environment, providing comprehensive insights into the socio-economic and political effects of the intervention.
                  </p>
                  <div className='link'>
                    <a href='https://github.com/braedencu/'>Live↗</a>
                    <a href='https://github.com/braedencu/'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">PYTHON</a>
                    <a className="skill-button">BIG DATA</a>
                    <a className="skill-button">AI/ML</a>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="icon-intro">
                  <img src={a}/>
                </div>
                <div className="project-details">
                  <h4>Spinertia</h4>
                  <h6>Technical Lead</h6>
                  <p>
                    Cofounded a venture-backed Yale-based biotech wearable start-up using artificial intelligence to create alternative modeling techniques for 
                    spinal deviation using a sensor array. Provisionally patented on the proprietary AI model along with the design of the device. 
                    Current prospects are on mass-production and continuing to raise capital.
                  </p>
                  <div className='link'>
                    <a href='https://github.com/braedencu/'>Live↗</a>
                    <a href='https://github.com/braedencu/'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML/CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">REACT</a>
                    <a className="skill-button">PYTHON</a>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="icon-intro">
                  <img src={music}/>
                </div>
                <div className="project-details">
                  <h4>Steel Bronco Robotics</h4>
                  <h6>President</h6>
                  <p>
                    Steel Bronco Robotics is a 501(c)(3) nonprofit organization that gives underprivileged students access to competitive robotics at the highest level. Engineering programs are nonexistent in the local school system, a void that the organization fills. 
                    Founded the organization and raised $15000 in recurring sponsorship.
                  </p>
                  <div className='link'>
                    <a href='https://www.steelbroncorobotics.com/'>Live↗</a>
                    <a href='https://github.com/BraedenCu/JetsonCodeFRC2020'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">AI/ML</a>
                    <a className="skill-button">IMAGE PROCESSING</a>
                    <a className="skill-button">DATA ANALYSIS</a>
                    <a className="skill-button">PYTHON</a>
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
