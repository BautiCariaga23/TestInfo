import './globals.css'

export const metadata = {
  title: 'Test Informatica',
  description: 'Pone a prueba tus habilidades',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
