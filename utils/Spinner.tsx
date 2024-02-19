import { ImSpinner3 } from "react-icons/im";
import cn from 'classnames'

interface Props {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}

export default function Spinner({ sm, md, lg }: Props) {
    const className = cn('spin text-[#000] text-[20px]', {
        'w-4 h-4': sm,
        'w-6 h-6': md,
        'w-8 h-8': lg,
    })
    return (
        <div className="text-red-800" role="status">
            <ImSpinner3 className={className} />
        </div>
    )
}
