import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faPlus,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Account from '~/components/AccountItem/index';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
// import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        currentUser: false,
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vie',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        currentUser: false,
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        currentUser: false,
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [currentUser, setCurrentUser] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    });
    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            currentUser: currentUser,
            id: 1,
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@username',
        },
        {
            currentUser: currentUser,
            id: 2,
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            currentUser: currentUser,
            id: 3,
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            currentUser: currentUser,
            id: 4,
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <Account />
                                <Account />
                                <Account />
                                <Account />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} grey_outline>
                        Upload
                    </Button>

                    {currentUser ? (
                        <React.Fragment>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Button primary>Log in</Button>
                        </React.Fragment>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                        currentUser={currentUser}
                        onClick={() => setCurrentUser(false)}
                    >
                        {currentUser ? (
                            <img
                                className={cx('user_avatar')}
                                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/296788754_1035037083853380_7627257629288923950_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DfC_pocL3x0AX8RLnP9&_nc_ht=scontent.fdad2-1.fna&oh=03_AVIpbx3SSq-cSPxbAvW5qfXGU3SOwmD6eTejcQ4B-QzTvA&oe=6312183E"
                                alt="name"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
