import { useDraggable } from "@dnd-kit/react"



type ObjectDragProps = {
    id:number;
}

export function ObjectDrag({ id }: ObjectDragProps) {

    const {ref} = useDraggable({id})

    return(
        <button ref={ref}>
            Draggable
        </button>
    )
}