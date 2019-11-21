// MobX State Tree Quickstart Tutorial: https://github.com/mobxjs/mobx-state-tree/blob/master/docs/getting-started.md#getting-started
// BOOKMARK: Pick back up with Quickstart Tutorial at "Snapshots are awesome!"

import React from 'react';
import { types, getSnapshot } from "mobx-state-tree"

const Todo = types
    .model({
        name: types.optional(types.string, ""),
        done: types.optional(types.boolean, false)
    })
    .actions(self => ({
        setName(newName) {
            self.name = newName
        },

        toggle() {
            self.done = !self.done
        }
    }))

const User = types.model({
    name: types.optional(types.string, "")
})

const RootStore = types
    .model({
        users: types.map(User),
        todos: types.optional(types.map(Todo), {})
    })
    .actions(self => ({
        addTodo(id, name) {
            self.todos.set(id, Todo.create({ name }))
        }
    }))

const store = RootStore.create({
    users: {}
})

function App() {
    return (
        <div>
            <h1>Hello, MobX State Tree</h1>
            <h2>Day 2!</h2>
        </div>
    );
}

export default App;