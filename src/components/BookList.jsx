export default function BookList({ books, onClick }) {

    return (
        <div className="container mx-auto px-12 py-8 min-w-sm">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {books.map((book, index) => 
            (
                <div key={index} className="bg-white border-slate-200 rounded-xl shadow-sm 
                                            hover:shadow-md group transition-all duration-300 leading-tight mb-2 p-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-800 text-lg leading-tight mb-2">{book.title}</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 text-slate-600">
                        <p className="text-sm">{book.author}</p>
                    <button
                    onClick={() => onClick(index)}
                    className="hover:text-red-600 transition-all cursor-pointer leading-tight p-2 text-sm 
                    tracking-[1px]">Remove</button>
                    </div>
                </div>
            )
            )}
            </div>
        </div>
    )
}