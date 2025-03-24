import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../state/count.slice";

export default function CountComponent() {
    const state = useSelector((state: any) => state.countReducer);
    const dispatch = useDispatch();
    return (
        <section>
            <h1 className="text-2xl">
                Count: {state.count}
                <button onClick={() => dispatch(increment())} className="bg-blue-500 text-white p-2 rounded ml-2">Increment</button>
                <button onClick={() => dispatch(decrement())} className="bg-blue-500 text-white p-2 rounded ml-2">Decrement</button>
                <button onClick={() => dispatch(reset())} className="bg-blue-500 text-white p-2 rounded ml-2">Reset</button>
            </h1>
        </section>
    );
}