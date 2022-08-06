import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const isLastChild = data.currentUser && data.id === 4;
    return (
        <Button
            className={isLastChild ? cx('last-item') : cx('menu-item')}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
