import "./Discount.css";

function Discount(): JSX.Element {
    const discount = 10
    return (
        <div className="Discount Box">
			{isFirstDayOfMonth() && <p>{discount}% הנחה על כל הנעליים רק היום-{getDate()} ורק עד סוף  היום  </p>}
        </div>
    );
}

/**
 * If it is the first day of the month show discount otherwise don't
 */

function isFirstDayOfMonth(): true | undefined {
    let now = new Date()
   //if its the first day of the month show discount
    console.log("now", now.getDay());
    if (now.getDay() === 6) {
        return true
    }


}

function getDate(): string {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const now = new Date()
    console.log(now.getDate())
    const currentDay = days[now.getDay()]
    const currentMonth= months[now.getMonth()]
    const currentYear = now.getFullYear()
    return currentDay + ', ' + currentMonth + ' ' + now.getDate() + ', ' + currentYear
}


export default Discount;
