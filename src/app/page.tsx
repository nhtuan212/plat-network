import Button from "@/components/Button";

export default function Home() {
    return (
        <main className="h-screen py-4">
            <div className="container mx-auto">
                <div className="h-screen flex justify-center items-center">
                    <Button size="lg">Click me</Button>
                </div>
            </div>
        </main>
    );
}
