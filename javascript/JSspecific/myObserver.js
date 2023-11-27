class Observer {
  next(data) {
    console.log("received next:", data);
  }

  error(error) {
    console.error("received error:", error);
  }

  complete() {
    console.log("observation complete");
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.next(data));
  }

  async performAsyncAction() {
    try {
      const data = await this.getDataFromAsyncSource();
      this.notifyObservers(data);
    } catch (error) {
      this.notifyError(error);
    } finally {
      this.notifyComplete();
    }
  }

  async getDataFromAsyncSource() {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("async data"); // mocking an async data source
      }, 2000);
    });
    return data;
  }

  notifyError(error) {
    this.observers.forEach((observer) => observer.error(error));
  }

  notifyComplete() {
    this.observers.forEach((observer) => observer.complete());
  }
}

const observer1 = new Observer();
const observer2 = new Observer();

const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);

// Trigger the asynchronous action
subject.performAsyncAction();
