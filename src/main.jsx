import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'))

root.render(
    <>
        <Header />
        <MainContent />
        <Footer />
    </>
)

function Header() {
    return (
        <header>
            <img src="./react-logo.png" alt="React Logo" width="50px" />
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>
                &copy; 2026 Sagit development. All rights reserved.
            </small>
        </footer>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>To learn how to create webpages/apps using React.</li>
                <li>To be employable.</li>
                <li>Learning is fun :D</li>
            </ol>            
        </main>
    )
}

// https://www.youtube.com/watch?v=x4rFhThSX04&t=955s
// 1:31:01
