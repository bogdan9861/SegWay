const tabs = (headerSelector, tabsSelector, contentSelector) => {
    const 
    	header = document.querySelector(headerSelector),
    	tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);

    header.addEventListener('click', (e) => {
        const target = e.target;

        const removeActive = () => {
        	tabs.forEach(el => {
        		el.classList.remove('active');
        	})

        	content.forEach(el => {
        		el.classList.remove('active');
        	})
        }

        const addActive = (i) => {
        	removeActive();

        	tabs[i].classList.add('active');
        	content[i].classList.add('active');
        }
 
        tabs.forEach((el, i) => {
        	if (el == target || el == target.parentNode){
        		addActive(i);
        	}
        })


        // if (target.className != 'advantages__tab') {
        //     target.parentNode.classList.add('active');
        // } else {
        //     target.classList.add('active');
        // }
    })

}

export default tabs;