import React from 'react'
import PT from 'prop-types'
import cs from 'classnames'
import styles from './Button.module.scss'
import Link from 'next/link'
import { inter } from '@/fonts'

const Button = ({
                    as,
                    label,
                    children,
                    variant,
                    size,
                    disabled,
                    className,
                    onClick,
                    linkTo,
                    type,
                }) => {

    const buttonClasses = cs(styles.button,
        inter.className,
        {
        [styles[variant]]: variant,
        [styles[size]]: size,
        [className]: className,
    })
    if (linkTo) {
        return (
          <Link as={as} className={buttonClasses} href={linkTo}>
            <div className={styles.content}>{label || children}</div>
          </Link>
        )
    }

    return (
      <button
        className={buttonClasses}
        disabled={disabled}
        onClick={onClick}
            // eslint-disable-next-line react/button-has-type
        type={type}
        >
        <div className={styles.content}>{label || children}</div>
      </button>
    )

}

Button.propTypes = {
    as: PT.string,
    children: PT.element,
    className: PT.string,
    disabled: PT.bool,
    label: PT.oneOfType([PT.string, PT.shape({})]),
    linkTo: PT.oneOfType([PT.string, PT.shape({})]),
    onClick: PT.func,
    size: PT.oneOf(['big', 'small']),
    type: PT.oneOf(['submit', 'button', 'reset']),
    variant: PT.oneOf(['primary', 'secondary']),

}

Button.defaultProps = {
    as: '',
    children: null,
    className: '',
    disabled: false,
    label: '',
    linkTo: null,
    onClick: () => {
    },
    size: 'big',
    type: 'button',
    variant: 'primary',

}
export default Button
