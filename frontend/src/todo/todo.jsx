import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            description: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMakeAsDone = this.handleMakeAsDone.bind(this)
        this.handleMakeAsPending = this.handleMakeAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    handleAdd(){
        // console.log(this)
        const description = this.state.description
        axios.post(URL, {description}
        ).then(resposta => this.refresh())
    }

    handleChange(e){
        this.setState(
            {...this.state, description: e.target.value}
        )
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
        .then(ok => this.refresh(this.state.description))
    }

    handleMakeAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(ok => this.refresh(this.state.description))
    }

    handleMakeAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(ok => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resposta => this.setState({...this.state, description, list: resposta.data}))
    }

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} handleSearch={this.handleSearch} handleClear={this.handleClear}/>
                <TodoList  list={this.state.list} handleRemove={this.handleRemove} handleMakeAsDone={this.handleMakeAsDone} handleMakeAsPending={this.handleMakeAsPending}/>
            </div>
        )
    }
}
