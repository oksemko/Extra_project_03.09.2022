import { useState } from "react"
import { getAnswer } from "components/services/api";
import { nanoid } from "nanoid";
import { addContact } from "components/redux/users/actions";
import { useDispatch } from "react-redux";
export const AddContactPage = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const dispatch = useDispatch();

    const changeInput = (e) => {
        e.target.name === "name" ? setName(e.target.value) : setAge(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const status = await getAnswer();        
        const contact = { name, age, id: nanoid(), avatar: name, status };
        dispatch(addContact(contact));
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={changeInput} value={name} />
            <input type="number" name="age" onChange={changeInput} value={age}/>
            <button type="submit">Add Contact</button>
        </form>
    )
}