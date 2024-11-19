function Footer() {
  return (
    <div className="bg-yellow-950 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h1 className="text-xl md:text-3xl font-bold  text-slate-900 hover:text-white">
            Rare Collection
          </h1>
          <ul className="mt-2 space-y-1">
            <li>Where elegance meets tradition.</li>
            <li>Curated with passion for elegance.</li>
            <li>Discover premium dresses.</li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h1 className="text-xl md:text-3xl font-bold  text-slate-900 hover:text-white">
            About Us
          </h1>
          <p className="mt-2">
            <strong>Rare Collection</strong> – your destination for elegant,
            exclusive fashion.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-slate-900 hover:text-white">
            Quick Links
          </h1>
          <ul className="mt-2 space-y-1">
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h1 className="text-xl md:text-3xl font-bold   text-slate-900 hover:text-white">
            Contact Us
          </h1>
          <ul className="mt-2 space-y-1">
            <li>Email: info@rarecollection.com</li>
            <li>Phone: +92-xxx-xxxxx</li>
            <li>Address: Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
