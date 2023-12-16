function submitHandler(evt){
    evt.preventDefault();
    console.log('Submitted the form!');
}

export default function Form() {
    return(
        <form onSubmit={submitHandler}>
            <button>Submit</button>
        </form>
    );
}