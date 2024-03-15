import type CanvasColor from "./color";

export type NodeType = "text" | "file" | "link" | "group";

export interface GenericNode {
    id: string;
    type: NodeType;
    x: number;
    y: number;
    width: number;
    height: number;
    color?: CanvasColor;
}

export interface TextNode extends GenericNode {
    text: string;
}

export interface FileNode extends GenericNode {
    file: string;
    subpath?: string;
}

export interface LinkNode extends GenericNode {
    url: string;
}

export type GroupNodeBackgroundStyle = "cover" | "ratio" | "repeat";

export interface GroupNode {
    label?: string;
    background?: string;
    backgroundStyle?:  GroupNodeBackgroundStyle;
}

export default GenericNode;