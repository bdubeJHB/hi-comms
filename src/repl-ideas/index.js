// The actual module (I think...  my attempt at using the module pattern)
const MyReact = (function() {
    let _val;

    return {
        renderComponent(Component) {
            const Comp = Component();
            Comp.render();
            return Comp;
        },
        useState(startingValue) {
            _val = _val || startingValue;
            function setState(newValue) {
                _val = newValue;
            }
            return [_val, setState];
        }
    }
})()


// The timer function expected by MyReact
let Timer = () => {
    const [seconds, setSeconds] = MyReact.useState(0);

    function tick() {
        setSeconds(seconds + 1);
    }

    function render() {
        console.log("Duration since start: ", {seconds});
    }

    return {tick, render, seconds};
}


// Declaring the timer I want to use
let myTimer = MyReact.renderComponent(Timer);

let stopWatch = setInterval(() => {
    if(myTimer.secondsVar >= 5 * 1000) {  // This does not work. Scoping issue? Export issue?
        clearInterval(stopWatch);
    }

    myTimer.tick();  // It does go to this method, it does update the seconds, but ?????
    myTimer.render();  // It does log on console, but somehow, the value is not updated
}, 1000);
