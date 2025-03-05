import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="w-full max-w-[1280px] mx-auto">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
