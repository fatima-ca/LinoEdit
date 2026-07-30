import { useDraggable, useDroppable } from "@dnd-kit/react"



type BGDropProps = {
    id:number;
}

export function BGDrop({ id }: BGDropProps) {

    const {ref, isDropTarget} = useDroppable({id})

    return(
        <div className="drop-zone border-amber-100 w-100 h-100 bg-lino-pink" ref={ref}>
            {isDropTarget ? 'YOU ARE OVER ME' : 'Droppable!'}
        </div>
    )
}