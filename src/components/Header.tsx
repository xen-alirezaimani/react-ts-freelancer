export default function Header() {
  return (
    <header className="container">
      <nav>
        <ul className="flex justify-between">
          <li>
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="/about">درباره ما</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
