import {addPost, deletePost, InitialStateType, profileReducer} from "../Redux/Profile-reducer";

let state: InitialStateType
beforeEach(() => {
    state = {
        postData: [
            {id: '1', message: 'Hello ALL!', likesCount: 15},
            {id: '2', message: 'How are you?', likesCount: 30},
            {id: '3', message: 'LOL', likesCount: 230},
        ],

        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: ''
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 0,
            photos: {
                small: '',
                large: ''
            }
        },
        status: '',
        error: '',
    }
})

test('new post should be added', () => {
    let action = addPost('Test')
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
    expect(newState.postData[0].message).toBe('Test');
    expect(newState.postData[0].likesCount).toBe(0);
    expect(newState.postData.filter(p => p.id === newState.postData[0].id).length).toBe(1);
});

test('delete post, length should be decreased', () => {
    let action = deletePost('3');
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(2);
    expect(newState.postData[1].id).toBe('2');
});