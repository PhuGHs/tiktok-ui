import Header from '~/components/Layout/components/header';
import Sidebar from './sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="Container">
                <Sidebar />
                <div className="Content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
