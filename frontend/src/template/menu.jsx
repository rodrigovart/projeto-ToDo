import React from 'react'

export default props => (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <span className="navbar-brand">
      <i className="far fa-calendar-check"></i> ToDO App
  </span>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="#/todos">Tarefas</a>
      <a className="nav-item nav-link" href="#/about">Sobre</a>
    </div>
  </div>
</nav>
)



