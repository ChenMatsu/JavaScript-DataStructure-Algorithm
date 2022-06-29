function CountDown(num) {
    if (num === 0) {
        console.log("Done");
        return;
    }
    console.log(num);
    CountDown(--num);
}

CountDown(5);
