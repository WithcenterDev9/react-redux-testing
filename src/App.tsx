import CountComponent from "./components/count_component";

export default function App() {
    return (
        <>
            <section className="bg-blue-500 text-white p-4 mb-8">
                <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
                <p>This is a simple React app styled with Tailwind CSS.</p>
            </section>
            <section className="flex items-center justify-center">
                <CountComponent />
            </section>
        </>


    );
}