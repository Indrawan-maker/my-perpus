import img from "../assets/n5.webp"

export default function NullSearch() {
    return (
        <>
        <div className="grid justify-center items-center p-12">
        <img 
        src={img} 
        className="w-52 object-cover m-auto"
        />
        <h2 className="text-2xl text-slate-600 m-auto font-semibold">Buku tidak ditemukan!</h2>
        </div>
        </>
    )
}