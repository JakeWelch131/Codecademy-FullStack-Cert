const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
}

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather' : {
      return {...state, 
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1
      };
    }
    case 'travel' : {
      const days = action.payload;
      if (state.supplies < 0) {
        return state
      }
      else {
        return {...state, 
          supplies: state.supplies - days * 20,
          distance: state.distance + days * 10,
          days: state.days + days
        };
      }
    }
    case 'tippedWagon' : {
      return {...state, 
      supplies: state.supplies - 30,
      distance: state.distance,
      days: state.days + 1
      };
    }
    default: {
      return state;
    }
  }
};

let wagon = reducer(undefined, {});
const addAction = {type: 'travel', payload: 1};
wagon = reducer(wagon, addAction)
console.log(wagon);
wagon = reducer(wagon, {type: 'gather'});
console.log(wagon);
wagon = reducer(wagon, {type: 'tippedWagon'});
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);
