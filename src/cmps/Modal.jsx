import { ReactComponent as CloseBtn } from '../assets/imgs/x.svg'
import { ReactComponent as Ninja } from '../assets/imgs/ninja.svg'
import { ReactComponent as Arrow } from '../assets/imgs/arrow.svg'

export const Modal = ({onClose}) => {

    const lineBtns = [
        { txt: '1-9 lines', id: '1' },
        { txt: '10-99 lines', id: '2' },
        { txt: '100+ lines', id: '3' }
    ]



    return (
        <section className="modal flex column align-center">
            <button className="close-btn" onClick={onClose}>
                <CloseBtn />
            </button>
            <div className="ninja-img">
                <Ninja />
            </div>
            <h1>How many lines do you need?</h1>
            <p>Let’s find the right VoIP service for you</p>
            <div className="line-btns flex">
                {lineBtns.map(btn => <button key={btn.id} className="line-btn">{btn.txt}</button>)}
            </div>
            <button className="next-btn flex align-center justify-center">
                <span>Next</span>
                <Arrow />
            </button>
        </section>
    )
}