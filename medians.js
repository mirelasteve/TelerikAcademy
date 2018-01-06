class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
        this.values = [];
        this.length = 0;
    }
    add(value) {
        this.values.push(value);
        if (this.root === null) {
            this.root = new Node(value);
            this.length += 1;
        } else {
            let current = this.root;
            while (current) {
                if (current.value >= value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        this.length += 1;
                        break;
                    }
                    current = current.left;
                    if (current.value >= value) {
                        current.left = new Node(value);
                        this.length += 1;
                        break;
                    } else {
                        current.right = new Node(value);
                        this.length += 1;
                        break;
                    }
                } else {
                    if (current.right === null) {
                        current.right = new Node(value);
                        this.length += 1;
                        break;
                    }
                    current = current.right;
                    if (current.value >= value) {
                        current.left = new Node(value);
                        this.length += 1;
                        break;
                    } else {
                        current.right = new Node(value);
                        this.length += 1;
                        break;
                    }
                }
            }
        }
    }
   
    find(node) {
        this.values = this.values.sort((a, b) => a - b);
        if (this.values.length === 1) {
            print(this.values[0]);
        } else if (this.values.length === 2) {
            let a = this.values[0];
            let b = this.values[1];

            let sum = (a + b) / 2;
            print(sum);
        } else if (this.values.length % 2 == 0 && this.values.length > 2) {
            let median = this.values.length / 2;
            let first = parseInt(median);
            let a = this.values[first];
            let b = this.values[first - 1];

            let sum = (a + b) / 2;
            print(sum);
        } else {
            let median = this.values.reduce((a, b) => a + b);
            median = median / this.values.length;
            print(Math.floor(median));

        }
    }
}


const binaryTree = new BinaryTree();
let command = gets();

while (command !== 'EXIT') {
    if (command.includes('A')) {
        let value = parseInt(command.match(/\d*/g).join(' '));
        binaryTree.add(value);
    }
    if (command.includes('F')) {
        binaryTree.find();
    }
    command = gets();
}
