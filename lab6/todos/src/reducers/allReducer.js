const All = (state = [], action) => {
    switch(action.type) {
      case('ADDA'):
        return [...state, action.payload]
      case('REMOVEA'):
        return state.filter((x, ind) => ind !== action.index)
      case('CHANGEA'):
        let Val1 = [...state]
        Val1[action.index].done = true;
        return Val1;
      case('TIMEA'):
        const time = new Date()
        const fileterd1 = state.reduce((prev, curr) => {
          if (Date.parse(curr.date) === Date.parse(time)) return [...prev, {...curr, expired:true}]
          else return [...prev, curr]
        }, [])
        return fileterd1;
      default:
          return state;
    }
  }

  export default All;