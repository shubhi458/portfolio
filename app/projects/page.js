import { ArrowOutward } from '@mui/icons-material';

const ProjectsPage = () => {
    return <div id="projects">
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src="./scribe4.jpg" />
                    <div className="layer">
                        <h3>Scribe - Social Media Application</h3>
                        <p>It is an social networking project where users can create their profiles and make friends. Developed using Angular JS and Firebase.</p>
                        <a href="#"><ArrowOutward /></a>
                    </div>
                </div>
                <div className="work">
                    <img src="./learn1.jpg" />
                    <div className="layer">
                        <h3>Let's Learn Together</h3>
                        <p>It's an android application that is made to be used inside an educational institute. To remove the communication gap between students and faculty members</p>
                        <a href="#"><ArrowOutward /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectsPage;