// To Do / Check
// p-4 on the <hr> tag for now to create some space, do it differently later
// Is it semantically okay to render a React Fragment, then a <nav> tag and afterwards a simple <hr> tag?

const Footer = () => {
  return (
    <footer className="w-full p-4 text-center flex justify-center space-x-12">
      <a
        className="hover:underline hover:decoration-orange-500"
        href="https://github.com/yinchurijnaard"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className="hover:underline hover:decoration-orange-500"
        href="https://www.linkedin.com/in/yinchurijnaard/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
