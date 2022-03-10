import { render, screen } from '@testing-library/react';
import Servers from './Servers';
import userEvent from '@testing-library/user-event';

test ('server button rendered correctly', () => {
    const data = [
        {
            Name: "test-server-1",
            server_id: "1"
        },
        {
            Name: "test-server-2",
            server_id: "2"
        }
    ]


    const res = 1
    const onClick = (id) => {
        res = id
    }

    
    const { container } = render(<Servers servers = {data} onPickServer = {onClick} />)

    expect(container.getElementsByClassName('btn').length).toBe(2)
    expect(container.getElementsByClassName('btn').item(0).textContent).toBe("test-server-1")
    expect(container.getElementsByClassName('btn').item(1).textContent).toBe("test-server-2")
})

test ('buttonClick', () => {
    const data = [
        {
            Name: "test-server-1",
            server_id: "1"
        },
    ]

    var res = 100
    const onClick = (id) => {
        res = id
    }

    const { container } = render(<Servers servers = {data} onPickServer = {onClick} />)
    userEvent.click(container.getElementsByClassName('btn').item(0))

    expect(res).toBe('1')
})

test ('no server', () => {
    const data = []

    
    const onClick = (id) => {
        res = id
    }
    const { container } = render(<Servers servers = {data} onPickServer = {onClick} />)

    expect(container.getElementsByClassName('btn').length).toBe(0)
})