import type Edge from "./edge";
import type GenericNode from "./node";

export class JSONCanvas {
    private nodes: GenericNode[] = [];
    private edges: Edge[] = [];

    constructor(nodes?: GenericNode[], edges?: Edge[]) {
        if(nodes) {
            this.nodes = nodes;
        }
        if(edges) {
            this.edges = edges;
        }
    }

    public add_node(node: GenericNode) {
        if(this.nodes.find(n => n.id === node.id)) {
            throw new Error("A node with the same ID already exists in this.nodes");
        }
        this.nodes.push(node);
    }

    public add_edge(edge: Edge) {
        if(this.edges.find(e => e.id === edge.id)) {
            throw new Error("An edge with the same ID already exists in this.edges");
        }
        this.edges.push(edge);
    }

    public get_node(id: string) {
        return this.nodes.find(n => n.id === id);
    }
    public get_edge(id: string) {
        return this.edges.find(e => e.id === id);
    }

    public get_nodes() {
        return this.nodes;
    }
    public get_edges() {
        return this.edges;
    }

    public remove_node(id: string) {
        this.nodes = this.nodes.filter(n => n.id !== id);
        this.edges = this.edges.filter(e => e.fromNode !== id && e.toNode !== id);
    }

    public remove_edge(id: string) {
        this.edges = this.edges.filter(e => e.id !== id);
    }

    public to_string() {
        return JSON.stringify({
            nodes: this.nodes,
            edges: this.edges
        });
    }

    public static from_string(json: string) {
        const obj = JSON.parse(json);
        return new JSONCanvas(obj.nodes, obj.edges);
    }
}

export default JSONCanvas;