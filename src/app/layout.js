import "@/app/styles/globals.css";

export const metadata = {
  title: "Environmental Impact Archive",
  description: "Explore stories on environmental impacts, data visualizations, and insights.",
  keywords: ["environment", "carbon emissions", "data visualization", "stories"],
  author: "Your Name",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}