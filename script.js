gsap.registerPlugin(Flip)
const links=document.querySelectorAll('.nav-link a')
const active=document.querySelector('.active-link')
links.forEach(link=>{
    
    link.addEventListener('click',()=>{
        gsap.to(links,{color:'#252525'});
        if(document.activeElement===link){
            gsap.to(link,{color:'#358ae3'})
        }
        //animate avtive-link
        const state=Flip.getState(active)
        link.appendChild(active)
        Flip.from(state,{
            duration:1.2,
            absolute:true,
            ease:'elastic.out(1,0.5)'
        })
    })
    
})

//card animation
const cards=document.querySelectorAll('.cards');
cards.forEach((card,index)=>{
    card.addEventListener('click',()=>{
        const state=Flip.getState(cards)
        console.log(card)
        const isactiveclass=card.classList.contains('active');
        cards.forEach((othercard,otherind)=>{
            othercard.classList.remove('active')
            othercard.classList.remove('nonactive')
            if(!isactiveclass && index!==otherind){
                othercard.classList.add('nonactive')
            }
        })
        if(!isactiveclass)card.classList.add('active')

        
        Flip.from(state,{
            duration:1,
            ease:'expo.out',
            absolute:true,
            onComplete:()=>{
                gsap.to('.cards.active p',{
                    display:block
                })
            }
        })
    })
})