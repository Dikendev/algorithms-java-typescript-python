class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(user) {
    if (!this.adjacencyList.has(user)) {
      this.adjacencyList.set(user, []);
    }
  }

  addEdge(user1, user2) {
    this.addNode(user1);
    this.addNode(user2);
    this.adjacencyList.get(user1).push(user2)
    this.adjacencyList.get(user2).push(user1)
  }

  deepFirstSearch(startUser) {
    const visited = new Set();
    const result = []

    const dfs = (user) => {
      visited.add(user);
      result.push(user);

      const neighbors = this.adjacencyList.get(user)
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor)
        }
      }
    };

    dfs(startUser)
    return result
  }
}

const socialNetwork = new Graph();

socialNetwork.addEdge('Alice', 'Bob')
socialNetwork.addEdge('Alice', 'Charlie');
socialNetwork.addEdge('Bob', 'David');
socialNetwork.addEdge('Charlie', 'Eve');
socialNetwork.addEdge('Eve', 'Frank')

console.log(socialNetwork.deepFirstSearch('Alice'))