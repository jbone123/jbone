const PENDING = "pending";
const SUCCESS = "fullfilled";
const FAIL = "rejected";
class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    let resolve = value => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = SUCCESS;
      }
    };
    let reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = FAIL;
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    if (this.status === SUCCESS) {
      onFulfilled(this.value);
    }
    if (this.status === FAIL) {
      onRejected(this.reason);
    }
  }
}
module.exports = Promise;
