import loader from "../../../public/Spinner.svg"

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-[100%] h-[100%]'>
            <img className='w-[50px]' src={loader} alt="Imagem de loading" />
        </div>
    )
}

export default Loading