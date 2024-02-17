import { ImSpinner3 } from "react-icons/im";
import cn from 'classnames'

interface Props {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}

export default function Spinner({ sm, md, lg }: Props) {
    const className = cn('spin text-white text-[20px] dark:text-[#fff] fill-white-300', {
        'w-4 h-4': sm,
        'w-6 h-6': md,
        'w-8 h-8': lg,
    })
    return (
        <div className="" role="status">
            <ImSpinner3 className={className} />
        </div>
    )
}
