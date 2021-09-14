import { useState } from 'react'
import Header from './components/Header';
import Products from './components/Products';


function App() {
  const [products, setProducts] = useState(
    [
        {
            id: 1, 
            text: 'Static site',
            price: 500,
            description: 'A static web page (sometimes called a flat page or a stationary page) is a web page that is delivered to the user\'s web browser exactly as stored. Consequently, a static web page displays the same information for all users, from all contexts. ',
            source: 'https://en.wikipedia.org/wiki/Static_web_page',
        },
        {
            id: 2, 
            text: 'UI Design',
            price: 500,
            description: 'UI or User Interface Design is to design user interfaces with a focus on maximizing usability and the user experience. The goal being making the user\'s interaction as simple and efficient as possible, or what is known as user-centered design. ',
            source: 'https://en.wikipedia.org/wiki/User_interface_design',
        },
        {
            id: 3, 
            text: 'Dynamic site',
            price: 1500,
            description: 'Dynamic basically means "interactive", they provide a "live" experience for the user. This means that the content (text, images, videos, form fields, etc) can change in response to the user\'s input (think ordering a pizza online vs dialing the phone on the contact section of the website). ',
            source: 'https://en.wikipedia.org/wiki/Dynamic_web_page',
        },
    ])

  return (
    <div className="container">
      <Header title={'Quotation builder'}/>
      <Products products={products}/>
    </div>
  );
}

export default App;
