// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios

.get("https://lambda-times-backend.herokuapp.com/topics")
.then((res) => {
    console.log(res)

    res.data.topics.forEach(topic => {
        const tab = document.createElement("div")
        tab.classList.add("tab")
        tab.textContent = topic

        let topics = document.querySelector(".topics")
        topics.append(tab)
    })
})
.catch((err) => {
    console.log(`You hit an error: ${err}`);
  });
