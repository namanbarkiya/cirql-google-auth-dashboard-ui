export default function Card({
    title,
    detail,
    icon,
    bg,
}: {
    title: string;
    detail: string;
    icon: any;
    bg: string;
}) {
    return (
        <div className={`max-w-sm p-6 rounded-xl ${bg}`}>
            <div className="min-w-max flex justify-end">{icon}</div>
            <a href="#">
                <h5 className="mb-2 text-md tracking-tight text-gray-900">
                    {title}
                </h5>
            </a>
            <p className="mb-3 text-2xl text-black font-semibold ">{detail}</p>
        </div>
    );
}
