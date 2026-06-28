// import { createRoot } from 'react-dom/client';

// const { createElement } = require("react");

// const root = createRoot(document.getElementById('root'));

// function MyNavbar() {
// 	return (
// 		<nav>
// 			<h1>Logo</h1>
// 			<ul>
// 				<li>Home</li>
// 				<li>About</li>
// 				<li>Contact</li>
// 			</ul>
// 		</nav>
// 	)
// }

// function MainContent() {
// 	return (
// 		<h1>React is great!</h1>
// 	)
// }

// root.render(
// 	<>
// 		<MyNavbar />
// 		<MainContent />	
// 	</>
// )


const h1 = document.createElement('h1');
const root = document.getElementById('root');

h1.textContent = 'Hello!'
h1.classList.add('header');

root.append(h1);


// https://www.youtube.com/watch?v=x4rFhThSX04&t=955s
// 51:14