import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src="/images/logo_black.jpg"
            width={600}
            height={150}
            alt="logo"
          ></Image>
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>Online Event Center</h1>
        <h3>East Java Region</h3>
      </div>
    </header>
  );
};
