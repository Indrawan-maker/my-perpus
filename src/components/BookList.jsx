import image from "../assets/book-a.webp";

export default function BookList({ books, onClick }) {
    return (
        <div className="container mx-auto px-12 py-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                {books.map((book, index) => (
                    <div
                        key={index}
                        className="bg-white border-slate-200 rounded-xl shadow-sm hover:shadow-md group transition-all duration-300 leading-tight mb-2 p-6"
                    >
                        <div className="flex items-center gap-6">
                            <img src={image} className="max-w-28 object-cover" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-slate-800 text-lg leading-tight mb-4">
                                    {book.title}
                                </h3>
                                <div className="md:flex sm:grid justify-between items-center">
                                <p className="text-sm text-slate-600">{book.author}</p>
                                <button
                                    onClick={() => onClick(index)}
                                    className="hover:text-slate-950 transition-all cursor-pointer text-orange-500 text-sm tracking-[1px] "
                                    >
                                    hapus
                                </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}