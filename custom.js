$( document ).ready(function() {
	
var targetedNode = holder[0];

	   // Create an observer instance linked to the callback function
    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){

                if (item.addedNodes.length > 0){
                    alert('new div is being added!');
                }

                if (item.removedNodes.length > 0){
                    alert('div has been removed'); 
                }

            }
        });
    });

    // Start observing the target node for configured mutations
    observer.observe(targetedNode, { 
        attributes: true, 
        childList: true, 
        subtree: true 
    });	



});
