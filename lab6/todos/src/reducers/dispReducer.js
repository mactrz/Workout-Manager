const Disp = (state = [], action) => {
    switch(action.type) {
      case('ADD'):
        return [...state, action.payload]
      case('REMOVE'):
        return state.filter((x, ind) => ind !== action.index)
      case('CHANGE'):
        let Val1 = [...state]
        Val1[action.index].done = true;
        return Val1;
      case('TIME'):
        const time = new Date()
        const fileterd1 = state.reduce((prev, curr) => {
          if (Date.parse(curr.date) === Date.parse(time)) return [...prev, {...curr, expired:true}]
          else return [...prev, curr]
        }, [])
        return fileterd1;
        case('SEARCH'):
          const text = action.payload.text;
          const status = action.payload.status;
          let disp = [...state];
          switch(status) {
            case('expired'):
              disp = disp.filter(x => x.expired === true);
              break;
            case('done'):
              disp = disp.filter(x => x.done === true);
              break
            case('active'):
              disp = disp.filter(x => !x.expired && !x.done);
              break
            default:
              break
            }
          if(text !== '') {
            const reg = new RegExp('^'+text.toLowerCase()+'.*');
            disp = disp.filter(x => {
              console.log(x.text.toLowerCase())
              return reg.test(x.text.toLowerCase())
            })
          }
          return disp;
      case('RESET'):
        return action.payload;
      default:
        return state;
    }
  }

  export default Disp;