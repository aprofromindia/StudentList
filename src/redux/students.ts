// Actions
const LOAD: 'app/students/LOAD' = 'app/students/LOAD';
const CREATE: 'app/students/CREATE' = 'app/students/CREATE';
const UPDATE: 'app/students/UPDATE' = 'app/students/UPDATE';
const REMOVE: 'app/students/REMOVE' = 'app/students/REMOVE';

export interface Student {
    key: string;
    name: string;
    class: number;
}

const initialState: ReadonlyArray<Student> = [
    { key: '1', name: 'John', class: 2 },
    { key: '2', name: 'Tom', class: 5 }
];

type Action = LoadAction | CreateAction | UpdateAction | RemoveAction;

// Reducer
export default function students(state: ReadonlyArray<Student> = initialState, action: Action) {
    switch (action.type) {
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map(item => item.key === action.payload.key ? action.payload : item);
        case REMOVE:
            return state.filter(item => item.key !== action.payload.key);
        default:
            return state;
    }
}

// Action Creators
interface LoadAction { type: typeof LOAD; }
export function loadStudent(): LoadAction {
    return { type: LOAD };
}

interface CreateAction { type: typeof CREATE; payload: Student; }
export function createStudent(payload: Student): CreateAction {
    return { type: CREATE, payload };
}

interface UpdateAction { type: typeof UPDATE; payload: Student; }
export function updateStudent(payload: Student): UpdateAction {
    return { type: UPDATE, payload };
}

interface RemoveAction { type: typeof REMOVE; payload: Student; }
export function removeStudent(payload: Student): RemoveAction {
    return { type: REMOVE, payload };
}
