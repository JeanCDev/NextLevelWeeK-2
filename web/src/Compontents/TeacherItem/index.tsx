import React from 'react';

import './styles.css';

import whatsApp from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher{
        id:number,
        avatar: string,
        bio: string,
        cost: number,
        name: string,
        subject: string,
        whatsapp: string
    }

interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection() {
        window.open(`https://wa.me/${teacher.whatsapp}`);
        api.post('connections',{
            user_id: teacher.id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço por hora <strong>{teacher.cost}</strong>
                </p>

                <button onClick={createNewConnection} type="button">
                    <img src={whatsApp} alt="Entrar em contato" />
                        Entrar em contato
                    </button>
            </footer>
        </article>
    )
}

export default TeacherItem;