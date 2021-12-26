import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "../components/Profile/AboutProfile/ProfileStatus";

const updateStatus = (status: string) => undefined

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'super status'} updateProfileStatus={updateStatus}/>)
        expect(component.root.instance.state.inputValue).toBe('super status')
    });

    test('span should be displayed', async () => {
        const component = create(<ProfileStatus status={'super status'} updateProfileStatus={updateStatus}/>)
        const root = component.root;
        let span = await root.findByType("span");
        expect(span).not.toBeNull();
    })

    test('span should contain status test', async () => {
        const component = create(<ProfileStatus status={'super status'} updateProfileStatus={updateStatus}/>)
        const root = component.root;
        let span = await root.findByType("span");
        expect(span.children[0]).toBe('super status');
    });

    test('input should be displayed instead of span', async () => {
        const component = create(<ProfileStatus status={'super status'} updateProfileStatus={updateStatus}/>)
        const root = component.root;
        let span = await root.findByType("span");
        span.props.onDoubleClick();
        let input = await root.findByType("input");
        expect(input.props.value).toBe('super status');
    });

    test('callback should be called', async () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'super status'} updateProfileStatus={mockCallback}/>);
        const instance = component.root.instance;
        instance.state.inputValue = 'new Status';
        instance.deactivateEdit();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})