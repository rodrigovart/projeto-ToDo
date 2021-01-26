import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm row">
            <Grid cols="12 9 10">
                <input name="description" className="form-control" value={props.description} onChange={props.handleChange} onKeyUp={keyHandler}></input>
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style="primary" icon="fas fa-plus" onClick={props.handleAdd}></IconButton>
                <IconButton style="success" icon="fas fa-search" onClick={props.handleSearch}></IconButton>
                <IconButton style="dark" icon="fas fa-times" onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}