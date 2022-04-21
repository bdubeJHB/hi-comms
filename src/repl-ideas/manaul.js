

// let Timer = () => {
//     const [seconds, setSeconds] = MyReact.useState(0);
//
//     function tick() {
//         setSeconds(seconds + 1);
//     }
//
//     function render() {
//         console.log("Duration since start: ", {seconds});
//     }
//
//     return {tick, render};
// }


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
                console.log(`newValue: ${newValue}\nValue: ${_val}`);
//                return _val;
            }
        	console.log(_val);
            return [_val, setState];
        }
    }
})()


let [value, setValue] = MyReact.useState(1);
console.log(typeof setValue);
console.log(value);
setValue(value + 1);
console.log(value);

//
//
// let MyTimer = MyReact.renderComponent(Timer);
//
// let stopWatch = setInterval(() => {
//     if(MyTimer.seconds >= 5 * 1000) {
//         clearInterval(stopWatch);
//     }
//
//     MyTimer.tick();
//     MyTimer.render();
// }, 1000);
