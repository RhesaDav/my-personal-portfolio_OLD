export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>dashboard</h1>
      {children}
    </div>
  );
}
