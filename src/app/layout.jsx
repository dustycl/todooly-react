import './globals.css';

export const metadata = {
    title: 'Todooly',
    description: 'Simple todo app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root">
                    {children}
                </div>
                <script
                  src="https://kit.fontawesome.com/50eed5a445.js" crossOrigin="anonymous"
                >
                </script>
            </body>
        </html>
    )
  }