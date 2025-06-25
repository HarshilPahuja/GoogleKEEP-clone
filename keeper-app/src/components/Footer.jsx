const d = new Date();
let year = d.getFullYear();

export default function Footer(){

    return <footer>
        <p>Copyright @{year}</p>
    </footer>
}