import React, { useState } from "react";
import data from "./moduledata.json";


const SelectComponent = () => {
    const [selectedSemester, setSelectedSemester] = useState(1);

    const semester = data.find((item) => item.id === "8");
    const moduleOptions = semester.semestre[selectedSemester].module.map(
        (module) => ({
            value: module.id,
            label: module.name,
        })
    );

    return (
        <div>
            <h2>Semesters for {semester.name}</h2>
            <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
            >
                {semester.semestre.map((semester) => (
                    <option key={semester.id} value={semester.id}>
                        {semester.name}
                    </option>
                ))}
            </select>
            <h2>module</h2>
            <select>
                {moduleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectComponent;
