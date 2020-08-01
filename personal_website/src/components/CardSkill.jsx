import React, {useState} from 'react'
import '../style/CardSkill.css'
import Skill from './Skill'
import bootstrapLogo from '../images/bootstrapLogo.svg'
import cssLogo from '../images/cssLogo.svg'
import nodejsLogo from '../images/nodejsLogo.svg'
import htmlLogo from '../images/htmlLogo.svg'
import postgresSqlLogo from '../images/postgreSqlLogo.svg'
import reactLogo from '../images/reactLogo.svg'
import javascriptLogo from '../images/javascriptLogo.svg'

export default function CardSkill({toggle, styleCardSkill, styleLogoLanguage}) {
    
    const [content, setContent] = useState({
        title: 'HTML',
        body: 'Le HTML est le premier language que j\'ai eu la chance d\'apprendre, il m\'a transmis la passion du développement ! C\'est un outil puissant pour le référencement (SEO), malgré sa simplicité il reste crucial. ',
        color: '#e44d26'
    })
    
    return (
        <div className={toggle? "card skills skills-down" : "card skills skills-up" } style={styleCardSkill}>
            <h3>SKILLS</h3>
            <div className={toggle? "container-logo container-logo-down" : "container-logo container-logo-up"}>
                <Skill
                image = {htmlLogo}
                titleText = {'HTML'}
                bodyText = {'Le HTML est le premier language que j\'ai eu la chance d\'apprendre, il m\'a transmis la passion du développement ! C\'est un outil puissant pour le référencement (SEO), malgré sa simplicité il reste crucial. '}
                colorTitle ={'#e44d26'}
                setContent = {setContent}
                content = {content}
                styleLogoLanguage={styleLogoLanguage}
                />
                <Skill
                image = {cssLogo}
                titleText = {'CSS'}
                bodyText = {'Mais à quoi ressemblerait le web sans le CSS !? Bien que je préfère implémenter des fonctionnalités à un site web, je dois bien avouer que rendre un site visuellement beau et simple d\'utilisation est très gratifiant.'}
                colorTitle ={'#2965f1'}
                setContent = {setContent}
                content = {content}
                styleLogoLanguage={styleLogoLanguage}
                />
                <Skill
                image = {bootstrapLogo}
                titleText = {'Bootstrap'}
                bodyText = {'Bootstrap est une librarie CSS simple d\'utilisation, cela me permet d\'avoir une interface web claire et jolie en peu de temps et de me concentrer sur l\'aspect fonctionnel d\'un site web.'}
                colorTitle ={'#9781b7'}
                setContent = {setContent}
                content = {content}
                styleLogoLanguage={styleLogoLanguage}
                />
                <Skill
                image = {javascriptLogo}
                titleText = {'Javascript'}
                bodyText = {'Le Javacscript est un language incroyable ! C\'est tout simplement LE language qui m\'a fait prendre goût à la programmation !! Rien n\'est plus gratifiant que de rendre un site fonctionnel !'}
                colorTitle ={'#f7df1e'}
                setContent = {setContent}
                content = {content}
                styleLogoLanguage={styleLogoLanguage}
                />
                <Skill
                image = {reactLogo}
                titleText = {'React'}
                bodyText = {"Moderne et efficace, React est une librairie que j'affectionne particulièrement. j'aimerais beaucoup continuer à progresser sur cette librairie dans l'avenir ! Bien utilisé, React permet d'avoir un code bien organiser et plus clair, ce qui me semble INDISPENSABLE !"}
                colorTitle ={'#61dafb'}
                setContent = {setContent}
                content = {content}
                styleLogoLanguage={styleLogoLanguage}
                />
                <Skill
                image = {nodejsLogo}
                titleText = {'Node JS'}
                bodyText = {'Node JS est un framework Javascript qui me permet de créer des RESTful API via la librairie express et tout ça, en codant en JAVASCRIPT, mon language de programmation préféré !'}
                colorTitle ={'#97de01'}
                setContent = {setContent}
                content = {content}
                styleLogoLanguage={styleLogoLanguage}
                />
                <Skill
                image = {postgresSqlLogo}
                titleText = {'Postgres SQL'}
                bodyText = {'Sans bases de données, le web n\'aurait pas autant d\'importance qu\'il n\'en a actuellement, et le SQL me semble être le language idéale pour les gérer. Bien que simple au premier abord, le SQL est en réalité très complexe et très puissant !'}
                colorTitle ={'#6d95b5'}
                setContent = {setContent}
                content = {content}
                styleLogoLanguage={styleLogoLanguage}
                />
            </div>
            <div className="container-info" style={toggle?{ margin: '2vw 3vw'}:{margin:'2vw 6vw'}}>
                <h3 style={{color : content.color}}>{content.title}</h3>
                <p>{content.body}</p>
            </div>
           
        </div>
    )
}
