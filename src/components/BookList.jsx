export default function BookList({ books }) {
    return (
        <div className="container mx-auto px-6 py-8">
            <div>
            {books.map((book, index) => 
            (
                <div key={index} className="bg-white border-slate-200 rounded-xl shadow-sm hover:shadow-md group transition-all duration-300 leading-tight mb-2">
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                    <div>
                        <p>{book.author}</p>
                    </div>
                </div>
            )
            )}
            </div>
        </div>
    )
}