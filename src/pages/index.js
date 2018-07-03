import React from 'react'
import Link from 'gatsby-link'

const greetings = () => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  const dayName =days[d.getDay()];
  return dayName;
}

const IndexPage = () => (
  <div>
    <h1>Hello people,</h1>
    <p>My name is Shireesha. I 💓 Web and like to build web apps. I have worked on traditional MVC oriented frameworks  like Laravel and Django. However Most of my stack is based around the ever growing Node.js and Javascript ecosystem. Most of day to day work involves building and managing user interface of web using  HTML , CSS and Javascript  technologies. I love trying and learning new frameworks.
      I am from  Bangalore and love my city.
      While , I am not infront of my screen. I like to go on hiking/trekking or take a long walk.</p>
    <p>Click Here to know about my <Link to="/work/">Work</Link>👩‍💻</p>
    <p> I like to promote <Link to="/community/">Community</Link> Learning</p>
    <p>You can 📨 <Link to="/contact/">contact</Link></p>
    <h2 id="print-msg">Happy {greetings()} 😀 </h2>
  </div>
)

export default IndexPage
