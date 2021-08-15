import * as ReactDOM from 'react-dom'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

const mockData = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
}

let container: HTMLDivElement

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    const tree = 
    ReactDOM.render(
        <Router>
            <Navbar user={mockData}/>
        </Router>, 
        container
    )
})

afterEach(() => {
    document.body.removeChild(container)
    container.remove()
})

it('test sidebar renders', () => {
    const menuItems = container.querySelectorAll('.nav-text')
    expect(menuItems).toHaveLength(3)
})

it('test user profile is desplayed', () => {
    const avatar_name = container.querySelector('.avatar__name')
    const small_text = container.querySelector('.small-text')
    expect(avatar_name?.textContent).toBe(mockData.name)
    expect(small_text?.textContent).toBe(mockData.email)
})