import { Header } from '../components/Header';
import { formatString } from '../utils/format-string';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <p>Hello world 2 {formatString('testando!')}</p>
      </body>
    </html>
  );
}
