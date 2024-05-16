import { useState, useRef } from "react"
import { DropdownBtnProps } from "../../@types"
import Button from "./Button"

export default function DropdownButton(props: DropdownBtnProps) {
    const [isOpened, setIsOpened] = useState(false);

    const triggerBtnRef = useRef<HTMLButtonElement>(null)
    const dropdownMenuRef = useRef<HTMLDivElement>(null)

    function handleClick(e: React.MouseEvent) {
        e.stopPropagation()
        
        setIsOpened(!isOpened)

        document.addEventListener('click', e => {
            if (!dropdownMenuRef.current?.contains(e.target as HTMLElement) && !triggerBtnRef.current?.contains(e.target as HTMLElement)) {
                dropdownMenuRef.current?.classList.add('closed')
            }
        })
    }

    return (
        <div className="dropdown-btn-wrap">
            <div className="dropdown-btn">
                <Button className={props.type} onClick={props.onClick}>
                    {props.icon ? props.icon : ''}
                    {props.text}
                </Button>
                <Button ref={triggerBtnRef} className={props.type} onClick={handleClick}>
                    {props.dropdownIcon}
                </Button>
            </div>
            <div ref={dropdownMenuRef} className={`dropdown-menu ${isOpened ? '' : 'closed'}`}>
                {props.children}
            </div>
        </div>
    )
}