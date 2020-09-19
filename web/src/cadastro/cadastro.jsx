import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import CadastroForm from './cadastroForm';
import CadastroList from './cadastroList';

const URL = 'http://localhost:3003/api/cadastro';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = { nome: '', list: [] }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.refresh();
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh())
  }

  refresh(nome) {
    const search = nome ? `&nome__regex=/${nome}/` : ''
    axios.get(`${URL}?sort=nome${search}`)
      .then(resp => this.setState({ ...this.state, nome: '', list: resp.data }))
  }

  handleSearch() {
    this.refresh(this.state.nome)
  }

  handleClear() {
    this.refresh();
  }

  handleChange(e) {
    this.setState({ ...this.state, nome: e.target.value })
  }

  handleAdd() {
    const nome = this.state.nome;
    axios.post(URL, { nome })
      .then(resp => this.refresh())
  }

  render() {
    return (
      <div>
        <PageHeader name="Cadastro" small=""></PageHeader>
        <CadastroForm
          nome={this.state.nome}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <CadastroList
          list={this.state.list}
          handleRemove={this.handleRemove}
        />
      </div>
    )
  }
}