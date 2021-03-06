import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import WrappedVirtualizedTable from '../common/WrappedVirtualizedTable';

class VirtualizedTable extends Component {
  _isMounted = false;
  state = {
    data: [],
  };

  componentDidMount(){
    this._isMounted = true;
    this.setState({
      data: this.props.gridData
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
 }
  
  render(){   

    
    let id = 0;
    function createData(day, punches) {
      id += 1;
      return { id, day, punches };
    }
    
    const rows = [];
    
    this.state.data.forEach ((element) => {
      rows.push(createData(element.day,element.punches))
    });

    return (
      <Paper style={{ minHeight: 150, width: '100%', boxShadow: '3px 3px 5px 3px rgba(0,0,0,.2)' }}>
        <WrappedVirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          // onRowClick={event => console.log(event)}
          columns={[
            {
              flexGrow: 1.0,
              width: 150,
              label: 'Dia',
              dataKey: 'day',
            },
            {
              flexGrow: 1.0,
              width: 150,
              label: 'Checadas',
              dataKey: 'punches',
            },
          ]}
        />
      </Paper>
    );
  }
}

export default VirtualizedTable;