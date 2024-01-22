import './About.css'

const About = () => {
  //constant containing info 
  const about = {
    name: 'Olivia Gee',
    role: 'Computer Science Graduate',
    description: 'Front-End, Back-End Developer',
    resume: process.env.PUBLIC_URL + 'files/GeeOlivia_Resume(1).pdf',
  };

  //extract individual properties
  const { name, role, description, resume } = about

  return (
    //main div container with 'about' classes
    <div className='about'>
      {name && ( //Render name
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}
      {/*Render role */}
      {role && <h2 className='about__role'>A {role}.</h2>} 

      {/*Render description */}
      <p className='about__desc'>{description && description}</p>

      {/*Create a button to render the resume */}
      <div className='about__contact center'>
        {resume && (
          <a href={resume} download>
          <span className='btn btn--outline'>My Resume</span>
        </a>
        )}
      </div>
    </div>
  )
}

export default About