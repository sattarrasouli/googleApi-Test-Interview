import { History } from "history"
import { ReactNode } from "react"
/**
 * typescript's interfaces and types
 * to have clean components i figured out to store typescript's interfaces and types in individual file.
 */
export interface IItemPropsInList {
    volumeInfo: {
        title: string,
        publisher: string,
        authors: string[],
    },
    id: string
}

export interface IItemInEveryMethod extends IItemPropsInList {
    id: string,
}

export interface IEndpointTypes {
    [key: string]: string
}

export interface ICustomRouter {
    basename?: string,
    children: ReactNode,
    history: History
}


export interface IState {
    Error: boolean,
    data: string[] | string,
    isLoading: boolean
}
export interface IAction {
    type: string,
    payload: string | string[]
}

export interface IResponse {
    data: string[]
}


export interface IAction {
    payload: string[] | string
}

export interface IChildren {
    children: JSX.Element[] | React.ReactNode
}
