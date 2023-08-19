function GreyBtn({ text }: { text: string }) {
    return (
        <>
            <button className="rounded-none bg-adarkgrey m-auto p-3 font-medium text-lg text-awhite justify-center">{text}</button>
        </>
    )
}

export default GreyBtn;