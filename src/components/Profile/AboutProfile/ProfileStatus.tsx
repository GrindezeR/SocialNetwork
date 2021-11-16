import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    // Так создается state в классовых компонентах
    state = {
        editMode: false,
        status: this.props.status,
    }

    //Важно использовать тут стрелочную функцию, чтобы не потерять контекст this
    // т.к. контекст стреклки определяется в момент инициализации,
    // в таком случае это будет наш объект/компонента
    activateEdit = () => {
        // Так state можно модифицировать, setState - асинхронная операция
        this.setState({
            editMode: true,
        })
    }

    deactivateEdit = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateProfileStatus(this.state.status);
    }

    deactivateEditEnter = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            this.deactivateEdit();
        }
    }

    render() {
        const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            this.setState({
                status: e.currentTarget.value
            })
        }

        const selectAllHandler = (e:ChangeEvent<HTMLInputElement>) => {
          e.currentTarget.select();
        }

        return (
            <>
                {this.state.editMode ?
                    <input value={this.state.status}
                           autoFocus
                           onBlur={this.deactivateEdit}
                           onChange={onChangeInputHandler}
                           onKeyPress={this.deactivateEditEnter}
                           onFocus={selectAllHandler}
                    />
                    :
                    <span className={s.status}
                          onDoubleClick={this.activateEdit}>
                {this.props.status || 'No status'}
                </span>
                }
            </>
        );
    }
}

// // Functional Component
// export const ProfileStatus = (props: ProfileStatusPropsType) => {
//     let {status} = props
//
//     if (status === null) {
//         status = 'Type status'
//     }
//
//     const [inputValue, setInputValue] = useState<string>(status);
//     const [editMod, setEditMod] = useState<boolean>(false);
//
//     const editON = () => setEditMod(true)
//
//     const editOFF = () => setEditMod(false)
//
//     return (
//         <>
//             {editMod ?
//                 <input value={status}
//                        autoFocus
//                        onBlur={editOFF}
//                 />
//                 :
//                 <span className={s.status}
//                       onDoubleClick={editON}>
//                 {status}
//                 </span>
//             }
//         </>
//     );
// }