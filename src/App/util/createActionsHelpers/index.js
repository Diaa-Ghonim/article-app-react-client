
/**
 * important tip
 * if you will cache data check it in middlware not commpnenet by getState();
 */
export function createAction(type, ...argNames) {
  const payload = {};
  const action = { type };
  return function (...args) {
    argNames.forEach((arg, index) => {
      payload[argNames[index]] = args[index];
    });
    action['payload'] = payload;
    return action;
  }
}

export function createActionTypes(actionName) {
  actionName = actionName.toUpperCase();
  return {
    LOADING: `${actionName}_LOADING`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
    ACTION: actionName,

  }
}