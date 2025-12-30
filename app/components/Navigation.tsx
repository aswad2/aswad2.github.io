import Link from "next/link";

interface NavItem {
  href: string;
  emoji: string;
  label: string;
  external?: boolean;
}

interface NavigationProps {
  items: NavItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <span className="emoji">{item.emoji}</span> {item.label}
              </a>
            ) : (
              <Link href={item.href}>
                <span className="emoji">{item.emoji}</span> {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

