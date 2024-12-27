import { foodList } from "./NamedExport.jsx";

function MainArticle() {
  return (
    <main>

      <div>
        <h1>Hello, and welcome!</h1>

        <h2>Early Breakfast Menu</h2>
        <ul>
          <li>{foodList[0]}</li>
        </ul>

        <h2>Lunch Hour Menu</h2>
        <ul>
          <li>&lt;- Lunch to be Updated -&gt;</li>
        </ul>

        <h2>Afterwork Dinner Menu</h2>
        <ul>
          <li>&lt;- Dinner to be Updated -&gt;</li>
        </ul>
      </div>

    </main>
  )
}

export default MainArticle;