import React, {useState, useRef} from 'react'
import '../style/CardSkill.css'
import Skill from './Skill'
import bootstrapLogo from '../images/bootstrapLogo.svg'
import cssLogo from '../images/cssLogo.svg'
import nodejsLogo from '../images/nodejsLogo.svg'
import htmlLogo from '../images/htmlLogo.svg'
import postgresSqlLogo from '../images/postgreSqlLogo.svg'
import reactLogo from '../images/reactLogo.svg'
import javascriptLogo from '../images/javascriptLogo.svg'

export default function CardSkill({toggle}) {
    
    const [content, setContent] = useState({
        title: 'HTML',
        body: 'Lorem dshjfkds fdsklfioza hfdskjfh fdshjkj fdshkjhfsd  fsdhkjfsdh fjkfdshjk HTML',
        color: '#e44d26'
    })
    
    console.log(toggle);
    
    return (
        <div className={toggle? "card skills skills-down" : "card skills skills-up" }>
            <h2>SKILLS</h2>
            <div className={toggle? "container-logo container-logo-down" : "container-logo container-logo-up"}>
                <Skill
                image = {htmlLogo}
                titleText = {'HTML'}
                bodyText = {'Lorem dshjfkds fdsklfioza hfdskjfh fdshjkj fdshkjhfsd  fsdhkjfsdh HTMl'}
                colorTitle ={'#e44d26'}
                setContent = {setContent}
                content = {content}
                />
                <Skill
                image = {cssLogo}
                titleText = {'CSS'}
                bodyText = {'Lorem dshjfkds fdsklfioza hfdskjfh fdshjkj fdshkjhfsd  fsdhkjfsdh CSS'}
                colorTitle ={'#2965f1'}
                setContent = {setContent}
                content = {content}
                />
                <Skill
                image = {bootstrapLogo}
                titleText = {'Bootstrap'}
                bodyText = {'Lorem dshjfkds fdsklfioza hfdskjfh fdshjkj fdshkjhfsd  fsdhkjfsdh Bootstrap'}
                colorTitle ={'#9781b7'}
                setContent = {setContent}
                content = {content}
                />
                <Skill
                image = {javascriptLogo}
                titleText = {'Javascript'}
                bodyText = {'Lorem dshjfkds fdsklfioza hfdskjfh fdshjkj fdshkjhfsd  fsdhkjfsdh Javascript'}
                colorTitle ={'#f7df1e'}
                setContent = {setContent}
                content = {content}
                />
                <Skill
                image = {reactLogo}
                titleText = {'React'}
                bodyText = {"React est une librairie que j'affectionne particulièrement. Moderne et efficace, elle facilite grandement le développement front-end grâce aux components réutilisable, au virtual dom, aux hooks etc. C'est un plaisir de progresser sur  cette librairie ."}
                colorTitle ={'#61dafb'}
                setContent = {setContent}
                content = {content}
                />
                <Skill
                image = {nodejsLogo}
                titleText = {'Node JS'}
                bodyText = {'Lorem dshjfkds fdsklfioza hfdskjfh fdshjkj fdshkjhfsd  fsdhkjfsdh Node'}
                colorTitle ={'#97de01'}
                setContent = {setContent}
                content = {content}
                />
                <Skill
                image = {postgresSqlLogo}
                titleText = {'Postgres SQL'}
                bodyText = {'Lorem dshjfkds fdsklfioza hfdskjfh fdshjkj fdshkjhfsd  fsdhkjfsdh Postgres'}
                colorTitle ={'#6d95b5'}
                setContent = {setContent}
                content = {content}
                />
            </div>
            <div className="container-info" style={toggle?{ margin: '2vw 3vw'}:{margin:'2vw 6vw'}}>
                <h3 style={{color : content.color}}>{content.title}</h3>
                <p>{content.body}</p>
            </div>
           
        </div>
    )
}
