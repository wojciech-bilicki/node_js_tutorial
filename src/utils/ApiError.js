function ApiError({ status, msg, field, value }) {
  this.status = status;
  this.msg = msg;
  this.field = field;
  this.value = value;
}

export default ApiError;
