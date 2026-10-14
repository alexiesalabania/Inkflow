export default function FieldError({ message }) {
    return message ? <p className="text-[12.5px] font-medium text-red-500">{message}</p> : null;
}
