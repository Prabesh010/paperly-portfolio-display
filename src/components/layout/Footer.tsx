
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PaperCraft</h3>
            <p className="text-gray-400">Crafting premium paper products with sustainable practices and innovative technology.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">123 Paper Mill Road</p>
            <p className="text-gray-400">Industrial District</p>
            <p className="text-gray-400">contact@papercraft.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9am - 6pm</p>
            <p className="text-gray-400">Saturday: 10am - 4pm</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PaperCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
