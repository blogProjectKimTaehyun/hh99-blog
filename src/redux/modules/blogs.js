const CHANGE_INPUT = 'blogs/CHANGE_INPUT';
const CREATE = "blogs/CREATE";
const DELETE = "blogs/DELETE";
const FIND = 'blogs/FIND';
const UPDATE = 'blogs/UPDATE';


export const onChangeInput = (input) => {
    return {
        type: CHANGE_INPUT,
        input
    }
}
let id = 3;
export const onCreate = (blog) => {
    return {
        type: CREATE,
        blog: {
            id: id++,
            ...blog,
        }
    }
}

export const onDelete = (id) => {
    return {
        type: DELETE,
        id
    }
}

export const onFind = (id) => {
    return {
        type: FIND,
        id
    }
}

export const onUpdate = (id) => {
    return {
        type: UPDATE,
        id
    }
}






const initialState = {
    input: {
        id: id++,
        title: '',
        subtitle: '',
        category: [],
        body: '',
        date: '',
    },
    blogs: [
        {
            id: 1,
            title: '테스트1제목',
            subtitle: '테스트1서브',
            category: ['react', 'cs'],
            body: '테스트1서브타이틀입니다. 너무 행복해요 아하하하하!',
            date: 'DEC 14, 2024',
        },
        {
            id: 2,
            title: '테스트2제목',
            subtitle: '테스트2서브',
            category: ['javascript', 'react'],
            body: '테스트2서브타이틀입니다. 정말 기분이 좋아요 와하하하하!',
            date: 'APR 22, 2028',
        },
    ],
    found: {
        id: 0,
        title: '',
        subtitle: '',
        category: [],
        body: '',
        date: '',
    },
}



const blogs = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input,
            }
        case CREATE:
            return {
                ...state,
                blogs: state.blogs.concat(action.blog),
            };
        case DELETE:
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog.id !== action.id)
            };
        case FIND:
            return {
                ...state,
                found: state.blogs.find((blog) => blog.id === action.id)
            };
        case UPDATE:
            return {
                ...state,
                blogs: state.blogs.map((blog) => blog.id !== action.id ? blog : { ...state.input, id: blog.id })
            }
        default:
            return state;
    }
}

export default blogs