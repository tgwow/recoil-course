import {createContext, useState} from 'react'
import {Element, Rectangle} from './components/Rectangle/Rectangle'
import {PageContainer} from './PageContainer'
import {Toolbar} from './Toolbar'
import {atom, useRecoilValue, useSetRecoilState} from 'recoil'

export const selectedElementAtom = atom<null | number>({
    key: 'selectedElement',
    default: null
})

export const elementsAtom = atom<number[]>({
    key: 'elements',
    default: []
})

function Canvas() {
    const elements = useRecoilValue(elementsAtom)
    const setSelectedElement = useSetRecoilState(selectedElementAtom)

    return (
        <PageContainer
            onClick={() => {
                setSelectedElement(null)
            }}
        >
            <Toolbar />
            {elements.map((id) => (
                <Rectangle key={id} id={id}/>
            ))}
        </PageContainer>
    )
}

export default Canvas
