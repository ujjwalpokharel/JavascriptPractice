export const ObjectPractice = () => {
    const objectData = {
        name: "ujjwal",
        age: 20
    }
    // if we dont make copy of an object it will pass by refrence it descrirbe by following examples
    const objectData2 = objectData;
/**
 * only primitives value are pass by value 
 * other than primitives like array object are pass by refrence
 */
    objectData2.name = "rohan"

    return (
        <div>
            <h1>firstObject:{objectData.name}:{objectData.age}</h1>
            <h1>firstObject:{objectData2.name}:{objectData2.age}</h1>
        </div>
    )
}