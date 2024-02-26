export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t text-center py-5 px-4">
            <small>Copyright &copy; {currentYear}. Mealtime</small>
        </footer>
    );
}
