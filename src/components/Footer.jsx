const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="card footer flex items-center justify-center mt-6">
      <p className="footer-text text-sm md:text-base text-gray-700">&copy; {currentYear} Dibuat dengan <span className="text-red-500">❤️</span> oleh YYS.</p>
    </footer>
  );
};

export default Footer;