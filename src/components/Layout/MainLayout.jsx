function MainLayout({ children }) {
  return (
    <main className="flex justify-center">
      <div className="w-7xl">{children}</div>
    </main>
  );
}

export default MainLayout;
