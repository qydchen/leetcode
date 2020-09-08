import rxjs from "rxjs";

const observable = new rxjs.Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log("just before subscribe");
observable.subscribe({
    next(x) {
        console.log("got value " + x);
    },
    error(err) {
        console.error("something wrong occured: " + err);
    },
    complete() {
        console.log("done");
    },
});
console.log("just after subscribe");
