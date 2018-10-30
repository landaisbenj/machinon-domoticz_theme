$( document ).ready(function() {


	   // Create an observer instance linked to the callback function
    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){

                if (item.addedNodes.length > 0){
                    console.log('new div is being added! ' + item );
                }

                if (item.removedNodes.length > 0){
                    console.log('div has been removed ' + item ); 
                }

            }
        });
    });

    // Start observing the target node for configured mutations
    observer.observe( document, { 
        attributes: true, 
        childList: true, 
        subtree: true 
    });	



});
