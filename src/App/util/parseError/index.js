
import '../createActionsHelpers';
export const parseError = (error) => {
  console.log(error);
  if (error.response) {
    const { data, status } = error.response;
    return {
      msg: data.message,
      status: status
    }
  }
  return {
    msg: 'Something went wrong !!',
    status: null
  }
}
