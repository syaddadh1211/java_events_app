import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <nav className="navigasi">
        <p className="category-subtitle">
          Want to publish an event ? Login/Sign Up here{" "}
        </p>
        <div className="kontak">
          <p>
            |{" "}
            <Link href="/about" passHref>
              About Us
            </Link>{" "}
            | <span>FAQ</span> | <span>Terms and Conditions |</span>
          </p>
        </div>
      </nav>
      <p>Copyright &copy; 2023, by Syaddad Hilmi Bahalwan</p>
    </footer>
  );
};
