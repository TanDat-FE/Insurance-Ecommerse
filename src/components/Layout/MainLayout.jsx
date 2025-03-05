function MainLayout({ children }) {
  return (
    <main className="flex justify-center">
      <div>{children}</div>
    </main>
  );
}

export default MainLayout;
