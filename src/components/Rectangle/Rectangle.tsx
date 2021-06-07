import { selectedElementAtom} from '../../Canvas'
import {Drag} from '../Drag'
import {RectangleContainer} from './RectangleContainer'
import {RectangleInner} from './RectangleInner'
import {atomFamily, useRecoilState} from 'recoil'

export type ElementStyle = {
    position: {top: number; left: number}
    size: {width: number; height: number}
}

export type Element = {style: ElementStyle}

const elementAtom = atomFamily<Element, number>({
    key: 'element',
    default: {
        style: {
            size: {
                width: 150,
                height: 50
            },
            position: {
                top: 100,
                left: 100
            }
        }
    }
})

export const Rectangle = ({ id }: {id: number}) => {
    const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)
    const [element, setElement] = useRecoilState(elementAtom(id))

    return (
        <Drag
            position={element.style.position}
            onDrag={(position) => {
                setElement({
                    style: {
                        ...element.style,
                        position,
                    },
                })
            }}
        >
            <div>
                <RectangleContainer
                    position={element.style.position}
                    size={element.style.size}
                    onSelect={() => {
                        setSelectedElement(id)
                    }}
                >
                    <RectangleInner selected={id === selectedElement} />
                </RectangleContainer>
            </div>
        </Drag>
    )
}
