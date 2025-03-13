function MainLayout({ children }) {
  return (
    <main className="flex justify-center items-center">
      <div className="w-7xl">{children}</div>
    </main>
  );
}

export default MainLayout;
