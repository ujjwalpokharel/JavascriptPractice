interface PracticeData {
    name: string;
    age: number
}
export const ArrayMapPractice = () => {
    const practiceArray: PracticeData[] = [{ name: "ujjwal", age: 20 }, { name: "rohan", age: 16 }]

    return (
        <div>
            {practiceArray.map((value) => <>
                <h1>

                    {value.name}:{value.age}
                </h1>

            </>)}
        </div>
    )
}