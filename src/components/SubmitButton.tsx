export default function SubmitButton({ label }: {
    label: string;
}) {

    return (
        <button type="submit" id={label}>{label}</button>
    );
}