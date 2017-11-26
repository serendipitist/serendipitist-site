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
    <p>My name is Shireesha and I am from India. I 💓 Web.If I am not infront of screen ,I love exploring natural landscape.</p>
    <p>Click Here to know about my <Link to="/work/">Work</Link>👩‍💻</p>
    <p> I like to promote <Link to="/community/">Community</Link> Learning</p>
    <p>You can 📨 <Link to="/contact/">contact</Link></p>
    <h2 id="print-msg">Happy {greetings()} 😀 </h2>
  </div>
)

export default IndexPage
