export function Divider({ icon, label }) {
    return (
        <div className="flex flex-column mt-5 mb-3 text-700">
            <div className="flex align-content-center mb-1">
                <i className={icon}></i>
                <span className="ml-2">{label}</span>
            </div>
            <div style={{ height: '1px', width: '100%' }} className='bg-gray-500' ></div>
        </div >
    )
}