import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// import { faGaugeSimpleMed } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    leftIcon,
    rightIcon,
    onClick,
    primary = false,
    outline = false,
    round = false,
    text = false,
    icon = 'NULL',
    disabled = false,
    small = false,
    medium = false,
    large = false,
    ...argumentProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...argumentProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        round: round,
        text: text,
        disabled: disabled,
        small: small,
        large: large,
        medium: medium,
        to: to,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icons')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icons')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
