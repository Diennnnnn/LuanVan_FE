import { Navbar } from "flowbite-react";
const ResponsiveAppBar = () => {
  <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  // <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/flowbite.min.css" rel="stylesheet" />


  return (


    <Navbar className="border-green-300 border-2"
      fluid={true}
      rounded={true}
    >

      <Navbar.Toggle />
      <Navbar.Collapse className="border-green-300 border-2 basis-9/12 text-center text-2xl uppercase text-red-600">
        <Navbar.Link
          href="/navbars"
          active={true}
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Services
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}
export default ResponsiveAppBar;