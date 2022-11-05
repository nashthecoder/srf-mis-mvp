import React, { useState } from "react";


export default function App() {
    const [form, setForm] = useState({
        birthYear: "",
        age:"",
    }
    );

 // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
        return { ...prev, ...value };
    });
}

    var currentYear = 2021;
    const [birthYear, setbirthYear] = useState(0);
    const [age, setAge] = useState(0);

    function clickHandler() {
        var theAge = currentYear - birthYear;
        setAge(theAge);
    }

    function inputChangeHandler(e) {
        setbirthYear(e);
    }

    return (
        <div className="App">
        <input
                        type="date"
                        className="form-control"
                        id="birthYear"
                        value={form.birthYear}
                        onChange={(e) => updateForm({ birthYear: e.target.value })}
                    />
        {/* <input onChange={(e) => inputChangeHandler(e.target.value)} /> */}
        <div>Age: {age}</div>
        </div>
    );
}
