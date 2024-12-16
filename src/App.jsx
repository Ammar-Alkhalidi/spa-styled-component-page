import  { useState } from "react";

function App() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  const sideContentDeco = {
    color: "black",
    textDecoration: "underline",
    margin: "10px 0",
    display: "block",
    fontSize: "1.2em",
  };
  const Pdeco = {
    textAlign: "justify",
    lineHeight: "1.5",
  };

  return (
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>


      {/* Sidebar */}


      <aside
        style={{
          margin: "40px",
          backgroundColor: "#f8e8e8",
          width: "250px",
          padding: "20px",
          textAlign: "left",
        }}
      >
        {/* Profile Img. */}
        <div>
          <img
            src="src/profile.jpg"
            alt="Profile"
            style={{
              width: isZoomed ? "300px" : "150px", // Conditional size
              height: isZoomed ? "300px" : "150px", // Conditional size
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "zoom-in",
              transition: "all 0.3s ease-in-out", // Smooth transition
            }}
            onClick={handleZoomToggle} // Toggle zoom on click
          />
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            Max Mustermann
          </p>
        </div>

        {/* Nav. */}
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={sideContentDeco}>
              <a href="#lorem" style={sideContentDeco}>
                Lorem.
              </a>
            </li>
            <li style={sideContentDeco}>
              <a href="#eius" style={sideContentDeco}>
                Eius.
              </a>
            </li>
            <li style={sideContentDeco}>
              <a href="#agea" style={sideContentDeco}>
                Agea.
              </a>
            </li>
            <li style={sideContentDeco}>
              <a href="#architecto" style={sideContentDeco}>
                Architecto!
              </a>
            </li>
            <li style={{ sideContentDeco}}>
              <a href="#hic" style={sideContentDeco}>
                Hic!
              </a>
            </li>
            <li style={sideContentDeco}>
              <a href="#commodi" style={sideContentDeco}>
                Commodi?
              </a>
            </li>
          </ul>
        </nav>
      </aside>

       {/* Main  */}
       <main style={{ flex: 1, padding: "30px",margin:"40px" }}>
        <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>Lorem Ipsum</h1>

        {/* Styling P */}
        <p style={Pdeco}>
          <span style={{ fontSize: "2em", color: "red", fontWeight: "bold" }}>
            L
          </span>
          orem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          corporis dolorem quisquam ut repellat ab dicta distinctio laudantium,
          quis voluptas nobis quidem expedita sint, voluptatum nihil praesentium
          repellendus non. Commodi?
        </p>

        <p style={Pdeco}>
          Officiis tenetur deleniti ducimus laudantium. Dicta pariatur nostrum
          possimus deserunt quia ipsum ipsam natus, vero nulla vitae earum optio
          sequi quos obcaecati laudantium! Modi sed nemo veniam atque ut autem?
        </p>

        <p style={Pdeco }>
          Neque eius deserunt porro sequi officia, laboriosam cupiditate
          reprehenderit nam esse rerum, accusamus maiores adipisci optio minima
          nihil temporibus excepturi vitae soluta officiis. Quisquam, aliquid
          ipsum voluptatum magnam aut aperiam.
        </p>

        <p style={Pdeco}>
          Delectus hic quod et voluptatibus tempora! Molestias voluptatem
          deserunt enim officia quod repellendus reiciendis eum veniam accusamus
          maiores, impedit porro nisi vero velit quibusdam temporibus recusandae
          nulla excepturi laborum expedita!
        </p>
      </main>
    </div>
  );
}

export default App;
