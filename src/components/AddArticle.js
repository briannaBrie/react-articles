import {useState} from 'react'


const AddArticle = ({onAdd}) => {
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[content, setContent] = useState('')
    const[unread, checkUnread] = useState(true)

const onSubmit = (e) =>{
    //should not submit to a page
    e.preventDefault()

    //validation: if title is empty
    if(!title){
        alert('Please add an article')
        return
    }

    onAdd({title, description, content, unread})
    setTitle('')
    setDescription('')
    setContent('')
    checkUnread(true)
}

    return (
        //add an add article form
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Title</label>
                <input type = 'text'placeholder = 'add title' 
                value = {title} onChange = {(e) =>setTitle(e.target.value) }/>
            </div>            
            <div className = 'form-control'>
                <label>Description</label>
                <input type = 'text'placeholder = 'add description'
                value = {description} onChange = {(e) =>setDescription(e.target.value) }/>
            </div>
            <div className = 'form-control'>
                <label>Content</label>
                <input type = 'text'placeholder = 'enter content'
                value = {content} onChange = {(e) =>setContent(e.target.value) }/>
            </div>
            <div className = 'form-control form-control-check'>
                <label>Unread</label>
                <input type = 'checkbox' checked = {unread}
                value = {unread} onChange = {(e) =>checkUnread(e.currentTarget.checked) }/>
            </div>

            <input type = 'submit' value = 'Save' 
            className = 'btn btn-block'/>
        </form>
    )
}

export default AddArticle
