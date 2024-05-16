import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
import DropdownButton from "../../components/buttons/DropdownButton";
import Button from "../../components/buttons/Button";
import FullPostEditor from "../../components/editors/FullPostEditor";
import dayjs from "dayjs";

// Visibility > bool.
const visibility: object = {
    public: true,
    draft: false
}

export default function ViewPost() {
    const [post, setPost] = useState<object|null>(null);
    const [content, setContent] = useState<string>('')
    const [date, setDate] = useState<any>(dayjs())
    const [isPublic, setIsPublic] = useState<boolean>(true)

    // Get post id.
    const { id } = useParams()

    // On content load get the post data via id.
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(data => {
                setPost(data.data)

                if (post) {
                    setIsPublic(visibility[post[visibility as keyof object] as keyof object])
                }
            })
    }, [])

    /**
     * Handle common fields.
     */
    function handleField(val: React.FormEvent<HTMLInputElement>) {
        const input = val.target as HTMLInputElement
    
        const data = {[input.name]: input.value}
    
        if (input.name === 'title') {
            data['slug'] = input.value.trim().replace(/\s/g, '-').toLowerCase()
        }
    
        setPost({...post, ...data})
    }

    function handleContent(value: string) {
        setPost({...post, content: value})

        console.log(post)
    }

    function handleDate(date: any) {
        setPost({...post, publishDate: date})
    }

    function handleVisibility(e: any) {
        setIsPublic(e.target.checked)
    }

    function handleSavePost() {
        axios.patch(`http://localhost:3000/posts/${id}`, post)
            .then(data => {
                console.log(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(post)
    }, [post])

    return (
        <>
            <PageHeader>
                <div className="flex-between">
                    <h1 className="page-title">Edit post</h1>
                    {
                        post ? 
                        <DropdownButton type="primary-btn" text={`Save and ${ isPublic ? 'publish' : 'leave draft'}`} dropdownIcon={<i className="bi bi-arrow-return-left"></i>} onClick={handleSavePost}>
                            <Button text="Save and leave draft"/>
                        </DropdownButton> : ''
                    }
                </div>
            </PageHeader>
            {
                post ? <FullPostEditor 
                    mode="edit"
                    postData={post}
                    isPublic={isPublic}
                    date={dayjs(post['publishDate' as keyof object])}
                    content={post['content' as keyof object]}
                    onChange={handleField} 
                    onContentChange={handleContent} 
                    onDateChange={handleDate}
                    onVisibilityChange={handleVisibility}
                    onSave={handleSavePost}
                /> : ''
            }

        </>
    )
}