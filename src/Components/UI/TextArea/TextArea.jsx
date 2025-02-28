export default function TextArea({ id, type, placeholder, inputText, value, onChange }) {
    return (
        <label htmlFor={id} className="w-full">
            <span className="text-[black] block text-[13px] cursor-pointer">
                {inputText}
            </span>

            <textarea
                className="py-[5px] w-full px-[10px] resize-none h-[150px] rounded-[5px] outline-MainColor border-[2px] border-black text-[black] bg-[white]"
                placeholder={placeholder}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
            ></textarea>
        </label >
    )
}